import {
  Box,
  Button,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import { BsFillMoonFill } from "react-icons/bs";
import { FaSignInAlt } from "react-icons/fa";
import { MdOutlineRememberMe } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import { FiMenu } from "react-icons/fi";
import { motion } from "framer-motion";
import { refreshTokens } from "../api";

interface IToken {
  accessToken: string;
}

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const handleFollow = () => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  });

  // const { data } = useQuery<IToken>(["refreshToken"], refreshTokens);

  // console.log(data);

  const { colorMode, toggleColorMode } = useColorMode();
  const headerColor = useColorModeValue("gray.100", "gray.700");
  // const logoColor = useColorModeValue(
  //   "../../images/aladinlogo_kor.png",
  //   "../../images/aladinlogo_kor_night.png"
  // );
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
      position="fixed"
      zIndex={99}
    >
      {isMobile ? (
        // 모바일 일때 화면 구현
        <HStack
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          w={{ md: "70%", lg: "80%", xl: "90%" }}
          justifyContent={"space-between"}
        >
          <HStack spacing={6}>
            <Link to="/">
              <Box mb={2}>
                <Logo />
                {/* <Image src={logoColor} alt="" w={32} /> */}
              </Box>
            </Link>
          </HStack>
          <HStack w={48} justifyContent="flex-end" pr={4}>
            <IconButton
              onClick={toggleColorMode}
              variant="ghost"
              aria-label="Toggle dark mode"
              icon={
                colorMode === "light" ? <BsFillSunFill /> : <BsFillMoonFill />
              }
            />
            <Menu>
              <MenuButton
                px={4}
                py={2}
                transition="all 0.2s"
                borderRadius="md"
                borderWidth="1px"
                _hover={{ bg: "gray.400" }}
                _expanded={{ bg: "blue.400" }}
                _focus={{ boxShadow: "outline" }}
              >
                <FiMenu size={20} />
              </MenuButton>
              <MenuList>
                <Link to="/inbound">
                  <MenuItem>국내도서</MenuItem>
                </Link>
                <Link to="/outbound">
                  <MenuItem>외국도서</MenuItem>
                </Link>
                <Link to="/music">
                  <MenuItem>음반</MenuItem>
                </Link>
                <Link to="/dvd">
                  <MenuItem>DVD</MenuItem>
                </Link>
                <Link to="/used">
                  <MenuItem>중고샵</MenuItem>
                </Link>
                <Link to="/ebook">
                  <MenuItem>전자책</MenuItem>
                </Link>
                <MenuDivider />
                <MenuItem onClick={onSignUpOpen}>회원가입</MenuItem>
                <MenuItem onClick={onLoginOpen}>로그인</MenuItem>
              </MenuList>
            </Menu>
          </HStack>
          <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
          <SignUpModal isOpen={isSignUpOpen} onClose={onSignUPClose} />
        </HStack>
      ) : scrollY > 201 ? (
        // scroll 201 이상일 때
        // 헤더에 검색창 표시
        <HStack
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          w={{ md: "70%", lg: "80%", xl: "90%", "2xl": "80%" }}
          justifyContent={"space-between"}
        >
          <HStack spacing={6}>
            <Link to="/">
              <Box mb={2}>
                <Logo />
                {/* <Image src={logoColor} alt="" w={32} /> */}
              </Box>
            </Link>
          </HStack>
          <Box w="xl">
            <SearchForm isMenu={true} />
          </Box>
          <HStack w={48} justifyContent="flex-end" pr={4}>
            <IconButton
              onClick={toggleColorMode}
              variant="ghost"
              aria-label="Toggle dark mode"
              icon={
                colorMode === "light" ? <BsFillSunFill /> : <BsFillMoonFill />
              }
            />
            <Menu>
              <MenuButton
                px={4}
                py={2}
                transition="all 0.2s"
                borderRadius="md"
                borderWidth="1px"
                _hover={{ bg: "gray.400" }}
                _expanded={{ bg: "blue.400" }}
                _focus={{ boxShadow: "outline" }}
              >
                <FiMenu size={20} />
              </MenuButton>
              <MenuList>
                <Link to="/inbound">
                  <MenuItem>국내도서</MenuItem>
                </Link>
                <Link to="/outbound">
                  <MenuItem>외국도서</MenuItem>
                </Link>
                <Link to="/music">
                  <MenuItem>음반</MenuItem>
                </Link>
                <Link to="/dvd">
                  <MenuItem>DVD</MenuItem>
                </Link>
                <Link to="/used">
                  <MenuItem>중고샵</MenuItem>
                </Link>
                <Link to="/ebook">
                  <MenuItem>전자책</MenuItem>
                </Link>
                <MenuDivider />
                <MenuItem onClick={onSignUpOpen}>회원가입</MenuItem>
                <MenuItem onClick={onLoginOpen}>로그인</MenuItem>
              </MenuList>
            </Menu>
          </HStack>
          <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
          <SignUpModal isOpen={isSignUpOpen} onClose={onSignUPClose} />
        </HStack>
      ) : (
        <HStack
          w={{ md: "70%", lg: "80%", xl: "90%", "2xl": "80%" }}
          justifyContent={"space-between"}
        >
          <HStack spacing={6}>
            <Link to="/">
              <Box mb={2}>
                <Logo />
                {/* <Image src={logoColor} alt="" w={32} /> */}
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
