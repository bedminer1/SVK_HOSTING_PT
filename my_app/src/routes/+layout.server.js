export const load = (async ({ cookies }) => {
  const user = await cookies.get("username")

  return {
    user
  };
}) 
