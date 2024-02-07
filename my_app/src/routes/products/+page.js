export const load = async ({ parent }) => {
  const parentData = await parent();
  const { user } = parentData;
  const title = "Featured Products";
  //   console.log(username);
  return {
    user,
    title,
  };
};