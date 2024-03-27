async function requestPermission() {
  try {
    if (Platform.OS === 'ios') {
      return await Geolocation.requestAuthorization('always');
    }
  } catch (e) {
    console.log(e);
  }
}

const Neighborhood = ({navigation, route}) => {
  const [location, setLocation] = useState(null);
  const [selectedNeighborhood, setSelectedNeighborhood] = useState(null);

  useEffect(() => {
    if (route.params && route.params.selectedPlace) {
      setSelectedNeighborhood(route.params.selectedPlace);
    }

    Geolocation.getCurrentPosition(
      pos => {
        setLocation(pos);
      },
      error => {
        console.log(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 3600,
        maximumAge: 3600,
      },
    );
  }, [route.params]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 15,
          paddingHorizontal: 16,
        }}>
        <TouchableOpacity>
          <Text onPress={() => navigation.goBack()} style={{fontSize: 20}}>
            X
          </Text>
        </TouchableOpacity>

        <Text style={{fontSize: 18, paddingVertical: 16, fontWeight: 'bold'}}>
          내 동네 설정
        </Text>
      </View>

      {location && (
        <MapView
          style={{flex: 1}}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}>
          {/* 내 위치를 나타내는 점 추가 */}
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="내 위치"
            description="현재 위치입니다"
          />
          {/* 서대문구, 마포구, 은평구 경계를 나타내는 Polygon 추가 */}
          {boundaries.map((boundary, index) => (
            <Polygon
              key={index}
              coordinates={Object.values(boundary)[0]}
              fillColor="rgba(255, 0, 0, 0.5)"
              strokeColor="red"
              strokeWidth={2}
            />
          ))}
        </MapView>
      )}

      <View
        style={{
          backgroundColor: '#fff',
          flex: 0.3,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>
        <View style={{padding: 16}}>
          <Text>내 동네</Text>
        </View>
        <View style={{flexDirection: 'row', paddingHorizontal: 16, gap: 8}}>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: '#fff',
              backgroundColor: '#ffc313',
              borderRadius: 8,
              paddingVertical: 12,
            }}>
            <View>
              <Text>북아현동</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('NeighborhoodAdd')}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#CCCCCC',
              borderRadius: 8,
            }}>
            <View>
              <Text>
                {selectedNeighborhood ? (
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingTop: 8,
                    }}>
                    <Text>{selectedNeighborhood}</Text>
                    <TouchableOpacity
                      onPress={() => setSelectedNeighborhood(null)}>
                      <Text style={{marginLeft: 20}}>X</Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  '동네 추가'
                )}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

import React, {useEffect, useState} from 'react';
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Polygon, Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

const SeodaemunBoundary = [
  {latitude: 37.567945, longitude: 126.959437},
  {latitude: 37.562431, longitude: 126.954397},
  {latitude: 37.56483, longitude: 126.954715},
  {latitude: 37.56555, longitude: 126.941382},
  {latitude: 37.571987, longitude: 126.932812},
  {latitude: 37.579213, longitude: 126.936773},
  {latitude: 37.579213, longitude: 126.936773},
  {latitude: 37.579213, longitude: 126.936773},
  {latitude: 37.579213, longitude: 126.936773},
  {latitude: 37.579213, longitude: 126.936773},
  {latitude: 37.579213, longitude: 126.936773},
  {latitude: 37.579213, longitude: 126.936773},
  {latitude: 37.579213, longitude: 126.936773},
  {latitude: 37.579213, longitude: 126.936773},
];

const MapoguBoundary = [
  {latitude: 37.554474, longitude: 126.956308},
  {latitude: 37.548092, longitude: 126.954994},
  {latitude: 37.539758, longitude: 126.950007},
  {latitude: 37.541502, longitude: 126.940443},
  {latitude: 37.549807, longitude: 126.943177},
  {latitude: 37.549096, longitude: 126.947307},
  {latitude: 37.548524, longitude: 126.936813},
  {latitude: 37.54778, longitude: 126.932218},
  {latitude: 37.553838, longitude: 126.918765},
  {latitude: 37.547027, longitude: 126.909029},
  {latitude: 37.566404, longitude: 126.901763},
  {latitude: 37.566404, longitude: 126.901763},
  {latitude: 37.563027, longitude: 126.921519},
  {latitude: 37.566404, longitude: 126.901763},
  {latitude: 37.566404, longitude: 126.901763},
  {latitude: 37.570748, longitude: 126.87984},
];

const EunpyeongguBoundary = [
  {latitude: 37.605314, longitude: 126.934567},
  {latitude: 37.602766, longitude: 126.928839},
  {latitude: 37.602766, longitude: 126.928839},
  {latitude: 37.602766, longitude: 126.928839},
  {latitude: 37.602766, longitude: 126.928839},
  {latitude: 37.611074, longitude: 126.907302},
  {latitude: 37.612256, longitude: 126.923141},
  {latitude: 37.602766, longitude: 126.928839},
  {latitude: 37.602766, longitude: 126.928839},
  {latitude: 37.602766, longitude: 126.928839},
  {latitude: 37.604582, longitude: 126.914611},
  {latitude: 37.602766, longitude: 126.928839},
  {latitude: 37.602766, longitude: 126.928839},
  {latitude: 37.584166, longitude: 126.905952},
  {latitude: 37.585574, longitude: 126.894529},
  {latitude: 37.639681, longitude: 126.937804},
];

const boundaries = [
  {Seodaemun: SeodaemunBoundary},
  {Mapogu: MapoguBoundary},
  {Eunpyeonggu: EunpyeongguBoundary},
];

export default Neighborhood;
