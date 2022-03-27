export const formatDateToPost = (stringDate: string) => {
  const now = Date.now();
  const postDate = new Date(stringDate);
  const elapsedTime = now - postDate.getTime();
  const elapsedSeconds = Math.floor(elapsedTime / 1000);
  const elapsedMinutes = Math.floor(elapsedTime / 1000 / 60);
  const elapsedHours = Math.floor(elapsedTime / 1000 / 60 / 60);
  const elapsedDays = Math.floor(elapsedTime / 1000 / 60 / 60 / 24);
  const elapsedMonths = Math.floor(elapsedTime / 1000 / 60 / 60 / 24 / 30);
  const elapsedYears = Math.floor(elapsedTime / 1000 / 60 / 60 / 24 / 30 / 12);
  const isPlural = (number: number) => {
    if (number > 1) return 's';
    return '';
  };
  if (elapsedYears) return `${elapsedYears} year${isPlural(elapsedYears)} ago`;
  if (elapsedMonths)
    return `${elapsedMonths} month${isPlural(elapsedMonths)} ago`;
  if (elapsedDays) return `${elapsedDays} day${isPlural(elapsedDays)} ago`;
  if (elapsedHours) return `${elapsedHours} hour${isPlural(elapsedHours)} ago`;
  if (elapsedMinutes)
    return `${elapsedMinutes} minute${isPlural(elapsedMinutes)} ago`;
  return `${elapsedSeconds} second${isPlural(elapsedSeconds)} ago`;
};
