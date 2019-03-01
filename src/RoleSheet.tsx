import * as React from 'react';
import { Document, Page, StyleSheet, Font } from '@react-pdf/renderer';

Font.register(
  `${__dirname}/assets/Enchanted Land.otf`,
  {
    family: 'EnchantedLand'
  }
);

import { Header } from './components/Header';

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    fontFamily: 'EnchantedLand',
    margin: 10
  }
});

export const RoleSheet = {
  Page1: () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <Header />
      </Page>
    </Document>
  )
};
