import {
  Box,
  Grid,
  HStack,
  Spinner,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { inBound } from "../api";
import Book from "../components/Book";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import BookSkeleton from "../components/BookSkeleton";
import SearchForm from "../components/SearchForm";
import { useEffect } from "react";
import BookList from "../components/BookList";

interface IBookResult {
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
  isbn: string;
  bestRank: number;
}

export default function InBound() {
  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery<IBookResult[]>({
      queryKey: ["repositories"],
      queryFn: ({ pageParam = 1 }) => inBound(pageParam),
      getNextPageParam: () => {
        const maxPages = 10;
        const nextPage = 2;

        return nextPage <= maxPages ? nextPage : undefined;
      },
    });

  useEffect(() => {
    let fetching = false;

    const handleScroll = async (event: any) => {
      // scrollTop 이미 스크롤 되어 보이지 않는 구간의 높이
      // const scrollTop = document.documentElement.scrollTop;
      // scrollHeight 화면에 보이지 않는 높이도 포함된 페이지의 총 높이
      // const scrollHeight = document.documentElement.scrollHeight;
      // clientHeight 클라이언트 즉 사용자에게 보여지는 높이
      // const clientHeight = document.documentElement.clientHeight;

      const { scrollTop, scrollHeight, clientHeight } =
        event.target.scrollingElement;

      if (!fetching && scrollHeight - scrollTop <= clientHeight * 2) {
        fetching = true;

        if (hasNextPage) await fetchNextPage();

        fetching = false;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasNextPage, fetchNextPage]);

  return (
    <>
      <VStack spacing={10} py={"60px"}>
        <VStack w="7xl">
          <VStack
            h="300px"
            w="full"
            align={"center"}
            justifyContent="center"
            backgroundImage={
              "url('https://images.unsplash.com/photo-1603905204400-e1636c7ae0c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80')"
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
                국내도서
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
                    {data?.pages.map((page) =>
                      page.map((item) => (
                        <Book
                          key={item.isbn}
                          description={item.description}
                          cover={item.cover}
                          title={item.title}
                          priceSales={item.priceSales}
                          pubDate={item.pubDate}
                          publisher={item.publisher}
                          isbn={item.isbn}
                        />
                      ))
                    )}
                  </Grid>
                  {isLoading ? <BookSkeleton /> : null}
                  {isFetchingNextPage ? (
                    <HStack w={"full"} justifyContent="center" h={24}>
                      <Spinner />
                    </HStack>
                  ) : null}
                </VStack>
              </Stack>
            </TabPanel>
            <TabPanel>
              <Stack w="6xl">
                <VStack spacing={4} alignItems="flex-start">
                  {data?.pages.map((page) =>
                    page.map((data, index) => (
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
                    ))
                  )}
                </VStack>
              </Stack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </>
  );
}
