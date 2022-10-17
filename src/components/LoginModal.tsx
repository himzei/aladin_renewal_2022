import { useForm } from "react-hook-form";
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
import { FaUser, FaLock } from "react-icons/fa";
import SocialLogin from "./SocialLogin";
import { useMutation } from "@tanstack/react-query";
import { usernameLogIn } from "../api";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export interface ILogInForm {
  username: string;
  password: string;
}
export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogInForm>();
  const mutation = useMutation(usernameLogIn, {
    onSuccess: () => {
      onClose();
      reset();
    },
  });
  const onSubmit = ({ username, password }: ILogInForm) => {
    mutation.mutate({ username, password });
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>로그인</ModalHeader>
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
                isInvalid={Boolean(errors.username?.message)}
                {...register("username", {
                  required: "아이디를 입력해 주세요!",
                })}
                variant={"filled"}
                placeholder="아이디"
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
                isInvalid={Boolean(errors.password?.message)}
                {...register("password", {
                  required: "비밀번호를 입력해 주세요!",
                })}
                variant={"filled"}
                placeholder="비밀번호"
              />
            </InputGroup>
          </VStack>
          <Button type="submit" mt={4} w="100%" colorScheme={"blue"}>
            로그인
          </Button>
          <Box mb={4}>
            <SocialLogin btnText={"로그인"} />
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
