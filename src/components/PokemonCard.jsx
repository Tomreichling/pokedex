import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

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
  const [isCaptured, SetCapture] = useState(false);
  return (
    <View style={isCaptured ? styles.card1 : styles.card2 }>
      <Image source={{ uri: `${ARTWORK}${number}.png` }} style={styles.image} />

      <View style={styles.infoContainer}>
        <Text style={styles.texts}> # {number} </Text>
        <Text style={styles.textsBold}>{name} </Text>
        <Text style={[styles.type, { backgroundColor: color }]}> {type} </Text>
      </View>
      <Pressable style= {isCaptured ? styles.button1 : styles.button2 } onPress= {() => SetCapture(!isCaptured)}>
        <Text style= {isCaptured ? styles.text1 : styles.text2 }>
          {isCaptured ? "Capturé ✓" : "Capturer"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card1: {
    backgroundColor: "#e5effe",
    borderWidth: 2,
    borderColor: "#2573e7",
    borderRadius: 15,
    padding: 20,
    marginHorizontal: 30,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  card2: {
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#ffffff",
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
  button1: {
    backgroundColor: "#2573e7",
    borderRadius: 20,
    padding: 5,
  },
  button2: {
    color: "#2573e7",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#2573e7",
    padding: 5,
  },
  text1: {
    color: "#ffffff",
  },
 text2: {
    color: "#2573e7",
  }
});
