import React, { useState, Fragment, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState(" ");
  const [result, setResult] = useState([]);

  useEffect(() => {
    const search = async () => {
      const config = {
        params: {
          action: "query",
          list: "search",
          format: "json",
          origin: "*",
          srsearch: term,
        },
      };
      try {
        const res = await axios.get(
          "https://en.wikipedia.org/w/api.php",
          config
        );
        setResult(res.data.query.search);
      } catch (err) {
        console.log(err.message);
      }
    };
    const timeid = setTimeout(() => {
      if (term) search();
    }, 500);

    return () => {
      clearTimeout(timeid);
    };
  }, [term]);

  const renderResult = result.map((i) => {
    return (
      <div className="item" key={i.pageid}>
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${i.pageid}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Click to know more!
          </a>
        </div>
        <div className="content">
          <div className="header">{i.title}</div>
          <span dangerouslySetInnerHTML={{ __html: i.snippet }}></span>
        </div>
      </div>
    );
  });
  return (
    <Fragment>
      <div className="ui form">
        <div className="field">
          <input
            className="input"
            value={term}
            placeholder="enter text to search"
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">{renderResult}</div>
    </Fragment>
  );
};

export default Search;
