import { Box, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import { SiKakaotalk, SiNaver, SiGithub } from "react-icons/si";
import { BsGoogle } from "react-icons/bs";

interface SocialLoginProps {
  btnText: string;
}

// interface IConfig {
//   clientId: string;
//   allow_signup: boolean;
//   scope: string;
// }

export default function SocialLogin({ btnText }: SocialLoginProps) {
  const clientId = "afeec0fffd0d2a881924";
  const allow_signup = false;
  const scope = "read:user user:email";
  const baseUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&allow_signup=${allow_signup}&scope=${scope}`;
  const finalUrl = `${baseUrl}`;

  return (
    <Box>
      <HStack my={4}>
        <Divider />
        <Text color={"gray.400"} fontSize={"xs"}>
          OR
        </Text>
        <Divider />
      </HStack>

      <VStack
        fontSize={"3xl"}
        justifyContent="center"
        alignItems={"center"}
        spacing={2}
        w="full"
      >
        <HStack w="full">
          <HStack
            spacing={3}
            as="a"
            href={finalUrl}
            w="50%"
            bg="black"
            px={2}
            py={1}
            color="white"
            rounded="md"
          >
            <SiGithub />
            <Text fontSize={"md"}>Github {btnText}</Text>
          </HStack>
          <HStack
            as="a"
            w="50%"
            bg="#FAE100"
            px={2}
            py={1}
            spacing={3}
            color="#371d1e"
            rounded="md"
          >
            <SiKakaotalk />
            <Text fontSize={"md"}>카카오톡 {btnText}</Text>
          </HStack>
        </HStack>
        <HStack w="full">
          <HStack
            spacing={3}
            as="a"
            href={finalUrl}
            w="50%"
            bg="#03CF5D"
            px={2}
            py={1}
            color="white"
            rounded="md"
          >
            <SiNaver />
            <Text fontSize={"md"}>네이버로 {btnText}</Text>
          </HStack>
          <HStack
            spacing={3}
            as="a"
            href={finalUrl}
            w="50%"
            bg="red"
            px={2}
            py={1}
            color="white"
            rounded="md"
          >
            <BsGoogle />
            <Text fontSize={"md"}>Google로 {btnText}</Text>
          </HStack>
        </HStack>
      </VStack>
    </Box>
  );
}
