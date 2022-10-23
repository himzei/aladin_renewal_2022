import React from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  HStack,
  Image,
  Input,
  InputAddon,
  InputGroup,
  keyframes,
  Select,
  Stack,
  Text,
  Textarea,
  useDisclosure,
  usePrefersReducedMotion,
} from "@chakra-ui/react";

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

export default function Consult() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const prefersReducedMotion = usePrefersReducedMotion();
  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 15s linear`;
  return (
    <>
      <Box position="fixed" right={8} bottom={20} animation={animation}>
        <Image
          src="../../images/jini.png"
          w={40}
          onClick={onOpen}
          cursor="pointer"
          _active={{
            transform: "scale(0.6) translateY(20%)",
            transition: "0.3s",
          }}
        />
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
      <Drawer
        isOpen={isOpen}
        placement="right"
        // initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">상담신청하기</DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel htmlFor="username">이름</FormLabel>
                <Input
                  // ref={firstField}
                  id="username"
                  placeholder="Please enter user name"
                />
              </Box>

              <Box>
                <FormLabel htmlFor="mobile">이메일</FormLabel>
                <InputGroup>
                  <Input type="text" id="email" placeholder="email" />
                  <InputAddon>@</InputAddon>
                  <Input type="text" id="email" placeholder="email.com" />
                </InputGroup>
              </Box>

              <Box>
                <FormLabel htmlFor="owner">상담유형</FormLabel>
                <Select id="owner" defaultValue="segun">
                  <option value="segun">중고책 팔기</option>
                  <option value="kola">중고책 구매하기</option>
                  <option value="kola">대량 구매하기</option>
                  <option value="kola">기타</option>
                </Select>
              </Box>

              <Box>
                <FormLabel htmlFor="desc">내용</FormLabel>
                <Textarea id="desc" />
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">전송하기</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
