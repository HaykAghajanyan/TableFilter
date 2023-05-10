import React from 'react';
import ReactDOM from 'react-dom/client';

import App from 'App';
import TableProvider from 'contexts/TableContext';

import 'index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TableProvider>
    <App />
  </TableProvider>
);
