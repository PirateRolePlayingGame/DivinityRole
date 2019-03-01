import * as React from 'react';
import { View, StyleSheet, Text } from '@react-pdf/renderer';
import { TextLabel } from './TextLabel'
import { AttributeBox } from './AttributeBox';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  attributesContainer: {
    marginTop: 16,
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

export const Attributes: React.FunctionComponent = () => (
  <View style={styles.container}>
    <TextLabel size={24}>Attributes</TextLabel>
    <View style={styles.attributesContainer}>
      <View style={styles.row}>
        <AttributeBox title="Strength" />
        <AttributeBox title="Finesse" />
        <AttributeBox title="Intelligence" />
      </View>
      <View style={styles.row}>
        <AttributeBox title="Constitution" />
        <AttributeBox title="Memory" />
        <AttributeBox title="Wits" />
      </View>
    </View>
  </View>
);
