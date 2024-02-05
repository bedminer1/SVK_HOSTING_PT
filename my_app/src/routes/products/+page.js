export const load = async ({ parent }) => {
  const parentData = await parent();
  const { username } = parentData;
//   console.log(username);
  return {
    username,
  };
};
