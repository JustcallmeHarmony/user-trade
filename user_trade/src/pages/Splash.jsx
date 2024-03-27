import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

const Splash = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainTab');
    }, 2000);
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>중고거래</Text>
    </View>
  );
};

export default Splash;
