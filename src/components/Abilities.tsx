import * as React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import { TextLabel } from './TextLabel';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  abilitiesContainer: {

  },
  ability: {
    display: 'flex',
    flexDirection: 'row'
  },
  textLine: {
    width: 40,
    borderBottomWidth: 1,
    borderColor: '#000000',
    borderStyle: 'solid',
    marginRight: 5
  }
});

interface AbilitiesProps {
  title: string;
  abilities: string[];
  style?: any;
}

export const Abilities: React.FunctionComponent<AbilitiesProps> = ({
  title,
  abilities
}) => (
  <View style={styles.container}>
    <TextLabel size={24}>{title}</TextLabel>
    {abilities.map((ability) => (
      <View key={ability} style={styles.ability}>
        <View style={styles.textLine} />
        <TextLabel>{ability}</TextLabel>
      </View>
    ))}
  </View>
);
