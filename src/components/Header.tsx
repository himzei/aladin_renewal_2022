import {
  Avatar,
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
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import { BsFillMoonFill } from "react-icons/bs";
import { FaSignInAlt } from "react-icons/fa";
import { MdOutlineRememberMe } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { motion } from "framer-motion";
import useUser from "../lib/useUser";
import { logOut } from "../api";

export default function Header() {
  const [scroll, setScroll] = useState(false);
  const { userLoading, user } = useUser();

  // const [scrollY, setScrollY] = useState(0);
  // const handleFollow = () => {
  //   setScrollY(window.pageYOffset);
  // };

  useEffect(() => {
    document.addEventListener("wheel", (event) => {
      if (event.deltaY < 0) {
        setScroll(true);
      } else if (event.deltaY > 0) {
        setScroll(false);
      }
    });
    // const watch = () => {
    //   window.addEventListener("scroll", handleFollow);
    // };
    // watch();
    // return () => {
    //   window.removeEventListener("scroll", handleFollow);
    // };
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
      transform={scroll ? "translateY(0px)" : "translateY(-60px)"}
      transition="0.4s"
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
                {!userLoading ? (
                  !user.username ? (
                    <>
                      <MenuItem onClick={onSignUpOpen}>회원가입</MenuItem>
                      <MenuItem onClick={onLoginOpen}>로그인</MenuItem>
                    </>
                  ) : (
                    <>
                      <MenuItem>{user.username} 님</MenuItem>
                      <MenuItem onClick={logOut}>로그아웃</MenuItem>
                    </>
                  )
                ) : null}
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

            {!userLoading ? (
              !user.username ? (
                <>
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
                </>
              ) : (
                <>
                  <HStack spacing={4}>
                    <Avatar w={10} h={10} />
                    <Text>{user.username} 님 반가워요</Text>
                    <Button onClick={logOut}>로그아웃</Button>
                  </HStack>
                </>
              )
            ) : null}
          </HStack>
          <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
          <SignUpModal isOpen={isSignUpOpen} onClose={onSignUPClose} />
        </HStack>
      )}
    </Stack>
  );
}
