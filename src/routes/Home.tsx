import { Box, HStack, Text, useEditable, useFocusEffect, VStack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { getBooks } from "../api";

export interface IBookResult {
  author: string; 
  categoryName: string; 
  cover: string; 
  description: string; 
  itemId: number; 
  link: string; 
  priceSales: number; 
  priceStandard: number; 
  pubDate: string; 
  publisher: string; 
  title: string;
}

export default function Home() {
  const { data, isLoading } = useQuery<IBookResult>(
    ["books", "ItemNewAll"],
    getBooks
  );
  
  const datas = new Array(data)
  
  console.log(datas)
  
  return (
    <Box
      h={"80vh"}
      
    >
      <VStack justifyContent={"center"} color={"white"} h={"100%"}>
      </VStack>
      <Box>
        <VStack>
          {datas.map((data, index) => (<Box bg={"red"}>{index}{data?.author}</Box>))}
        </VStack>
      </Box>
    </Box>
  );
}
