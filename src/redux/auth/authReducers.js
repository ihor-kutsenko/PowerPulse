export const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};
export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleFulfilledRegistration = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoading = false;
  state.isLoggedIn = true;
  state.error = null;
};

export const handleFulfilledLogin = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoading = false;
  state.isLoggedIn = true;
  state.error = null;
};

export const handleFulfilledLogOut = state => {
  state.user = null;
  state.token = null;
  state.isLoading = false;
  state.isLoggedIn = false;
  state.error = null;
};

export const handleFulfilledRefresh = (state, { payload }) => {
  state.user = payload.user;
  state.isLoading = false;
  state.isLoggedIn = true;
};
