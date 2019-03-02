import * as React from 'react';
import { View } from '@react-pdf/renderer';
import { SingleLine } from './SingleLine';

export const TextLines = (props: any) => {
  return(
    <View>
      {
        props.lineAmount.map((_: any, index: number) => {
          return <SingleLine key={index} />
        })
      }
    </View>
  )
};
