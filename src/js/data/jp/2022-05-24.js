dataSetVersion = "2022-05-24"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "キャラクターで絞り込む",
    key: "character",
    tooltip:
      "特定のキャラクターに制限する場合は、これらをチェックしてください。",
    checked: false,
    sub: [
      { name: "ココア", key: "cocoa" },
      { name: "チノ", key: "chino" },
      { name: "リゼ", key: "rize" },
      { name: "シャロ", key: "syaro" },
      { name: "千夜", key: "chiya" },
      { name: "マヤ", key: "maya" },
      { name: "メグ", key: "megu" },
      { name: "青山", key: "aoyama" },
      { name: "モカ", key: "mocha" },
      { name: "フユ", key: "fuyu" },
      { name: "凛", key: "rin" },
      { name: "ユラ", key: "yura" },
      { name: "サキ", key: "saki" },
      { name: "タカヒロ", key: "takahiro" },
    ],
  },
  {
    name: "サブグループで絞り込む",
    key: "subgroup",
    tooltip:
      "特定のサブグループに制限する場合は、これらをチェックしてください。",
    checked: false,
    sub: [
      { name: "Petit Rabbit's", key: "petit" },
      { name: "Petit Rabbit's with Beans", key: "petit-beans" },
      { name: "チマメ隊", key: "chimame" },
      { name: "千マメ隊", key: "chiyamame" },
      { name: "振り回され隊", key: "atmc" },
      { name: "看板娘隊", key: "smc" },
      { name: "Happine", key: "happine" },
      { name: "Mistral", key: "mistral" },
      { name: "Diva", key: "diva" },
    ],
  },
  // TODO Add Covers, Rearrange, and Solos to the dataset
  // },
  {
    name: "グループ曲で除外する",
    key: "group-song",
    tooltip:
      "複数の歌手が参加している楽曲を除外したいは、チェックしてください。",
    checked: false,
  },
  {
    name: "カバー曲で除外する",
    key: "cover-ver",
    tooltip: "カバー曲の除外したいは、こちらをチェックしてください。",
    checked: true,
  },
  {
    name: "リアレンジ曲で除外する",
    key: "rearrange-ver",
    tooltip: "リアレンジ曲の除外したいは、こちらをチェックしてください。",
    checked: true,
  },
  {
    name: "ソロ曲で除外する",
    key: "solo-ver",
    tooltip:
      "グループ曲のソロバージョンを除外したいは、チェックしてください。",
    checked: true,
  },
];

function populateGroupSongTag(songs) {
  return songs.map((song) => ({
    ...song,
    opts: {
      ...song.opts,
      "group-song": song.opts.character.length > 1,
    },
  }));
}

