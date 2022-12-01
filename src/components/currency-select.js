import React from "react";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import useCurrencyStore from "../hooks/useCurrencyStore";
import CurrencyList from "./currency-list";
import useAllCurrencyRequest from "../hooks/useAllCurrencyRequest";
import { DEFAULT_CURRENCY, PRIORITY_CURRENCIES_ARRAY } from "../config";

function CurrencySelect() {
  let currencies = [DEFAULT_CURRENCY];
  const { currency, setCurrency } = useCurrencyStore();
  const getCurrencies = useAllCurrencyRequest();

  if (getCurrencies.data) {
    const { data } = getCurrencies;
    data.sort();
    currencies = PRIORITY_CURRENCIES_ARRAY.concat(data);
  }

  function handleClick(e) {
    setCurrency(e.target.value);
  }

  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        Currency - {currency.toUpperCase()}
      </DropdownToggle>
      <DropdownMenu>
        <CurrencyList
          currency={currency}
          handleClick={handleClick}
          currencies={currencies}
        />
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}
export default CurrencySelect;
