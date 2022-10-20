import {
  Box,
  Button,
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
import { useQuery } from "@tanstack/react-query";
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

  return (
    <VStack spacing={10} mb={16}>
      <VStack
        position={"relative"}
        h="300px"
        minWidth={{
          sm: "500px",
          md: "700px",
          lg: "900px",
          xl: "1100px",
          "2xl": "1300px",
        }}
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
              검색해보세요! 요술램프의 마법을 보여드립니다!!
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

      <VStack spacing={10}>
        {/* 베스트셀러 */}
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
                  height="300px"
                  overflow={"hidden"}
                  templateColumns={{
                    sm: "repeat(2, 1fr)",
                    md: "repeat(4, 1fr)",
                    lg: "repeat(5, 1fr)",
                    xl: "repeat(6, 1fr)",
                    "2xl": "repeat(7, 1fr)",
                  }}
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
              </TabPanel>
              <TabPanel>
                <Grid
                  height="300px"
                  overflow={"hidden"}
                  templateColumns={{
                    sm: "repeat(2, 1fr)",
                    md: "repeat(4, 1fr)",
                    lg: "repeat(5, 1fr)",
                    xl: "repeat(6, 1fr)",
                    "2xl": "repeat(7, 1fr)",
                  }}
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
                  height="300px"
                  overflow={"hidden"}
                  templateColumns={{
                    sm: "repeat(2, 1fr)",
                    md: "repeat(4, 1fr)",
                    lg: "repeat(5, 1fr)",
                    xl: "repeat(6, 1fr)",
                    "2xl": "repeat(7, 1fr)",
                  }}
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

        {/* 블로거 베스트셀러 */}
        <VStack alignItems={"flex-start"} spacing={6}>
          <Text fontSize={20} fontWeight={600} color={textColor}>
            블로거 베스트셀러
          </Text>

          <Grid
            height="300px"
            overflow={"hidden"}
            templateColumns={{
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
              lg: "repeat(5, 1fr)",
              xl: "repeat(6, 1fr)",
              "2xl": "repeat(7, 1fr)",
            }}
            gap={4}
          >
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

        {/* 티스토리 연동 */}
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
            bg="white"
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
                  <Text color="blue.600">발견의 기쁨을 선물합니다</Text>
                  <Text fontSize={28}>
                    취향을 분석해 꼭 맞는 책을 추천해 드릴께요!
                  </Text>
                </VStack>
                <Button colorScheme="blue" size="lg">
                  로그인하고 더 많은 추천 받기
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
                <GridItem>
                  <VStack bg="white" rounded="2xl" overflow={"hidden"}>
                    <Box
                      w="260px"
                      h="160px"
                      overflow={"hidden"}
                      objectFit={"cover"}
                    >
                      <Image
                        objectFit={"cover"}
                        src="https://plus.unsplash.com/premium_photo-1661961749677-13577d0f45da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      />
                    </Box>
                    <VStack p={4} spacing={4} alignItems="flex-start">
                      <VStack alignItems="flex-start">
                        <Text fontWeight={700} fontSize={20}>
                          종합추천
                        </Text>
                        <Text>
                          고객님의 취향을 분석해 이틀밤낮 고민하여 고른 책을
                          확인하세요.
                        </Text>
                      </VStack>
                      <Text fontSize={12}>2022년 10월 18일</Text>
                    </VStack>
                  </VStack>
                </GridItem>
                <GridItem>
                  <VStack bg="white" rounded="2xl" overflow={"hidden"}>
                    <Box
                      w="260px"
                      h="160px"
                      overflow={"hidden"}
                      objectFit={"cover"}
                    >
                      <Image
                        objectFit={"cover"}
                        src="https://images.unsplash.com/photo-1419640303358-44f0d27f48e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1085&q=80"
                      />
                    </Box>
                    <VStack p={4} spacing={4} alignItems="flex-start">
                      <VStack alignItems="flex-start">
                        <Text fontWeight={700} fontSize={20}>
                          종합추천
                        </Text>
                        <Text>
                          고객님의 취향을 분석해 이틀밤낮 고민하여 고른 책을
                          확인하세요.
                        </Text>
                      </VStack>
                      <Text fontSize={12}>2022년 10월 18일</Text>
                    </VStack>
                  </VStack>
                </GridItem>
                <GridItem>
                  <VStack bg="white" rounded="2xl" overflow={"hidden"}>
                    <Box
                      w="260px"
                      h="160px"
                      overflow={"hidden"}
                      objectFit={"cover"}
                    >
                      <Image src="https://images.unsplash.com/photo-1588581939864-064d42ace7cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                    </Box>
                    <VStack p={4} spacing={4} alignItems="flex-start">
                      <VStack alignItems="flex-start">
                        <Text fontWeight={700} fontSize={20}>
                          종합추천
                        </Text>
                        <Text>
                          고객님의 취향을 분석해 이틀밤낮 고민하여 고른 책을
                          확인하세요.
                        </Text>
                      </VStack>
                      <Text fontSize={12}>2022년 10월 18일</Text>
                    </VStack>
                  </VStack>
                </GridItem>
              </Grid>
            </GridItem>
          </Grid>
        </Box>

        {/* 신간 전체 리스트 */}
        <VStack w="6xl" alignItems={"flex-start"} spacing={6}>
          <Text fontSize={20} fontWeight={600}>
            신간 전체 리스트
          </Text>
          <Grid
            height="300px"
            overflow={"hidden"}
            templateColumns={{
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
              lg: "repeat(5, 1fr)",
              xl: "repeat(6, 1fr)",
              "2xl": "repeat(7, 1fr)",
            }}
            gap={4}
            gridAutoFlow="row dense"
          >
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

        {/* 주목할 만한 신간 리스트 */}
        <VStack alignItems={"flex-start"} spacing={6}>
          <Text color={textColor} fontSize={20} fontWeight={600}>
            주목할 만한 신간 리스트
          </Text>
          <Grid
            height="300px"
            overflow={"hidden"}
            templateColumns={{
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
              lg: "repeat(5, 1fr)",
              xl: "repeat(6, 1fr)",
              "2xl": "repeat(7, 1fr)",
            }}
            gap={4}
          >
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

        {/* 중고매장 위치 */}
        <VStack alignItems={"flex-start"} spacing={6} w="6xl">
          <Text color={textColor} fontSize={20} fontWeight={600} w="6xl">
            중고매장 위치
          </Text>
        </VStack>
      </VStack>
    </VStack>
  );
}
