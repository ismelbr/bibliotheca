export const getErrorMessage = (error) =>
  error?.response?.data?.message || error.message || error.toString();
