import * as React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    height: 18,
  }
});

export const SingleLine = () => (
  <View style={styles.container}></View>
);
