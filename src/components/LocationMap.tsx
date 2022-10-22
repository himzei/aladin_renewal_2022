import { useState } from "react";
import {
  Box,
  Button,
  CloseButton,
  Grid,
  GridItem,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { motion } from "framer-motion";

interface IAddress {
  type: string;
  name: string;
  time: string;
  holiday: string;
  address: string;
  tel?: string;
  page?: string;
}

const addressData: IAddress[] = [
  {
    type: "서울",
    name: "가로수길점",
    time: "09:30~22:00",
    tel: "매장통합 콜센터 : 1544-2514 (평일 9-18시, 근무시간 외 ARS 안내)",
    holiday: "설날(음력), 추석 당일",
    address: "서울특별시 강남구 강남대로 152길 45",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=Sinsa",
  },
  {
    type: "서울",
    name: "강남점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "서울특별시 강남구 강남대로 438, 지하 1층 (역삼동 스타플렉스)",
  },
  {
    type: "서울",
    name: "강서홈플러스점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "서울특별시 강서구 화곡로 398 홈플러스강서점 4층",
  },
  {
    type: "서울",
    name: "강남점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "서울특별시 강남구 강남대로 438, 지하 1층 (역삼동 스타플렉스)",
  },
  {
    type: "서울",
    name: "건대점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "서울특별시 광진구 능동로 111 지하 1층",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=Sinsa",
  },
  {
    type: "서울",
    name: "대학로점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "서울특별시 종로구 창경궁로 236, 이화빌딩 지하 1층 (명륜4가)",
  },
  {
    type: "서울",
    name: "노원역점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "서울 노원구 동일로 1413 남성빌딩 지하1층",
  },
  {
    type: "서울",
    name: "서울대입구역점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "서울특별시 관악구 관악로 171 지하1층",
  },
  {
    type: "서울",
    name: "수유점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "서울특별시 강북구 도봉로 342 2층",
  },
  {
    type: "서울",
    name: "신림점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    tel: "매장통합 콜센터 : 1544-2514 (평일 9-18시, 근무시간 외 ARS 안내)",
    address: "서울특별시 관악구 신림로 318, 청암위브 지하 1층",
  },
  {
    type: "서울",
    name: "신촌점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "서울특별시 서대문구 연세로 21 지하 1층 (창천동)",
  },
  {
    type: "서울",
    name: "연신내점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: " 서울특별시 은평구 연서로 214",
  },
  {
    type: "서울",
    name: "영등포점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "서울 영등포구 영중로 12",
  },
];

export default function LocationMap() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);
  return (
    <>
      <Text fontSize={20} fontWeight={600} w="6xl">
        중고매장 위치
      </Text>
      <Box w="full" boxShadow="1px 1px 0 rgba(0, 0, 0, 0.1)">
        <HStack h="400px" bg="gray.50" position="relative">
          <VStack
            zIndex={3}
            spacing={8}
            bg="gray.100"
            w="240px"
            h="full"
            display={"flex"}
            flexDirection="column"
            p={4}
            alignItems="flex-start"
            justifyContent={"flex-start"}
          >
            <Text fontWeight={600} fontSize={18} color="blue.500">
              지역별 검색
            </Text>
            <Grid templateColumns={"1fr 1fr"} gap={3} rowGap={4} w="190px">
              {[
                "서울(17)",
                "경기(12)",
                "광주(2)",
                "부산(4)",
                "김해(1)",
                "대구(3)",
                "대전(2)",
                "마산(1)",
                "울산(1)",
                "인천(3)",
                "전주(1)",
                "창원(1)",
                "천안(1)",
                "청주(1)",
              ].map((i) => (
                <GridItem key={i}>
                  <Box display="flex" justifyContent={"flex-start"}>
                    <Button
                      colorScheme={"gray"}
                      variant="link"
                      onClick={toggleClicked}
                    >
                      <Text fontSize={"sm"}>{[i]}</Text>
                    </Button>
                  </Box>
                </GridItem>
              ))}
            </Grid>
          </VStack>

          <Box
            boxSizing={"border-box"}
            position="absolute"
            as={motion.div}
            layout
            left={clicked ? "210px" : "0"}
            top="0"
            w="210px"
            h="full"
            zIndex={2}
            bg="gray.50"
            overflow={"auto"}
          >
            <Box
              position="absolute"
              top={0}
              right={0}
              display={clicked ? "block" : "none"}
            >
              <CloseButton onClick={() => setClicked(false)} />
            </Box>
            <VStack mt={12} spacing={10}>
              <VStack fontSize={12} alignItems="flex-start" spacing={2} px={4}>
                <Button
                  as={"a"}
                  target="_blank"
                  href={addressData[0].page}
                  variant={"link"}
                  colorScheme="gray"
                  fontWeight={600}
                  fontSize={16}
                >
                  알라딘 {addressData[0].name}
                </Button>

                <VStack spacing={1} alignItems="flex-start">
                  <Text fontSize={14}>{addressData[0].address}</Text>
                  <Text fontSize={12} fontWeight={300}>
                    {addressData[0].time}
                  </Text>
                </VStack>
              </VStack>
              <VStack fontSize={12} alignItems="flex-start" spacing={2} px={4}>
                <Button
                  as={"a"}
                  target="_blank"
                  href={addressData[0].page}
                  variant={"link"}
                  colorScheme="gray"
                  fontWeight={600}
                  fontSize={16}
                >
                  알라딘 {addressData[0].name}
                </Button>

                <VStack spacing={1} alignItems="flex-start">
                  <Text fontSize={14}>{addressData[0].address}</Text>
                  <Text fontSize={12} fontWeight={300}>
                    {addressData[0].time}
                  </Text>
                </VStack>
              </VStack>
              <VStack fontSize={12} alignItems="flex-start" spacing={2} px={4}>
                <Button
                  as={"a"}
                  target="_blank"
                  href={addressData[0].page}
                  variant={"link"}
                  colorScheme="gray"
                  fontWeight={600}
                  fontSize={16}
                >
                  알라딘 {addressData[0].name}
                </Button>

                <VStack spacing={1} alignItems="flex-start">
                  <Text fontSize={14}>{addressData[0].address}</Text>
                  <Text fontSize={12} fontWeight={300}>
                    {addressData[0].time}
                  </Text>
                </VStack>
              </VStack>
              <VStack fontSize={12} alignItems="flex-start" spacing={2} px={4}>
                <Button
                  as={"a"}
                  target="_blank"
                  href={addressData[0].page}
                  variant={"link"}
                  colorScheme="gray"
                  fontWeight={600}
                  fontSize={16}
                >
                  알라딘 {addressData[0].name}
                </Button>

                <VStack spacing={1} alignItems="flex-start">
                  <Text fontSize={14}>{addressData[0].address}</Text>
                  <Text fontSize={12} fontWeight={300}>
                    {addressData[0].time}
                  </Text>
                </VStack>
              </VStack>
            </VStack>
          </Box>
          <Box w="full" h="full" zIndex={1}>
            <Map
              center={{ lat: 33.5563, lng: 126.79581 }}
              style={{ width: "100%", height: "100%" }}
            >
              <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
                <div style={{ color: "#000" }}>Hello World!</div>
              </MapMarker>
            </Map>
          </Box>
        </HStack>
      </Box>
    </>
  );
}
