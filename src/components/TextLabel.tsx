import * as React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

interface TextLabelProps {
  style?: Record<string, any>;
  size?: number;
}

export const TextLabel: React.FunctionComponent<TextLabelProps> = ({ children, size = 16, style = {} }) => (
  <Text style={{ ...style, ...{ fontSize: size } }}>{children}</Text>
);
