import { ActivityIndicator, View, FlatList, StyleSheet } from "react-native";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons, loadPokemons, isNext }) => {
  const loadMore = () => {
    loadPokemons();
  };

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemonDetail={item} />}
      contentContainerStyle={style.flatListContentContainer}
      onEndReached={isNext && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext && <ActivityIndicator size="large" style={style.spinner} />
      }
    />
  );
};

const style = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
  spinner: {
    marginBottom: 20,
    marginTop: 60,
  },
});

export default PokemonList;
