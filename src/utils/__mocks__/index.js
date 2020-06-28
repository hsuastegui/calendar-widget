export const getToday = () => "2020-June-28";

export const getFormattedDate = (date) => ({
  year: () => 2020,
  format: () => date.substring(date.indexOf("-") + 1, date.lastIndexOf("-")),
});

export const getUpdatedDate = (date, d) => ({
  format: (f) => {
    if (f === "DD/MM/YYYY") {
      return `${d}/06/${date.year()}`;
    }
    return `${date.year()}-June-${d}`;
  },
});

export const getCurrentMonth = () => "2020-June-1";

export const getNextMonth = () => "2020-July-1";

export const getPrevMonth = () => "2020-May-1";

export const getRows = () => [
  [1, 2, 3, 4, 5, 6, 7],
  [8, 9, 10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19, 20, 21],
  [22, 23, 24, 25, 26, 27, 28],
  [29, 30],
];
