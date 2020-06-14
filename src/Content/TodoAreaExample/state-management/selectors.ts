import { AREA_NAME, IGlobalState } from './constants';

export const selectItems = (state: IGlobalState) => state[AREA_NAME].items;

export const selectLoading = (state: IGlobalState) => state[AREA_NAME].loading;

export const selectTotalRow = (state: IGlobalState) =>
  state[AREA_NAME].totalRow;

export const selectPageIndex = (state: IGlobalState) =>
  state[AREA_NAME].pageIndex;

export const selectPageSize = (state: IGlobalState) =>
  state[AREA_NAME].pageSize;

export const selectSort = (state: IGlobalState) => state[AREA_NAME].sort;

export const selectFilter = (state: IGlobalState) => state[AREA_NAME].filter;

/**
 * selectFindingConditions: use for saga only, in components, there should select one by one to avoid re-rendering
 */
export const selectFindingConditions = (state: IGlobalState) => ({
  filter: state[AREA_NAME].filter,
  sort: state[AREA_NAME].sort,
  pageSize: state[AREA_NAME].pageSize,
  pageIndex: state[AREA_NAME].pageIndex,
});

export const selectItemId = (state: IGlobalState) => state[AREA_NAME].itemId;

export const selectChosenItems = (state: IGlobalState) =>
  state[AREA_NAME].chosenItemIds;
