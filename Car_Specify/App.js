import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';

const carros = [
  {
    id: '1',
    name: 'Fiat Argo',
    description: 'Compacto, econômico e ideal para o dia a dia.',
    price: 'R$ 120,00/dia',
    location: 'Brasília, Distrito Federal',
    image: 'https://s2-autoesporte.glbimg.com/SnbghEUAAP3LQ2-bQMzzshaZzGo=/0x0:6000x3940/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/d/x/mRAVtPRBqQp245yVLGSg/hgt18dianteira.jpeg',
  },
  {
    id: '2',
    name: 'Jeep Renegade',
    description: 'SUV robusto, perfeito para viagens e trilhas leves.',
    price: 'R$ 250,00/dia',
    location: 'Brasília, Distrito Federal',
    image: 'https://production.autoforce.com/uploads/picture/image/10642545/main_webp_comprar-renegade-2019_69c8000ba1.jpg.webp',
  },
  {
    id: '3',
    name: 'Toyota Corolla',
    description: 'Sedan confortável com ótimo desempenho.',
    price: 'R$ 200,00/dia',
    location: 'Brasília, Distrito Federal',
    image: 'https://autobusiness.com.br/_next/image?url=https%3A%2F%2Fresized-images.autoconf.com.br%2F1024x0%2Fveiculos%2Ffotos%2F478437%2F95be9c8e-e804-4427-a261-5fa4ccff1a47.jpg&w=1200&q=75',
  },
  {
    id: '4',
    name: 'Volkswagen T-Cross',
    description: 'SUV moderno, espaçoso e tecnológico.',
    price: 'R$ 230,00/dia',
    location: 'Brasília, Distrito Federal',
    image: 'https://quatrorodas.abril.com.br/wp-content/uploads/2021/09/VW-T-CROSS-2022-1.jpg?quality=70&strip=info&w=720&crop=1',
  },
  {
    id: '5',
    name: 'Chevrolet Onix',
    description: 'Hatch completo, ideal para cidade.',
    price: 'R$ 110,00/dia',
    location: 'Brasília, Distrito Federal',
    image: 'https://www.chevroletnova.com.br/images/versoes/fotos/2024/03/lt-2024_17111311183.jpg',
  },
];

const App = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <Text>Carregando...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontFamily: 'Roboto_400Regular' }]}>Car Specify</Text>

      <FlatList
        data={carros}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={[styles.carName, { fontFamily: 'Roboto_400Regular' }]}>{item.name}</Text>
            <Text style={[styles.carDescription, { fontFamily: 'Roboto_400Regular' }]}>{item.description}</Text>
            <Text style={[styles.carLocation, { fontFamily: 'Roboto_400Regular' }]}>{item.location}</Text>
            <Text style={[styles.carPrice, { fontFamily: 'Roboto_400Regular' }]}>{item.price}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Ver Mais</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#8B0000',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  carName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  carDescription: {
    color: '#555',
    marginTop: 5,
  },
  carLocation: {
    color: '#777',
    marginTop: 5,
  },
  carPrice: {
    fontSize: 16,
    color: '#8B0000', // Vermelho escuro
    marginTop: 10,
  },
  button: {
    marginTop: 15,
    backgroundColor: '#C0C0C0',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default App;
