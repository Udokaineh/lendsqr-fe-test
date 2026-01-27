import ReactPaginate from 'react-paginate';
import styles from "./CustomPagination.module.scss";
import { nextBtn, prevBtn } from '../../assets/icons';


interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  pageCount: number;
  currentPage: number;
  onPageChange: (selectedItem: { selected: number }) => void;
}

const CustomPagination = ({ totalItems, itemsPerPage, onPageChange, pageCount, currentPage }: PaginationProps) => {
  const startItem = currentPage * itemsPerPage + 1;
  const endItem = Math.min((currentPage + 1) * itemsPerPage, totalItems);

  return (
    <div className={styles.paginationWrapper}>
      <div className={styles.leftSection}>
        <span>Showing</span>
        <div className={styles.pageSizeContainer}>
          {startItem} - {endItem}
        </div>
        <span>out of {totalItems}</span>
      </div>


      <ReactPaginate
        breakLabel="..."
        nextLabel={<img src={nextBtn} alt="" />}
        onPageChange={onPageChange}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel={<img src={prevBtn} alt="" />}

        // Library class hooks
        containerClassName={styles.rightSection}
        pageClassName={styles.pageItem}
        pageLinkClassName={styles.pageLink}
        previousClassName={styles.navArrow}
        nextClassName={styles.navArrow}
        breakClassName={styles.breakItem}
        activeClassName={styles.activePage}
        disabledClassName={styles.disabledArrow}
      />
    </div>
  );
};

export default CustomPagination;