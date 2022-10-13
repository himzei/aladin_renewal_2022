import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <VStack bg="gray,100" justifyContent={"center"} minH={"100vh"} spacing={2}>
      <Heading>Page Not Found</Heading>
      <Text>페이지를 찾을 수 없습니다.</Text>
      <Link to="/">
        <Button variant={"link"}>홈으로 돌아가기&rarr;</Button>
      </Link>
    </VStack>
  );
}
