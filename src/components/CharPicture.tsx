import * as React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import { TextLabel } from './TextLabel';
import { TextLines } from './TextLines';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    borderLeftColor: '#000000',
    borderLeftStyle: 'solid',
    borderLeftWidth: 2,
    borderBottomColor: '#000000',
    borderBottomStyle: 'solid',
    borderBottomWidth: 2,
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

export const CharPicture = () => (
  <View style={styles.container}>
    <View style={styles.title}>
      <TextLabel size={24}>Character Picture</TextLabel>
    </View>
  </View>
);
