import * as React from 'react';
import { View } from '@react-pdf/renderer';
import { SingleLine } from './SingleLine';

export const TextLines = (props: any) => {
  console.log(props);
  return(
    <View>
      {
        props.lineAmount.map(() => {
          return <SingleLine />
        })
      }
    </View>
  )
};
