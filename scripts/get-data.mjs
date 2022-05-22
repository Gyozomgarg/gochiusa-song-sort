// Requires node v17.5+, run with:
// node scripts/get-data.mjs --experimental-fetch > src/js/data/YYYY-MM-DD.js

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.dirname(SCRIPT_DIR);
const OUTPUT_DIR = path.join(ROOT_DIR, 'src/js/data/');
const date = (new Date()).toISOString().split('T')[0];
const OUTPUT_FILE = path.join(OUTPUT_DIR, `${date}.js`);

const TEMPLATE = await fs.readFile(path.join(SCRIPT_DIR, "template.js"), {encoding: 'utf-8'});

const DB_URL = 'https://storage.googleapis.com/gochiusa-lyrics-quiz-twitter.appspot.com/db/data.json';
const data = await (await fetch(DB_URL)).json();
// Alternatively for lower nodejs version, just fill the above "data" with
// downloaded JSON file :P
// Comment out the last two lines, put the data.json in the same folder as this
// file, and use the following instead:
// const data = JSON.parse(await fs.readFile(path.join(SCRIPT_DIR, 'data.json'), {encoding: 'utf-8'}));

const CHARACTER_MAP = {
  "ココア": "cocoa",
  "チノ": "chino",
  "リゼ": "rize",
  "シャロ": "syaro",
  "千夜": "chiya",
  "マヤ": "maya",
  "メグ": "megu",
  "青山ブルーマウンテン": "aoyama",
  "モカ": "mocha",
  "フユ": "fuyu",
  "真手凛": "rin",
  "ユラ": "yura",
  "サキ": "saki",
  "タカヒロ": "takahiro"
}

const SUBGROUP_MAP = {
  "Petit Rabbit's": "petit",
  "Petit Rabbit's with beans": "petit-beans",
  "チマメ隊": "chimame",
  "千マメ隊": "chiyamame",
  "振り回され隊": "atmc",
  "看板娘隊": "smc",
  "Happine": "happine",
  "Mistral": "mistral",
  "Diva": "diva"
}

const songs = [];

for (const song of data['songs']) {
  if (song['derived'] != null) {
    // TODO(Darkpi): Do we want to add some derived songs in? For example
    // rearranged / cover ones? Or maybe that should be an option?
    continue;
  }
  const {title, artist, characters, links} = song;
  const img = (() => {
    const link = links['YoutubeMusic'];
    // TODO(Darkpi): Might want to show a fallback image when this happens?
    if (link == null) return '';
    // Transform from https://music.youtube.com/watch?v=xxx to https://www.youtube.com/embed/xxx
    return link.replace('music.', 'www.').replace('watch?v=', 'embed/');
  })();

  const mappedCharacters = characters.map((c) => {
    const r = CHARACTER_MAP[c];
    if (r == null) {
      throw new Error(`Character name ${c} is not found in CHARACTER_MAP, ` +
        'Update the map and template?')
    }
    return r;
  });

  const subgroup = SUBGROUP_MAP[artist] == null ? [] : [SUBGROUP_MAP[artist]];

  songs.push({
    name: title,
    img,
    opts: {
      character: mappedCharacters,
      subgroup,
    },
  })
}

await fs.writeFile(
  OUTPUT_FILE,
  TEMPLATE.replace('{DATE}', date).replace('{SONGS}', JSON.stringify(songs, null, 2)),
  {encoding: 'utf-8'}
);
