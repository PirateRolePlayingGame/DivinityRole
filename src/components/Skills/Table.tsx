import * as React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import { TextLabel } from '../TextLabel'

const ROW_HEIGHT = 16;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  row: {
    marginTop: 5,
    display: 'flex',
    flexDirection: 'row',
  },
  cell: {
    height: 20,
    flexGrow: 1,
    backgroundColor: '#E2E2E2',
    marginLeft: 5
  }
});

interface TableProps {
  headers: string[];
  rows: number;
}

export const Table: React.FunctionComponent<TableProps> = ({
  headers,
  rows
}) => {
  const headerElements = (
    <View style={styles.row} key={1}>
      {headers.map((header, colIndex) => (
        <View key={`1-${colIndex + 1}`} style={{...styles.cell, ...{ backgroundColor: 'none' } }}>
          <TextLabel size={16}>{header}</TextLabel>
        </View>
      ))}
    </View>
  );

  const rowsElements = Array
    .from({ length: rows }, (_, rowIndex) => rowIndex)
    .map((rowIndex) => (
      <View style={styles.row} key={`${rowIndex + 2}`}>
        {headers.map((_, colIndex) => (
          <View style={styles.cell} key={`${rowIndex + 2}-${colIndex + 1}`} />
        ))}
      </View>
    ));

  return (
    <View style={styles.container}>
      {headerElements}
      {rowsElements}
    </View>
  )
  return null;
};
