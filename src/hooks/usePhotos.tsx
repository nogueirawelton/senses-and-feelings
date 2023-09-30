import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import getPhotos from "../services/getPhotos";

interface PhotosProviderProps {
  children: ReactNode;
}

interface PhotosProps {
  photos: string[];
  insertPhoto: (imageURL: string) => void;
}

const PhotosContext = createContext({} as PhotosProps);

export function PhotosProvider({ children }: PhotosProviderProps) {
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    getPhotos().then((photos) => {
      setPhotos(photos);
    });
  }, []);

  function insertPhoto(imageURL: string) {
    setPhotos((prevState) => [imageURL, ...prevState]);
  }

  return (
    <PhotosContext.Provider
      value={{
        photos,
        insertPhoto,
      }}
    >
      {children}
    </PhotosContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function usePhotos() {
  return useContext(PhotosContext);
}
