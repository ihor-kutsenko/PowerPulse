export const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleFulfilledCategory = (state, { payload }) => {
  state.exercisesCategory = payload.data;
  state.totalRecords = payload.totalRecords;
  state.isLoading = false;
  state.error = null;
};

export const handleFulfilledItemsCategory = (state, { payload }) => {
  state.itemsCategory = payload.data;
  state.totalRecords = payload.totalRecords;
  state.isLoading = false;
  state.error = null;
};
