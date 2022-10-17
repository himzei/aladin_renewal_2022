import { useColorModeValue } from "@chakra-ui/react";

export function ColorTextMode() {
  const textColor = useColorModeValue<string, string>("gray.700", "white");
  return textColor;
}
