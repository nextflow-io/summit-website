import React from 'react';

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      type="text/javascript"
      id="hs-script-loader"
      key="hs-script-loader"
      async
      defer
      src="//js.hs-scripts.com/6705631.js"
    />,
  ]);
};
