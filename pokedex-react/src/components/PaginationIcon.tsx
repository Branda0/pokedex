import { PaginationIconProps } from "../props";

const PaginationIcon = ({ setPage, pageNumber, currentPage }: PaginationIconProps) => {
  return (
    <button
      onClick={() => setPage(pageNumber)}
      disabled={pageNumber === 0}
      className={`${
        pageNumber === currentPage ? "bg-[#346ABD] text-white" : "text-gray-600"
      } mx-1 rounded-md min-w-[2rem] min-h-[2rem] sm:mx-2  `}
    >
      {pageNumber !== 0 ? pageNumber : "..."}
    </button>
  );
};

export default PaginationIcon;
