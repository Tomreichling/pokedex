import { ScrollView, StyleSheet, View } from "react-native";
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

  return (
    <ScrollView style={styles.container}>
      <Titre titre="Mon Pokedex" nombres={POKEMONS.length} />
      <View>
        {POKEMONS.map((pokemon) => (
          <PokemonCard
            name={pokemon.name}
            number={pokemon.number}
            type={pokemon.type}
          />
        ))}
      </View>
      <Titre titre={"Mes types feu"} nombres={feu.length} />
      <View>
        {feu.map((feu) => (
          <PokemonCard name={feu.name} number={feu.number} type={feu.type} />
        ))}
      </View>
      <Titre titre={"Mes Badges"} nombres={BADGES.length} />
      <View>
        {BADGES.map((badges) => (
          <BadgeCard name={badges.name} number={badges.number} />
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
});
