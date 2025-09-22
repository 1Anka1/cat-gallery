import css from '../Loader/Loader.module.css';

export const Loader = ({ isLoading, children }) => {
  return isLoading ? (
    <div className={css.Backdrop}>
      <div className={css.Loader}></div>
    </div>
  ) : (
    children
  );
};
