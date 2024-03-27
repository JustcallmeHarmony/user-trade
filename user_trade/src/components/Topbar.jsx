const searchIcon = <MaterialIcon name="search" size={30} />;
const bellIcon = <MaterialCommunityIcons name="bell-outline" size={30} />;
const greaterIcon = <MaterialCommunityIcons name="greater-than" size={25} />;

const Topbar = ({navigation}) => {
  const [rotation, setRotation] = useState(90);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const rotateIcon = () => {
    setRotation(rotation + 180);
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleNeighborhoodNavigation = () => {
    toggleModal(); // 모달 닫기
    navigation.navigate('Neighborhood'); // 동네 설정 화면으로 이동
  };

  return (
    <SafeAreaView>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 16,
          }}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center', gap: 4}}
            onPress={() => {
              rotateIcon();
              toggleModal(); // 아이콘 클릭 시 모달 토글
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>북아현동</Text>
            <View style={{transform: [{rotate: `${rotation}deg`}]}}>
              {greaterIcon}
            </View>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', gap: 16}}>
            <TouchableOpacity>
              <View>{searchIcon}</View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View>{bellIcon}</View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        backdropOpacity={0.3}
        style={{position: 'absolute', marginTop: 100}}>
        <View
          style={{
            backgroundColor: 'white',
            padding: 16,
            paddingRight: 10,
            borderRadius: 8,
            gap: 20,
            alignItems: 'center',
          }}>
          <Text>북아현동</Text>
          <TouchableOpacity onPress={toggleModal}>
            <Text onPress={handleNeighborhoodNavigation}>내 동네 설정</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Modal from 'react-native-modal';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default Topbar;
