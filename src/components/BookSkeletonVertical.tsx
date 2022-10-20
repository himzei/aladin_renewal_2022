import { Grid, GridItem, Skeleton, Stack, VStack } from "@chakra-ui/react";

export default function BookSkeletonVertical() {
  return (
    <>
      <VStack w="7xl" spacing={8}>
        <Grid templateColumns={"2fr 9fr"} gap={16}>
          <GridItem>
            <Skeleton rounded={"20px"} w="200px" h="280px" />
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
            </Stack>
          </GridItem>
        </Grid>
        <Grid templateColumns={"2fr 9fr"} gap={16}>
          <GridItem>
            <Skeleton rounded={"20px"} w="200px" h="280px" />
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
            </Stack>
          </GridItem>
        </Grid>
        <Grid templateColumns={"2fr 9fr"} gap={16}>
          <GridItem>
            <Skeleton rounded={"20px"} w="200px" h="280px" />
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
            </Stack>
          </GridItem>
        </Grid>
        <Grid templateColumns={"2fr 9fr"} gap={16}>
          <GridItem>
            <Skeleton rounded={"20px"} w="200px" h="280px" />
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
            </Stack>
          </GridItem>
        </Grid>
        <Grid templateColumns={"2fr 9fr"} gap={16}>
          <GridItem>
            <Skeleton rounded={"20px"} w="200px" h="280px" />
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
            </Stack>
          </GridItem>
        </Grid>
        <Grid templateColumns={"2fr 9fr"} gap={16}>
          <GridItem>
            <Skeleton rounded={"20px"} w="200px" h="280px" />
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
            </Stack>
          </GridItem>
        </Grid>
        <Grid templateColumns={"2fr 9fr"} gap={16}>
          <GridItem>
            <Skeleton rounded={"20px"} w="200px" h="280px" />
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
            </Stack>
          </GridItem>
        </Grid>
      </VStack>
    </>
  );
}
