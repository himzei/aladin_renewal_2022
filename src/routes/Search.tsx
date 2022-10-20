import {
  Box,
  Grid,
  HStack,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import { search } from "../api";
import Book from "../components/Book";
import BookList from "../components/BookList";
import { IBookResult } from "./Home";
import { useParams } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import BookSkeletonVertical from "../components/BookSkeletonVertical";

export default function Search() {
  const { term } = useParams();
  console.log("Search.tsx params", term);
  const { data, isLoading } = useQuery<IBookResult[]>(["search", term], search);
  return (
    <VStack mb={10} spacing={12}>
      <VStack w="7xl">
        <VStack
          h="200px"
          w="full"
          align={"center"}
          justifyContent="center"
          backgroundImage={
            "url('https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')"
          }
          backgroundPosition="center"
          backgroundSize="cover"
          position="relative"
        >
          <Box
            position="absolute"
            w="full"
            h="full"
            left={0}
            top={0}
            bgGradient="linear(to-r, #060606, #404040)"
            opacity="0.7"
          />
          <Box w="80%">
            <SearchForm />
          </Box>
        </VStack>
      </VStack>
      <HStack>
        <Text fontWeight={"600"} fontSize="xl">
          "{term}"
        </Text>
        <Text>에 대한 검색결과 입니다</Text>
      </HStack>
      {isLoading ? <BookSkeletonVertical /> : null}
      <Tabs>
        <TabList display={"flex"} justifyContent="flex-end">
          <Tab>
            <FaListUl />
          </Tab>
          <Tab>
            <BsFillGrid3X3GapFill />
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Stack w="6xl">
              <VStack spacing={4} alignItems="flex-start">
                {data?.map((data, index) => (
                  <BookList
                    key={index}
                    cover={data.cover}
                    title={data.title}
                    priceSales={data.priceSales}
                    pubDate={data.pubDate}
                    publisher={data.publisher}
                    isbn={data.isbn}
                    categoryName={data.categoryName}
                    author={data.author}
                    description={data.description}
                    priceStandard={data.priceStandard}
                  />
                ))}
              </VStack>
            </Stack>
          </TabPanel>
          <TabPanel>
            <Stack w="6xl">
              <VStack alignItems={"flex-start"}>
                <Grid
                  templateColumns="repeat(7, 1fr)"
                  columnGap={4}
                  rowGap={10}
                  gridAutoFlow="row dense"
                >
                  {data?.map((data, index) => (
                    <Book
                      key={index}
                      cover={data.cover}
                      title={data.title}
                      priceSales={data.priceSales}
                      pubDate={data.pubDate}
                      publisher={data.publisher}
                      isbn={data.isbn}
                    />
                  ))}
                </Grid>
              </VStack>
            </Stack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
}
