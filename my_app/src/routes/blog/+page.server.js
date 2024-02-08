import PocketBase from "pocketbase";
// import { SECRET_EMAIL, SECRET_PASSWORD } from "$env/static/private";
// $app.getEnv("SECRET_PASSWORD");
// $app.getEnv("SECRET_EMAIL");

let SECRET_PASSWORD = 'BWseSz8QqbmP7C7'
let SECRET_EMAIL = 'alexander.seah.min.rui@gmail.com'
let url = "https://bedsshop.pockethost.io/";

export const actions = {
  create: async ({ request }) => {
    const pb = new PocketBase(url);
    await pb.admins.authWithPassword(SECRET_EMAIL, SECRET_PASSWORD);

    const form = await request.formData();
    const blogname = form.get("blogname") ?? "";
    const read = form.get("read");

    const newRecord = {
      blogname,
      read: read === "on",
    };

    const record = await pb.collection("blogs").create(newRecord);
  },

  update: async ({ request }) => {
    const pb = new PocketBase(url);
    await pb.admins.authWithPassword(SECRET_EMAIL, SECRET_PASSWORD);

    const form = await request.formData();
    const blogname = form.get("blogname") ?? "";
    const read = form.get("read");
    const id = form.get("id") ?? "";

    const newRecord = {
      blogname,
      read: read === "on",
    };

    await pb.collection("blogs").update(id, newRecord);
  },

  delete: async ({ request }) => {
    const pb = new PocketBase(url);
    await pb.admins.authWithPassword(SECRET_EMAIL, SECRET_PASSWORD);

    const form = await request.formData();
    const id = form.get("id") ?? "";
    console.log(id);

    await pb.collection("blogs").delete(id);
  },
};

export async function load() {
  const pb = new PocketBase(url);
  await pb.admins.authWithPassword(SECRET_EMAIL, SECRET_PASSWORD);
  const records = await pb.collection("blogs").getFullList(200, {
    sort: "-created",
  });

  const results = records.map((record) => {
    return {
      blogname: record.blogname,
      read: record.read,
      id: record.id,
    };
  });

  return {
    records: results,
  };
}
