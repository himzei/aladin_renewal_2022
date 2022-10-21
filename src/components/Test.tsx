import { useState } from "react";
import { Box, HStack, VStack } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

const boxVariants = {
  initial: {
    x: 500,
    opacity: 0,
    scale: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
  leaving: {
    x: -500,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 1,
    },
  },
};

export default function Test() {
  const [visible, setVisible] = useState(1);
  const next = () => setVisible((prev) => (prev === 10 ? 10 : prev + 1));

  return (
    <VStack>
      <HStack>
        <AnimatePresence>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) =>
            i === visible ? (
              <Box
                key={i}
                width="300px"
                height="200px"
                background="teal"
                display={"flex"}
                justifyContent="center"
                alignItems={"center"}
                as={motion.div}
                variants={boxVariants}
                initial="initial"
                animate="visible"
                exit="leaving"
                color="white"
                fontSize={20}
              >
                {i}
              </Box>
            ) : null
          )}
        </AnimatePresence>
      </HStack>
      <button onClick={next}>next</button>
    </VStack>
  );
}
