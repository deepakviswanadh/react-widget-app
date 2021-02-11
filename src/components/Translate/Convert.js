import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ text, language }) => {
  const [output, setOutput] = useState("");
  useEffect(() => {
    const run = async () => {
      const config = {
        params: {
          q: text,
          target: language.value,
          key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
        },
      };
      const res = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        config
      );
      setOutput(res.data.data.translations[0].translatedText);
    };
    const timeid = setTimeout(() => {
      if (text) run();
    }, 500);

    return () => {
      clearTimeout(timeid);
    };
  }, [text, language]);

  return (
    <div className="ui header">
      <h1>{output}</h1>
    </div>
  );
};

export default Convert;
