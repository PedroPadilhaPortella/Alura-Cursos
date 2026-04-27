import { Text, View } from "react-native";

import { styles } from "../styles/styles";

const ContactsHeader = () => (
  <View style={styles.listaHeader}>
    <Text style={[styles.title, styles.headerTitle]}>Contatos</Text>
  </View>
);

export default ContactsHeader;
