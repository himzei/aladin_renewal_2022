import { Box, Grid, GridItem, Skeleton, Stack, VStack } from "@chakra-ui/react";

export default function BookSkeletonDetail() {
  return (
    <>
      <VStack w="full" bg="gray.300" h="500px">
        <Box w="6xl" display={"flex"} alignItems="center" h="full">
          <Grid templateColumns={"2fr 9fr"} gap={8}>
            <GridItem>
              <Skeleton rounded={"10px"} w="280px" h="380px" />
            </GridItem>
            <GridItem>
              <Stack spacing={4} display="flex" mt={4}>
                <Skeleton w={80} height="20px" />
                <Skeleton height="30px" />
                <Skeleton w={80} height="20px" />
                <Skeleton w={80} height="20px" />
                <Skeleton w={"full"} height="20px" />
                <Skeleton w={"full"} height="20px" />
                <Skeleton w={80} height="20px" />
                <Skeleton w={"full"} height="20px" />
                <Skeleton w={"full"} height="20px" />
              </Stack>
            </GridItem>
          </Grid>
        </Box>
      </VStack>
    </>
  );
}
