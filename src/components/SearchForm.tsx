import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface ITerm {
  term: string;
}

interface IProp {
  isMenu?: boolean;
}

export default function SearchForm({ isMenu }: IProp) {
  const { handleSubmit, register } = useForm<ITerm>();
  let navigate = useNavigate();

  const onSubmit = ({ term }: ITerm) => {
    navigate(`/search/${term}`);
  };
  return (
    <Box as="form" w="full" onSubmit={handleSubmit(onSubmit)}>
      <InputGroup size={isMenu ? "md" : "lg"}>
        <Input
          color={"gray.600"}
          px="2rem"
          background={"white"}
          rounded="full"
          type={"text"}
          placeholder="제목, 글쓴이, 출판사를 검색해주세요"
          {...register("term", { required: true })}
        />
        <InputRightElement width="7rem">
          <Button
            color={"white"}
            type="submit"
            px={10}
            size={isMenu ? "md" : "lg"}
            bgGradient="linear(to-r, #0093e9 0%, #192699 99%)"
            rounded="3xl"
            _hover={{ bg: "blue.600" }}
          >
            Search
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
}
