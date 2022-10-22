import { useState } from "react";
import { Box, HStack, VStack } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

const boxVariants = {
  initial: (back: boolean) => ({
    x: back ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
  leaving: (back: boolean) => ({
    x: back ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 1,
    },
  }),
};

export default function Test() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const next = () => {
    setBack(false);
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };
  const prev = () => {
    setBack(true);
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  };
  const [click, setClick] = useState(false);
  const toggleClick = () => setClick((prev) => !prev);

  return (
    <>
      <VStack h="300px">
        <Box
          width={"100%"}
          as={AnimatePresence}
          custom={back}
          display={"flex"}
          justifyContent="flex-start"
        >
          <Box
            custom={back}
            key={visible}
            as={motion.div}
            variants={boxVariants}
            initial="initial"
            animate="visible"
            exit="leaving"
            width="300px"
            height="200px"
            background="teal"
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            color="white"
            fontSize={20}
          >
            {visible}
          </Box>
        </Box>
      </VStack>
      <HStack>
        <button onClick={next}>next</button>
        <button onClick={prev}>prev</button>
      </HStack>
      <Box
        onClick={toggleClick}
        w="5xl"
        h="500px"
        display={"flex"}
        justifyContent={click ? "center" : "flex-start"}
        alignItems={click ? "center" : "flex-start"}
        bg="white"
      >
        <Box
          as={motion.div}
          layout
          w="100px"
          h="100px"
          bg="teal"
          rounded="full"
        />
      </Box>
    </>
  );
}
