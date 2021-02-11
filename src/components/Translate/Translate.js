//API KEY FOR GOOGLE TRANSLATE: AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

import React, { useState } from "react";
import Dropdown from "../Dropdown";
import Convert from "./Convert";

const Translate = () => {
  const languages = [
    {
      label: "Afrikanns",
      value: "af",
    },
    {
      label: "Arabic",
      value: "ar",
    },
    {
      label: "Hindi",
      value: "hin",
    },
  ];
  //setting default language as 1st one
  const [translate, setTranslate] = useState(languages[0]);
  const [text, setText] = useState(" ");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label className="label">Enter text</label>
          <div className="content">
            <input
              type="text"
              value={text}
              placeholder="enter text"
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <Dropdown
        label="select a language"
        choice={languages}
        selected={translate}
        onSelectedHandler={setTranslate}
      />
      <hr />
      <h3 className="ui header">Output:</h3>
      <Convert text={text} language={translate} />
    </div>
  );
};

export default Translate;