dataSet[dataSetVersion].characterData = populateGroupSongTag([
  {
    name: "「ラビットハウスへ行こうよ♪」のうた",
    img: "",
    opts: {
      character: ["cocoa"],
      subgroup: [],
    },
  },
  {
    name: "@ぐ～るぐるわーるど@",
    img: "https://www.youtube.com/embed/_jcoKGYVi_g",
    opts: {
      character: ["syaro"],
      subgroup: [],
    },
  },
  {
    name: "♡♡ケーキをもうひとつ？",
    img: "https://www.youtube.com/embed/-kLLH9V-5ZQ",
    opts: {
      character: ["chino", "maya", "megu"],
      subgroup: ["chimame"],
    },
  },
  {
    name: "0時過ぎのWonder Cocktail",
    img: "https://www.youtube.com/embed/Q4cB9L7eXWA",
    opts: {
      character: ["rize"],
      subgroup: [],
    },
  },
  {
    name: "3月の扉",
    img: "https://www.youtube.com/embed/WozlxWdXgF0",
    opts: {
      character: ["mocha"],
      subgroup: [],
    },
  },
  {
    name: "一匙のお姫さま物語",
    img: "https://www.youtube.com/embed/BfC2nwDWGYQ",
    opts: {
      character: ["cocoa", "chino", "rize", "chiya", "syaro"],
      subgroup: ["petit"],
    },
  },
  {
    name: "予感のぴんぽん聞こえたら",
    img: "",
    opts: {
      character: ["cocoa", "chino", "rize", "chiya", "syaro"],
      subgroup: ["petit"],
    },
  },
  {
    name: "天空カフェテリア",
    img: "https://www.youtube.com/embed/9Yqf7dz3z2M",
    opts: {
      character: ["cocoa", "chino", "rize", "chiya", "syaro"],
      subgroup: ["petit"],
    },
  },
  {
    name: "天高くおとめこゆる秋",
    img: "https://www.youtube.com/embed/4Ccgd87y-Ac",
    opts: {
      character: ["chiya"],
      subgroup: [],
    },
  },
  {
    name: "幻のルビーラビット事件",
    img: "https://www.youtube.com/embed/-hDouNLlOz4",
    opts: {
      character: ["chino", "syaro"],
      subgroup: [],
    },
  },
  {
    name: "文色徒然",
    img: "https://www.youtube.com/embed/3RQ1OGChOfc",
    opts: {
      character: ["chiya"],
      subgroup: [],
    },
  },
  {
    name: "日常デコレーション",
    img: "https://www.youtube.com/embed/2EX8WpG-H5c",
    opts: {
      character: ["cocoa", "chino", "rize", "chiya", "syaro"],
      subgroup: ["petit"],
    },
  },
  {
    name: "月夜にお砂糖星",
    img: "https://www.youtube.com/embed/wW27HvQOVz8",
    opts: {
      character: ["chiya"],
      subgroup: [],
    },
  },
  {
    name: "木もれび青春譜",
    img: "",
    opts: {
      character: ["chino", "maya", "megu"],
      subgroup: [],
    },
  },
  {
    name: "出かけましょうと答えましょう",
    img: "https://www.youtube.com/embed/2XXtRdHcWbA",
    opts: {
      character: ["chino"],
      subgroup: [],
    },
  },
  {
    name: "未来パズル",
    img: "https://www.youtube.com/embed/ZJp50ZM-eEs",
    opts: {
      character: ["chino"],
      subgroup: [],
    },
  },
  {
    name: "本日は誠にラリルレイン",
    img: "https://www.youtube.com/embed/ryq6DJ5W88I",
    opts: {
      character: ["cocoa", "chino", "rize", "chiya", "syaro", "maya", "megu"],
      subgroup: [],
    },
  },
  {
    name: "甘美コラボレーション",
    img: "https://www.youtube.com/embed/RTrmwbmUYF0",
    opts: {
      character: ["chiya"],
      subgroup: [],
    },
  },
  {
    name: "全天候型いらっしゃいませ",
    img: "https://www.youtube.com/embed/nRq8mf4LNgc",
    opts: {
      character: ["cocoa", "chino"],
      subgroup: [],
    },
  },
  {
    name: "色葉おしながき",
    img: "https://www.youtube.com/embed/Dhh9aZ3R5Kw",
    opts: {
      character: ["chiya"],
      subgroup: [],
    },
  },
  {
    name: "冷静とモフモフの国境線",
    img: "https://www.youtube.com/embed/mNi70UeP94k",
    opts: {
      character: ["rize"],
      subgroup: [],
    },
  },
  {
    name: "私と浪漫ていすと",
    img: "https://www.youtube.com/embed/7XEIUGBP4m8",
    opts: {
      character: ["chiya"],
      subgroup: [],
    },
  },
  {
    name: "足音タルトタタン♪",
    img: "https://www.youtube.com/embed/MiSP7CNI568",
    opts: {
      character: ["megu", "syaro"],
      subgroup: [],
    },
  },
  {
    name: "宝箱のジェットコースター",
    img: "https://www.youtube.com/embed/XO1mJbzctm8",
    opts: {
      character: ["cocoa", "chino", "rize", "chiya", "syaro"],
      subgroup: ["petit"],
    },
  },
  {
    name: "怪盗ラパン -The Phantom Thief Lapin-",
    img: "https://www.youtube.com/embed/x7UrXYQub14",
    opts: {
      character: ["syaro"],
      subgroup: [],
    },
  },
  {
    name: "空色サロン",
    img: "https://www.youtube.com/embed/-oO-Cc1WYHI",
    opts: {
      character: ["syaro"],
      subgroup: [],
    },
  },
  {
    name: "思い出花火",
    img: "https://www.youtube.com/embed/wpy_OJhgGSU",
    opts: {
      character: ["syaro"],
      subgroup: [],
    },
  },
  {
    name: "流星ガーデン",
    img: "https://www.youtube.com/embed/w1gjfK4ybz0",
    opts: {
      character: ["aoyama"],
      subgroup: [],
    },
  },
  {
    name: "秋色かくれんぼ",
    img: "https://www.youtube.com/embed/3aWCjQIUypI",
    opts: {
      character: ["megu"],
      subgroup: [],
    },
  },
  {
    name: "風の便り",
    img: "https://www.youtube.com/embed/KPftGtE6fvY",
    opts: {
      character: ["aoyama"],
      subgroup: [],
    },
  },
  {
    name: "夏休みページ",
    img: "https://www.youtube.com/embed/CnAeHiDA3cE",
    opts: {
      character: ["maya"],
      subgroup: [],
    },
  },
  {
    name: "振り向けば月、いいえ団子。",
    img: "",
    opts: {
      character: ["chiya"],
      subgroup: [],
    },
  },
  {
    name: "紙ヒコーキレター",
    img: "https://www.youtube.com/embed/vplOoWyhvsQ",
    opts: {
      character: ["maya"],
      subgroup: [],
    },
  },
  {
    name: "素敵なダンスタイム",
    img: "https://www.youtube.com/embed/RAN4fFnLjyk",
    opts: {
      character: ["megu"],
      subgroup: [],
    },
  },
  {
    name: "無敵のMidnight crew",
    img: "https://www.youtube.com/embed/Zv_SNddb96E",
    opts: {
      character: ["rize"],
      subgroup: [],
    },
  },
  {
    name: "新作のしあわせはこちら!",
    img: "https://www.youtube.com/embed/cvA9xxIAvlM",
    opts: {
      character: ["chino"],
      subgroup: [],
    },
  },
  {
    name: "夢・もしもしもしも?",
    img: "https://www.youtube.com/embed/H6T07oQFQzc",
    opts: {
      character: ["syaro"],
      subgroup: [],
    },
  },
  {
    name: "夢見FLAVOR",
    img: "https://www.youtube.com/embed/oKsII2JXl38",
    opts: {
      character: ["syaro", "aoyama"],
      subgroup: [],
    },
  },
  {
    name: "夢見るアプレミディ",
    img: "https://www.youtube.com/embed/y3ArhspDONc",
    opts: {
      character: ["rize"],
      subgroup: [],
    },
  },
  {
    name: "銀のスプーン",
    img: "",
    opts: {
      character: ["saki"],
      subgroup: [],
    },
  },
  {
    name: "魅惑のダイヤモンドティーカップ事件",
    img: "https://www.youtube.com/embed/Ukf5eGtdY9c",
    opts: {
      character: ["cocoa", "syaro"],
      subgroup: [],
    },
  },
  {
    name: "頼れる私でいられるように",
    img: "https://www.youtube.com/embed/d3q6qbDte54",
    opts: {
      character: ["rize"],
      subgroup: [],
    },
  },
  {
    name: "薔薇色チュチュとピルエット",
    img: "https://www.youtube.com/embed/Qv4yzs8dBBs",
    opts: {
      character: ["rize"],
      subgroup: [],
    },
  },
  {
    name: "鏡合わせのアンビバレット",
    img: "https://www.youtube.com/embed/AS2pzPW3d5U",
    opts: {
      character: ["rize"],
      subgroup: [],
    },
  },
  {
    name: "麗しのShooting star",
    img: "https://www.youtube.com/embed/48kYIZ76s5U",
    opts: {
      character: ["syaro"],
      subgroup: [],
    },
  },
  {
    name: "魔女と使い魔のふしぎな館",
    img: "https://www.youtube.com/embed/oRmmUY1UAmQ",
    opts: {
      character: ["chiya", "maya", "megu"],
      subgroup: ["chiyamame"],
    },
  },
  {
    name: "魔法少女チノ",
    img: "https://www.youtube.com/embed/Z9C0jb7iTcc",
    opts: {
      character: ["chino"],
      subgroup: [],
    },
  },
  {
    name: "a cup of happiness",
    img: "https://www.youtube.com/embed/VDBTvjm5k-U",
    opts: {
      character: ["chino"],
      subgroup: [],
    },
  },
  {
    name: "Bitter Tea:Time",
    img: "https://www.youtube.com/embed/y_DmjKBTac0",
    opts: {
      character: ["mocha"],
      subgroup: [],
    },
  },
  {
    name: "CANDY COLOR DAYS",
    img: "https://www.youtube.com/embed/sQ1RhKlWO04",
    opts: {
      character: ["chino", "maya", "megu"],
      subgroup: ["chimame"],
    },
  },
  {
    name: "COCOATIC BAR",
    img: "https://www.youtube.com/embed/IYocNDva8LM",
    opts: {
      character: ["cocoa"],
      subgroup: [],
    },
  },
  {
    name: "Daydream cafe",
    img: "https://www.youtube.com/embed/F39UmVEZw0o",
    opts: {
      character: ["cocoa", "chino", "rize", "chiya", "syaro"],
      subgroup: ["petit"],
    },
  },
  {
    name: "Dear Me",
    img: "https://www.youtube.com/embed/BONvi7R60mY",
    opts: {
      character: ["rize"],
      subgroup: [],
    },
  },
  {
    name: "Everyday Level Up!!",
    img: "https://www.youtube.com/embed/_HUixcD4r6k",
    opts: {
      character: ["maya"],
      subgroup: [],
    },
  },
  {
    name: "Eを探す日常",
    img: "https://www.youtube.com/embed/-4Hh6GrqOrI",
    opts: {
      character: ["rize", "syaro"],
      subgroup: [],
    },
  },
  {
    name: "FANCY SWEET TIME",
    img: "https://www.youtube.com/embed/lBMtM68EVnk",
    opts: {
      character: ["chiya", "maya", "megu"],
      subgroup: ["chiyamame"],
    },
  },
  {
    name: "Fantastic Rabbit House",
    img: "https://www.youtube.com/embed/s7XY6odhCUI",
    opts: {
      character: ["mocha", "aoyama", "takahiro"],
      subgroup: [],
    },
  },
  {
    name: "Foooo are you?",
    img: "https://www.youtube.com/embed/lNJRcPjJqJo",
    opts: {
      character: ["yura"],
      subgroup: [],
    },
  },
  {
    name: "FUN!FUN!",
    img: "https://www.youtube.com/embed/uotlu_Ep9pc",
    opts: {
      character: ["chino"],
      subgroup: [],
    },
  },
  {
    name: "Growth Record",
    img: "https://www.youtube.com/embed/QgsF-YaPZhw",
    opts: {
      character: ["takahiro"],
      subgroup: [],
    },
  },
  {
    name: "Happy Holiday",
    img: "https://www.youtube.com/embed/KVwuZxsagJo",
    opts: {
      character: ["syaro"],
      subgroup: [],
    },
  },
  {
    name: "Have a Nice Drink",
    img: "",
    opts: {
      character: ["takahiro"],
      subgroup: [],
    },
  },
  {
    name: "Hi Hi High☆",
    img: "",
    opts: {
      character: ["syaro"],
      subgroup: [],
    },
  },
  {
    name: "Love & Gun",
    img: "https://www.youtube.com/embed/eoZgb7b-yXA",
    opts: {
      character: ["rize"],
      subgroup: [],
    },
  },
  {
    name: "MIRACLE CHRONICLE♪",
    img: "https://www.youtube.com/embed/KRpgGQI8JAc",
    opts: {
      character: ["chino", "maya", "megu"],
      subgroup: [],
    },
  },
  {
    name: "Rabbit Hole",
    img: "https://www.youtube.com/embed/SNT_WSAK20o",
    opts: {
      character: ["cocoa", "rize"],
      subgroup: [],
    },
  },
  {
    name: "Sing a Song!!!!!",
    img: "https://www.youtube.com/embed/0cHiuH5V7dA",
    opts: {
      character: ["rize", "maya"],
      subgroup: [],
    },
  },
  {
    name: "Sister or Sister",
    img: "https://www.youtube.com/embed/zlatJLhDE-4",
    opts: {
      character: ["cocoa", "mocha"],
      subgroup: [],
    },
  },
  {
    name: "Spring Hello!!",
    img: "https://www.youtube.com/embed/iT5mYS9Sf_Q",
    opts: {
      character: ["cocoa"],
      subgroup: [],
    },
  },
  {
    name: "Sunshine Days",
    img: "https://www.youtube.com/embed/ng3kswf-SKo",
    opts: {
      character: ["chino", "maya"],
      subgroup: [],
    },
  },
  {
    name: "Tiny Christmas Party",
    img: "https://www.youtube.com/embed/eJ10eZfrYKM",
    opts: {
      character: ["chino"],
      subgroup: [],
    },
  },
  {
    name: "VSマイペース?",
    img: "https://www.youtube.com/embed/lyqQcCedox8",
    opts: {
      character: ["chino", "rize", "syaro"],
      subgroup: ["atmc"],
    },
  },
  {
    name: "WELCOME【う・さ!】",
    img: "https://www.youtube.com/embed/h3lLuGDXSVc",
    opts: {
      character: [
        "cocoa",
        "chino",
        "rize",
        "syaro",
        "chiya",
        "maya",
        "megu",
        "aoyama",
        "mocha",
      ],
      subgroup: [],
    },
  },
  {
    name: "winter＊gift",
    img: "https://www.youtube.com/embed/adlmSH-Oi1g",
    opts: {
      character: ["chino"],
      subgroup: [],
    },
  },
  {
    name: "あこがれプリーツ♡",
    img: "https://www.youtube.com/embed/lL9rGss0Nu0",
    opts: {
      character: ["megu"],
      subgroup: [],
    },
  },
  {
    name: "あした元気になぁれ!",
    img: "https://www.youtube.com/embed/F0AfUUp0EYA",
    opts: {
      character: ["chino"],
      subgroup: [],
    },
  },
  {
    name: "あん・どぅ・とろわ",
    img: "https://www.youtube.com/embed/vRMGxzuS0_w",
    opts: {
      character: ["megu"],
      subgroup: [],
    },
  },
  {
    name: "うさぎになったバリスタ",
    img: "https://www.youtube.com/embed/fzAme3MCQS0",
    opts: {
      character: ["aoyama"],
      subgroup: [],
    },
  },
  {
    name: "お手伝いのラララン添えはいかがですか？",
    img: "https://www.youtube.com/embed/dHyGsTidf-w",
    opts: {
      character: ["chino", "maya", "megu"],
      subgroup: ["chimame"],
    },
  },
  {
    name: "お月見数え唄",
    img: "https://www.youtube.com/embed/EmRy-LBdJ0Y",
    opts: {
      character: ["chiya"],
      subgroup: [],
    },
  },
  {
    name: "お茶会物語",
    img: "https://www.youtube.com/embed/s69Fl-IsqO8",
    opts: {
      character: ["chiya"],
      subgroup: [],
    },
  },
  {
    name: "お祭り輪っしょい!!",
    img: "https://www.youtube.com/embed/WElNtmZVEf0",
    opts: {
      character: ["maya"],
      subgroup: [],
    },
  },
  {
    name: "お菓子な夢をおひとつどうぞ♪",
    img: "https://www.youtube.com/embed/R8qNWByiy1s",
    opts: {
      character: ["chino"],
      subgroup: [],
    },
  },
  {
    name: "おいしいパンの作り方",
    img: "https://www.youtube.com/embed/v9GXAzPX68A",
    opts: {
      character: ["mocha"],
      subgroup: [],
    },
  },
  {
    name: "おかえりなさい～Dear my sister～",
    img: "https://www.youtube.com/embed/_B-m5Zq06yw",
    opts: {
      character: ["mocha"],
      subgroup: [],
    },
  },
  {
    name: "おもちゃ箱ハピズム♪",
    img: "https://www.youtube.com/embed/ILvjzfFpREk",
    opts: {
      character: ["megu"],
      subgroup: [],
    },
  },
  {
    name: "かえりみちスキップ",
    img: "https://www.youtube.com/embed/HR85FHvqevc",
    opts: {
      character: ["chino"],
      subgroup: [],
    },
  },
  {
    name: "かさねおり",
    img: "https://www.youtube.com/embed/LtvyOx9IfLo",
    opts: {
      character: ["chino", "mocha", "aoyama"],
      subgroup: ["diva"],
    },
  },
  {
    name: "カフェインファイター",
    img: "https://www.youtube.com/embed/PkYYFJJgcds",
    opts: {
      character: ["syaro"],
      subgroup: [],
    },
  },
  {
    name: "ギミ×デミぱーりないっ♪",
    img: "https://www.youtube.com/embed/qtyAv5_QLeM",
    opts: {
      character: ["rize", "maya", "megu"],
      subgroup: ["mistral"],
    },
  },
  {
    name: "キミとSwinging Night",
    img: "",
    opts: {
      character: ["takahiro"],
      subgroup: [],
    },
  },
  {
    name: "きらきら印を見つけたら",
    img: "https://www.youtube.com/embed/LF0zcTvqK5c",
    opts: {
      character: ["cocoa"],
      subgroup: [],
    },
  },
  {
    name: "きらきらアラモード",
    img: "https://www.youtube.com/embed/K9hA1eUHuec",
    opts: {
      character: ["chino"],
      subgroup: [],
    },
  },
  {
    name: "きらきらエブリディ",
    img: "https://www.youtube.com/embed/R919H_hAQMo",
    opts: {
      character: ["chino", "maya", "megu"],
      subgroup: ["chimame"],
    },
  },
  {
    name: "きらめきカフェタイム",
    img: "https://www.youtube.com/embed/igSzwG7LHAU",
    opts: {
      character: ["cocoa", "chino", "rize"],
      subgroup: [],
    },
  },
  {
    name: "きらめきのみぞ知る行方",
    img: "https://www.youtube.com/embed/IA1o0keBjdI",
    opts: {
      character: ["aoyama", "rin"],
      subgroup: [],
    },
  },
  {
    name: "きらめきを探しに",
    img: "https://www.youtube.com/embed/MjfMmK3RjqY",
    opts: {
      character: ["aoyama"],
      subgroup: [],
    },
  },
  {
    name: "コーヒーカップでエスコート",
    img: "https://www.youtube.com/embed/kWBZjNzRO9U",
    opts: {
      character: ["cocoa", "chino"],
      subgroup: [],
    },
  },
  {
    name: "ココロそばにいるよ",
    img: "https://www.youtube.com/embed/r4rIO94mmV0",
    opts: {
      character: ["chino", "maya", "megu"],
      subgroup: ["chimame"],
    },
  },
  {
    name: "ショコラティーヌ de 3時",
    img: "https://www.youtube.com/embed/DbIeZcRajmo",
    opts: {
      character: ["cocoa"],
      subgroup: [],
    },
  },
  {
    name: "ショコらびゅサバイバル♪",
    img: "https://www.youtube.com/embed/dK_Js2zxfxg",
    opts: {
      character: ["rize", "maya", "megu"],
      subgroup: ["mistral"],
    },
  },
  {
    name: "しんがーそんぐぱやぽやメロディー",
    img: "https://www.youtube.com/embed/ytJ8z4uopJ8",
    opts: {
      character: ["cocoa", "chino", "rize", "chiya", "syaro", "maya", "megu"],
      subgroup: ["petit-beans"],
    },
  },
  {
    name: "すいーと・すきっぷ・すてっぷ",
    img: "https://www.youtube.com/embed/ulwW40rC7lQ",
    opts: {
      character: ["megu"],
      subgroup: [],
    },
  },
  {
    name: "スキでスゴイになりたいな",
    img: "https://www.youtube.com/embed/M38DaoghwHI",
    opts: {
      character: ["chino", "chiya", "syaro"],
      subgroup: ["smc"],
    },
  },
  {
    name: "ずっと一緒",
    img: "https://www.youtube.com/embed/-R1AfFp010Q",
    opts: {
      character: ["chiya", "syaro"],
      subgroup: [],
    },
  },
  {
    name: "スマイルメーカー",
    img: "https://www.youtube.com/embed/oYMKwz94vPo",
    opts: {
      character: ["cocoa"],
      subgroup: [],
    },
  },
  {
    name: "セカイがカフェになっちゃった！",
    img: "https://www.youtube.com/embed/KcM0XHHdKnw",
    opts: {
      character: ["cocoa", "chino", "rize", "chiya", "syaro", "maya", "megu"],
      subgroup: ["petit-beans"],
    },
  },
  {
    name: "センチメンタルごっこ",
    img: "https://www.youtube.com/embed/ZLdJlM6paaQ",
    opts: {
      character: ["chino"],
      subgroup: [],
    },
  },
  {
    name: "センチメンタルボタン",
    img: "https://www.youtube.com/embed/U_M48zAUInQ",
    opts: {
      character: ["rize", "chiya"],
      subgroup: [],
    },
  },
  {
    name: "そおっとブランケット",
    img: "https://www.youtube.com/embed/JFKcHX1h24M",
    opts: {
      character: ["chino"],
      subgroup: [],
    },
  },
  {
    name: "チェスマッチカフェチェックオレ",
    img: "https://www.youtube.com/embed/OPIso_I33a4",
    opts: {
      character: ["fuyu", "chino"],
      subgroup: [],
    },
  },
  {
    name: "チャイム♪タイムカプセル",
    img: "https://www.youtube.com/embed/_-oEpcmI9Bo",
    opts: {
      character: ["megu"],
      subgroup: [],
    },
  },
  {
    name: "チョコリズムチョコルール",
    img: "https://www.youtube.com/embed/3DPszESIOCs",
    opts: {
      character: ["cocoa"],
      subgroup: [],
    },
  },
  {
    name: "チョコレート・アスレチック",
    img: "https://www.youtube.com/embed/bWUDlB7tL8M",
    opts: {
      character: ["rize"],
      subgroup: [],
    },
  },
  {
    name: "てくてくマーチングマーチ",
    img: "https://www.youtube.com/embed/ivAosAtZ95Q",
    opts: {
      character: ["chino", "maya", "megu"],
      subgroup: ["chimame"],
    },
  },
  {
    name: "ドキドキのはじまり",
    img: "https://www.youtube.com/embed/If5x-8UI4yQ",
    opts: {
      character: ["rize"],
      subgroup: [],
    },
  },
  {
    name: "ときめきLOOPにのって",
    img: "https://www.youtube.com/embed/kw-xxBXV3Ws",
    opts: {
      character: ["chino", "maya", "megu"],
      subgroup: ["chimame"],
    },
  },
  {
    name: "ときめきポポロン♪",
    img: "https://www.youtube.com/embed/loZ86V3gTpk",
    opts: {
      character: ["chino", "maya", "megu"],
      subgroup: ["chimame"],
    },
  },
  {
    name: "ときめきミルフィーユ",
    img: "https://www.youtube.com/embed/zSeuTuq3B8w",
    opts: {
      character: ["syaro"],
      subgroup: [],
    },
  },
  {
    name: "とびきりsummer time",
    img: "https://www.youtube.com/embed/iVnfyLtoK3s",
    opts: {
      character: ["syaro"],
      subgroup: [],
    },
  },
  {
    name: "とびっきりアネバーサリー",
    img: "https://www.youtube.com/embed/9dz_Taolpm8",
    opts: {
      character: ["mocha"],
      subgroup: [],
    },
  },
  {
    name: "トラブル!?トラベル!!",
    img: "https://www.youtube.com/embed/ZXk84Ab15b8",
    opts: {
      character: ["cocoa"],
      subgroup: [],
    },
  },
  {
    name: "ナイショのはなしは夢の中で",
    img: "https://www.youtube.com/embed/E2W37VhyTjI",
    opts: {
      character: ["megu"],
      subgroup: [],
    },
  },
  {
    name: "なかよし！〇！なかよし！",
    img: "https://www.youtube.com/embed/ogj7RZNCOFw",
    opts: {
      character: ["chino", "maya", "megu"],
      subgroup: ["chimame"],
    },
  },
  {
    name: "ナマイキTiny Heart",
    img: "https://www.youtube.com/embed/am5rcPUYdwU",
    opts: {
      character: ["maya"],
      subgroup: [],
    },
  },
  {
    name: "なんとなくミライ",
    img: "https://www.youtube.com/embed/VHyr1BFxS2I",
    opts: {
      character: ["cocoa", "chino", "rize", "chiya", "syaro"],
      subgroup: ["petit"],
    },
  },
  {
    name: "にっこりカフェの魔法使い",
    img: "https://www.youtube.com/embed/rahTgsbA6lc",
    opts: {
      character: ["cocoa", "chino", "rize", "chiya", "syaro"],
      subgroup: ["petit"],
    },
  },
  {
    name: "ノーポイッ！",
    img: "https://www.youtube.com/embed/EHzwIOi9lm8",
    opts: {
      character: ["cocoa", "chino", "rize", "chiya", "syaro"],
      subgroup: ["petit"],
    },
  },
  {
    name: "のんピースマイペース",
    img: "https://www.youtube.com/embed/VKwffcg2nfI",
    opts: {
      character: ["cocoa", "chiya"],
      subgroup: [],
    },
  },
  {
    name: "ハートぷるぷる事件です",
    img: "https://www.youtube.com/embed/uH-YtX1--tI",
    opts: {
      character: ["chino", "rize", "syaro"],
      subgroup: ["atmc"],
    },
  },
  {
    name: "ハートふるムーン",
    img: "https://www.youtube.com/embed/wTWqV8IqxKw",
    opts: {
      character: ["chiya"],
      subgroup: [],
    },
  },
  {
    name: "パジャマプラネタリウム",
    img: "https://www.youtube.com/embed/iSumJMe1-jE",
    opts: {
      character: ["megu"],
      subgroup: [],
    },
  },
  {
    name: "パッと!花咲くティーポット",
    img: "https://www.youtube.com/embed/QlWac73KmGc",
    opts: {
      character: ["syaro"],
      subgroup: [],
    },
  },
  {
    name: "ハピネスアンコール",
    img: "https://www.youtube.com/embed/906n0mtWg9E",
    opts: {
      character: ["cocoa", "chino", "rize", "chiya", "syaro"],
      subgroup: ["petit"],
    },
  },
  {
    name: "ハピハピ♪バースデイソング",
    img: "",
    opts: {
      character: [
        "cocoa",
        "chino",
        "rize",
        "chiya",
        "syaro",
        "maya",
        "megu",
        "aoyama",
        "mocha",
      ],
      subgroup: [],
    },
  },
  {
    name: "ハミングsoon!",
    img: "https://www.youtube.com/embed/qiMksyEiuCg",
    opts: {
      character: ["cocoa"],
      subgroup: [],
    },
  },
  {
    name: "ぱりぷれいやー!!",
    img: "https://www.youtube.com/embed/AhRMxTp5mVg",
    opts: {
      character: ["maya"],
      subgroup: [],
    },
  },
  {
    name: "パンパカパンのパンのパーティー",
    img: "https://www.youtube.com/embed/3Td2DskoAfg",
    opts: {
      character: ["cocoa"],
      subgroup: [],
    },
  },
  {
    name: "ピポパポPeople!",
    img: "https://www.youtube.com/embed/BvwkWWmyens",
    opts: {
      character: ["cocoa", "chino", "rize", "chiya", "syaro"],
      subgroup: [],
    },
  },
  {
    name: "ヒミツのおもてなし",
    img: "https://www.youtube.com/embed/WiIAliJ4_Rc",
    opts: {
      character: ["chino"],
      subgroup: [],
    },
  },
  {
    name: "ぴょん'sぷりんぷるん",
    img: "https://www.youtube.com/embed/TL4ldRuwcxM",
    opts: {
      character: ["chino", "maya", "megu"],
      subgroup: ["chimame"],
    },
  },
  {
    name: "ぷちょへんざ☆ゆにばーす",
    img: "",
    opts: {
      character: ["maya"],
      subgroup: [],
    },
  },
  {
    name: "プレゼントレジャー♡",
    img: "https://www.youtube.com/embed/pG7-vRGHrn8",
    opts: {
      character: ["maya"],
      subgroup: [],
    },
  },
  {
    name: "ふわふわバルーンが飛び出した！",
    img: "https://www.youtube.com/embed/U5JgViEtToU",
    opts: {
      character: ["fuyu"],
      subgroup: [],
    },
  },
  {
    name: "ホットホワイトデリバリー♪",
    img: "https://www.youtube.com/embed/SWWrSQf3lJg",
    opts: {
      character: ["mocha"],
      subgroup: [],
    },
  },
  {
    name: "ぽっぴんジャンプ♪",
    img: "https://www.youtube.com/embed/Vi-dA4c88t0",
    opts: {
      character: ["chino", "maya", "megu"],
      subgroup: ["chimame"],
    },
  },
  {
    name: "ポップコーンはぷにんぐ！",
    img: "https://www.youtube.com/embed/IdXpWBwOEDM",
    opts: {
      character: ["cocoa", "syaro"],
      subgroup: [],
    },
  },
  {
    name: "ボトルシップの旅",
    img: "https://www.youtube.com/embed/bNTLtH2Jf_M",
    opts: {
      character: ["chino"],
      subgroup: [],
    },
  },
  {
    name: "マワールエスポワール",
    img: "https://www.youtube.com/embed/5YohvKCZWog",
    opts: {
      character: ["aoyama"],
      subgroup: [],
    },
  },
  {
    name: "みえるよみえる",
    img: "https://www.youtube.com/embed/-PsZ9bcxH3I",
    opts: {
      character: ["chino", "megu"],
      subgroup: [],
    },
  },
  {
    name: "ミカヅキドロップ",
    img: "https://www.youtube.com/embed/WvKm-B38fF0",
    opts: {
      character: ["rize"],
      subgroup: [],
    },
  },
  {
    name: "ミッドナイト・パーティー",
    img: "https://www.youtube.com/embed/OREeOgiM8tA",
    opts: {
      character: ["maya"],
      subgroup: [],
    },
  },
  {
    name: "メランコリアフタヌーン",
    img: "https://www.youtube.com/embed/FA5YfUU3loE",
    opts: {
      character: ["aoyama"],
      subgroup: [],
    },
  },
  {
    name: "やきもち風味のカモミール",
    img: "https://www.youtube.com/embed/QgYE7PRlt5c",
    opts: {
      character: ["chiya", "syaro"],
      subgroup: [],
    },
  },
  {
    name: "ユメ＜ウツツ→ハッピータイム",
    img: "https://www.youtube.com/embed/gDBYe2A6slc",
    opts: {
      character: ["cocoa", "chino", "rize", "chiya", "syaro"],
      subgroup: ["petit"],
    },
  },
  {
    name: "ラ・エレガンス",
    img: "https://www.youtube.com/embed/foLJd7FoLVQ",
    opts: {
      character: ["aoyama"],
      subgroup: [],
    },
  },
  {
    name: "ラ・ラ・ラ!ラ?モーニング",
    img: "https://www.youtube.com/embed/2PnCTNj_TPw",
    opts: {
      character: ["mocha", "chino"],
      subgroup: [],
    },
  },
  {
    name: "らびっとビビっとShow Time＊",
    img: "https://www.youtube.com/embed/tB2HXMoahgc",
    opts: {
      character: ["cocoa", "chiya", "syaro"],
      subgroup: ["happine"],
    },
  },
  {
    name: "リトル*トレジャー*ハント",
    img: "https://www.youtube.com/embed/fyM9nGuc-18",
    opts: {
      character: ["maya", "megu"],
      subgroup: [],
    },
  },
  {
    name: "わーいわーいトライ！",
    img: "",
    opts: {
      character: [
        "cocoa",
        "chino",
        "rize",
        "chiya",
        "syaro",
        "maya",
        "megu",
        "aoyama",
        "mocha",
      ],
      subgroup: [],
    },
  },
  {
    name: "ワオワオ動物園",
    img: "https://www.youtube.com/embed/6cpJ0y1in2M",
    opts: {
      character: ["chino", "maya", "megu"],
      subgroup: ["chimame"],
    },
  },
  {
    name: "わくわく魔法のチカラ",
    img: "https://www.youtube.com/embed/tOyUlLyfZ38",
    opts: {
      character: ["cocoa"],
      subgroup: [],
    },
  },
  {
    name: "わくわくDIARY",
    img: "https://www.youtube.com/embed/joaGqCiWhbs",
    opts: {
      character: ["maya"],
      subgroup: [],
    },
  },
  {
    name: "一匙のお姫さま物語(リアレンジ)",
    img: "https://www.youtube.com/embed/E0EdJLqWcBQ",
    opts: {
      character: ["cocoa", "chino", "rize", "chiya", "syaro"],
      subgroup: ["petit"],
      "rearrange-ver": true,
    },
  },
  {
    name: "天空カフェテリア ～千夜Ver.～",
    img: "https://www.youtube.com/embed/cqARw1P3ta0",
    opts: {
      character: ["chiya"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "天空カフェテリア ～PandaBoY REMIX～",
    img: "",
    opts: {
      character: ["cocoa", "chino", "rize", "chiya", "syaro"],
      subgroup: ["petit"],
      "rearrange-ver": true,
    },
  },
  {
    name: "天空カフェテリア ～ココアVer.～",
    img: "https://www.youtube.com/embed/RSiSseWdM7s",
    opts: {
      character: ["cocoa"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "天空カフェテリア ～シャロVer.～",
    img: "https://www.youtube.com/embed/Dpx443ALw2o",
    opts: {
      character: ["syaro"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "天空カフェテリア ～チノVer.～",
    img: "https://www.youtube.com/embed/P1_oNXTt4BM",
    opts: {
      character: ["chino"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "天空カフェテリア ～リゼVer.～",
    img: "https://www.youtube.com/embed/c_5xzsRzZXk",
    opts: {
      character: ["rize"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "天空カフェテリア～Re arranged～",
    img: "https://www.youtube.com/embed/h4DpKHlO__c",
    opts: {
      character: ["cocoa", "chino", "rize", "chiya", "syaro"],
      subgroup: ["petit"],
      "rearrange-ver": true,
    },
  },
  {
    name: "本日は誠にラリルレイン(リアレンジ)",
    img: "https://www.youtube.com/embed/IpHN592reSY",
    opts: {
      character: ["cocoa", "chino", "rize", "chiya", "syaro", "maya", "megu"],
      subgroup: [],
      "rearrange-ver": true,
    },
  },
  {
    name: "全天候型いらっしゃいませ(カバー)",
    img: "https://www.youtube.com/embed/gp1VqjBiBko",
    opts: {
      character: ["chiya", "mocha"],
      subgroup: [],
      "cover-ver": true,
    },
  },
  {
    name: "宝箱のジェットコースター(リアレンジ)",
    img: "https://www.youtube.com/embed/2rpemhCkBgE",
    opts: {
      character: ["cocoa", "chino", "rize", "chiya", "syaro"],
      subgroup: ["petit"],
      "rearrange-ver": true,
    },
  },
  {
    name: "怪盗ラパン -The Phantom Thief Lapin-(カバー)",
    img: "https://www.youtube.com/embed/CTY8rMUdseQ",
    opts: {
      character: ["aoyama"],
      subgroup: [],
      "cover-ver": true,
    },
  },
  {
    name: "CANDY COLOR DAYS(カバー)",
    img: "https://www.youtube.com/embed/ufl44KYYj6c",
    opts: {
      character: ["cocoa", "rize", "syaro"],
      subgroup: [],
      "cover-ver": true,
    },
  },
  {
    name: "Daydream cafe ～ご注文は千夜ですか？ver.～",
    img: "",
    opts: {
      character: ["chiya"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "Daydream cafe ～ご注文はココアですか？ver.～",
    img: "",
    opts: {
      character: ["cocoa"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "Daydream cafe ～ご注文はシャロですか？ver.～",
    img: "",
    opts: {
      character: ["syaro"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "Daydream cafe ～ご注文はチノですか？ver.～",
    img: "",
    opts: {
      character: ["chino"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "Daydream cafe ～ご注文はリゼですか？ver.～",
    img: "",
    opts: {
      character: ["rize"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "Daydream cafe ～タカヒロ×青山ブルーマウンテン デュエットVer.～",
    img: "",
    opts: {
      character: ["takahiro", "aoyama"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "Daydream café～Re arranged～",
    img: "https://www.youtube.com/embed/gPrivhpw3v8",
    opts: {
      character: ["cocoa", "chino", "rize", "chiya", "syaro"],
      subgroup: ["petit"],
      "rearrange-ver": true,
    },
  },
  {
    name: "Daydream Cafe～チマメ隊Ver.～",
    img: "https://www.youtube.com/embed/JYUD-LAQbv0",
    opts: {
      character: ["chino", "maya", "megu"],
      subgroup: ["chimame"],
      "cover-ver": true,
    },
  },
  {
    name: "Eを探す日常(カバー)",
    img: "https://www.youtube.com/embed/GJv1F4SXRNs",
    opts: {
      character: ["cocoa", "chino"],
      subgroup: [],
      "cover-ver": true,
    },
  },
  {
    name: "Rabbit Hole(カバー)",
    img: "https://www.youtube.com/embed/LRfs_TVmgic",
    opts: {
      character: ["syaro", "maya"],
      subgroup: [],
      "cover-ver": true,
    },
  },
  {
    name: "VSマイペース？(リアレンジ)",
    img: "https://www.youtube.com/embed/o2PPzSbufqY",
    opts: {
      character: ["chino", "rize", "syaro"],
      subgroup: ["atmc"],
      "rearrange-ver": true,
    },
  },
  {
    name: "WELCOME【う・さ！】 ～Petit Rabbit's Ver.～",
    img: "https://www.youtube.com/embed/h3lLuGDXSVc",
    opts: {
      character: ["cocoa", "chino", "rize", "chiya", "syaro"],
      subgroup: ["petit"],
      "solo-ver": true,
    },
  },
  {
    name: "WELCOME【う・さ!】 千夜Ver.",
    img: "https://www.youtube.com/embed/nwO0WeAJ--4",
    opts: {
      character: ["chiya"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "WELCOME【う・さ!】 青山ブルーマウンテンVer.",
    img: "https://www.youtube.com/embed/Bskw0GsgsNY",
    opts: {
      character: ["aoyama"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "WELCOME【う・さ!】 ココアVer.",
    img: "https://www.youtube.com/embed/SEfY_h3N3Dg",
    opts: {
      character: ["cocoa"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "WELCOME【う・さ!】 シャロVer.",
    img: "https://www.youtube.com/embed/vUViUxCZscA",
    opts: {
      character: ["syaro"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "WELCOME【う・さ!】 チノVer.",
    img: "https://www.youtube.com/embed/ojAEY6mi0CA",
    opts: {
      character: ["chino"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "WELCOME【う・さ!】 マヤVer.",
    img: "https://www.youtube.com/embed/fjrETRJLOy0",
    opts: {
      character: ["maya"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "WELCOME【う・さ!】 メグVer.",
    img: "https://www.youtube.com/embed/iX3eJFdA4dc",
    opts: {
      character: ["megu"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "WELCOME【う・さ!】 モカVer.",
    img: "https://www.youtube.com/embed/eQRTczRh9Ms",
    opts: {
      character: ["mocha"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "WELCOME【う・さ!】 リゼVer.",
    img: "https://www.youtube.com/embed/VqU3R4lK9G4",
    opts: {
      character: ["rize"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "うさぎになったバリスタ(カバー)",
    img: "https://www.youtube.com/embed/1sNfaLazpGM",
    opts: {
      character: ["chino"],
      subgroup: [],
      "cover-ver": true,
    },
  },
  {
    name: "お手伝いのラララン添えはいかがですか？(リアレンジ)",
    img: "https://www.youtube.com/embed/Ts9pOx-XC5k",
    opts: {
      character: ["chino", "maya", "megu"],
      subgroup: ["chimame"],
      "rearrange-ver": true,
    },
  },
  {
    name: "きらきら印を見つけたら(カバー)",
    img: "https://www.youtube.com/embed/B8qee4h1UN0",
    opts: {
      character: ["megu"],
      subgroup: [],
      "cover-ver": true,
    },
  },
  {
    name: "きらきらエブリディ(リアレンジ)",
    img: "https://www.youtube.com/embed/ffl4_5gQeFg",
    opts: {
      character: ["chino", "maya", "megu"],
      subgroup: ["chimame"],
      "rearrange-ver": true,
    },
  },
  {
    name: "きらめきカフェタイム(カバー)",
    img: "https://www.youtube.com/embed/z5U_n-sB5Uk",
    opts: {
      character: ["cocoa", "chino", "rize"],
      subgroup: [],
      "cover-ver": true,
    },
  },
  {
    name: "しんがーそんぐぱやぽやメロディー ～千夜Ver.～",
    img: "https://www.youtube.com/embed/Jeg-wmk7LYg",
    opts: {
      character: ["chiya"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "しんがーそんぐぱやぽやメロディー ～Petit Rabbit's Ver.～",
    img: "",
    opts: {
      character: ["cocoa", "chino", "rize", "chiya", "syaro"],
      subgroup: ["petit"],
      "solo-ver": true,
    },
  },
  {
    name: "しんがーそんぐぱやぽやメロディー ～ココアVer.～",
    img: "https://www.youtube.com/embed/lJYODF7bK38",
    opts: {
      character: ["cocoa"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "しんがーそんぐぱやぽやメロディー ～シャロVer.～",
    img: "https://www.youtube.com/embed/ZnUFK00P2Uw",
    opts: {
      character: ["syaro"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "しんがーそんぐぱやぽやメロディー ～チノVer.～",
    img: "https://www.youtube.com/embed/6WrlvFk7M8Q",
    opts: {
      character: ["chino"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "しんがーそんぐぱやぽやメロディー ～チマメ隊Ver.～",
    img: "",
    opts: {
      character: ["chino", "maya", "megu"],
      subgroup: ["chimame"],
      "solo-ver": true,
    },
  },
  {
    name: "しんがーそんぐぱやぽやメロディー ～マヤVer.～",
    img: "https://www.youtube.com/embed/L_0FshNeC8c",
    opts: {
      character: ["maya"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "しんがーそんぐぱやぽやメロディー ～メグVer.～",
    img: "https://www.youtube.com/embed/2YLTF_WZAJg",
    opts: {
      character: ["megu"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "しんがーそんぐぱやぽやメロディー ～リゼVer.～",
    img: "https://www.youtube.com/embed/IuyNkbcpAek",
    opts: {
      character: ["rize"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "セカイがカフェになっちゃった！ 千夜Ver.",
    img: "",
    opts: {
      character: ["chiya"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "セカイがカフェになっちゃった！ Petit Rabbit's Ver.",
    img: "",
    opts: {
      character: ["cocoa", "chino", "rize", "chiya", "syaro"],
      subgroup: ["petit"],
      "solo-ver": true,
    },
  },
  {
    name: "セカイがカフェになっちゃった！ ココアVer.",
    img: "",
    opts: {
      character: ["cocoa"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "セカイがカフェになっちゃった！ シャロVer.",
    img: "",
    opts: {
      character: ["syaro"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "セカイがカフェになっちゃった！ チノVer.",
    img: "",
    opts: {
      character: ["chino"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "セカイがカフェになっちゃった！ チマメ隊Ver.",
    img: "",
    opts: {
      character: ["chino", "maya", "megu"],
      subgroup: ["chimame"],
      "solo-ver": true,
    },
  },
  {
    name: "セカイがカフェになっちゃった！ マヤVer.",
    img: "",
    opts: {
      character: ["maya"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "セカイがカフェになっちゃった！ メグVer.",
    img: "",
    opts: {
      character: ["megu"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "セカイがカフェになっちゃった！ リゼVer.",
    img: "",
    opts: {
      character: ["rize"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "てくてくマーチングマーチ(カバー)",
    img: "https://www.youtube.com/embed/ZSvO0Ro_s3U",
    opts: {
      character: ["cocoa", "chiya", "syaro"],
      subgroup: [],
      "cover-ver": true,
    },
  },
  {
    name: "ときめきLOOPにのって(カバー)",
    img: "https://www.youtube.com/embed/S8aE-EQthnE",
    opts: {
      character: ["rize", "mocha", "aoyama"],
      subgroup: [],
      "cover-ver": true,
    },
  },
  {
    name: "ときめきポポロン♪～Re arranged～",
    img: "https://www.youtube.com/embed/2tcErjWjxUk",
    opts: {
      character: ["chino", "maya", "megu"],
      subgroup: ["chimame"],
      "rearrange-ver": true,
    },
  },
  {
    name: "ときめきポポロン♪～チノVer.～",
    img: "https://www.youtube.com/embed/oFfAqsPyaeo",
    opts: {
      character: ["chino"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "ときめきポポロン♪～マヤVer.～",
    img: "https://www.youtube.com/embed/-dlqtPkkn8k",
    opts: {
      character: ["maya"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "ときめきポポロン♪～メグVer.～",
    img: "https://www.youtube.com/embed/3O_P7sA2Mk0",
    opts: {
      character: ["megu"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "なかよし！〇！なかよし！ ～PandaBoY REMIX～",
    img: "",
    opts: {
      character: ["chino", "maya", "megu"],
      subgroup: ["chimame"],
      "rearrange-ver": true,
    },
  },
  {
    name: "なかよし！〇！なかよし！ ～チノVer.～",
    img: "https://www.youtube.com/embed/yX1et4wxRfA",
    opts: {
      character: ["chino"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "なかよし！〇！なかよし！ ～マヤVer.～",
    img: "https://www.youtube.com/embed/MXhb-RTYkiQ",
    opts: {
      character: ["maya"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "なかよし！〇！なかよし！ ～メグVer.～",
    img: "https://www.youtube.com/embed/9a6nXv8_SDw",
    opts: {
      character: ["megu"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "なかよし！〇！なかよし！～Re arranged～",
    img: "https://www.youtube.com/embed/fUksuazKF3Q",
    opts: {
      character: ["chino", "maya", "megu"],
      subgroup: ["chimame"],
      "rearrange-ver": true,
    },
  },
  {
    name: "なんとなくミライ(リアレンジ)",
    img: "https://www.youtube.com/embed/XVBSAR-tOj0",
    opts: {
      character: ["cocoa", "chino", "rize", "chiya", "syaro"],
      subgroup: ["petit"],
      "rearrange-ver": true,
    },
  },
  {
    name: "にっこりカフェの魔法使い(リアレンジ)",
    img: "https://www.youtube.com/embed/Sjmad_7sk5Q",
    opts: {
      character: ["cocoa", "chino", "rize", "chiya", "syaro"],
      subgroup: ["petit"],
      "rearrange-ver": true,
    },
  },
  {
    name: "ノーポイッ！～千夜Ver.～",
    img: "https://www.youtube.com/embed/vkMH55lK5_A",
    opts: {
      character: ["chiya"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "ノーポイッ！～Re arranged～",
    img: "https://www.youtube.com/embed/QPuSvKgX9CE",
    opts: {
      character: ["cocoa", "chino", "rize", "chiya", "syaro"],
      subgroup: ["petit"],
      "rearrange-ver": true,
    },
  },
  {
    name: "ノーポイッ！～ココアVer.～",
    img: "https://www.youtube.com/embed/nVTzIQglp7o",
    opts: {
      character: ["cocoa"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "ノーポイッ！～シャロVer.～",
    img: "https://www.youtube.com/embed/-EDHR2EMrR4",
    opts: {
      character: ["syaro"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "ノーポイッ！～チノVer.～",
    img: "https://www.youtube.com/embed/IkP7oCkfO_0",
    opts: {
      character: ["chino"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "ノーポイッ！～リゼVer.～",
    img: "https://www.youtube.com/embed/fvydrrdqxo4",
    opts: {
      character: ["rize"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "ハートぷるぷる事件です(リアレンジ)",
    img: "https://www.youtube.com/embed/NjGTicTVJQU",
    opts: {
      character: ["chino", "rize", "syaro"],
      subgroup: ["atmc"],
      "rearrange-ver": true,
    },
  },
  {
    name: "ハピハピ♪バースデイソング～千夜 Ver.～",
    img: "https://www.youtube.com/embed/BHnbWxsK6-I",
    opts: {
      character: ["chiya"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "ハピハピ♪バースデイソング～青山ブルーマウンテン Ver.～",
    img: "https://www.youtube.com/embed/BgpPp47WZFM",
    opts: {
      character: ["aoyama"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "ハピハピ♪バースデイソング～ココア Ver.～",
    img: "https://www.youtube.com/embed/uyUwvLuGc4k",
    opts: {
      character: ["cocoa"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "ハピハピ♪バースデイソング～シャロ Ver.～",
    img: "https://www.youtube.com/embed/P2lou1UsycI",
    opts: {
      character: ["syaro"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "ハピハピ♪バースデイソング～チノVer.～",
    img: "https://www.youtube.com/embed/6oORVfxAodI",
    opts: {
      character: ["chino"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "ハピハピ♪バースデイソング～マヤ Ver.～",
    img: "https://www.youtube.com/embed/lCI3rd-xrhc",
    opts: {
      character: ["maya"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "ハピハピ♪バースデイソング～メグ Ver.～",
    img: "https://www.youtube.com/embed/anpE6JgNWxk",
    opts: {
      character: ["megu"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "ハピハピ♪バースデイソング～モカ Ver.～",
    img: "https://www.youtube.com/embed/C_1S0AD_X5k",
    opts: {
      character: ["mocha"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "ハピハピ♪バースデイソング～リゼ Ver.～",
    img: "https://www.youtube.com/embed/pSyxYtsEvUE",
    opts: {
      character: ["rize"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "ぴょん'sぷりんぷるん(リアレンジ)",
    img: "https://www.youtube.com/embed/Sfis9FdYWaM",
    opts: {
      character: ["chino", "maya", "megu"],
      subgroup: ["chimame"],
      "rearrange-ver": true,
    },
  },
  {
    name: "ぽっぴんジャンプ♪ (～チノ～ ソロVer.)",
    img: "https://www.youtube.com/embed/WKpgvF9paP8",
    opts: {
      character: ["chino"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "ぽっぴんジャンプ♪ (～マヤ～ ソロVer.)",
    img: "https://www.youtube.com/embed/DVkmtik6yuA",
    opts: {
      character: ["maya"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "ぽっぴんジャンプ♪ (～メグ～ ソロVer.)",
    img: "https://www.youtube.com/embed/V1BU9L3rsNM",
    opts: {
      character: ["megu"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "ぽっぴんジャンプ♪～Re arranged～",
    img: "https://www.youtube.com/embed/qCKyp454Dhk",
    opts: {
      character: ["chino", "maya", "megu"],
      subgroup: ["chimame"],
      "rearrange-ver": true,
    },
  },
  {
    name: "わーいわーいトライ！～千夜Ver.～",
    img: "https://www.youtube.com/embed/Ls4QlDwc6mk",
    opts: {
      character: ["chiya"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "わーいわーいトライ！～青山ブルーマウンテンVer.～",
    img: "https://www.youtube.com/embed/GQF67ZhO6ew",
    opts: {
      character: ["aoyama"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "わーいわーいトライ！～ココアVer.～",
    img: "https://www.youtube.com/embed/KSZjzh7wZ_M",
    opts: {
      character: ["cocoa"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "わーいわーいトライ！～シャロVer.～",
    img: "https://www.youtube.com/embed/sQN3ClwYItk",
    opts: {
      character: ["syaro"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "わーいわーいトライ！～チノVer.～",
    img: "https://www.youtube.com/embed/HPfYqZuzlwg",
    opts: {
      character: ["chino"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "わーいわーいトライ！～マヤVer.～",
    img: "https://www.youtube.com/embed/UF3XXbGGi2E",
    opts: {
      character: ["maya"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "わーいわーいトライ！～メグVer.～",
    img: "https://www.youtube.com/embed/DTLx2X_H2DQ",
    opts: {
      character: ["megu"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "わーいわーいトライ！～モカVer.～",
    img: "https://www.youtube.com/embed/5IneWpcyWPQ",
    opts: {
      character: ["mocha"],
      subgroup: [],
      "solo-ver": true,
    },
  },
  {
    name: "わーいわーいトライ！～リゼVer.～",
    img: "https://www.youtube.com/embed/Cwt2sENshg0",
    opts: {
      character: ["rize"],
      subgroup: [],
      "solo-ver": true,
    },
  },
]);
