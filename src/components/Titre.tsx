import { StyleSheet, Text, View } from "react-native";

export default function Titre({ titre, nombres }) {
  return (
    <View style={styles.back}>
      <Text style={styles.titreh1}> {titre} </Text>
      <Text style={styles.p}> {nombres + " disponibles"} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  back: {
    padding: 10,
  },
  titreh1: {
    fontWeight: 800,
    fontSize: 30,
  },
  p: {
    fontSize: 15,
    marginLeft: 5,
  },
});
