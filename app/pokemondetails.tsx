import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text } from "react-native";

export default function Details() {
  const params = useLocalSearchParams();
  const [pokemon, setPokemon] = useState<any>(null);

  useEffect(() => {
    if (params.name) {
      fetchPokemonDetails(params.name as string);
    }
    // You can use params.name to fetch additional details about the pokemon if needed
  }, [params.name]);

  async function fetchPokemonDetails(name: string) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      setPokemon(data);
    } catch (error) {
      console.log("Error fetching pokemon details:", error);
    }
  }

  return (
    <>
      <Stack.Screen options={{ title: params.name as string }} />

      <ScrollView
        contentContainerStyle={{
          backgroundColor: "lightgray",
          padding: 20,
          gap: 10,
          alignItems: "center",
          borderRadius: 40,
        }}
      >
        {pokemon && (
          <>
            <Image
              source={{ uri: pokemon.sprites.front_default }}
              style={{ width: 150, height: 150 }}
            />

            <Text>Name: {pokemon.name}</Text>
            <Text>Height: {pokemon.height}</Text>
            <Text>Weight: {pokemon.weight}</Text>
            <Text>
              Types:{" "}
              {pokemon.types
                .map((typeInfo: any) => typeInfo.type.name)
                .join(", ")}
            </Text>
          </>
        )}
      </ScrollView>
    </>
  );
}
