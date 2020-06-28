import _range from "lodash/range";
import _chunk from "lodash/chunk";
import _concat from "lodash/concat";
import moment from "moment";

export const format = "YYYY-MMMM-D";

export const getToday = () => moment().format(format);

export const getFormattedDate = (date) => moment(date, format);

export const getUpdatedDate = (date, d) => moment(date).set("date", d);

export const getCurrentMonth = () => moment().startOf("month").format(format);

export const getNextMonth = (date) => moment(date).add(1, "M").format(format);

export const getPrevMonth = (date) =>
  moment(date).subtract(1, "M").format(format);

export const getLeadingDays = (date) => {
  const days = date.startOf("month").day() - 1;
  return days > 0 ? Array(days).fill("") : [];
};

export const getCalendarDays = (date) => _range(1, date.daysInMonth() + 1);

export const getRows = (date) => {
  const days = getCalendarDays(date);
  const leadingDays = getLeadingDays(date);
  const total = _concat(leadingDays, days);
  return _chunk(total, 7);
};
