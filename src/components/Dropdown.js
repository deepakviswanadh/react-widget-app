import React, { useState } from "react";

const Dropdown = ({ choice, selected, onSelectedHandler, label }) => {
  const [open, setOpen] = useState(false);
  let x = choice
    .filter((i) => i.value !== selected.value)
    .map((i) => {
      return (
        <div
          key={i.value}
          className="item"
          onClick={() => onSelectedHandler(i)}
        >
          {i.label}
        </div>
      );
    });

  return (
    <div className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          className={`ui selection dropdown ${open ? "active visible" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>{x}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
