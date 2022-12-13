import {
  Box,
  Heading,
  HStack,
  Text,
  VStack,
  Image,
  Button,
} from "@chakra-ui/react";
import { BsBoxArrowInRight } from "react-icons/bs";

interface IProps {
  title: string;
  description: string;
  imgUrl: string;
}

export default function SkewBox({ title, description, imgUrl }: IProps) {
  return (
    <HStack w="full" h="400px" bg="gray.800" overflow={"hidden"}>
      <Box w="55%" h="full">
        <VStack
          w="50%"
          h="full"
          justifyContent={"center"}
          alignItems="flex-start"
          transform={"translateX(50%)"}
        >
          <Heading color="white" textTransform={"uppercase"}>
            {title}
          </Heading>
          <Text color="white">{description} </Text>

          <HStack py="4">
            <Button
              rightIcon={<BsBoxArrowInRight />}
              textTransform={"uppercase"}
              variant="outline"
              colorScheme={"red"}
            >
              List More
            </Button>
            {/* <Button
              textTransform={"uppercase"}
              variant="outline"
              colorScheme={"red"}
            >
              Buy Ticket
            </Button> */}
          </HStack>
        </VStack>
      </Box>
      <Box
        bg="gray.500"
        w="45%"
        h="full"
        transform={"skewX(20deg) scale(1.25)"}
        overflow="hidden"
      >
        <Image
          h="full"
          transform={"skewX(-20deg) scale(1.3)"}
          src={imgUrl}
          objectFit="cover"
          objectPosition={"center"}
        />
      </Box>
    </HStack>
  );
}
