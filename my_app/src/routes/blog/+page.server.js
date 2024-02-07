import PocketBase from "pocketbase";
import { SECRET_EMAIL, SECRET_PASSWORD } from "$env/static/private";

export const actions = {
  create: async ({ request }) => {
    const pb = new PocketBase("http://localhost:8090");
    await pb.admins.authWithPassword(SECRET_EMAIL, SECRET_PASSWORD);

    const form = await request.formData();
    const blogname = form.get("blogname") ?? "";
    const read = form.get("read") ?? false;

    const newRecord = {
      blogname,
      read,
    };

    const record = await pb.collection("blogs").create(newRecord);
  },
};

export async function load() {
  const pb = new PocketBase("http://localhost:8090");
  await pb.admins.authWithPassword(SECRET_EMAIL, SECRET_PASSWORD);
  const records = await pb.collection("blogs").getFullList(200, {
    sort: "-created",
  });

  const results = records.map((record) => {
    return {
      blogname: record.blogname,
      read: record.read,
    };
  });

  return {
    records: results,
  };
};
