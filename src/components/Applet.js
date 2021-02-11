import React, { useState } from "react";

const Applet = ({ text }) => {
  const [index, setIndex] = useState(null);
  const onTitleClick = (i) => {
    setIndex(i);
  };
  return text.map((i, j) => {
    const style = index === j ? "active" : "";
    return (
      <div className="ui styled accordion" key={i.title}>
        <div className={`title ${style}`} onClick={() => onTitleClick(j)}>
          <i className="dropdown icon"></i>
          {i.title}
        </div>
        <div className={"content " + style}>
          <p>{i.content}</p>
        </div>
      </div>
    );
  });
};

export default Applet;
