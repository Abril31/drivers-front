import "./Pagination.css";
import React from "react";

export const Pagination = ({
  currentPage,
  setCurrentPage,
  totalDrivers,
  driversPerPage,
}) => {
  const totalPages = Math.ceil(totalDrivers / driversPerPage);
  const nextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };
  const prevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };
  return (
    <div className="pag-container">
      <button onClick={prevPage} disabled={currentPage === 1}>
        Prev
      </button>
      <span>
        {currentPage} / {totalPages}
      </span>
      <button onClick={nextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};
