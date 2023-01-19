import style from "./GalleryItem.module.css";

type GalleryItemProps = {
  webformatURL: string;
  largeImageURL: string;
  tags: string;
  setImageURL: (largeImageURL: string) => void;
};

export const GalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  setImageURL,
}: GalleryItemProps) => {
  return (
    <li className={style.gallery__item}>
      <img
        className={style.gallery__img}
        src={webformatURL}
        alt={tags}
        onClick={() => {
          setImageURL(largeImageURL);
        }}
      />
    </li>
  );
};
