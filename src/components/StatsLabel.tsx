import * as React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import { TextLabel } from './TextLabel';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  box: {
    border: '1 solid #000000',
    position: 'relative',
    width: 50,
    height: 20,
    marginLeft: 5
  },
  text: {
    fontSize: 20
  }
});

interface StatsLabelProps {
  label: string;
}

export const StatsLabel: React.FunctionComponent<StatsLabelProps> = ({ label }) => (
  <View style={styles.container}>
    <TextLabel style={styles.text}>{label}:</TextLabel>
    <View style={styles.box} />
  </View>
);
