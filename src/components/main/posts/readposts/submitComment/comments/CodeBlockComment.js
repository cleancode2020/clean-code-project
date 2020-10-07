import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierLakesideLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
function CodeBlockComment(props) {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={atelierLakesideLight}
      className="codeblock"
    >
      {props.code}
    </SyntaxHighlighter>
  );
}

export default CodeBlockComment;
