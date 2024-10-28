/**
 *
 * @param {Date} date
 * @returns
 */
const convertDateToString = (date) => {
  return date.toISOString();
};

/**
 *
 * @param {string} str
 * @returns
 */
export const converStringToDate = (str) => {
  return new Date(str);
};

export default convertDateToString;
