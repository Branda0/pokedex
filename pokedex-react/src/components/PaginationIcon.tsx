const PaginationIcon = ({
  setPage,
  page,
  currentPage,
  totalPages,
}: {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  currentPage: number;
  totalPages: number;
}) => {
  return (
    <button
      onClick={() => setPage(page)}
      disabled={page === 0}
      className={`${
        page === currentPage ? "bg-[#346ABD] text-white" : "text-gray-600"
      } mx-1 rounded-md min-w-[2rem] min-h-[2rem] sm:mx-2  `}
    >
      {page !== 0 ? page : "..."}
    </button>
  );
};

export default PaginationIcon;
