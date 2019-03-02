import * as React from 'react';
import { View, StyleSheet, Text } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#000000',
    borderWidth: 1,
    borderStyle: 'solid'
  }
});

interface CircleProps {
  radius?: number;
  style: any;
}

export const Circle: React.FunctionComponent<CircleProps> = ({
  children,
  radius = 16,
  style = {}
}) => (
  <View
    style={{
      ...styles.container,
      ...{
        width: radius,
        height: radius,
        borderRadius: Math.floor(radius / 2)
      },
      ...style
    }}
  >
    {children}
  </View>
);
