import { CatGalleryItem } from '../CatGalleryItem/CatGalleryItem';
import css from './CatGallery.module.css';
import { Loader } from '../Loader/Loader';
import { useState } from 'react';
import Modal from '../Modal/Modal';

export const CatGallery = ({ data, isLoading }) => {
  const [selectedCat, setSelectedCat] = useState(null);

  return (
    <Loader isLoading={isLoading}>
      <ul className={css.CatGallery}>
        {data.map(({ id, url }) => (
          <CatGalleryItem
            key={id}
            id={id}
            url={url}
            onClick={(url) => setSelectedCat(url)}
          />
        ))}
      </ul>

      {selectedCat && (
        <Modal setIsModalOpen={() => setSelectedCat(null)}>
          <img
            src={selectedCat}
            alt="Cat"
            loading="lazy"
            className={css.CatModal}
          />
        </Modal>
      )}
    </Loader>
  );
};
