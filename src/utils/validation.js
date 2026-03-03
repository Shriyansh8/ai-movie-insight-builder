export const isValidImdbID = (id) => {
  const regex = /^tt\d{7,8}$/;
  return regex.test(id);
};