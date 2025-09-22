import { CatService } from '../../api/CatService';
import { CatGallery } from '../../components/CatGallery/CatGallery';
import useDataAPI from '../../hooks/useDataAPI';
import css from './CatsPage.module.css';

export const CatsPage = () => {
  const { data, isLoading, refetch } = useDataAPI(CatService);

  return (
    <div className={css.Container}>
      <CatGallery data={data} isLoading={isLoading} />
      <div className={css.Wrapper}>
        <button className={css.ButtonRefresh} onClick={() => refetch()}>
          Refresh cats!
        </button>
      </div>
    </div>
  );
};
