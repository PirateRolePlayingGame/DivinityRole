import * as React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import { TextLabel } from './TextLabel';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row'
  },
  writingSpace: {
    borderBottom: '1 solid #000000',
    flexGrow: 1,
    position: 'relative',
    bottom: 3
  },
  text: {
    fontSize: 20
  }
});

interface PersonalInfoLabelProps {
  label: string;
}

export const PersonalInfoLabel: React.FunctionComponent<PersonalInfoLabelProps> = ({ label }) => (
  <View style={styles.container}>
    <TextLabel style={styles.text}>{label}:</TextLabel>
    <View style={styles.writingSpace} />
  </View>
);
