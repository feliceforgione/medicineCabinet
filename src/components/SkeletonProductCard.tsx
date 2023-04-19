import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

function SkeletonProductCard() {
  return (
    <Card>
      <Skeleton height="250px" />
      <CardBody>
        <SkeletonText mt="4" noOfLines={3} spacing="4" skeletonHeight="2" />
      </CardBody>
    </Card>
  );
}

export default SkeletonProductCard;
