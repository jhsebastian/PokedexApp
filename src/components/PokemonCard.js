import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import React from "react";
import getColorByPokemonType from "../utils/getColorByPokemonType";
import { capitalize } from "lodash";

export default function PokemonCard({ pokemonDetail }) {
  const goToPokemon = () => {
    console.log(`Vamos al Pokemon: ${pokemonDetail.name}`);
  };

  const pokemonColor = getColorByPokemonType(pokemonDetail.type);

  const bgStyles = { backgroundColor: pokemonColor, ...styles.card };

  return (
    <TouchableOpacity
      key={pokemonDetail.id}
      style={styles.container}
      onPress={goToPokemon}
    >
      <View style={bgStyles}>
        <View>
          <Text style={styles.number}>
            #{`${pokemonDetail.order}`.padStart(3, 0)}{" "}
          </Text>
          <Text style={styles.name}>{capitalize(pokemonDetail.name)}</Text>
        </View>
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
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 30,
    borderRadius: 20,
    color: "white",
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  image: {
    position: "absolute",
    bottom: -20,
    right: 2,
    width: 100,
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
  },
  number: {
    color: "white",
  },
});
