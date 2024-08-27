export const getStringifiedDate = (targetDate) => {
  // YYYY-MM-DD
  let year = targetDate.getFullYear();
  let month = `0${targetDate.getMonth() + 1}`.slice(-2);
  let date = `0${targetDate.getDate()}`.slice(-2);

  return `${year}-${month}-${date}`;
};
