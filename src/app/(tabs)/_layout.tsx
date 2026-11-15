import { Image } from "expo-image";
import { Tabs } from "expo-router";

export default function TabsLayout() {
    return (
    <Tabs>
        <Tabs.Screen name="index" options={{ title: "Pokédex", tabBarIcon: ({ focused }) => (
            <Image
              source={focused
                ? require("../../../assets/svg/home2.svg")
                : require("../../../assets/svg/home1.svg")}
              style={{ width: 24, height: 24 }}
            />
        ),}}/>
        <Tabs.Screen name="profil" options={{ title: "Profil",  tabBarIcon: ({ focused }) => (
            <Image
              source={focused
                ? require("../../../assets/svg/profil2.svg")
                : require("../../../assets/svg/profil1.svg")}
              style={{ width: 24, height: 24 }}
            />
        ),}}/>
    </Tabs>

    );
}
