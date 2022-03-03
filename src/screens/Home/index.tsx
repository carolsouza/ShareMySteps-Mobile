import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { RoundedButton } from "../../components/RoundedButton";
import { TopBar } from "../../components/TopBar";
import { HomeContainer } from "./styles";
import { Dimensions, StyleSheet } from "react-native";

import MapView, {
  Callout,
  Marker,
  PROVIDER_GOOGLE,
  Region,
} from "react-native-maps";

import * as Location from "expo-location";

import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const { navigate } = useNavigation<any>();
  const [region, setRegion] = useState<Region>();

  const initialRegion = {
    latitude: 49.2576508,
    longitude: -123.2639868,
    latitudeDelta: 100,
    longitudeDelta: 100,
  };

  function handleChatButton() {
    navigate("VideoCall");
  }

  const getCurrentPosition = async () => {
    let { status } = await Location.requestPermissionsAsync();
    console.log(status)

    if (status !== "granted") {
      Alert.alert("Ops!", "Permissão de acesso a localização negada.");
    }

    let {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync();
    console.log(latitude, longitude);

    setRegion({ latitude, longitude, latitudeDelta: 1, longitudeDelta: 1 });
  };

  useEffect(() => {
    getCurrentPosition();
  }, []);

  return (
    <>
      <TopBar topButton="home" />
      <HomeContainer>
        <RoundedButton icon="chat" onPress={handleChatButton} />
        <MapView
          style={{
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
          }}
          provider={PROVIDER_GOOGLE}
          region={region}
          initialRegion={initialRegion}
        >
          <Marker
            calloutAnchor={{
              x: 2.9,
              y: 0.8,
            }}
            coordinate={{
              latitude: -22.3256307,
              longitude: -49.0699806,
            }}
          ></Marker>
        </MapView>
      </HomeContainer>
    </>
  );
}
