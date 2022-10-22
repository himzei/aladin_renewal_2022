import { Box, Divider, HStack, Text } from "@chakra-ui/react";
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
      <HStack
        h="50px"
        fontSize={"4xl"}
        justifyContent="center"
        alignItems={"center"}
        spacing={8}
      >
        <Box as="a" href={finalUrl}>
          <SiGithub />
        </Box>
        <Box as="a">
          <SiKakaotalk color="#fcdc12" />
        </Box>
        <Box>
          <SiNaver color="#20a534" />
        </Box>
        <Box>
          <BsGoogle />
        </Box>
      </HStack>
    </Box>
  );
}
