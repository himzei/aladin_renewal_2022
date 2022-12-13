import { Grid, GridItem, Skeleton, SkeletonText } from "@chakra-ui/react";

export default function BookSkeleton() {
  return (
    <>
      <Grid templateColumns={"repeat(7, 1fr)"} w="full" gap={4}>
        {Array(7)
          .fill(undefined)
          .map((_, i) => (
            <GridItem key={i}>
              <Skeleton rounded={"xl"} h="230px" mb={3} w="145px" />
              <SkeletonText mt="4" noOfLines={3} spacing={3} />
            </GridItem>
          ))}
      </Grid>
    </>
  );
}
