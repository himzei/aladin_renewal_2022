import { GridItem, Skeleton, SkeletonText } from "@chakra-ui/react";

export default function BookSkeleton() {
  return (
    <>
      <GridItem>
        <Skeleton rounded={"xl"} h="230px" mb={3} w="150px" />
        <SkeletonText mt="4" noOfLines={3} spacing={3} />
      </GridItem>
      <GridItem>
        <Skeleton rounded={"xl"} h="230px" mb={3} w="150px" />
        <SkeletonText mt="4" noOfLines={3} spacing={3} />
      </GridItem>
      <GridItem>
        <Skeleton rounded={"xl"} h="230px" mb={3} w="150px" />
        <SkeletonText mt="4" noOfLines={3} spacing={3} />
      </GridItem>
      <GridItem>
        <Skeleton rounded={"xl"} h="230px" mb={3} w="150px" />
        <SkeletonText mt="4" noOfLines={3} spacing={3} />
      </GridItem>
      <GridItem>
        <Skeleton rounded={"xl"} h="230px" mb={3} w="150px" />
        <SkeletonText mt="4" noOfLines={3} spacing={3} />
      </GridItem>
      <GridItem>
        <Skeleton rounded={"xl"} h="230px" mb={3} w="150px" />
        <SkeletonText mt="4" noOfLines={3} spacing={3} />
      </GridItem>
      <GridItem>
        <Skeleton rounded={"xl"} h="230px" mb={3} w="150px" />
        <SkeletonText mt="4" noOfLines={3} spacing={3} />
      </GridItem>
    </>
  );
}
