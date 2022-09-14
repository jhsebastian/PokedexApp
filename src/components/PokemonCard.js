import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function PokemonCard({ pokemonDetail }) {
  const goToPokemon = () => {
    console.log(`Vamos al Pokemon: ${pokemonDetail.name}`);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={goToPokemon}>
      <View style={styles.card}>
        <Text style={styles.name}>{pokemonDetail.name}</Text>
        <Image source={{ uri: pokemonDetail.image }} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
    width: "90%",
    justifyContent: "space-around",
    alignItems: "flex-start",
    marginBottom: 30,
    borderRadius: 20,
    backgroundColor: "#7BC34D",
    color: "white",
    paddingHorizontal: 10,
    flexDirection: "column",
  },
  image: {
    position: "absolute",
    bottom: -20,
    right: 2,
    width: 90,
    height: 90,
  },
  container: {
    flex: 1,
    height: "100%",
    alignItems: "center",
  },
  name: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
