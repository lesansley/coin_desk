import React from "react";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import useStore from "../hooks/useStore";
import SelectListItems from "./select-list-items";
import useAllCurrencyRequest from "../hooks/useAllCurrencyRequest";
import { DEFAULT_CURRENCY, PRIORITY_CURRENCIES_ARRAY } from "../config";

function CurrencySelect() {
  let currencyList = [DEFAULT_CURRENCY];
  const { currency, setCurrency } = useStore();
  const getCurrencyList = useAllCurrencyRequest();

  if (getCurrencyList.data) {
    let { data } = getCurrencyList;
    data.sort();
    data = PRIORITY_CURRENCIES_ARRAY.concat(data);
    currencyList = data.map((item) => {
      return { item: item.toUpperCase() };
    });
  }

  function handleClick(e) {
    setCurrency(e.target.value);
  }

  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        Currency - {currency.toUpperCase()}
      </DropdownToggle>
      <DropdownMenu
        style={{
          height: "auto",
          maxHeight: "200px",
          overflowX: "hidden",
        }}
      >
        <SelectListItems handleClick={handleClick} list={currencyList} />
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}
export default CurrencySelect;
