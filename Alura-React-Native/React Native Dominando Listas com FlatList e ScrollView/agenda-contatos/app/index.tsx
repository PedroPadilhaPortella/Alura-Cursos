import { SafeAreaView } from "react-native-safe-area-context";

import ContactsList from "../components/ContactsList";
import { styles } from "../styles/styles";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ContactsList />
    </SafeAreaView>
  );
}
