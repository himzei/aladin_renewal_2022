import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Image,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { bookDetail } from "../api";
import { useParams } from "react-router-dom";
import { dateFormat, deductFormat, priceFormat } from "../lib/utils";
import { BsFillBasketFill } from "react-icons/bs";
import { AiFillCreditCard, AiFillStar } from "react-icons/ai";
import { GiPresent } from "react-icons/gi";
import { FiPocket } from "react-icons/fi";

interface IBookSubInfo {
  bestSellerRank: string;
  itemPage: number;
  ratingInfo: object;
}
interface IReviewList {
  link: string;
  reviewRank: number;
  title: string;
}

interface IBookDetail {
  author: string;
  categoryName: string;
  cover: string;
  customerReviewRank: number;
  description: string;
  isbn: string;
  itemId: number;
  link: string;
  mallType: string;
  mileage: number;
  priceSales: number;
  priceStandard: number;
  pubDate: string;
  publisher: string;
  reviewList: IReviewList[];
  salesPoint: number;
  subInfo: IBookSubInfo[];
  title: string;
}

export default function BookDetail() {
  const { id } = useParams();
  const { data, isLoading } = useQuery<IBookDetail[]>(
    ["bookDetail", id],
    bookDetail
  );
  console.log(data, isLoading);

  return (
    <>
      {data?.map((item) => (
        <VStack
          h="550px"
          backgroundImage={`url(${item.cover})`}
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          backgroundPosition={"center"}
          backdropBlur="20px"
          position="relative"
        >
          <Box
            position="absolute"
            w="100%"
            h="100%"
            top={0}
            left={0}
            bg={"black"}
            opacity="70%"
          />
          <VStack
            w="6xl"
            justifyContent={"center"}
            alignItems="center"
            h="100%"
          >
            <Box w="full" zIndex={"9"}>
              <Grid templateColumns={"1fr 3fr"} gap={8}>
                <GridItem>
                  <Box>
                    <Image src={item.cover} w="280px" />
                  </Box>
                </GridItem>
                <GridItem h="100%">
                  <VStack
                    h="100%"
                    color="white"
                    alignItems={"flex-start"}
                    justifyContent="center"
                    spacing={6}
                  >
                    <VStack spacing={1} alignItems="flex-start">
                      <Box
                      // borderWidth="1px"
                      >
                        <Text fontSize={"sm"} fontWeight="600" color="#FCAF17">
                          [{item.categoryName}]
                        </Text>
                      </Box>
                      <HStack spacing={4}>
                        <Text fontSize={"3xl"} fontWeight="700">
                          {item.title}
                        </Text>
                      </HStack>

                      <HStack spacing={6}>
                        <HStack>
                          <Box bg="#4C72B7" px={2} fontSize={"sm"} rounded="md">
                            출판사
                          </Box>
                          <Text>{item.publisher}</Text>
                        </HStack>
                        <HStack>
                          <Box bg="#4C72B7" px={2} fontSize={"sm"} rounded="md">
                            저자
                          </Box>
                          <Text>{item.author}</Text>
                        </HStack>
                      </HStack>
                      <HStack>
                        <Box bg="#4C72B7" px={2} fontSize={"sm"} rounded="md">
                          출판일
                        </Box>
                        <Text fontSize={"md"}>{dateFormat(item.pubDate)}</Text>
                      </HStack>
                    </VStack>

                    <Text>{item.description}</Text>
                    <VStack alignItems={"flex-start"}>
                      <HStack>
                        <Box display="flex" mt="2" alignItems="center">
                          {Array(5)
                            .fill("")
                            .map((_, i) => (
                              <AiFillStar
                                key={i}
                                color={i < 4 ? "#FCAF17" : "white"}
                              />
                            ))}
                          <Box as="span" ml="2" color="white" fontSize="sm">
                            4 reviews
                          </Box>
                        </Box>
                      </HStack>
                      <HStack spacing={4}>
                        <HStack>
                          <Text>판매가</Text>
                          <Text fontSize={20} fontWeight={600}>
                            {priceFormat(item.priceSales)}
                          </Text>
                        </HStack>

                        {item.priceSales === item.priceStandard ? null : (
                          <HStack>
                            <Text>(정가</Text>
                            <Text decoration={"line-through"}>
                              {priceFormat(item.priceStandard)}
                            </Text>
                            <Text>
                              {deductFormat(
                                item.priceStandard,
                                item.priceSales
                              )}
                              )
                            </Text>
                          </HStack>
                        )}
                      </HStack>
                    </VStack>
                    <HStack spacing={8}>
                      <Text>수량</Text>
                      <NumberInput
                        rounded="xl"
                        size="sm"
                        maxW={20}
                        defaultValue={1}
                        min={1}
                      >
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </HStack>
                    <HStack spacing={2}>
                      <Button
                        leftIcon={<BsFillBasketFill />}
                        colorScheme="pink"
                        variant="solid"
                      >
                        장바구니
                      </Button>
                      <Button
                        leftIcon={<AiFillCreditCard />}
                        colorScheme="red"
                        variant="solid"
                      >
                        바로구매
                      </Button>
                      <Button
                        leftIcon={<GiPresent />}
                        colorScheme="white"
                        variant="outline"
                      >
                        선물하기
                      </Button>
                      <Button
                        leftIcon={<FiPocket />}
                        colorScheme="white"
                        variant="outline"
                      >
                        보관함
                      </Button>
                    </HStack>
                  </VStack>
                </GridItem>
              </Grid>
            </Box>
          </VStack>
        </VStack>
      ))}
    </>
  );
}
