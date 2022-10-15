import { Badge, Box, GridItem, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

interface IBookProp {
  cover: string;
  title: string;
  priceSales: number;
  pubDate: string;
  publisher: string;
  isbn: string;
}

export default function Book({
  cover,
  title,
  pubDate,
  publisher,
  isbn,
}: IBookProp) {
  return (
    <>
      <Link to={`/book/${isbn}`}>
        <GridItem>
          <VStack position="relative">
            <Box w={"150px"} h="230px" overflow={"hidden"} rounded={"20px"}>
              <Image
                src={cover}
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
              <AiFillStar color="crimson" fontSize={18} />
            </Badge>
            <VStack alignItems={"flex-start"} spacing={0}>
              <Text color={"gray.700"} fontSize={"md"} fontWeight={"bold"}>
                {title.substr(0, 12)}
              </Text>
              <Text color={"gray.600"} fontSize={"sm"}>
                출판일: {pubDate}
              </Text>
              <Text color={"gray.600"} fontSize={"sm"}>
                {publisher}
              </Text>
            </VStack>
          </VStack>
        </GridItem>
      </Link>
    </>
  );
}
