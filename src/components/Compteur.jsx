import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function Compteur() {
  const [nombrePokeBall, setCount] = useState(0);
  return (
    <View>
      <View>
        <Text> Poké ball : {nombrePokeBall}</Text>
        <Pressable onPress={() => setCount(nombrePokeBall - 1)}>
          <Text>-</Text>
        </Pressable>
        <Pressable onPress={() => setCount(nombrePokeBall + 1)}>
          <Text>+</Text>
        </Pressable>
        <Pressable onPress={() => setCount(0)}>
          <Text>Reset</Text>
        </Pressable>
      </View>
    </View>
  );
}
