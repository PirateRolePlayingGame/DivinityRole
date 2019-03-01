import * as React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import { TextLabel } from './TextLabel'
import { Circle } from './Circle';

const HEIGHT = 90;
const WIDTH = 70;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    width: WIDTH,
    height: HEIGHT,
    borderRadius: 4,
    borderStyle: 'solid',
    borderColor: '#0a0a0a',
    borderWidth: 1
  },
  title: {
    position: 'absolute',
    top: -10,
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#fafafa'
  },
  circle: {
    position: 'absolute',
    bottom: -10,
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#fafafa'
  }
});

interface AttributeBoxProps {
  title?: string;
}

export const AttributeBox: React.FunctionComponent<AttributeBoxProps> = ({
  title
}) => (
  <View style={styles.container}>
    <TextLabel size={18} style={styles.title}>{title}</TextLabel>
    <Circle radius={20} style={styles.circle} />
  </View>
);
