import { StyleSheet, Text, View } from "react-native";

const ARTWORK =
  "https://raw.githubusercontent.com/PokeAPI/sprites" +
  "/master/sprites/pokemon/other/official-artwork/";

export default function Badge({ name, number }) {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.texts}> # {number} </Text>
        <Text style={styles.textsBold}>{name} </Text>
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
    backgroundColor: "#3759c8",
  },
  texts: {
    fontWeight: "500",
    fontSize: 15,
  },
  textsBold: {
    fontWeight: "600",
    fontSize: 20,
  },
});
