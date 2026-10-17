import { Image, StyleSheet, Text, View } from "react-native";

const ARTWORK =
  "https://raw.githubusercontent.com/PokeAPI/sprites" +
  "/master/sprites/pokemon/other/official-artwork/";

const TYPE_COLORS = {
  Plante: "#78C850",
  Feu: "#F08030",
  Eau: "#6890F0",
  Électrik: "#F8D030",
};

export default function PokemonCard({ name, number, type }) {
  const color = TYPE_COLORS[type];
  return (
    <View style={styles.card}>
      <Image source={{ uri: `${ARTWORK}${number}.png` }} style={styles.image} />

      <View style={styles.infoContainer}>
        <Text style={styles.texts}> # {number} </Text>
        <Text style={styles.textsBold}>{name} </Text>
        <Text style={[styles.type, { backgroundColor: color }]}> {type} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 15,
    padding: 20,
    marginHorizontal: 30,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
  },
  texts: {
    fontWeight: "500",
    fontSize: 15,
  },
  textsBold: {
    fontWeight: "600",
    fontSize: 20,
  },
  type: {
    alignSelf: "flex-start",
    backgroundColor: "#eeeff7",
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginTop: 5,
    textAlign: "center",
  },
});
