dataSetVersion = "{DATE}"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Character",
    key: "character",
    tooltip: "Check this to restrict to certain characters.",
    checked: false,
    sub: [
      { name: "Cocoa", key: "cocoa" },
      { name: "Chino", key: "chino" },
      { name: "Rize", key: "rize" },
      { name: "Syaro", key: "syaro" },
      { name: "Chiya", key: "chiya" },
      { name: "Maya", key: "maya" },
      { name: "Megu", key: "megu" },
      { name: "Aoyama", key: "aoyama" },
      { name: "Mocha", key: "mocha" },
      { name: "Fuyu", key: "fuyu" },
      { name: "Rin", key: "rin" },
      { name: "Yura", key: "yura" },
      { name: "Saki", key: "saki" },
      { name: "Takahiro", key: "takahiro" }
    ]
  },
  {
    name: "Filter by Sub Groups",
    key: "subgroup",
    tooltip: "Check this to restrict to subgroups",
    checked: false,
    sub: [
      { name: "Petit Rabbit's", key: "petit" },
      { name: "Petit Rabbit's with Beans", key: "petit-beans" },
      { name: "ChiMaMe-Tai", key: "chimame" },
      { name: "Chi(ya)MaMe", key: "chiyamame" },
      { name: "At Their Mercy Corp", key: "atmc" },
      { name: "Spokesmodel Corp", key: "smc" },
      { name: "Happine", key: "happine" },
      { name: "Mistral", key: "mistral" },
      { name: "Diva", key: "diva" }
    ]
  }
];

dataSet[dataSetVersion].characterData = {SONGS};
