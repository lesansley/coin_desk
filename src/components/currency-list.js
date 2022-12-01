import React from "react";
import { DropdownItem } from "reactstrap";

function CurrencyList({ currency, currencies, handleClick }) {
  return (
    <>
      {currencies.map((item, index) => {
        if (item === "divider") {
          return <DropdownItem key={item + index} divider />;
        } else {
          return (
            <DropdownItem key={item + index} value={item} onClick={handleClick}>
              {item.toUpperCase()}
            </DropdownItem>
          );
        }
      })}
    </>
  );
}

export default CurrencyList;
