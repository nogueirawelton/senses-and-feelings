import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./firebase";

export default async function sendPhoto(file: File) {
  const uploadedPhoto = await uploadBytes(
    ref(storage, `/public-photos/${new Date().getTime()}-${file.name}`),
    file,
  );

  return getDownloadURL(uploadedPhoto.ref);
}
