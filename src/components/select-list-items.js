import React from "react";
import { DropdownItem } from "reactstrap";

function SelectListItems({ list, handleClick }) {
  return (
    <>
      {list.map((item, index) => {
        const [key, value] = Object.entries(item)[0];
        if (key === "divider") {
          return <DropdownItem key={key + index} divider />;
        } else {
          return (
            <DropdownItem key={value + index} value={key} onClick={handleClick}>
              {value}
            </DropdownItem>
          );
        }
      })}
    </>
  );
}

export default SelectListItems;
