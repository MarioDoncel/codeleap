export const formatDateToPost = (stringDate: string) => {
  const now = Date.now();
  const postDate = new Date(stringDate);
  const timezoneOffsetInMiliseconds = postDate.getTimezoneOffset() * 1000 * 60;
  const elapsedTime = now - postDate.getTime() - timezoneOffsetInMiliseconds;
  const elapsedSeconds = Math.floor(elapsedTime / 1000);
  const elapsedMinutes = Math.floor(elapsedTime / 1000 / 60);
  const elapsedHours = Math.floor(elapsedTime / 1000 / 60 / 60);
  const elapsedDays = Math.floor(elapsedTime / 1000 / 60 / 60 / 24);
  const elapsedMonths = Math.floor(elapsedTime / 1000 / 60 / 60 / 24 / 30);
  const elapsedYears = Math.floor(elapsedTime / 1000 / 60 / 60 / 24 / 30 / 12);
  if (elapsedYears) return `${elapsedYears} years ago`;
  if (elapsedMonths) return `${elapsedMonths} months ago`;
  if (elapsedDays) return `${elapsedDays} days ago`;
  if (elapsedHours) return `${elapsedHours} hours ago`;
  if (elapsedMinutes) return `${elapsedMinutes} minutes ago`;
  return `${elapsedSeconds} minutes ago`;
};
