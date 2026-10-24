import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Aide() {
  const [aidePanel, changeAidePanel] = useState(false);
  return (
    <View>
      <Pressable
        style={styles.button}
        onPress={() => changeAidePanel(!aidePanel)}
      >
        <Text style={styles.text}>
          {aidePanel ? "Masquer l'aide" : "Montrer l'aide"}
        </Text>
      </Pressable>
      <Text style={styles.text2}>
        {aidePanel && "Ceci est une aide très utile"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2573e7",
    borderRadius: 15,
    padding: 10,
    marginHorizontal: 500,
    marginVertical: 10,
  },
  text: {
    color: "#ffffff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text2: {
    color: "#000000",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
