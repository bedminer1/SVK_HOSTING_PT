import { redirect } from "@sveltejs/kit";

export const load = async ({ cookies, url }) => {
  if (!cookies.get("username")) {
    throw redirect(307, `/login?redirectTo=${url.pathname}`);
  }
  console.log("redirect error");
};
