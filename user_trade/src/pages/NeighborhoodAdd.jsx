const lessIcon = <MaterialCommunityIcons name="less-than" size={25} />;

const NeighborhoodAdd = ({navigation}) => {
    const [searchText, setSearchText] = useState('');
    const [filteredPlaces, setFilteredPlaces] = useState([]);
  
    const handleSearch = (text) => {
      setSearchText(text);
      const filtered = dummy_places.filter(place =>
        place.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredPlaces(filtered);
    }
  
    const handlePlaceSelection = (name) => {
        navigation.navigate('Neighborhood', { selectedPlace: name });
      }

    const renderItme = ({item}) => {
      return (
        <TouchableOpacity onPress={() => handlePlaceSelection(item.name)}>
          <View style={{flexDirection:'row', paddingVertical: 12, paddingHorizontal: 16, borderBottomWidth: 1, borderBottomColor: '#ccc'}}>
              <Text>{item.name}</Text>
          </View>
          </TouchableOpacity>
      )
    }
    
    return (
      <SafeAreaView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 15,
            paddingHorizontal: 16,
            marginTop: 8,
          }}>
          <TouchableOpacity>
            <Text onPress={() => navigation.goBack()} style={{fontSize: 20}}>
              {lessIcon}
            </Text>
          </TouchableOpacity>
          <TextInput
            placeholder="내 동네 이름(동,읍,면)으로 검색"
            style={{
              paddingLeft: 10,
              flex: 1,
              fontSize: 16,
              paddingVertical: 16,
              fontWeight: 'bold',
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 4,
              backgroundColor: '#ccc',
            }}
            onChangeText={handleSearch}
            value={searchText}
          />
        </View>
        <TouchableOpacity style={{flexDirection:'row', justifyContent:'center', alignItems:'center',  backgroundColor: '#ffc313', margin:16, padding:8, borderRadius:4}}>
        <View style={{flex:1, alignItems:'center'}}>
          <Text style={{ color:'#333', fontWeight:'bold', alignItems:'center', }}>현재 위치로 찾기</Text>
          </View>
        </TouchableOpacity>
        <View style={{paddingHorizontal:12, marginTop:8}}>
          <Text style={{fontSize:16, fontWeight:'bold'}}>근처동네</Text>
        </View>
        <FlatList
        data={filteredPlaces}
        renderItem={renderItme}
        keyExtractor={item => item.id.toString()}
        />
      </SafeAreaView>
    );
  };

  import React, {useState} from 'react';
  import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    TextInput,
    FlatList,
  } from 'react-native';
  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

  dummy_places = [
    {
      id: 1,
      name: '서울 서대문구',
    },
    {
      id: 2,
      name: '서울 은평규',
    },
    {
      id: 3,
      name: '서울 마포구',
    },
    {
      id: 4,
      name: '서울 서대문구 충현동',
    },
    {
      id: 5,
      name: '서울 서대문구 충정로2가',
    },
    {
      id: 6,
      name: '서울 마포구 아현동',
    },
    {
      id: 7,
      name: '서울 서대문구 냉천동',
    },
    {
      id: 8,
      name: '서울 서대문구 미근동',
    },
    {
      id: 9,
      name: '서울 중구 만리동2가',
    },
    {
      id: 10,
      name: '서울 중구 중림동',
    },
    {
      id: 11,
      name: '서울 중구 만리동2가',
    },
    {
      id: 12,
      name: '서울 중구 만리동1가',
    },
    {
      id: 13,
      name: '서울 중구 중림동',
    },
    {
      id: 14,
      name: '서울 중구 의주로1가',
    },
    {
      id: 15,
      name: '서울 중구 의주로2가',
    },
    {
      id: 16,
      name: '서울 서대문구 옥천동',
    },
    {
      id: 17,
      name: '서울 중구 순화동',
    },
    {
      id: 18,
      name: '서울 종로구 평동',
    },
    
  ];


  export default NeighborhoodAdd;