import css from '../Loader/Loader.module.css';

export const Loader = ({ isLoading, children }) => {
  return isLoading ? (
    <div className={css.backdrop}>
      <div className={css.loader}></div>
    </div>
  ) : (
    children
  );
};
