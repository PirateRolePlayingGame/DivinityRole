import * as React from 'react';
import { View, StyleSheet, Text } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    borderColor: '#000000',
    borderWidth: 1,
    borderStyle: 'solid'
  }
});

interface CircleProps {
  radius?: number;
  style: any;
}

export const Header: React.FunctionComponent<CircleProps> = ({
  children,
  radius = 16,
  style = {}
}) => (
  <View
    style={{
      ...styles.container,
      ...{
        width: radius,
        height: radius
      },
      ...style
    }}
  >
    {children}
  </View>
);
