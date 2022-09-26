import { Badge, Box, Flex, Spacer, Stack } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <>
      <Flex justifyContent={"right"} m={"0px 20px"}>
        <Stack direction="row">
          <Badge>cart</Badge>
          <Badge colorScheme="green">4</Badge>
        </Stack>
      </Flex>
    </>
  );
};

export default Navbar;
