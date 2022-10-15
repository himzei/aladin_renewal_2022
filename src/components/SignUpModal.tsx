import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  VStack,
} from "@chakra-ui/react";
import { FaLock, FaUser, FaEnvelope } from "react-icons/fa";
import SocialLogin from "./SocialLogin";

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignUpModal({ isOpen, onClose }: SignUpModalProps) {
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>회원가입</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack>
            <InputGroup>
              <InputLeftElement
                children={
                  <Box color={"gray.400"}>
                    <FaUser />
                  </Box>
                }
              />
              <Input variant={"filled"} placeholder="아이디" />
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                children={
                  <Box color={"gray.400"}>
                    <FaEnvelope />
                  </Box>
                }
              />
              <Input variant={"filled"} placeholder="이메일" />
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                children={
                  <Box color={"gray.400"}>
                    <FaLock />
                  </Box>
                }
              />
              <Input variant={"filled"} placeholder="비밀번호" />
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                children={<Box color={"gray.400"}>{null}</Box>}
              />
              <Input variant={"filled"} placeholder="비밀번호 확인" />
            </InputGroup>
          </VStack>
          <Button mt={4} w="100%" colorScheme={"blue"}>
            회원가입
          </Button>
          <Box mb={2}>
            <SocialLogin btnText={"회원가입"} />
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
