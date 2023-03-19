import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import style from './pagination.module.css'

function Pagination({
  quantity,
  start,
  setStart,
  currentPage,
  setCurrentPage,
}) {
  const [pageButtons, setPageButtons] = useState ([])
  const videogames = useSelector((state) => state.videogames);

  const total = Math.ceil(videogames.length / quantity);
  const pages = [];

  for (let index = 1; index <= total; index++) {
    pages.push(index);
  }

  const handlePrev = () => {
    start && setCurrentPage(currentPage - 1);
    start && setStart(start - quantity);
  };

  const handleNext = () => {
    currentPage < pages.at(-1) && setCurrentPage(currentPage + 1);
    currentPage < pages.at(-1) && setStart(start + quantity);
  };

  const handleChangePage = (page) => {
    setCurrentPage(page);
    const current = page - 1;
    setStart(quantity * current);
  };

  useEffect(() => {
    let numberOfPages = [...pages]
    if (currentPage < 3) {
      numberOfPages = [1, 2, 3, '...', pages.at(-1)]
    }
    if (currentPage === 3) {
      numberOfPages = [1, 2, 3, 4, '...', pages.at(-1)]
    }
    if (currentPage > 3 && currentPage < pages.at(-3)) {
      const sliced = pages.slice(currentPage - 2, currentPage + 1);
      numberOfPages = [1, '...', ...sliced, '...', pages.at(-1)]
    }
    setPageButtons(numberOfPages)
  }, [currentPage])

  return (
    <>
      <div className={style.paginate}>
        <a onClick={handlePrev}>Prev</a>
        {pageButtons.map((page, i) => {
          return (
            <a
              key={i}
              className={[
                style.page,
                page === currentPage && style.active,
              ].join(" ")}
              onClick={() => handleChangePage(page)}
            >
              {page}
            </a>
          );
        })}
        <a onClick={handleNext}>Next</a>
      </div>
    </>
  );
}

export default Pagination;
