// Requires node v17.5+, run with:
// node scripts/get-cover-rearrange.mjs --experimental-fetch

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.dirname(SCRIPT_DIR);
const OUTPUT_DIR = path.join(ROOT_DIR, 'src/js/data/');

// Quick & dirty script to add the cover & rearrange songs.
// TODO(Darkpi): properly refactor things so it's easier to do this...
const INPUT_FILE = path.join(OUTPUT_DIR, "2022-05-21.js")

const DB_URL = 'https://storage.googleapis.com/gochiusa-lyrics-quiz-twitter.appspot.com/db/data.json';
const data = await (await fetch(DB_URL)).json();

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

const oldFile = await fs.readFile(INPUT_FILE, {encoding: 'utf-8'});

const oldSongs = eval(/populateGroupSongTag\((\[.*?\])\);/s.exec(oldFile)[1])

const songs = [];

for (const song of data['songs']) {
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
  const data = {
    name: title,
    img,
    opts: {
      character: mappedCharacters,
      subgroup,
    },
  }

  if (oldSongs.find((s) => s.name === data.name)) {
    continue;
  }

  if (song['derived'] != null) {
    if (song['derived'].kind === 'REARRANGED') {
      data.opts['rearrange-ver'] = true;
    } else if (song['derived'].kind === 'SOLO') {
      data.opts['solo-ver'] = true;
    } else if (song['derived'].kind === 'COVER') {
      data.opts['cover-ver'] = true;
    } else {
      continue;
    }
  }

  songs.push(data)
}

// Just manually paste this to the new file :P
console.log(JSON.stringify([...oldSongs, ...songs], null, 2));
