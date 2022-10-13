import { HStack, Image, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <HStack
      justifyContent={"space-between"}
      position="fixed"
      w="100%"
      bg={"blue.400"}
      top={0}
      color="white"
      h={8}
      px={10}
      py={10}
    >
      <HStack spacing={6}>
        <Image
          src="../../images/aladinlogo.png"
          alt=""
          w={20}
          transform={"translateY"}
        />
        <HStack spacing={6}>
          <Text>국내도서</Text>
          <Text>외국도서</Text>
          <Text>전자도서</Text>
          <Text>알라딘굿즈</Text>
          <Text>음반</Text>
        </HStack>
      </HStack>
      <HStack spacing={6}>
        <Text>로그인</Text>
        <Text>회원가입</Text>
        <Text>마이페이지</Text>
      </HStack>
    </HStack>
  );
}
