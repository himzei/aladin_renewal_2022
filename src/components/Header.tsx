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
import { getMe, logOut } from "../api";
import { useQuery } from "@tanstack/react-query";

export default function Header() {
  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    document.addEventListener("wheel", (event) => {
      if (event.deltaY < 0) {
        setScroll(true);
      } else if (event.deltaY > 0) {
        setScroll(false);
      }
    });
  });

  const { data, refetch } = useQuery(["me"], getMe);
  console.log(data);

  useEffect(() => {
    refetch();
  });

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
      zIndex={999}
      w="100%"
      h="60px"
      color="#0d243f"
      fontWeight={"600"}
      fontSize={"sm"}
      alignItems={"center"}
      justifyContent={"center"}
      boxShadow="sm"
      backgroundColor={headerColor}
      position="fixed"
    >
      {isMobile ? (
        // ????????? ?????? ?????? ??????
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
                  <MenuItem>????????????</MenuItem>
                </Link>
                <Link to="/outbound">
                  <MenuItem>????????????</MenuItem>
                </Link>
                <Link to="/music">
                  <MenuItem>??????</MenuItem>
                </Link>
                <Link to="/dvd">
                  <MenuItem>DVD</MenuItem>
                </Link>
                <Link to="/used">
                  <MenuItem>?????????</MenuItem>
                </Link>
                <Link to="/ebook">
                  <MenuItem>?????????</MenuItem>
                </Link>
                <MenuDivider />
                {data?.loggedIn ? (
                  <>
                    <MenuItem onClick={onSignUpOpen}>????????????</MenuItem>
                    <MenuItem onClick={onLoginOpen}>?????????</MenuItem>
                  </>
                ) : (
                  <>
                    <MenuItem> {data?.user?.username}???</MenuItem>
                    <MenuItem onClick={logOut}>????????????</MenuItem>
                  </>
                )}
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
                  <Text>????????????</Text>
                </Button>
              </Link>
              <Link to="/outbound">
                <Button colorScheme="blue" variant="link">
                  <Text>????????????</Text>
                </Button>
              </Link>
              <Link to="/music">
                <Button colorScheme="blue" variant="link">
                  <Text>??????</Text>
                </Button>
              </Link>
              <Link to="/dvd">
                <Button colorScheme="blue" variant="link">
                  <Text>DVD</Text>
                </Button>
              </Link>
              <Link to="/used">
                <Button colorScheme="blue" variant="link">
                  <Text>?????????</Text>
                </Button>
              </Link>

              <Link to="/ebook">
                <Button colorScheme="blue" variant="link">
                  <Text>?????????</Text>
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

            {!data?.loggedIn ? (
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
                  ????????????
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
                  ?????????
                </Button>
              </>
            ) : (
              <>
                <HStack spacing={4}>
                  <Avatar w={10} h={10} />
                  <Text>{data?.user?.username} ??? ????????????</Text>

                  <Text fontSize="sm" cursor={"pointer"} onClick={logOut}>
                    ????????????
                  </Text>
                </HStack>
              </>
            )}
          </HStack>
          <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
          <SignUpModal isOpen={isSignUpOpen} onClose={onSignUPClose} />
        </HStack>
      )}
    </Stack>
  );
}
