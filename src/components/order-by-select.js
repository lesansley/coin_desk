import React, { useEffect } from "react";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import { ORDER_OPTION_ARRAY } from "../config";
import SelectListItems from "./select-list-items";

function OrderBySelect({ order, handleClick }) {
  const orderOptionList = ORDER_OPTION_ARRAY;
  const [orderName, setOrderName] = React.useState(null);

  useEffect(() => {
    for (const opt of orderOptionList) {
      if (opt.hasOwnProperty(order)) setOrderName(opt[order]);
    }
  }, [orderOptionList, order]);

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
