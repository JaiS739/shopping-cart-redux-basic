import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import cartData from "../data";
import CartItem from "./CartItem";

const CartContainer = () => {
  return (
    <>
      <Heading>Shopping Cart</Heading>
      {cartData.map((ele) => (
        <CartItem key={ele.id} {...ele} />
      ))}

      <Flex justifyContent={"center"}>
        <Text fontSize="2xl"> Total: 1200</Text>
      </Flex>

      <Button colorScheme="blue">Clear Cart</Button>
    </>
  );
};

export default CartContainer;
