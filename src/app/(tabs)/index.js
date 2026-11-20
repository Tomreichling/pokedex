import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import BadgeCard from "../../components/BadgeCard";
import PokemonCard from "../../components/PokemonCard";
import Titre from "../../components/Titre";


const API = "https://pokeapi.co/api/v2/pokemon?limit=151";

const BADGES = [
  { number: 23, name: "Boulder Badge" },
  { number: 25, name: "Thunder Badge" },
  { number: 54, name: "Zephyr Badge" },
];

export default function Index() {
  const [pokemons, setpokemons] = useState(null);

  const [filtreFeu, SetFiltreFeu] = useState(false);
  const [filtreCaptures, SetFiltreCaptures] = useState(false);
  const [captures, setCaptures] = useState([]);

  async function charger() {
  const reponse = await fetch(API);
  const data = await reponse.json();
  const liste = data.results.map((p, i) => ({ number: i + 1, name: p.name }));
  setpokemons(liste);
  }

  useEffect(() => {
  charger();
  }, []);

  if (pokemons === null) {
  return <ActivityIndicator/>;
  }

  function capturer(number) {
    if (captures.includes(number)) {
      setCaptures(captures.filter((capturedNumber) => capturedNumber !== number));
    } else {
      setCaptures([...captures, number]);
    }
  }

  let visible = filtreFeu ? pokemons.filter((p) => p.type === "Feu") : pokemons;
  visible = filtreCaptures ? visible.filter((p) => captures.includes(p.number)) : visible;

  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mon Pokédex</Text>
        <Text style={styles.count}>
          {pokemons.length} Pokémon - {captures.length} capturés
        </Text>

        <View style={styles.filters}>
          <Pressable
            onPress={() => SetFiltreFeu(!filtreFeu)}
            style={filtreFeu ? styles.ButtonTypeSelected : styles.ButtonTypeNotSelected}
          >
            <Text style={filtreFeu ? styles.textTypeSelected : styles.textTypeNotSelected}>
              {!filtreFeu ? "Type Feu" : "Tout afficher"}
            </Text>
          </Pressable>
          <Pressable
            onPress={() => SetFiltreCaptures(!filtreCaptures)}
            style={filtreCaptures ? styles.ButtonTypeSelected : styles.ButtonTypeNotSelected}
          >
            <Text style={filtreCaptures ? styles.textTypeSelected : styles.textTypeNotSelected}>
              {!filtreCaptures ? "Mes captures" : "Tout afficher"}
            </Text>
          </Pressable>
        </View>
      </View>
      
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContent}
        data={visible}
        keyExtractor={(item) => String(item.number)}
        extraData={captures}
        numColumns={2}
        renderItem={({ item }) => (
          <PokemonCard
            name={item.name}
            number={item.number}
            type={item.type}
            captured={captures.includes(item.number)}
            onCapture={() => capturer(item.number)}
          />
        )}
        ListFooterComponent={
          <View style={styles.badges}>
            <Titre titre="Mes Badges" nombres={BADGES.length} />
            {BADGES.map((badge) => (
              <BadgeCard
                key={badge.number}
                name={badge.name}
                number={badge.number}
              />
            ))}
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eeeff7",
    flex: 1,
  },
  header: {
    padding: 14,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 14,
    paddingBottom: 14,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
  },
  count: {
    fontSize: 15,
    marginLeft: 5,
    marginBottom: 8,
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
    flexDirection: "row",
    marginHorizontal: 20,
    marginBottom: 8,
  },
  badges: {
    marginTop: 16,
  },
});
