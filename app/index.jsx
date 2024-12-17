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
import { z } from "zod";
import { useState } from "react";
import axios, { Axios } from "axios";
import { useRouter, router } from "expo-router"; // For Expo Router
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(4, { message: "Must be 4 or more characters long" }),
});

export default function App() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errorMsg, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const router = useRouter();

  const handleInputChange = (key, value) => {
    setForm({ ...form, [key]: value });
    try {
      LoginSchema.pick({ [key]: true }).parse({ [key]: value });
      setErrors((prev) => ({ ...prev, [key]: "" }));
    } catch (error) {
      setErrors((prev) => ({ ...prev, [key]: error.errors[0].message }));
    }
  };

  const handleSubmit = async () => {
    try {
      LoginSchema.parse(form);

      const res = await axios.post(
        "https://walled-api.vercel.app/auth/login",
        form
      );
      await AsyncStorage.setItem("token", res.data.data.token);
      router.replace("/(home)");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response) {
          setServerError(err.response.data.message || "An error occurred");
        } else if (err.request) {
          setServerError("Network error. Please try again later.");
          console.error("Network Error:", err.request);
        } else {
          setServerError("An unexpected error occurred.");
          console.error("Request Setup Error:", err.message);
        }
      } else if (err?.errors) {
        const errors = {};
        err.errors.forEach((item) => {
          const key = item.path[0];
          errors[key] = item.message;
        });
        setErrors(errors);
      } else {
        setServerError("An unknown error occurred.");
        console.error("Unhandled Error:", err);
      }
    }
  };
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
        onChangeText={(text) => handleInputChange("email", text)}
        value={form.email}
      />
      {errorMsg.email ? (
        <Text style={styles.errorMsg}>{errorMsg.email}</Text>
      ) : null}

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry={true}
        // keyboardType="number-pad"
        onChangeText={(text) => handleInputChange("password", text)}
        value={form.password}
      />
      {errorMsg.password ? (
        <Text style={styles.errorMsg}>{errorMsg.password}</Text>
      ) : null}

      {/* <Input text={"Notes"} />
       */}

      <Button style={styles.btn} handlePress={handleSubmit} text="Login" />
      <View style={styles.haveAccount}>
        <Text>
          Don't have account?
          <Link href={"/register"} style={styles.registerHere}>
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
  errorMsg: {
    color: "red",
    fontSize: 12,
    width: "100%",
    textAlign: "left",
  },
});
