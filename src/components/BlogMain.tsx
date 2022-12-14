import {
  Box,
  GridItem,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { dateFormat } from "../lib/utils";

interface IProp {
  title: string;
  content: string;
  published: string;
  id: string;
}

export default function BlogMain({ title, content, published, id }: IProp) {
  const backColor = useColorModeValue("white", "gray.800");
  return (
    <Link to={`/blog/${id}`}>
      <GridItem maxWidth={"260px"} role="group">
        <VStack bg="white" rounded="2xl" overflow={"hidden"}>
          <Box w="260px" h="160px" overflow={"hidden"} objectFit={"cover"}>
            <Image
              _groupHover={{
                transform: "scale(1.1)",
                transition: "0.4s",
              }}
              objectFit={"cover"}
              objectPosition="center"
              src={`https://picsum.photos/seed/${title}/300/300`}
            />
          </Box>
          <VStack
            as={Box}
            h="180px"
            p={4}
            spacing={4}
            alignItems="flex-start"
            bg={backColor}
          >
            <VStack alignItems="flex-start" spacing={0}>
              <Text
                fontWeight={700}
                fontSize={20}
                _groupHover={{ color: "#3D62AD" }}
              >
                {title.substr(0, 28)}
              </Text>
              <Text _groupHover={{ color: "#3D62AD" }}>
                {content
                  .replace(`/</*[a-zA-Z0-9]>/`, "")
                  .replace(/&nbsp;/, "")
                  .substr(0, 38)}
              </Text>
            </VStack>
            <Text _groupHover={{ color: "#3D62AD" }} fontSize={12}>
              {dateFormat(published.substr(0, 10))}
            </Text>
          </VStack>
        </VStack>
      </GridItem>
    </Link>
  );
}
