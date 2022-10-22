import { Box, GridItem, Image, Text, VStack } from "@chakra-ui/react";
import { dateFormat } from "../lib/utils";

interface IProp {
  title: string;
  content: string;
  published: string;
}

export default function BlogMain({ title, content, published }: IProp) {
  return (
    <GridItem maxWidth={"260px"}>
      <VStack bg="white" rounded="2xl" overflow={"hidden"}>
        <Box w="260px" h="160px" overflow={"hidden"} objectFit={"cover"}>
          <Image
            objectFit={"cover"}
            objectPosition="center"
            src={`https://picsum.photos/seed/${title}/300/300`}
          />
        </Box>
        <VStack h="180px" p={4} spacing={4} alignItems="flex-start">
          <VStack alignItems="flex-start" spacing={0}>
            <Text fontWeight={700} fontSize={20}>
              {title.substr(0, 28)}
            </Text>
            <Text>
              {content
                .replace(`/</*[a-zA-Z0-9]>/`, "")
                .replace(/&nbsp;/, "")
                .substr(0, 44)}
            </Text>
          </VStack>
          <Text fontSize={12}>{dateFormat(published.substr(0, 10))}</Text>
        </VStack>
      </VStack>
    </GridItem>
  );
}
