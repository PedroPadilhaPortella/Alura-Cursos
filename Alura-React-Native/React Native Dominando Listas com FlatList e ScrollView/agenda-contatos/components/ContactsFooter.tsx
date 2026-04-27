import { Text, View } from "react-native";

import { styles } from "../styles/styles";

const ContactsFooter = () => (
  <View style={styles.listaFooter}>
    <Text style={[styles.footerCredits]}>
      Criado por Pedro{"\n"}
      Todos os direitos reservados © 2026
    </Text>
  </View>
);

export default ContactsFooter;
