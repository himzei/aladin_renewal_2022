import {
  Button,
  Grid,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { bestSeller, blogBest, itemNewAll, itemNewSpecial } from "../api";
import Book from "../components/Book";
import BookSkeleton from "../components/BookSkeleton";
import styled from "styled-components";

const MainBanner = styled.div`
  position: relative;
  display: flex;
  min-width: 1300px;
  justify-content: center;
  align-items: center;
  color: white;
  height: 300px;
  background-image: url("https://images.unsplash.com/photo-1497796742626-fe30f204ec54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80");
  background-position: center;
  background-size: cover;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: red;
    z-index: 2;
    background-color: #0093e9;
    background-image: linear-gradient(160deg, #0093e9 0%, #192699 99%);
    opacity: 0.7;
  }
`;

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
  isbn: string;
}

export default function Home() {
  const { data: dataBestSeller, isLoading: isLoadingBestSeller } = useQuery<
    IBookResult[]
  >(["books", "Bestseller"], bestSeller);

  const { data: dataItemNewAll, isLoading: isLoadingItemNewAll } = useQuery<
    IBookResult[]
  >(["books", "ItemNewAll"], itemNewAll);

  const { data: dataItemNewSpecial, isLoading: isLoadingItemNewSpecial } =
    useQuery<IBookResult[]>(["books", "ItemNewSpecial"], itemNewSpecial);

  const { data: dataBlogBest, isLoading: isLoadingBlogBest } = useQuery<
    IBookResult[]
  >(["books", "BlogBest"], blogBest);

  console.log(dataItemNewAll);

  return (
    <VStack spacing={10} mb={16}>
      <MainBanner>
        <VStack
          position={"absolute"}
          zIndex={9}
          w="80%"
          alignItems={"flex-start"}
          spacing={8}
        >
          <VStack alignItems={"flex-start"}>
            <Heading fontSize={50} fontWeight={700}>
              환영합니다!
            </Heading>
            <Text fontSize={24} fontWeight={600} mb={10}>
              Millions of books, DVD shows and music to discover. Explore now.
            </Text>
          </VStack>
          <InputGroup size="lg">
            <Input
              color={"gray.600"}
              px="2rem"
              background={"white"}
              rounded="full"
              type={"text"}
              placeholder="제목, 글쓴이, 출판사를 검색해주세요"
            />
            <InputRightElement width="7rem">
              <Button
                px={10}
                size="lg"
                bgGradient="linear(to-r, #0093e9 0%, #192699 99%)"
                rounded="3xl"
                _hover={{ bg: "blue.600" }}
              >
                Search
              </Button>
            </InputRightElement>
          </InputGroup>
        </VStack>
      </MainBanner>

      <VStack spacing={10}>
        <VStack alignItems={"flex-start"}>
          <Text color={"gray.700"} fontSize={20} fontWeight={600}>
            베스트셀러
          </Text>
          <Grid
            templateColumns="repeat(7, 1fr)"
            gap={4}
            gridAutoFlow="row dense"
          >
            {isLoadingBestSeller ? <BookSkeleton /> : null}
            {dataBestSeller?.map((data, index) => (
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

        <VStack alignItems={"flex-start"}>
          <Text color={"gray.700"} fontSize={20} fontWeight={600}>
            신간 전체 리스트
          </Text>
          <Grid templateColumns="repeat(7, 1fr)" gap={4}>
            {isLoadingItemNewAll ? <BookSkeleton /> : null}
            {dataItemNewAll?.map((data, index) => (
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

        <VStack alignItems={"flex-start"}>
          <Text color={"gray.700"} fontSize={20} fontWeight={600}>
            주목할 만한 신간 리스트
          </Text>
          <Grid templateColumns="repeat(7, 1fr)" gap={4}>
            {isLoadingItemNewSpecial ? <BookSkeleton /> : null}
            {dataItemNewSpecial?.map((data, index) => (
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

        <VStack alignItems={"flex-start"}>
          <Text color={"gray.700"} fontSize={20} fontWeight={600}>
            블로거 베스트셀러
          </Text>
          <Grid templateColumns="repeat(7, 1fr)" gap={4}>
            {isLoadingBlogBest ? <BookSkeleton /> : null}
            {dataBlogBest?.map((data, index) => (
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
      </VStack>
    </VStack>
  );
}
