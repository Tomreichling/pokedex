import { Image, StyleSheet, Text, View } from "react-native";



export default function Profil() {

    return (
        <View>
            <View style={styles.container}>
                <Image source={{ uri: "https://github.com/TomReichling.png" }} style={styles.image}/>
                <View style={styles.infos}>
                    <Text style={styles.text}>Dresseur :</Text>
                    <Text style={styles.text}>  Tom</Text>
                    <Text style={styles.text}> Reichling</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 20,
    backgroundColor: "#ffffff",
    margin: 12,
    borderRadius: 20,
    shadowColor: "#000000",
  },
  image: {
    width: 96,
    height: 96,
    borderRadius: 48,
  },
  infos: {
    flex: 1,
    flexDirection: "row",
    
  },
  text: {
    color: "#1f2937",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 22,
  },
});