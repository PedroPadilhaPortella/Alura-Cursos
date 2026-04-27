import { Text, View } from "react-native";

import { styles } from "../styles/styles";

const EmptyList = () => (
  <View style={styles.emptyListContainer}>
    <Text style={[styles.body, styles.emptyListTitle]}>
      Nenhum contato encontrado
    </Text>
    <Text style={[styles.body, styles.emptyListSubtitle]}>
      Adicione um novo contato para começar
    </Text>
  </View>
);

export default EmptyList;
