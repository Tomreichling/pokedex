import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

export default function Pokemon() {

  const { id } = useLocalSearchParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    async function chargerPokemon() {
      
        const reponse = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );

        if (!reponse.ok) {
          throw new Error("Pokémon introuvable");
        }

        setPokemon(await reponse.json());
        setLoading(false);
      }
    

    chargerPokemon();
  }, [id]);

  if (loading) return <ActivityIndicator />;
  if (!pokemon) return <Text>Pokemon not found</Text>;

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: pokemon.name }} />

      <Image
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
        }}
        style={styles.image}
      />

      <Text>{pokemon.name}</Text>
      <Text>{pokemon.types[0].type.name}</Text>
      <Text>Taille : {pokemon.height / 10} m</Text>
      <Text>Poids : {pokemon.weight / 10} kg</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", padding: 24 },
  image: { width: 96, height: 96 },
});