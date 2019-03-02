import * as React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import { TextLabel } from './TextLabel';
import { TextLines } from './TextLines';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    borderRightColor: '#000000',
    borderRightStyle: 'solid',
    borderRightWidth: 2,
    borderLeftColor: '#000000',
    borderLeftStyle: 'solid',
    borderLeftWidth: 2,
    margin: 10,
    height: 350
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 25
  }
});

const createArrayOfLines = (amount: number) => Array.from(
  { length: amount },
  (_, index) => index
);

export const Background = () => (
  <View style={styles.container}>
    <View style={styles.title}>
      <TextLabel size={24}>Background Story</TextLabel>
    </View>
    <TextLines lineAmount={createArrayOfLines(15)}/>
  </View>
);
