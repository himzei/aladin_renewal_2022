import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { TiMessages } from "react-icons/ti";
import { FaQuinscape } from "react-icons/fa";

export default function Footer() {
  return (
    <Box
      borderTop={"1px"}
      borderColor="gray.200"
      display={"flex"}
      justifyContent="center"
      w="full"
      mt={10}
    >
      <Box w="6xl">
        <Grid templateColumns={"8fr 2fr"} h="180px">
          <GridItem>
            <VStack alignItems={"flex-start"} spacing={6} mt={8}>
              <Link to="/">
                <Image
                  src="../../images/aladinlogo.png"
                  alt=""
                  w={20}
                  transform={"translateY"}
                />
              </Link>
              <HStack
                fontSize={"xs"}
                color={"gray.500"}
                spacing={3}
                fontWeight={600}
                justifyContent="flex-start"
              >
                <Text>회사소개</Text>
                <Text>이용약관</Text>
                <Text>개인정보처리방침</Text>
                <Text>청소년 보호정책</Text>
                <Text>중고매장</Text>
                <Text>제휴/마케팅안내</Text>
                <Text>판매자 매니져</Text>
                <Text>춮판사/공급사 안내</Text>
                <Text>광고안내</Text>
                <Text>학교/기업/기관 대량구매</Text>
              </HStack>
              <VStack fontSize={"xs"} alignItems="flex-start">
                <HStack>
                  <Text>(주)알라딘커뮤니케이션</Text>
                  <Text>대표이사 : 최우경</Text>
                  <Text>사업자등록 : 201-81-23094</Text>
                  <Text>통신판매업신고 : 중구01520호</Text>
                </HStack>
                <HStack spacing={3}>
                  <Text>고객센터 일반문의 (발신자 부담) 1544-2514</Text>
                  <Text>
                    (본사) 서울시 중구 서소문로 89-31 ㅣ (중고매장) 자세히보기(
                  </Text>
                  <Text>
                    (고객센터) 서울시 마포구 백범로 71 숨도빌딩 7층, Fax
                    02-6926-2600
                  </Text>
                </HStack>
              </VStack>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack h="100%" mt={20}>
              <Stack direction="row" spacing={1} w="100%">
                <Button
                  leftIcon={<TiMessages />}
                  colorScheme="blue"
                  variant="outline"
                >
                  1:1 문의
                </Button>
                <Button
                  leftIcon={<FaQuinscape />}
                  colorScheme="blue"
                  variant="outline"
                >
                  FAQ
                </Button>
              </Stack>
              <Box w="100%">
                <Button
                  h="25px"
                  w="100px"
                  leftIcon={<FaQuinscape />}
                  colorScheme="blue"
                  variant="outline"
                >
                  Call us
                </Button>
              </Box>
            </VStack>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}
