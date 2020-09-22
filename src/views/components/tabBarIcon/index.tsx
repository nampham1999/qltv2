import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight,TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {Colors} from '@shared';

export const Create = () => {
  return (
    <View style={{position: 'absolute', alignItems: 'center'}}>
        <TouchableOpacity style={styles.button}>        
            <Icon name={'add'} color={Colors.White} size={40} />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.Primary,
    alignItems: 'center',
    justifyContent: 'center',
    width: 72,
    height: 72,
    borderRadius: 36,
    position: 'absolute',
    top: -60,
    shadowColor: '#7F85FF',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
});
