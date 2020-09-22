import React from 'react';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';
import {Colors, Metrics} from '@shared';

export interface RateProps {
  star: number;
}
export const RateReadOnly = (props: RateProps) => {
  const {star} = props;

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Icon
        color={'#f1c40f'}
        name={star >= 1 ? 'ios-star' : 'ios-star-outline'}
        type={'ionicon'}
        size={16}
      />
      <Icon
        color={'#f1c40f'}
        name={star >= 2 ? 'ios-star' : 'ios-star-outline'}
        type={'ionicon'}
        size={16}
      />
      <Icon
        color={'#f1c40f'}
        name={star >= 3 ? 'ios-star' : 'ios-star-outline'}
        type={'ionicon'}
        size={16}
      />
      <Icon
        color={'#f1c40f'}
        name={star >= 4 ? 'ios-star' : 'ios-star-outline'}
        type={'ionicon'}
        size={16}
      />
      <Icon
        color={'#f1c40f'}
        name={star >= 5 ? 'ios-star' : 'ios-star-outline'}
        type={'ionicon'}
        size={16}
      />
    </View>
  );
};
