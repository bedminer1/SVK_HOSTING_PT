export const load = (async ({ cookies }) => {
    const user = await cookies.get("username");
    console.log(user);
  
    return {
      user
    };
  }) 