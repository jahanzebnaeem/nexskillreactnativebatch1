export const selectLibrary = (libraryId) => {
  return {
    type: 'select_Library',
    payload: libraryId,
  };
};
