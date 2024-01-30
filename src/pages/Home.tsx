import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';

import { useSelector, useDispatch } from 'react-redux';
import { selectFilter, setCategoryId, setCurrentPage } from '../redux/Slices/filterSlice';
import { setItems, fetchPizzas, selectPizzasData } from '../redux/Slices/pizzasSlices';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { categoryId, sort, currentPage, searchValue } = useSelector(selectFilter);
  const { items, status } = useSelector(selectPizzasData);
  const sortType = sort.sort;

  const dispatch = useDispatch();

  const onChangeCategory = (id: number) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (value: number) => {
    dispatch(setCurrentPage(value));
  };

  React.useEffect(() => {
    const order = sortType.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(
      // @ts-ignore
      fetchPizzas({
        order,
        sortBy,
        category,
        search,
        currentPage,
      }),
    );

    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  const pizzas = items.map((obj: any) => (
    <Link key={obj.id} to={`/pizza/${obj.id}`}>
      <PizzaBlock {...obj} />
    </Link>
  ));

  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">All pizzas</h2>
      {status === 'error' ? (
        <div className="content__error-info">
          <h2>Error</h2>
          <p>Failed to receive data</p>
        </div>
      ) : (
        <div className="content__items"> {status === 'loading' ? skeletons : pizzas} </div>
      )}

      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
