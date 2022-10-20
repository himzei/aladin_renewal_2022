import { Badge, Box, GridItem, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { dateFormat } from "../lib/utils";
import { motion } from "framer-motion";

interface IBookProp {
  cover: string;
  title: string;
  priceSales: number;
  pubDate: string;
  publisher: string;
  isbn: string;
  fontColor?: string;
  rankNum?: number;
}

export default function Book({
  cover,
  title,
  pubDate,
  publisher,
  isbn,
  fontColor,
  rankNum,
}: IBookProp) {
  return (
    <>
      <Link to={`/book/${isbn}`}>
        <GridItem>
          <Box as={motion.div}>
            <VStack position="relative">
              <Box w={"150px"} h="230px" overflow={"hidden"} rounded={"20px"}>
                <Image
                  src={cover}
                  objectFit="cover"
                  objectPosition={"center center"}
                  h="100%"
                />
              </Box>
              {rankNum && (
                <Box position="absolute" left={10} top={0}>
                  <Text color="blue" fontFamily={"serif"} fontSize="40px">
                    {rankNum}
                  </Text>
                </Box>
              )}
              <Badge
                colorScheme={"yellow.500"}
                px={4}
                py={1}
                position="absolute"
                right={0}
                top={0}
              >
                <FaHeart color="crimson" fontSize={18} />
              </Badge>
              <VStack alignItems={"flex-start"} spacing={0} w="full">
                <Text color={fontColor} fontSize={"md"} fontWeight={"bold"}>
                  {title.substr(0, 12)}
                </Text>
                <Text letterSpacing={"-1px"} color={fontColor} fontSize={"xs"}>
                  {dateFormat(pubDate)}
                </Text>
                <Text color={fontColor} fontSize={"sm"}>
                  {publisher.substr(0, 12)}
                </Text>
              </VStack>
            </VStack>
          </Box>
        </GridItem>
      </Link>
    </>
  );
}
