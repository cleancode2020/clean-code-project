import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';

const Codeblock = () => {
	const codeString = "(num) => num + 1";
	const codeString2 = ` 
	  function createStyleObject(classNames, style) {
		return classNames.reduce((styleObject, className) => {
		  return {...styleObject, ...style[className]};
		}, {});
	  }
	  
	  function createClassNameString(classNames) {
		return classNames.join(' ');
	  }
	  
	  function createChildren(style, useInlineStyles) {
		let childrenCount = 0;
		return children => {
		  childrenCount += 1;
		  return children.map((child, i) => createElement({
			node: child,
			style,
			useInlineStyles,
			key:\`code-segment-\${childrenCount}-\${i}\`
		  }));
		}
	  }
	  
	  function createElement({ node, style, useInlineStyles, key }) {
		const { properties, type, tagName, value } = node;
		if (type === "text") {
		  return value;
		} else if (tagName) {
		  const TagName = tagName;
		  const childrenCreator = createChildren(style, useInlineStyles);
		  const props = (
			useInlineStyles
			?
			{ style: createStyleObject(properties.className, style) }
			:
			{ className: createClassNameString(properties.className) }
		  );
		  const children = childrenCreator(node.children);
		  return <TagName key={key} {...props}>{children}</TagName>;
		}
	  }`;

	return (
		<SyntaxHighlighter language="javascript" style={dark}>
			{/* {codeString} */}
			{codeString2}
		</SyntaxHighlighter>
	);
};

export default Codeblock;
