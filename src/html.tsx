/* eslint-disable react/display-name */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

type HTMLProps = {
  htmlAttributes?: any;
  headComponents?: any;
  bodyAttributes?: any;
  preBodyComponents?: any;
  body: string;
  postBodyComponents?: any;
};

export default ({
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  body,
  postBodyComponents,
}: HTMLProps) => (
  <html lang="en-US" {...htmlAttributes}>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {headComponents}
    </head>
    <body {...bodyAttributes} className="light">
      {preBodyComponents}
      <div
        key="body"
        id="___gatsby"
        dangerouslySetInnerHTML={{ __html: body }}
      />
      {postBodyComponents}
    </body>
  </html>
);

// HTML.propTypes = {
//   htmlAttributes: PropTypes.object,
//   headComponents: PropTypes.array,
//   bodyAttributes: PropTypes.object,
//   preBodyComponents: PropTypes.array,
//   body: PropTypes.string,
//   postBodyComponents: PropTypes.array,
// };
