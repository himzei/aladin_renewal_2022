import {
  Box,
  Grid,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { IBookResult } from "./Home";
import { inBound } from "../api";
import Book from "../components/Book";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import BookList from "../components/BookList";
import BookSkeleton from "../components/BookSkeleton";

export default function InBound() {
  const { data, isLoading } = useQuery<IBookResult[]>(
    ["books", "inBound"],
    inBound
  );
  console.log(data);
  return (
    <>
      <VStack spacing={10}>
        <Stack w="7xl">
          <Box h="200px" bg={"red.200"}></Box>
        </Stack>
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
