import { useState } from 'react';
import { Loader } from '../Loader/Loader';
import css from './CatGalleryItem.module.css';
export const CatGalleryItem = ({ url, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <li onClick={() => onClick(url)} className={css.CatGalleryItem}>
      <div className={`${css.loaderWrapper} ${isLoaded ? css.hidden : ''}`}>
        <Loader />
      </div>

      <img
        src={url}
        alt="Cat"
        loading="lazy"
        className={`${css.CatGalleryItem_image} ${isLoaded ? css.visible : ''}`}
        onLoad={() => setIsLoaded(true)}
      />
    </li>
  );
};
