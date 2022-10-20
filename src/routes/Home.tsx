import { useState } from "react";
import {
  Badge,
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";
import {
  bestSeller,
  bestSellerMonth,
  bestSellerYear,
  blogBest,
  itemNewAll,
  itemNewSpecial,
} from "../api";
import Book from "../components/Book";
import BookSkeleton from "../components/BookSkeleton";
import SearchForm from "../components/SearchForm";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { dateFormat } from "../lib/utils";

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
  bestRank: number;
}

export default function Home() {
  const textColor = useColorModeValue("gray.700", "white");
  const gradientColor = useColorModeValue(
    "linear(to-r, #0093e9 0%, #192699 99%)",
    "linear(to-r, #060606, #404040 )"
  );
  const opacityColor = useColorModeValue("0.7", "0.8");
  const { data: dataBestSeller, isLoading: isLoadingBestSeller } = useQuery<
    IBookResult[]
  >(["books", "Bestseller"], bestSeller);

  const { data: dataBestSellerMonth, isLoading: isLoadingBestSellerMonth } =
    useQuery<IBookResult[]>(["books", "BestsellerMonth"], bestSellerMonth);

  const { data: dataBestSellerYear, isLoading: isLoadingBestSellerYear } =
    useQuery<IBookResult[]>(["books", "BestsellerYear"], bestSellerYear);

  const { data: dataItemNewAll, isLoading: isLoadingItemNewAll } = useQuery<
    IBookResult[]
  >(["books", "ItemNewAll"], itemNewAll);

  const { data: dataItemNewSpecial, isLoading: isLoadingItemNewSpecial } =
    useQuery<IBookResult[]>(["books", "ItemNewSpecial"], itemNewSpecial);

  const { data: dataBlogBest, isLoading: isLoadingBlogBest } = useQuery<
    IBookResult[]
  >(["books", "BlogBest"], blogBest);

  // framer Motion

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <VStack spacing={10} mb={16}>
      <VStack
        position={"relative"}
        h="300px"
        minWidth={"1300px"}
        justifyContent="center"
        color="white"
        backgroundImage={
          "url('https://images.unsplash.com/photo-1497796742626-fe30f204ec54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80')"
        }
        backgroundPosition="center"
        backgroundSize="cover"
      >
        <Box
          position={"absolute"}
          w="full"
          h="full"
          left={0}
          top={0}
          bgGradient={gradientColor}
          opacity={opacityColor}
        />
        <VStack
          position={"absolute"}
          zIndex={9}
          w="80%"
          alignItems={"flex-start"}
          spacing={8}
        >
          <VStack alignItems={"flex-start"}>
            <Heading fontSize={40} fontWeight={700}>
              검색해보세요! 요술램프의 마법을 보여드립니다!!
            </Heading>
            <Text fontSize={24} fontWeight={600} mb={10}>
              Millions of books, DVD shows and music to discover. Explore now.
            </Text>
          </VStack>
          <SearchForm />
        </VStack>
      </VStack>

      <VStack spacing={10}>
        <VStack alignItems={"flex-start"}>
          <Text color={textColor} fontSize={20} fontWeight={600} ml={4} mb={-4}>
            베스트셀러
          </Text>
          <Tabs align="end" variant="enclosed">
            <TabList>
              <Tab>이번달</Tab>
              <Tab>지난달</Tab>
              <Tab>지난해</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Grid
                  templateColumns="repeat(7, 1fr)"
                  gap={4}
                  gridAutoFlow="row dense"
                >
                  <AnimatePresence>
                    {isLoadingBestSeller ? <BookSkeleton /> : null}
                    {dataBestSeller?.map((data, index) => (
                      <Link to={`/book/${data.isbn}`} key={index}>
                        <GridItem
                        // as={motion.div}
                        // key={page}
                        // custom={direction}
                        // variants={variants}
                        // initial="enter"
                        // animate="center"
                        // exit="exit"
                        // transition={{
                        //   x: { type: "spring", stiffness: 300, damping: 30 },
                        //   opacity: { duration: 0.2 },
                        // }}
                        // drag="x"
                        // dragConstraints={{ left: 0, right: 0 }}
                        // dragElastic={1}
                        // onDragEnd={(e, { offset, velocity }) => {
                        //   const swipe = swipePower(offset.x, velocity.x);

                        //   if (swipe < -swipeConfidenceThreshold) {
                        //     paginate(1);
                        //   } else if (swipe > swipeConfidenceThreshold) {
                        //     paginate(-1);
                        //   }
                        // }}
                        >
                          <Box>
                            <VStack position="relative">
                              <Box
                                w={"150px"}
                                h="230px"
                                overflow={"hidden"}
                                rounded={"20px"}
                              >
                                <Image
                                  src={data.cover}
                                  objectFit="cover"
                                  objectPosition={"center center"}
                                  h="100%"
                                />
                              </Box>

                              <Badge
                                colorScheme={"yellow.500"}
                                px={4}
                                py={1}
                                position="absolute"
                                right={0}
                                top={0}
                              >
                                <FaHeart color="crimson" fontSize={18} />
                              </Badge>
                              <VStack
                                alignItems={"flex-start"}
                                spacing={0}
                                w="full"
                              >
                                <Text
                                  color={textColor}
                                  fontSize={"md"}
                                  fontWeight={"bold"}
                                >
                                  {data.title.substr(0, 12)}
                                </Text>
                                <Text
                                  letterSpacing={"-1px"}
                                  color={textColor}
                                  fontSize={"xs"}
                                >
                                  {dateFormat(data.pubDate)}
                                </Text>
                                <Text color={textColor} fontSize={"sm"}>
                                  {data.publisher}
                                </Text>
                              </VStack>
                            </VStack>
                          </Box>
                        </GridItem>
                      </Link>
                    ))}
                  </AnimatePresence>
                </Grid>
                <Box className="next" onClick={() => paginate(1)}>
                  {"‣"}
                </Box>
                <Box className="prev" onClick={() => paginate(-1)}>
                  {"‣"}
                </Box>
              </TabPanel>
              <TabPanel>
                <Grid
                  templateColumns="repeat(7, 1fr)"
                  gap={4}
                  gridAutoFlow="row dense"
                >
                  {isLoadingBestSellerMonth ? <BookSkeleton /> : null}
                  {dataBestSellerMonth?.map((data, index) => (
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
              </TabPanel>
              <TabPanel>
                <Grid
                  templateColumns="repeat(7, 1fr)"
                  gap={4}
                  gridAutoFlow="row dense"
                >
                  {isLoadingBestSellerYear ? <BookSkeleton /> : null}
                  {dataBestSellerYear?.map((data, index) => (
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
              </TabPanel>
            </TabPanels>
          </Tabs>
        </VStack>

        <VStack alignItems={"flex-start"} spacing={6}>
          <Text fontSize={20} fontWeight={600} color={textColor}>
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
                fontColor={textColor}
              />
            ))}
          </Grid>
        </VStack>

        <Box
          w="7xl"
          display={"flex"}
          justifyContent="center"
          bg="red.200"
          py={10}
          backgroundImage="url('https://images.unsplash.com/photo-1513185041617-8ab03f83d6c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')"
        >
          <VStack w="6xl" alignItems={"flex-start"} color="white" spacing={6}>
            <Text fontSize={20} fontWeight={600}>
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
                  fontColor={"white"}
                />
              ))}
            </Grid>
          </VStack>
        </Box>

        <VStack alignItems={"flex-start"} spacing={6}>
          <Text color={textColor} fontSize={20} fontWeight={600}>
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
                fontColor={textColor}
              />
            ))}
          </Grid>
        </VStack>
      </VStack>
    </VStack>
  );
}
