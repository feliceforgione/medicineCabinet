import {
  Skeleton,
  HStack,
  SkeletonText,
  ListItem,
  List,
  Box,
  Stack,
} from "@chakra-ui/react";

function SkeletonCategoryList() {
  return (
    <Stack spacing={3}>
      <HStack>
        <Skeleton height="30px" width="30px" />
        <Skeleton height="20px" width="120px" />
      </HStack>
      <HStack>
        <Skeleton height="30px" width="30px" />
        <Skeleton height="20px" width="120px" />
      </HStack>
      <HStack>
        <Skeleton height="30px" width="30px" />
        <Skeleton height="20px" width="120px" />
      </HStack>
      <HStack>
        <Skeleton height="30px" width="30px" />
        <Skeleton height="20px" width="120px" />
      </HStack>
    </Stack>
  );
}

export default SkeletonCategoryList;
