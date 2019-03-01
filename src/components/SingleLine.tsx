import * as React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    borderBottom: '0.5px solid black',
    height: 18,
  }
});

export const SingleLine = () => (
  <View style={styles.container}></View>
);
