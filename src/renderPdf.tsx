import * as React from 'react';
import ReactPDF, { Font } from '@react-pdf/renderer';
import { RoleSheet } from './RoleSheet';

ReactPDF.render(
  <RoleSheet.Page1 />,
  `${__dirname}/example.pdf`
);
