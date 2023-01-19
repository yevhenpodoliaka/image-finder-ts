import style from "./Gallery.module.css";
import { GalleryItem } from "../GalleryItem/GalleryItem";
import { Image } from "../../type";

type GalleryProps = {
  images: Image[];
  setImageURL: (largeImageURL: string) => void;
};

export const Gallery = ({ images, setImageURL }: GalleryProps): JSX.Element => {
  return (
    <ul className={style.gallery}>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <GalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          setImageURL={setImageURL}
        />
      ))}
    </ul>
  );
};
