import React from "react";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import { ORDER_OPTION_ARRAY } from "../config";
import SelectListItems from "./select-list-items";

function OrderBySelect({ order, handleClick }) {
  const orderOptionList = ORDER_OPTION_ARRAY;
  let orderName = null;

  orderOptionList.forEach((item) => {
    if (item.id === order) {
      orderName = item.value;
    }
  });

  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        Order by {orderName}
      </DropdownToggle>
      <DropdownMenu
        style={{
          height: "auto",
          maxHeight: "200px",
          overflowX: "hidden",
        }}
      >
        <SelectListItems handleClick={handleClick} list={orderOptionList} />
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}

export default OrderBySelect;
