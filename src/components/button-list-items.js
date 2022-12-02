import React from "react";
import { Button } from "reactstrap";

function ButtonListItems({ duration, buttons, onClick }) {
  return (
    <>
      {buttons.map((item, index) => {
        return (
          <Button
            key={item.id}
            value={item.id}
            onClick={onClick}
            disabled={item.id === duration}
          >
            {item.value}
          </Button>
        );
      })}
    </>
  );
}

export default ButtonListItems;
