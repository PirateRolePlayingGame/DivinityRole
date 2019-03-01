import * as React from 'react';
import { View, StyleSheet, Text } from '@react-pdf/renderer';
import { StatsContainer } from './StatsContainer';
import { TextLabel } from './TextLabel';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 48
  }
});

export const Header = () => (
  <View style={styles.container}>
    <View style={styles.title}>
      <TextLabel>DivinityRPG</TextLabel>
    </View>
    <StatsContainer />
  </View>
);
