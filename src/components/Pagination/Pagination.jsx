import Svg from 'components/Svg/Svg';

import styles from './Pagination.module.scss';

const Pagination = ({
  itemsPerPage,
  totalItems,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = newPage => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`${styles.pagination_item} ${
            i === currentPage ? styles.active : ''
          }`}
        >
          <button
            className={styles.pagination_btn}
            onClick={() => handlePageChange(i)}
          >
            {i}
            {i === currentPage && <Svg iconId={'icon-pagination'} />}
          </button>
        </li>
      );
    }

    return pageNumbers;
  };

  return (
    <nav aria-label="Pagination">
      <ul className={styles.pagination_list}>{renderPageNumbers()}</ul>
    </nav>
  );
};

export default Pagination;
