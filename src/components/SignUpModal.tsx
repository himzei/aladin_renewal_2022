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
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { usernameSignUp } from "../api";

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface ISignUpForm {
  username: string;
  email: string;
  password: string;
  password2: string;
}

export default function SignUpModal({ isOpen, onClose }: SignUpModalProps) {
  const { handleSubmit, register, reset } = useForm<ISignUpForm>();
  const mutation = useMutation(usernameSignUp, {
    onSuccess: () => {
      onClose();
      reset();
    },
  });
  const onSubmit = ({ username, email, password, password2 }: ISignUpForm) => {
    mutation.mutate({ username, email, password, password2 });
  };
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>회원가입</ModalHeader>
        <ModalCloseButton />
        <ModalBody as="form" onSubmit={handleSubmit(onSubmit)}>
          <VStack>
            <InputGroup>
              <InputLeftElement
                children={
                  <Box color={"gray.400"}>
                    <FaUser />
                  </Box>
                }
              />
              <Input
                variant={"filled"}
                placeholder="아이디"
                {...register("username")}
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                children={
                  <Box color={"gray.400"}>
                    <FaEnvelope />
                  </Box>
                }
              />
              <Input
                variant={"filled"}
                placeholder="이메일"
                {...register("email")}
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                children={
                  <Box color={"gray.400"}>
                    <FaLock />
                  </Box>
                }
              />
              <Input
                type="password"
                variant={"filled"}
                placeholder="비밀번호"
                {...register("password")}
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                children={<Box color={"gray.400"}>{null}</Box>}
              />
              <Input
                type="password"
                variant={"filled"}
                placeholder="비밀번호 확인"
                {...register("password2")}
              />
            </InputGroup>
          </VStack>
          <Button type="submit" mt={4} w="100%" colorScheme={"blue"}>
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
