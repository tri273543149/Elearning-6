import React, { useState } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const PaginatedItem = ({ onChangePage, totalPages }) => {
  const [activeItem, setActiveItem] = useState(1);

  const handelOnChangePage = (page) => {
    onChangePage(page);
    if (activeItem !== page) {
      setActiveItem(page);
    }
  };
  const renderPageNumber = () => {
    let temptArr = [];

    for (let i = 1; i <= totalPages; i++) {
      let paginationTemplate = (
        <PaginationItem
          active={activeItem === i ? true : false}
          key={i}
          onClick={() => handelOnChangePage(i)}
        >
          <PaginationLink>{i}</PaginationLink>
        </PaginationItem>
      );
      temptArr = [...temptArr, paginationTemplate];
    }
    return temptArr;
  };
  return (
    <Pagination>
      <PaginationItem onClick={() => handelOnChangePage(1)}>
        <PaginationLink first />
      </PaginationItem>
      {renderPageNumber()}
      <PaginationItem onClick={() => handelOnChangePage(totalPages)}>
        <PaginationLink last />
      </PaginationItem>
    </Pagination>
  );
};

export default PaginatedItem;