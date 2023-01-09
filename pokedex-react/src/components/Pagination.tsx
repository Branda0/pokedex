import { PaginationIcon } from "../components";
import { useEffect } from "react";
import { PaginationProps } from "../props";

const Pagination = ({ currentPage, totalPages, setPage }: PaginationProps) => {
  const pageNumbers: number[] = [];

  // Add page numbers to the pageNumbers array
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Determine the starting index for the page numbers that will be displayed
  let startIndex: number;
  if (currentPage <= 4) {
    startIndex = 0;
  } else if (currentPage > totalPages - 4) {
    startIndex = totalPages - 6;
  } else {
    startIndex = currentPage - 4;
  }

  // change value to 0 for pages that will not be displayed
  if (startIndex > 0) {
    pageNumbers.splice(0, startIndex + 1, 0);
  }
  if (startIndex + 6 < totalPages) {
    pageNumbers.splice(6, totalPages, 0);
  }

  return (
    <div className="flex self-center py-0 px-4 sm:py-3">
      {currentPage > 1 && currentPage - 3 > 1 ? (
        <PaginationIcon setPage={setPage} currentPage={currentPage} pageNumber={1} />
      ) : null}
      {pageNumbers.map((pageNumber, index) => (
        <PaginationIcon key={index} setPage={setPage} currentPage={currentPage} pageNumber={pageNumber} />
      ))}
      {currentPage < totalPages && currentPage + 3 < totalPages ? (
        <PaginationIcon setPage={setPage} currentPage={currentPage} pageNumber={totalPages} />
      ) : null}
    </div>
  );
};
export default Pagination;
