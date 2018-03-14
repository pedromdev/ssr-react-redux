import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from '../components/Home'

export default (req, store, context) => {

  const content = renderToString(<Home/>);
  
  return `
    <html>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};