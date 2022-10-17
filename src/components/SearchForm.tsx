import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { bestSeller } from "../api";
import { IBookResult } from "../routes/Home";
import { useForm } from "react-hook-form";

export default function SearchForm() {
  const { handleSubmit, register } = useForm();
  const { data, isLoading } = useQuery<IBookResult[]>(["book"], bestSeller);
  console.log(data, isLoading);
  const onSubmit = () => {};
  return (
    <Box as="form" w="full" onSubmit={handleSubmit(onSubmit)}>
      <InputGroup size="lg">
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
            type="submit"
            px={10}
            size="lg"
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
