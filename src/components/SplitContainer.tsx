import * as React from 'react';
import { View, StyleSheet, Text } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  split: {
    width: '50%',
  }
});

interface SplitContainerProps {
  leftSlot: JSX.Element;
  rightSlot: JSX.Element;
}

export const SplitContainer: React.FunctionComponent<SplitContainerProps> = ({
  leftSlot,
  rightSlot
}) => (
  <View style={styles.container}>
    <View style={{ ...styles.split, ...{ marginRight: 10 } }}>{leftSlot}</View>
    <View style={styles.split}>{rightSlot}</View>
  </View>
);
