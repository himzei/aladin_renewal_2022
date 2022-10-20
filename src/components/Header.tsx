import {
  Box,
  Button,
  HStack,
  IconButton,
  Image,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import { BsFillMoonFill } from "react-icons/bs";
import { FaSignInAlt } from "react-icons/fa";
import { MdOutlineRememberMe } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const headerColor = useColorModeValue("gray.100", "gray.700");
  const logoColor = useColorModeValue(
    "../../images/aladinlogo_kor.png",
    "../../images/aladinlogo_kor_night.png"
  );
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

  const [isMobile] = useMediaQuery("(max-width: 1080px)");

  return (
    <Stack
      w="100%"
      h="60px"
      color="#0d243f"
      fontWeight={"600"}
      fontSize={"sm"}
      alignItems={"center"}
      justifyContent={"center"}
      backgroundColor={headerColor}
      boxShadow="sm"
    >
      {isMobile ? null : (
        <HStack
          w={{ md: "70%", lg: "80%", xl: "90%", "2xl": "80%" }}
          justifyContent={"space-between"}
        >
          <HStack spacing={6}>
            <Link to="/">
              <Box mb={2}>
                <Image src={logoColor} alt="" w={32} />
              </Box>
            </Link>
            <HStack spacing={6}>
              <Link to="/inbound">
                <Button colorScheme="blue" variant="link">
                  <Text>국내도서</Text>
                </Button>
              </Link>
              <Link to="/outbound">
                <Button colorScheme="blue" variant="link">
                  <Text>외국도서</Text>
                </Button>
              </Link>
              <Link to="/music">
                <Button colorScheme="blue" variant="link">
                  <Text>음반</Text>
                </Button>
              </Link>
              <Link to="/dvd">
                <Button colorScheme="blue" variant="link">
                  <Text>DVD</Text>
                </Button>
              </Link>
              <Link to="/used">
                <Button colorScheme="blue" variant="link">
                  <Text>중고샵</Text>
                </Button>
              </Link>

              <Link to="/ebook">
                <Button colorScheme="blue" variant="link">
                  <Text>전자책</Text>
                </Button>
              </Link>
            </HStack>
          </HStack>
          <HStack spacing={1}>
            <IconButton
              onClick={toggleColorMode}
              variant="ghost"
              aria-label="Toggle dark mode"
              icon={
                colorMode === "light" ? <BsFillSunFill /> : <BsFillMoonFill />
              }
            />

            <Button
              leftIcon={<MdOutlineRememberMe />}
              colorScheme="blue"
              variant="solid"
              onClick={onSignUpOpen}
              fontSize="xs"
              height={7}
              width={24}
            >
              회원가입
            </Button>
            <Button
              leftIcon={<FaSignInAlt />}
              colorScheme="blue"
              variant="outline"
              onClick={onLoginOpen}
              fontSize="xs"
              height={7}
              width={24}
            >
              로그인
            </Button>
          </HStack>
          <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
          <SignUpModal isOpen={isSignUpOpen} onClose={onSignUPClose} />
        </HStack>
      )}
    </Stack>
  );
}
