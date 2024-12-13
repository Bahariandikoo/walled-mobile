import { Text, TextInput, View, StyleSheet } from "react-native";
function Input({ text }) {
  return (
    <View style={styles.Container}>
      <Text style={styles.placeholder}> {text}</Text>
      <TextInput style={styles.Input}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    marginTop: 10,
    borderRadius: 10,
    padding: 10,
    width: "100%",
    backgroundColor: "white",
    shadowColor: "black",
    elevation: 2,
  },
  placeholder: {
    color: "black",
  },
  Input: {
    borderBottomColor: "#E1E1E1",
    borderBottomWidth: 1,
    marginBottom: 5,
  },
});

export default Input;
