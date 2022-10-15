import { HStack, Stack } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Stack
      w="100%"
      h="60px"
      color="#0d243f"
      fontWeight={"600"}
      fontSize={"sm"}
      alignItems={"center"}
      justifyContent={"center"}
      backgroundColor={"#33AFDF"}
    >
      <HStack w="7xl" justifyContent={"space-between"}></HStack>
    </Stack>
  );
}
