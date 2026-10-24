import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import BadgeCard from "../components/BadgeCard";
import PokemonCard from "../components/PokemonCard";
import Titre from "../components/Titre";

const POKEMONS = [
  { number: 1, name: "Bulbizarre", type: "Plante" },
  { number: 4, name: "Salamèche", type: "Feu" },
  { number: 7, name: "Carapuce", type: "Eau" },
  { number: 25, name: "Pikachu", type: "Électrik" },
  { number: 37, name: "Goupix", type: "Feu" },
  { number: 43, name: "Mystherbe", type: "Plante" },
];

const BADGES = [
  { number: 23, name: "Boulder Badge" },
  { number: 25, name: "Thunder Badge" },
  { number: 54, name: "Zephyr Badge" },
];

export default function Index() {
  console.log(POKEMONS.map((p) => p.name));
  const feu = POKEMONS.filter((p) => p.type === "Feu");
  console.log(feu.map((p) => p.name));

  const [filtreFeu, SetFiltreFeu] = useState(false);
  const [search, setSearch] = useState("");

  const visible = filtreFeu ?  POKEMONS.filter((p) => p.type === "Feu"): POKEMONS;

  return (
    <ScrollView style={styles.container}>
      <Titre titre="Mon Pokedex" nombres={POKEMONS.length} />
      <View style={styles.filters}>
        <Pressable onPress={() => SetFiltreFeu(!filtreFeu)} style={filtreFeu ? styles.ButtonTypeSelected : styles.ButtonTypeNotSelected}>
          <Text style={filtreFeu ? styles.textTypeSelected : styles.textTypeNotSelected}>
            {!filtreFeu ? "Type Feu" : " Tout afficher"}
          </Text>
        </Pressable>
      </View>
      <View>
        {visible.map((pokemon) => (
          <PokemonCard
            key={pokemon.number}
            name={pokemon.name}
            number={pokemon.number}
            type={pokemon.type}
          />
        ))}
      </View>
      <Titre titre={"Mes Badges"} nombres={BADGES.length} />
      <View>
        {BADGES.map((badges) => (
          <BadgeCard
            key={badges.number}
            name={badges.name}
            number={badges.number}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eeeff7",
    flex: 1,
  },
  ButtonTypeSelected: {
    alignItems: "center",
    backgroundColor: "black",
    borderWidth: 2,
    borderRadius: 20,
    padding: 5,
    margin: 5,
  },
  ButtonTypeNotSelected: {
    alignItems: "center",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 20,
    padding: 5,
    margin: 5,
  },
  textTypeSelected: {
    color: "white",
  },
  textTypeNotSelected: {
    color: "black",
  },
  filters: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 20,

  }
});
