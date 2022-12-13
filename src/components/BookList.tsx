import {
  Box,
  Divider,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { dateFormat, deductFormat, priceFormat } from "../lib/utils";

interface IBookProp {
  cover: string;
  title: string;
  priceSales: number;
  pubDate: string;
  publisher: string;
  isbn: string;
  categoryName: string;
  author: string;
  description: string;
  priceStandard: number;
}

export default function BookList({
  cover,
  title,
  description,
  pubDate,
  publisher,
  categoryName,
  isbn,
  author,
  priceStandard,
  priceSales,
}: IBookProp) {
  return (
    <Link to={`/book/${isbn}`}>
      <Grid templateColumns={"250px 1fr"} gap={6}>
        <GridItem>
          <Box
            rounded={"20px"}
            overflow="hidden"
            w="200px"
            h="280px"
            display={"flex"}
            alignItems="center"
          >
            <Image src={cover} objectFit="cover" objectPosition={"center"} />
          </Box>
        </GridItem>
        <GridItem>
          <VStack h="100%" alignItems={"flex-start"} justifyContent={"center"}>
            <Text fontSize={"sm"} fontWeight="600" color="#EF3B96">
              [{categoryName}]
            </Text>
            <HStack spacing={4}>
              <Text fontSize={"2xl"} fontWeight="700">
                {title}
              </Text>
            </HStack>

            <HStack spacing={6}>
              <HStack>
                <Box
                  bg="#4C72B7"
                  px={2}
                  fontSize={"sm"}
                  color="white"
                  rounded="md"
                >
                  출판사
                </Box>
                <Text>{publisher}</Text>
              </HStack>
              <HStack>
                <Box
                  bg="#4C72B7"
                  px={2}
                  fontSize={"sm"}
                  rounded="md"
                  color="white"
                >
                  저자
                </Box>
                <Text>{author}</Text>
              </HStack>
            </HStack>
            <HStack>
              <Box
                color="white"
                bg="#4C72B7"
                px={2}
                fontSize={"sm"}
                rounded="md"
              >
                출판일
              </Box>
              <Text fontSize={"md"}>{dateFormat(pubDate)}</Text>
            </HStack>
            <Text>{description}</Text>
            <HStack spacing={4}>
              <HStack>
                <Text>판매가</Text>
                <Text fontSize={20} fontWeight={600}>
                  {priceFormat(priceSales)}
                </Text>
              </HStack>

              {priceSales === priceStandard ? null : (
                <HStack>
                  <Text>(정가)</Text>
                  <Text decoration={"line-through"}>
                    {priceFormat(priceStandard)}
                  </Text>
                  <Text>{deductFormat(priceStandard, priceSales)})</Text>
                </HStack>
              )}
            </HStack>
          </VStack>
        </GridItem>
        <Divider />
      </Grid>
    </Link>
  );
}
