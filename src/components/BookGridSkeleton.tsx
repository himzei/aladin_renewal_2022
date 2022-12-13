import { Grid, GridItem, Skeleton } from "@chakra-ui/react";

interface IProp {
  numContents: number;
}

export default function BookGridSkeleton({ numContents }: IProp) {
  return (
    <>
      <Grid templateColumns={"repeat(6, 1fr)"} w="full" gap={4}>
        {Array(numContents)
          .fill(undefined)
          .map((_, i) => (
            <GridItem key={i}>
              <Skeleton rounded={"sm"} h="320px" mb={3} w="175px" />
            </GridItem>
          ))}
      </Grid>
    </>
  );
}
