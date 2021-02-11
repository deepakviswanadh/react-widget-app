import React, { Fragment, useState } from "react";
//import Applet from "./components/Applet";
//import Search from "./components/Search";
//import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate/Translate";
const App = () => {
  // const quotes = [
  //   { title: "t1", content: "d1" },
  //   { title: "t2", content: "d2" },
  // ];

  // const options = [
  //   {
  //     label: "Red Color",
  //     value: "red",
  //   },
  //   {
  //     label: "Blue Color",
  //     value: "blue",
  //   },
  //   {
  //     label: "Green color",
  //     value: "green",
  //   },
  // ];

  // //default value for dropdown is set to red
  // const [selected, setSelected] = useState(options[0]);

  return (
    <Fragment>
      {/* <Applet text={quotes} />
      <Search /> */}
      {/* <Dropdown
      label="select a color"
        selected={selected}
        onSelectedHandler={setSelected}
        choice={options}
      /> */}
      <Translate />
    </Fragment>
  );
};

export default App;
