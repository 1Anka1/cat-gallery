import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import { useEffect } from 'react';

export default function Modal({ children, setIsModalOpen }) {

  useEffect(() => {
    const closeModal = ({ target, currentTarget, code }) => {
      if (target === currentTarget || code === 'Escape') {
        setIsModalOpen(false);
      }
    };

    document.addEventListener('keydown', closeModal);

    return () => {
      document.removeEventListener('keydown', closeModal);
    };
  }, [setIsModalOpen]);

  return createPortal(
    <div
      className={css.Overlay}
      onClick={(e) => e.currentTarget === e.target && setIsModalOpen(false)}
    >
      <div className={css.Inner}>
        <button
          onClick={() => setIsModalOpen(false)}
          className={css.CloseButton}
          type="button"
        >
          <svg width="40" height="40">
            <use href="/sprite.svg#close"></use>
          </svg>
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
