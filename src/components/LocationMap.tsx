import { useState, useEffect } from "react";
import {
  Badge,
  Box,
  Button,
  CloseButton,
  Grid,
  GridItem,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import styled from "styled-components";

const MapContainer = styled.div`
  /* aspect-ratio: 16 / 9; */
  width: 100%;
  height: 100%;
`;

interface IInfo {
  city: string;
  name: string;
  time: string;
  tel?: string;
  holiday: string;
  address: string;
  page: string;
}

const addressData: IInfo[] = [
  {
    city: "서울",
    name: "가로수길점",
    time: "09:30~22:00",
    tel: "매장통합 콜센터 : 1544-2514 (평일 9-18시, 근무시간 외 ARS 안내)",
    holiday: "설날(음력), 추석 당일",
    address: "서울특별시 강남구 강남대로 152길 45",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=Sinsa",
  },
  {
    city: "서울",
    name: "강남점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "서울특별시 강남구 강남대로 438, 지하 1층 (역삼동 스타플렉스)",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=Gangnam",
  },
  {
    city: "서울",
    name: "강서홈플러스점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "서울특별시 강서구 화곡로 398 홈플러스강서점 4층",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=Gangseo",
  },
  {
    city: "서울",
    name: "건대점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "서울특별시 광진구 능동로 111 지하 1층",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=Geondae",
  },
  {
    city: "서울",
    name: "노원역점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "서울 노원구 동일로 1413 남성빌딩 지하1층",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=NowonStn",
  },
  {
    city: "서울",
    name: "대학로점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "서울특별시 종로구 창경궁로 236, 이화빌딩 지하 1층 (명륜4가)",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=Daehakro",
  },
  {
    city: "서울",
    name: "서울대입구역점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "서울특별시 관악구 관악로 171 지하1층",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=snue",
  },
  {
    city: "서울",
    name: "수유점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "서울특별시 강북구 도봉로 342 2층",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=suyu",
  },
  {
    city: "서울",
    name: "신림점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    tel: "매장통합 콜센터 : 1544-2514 (평일 9-18시, 근무시간 외 ARS 안내)",
    address: "서울특별시 관악구 신림로 318, 청암위브 지하 1층",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=Sillim",
  },
  {
    city: "서울",
    name: "신촌점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "서울특별시 서대문구 연세로 21 지하 1층 (창천동)",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=Sinchon",
  },
  {
    city: "서울",
    name: "연신내점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "서울특별시 은평구 연서로 214",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=Yeonsinnae",
  },
  {
    city: "서울",
    name: "영등포점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "서울 영등포구 영중로 12",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=Yeongdeungpo",
  },
  {
    city: "서울",
    name: "이수역점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "서울특별시 동작구 사당로 310",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=isu",
  },
  {
    city: "서울",
    name: "잠실롯데월드타워점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address:
      "서울특별시 송파구 올림픽로 305 지하 1층(잠실역 8호선 10번 출구 나가는 길)",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=Jamsil",
  },
  {
    city: "서울",
    name: "잠실새내역점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "서울특별시 송파구 올림픽로 124 지하 1층",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=Sincheon",
  },
  {
    city: "서울",
    name: "종로점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "서울특별시 종로구 삼일대로 395 지하 1층 (종로2가)",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=Jongno",
  },
  {
    city: "서울",
    name: "합정점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "서울특별시 마포구 독막로 5 지하 1층",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=Hapjeong",
  },
  {
    city: "경기",
    name: "동탄2하나로마트점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "경기 화성시 동탄순환대로27길 30 농협 동탄유통센터 2층",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=d2",
  },
  {
    city: "경기",
    name: "동탄점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "경기도 화성시 동탄중앙로 200 타임테라스 B블럭 4층",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=Dongtan",
  },
  {
    city: "경기",
    name: "동탄2하나로마트점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "경기 화성시 동탄순환대로27길 30 농협 동탄유통센터 2층",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=d2",
  },
  {
    city: "경기",
    name: "부천점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "경기도 부천시 원미구 부천로 4, 경동빌딩 지하 1층 (심곡동)",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=Bucheon",
  },
  {
    city: "경기",
    name: "분당서현점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "경기도 성남시 분당구 분당로53번길 9, 에이원프라자 지하 1층",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=Bundang",
  },
  {
    city: "경기",
    name: "분당야탑점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "경기도 성남시 분당구 야탑로 69번길 21 지하 1층",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=yatap",
  },
  {
    city: "경기",
    name: "산본점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "경기도 군포시 산본로 323번길 16-31, 한솔프라자 지하 1층",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=Sanbon",
  },
  {
    city: "경기",
    name: "수원시청역점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "경기도 수원시 팔달구 권광로191",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=Suwon2",
  },
  {
    city: "경기",
    name: "수원점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "경기도 수원시 팔달구 덕영대로 925 지하 1층 (매산로1가)",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=Suwon",
  },
  {
    city: "경기",
    name: "의정부홈플러스점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "경기 의정부시 청사로 38 홈플러스 의정부점 4층",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=uijeongbu",
  },
  {
    city: "경기",
    name: "일산점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address:
      "경기도 고양시 일산동구 중앙로1275번길 56 (장항동), 호수공원광장 루비튜스데이 3층",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=ilsan",
  },
  {
    city: "경기",
    name: "평택점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "경기 평택시 평택로32번길25 2층",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=pyeongtaek",
  },
  {
    city: "경기",
    name: "화정점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "경기도 고양시 덕양구 화신로260번길 51 지하 1층",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=Hwajeong",
  },

  {
    city: "광주",
    name: "광주상무점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "광주광역시 서구 상무평화로 79 팔복빌딩 지하 1층",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=Sangmu",
  },
  {
    city: "광주",
    name: "광주충장로점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "광주광역시 동구 금남로 238, 무등빌딩 지하2층 (금남로2가)",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=Gwangju",
  },
  {
    city: "김해",
    name: "김해점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "경상남도 김해시 김해대로 2342 아이스퀘어몰 2층",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=Gimhae",
  },
  {
    city: "대구",
    name: "대구동성로점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "대구광역시 중구 국채보상로 582, 미도빌딩 지하 1층 (남일동)",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=Daegu",
  },
  {
    city: "대구",
    name: "대구상인점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "대구광역시 달서구 월배로 216 지하 1층",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=SangIn",
  },
  {
    city: "대구",
    name: "동대구역점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "대구광역시 동구 동대구로 530, 동대구역 지하철 1호선 지하1층",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=Edaegu",
  },
  {
    city: "대전",
    name: "대전시청역점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "대전광역시 서구 둔산로 125 둔산동 스타 빌딩 3층",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=DaejeonCityhall",
  },
  {
    city: "마산",
    name: "마산합성점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address:
      "경상남도 창원시 마산회원구 3·15대로 758, 대현프리몰 창원점 JK열 9~16호, I열 11호 (합성동)",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=masan",
  },
  {
    city: "부산",
    name: "부경대역점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "부산광역시 남구 수영로 300 비젼프라자 2층",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=killy",
  },
  {
    city: "부산",
    name: "부산덕천점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "부산광역시 북구 만덕대로 27번길 3 (덕천동 398-4)",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=Deokcheon",
  },
  {
    city: "부산",
    name: "부산센텀점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "부산광역시 해운대구 센텀동로 9 트럼프월드상가 D동 2층",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=Centum",
  },
  {
    city: "부산",
    name: "부산서면점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "부산광역시 진구 중앙대로 704 동보프라자 2,3층",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=Dongbo",
  },
  {
    city: "울산",
    name: "울산점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "울산광역시 남구 삼산로 267번길 8 2층 (삼산동)",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=Ulsan",
  },
  {
    city: "인천",
    name: "인천계산홈플러스점",
    time: "11:00~20:00",
    holiday: "홈플러스 휴무일 (둘째,넷째 일요일)",
    address: "인천광역시 계양구 오조산공원로 14 홈플러스 계산점 4층",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=Gyesan",
  },
  {
    city: "인천",
    name: "인천구월점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "인천광역시 남동구 인하로 497-22 2,3층",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=Guwol",
  },
  {
    city: "인천",
    name: "인천송도점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "인천광역시 연수구 송도국제대로 157 오네스타 지하 1층",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=Songdo",
  },
  {
    city: "전주",
    name: "전주점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address:
      "전라북도 전주시 완산구 전주객사4길 46, 기린오피스텔 지하1층 (고사동)",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=Jeonju",
  },
  {
    city: "창원",
    name: "창원상남점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "경상남도 창원시 성산구 상남로 93 공영주차빌딩 지하1층",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=changwon",
  },
  {
    city: "천안",
    name: "천안신불당점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "천안시 서북구 불당25로 146 리치타워 2층",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=Cheonan",
  },
  {
    city: "청주",
    name: "청주점",
    time: "09:30~22:00",
    holiday: "설날(음력), 추석 당일",
    address: "충청북도 청주시 상당구 성안로 13 씨유멀티플랙스 지하1층",
    page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=Cheongju",
  },
];

export default function LocationMap() {
  const newArr = addressData.map((i) => i.city);
  const cityArr = Array.from(new Set(newArr));

  const cityFranch = (city: string) =>
    addressData.filter((item) => item.city === city);

  const [clicked, setClicked] = useState(false);
  const [franches, setFranches] = useState<IInfo[]>([]);
  const [address, setAddress] = useState("서울특별시 강남구 강남대로 152길 45");
  const getClicked = (city: string) => {
    setClicked(true);
    const result = cityFranch(city);
    setFranches(result);
  };

  useEffect(() => {
    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const geocoder = new window.kakao.maps.services.Geocoder(); // 주소-좌표 반환 객체를 생성
        // 주소로 좌표를 검색
        geocoder.addressSearch(address, (result: any, status: any) => {
          if (status === window.kakao.maps.services.Status.OK) {
            // 정상적으로 검색이 완료됐으면
            var coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

            // 지도를 생성
            const container = document.querySelector(
              "#mapKakao"
            ) as HTMLElement;
            const options = {
              center: coords,
              level: 3,
            };
            const map = new window.kakao.maps.Map(container, options);
            // 결과값으로 받은 위치를 마커로 표시
            new window.kakao.maps.Marker({
              map: map,
              position: coords,
            });
          }
          // else {
          //   // 정상적으로 좌표가 검색이 안 될 경우 디폴트 좌표로 검색
          //   const container = document.getElementById("map") as HTMLElement;
          //   const options = {
          //     center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          //     level: 3,
          //   };
          //   // 지도를 생성
          //   const map = new window.kakao.maps.Map(container, options);
          //   new window.kakao.maps.Marker({
          //     map: map,
          //     position: coords,
          //   });
          // }
        });
      });
    };
    onLoadKakaoMap();
  }, [address]);

  //

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
              {cityArr.map((city, index) => (
                <GridItem key={index}>
                  <Box display="flex" justifyContent={"flex-start"}>
                    <Button
                      colorScheme={"gray"}
                      variant="link"
                      onClick={() => getClicked(city)}
                    >
                      <Text fontSize={"sm"}>{city}</Text>
                      <Text fontSize={"sm"} fontWeight={400}></Text>
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
            <VStack mt={8} spacing={10}>
              <VStack
                fontSize={12}
                alignItems="flex-start"
                spacing={8}
                px={4}
                w="full"
                mb={8}
              >
                <Button
                  as={"a"}
                  target="_blank"
                  variant={"link"}
                  colorScheme="gray"
                  fontWeight={600}
                  fontSize={16}
                ></Button>
                {franches.map((franch, index) => (
                  <VStack
                    spacing={1}
                    alignItems="flex-start"
                    w="full"
                    key={index}
                  >
                    <Text
                      fontSize={16}
                      fontWeight={600}
                      onClick={() => setAddress(franch.address)}
                    >
                      {franch.name}
                    </Text>
                    <Text fontSize={12} fontWeight={400}>
                      {franch.address}
                    </Text>
                    <VStack spacing={0} alignItems="flex-start">
                      <Text fontSize={12}>쉬는날: {franch.holiday}</Text>
                      <Text fontSize={12} fontStyle="italic">
                        {franch.time}
                      </Text>
                    </VStack>
                    <Badge colorScheme={"green"} variant="outline">
                      <a href={franch.page} target="_blank" rel="noreferrer">
                        홈페이지 바로가기
                      </a>
                    </Badge>
                  </VStack>
                ))}
              </VStack>
            </VStack>
          </Box>
          <Box w="full" h="full" zIndex={1}>
            <MapContainer id="mapKakao" />
          </Box>
        </HStack>
      </Box>
    </>
  );
}
