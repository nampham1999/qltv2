import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Platform
} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import {Images} from '@assets';
import {Colors, Metrics} from '@shared';
import {RateReadOnly} from '@components';

export interface HeaderDetailProps {
  rating?: number;
  onLeftPress?: () => void;
  title?: string;
  totalRate?: number;
  likeActive?: boolean;
}

export const HeaderDetail = (props: HeaderDetailProps) => {
  const {rating, onLeftPress, title, totalRate, likeActive} = props;

  return (
    <ImageBackground
      source={Images.HeaderImg}
      style={{
        width: '100%',
        height:
         Platform.OS === 'ios' 
            ? (Dimensions.get('window').width * 12) / 16
            : (Dimensions.get('window').width * 9) / 16
      }}
      resizeMode={'cover'}>
      <View style={{flexGrow: 10}}>
        <Header
          leftComponent={
            <Icon
              name={'arrow-back'}
              color={Colors.White}
              onPress={onLeftPress}
            />
          }
          containerStyle={{
            borderBottomWidth: 0,
            backgroundColor: 'transparent',
          }}
        />
      </View>
      <View style={{paddingHorizontal: Metrics.spacing.large, flexGrow: 1}}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.rateRow}>
          <RateReadOnly star={rating ?? 0} />
          <Text style={styles.rateText}>{`${totalRate}`} Ratings</Text>
          <View
            style={{
              borderRadius: 150,
              backgroundColor: likeActive ? Colors.White : Colors.Primary,
              width: 51,
              height: 51,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              right: 1,
              top: 30,
              borderWidth: likeActive ? 3 : 0,
              borderColor: likeActive ? Colors.Primary : Colors.White,
              zIndex: 1,
            }}>
            <Icon
              size={28}
              type={'material-community'}
              color={likeActive ? Colors.Primary : Colors.White}
              name={likeActive ? 'heart' : 'heart-outline'}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  rateText: {
    fontSize: Metrics.FontSize.large,
    color: Colors.White,
    marginLeft: Metrics.spacing.small,
    fontWeight: '500',
  },

  rateRow: {
    flexDirection: 'row',
    paddingVertical: Metrics.spacing.medium,
  },

  title: {
    fontSize: Metrics.FontSize.h3,
    color: Colors.White,
    fontWeight: '500',
  },
});
