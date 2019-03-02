import * as React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import { TextLabel } from './TextLabel';
import { TextLines } from './TextLines';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: 15,
    height: 350,
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 25
  }
});

const createArrayOfLines = (amount: number) => new Array(amount).fill(1);

export const Inventory = () => (
  <View style={styles.container}>
    <View style={styles.title}>
      <TextLabel size={24}>Inventory</TextLabel>
    </View>
    <TextLines lineAmount={createArrayOfLines(15)}/>
  </View>
);