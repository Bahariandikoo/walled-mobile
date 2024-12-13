import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require("../assets/walledLogo.png")} />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry={true}
        keyboardType="number-pad"
      />
      {/* <Input text={"Notes"} />
       */}
      <Button text="Login" />
      <View style={styles.haveAccount}>
        <Text>
          Don't have account?
          <Link href={"/home"} style={styles.registerHere}>
            Register Here
          </Link>
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  haveAccount: {
    alignItems: "left",
    marginTop: 10,
  },
  registerHere: {
    color: "#19918F",
    fontWeight: "bold",
  },
  logo: {
    marginBottom: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
    fontSize: 16,
  },
});
