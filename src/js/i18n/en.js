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
  if (years) content.push(years + " year" + (years > 1 ? "s" : ""));
  if (months) content.push(months + " month" + (months > 1 ? "s" : ""));
  if (days) content.push(days + " day" + (days > 1 ? "s" : ""));
  if (hours) content.push(hours + " hour" + (hours > 1 ? "s" : ""));
  if (minutes) content.push(minutes + " minute" + (minutes > 1 ? "s" : ""));
  if (t) content.push(t + " second" + (t > 1 ? "s" : ""));
  return content.slice(0, 3).join(", ");
}

TOO_FEW_SONG_ERROR =
  "There was an error. There may not be enough songs to sort. Please try again.";
getProgressBarPrompt = (battleNo) => `Battle No. ${battleNo}`;
getProgressBarCompletedPrompt = (battleNo) =>
  `Battle No. ${battleNo} - Completed!`;

ORDER = "Order";
NAME = "Name";

getSortCompletedMessage = (date, timeTaken) =>
  `This sorter was completed on ${date} and took ${msToReadableTime(
    timeTaken
  )}. `;

DO_ANOTHER_SORTER = "Do another sorter?";

IN_PROGRESS_TEXT =
  "You may click Load Progress after this to resume, or use this URL.";
FINISHED_TEXT =
  "You may use this URL to share this result, or click Load Last Result to view it again.";

DOWNLOAD_IMAGE = "Download Image";
GENERATE_IMAGE = "Generate Image";

getSaveTypeTranslation = (s) => `Load ${s}`;

mapCharacterName = (s) => {
  return s[0].toUpperCase() + s.substr(1);
};

formatCharacterNames = (characters) => {
  return characters.map((c) => mapCharacterName(c)).join(", ");
};

RESET_BUTTON = "Reset";
