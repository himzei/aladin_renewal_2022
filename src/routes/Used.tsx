import {
  Box,
  Grid,
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
import { IBookResult } from "./Home";
import { used } from "../api";
import Book from "../components/Book";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import BookList from "../components/BookList";
import BookSkeleton from "../components/BookSkeleton";
import SearchForm from "../components/SearchForm";

export default function Used() {
  const { data, isLoading } = useQuery<IBookResult[]>(["books", "used"], used);

  return (
    <>
      <VStack spacing={10}>
        <VStack w="7xl">
          <VStack
            h="300px"
            w="full"
            align={"center"}
            justifyContent="center"
            backgroundImage={
              "url('https://images.unsplash.com/photo-1529148482759-b35b25c5f217?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')"
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
            <Stack zIndex={2}>
              <Text fontSize={24} color="white" fontWeight={700}>
                중고샵
              </Text>
            </Stack>
            <Box w="80%">
              <SearchForm />
            </Box>
          </VStack>
        </VStack>
        <Tabs>
          <TabList display={"flex"} justifyContent="flex-end">
            <Tab>
              <BsFillGrid3X3GapFill />
            </Tab>
            <Tab>
              <FaListUl />
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Stack w="6xl">
                <VStack alignItems={"flex-start"}>
                  <Grid
                    templateColumns="repeat(7, 1fr)"
                    columnGap={4}
                    rowGap={10}
                    gridAutoFlow="row dense"
                  >
                    {isLoading ? <BookSkeleton /> : null}

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
          </TabPanels>
        </Tabs>
      </VStack>
    </>
  );
}
