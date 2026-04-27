import { ListRenderItemInfo, Text, View } from "react-native";

import Contato from "../models/Contato";
import { styles } from "../styles/styles";

interface ContactDetailsProps extends ListRenderItemInfo<Contato> {
  onEdit(contato: Contato): void;
  onRemove(id: number): void;
}

const ContactDetails: React.FC<ContactDetailsProps> = (props) => {
  const item = props.item;
  return (
    <View key={"item-" + item.id} style={[styles.secondaryContainer]}>
      <Text style={[styles.title]}>{item.nome}</Text>
      <Text style={[styles.body]}>📞 {item.telefone}</Text>
      <Text style={styles.body}>✉️ {item.email}</Text>
    </View>
  );
};

export default ContactDetails;
