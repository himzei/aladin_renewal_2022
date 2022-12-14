import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick.css";
import {
  Box,
  Button,
  Divider,
  Grid,
  GridItem,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import Slider from "react-slick";
import {
  bestSeller,
  bestSellerMonth,
  bestSellerYear,
  blogBest,
  blogList,
  itemNewAll,
} from "../api";
import Book from "../components/Book";
import BookSkeleton from "../components/BookSkeleton";
import SearchForm from "../components/SearchForm";
import LocationMap from "../components/LocationMap";
import BlogMain from "../components/BlogMain";
import Consult from "../components/Consult";
import styled from "styled-components";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import SkewBox from "../components/SkewBox";
import BookGrid from "../components/BookGrid";

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
export interface IBlogResult {
  content: string;
  id: string;
  published: string;
  title: string;
  url: string;
}

const Div = styled.div`
  transform: translateY(-50px);
  width: 30px;
  height: 30px;
  position: absolute;
  right: -26px;
  z-index: 99;
  text-align: right;
  line-height: 30px;
  &:before {
    color: black;
  }
`;
const DivPre = styled.div`
  transform: translateY(-50px);
  width: 30px;
  height: 30px;
  position: absolute;
  left: -26px;
  z-index: 99;
  text-align: left;
  line-height: 30px;
  &:before {
    color: black;
  }
`;

export default function Home() {
  const textColor = useColorModeValue("gray.700", "white");
  const backColor = useColorModeValue("white", "gray.800");
  const gradientColor = useColorModeValue(
    "linear(to-r, #0093e9 0%, #192699 99%)",
    "linear(to-r, #060606, #404040 )"
  );
  const opacityColor = useColorModeValue("0.7", "0.8");
  const { data: dataBlogList } = useQuery<IBlogResult[]>(
    ["blogList"],
    blogList
  );

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

  const { data: dataBlogBest, isLoading: isLoadingBlogBest } = useQuery<
    IBookResult[]
  >(["books", "BlogBest"], blogBest);

  const settingsBestSeller = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    autoPlay: true,
    swipeToSlide: true,
    nextArrow: (
      <Div>
        <MdOutlineArrowForwardIos />
      </Div>
    ),
    prevArrow: (
      <DivPre>
        <MdOutlineArrowBackIosNew />
      </DivPre>
    ),
    appendDots: (dots: any) => (
      <div
        style={{
          width: "100%",
          position: "absolute",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ul> {dots} </ul>
      </div>
    ),
    dotsClass: "dots_custom",
  };

  return (
    <VStack spacing={10}>
      <VStack
        position={"relative"}
        h="350px"
        w="8xl"
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
            <Heading
              fontSize={{
                sm: 20,
                lg: 30,
                "2xl": 40,
              }}
              fontWeight={700}
            >
              ??????????????????! ??????????????? ????????? ??????????????????!!
            </Heading>
            <Text
              fontSize={{
                sm: 16,
                lg: 20,
                "2xl": 24,
              }}
              fontWeight={600}
              mb={10}
            >
              Millions of books, DVD shows and music to discover. Explore now.
            </Text>
          </VStack>
          <SearchForm />
        </VStack>
      </VStack>

      <VStack spacing={16}>
        {/* ??????????????? */}
        <VStack alignItems={"flex-start"}>
          <Box position="relative" overflow="hidden" w="250px" h="50px">
            <Box
              position="absolute"
              top="15px"
              left="40px"
              w="100px"
              h="100px"
              borderLeft={"5px solid red"}
              transform={"translate(-30px) rotate(45deg)"}
            />
            <Box position={"absolute"} top="7px">
              <Text
                textTransform={"uppercase"}
                fontSize={24}
                fontWeight="600"
                bg={backColor}
              >
                ???????????????
              </Text>
            </Box>
          </Box>
          <Tabs align="end" variant="enclosed">
            <TabList>
              <Tab>?????????</Tab>
              <Tab>?????????</Tab>
              <Tab>?????????</Tab>
            </TabList>
            <TabPanels>
              <TabPanel textAlign={"left"}>
                <Box w="6xl">
                  {isLoadingBestSeller ? <BookSkeleton /> : null}
                  <Slider {...settingsBestSeller}>
                    {dataBestSeller?.map((data, index) => (
                      <Book
                        key={index}
                        description={data.description}
                        cover={data.cover}
                        title={data.title}
                        priceSales={data.priceSales}
                        pubDate={data.pubDate}
                        publisher={data.publisher}
                        isbn={data.isbn}
                      />
                    ))}
                  </Slider>
                </Box>
              </TabPanel>
              <TabPanel textAlign={"left"}>
                <Box w="6xl">
                  {isLoadingBestSellerMonth ? <BookSkeleton /> : null}
                  <Slider {...settingsBestSeller}>
                    {dataBestSellerMonth?.map((data, index) => (
                      <Book
                        key={index}
                        description={data.description}
                        cover={data.cover}
                        title={data.title}
                        priceSales={data.priceSales}
                        pubDate={data.pubDate}
                        publisher={data.publisher}
                        isbn={data.isbn}
                      />
                    ))}
                  </Slider>
                </Box>
              </TabPanel>
              <TabPanel textAlign={"left"}>
                <Box w="6xl">
                  {isLoadingBestSellerYear ? <BookSkeleton /> : null}
                  <Slider {...settingsBestSeller}>
                    {dataBestSellerYear?.map((data, index) => (
                      <Book
                        key={index}
                        description={data.description}
                        cover={data.cover}
                        title={data.title}
                        priceSales={data.priceSales}
                        pubDate={data.pubDate}
                        publisher={data.publisher}
                        isbn={data.isbn}
                      />
                    ))}
                  </Slider>
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </VStack>

        <VStack w="full">
          <SkewBox
            title="????????? ???????????????"
            description="???????????? ????????? ????????? ????????? ?????? ?????? ??? ???????????????."
            imgUrl="https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          />
        </VStack>

        {/* ????????? ??????????????? */}
        <VStack
          spacing={6}
          position="relative"
          w="full"
          h="240px"
          alignItems={"center"}
        >
          <Box
            w="6xl"
            position="absolute"
            top={-40}
            bg={backColor}
            py={8}
            px={2}
            alignItems="center"
          >
            {isLoadingBlogBest ? <BookSkeleton /> : null}
            <Slider {...settingsBestSeller}>
              {dataBlogBest?.map((data, index) => (
                <Book
                  key={index}
                  description={data.description}
                  cover={data.cover}
                  title={data.title}
                  priceSales={data.priceSales}
                  pubDate={data.pubDate}
                  publisher={data.publisher}
                  isbn={data.isbn}
                  fontColor={textColor}
                />
              ))}
            </Slider>
          </Box>
        </VStack>

        <VStack w="full">
          <SkewBox
            title="?????? ?????? ?????????"
            description="??? ?????? ????????? ????????? ????????? ??? MD??? ???????????? ??????????????????."
            imgUrl="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          />
        </VStack>

        {/* ?????? ?????? ????????? */}
        <VStack
          spacing={6}
          position="relative"
          w="full"
          h="240px"
          alignItems={"center"}
        >
          <Box
            w="6xl"
            position="absolute"
            top={-40}
            bg={backColor}
            py={8}
            px={2}
            alignItems="center"
          >
            {isLoadingItemNewAll ? <BookSkeleton /> : null}
            <Slider {...settingsBestSeller}>
              {dataItemNewAll?.map((data, index) => (
                <Book
                  key={index}
                  description={data.description}
                  cover={data.cover}
                  title={data.title}
                  priceSales={data.priceSales}
                  pubDate={data.pubDate}
                  publisher={data.publisher}
                  isbn={data.isbn}
                />
              ))}
            </Slider>
          </Box>
        </VStack>

        {/* ?????? Blogger ?????? */}
        <Box
          w="100vw"
          h="500px"
          display={"flex"}
          justifyContent="center"
          py={10}
          backgroundImage="url('https://images.unsplash.com/photo-1513185041617-8ab03f83d6c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')"
          position="relative"
        >
          <Box
            position="absolute"
            w="full"
            h="full"
            left={0}
            top={0}
            bg={backColor}
            opacity={0.7}
          />
          <Grid templateColumns={"2fr 5fr"} w="6xl" zIndex={2} gap={12}>
            <GridItem>
              <VStack
                alignItems={"flex-start"}
                justifyContent={"center"}
                h="full"
                w="90%"
                spacing={12}
              >
                <Text fontSize={40} fontWeight={700}>
                  Blogs
                </Text>
                <VStack alignItems={"flex-start"} fontWeight={700}>
                  <Text color="blue.600">????????? ????????? ???????????????</Text>
                  <Text fontSize={28}>
                    ????????? ????????? ??? ?????? ?????? ????????? ????????????!
                  </Text>
                </VStack>
                <Button colorScheme="blue" size="lg">
                  ??????????????? ??? ?????? ?????? ??????
                </Button>
              </VStack>
            </GridItem>
            <GridItem>
              <Grid
                templateColumns={"repeat(3, 1fr)"}
                gap={4}
                h="full"
                display={"flex"}
                alignItems={"center"}
              >
                {dataBlogList?.map((data, index) => (
                  <BlogMain
                    title={data.title}
                    content={data.content}
                    published={data.published}
                    id={data.id}
                    key={index}
                  />
                ))}
              </Grid>
            </GridItem>
          </Grid>
        </Box>

        {/* ????????? ?????? ?????? ????????? */}
        <VStack alignItems={"flex-start"}>
          <BookGrid numContents={12} wSize={"6xl"} />
        </VStack>

        {/* ???????????? ?????? */}
        <VStack alignItems={"flex-start"} spacing={6} w="6xl">
          <LocationMap />
        </VStack>

        {/* ????????????*/}
        <Consult />

        {/* ???????????? divider */}
        <VStack>
          <Divider />
        </VStack>
      </VStack>
    </VStack>
  );
}
