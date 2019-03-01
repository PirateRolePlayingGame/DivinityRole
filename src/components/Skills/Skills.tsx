import * as React from 'react';
import { View, StyleSheet, Text } from '@react-pdf/renderer';
import { Table } from './Table';
import { TextLabel } from '../TextLabel';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
  }
});

const HEADERS = [
  'Name',
  'CD',
  'AP',
  'DMG'
];

export const Skills = () => (
  <View style={styles.container}>
    <TextLabel size={24}>Skills</TextLabel>
    <Table
      headers={HEADERS}
      rows={15}
    />
  </View>
);
