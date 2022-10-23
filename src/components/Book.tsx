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
            <VStack position="relative" role="group">
              <Box
                w={"150px"}
                h="230px"
                overflow={"hidden"}
                rounded={"20px"}
                boxShadow="md"
              >
                <Image
                  _groupHover={{
                    transform: "scale(1.1)",
                    transition: "0.4s",
                  }}
                  _focus={{
                    boxShadow: "outline",
                  }}
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
                <Text
                  color={fontColor}
                  fontSize={"md"}
                  fontWeight={"bold"}
                  _groupHover={{ color: "#3D62AD" }}
                >
                  {title.substr(0, 11)}
                </Text>
                <Text
                  letterSpacing={"-1px"}
                  color={fontColor}
                  fontSize={"xs"}
                  _groupHover={{ color: "#3D62AD" }}
                >
                  {dateFormat(pubDate)}
                </Text>
                <Text
                  color={fontColor}
                  fontSize={"sm"}
                  _groupHover={{ color: "#3D62AD" }}
                >
                  {publisher.substr(0, 11)}
                </Text>
              </VStack>
            </VStack>
          </Box>
        </GridItem>
      </Link>
    </>
  );
}
