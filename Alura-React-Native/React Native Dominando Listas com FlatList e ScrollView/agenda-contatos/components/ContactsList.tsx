import axios from "axios";
import { useRef, useState } from "react";
import { FlatList, RefreshControl, View } from "react-native";

import Contato from "../models/Contato";
import ContactDetails from "./ContactDetails";
import ContactsFooter from "./ContactsFooter";
import ContactsHeader from "./ContactsHeader";
import EmptyList from "./EmptyList";
import ItemSeparator from "./ItemSeparator";

const API = axios.create({ baseURL: "https://fakerapi.it/api/v2" });

const contatos: Contato[] = [
  {
    id: 1,
    nome: "João Silva",
    telefone: "1111-1111",
    email: "joao@teste.com",
  },
  {
    id: 2,
    nome: "Maria Silva",
    telefone: "2222-2222",
    email: "maria@teste.com",
  },
  {
    id: 3,
    nome: "Jose Santos",
    telefone: "3333-3333",
    email: "jose@teste.com",
  },
  {
    id: 4,
    nome: "Marta Gonçalves",
    telefone: "4444-4444",
    email: "marta@teste.com",
  },
];

export default function ContactsList() {
  const [contacts, setContacts] = useState<Contato[]>([]);
  const flatListRef = useRef(null);

  const [isRefreshing, setRefreshing] = useState(false);
  const [refreshCount, setRefreshCount] = useState(0);

  const refresh = () => {
    setRefreshing(true);

    setTimeout(async () => {
      if (refreshCount === 0) {
        setContacts(contatos);
        console.log("Contatos carregados do estado local");
      } else if (refreshCount === 1) {
        generateContacts();
        console.log("Contatos gerados a partir do estado local");
      } else {
        console.log("Buscando contatos da API...");
        await fetchContactsFromAPI(refreshCount * 10);
        console.log("Contatos buscados da API");
      }

      setRefreshing(false);
      setRefreshCount(refreshCount + 1);
    }, 1000);
  };

  const generateContacts = async () => {
    const tempContacts = [];
    for (let i = 0; i < 100; i++) {
      const contato = contatos[i % 4];
      tempContacts.push({ ...contato, id: i });
    }
    setContacts(tempContacts);
  };

  const fetchContactsFromAPI = async (count = 10) => {
    try {
      const response = await API.get(`/persons?_quantity=${count}`);
      const fetchedContacts = response.data.data.map((item: any) => ({
        id: item.id,
        nome: `${item.firstname} ${item.lastname}`,
        telefone: item.phone,
        email: item.email,
      }));
      setContacts(fetchedContacts);
    } catch (error: any) {
      console.error("Erro ao buscar contatos da API:", error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {/* <View style={{flex: 1}}>
        <Text style={[styles.body]}>Controles</Text>
        <Button title="Ir para o indice 50" onPress={()=>{
          flatListRef.current.scrollToIndex( {
            index: 50,
            animated: true,
            viewPosition: 1.0 // 0=topo, 0.5=meio, 1=fundo
          } );
        }} />
        <Button title="Voltar ao inicio da lista" onPress={()=>{
          flatListRef.current.scrollToOffset( {
            offset: 0, 
            animated: true,
          } );
        }} />
      </View> */}
      <View style={{ flex: 1, alignItems: "stretch" }}>
        <FlatList
          ref={flatListRef}
          style={{ flex: 1 }}
          contentContainerStyle={{
            minHeight: "90%",
          }}
          data={contacts}
          keyExtractor={(item) => `contato-${item.id}`}
          renderItem={(flatProps) => (
            <ContactDetails
              {...flatProps}
              onEdit={() => {}}
              onRemove={() => {}}
            />
          )}
          ItemSeparatorComponent={ItemSeparator}
          ListHeaderComponent={ContactsHeader}
          ListFooterComponent={ContactsFooter}
          ListEmptyComponent={EmptyList}
          initialNumToRender={8} // Quantidade de itens a serem renderizados inicialmente
          maxToRenderPerBatch={8} // Quantidade máxima de itens a serem renderizados por lote/chunk
          updateCellsBatchingPeriod={100} // Tempo (em ms) entre cada lote/chunk de renderização
          windowSize={7} // Quantidade de telas a serem renderizadas além da tela atual (padrão é 21, 10 telas antes e 10 depois da tela atual)
          horizontal={false} // Renderiza a lista na horizontal
          numColumns={1} // Número de colunas (padrão é 1)
          refreshControl={
            <RefreshControl refreshing={isRefreshing} onRefresh={refresh} />
          } // Controle de pull-to-refresh
          onEndReached={refresh} // Função a ser chamada quando o usuário chegar próximo ao final da lista
          onEndReachedThreshold={0.5} // Distância (em porcentagem) do final da lista para acionar o onEndReached
        />
      </View>
    </View>
  );
}
