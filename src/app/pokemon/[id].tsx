import { Stack, useLocalSearchParams } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import POKEMONS from "../../data/pokemons";

const ARTWORK =
  "https://raw.githubusercontent.com/PokeAPI/sprites" +
  "/master/sprites/pokemon/other/official-artwork/";

export default function Pokemon() {

  const {id} = useLocalSearchParams();
  const pokemon = POKEMONS.find((p) => p.number === Number(id));

  if (!pokemon) {
    return <Text>Pokemon not found</Text>;
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: `${pokemon.name}` }} />
      <Image source={{ uri: `${ARTWORK}${pokemon.number}.png` }} style={styles.image}/>
      <Text> #{pokemon.number} </Text>
      <Text>{pokemon.name} </Text>
      <Text> {pokemon.type} </Text>
    </View>
  );
}


const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: "center",
    padding: 24 ,
  },
image: {
    width: 96,
    height: 96,
  },
})