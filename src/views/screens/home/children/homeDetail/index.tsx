import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Platform,
  Dimensions,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {Images} from '@assets';
import {Colors, Metrics, Row, RightText} from '@shared';
import {HeaderDetail, Rating} from '@components';

import {HomeDetailProps} from '@navigator';

export const HomeDetailScreen: React.FC<HomeDetailProps> = (props) => {
  const {route, navigation} = props;
  const {location, totalRate, phone, time, ID, star, likeByMe} = route.params;
  return (
    <View style={{flex: 1}}>
      <HeaderDetail
        onLeftPress={() => navigation.goBack()}
        title={location}
        rating={star}
        totalRate={totalRate}
        likeActive={likeByMe}
      />
      <ScrollView
        style={{
          paddingVertical: Metrics.spacing.huge,
          paddingHorizontal: Metrics.spacing.large,
        }}>
        <View
          style={{
            paddingVertical: Metrics.spacing.huge,
          }}>
          <Row>
            <Icon name={'location'} type={'evilicon'} />
            <RightText>{location}</RightText>
          </Row>
          <Row
            style={{
              paddingLeft: 4,
              paddingVertical: Metrics.spacing.extraLarge,
            }}>
            <Icon name={'phone'} type={'feather'} size={18} />
            <RightText>{phone}</RightText>
          </Row>
          <Row style={{paddingLeft: 4}}>
            <Icon name={'clock'} type={'feather'} size={18} />
            <RightText>{time}</RightText>
          </Row>
        </View>

        <View
          style={{
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: '#e68690',
          }}>
          <Row
            style={{
              justifyContent: 'space-around',
              paddingVertical: Metrics.spacing.huge,
            }}>
            <Image source={Images.Info} />
            <Image source={Images.Menu} />
            <Image source={Images.Review} />
          </Row>
        </View>

        <Text
          style={{
            fontSize: Metrics.FontSize.h6,
            color: Colors.Text.textAcient,
            textAlign: 'center',
            paddingVertical: Metrics.spacing.huge,
          }}>
          Rate this venue
        </Text>

        <View
          style={{
            bottom:
              Platform.OS === 'android'
                ? Dimensions.get('window').width / 15
                : 14,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Rating count={5} defaultRating={5} size={20} showRating={false} />
        </View>
      </ScrollView>
    </View>
  );
};
