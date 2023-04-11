import React from "react";

const formatText = (text) => {
  const formattedText = text.split(" ").map((x, i) =>
    x.startsWith("http") ? (
      <a key={i} href={x}>
        {x}
      </a>
    ) : (
      <span key={i}> {x} </span>
    )
  );
  console.log(text.split(" ").map((x) => x[1].startsWith("http")));
  return formattedText;
};

export default formatText;
