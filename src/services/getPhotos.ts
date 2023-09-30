import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "./firebase";

export default async function getPhotos() {
  const { items } = await listAll(ref(storage, "/public-photos"));

  const data = await Promise.all(
    items.map(async (item) => {
      return await getDownloadURL(item);
    }),
  );

  return data;
}
