import * as React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const textLabelStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column'
  }
});

interface TextLabelProps {
  style?: Record<string, any>;
  size?: number;
}

export const TextLabel: React.FunctionComponent<TextLabelProps> = ({ children, size = 16, style = {} }) => (
  <View style={textLabelStyles.container}>
    <Text style={[style, { fontSize: size }]}>{children}</Text>
  </View>
);
