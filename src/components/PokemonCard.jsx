import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const ARTWORK =
  "https://raw.githubusercontent.com/PokeAPI/sprites" +
  "/master/sprites/pokemon/other/official-artwork/";

const TYPE_COLORS = {
  Plante: "#78C850",
  Feu: "#F08030",
  Eau: "#6890F0",
  Électrik: "#F8D030",
  Insecte: "#A8B820",
  Normal: "#A8A878",
  Poison: "#A040A0",
  Fée: "#EE99AC",
  Sol: "#E0C068",
  Combat: "#C03028",
  Psy: "#F85888",

};


export default function PokemonCard({ name, number, type, captured, onCapture}) {
  const color = TYPE_COLORS[type];
  
  return (
    <View style={captured ? styles.card1 : styles.card2 }>
      <Image source={{ uri: `${ARTWORK}${number}.png` }} style={styles.image} />

      <View style={styles.infoContainer}>
        <Text style={styles.texts}> # {number} </Text>
        <Text style={styles.textsBold}>{name} </Text>
        <Text style={[styles.type, { backgroundColor: color }]}> {type} </Text>
      </View>

      <Pressable style= {captured ? styles.button1 : styles.button2 } onPress={onCapture}>
        <Text style= {captured ? styles.text1 : styles.text2 }>
          {captured ? "Capturé ✓" : "Capturer"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card1: {
    flex: 1,
    backgroundColor: "#e5effe",
    borderWidth: 2,
    borderColor: "#2573e7",
    borderRadius: 15,
    padding: 10,
    margin: 6,
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 210,
  },
  card2: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#ffffff",
    borderRadius: 15,
    padding: 10,
    margin: 6,
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 210,
  },
  image: {
    width: 96,
    height: 96,
  },
  infoContainer: {
    width: "100%",
    alignItems: "center",
  },
  texts: {
    fontWeight: "500",
    fontSize: 13,
  },
  textsBold: {
    fontWeight: "600",
    fontSize: 17,
  },
  type: {
    backgroundColor: "#eeeff7",
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginTop: 5,
    textAlign: "center",
  },
  button1: {
    backgroundColor: "#2573e7",
    borderColor: "#2573e7",
    borderWidth: 2,
    borderRadius: 20,
    padding: 5,
    marginTop: 10,
  },
  button2: {
    color: "#2573e7",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#2573e7",
    padding: 5,
    marginTop: 10,
  },
  text1: {
    color: "#ffffff",
  },
 text2: {
    color: "#2573e7",
  }
});
