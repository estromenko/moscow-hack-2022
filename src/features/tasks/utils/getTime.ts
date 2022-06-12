export const getTime = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();

  return {
    day,
    month,
    year,
  };
};
