import * as React from 'react';
import ReactPDF from '@react-pdf/renderer';
import { RoleSheet } from './RoleSheet';

ReactPDF.render(
  <RoleSheet />,
  `${__dirname}/example.pdf`
);
