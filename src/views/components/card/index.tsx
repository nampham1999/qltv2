import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {CheckBox, Icon} from 'react-native-elements';
import {Colors, Metrics} from '@shared';
import moment from 'moment';
import {styles} from './styles';
import {RateReadOnly} from '../rating';

export interface CardProps {
  author: string;
  avatar?: string;
  foodName?: string;
  foodImage?: string;
  star: number;
  createAt?: string;
  location?: string;
  like?: boolean;
  onItemLike?: () => void;
  goDetail?:() => void;
}

export const Card = (props: CardProps) => {
  const {
    like,
    onItemLike,
    avatar,
    author,
    createAt,
    foodImage,
    foodName,
    star,
    location,
    goDetail
  } = props;
 
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.leftContent}>
          <Image
            source={{uri: avatar}}
            style={{width: 45, height: 45, borderRadius: 150}}
          />
          <CheckBox
            center
            checkedColor={Colors.Primary}
            uncheckedColor={Colors.Black}
            iconType={'material-community'}
            checkedIcon={'heart'}
            onIconPress={onItemLike}
            checked={like}
            uncheckedIcon={'heart-outline'}
            containerStyle={{marginVertical: Metrics.spacing.large}}
          />
          <Icon
            name={'comment'}
            size={28}
            type={'evilicon'}
            style={{paddingBottom: Metrics.spacing.huge}}
          />
          <Icon name={'flag'} type={'feather'} />
        </View>
        <View>
          <View style={styles.rightContent}>
            <Text style={styles.author}>{author}</Text>
            <Text style={styles.createAt}>{moment(createAt).fromNow()}</Text>
          </View>

          <Image source={{uri: foodImage}} style={styles.foodImg} />

          <View style={styles.foodNameContainer}>
            <Text style={styles.foodName}>{foodName}</Text>
            <RateReadOnly star={star} />
          </View>
          <View style={styles.locationContainer}>
            <Icon name={'location'} type={'evilicon'} color={Colors.Gray} />
            <Text style={styles.at}>At</Text>
            <Text onPress={goDetail} style={styles.location}>{location}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};