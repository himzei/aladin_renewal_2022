import { Box, Button, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import { AiFillGoogleSquare } from "react-icons/ai";
import { SiKakaotalk, SiNaver, SiGithub } from "react-icons/si";

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
      <VStack>
        <Button as="a" href={finalUrl} w="100%" leftIcon={<SiGithub />}>
          Github {btnText}
        </Button>
        <Button
          as="a"
          w="100%"
          leftIcon={<SiKakaotalk />}
          colorScheme={"yellow"}
          variant="outline"
        >
          카카오로 {btnText}
        </Button>
        <Button
          w="100%"
          variant={"outline"}
          leftIcon={<SiNaver />}
          colorScheme={"green"}
        >
          네이버로 {btnText}
        </Button>
        <Button
          w="100%"
          leftIcon={<AiFillGoogleSquare size={22} />}
          colorScheme={"blue"}
          variant="outline"
        >
          Google {btnText}
        </Button>
      </VStack>
    </Box>
  );
}
