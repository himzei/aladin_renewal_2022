import {
  Box,
  HStack,
  Image,
  keyframes,
  Text,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const spin = keyframes`
  10% { transform: translate(0px, 0px); }
  20% { transform: translate(8px, -3px); }
  30% { transform: translate(-5px, -5px); }
  40% { transform: translate(10px, 5px); }
  50% { transform: translate(-5px, 10px); }
  60% { transform: translate(3px, 3px); }
  70% { transform: translate(-2px, -4px); }
  80% { transform: translate(2px, 5px); }
  90% { transform: translate(-5px, -8px); }
  100% { transform: translate(0px, 0px); }
`;

export default function Root() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 15s linear`;

  return (
    <>
      <Header />
      <Outlet />
      <Box position="fixed" right={8} bottom={20} animation={animation}>
        <Image src="../../images/jini.png" w={40} />
        <HStack
          position={"absolute"}
          left={16}
          bottom={-2}
          bg="blue.400"
          fontWeight={600}
          color="white"
          justifyContent={"center"}
          px={2}
          py={1}
          rounded="full"
          w="40px"
        >
          <Text fontSize={"xs"}>문의</Text>
        </HStack>
      </Box>

      <Footer />
    </>
  );
}
