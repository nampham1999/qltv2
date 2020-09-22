import React, {useState, useEffect} from 'react';
import {View, Image, FlatList, Text, ActivityIndicator} from 'react-native';
import {Header} from 'react-native-elements';
import {Images} from '@assets';
import {Colors, Metrics} from '@shared';
import axios from 'axios';
import {styles} from './styles';

import {Card} from '@components';

import {AppRoute, HomeNavigatorParams, AppNavigatorParams} from '@navigator';
import {StackNavigationProp} from '@react-navigation/stack';

export interface HomeProps {
  navigation: StackNavigationProp<AppNavigatorParams, AppRoute.HOME>;
}

export interface Posts {
  id: string;
  author: string;
  authorImage: string;
  foodName: string;
  foodImage: string;
  star: number;
  createAt: string;
  location: string;
  totalRate: number;
  phone: string;
  time: string;
  likeByMe: boolean;
}

export const HomeScreen = (props: HomeProps) => {
  const [listCheckIn, setListCheckIn] = useState([]);
  const [loading, setLoading] = useState(false);
  const {navigation} = props;

  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  const getData = () => {
    axios({
      method: 'get',
      url: 'https://5eec5c4b5e298b0016b69a76.mockapi.io/abcsoft/foods',
    })
      .then((response) => {
        setListCheckIn(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  const handlerLike = (id: string) => {
    let checkedList = [...listCheckIn];
    const filteredData = checkedList.find((item: Posts) => item.id == id);
    if (filteredData) {
      filteredData.likeByMe = !filteredData.likeByMe;
    }
    setListCheckIn(checkedList);
  };

  const renderItem = (item: Posts, index: number) => {
    return (
      <Card
        author={item.author}
        avatar={item.authorImage}
        createAt={item.createAt}
        foodImage={item.foodImage}
        foodName={item.foodName}
        location={item.location}
        like={item.likeByMe}
        star={item.star}
        onItemLike={() => handlerLike(item.id)}
        goDetail={() =>
          navigation.navigate(AppRoute.HOMEDETAIL, {
            ID: item.id,
            location: item.location,
            star:item.star,
            totalRate: item.totalRate,
            phone: item.phone,
            time: item.time,
            likeByMe:item.likeByMe
          })
        }
      />
    );
  };

  return (
    <View style={{flex: 1}}>
      <Header
        centerComponent={<Image source={Images.LogoHeader} />}
        containerStyle={{backgroundColor: Colors.Primary}}
        centerContainerStyle={{paddingBottom: 10}}
      />
      <View style={styles.listContainer}>
        {loading ? (
          <View style={styles.loadingStyle}>
            <Text style={{color: Colors.Primary}}>Loading post...</Text>
            <ActivityIndicator
              style={{marginTop: Metrics.spacing.medium}}
              size="large"
              color={Colors.Primary}
            />
          </View>
        ) : (
          <FlatList
            data={listCheckIn}
            renderItem={({item, index}) => renderItem(item, index)}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
};
