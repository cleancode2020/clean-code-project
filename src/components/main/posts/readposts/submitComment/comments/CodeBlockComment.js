import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
// import { atelierLakesideLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
// import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';
import foundation from "react-syntax-highlighter/dist/esm/styles/hljs/foundation";

function CodeBlockComment(props) {
	return (
		<SyntaxHighlighter
			className="codeblock"
			language="javascript"
			// style={atelierLakesideLight}
			// style={prism}
			style={foundation}
		>
			{props.code}
		</SyntaxHighlighter>
	);
}

export default CodeBlockComment;
