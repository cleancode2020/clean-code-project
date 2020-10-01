import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierLakesideLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
// import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';

const Codeblock = (props) => {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={atelierLakesideLight}
      className="codeblock"
    >
      {props.currentPost[3]}
    </SyntaxHighlighter>
  );
};

export default Codeblock;
