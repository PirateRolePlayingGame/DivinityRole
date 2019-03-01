import * as React from 'react';
import { Page, StyleSheet, Font, Text } from '@react-pdf/renderer';
import { Skills } from './components/Skills/Skills';
import { Attributes } from './components/Attributes';
import { SplitContainer } from './components/SplitContainer';
import { NormalAbilities } from './components/NormalAbilities';

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
    backgroundColor: '#fafafa',
    fontFamily: 'EnchantedLand',
    borderWidth: 10,
    borderStyle: 'solid',
    borderColor: '#000000',
    padding: 10
  }
});

export const RoleSheet = {
  Page1: () => (
    <Page size="A4" style={styles.page}>
      <Header />
      <SplitContainer
        leftSlot={<Skills />}
        rightSlot={<Attributes />}
      />
      <NormalAbilities />
    </Page>
  ),
  Page2: () => (
    <Page size="A4" style={styles.page}>
      <Text>Page 2</Text>
    </Page>
  )
};
