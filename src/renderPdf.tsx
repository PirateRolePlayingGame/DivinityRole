import * as React from 'react';
import ReactPDF, { Document } from '@react-pdf/renderer';
import { RoleSheet } from './RoleSheet';

ReactPDF.render(
  <Document>
    <RoleSheet.Page1 />
    <RoleSheet.Page2 />
  </Document>,
  `${__dirname}/DivinityRPG.pdf`
);
