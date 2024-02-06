export const load = async ({ parent }) => {
  const parentData = await parent();
  const { username } = parentData;
  const title = "Featured Products";
  //   console.log(username);
  return {
    username,
    title,
  };
};