export const createAction = (type, payload) => ({ type, payload });

export const filterAction = (type, filterType, filterValue) => ({
  type,
  filterType,
  filterValue,
});
