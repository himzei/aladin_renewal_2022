import {
  Avatar,
  Box,
  Button,
  Divider,
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
  writer: string;
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
  subInfo: IBookSubInfo;
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
        <>
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
                          <Text
                            fontSize={"sm"}
                            fontWeight="600"
                            color="#FCAF17"
                          >
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
                            <Box
                              bg="#4C72B7"
                              px={2}
                              fontSize={"sm"}
                              rounded="md"
                            >
                              출판사
                            </Box>
                            <Text>{item.publisher}</Text>
                          </HStack>
                          <HStack>
                            <Box
                              bg="#4C72B7"
                              px={2}
                              fontSize={"sm"}
                              rounded="md"
                            >
                              저자
                            </Box>
                            <Text>{item.author}</Text>
                          </HStack>
                        </HStack>
                        <HStack>
                          <Box bg="#4C72B7" px={2} fontSize={"sm"} rounded="md">
                            출판일
                          </Box>
                          <Text fontSize={"md"}>
                            {dateFormat(item.pubDate)}
                          </Text>
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
                                  color={i < 5 ? "#FCAF17" : "white"}
                                />
                              ))}
                            <Box as="span" ml="2" color="white" fontSize="sm">
                              {item.reviewList.length > 0
                                ? `리뷰(${item.reviewList.length})`
                                : "리뷰(0)"}
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

          <VStack justifyContent={"center"} alignItems="center">
            <Box w="6xl" color="gray.600">
              <Grid templateColumns={"250px 1fr"} gap={8} my={8}>
                <GridItem>
                  <Text fontWeight={600} fontSize={20}>
                    리뷰
                  </Text>
                </GridItem>
                <GridItem>
                  {item.reviewList.length === 0 ? (
                    <Text>리뷰없음</Text>
                  ) : (
                    <VStack alignItems={"flex-start"} spacing={8}>
                      {item.reviewList.map((review) => (
                        <VStack alignItems={"flex-start"}>
                          <HStack spacing={4}>
                            <Avatar src="https://bit.ly/broken-link" />
                            <VStack spacing={0}>
                              <HStack
                                spacing={4}
                                justifyContent="flex-start"
                                w="full"
                              >
                                <Text>
                                  평점 {Math.ceil(review.reviewRank / 2)}
                                </Text>
                                <HStack spacing={0}>
                                  {Array(5)
                                    .fill("")
                                    .map((_, i) => (
                                      <AiFillStar
                                        key={i}
                                        color={
                                          i < Math.ceil(review.reviewRank / 2)
                                            ? "#FCAF17"
                                            : "lightgray"
                                        }
                                      />
                                    ))}
                                </HStack>
                              </HStack>
                              <HStack>
                                <Text fontSize={16} fontWeight={700}>
                                  {review.writer}
                                </Text>
                                <Text>{review.title}</Text>
                              </HStack>
                            </VStack>
                          </HStack>
                        </VStack>
                      ))}
                    </VStack>
                  )}
                </GridItem>
              </Grid>
              <Divider />
              <Grid templateColumns={"250px 1fr"} gap={8} my={8}>
                <GridItem>
                  <Text fontWeight={600} fontSize={20}>
                    기본정보
                  </Text>
                </GridItem>

                <GridItem>
                  <VStack alignItems={"flex-start"}>
                    <Text>{item.subInfo?.bestSellerRank}</Text>
                    <Text>{item.subInfo?.itemPage} 페이지</Text>
                    <Text>ISBN : {item.isbn}</Text>
                    <Text>기본정보</Text>
                    <Text>{item.categoryName}</Text>
                  </VStack>
                </GridItem>
              </Grid>
              <Divider />
              <Grid templateColumns={"250px 1fr"} gap={8} my={8}>
                <GridItem>
                  <Text fontWeight={600} fontSize={20}>
                    책소개
                  </Text>
                </GridItem>
                <GridItem>
                  <VStack alignItems={"flex-start"}>
                    <Text>
                      삼국시대부터 조선시대까지 역사 속에 나타난 다양한 사건을
                      중심으로 부동산의 가치를 결정짓는 요인과 이것이 현대에는
                      어떤 방식으로 작동하는지를 낱낱이 분석하여 기술하고 있다.
                      ‘서울은 왜 백제, 조선, 한국의 수도로 낙점되었을까?’,
                      ‘한양의 상권은 왜 종로에서 발달했을까?’, ‘고대에는 신도시
                      개발을 어떻게 했을까?’를 비롯해 ‘공공기관 지방 이전은
                      실제로 지방 도시의 집값에 어떤 영향을 끼쳤나?’,
                      ‘유수지·매립지·산지의 가치는 어떻게 변화했나?’, ‘기피
                      지역이었던 공장지대와 역(驛) 주변은 어떻게 직주근접
                      상급지가 되었나?’에 대한 대답이 이 책에 담겨 있다.
                    </Text>
                    <Text>
                      입지 스페셜리스트 이상우 저자와 역사 저술가 유성운 저자가
                      힘을 합쳐 과거와 현대를 오가며 시대를 뛰어넘어 돈과 사람이
                      몰리는 불변의 입지 조건을 분석해 밝히고 있다. 이 책을 읽는
                      독자는 시장의 흐름과 상관없이 성장을 거듭하고 결국 개발될
                      수밖에 없는 부의 거점을 읽어내는 안목을 키울 수 있을
                      것이다.
                    </Text>
                  </VStack>
                </GridItem>
              </Grid>
              <Divider />
              <Grid templateColumns={"250px 1fr"} gap={8} my={8}>
                <GridItem>
                  <Text fontWeight={600} fontSize={20}>
                    책소개
                  </Text>
                </GridItem>
                <GridItem>
                  <VStack alignItems={"flex-start"}>
                    <Text>머리말</Text>
                    <Text>부동산은 면면히 흐르는 인간의 삶이다_이상우</Text>
                    <Text>
                      고대부터 오늘날까지, 사람은 어디에서 사는가_유성운
                    </Text>
                    <Text></Text>
                    <Text>
                      1부. 부동산 보는 안목을 키우는 첫 번째 키워드: 교육 환경
                    </Text>
                    <Text></Text>
                    <Text>1장. 좋은 학군은 예나 지금이나 선호 지역 1순위</Text>
                    <Text>과거 급제 1번지 개경 구재동</Text>
                    <Text>한양은 ‘고려 고시생의 신림동’이었다</Text>
                    <Text>조용한 시골이던 선산은 어떻게 지역 명문이 됐나</Text>
                    <Text>조선의 8학군으로 단단히 자리 잡은 한양</Text>
                    <Text>서울이 안 되면 한강 네트워크라도</Text>
                    <Text></Text>
                    <Text>2장. 교육의 목표는 결국 네트워크를 만드는 것</Text>
                    <Text>핵심은 네트워크다</Text>
                    <Text>
                      ‘서울대학교’는 현시대를 살아가는 우리에게 어떤 의미일까
                    </Text>
                    <Text>학부 나왔으면 됐지, 전문대학원은 뭔가?</Text>
                    <Text>특목고와 인기 학군지의 일반고</Text>
                    <Text>고교 평준화의 풍선 효과, 인기 학군지의 탄생</Text>
                    <Text>학군지 역시 흥망성쇠의 룰을 따른다더보기</Text>
                  </VStack>
                </GridItem>
              </Grid>
            </Box>
          </VStack>
        </>
      ))}
    </>
  );
}
