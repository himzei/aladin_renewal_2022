import { Badge, Box, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { dateFormat } from "../lib/utils";

interface IBookProp {
  cover: string;
  title: string;
  priceSales: number;
  pubDate: string;
  publisher: string;
  isbn: string;
  fontColor?: string;
  rankNum?: number;
  description?: string;
}

export default function Book({
  cover,
  title,
  pubDate,
  publisher,
  isbn,
  fontColor,
  description,
  rankNum,
}: IBookProp) {
  return (
    <>
      <Link to={`/book/${isbn}`}>
        <Box>
          <VStack position="relative" role="group">
            <Box
              w={"150px"}
              h="230px"
              overflow={"hidden"}
              position="relative"
              shadow="md"
              rounded="sm"
            >
              <Image
                // _groupHover={{
                //   transform: "scale(1.1)",
                //   transition: "0.4s",
                // }}
                _focus={{
                  boxShadow: "outline",
                }}
                src={cover}
                objectFit="cover"
                objectPosition={"center center"}
                h="100%"
              />
              <Box
                position="absolute"
                top={-3}
                left={-3}
                w="25px"
                h="25px"
                bg="#E62E8B"
                transform={"rotate(45deg) scale(2)"}
              />
              <Box
                position="absolute"
                w="full"
                h="0"
                bottom="0"
                right="0"
                bg="#E62E8B"
                transition="0.4s"
                _groupHover={{
                  height: "160px",
                }}
              />
              <Box
                position="absolute"
                w="full"
                h="full"
                top="180px"
                left="0"
                px={1}
                opacity={0}
                transition="0.4s"
                _groupHover={{
                  top: "80px",
                  delay: "1",
                  opacity: "1",
                }}
              >
                <Text color="white" fontSize={"sm"}>
                  {description}
                </Text>
              </Box>
            </Box>

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
            <VStack alignItems={"flex-start"} spacing={0} w="90%">
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
      </Link>
    </>
  );
}
