/**
 * Returns a readable time string from milliseconds.
 *
 * @param {number} milliseconds
 */
function msToReadableTime(milliseconds) {
  let t = Math.floor(milliseconds / 1000);
  const years = Math.floor(t / 31536000);
  t = t - years * 31536000;
  const months = Math.floor(t / 2592000);
  t = t - months * 2592000;
  const days = Math.floor(t / 86400);
  t = t - days * 86400;
  const hours = Math.floor(t / 3600);
  t = t - hours * 3600;
  const minutes = Math.floor(t / 60);
  t = t - minutes * 60;
  const content = [];
  if (years) content.push(years + "年");
  if (months) content.push(months + "ヶ月");
  if (days) content.push(days + "日");
  if (hours) content.push(hours + "時間");
  if (minutes) content.push(minutes + "分");
  if (t) content.push(t + "秒");
  return content.slice(0, 3).join("");
}

TOO_FEW_SONG_ERROR =
  "エラー：ソートする曲が不足しています。別のフィルターで再試行してください。";
getProgressBarPrompt = (battleNo) => `バトルNo.${battleNo}`;
getProgressBarCompletedPrompt = (battleNo) => `バトルNo.${battleNo} ー 終了！`;

ORDER = "順位";
NAME = "曲名";

getSortCompletedMessage = (date, timeTaken) =>
  `終了時間${date}、所要時間：${msToReadableTime(timeTaken)}`;

DO_ANOTHER_SORTER = "もう一度ソートする？";

IN_PROGRESS_TEXT =
  "この後、「プログレスから読み込む」をクリックすると、このURLで再開または使用することができます。";
FINISHED_TEXT =
  "このURLで結果を共有することもできますし、「最終結果を読み込む」をクリックして再度表示することもできます。";

DOWNLOAD_IMAGE = "画像ダウンロード";
GENERATE_IMAGE = "画像を生成";

// @param {'Autosave'|'Progress'|'Last Result'} saveType
getSaveTypeTranslation = (saveType) => {
  // I... don't know lol, it sounds weird but I'm going to rush finish it first
  // and refine later lol
  if (saveType === "Autosave") return "オートセーブを読み込む";
  if (saveType === "Progress") return "プログレスから読み込む";
  if (saveType === "Last Result") return "最終結果を読み込む";
  throw new Error(`Unknown save type ${saveType}`);
};

const CHARACTER_MAP = {
  cocoa: "ココア",
  chino: "チノ",
  rize: "リゼ",
  syaro: "シャロ",
  chiya: "千夜",
  maya: "マヤ",
  megu: "メグ",
  aoyama: "青山",
  mocha: "モカ",
  fuyu: "フユ",
  rin: "凛",
  yura: "ユラ",
  saki: "サキ",
  takahiro: "タカヒロ",
};

mapCharacterName = (s) => {
  return CHARACTER_MAP[s] ?? s;
};

formatCharacterNames = (characters) => {
  return characters.map((c) => mapCharacterName(c)).join("、");
};

RESET_BUTTON = "リセット";
SHARE_TITLE = "ごちうさ楽曲ソーター";
SHARE_TEXT = "私のごちうさ楽曲ランキングをチェックしてください:";
