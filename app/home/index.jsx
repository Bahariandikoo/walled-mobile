import { Link, Stack } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Image, Text, View, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.boxHeader}>
        <View style={styles.header}>
          <Image
            source={{ uri: "https://via.placeholder.com/50" }}
            style={styles.profileImage}
          />
          <View style={styles.headerTextContainer}>
            <Text style={styles.name}>Chelsea Immanuela</Text>
            <Text style={styles.accountType}>Personal Account</Text>
          </View>
          <FontAwesome size={28} name="sun-o" color={"#F8AB39"} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  boxHeader: {
    width: "100%",
    backgroundColor: "white",
    shadowColor: "black",
    elevation: 2,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#fffff",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: "#19918F",
  },
  headerTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  accountType: {
    fontSize: 14,
    color: "#888",
  },
  sunIcon: {
    fontSize: 24,
  },
});
