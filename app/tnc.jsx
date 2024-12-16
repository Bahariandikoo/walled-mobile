import { ScrollView, View, Modal, Text } from "react-native";

export default function Tnc() {
  return (
    <ScrollView>
      <Modal animationType="slide" transparent={true}>
        <View>
          <View>
            <Text style={{ color: "black" }}>Hello World</Text>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}
