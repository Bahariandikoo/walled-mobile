import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
  Alert,
} from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import Checkbox from "expo-checkbox";
import { useState } from "react";

export default function App() {
  const [isChecked, setChecked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require("../assets/walledLogo.png")} />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Fullname"
        placeholderTextColor="#aaa"
      />

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

      <TextInput
        style={styles.input}
        placeholder="Avatar Url"
        placeholderTextColor="#aaa"
      />
      {/* <Input text={"Notes"} />
       */}
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
        />
        <Text style={styles.paragraph}>
          I have read and agree to the{" "}
          <Pressable onPress={() => setModalVisible(true)}>
            <Text style={{ color: "#19918F" }}>Terms and Conditions *</Text>
          </Pressable>
        </Text>
      </View>
      <Button text="Register" />
      <View style={styles.haveAccount}>
        <Text>
          Have account?
          <Link href={"/"} style={styles.signHere}>
            Login Here
          </Link>
        </Text>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              velit quaerat animi suscipit voluptatem ab expedita! Culpa
              perferendis nemo quae, ducimus, accusantium quod at saepe
              inventore autem ullam vel laboriosam. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Tenetur deleniti voluptates ipsam
              error, in soluta esse rem nihil. Temporibus, eligendi! Nostrum
              debitis voluptatem eveniet quo voluptatum pariatur repellendus
              culpa. Eum! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Rerum velit quaerat animi suscipit voluptatem ab expedita!
              Culpa perferendis nemo quae, ducimus, accusantium quod at saepe
              inventore autem ullam vel laboriosam. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Tenetur deleniti voluptates ipsam
              error, in soluta esse rem nihil. Temporibus, eligendi! Nostrum
              debitis voluptatem eveniet quo voluptatum pariatur repellendus
              culpa. Eum! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Rerum velit quaerat animi suscipit voluptatem ab expedita!
              Culpa perferendis nemo quae, ducimus, accusantium quod at saepe
              inventore autem ullam vel laboriosam. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Tenetur deleniti voluptates ipsam
              error, in soluta esse rem nihil. Temporibus, eligendi! Nostrum
              debitis voluptatem eveniet quo voluptatum pariatur repellendus
              culpa. Eum! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Rerum velit quaerat animi suscipit voluptatem ab expedita!
              Culpa perferendis nemo quae, ducimus, accusantium quod at saepe
              inventore autem ullam vel laboriosam. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Tenetur deleniti voluptates ipsam{" "}
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#19918F",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    margin: 8,
  },
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
  signHere: {
    color: "#19918F",
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
