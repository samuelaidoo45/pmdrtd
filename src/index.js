import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const isServer = true;

root.render(
  <React.StrictMode>
    <App isServer={isServer} />
  </React.StrictMode>
);

// const express = require('express');
// const React = require('react');
// const ReactDOMServer = require('react-dom/server');
// const App = require('./App');

// const app = express();


// app.get('*', (req, res) => {
//   const isServer = true;

//   // Render the React component to a string
//   const html = ReactDOMServer.renderToString(<App isServer={isServer} />);

//   // Create an HTML template and inject the rendered content
//   const template = `
//     <html>
//       <head>
//         <title>Server-Side Rendering</title>
//       </head>
//       <body>
//         <div id="root">${html}</div>
//         <script src="/client.js"></script>
//       </body>
//     </html>
//   `;


//   // Send the rendered HTML as the response
//   res.send(template);
// });

// app.use(express.static('public')); // Serve static files like client.js

// app.listen(process.env.PORT || 3000);


