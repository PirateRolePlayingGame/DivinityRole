import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Document } from '@react-pdf/renderer';
import { RoleSheet } from './RoleSheet';

ReactDOM.render(
  <Document>
    <RoleSheet.Page1 />
    <RoleSheet.Page2 />
  </Document>,
  document.getElementById('root')
);
