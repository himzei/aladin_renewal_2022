import { HStack, Image, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";

export default function Header() {
  const {
    onOpen: onLoginOpen,
    isOpen: isLoginOpen,
    onClose: onLoginClose,
  } = useDisclosure();
  const {
    onOpen: onSignUpOpen,
    isOpen: isSignUpOpen,
    onClose: onSignUPClose,
  } = useDisclosure();
  return (
    <Stack
      w="100%"
      h="60px"
      color="#0d243f"
      fontWeight={"600"}
      fontSize={"sm"}
      alignItems={"center"}
      justifyContent={"center"}
      backgroundColor={"#33AFDF"}
    >
      <HStack w="7xl" justifyContent={"space-between"}>
        <HStack spacing={6}>
          <Link to="/">
            <Image
              src="../../images/aladinlogo.png"
              alt=""
              w={20}
              transform={"translateY"}
            />
          </Link>
          <HStack spacing={6}>
            <Link to="/inbound">
              <Text>국내도서</Text>
            </Link>
            <Link to="/outbound">
              <Text>외국도서</Text>
            </Link>
            <Link to="/music">
              <Text>음반</Text>
            </Link>
            <Link to="/dvd">
              <Text>DVD</Text>
            </Link>
            <Link to="/used">
              <Text>중고샵</Text>
            </Link>
            <Link to="/ebook">
              <Text>전자책</Text>
            </Link>
          </HStack>
        </HStack>
        <HStack spacing={6}>
          <Text as="button" onClick={onLoginOpen}>
            로그인
          </Text>
          <Text as="button" onClick={onSignUpOpen}>
            회원가입
          </Text>
        </HStack>
        <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
        <SignUpModal isOpen={isSignUpOpen} onClose={onSignUPClose} />
      </HStack>
    </Stack>
  );
}
