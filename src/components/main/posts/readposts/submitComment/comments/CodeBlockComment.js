import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
function CodeBlockComment(props) {
  return (
    <div>
      <SyntaxHighlighter language="javascript" style={docco}>
        {props.code}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeBlockComment;
