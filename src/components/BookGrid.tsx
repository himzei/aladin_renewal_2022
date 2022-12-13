import {
  Box,
  Grid,
  GridItem,
  HStack,
  Image,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
import "./Paging.css";
import { useState } from "react";
import { IBookResult } from "../routes/Home";
import { itemNewSpecial } from "../api";
import { useQuery } from "@tanstack/react-query";
import BookGridSkeleton from "./BookGridSkeleton";

interface IProps {
  numContents?: number;
  wSize: string;
}

export default function BookGrid({ wSize }: IProps) {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);
  const total = 500; // 임시 하드코딩

  const { data: dataItemNewSpecial, isLoading: isLoadingItemNewSpecial } =
    useQuery<IBookResult[]>([page, limit], itemNewSpecial);

  const handlePageChange = (page: number) => {
    setPage(page);
  };
  return (
    <VStack
      pt={32}
      pb={16}
      textTransform={"uppercase"}
      display="flex"
      justifyContent={"center"}
      spacing={4}
    >
      <HStack w={wSize} py={4} justifyContent="space-between">
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
            <Text textTransform={"uppercase"} fontSize={24} fontWeight="600">
              주목할 만한 신간리스트
            </Text>
          </Box>
        </Box>
        <Select
          placeholder="게시물 수"
          w="32"
          value={limit}
          onChange={({ target: { value } }) => setLimit(Number(value))}
        >
          <option value="6">6</option>
          <option value="12">12</option>
          <option value="18">18</option>
          <option value="24">24</option>
          <option value="30">30</option>
          <option value="36">36</option>
          <option value="42">42</option>
          <option value="48">48</option>
        </Select>
      </HStack>

      <Grid
        templateColumns={"repeat(6, 1fr)"}
        w={wSize}
        gap="4"
        gridRowGap={8}
        rowGap={8}
      >
        {isLoadingItemNewSpecial ? (
          <BookGridSkeleton numContents={limit} />
        ) : null}
        {dataItemNewSpecial?.map((item, index) => (
          <Link to={`/book/${item.isbn}`} key={index}>
            <GridItem bg="red" w="full" role="group">
              <VStack h="auto">
                <Box w="full" h="56" overflow={"hidden"}>
                  <Image
                    transition="0.4s"
                    _groupHover={{
                      transform: "scale(1.2)",
                    }}
                    w="full"
                    h="56"
                    objectFit={"cover"}
                    objectPosition="center"
                    src={`${item.cover}`}
                  />
                </Box>
                <Box
                  w="full"
                  h="28"
                  py={2}
                  px={2}
                  position="relative"
                  overflow={"hidden"}
                  // 컷팅
                >
                  <Box
                    bg="gray.800"
                    position="absolute"
                    w="full"
                    h="full"
                    top="0"
                    left="0"
                    transition="0.4s"
                    _groupHover={{
                      top: "160px",
                    }}
                  />
                  <Box
                    position="absolute"
                    bottom={-5}
                    right={-5}
                    w="30px"
                    h="30px"
                    bg="white"
                    transform={"rotate(45deg) scale(2)"}
                  />
                  <Text
                    fontSize={14}
                    position="absolute"
                    color="gray.100"
                    fontWeight={600}
                    textTransform="uppercase"
                  >
                    {item.title}
                  </Text>
                </Box>
              </VStack>
            </GridItem>
          </Link>
        ))}
      </Grid>
      <Box>
        <Pagination
          activePage={page}
          itemsCountPerPage={limit}
          totalItemsCount={total}
          pageRangeDisplayed={5}
          prevPageText={"‹"}
          nextPageText={"›"}
          onChange={handlePageChange}
        />
      </Box>
    </VStack>
  );
}
