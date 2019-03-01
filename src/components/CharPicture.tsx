import * as React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import { TextLabel } from './TextLabel';
import { TextLines } from './TextLines';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    borderLeft: '2px solid black',
    borderBottom: '2px solid black',
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

const createArrayOfLines = (amount: number) => new Array(amount).fill(1);

export const CharPicture = () => (
  <View style={styles.container}>
    <View style={styles.title}>
      <TextLabel size={24}>Character Picture</TextLabel>
    </View>
  </View>
);
