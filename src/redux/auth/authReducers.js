export const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
  state.isRefreshing = false;
};

export const handleFulfilledRegistration = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoading = false;
  state.isRefreshing = false;
  state.isLoggedIn = true;
  state.error = null;
};

export const handleFulfilledLogin = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoading = false;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.error = null;
};

export const handleFulfilledRefresh = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.isLoading = false;
  state.isRefreshing = false;
};

export const handleFulfilledLogOut = state => {
  state.user = null;
  state.token = null;
  state.isLoading = false;
  state.isLoggedIn = false;
  state.isRefreshing = false;
  state.error = null;
};
