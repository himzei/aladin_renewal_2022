import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { getBooks } from "../api";
import { makeImagePath } from "../utils";

interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
}

export interface IMovieResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export default function Home() {
  const { data, isLoading } = useQuery<IMovieResult>(
    ["books", "ItemNewAll"],
    getBooks
  );
  console.log(data, isLoading);
  return (
    <Box
      h={"80vh"}
      bg="black"
      bgImage={`url(${makeImagePath(data?.results[0].backdrop_path || "")})`}
    >
      <VStack justifyContent={"center"} color={"white"} h={"100%"}>
        <Text>{data?.results[0].title}</Text>
        <Text>{data?.results[0].overview}</Text>
      </VStack>
      <HStack>
        <Box />
      </HStack>
    </Box>
  );
}
