import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import cartData from "../data";
import { getTotal } from "../redux/AppReducer/action";
import CartItem from "./CartItem";

const CartContainer = () => {
  const { cart, totalAmount } = useSelector((state) => state.AppReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [cart]);

  return (
    <>
      <Heading>Shopping Cart</Heading>
      {cartData.map((ele) => (
        <CartItem key={ele.id} {...ele} />
      ))}

      <Flex justifyContent={"center"}>
        <Text fontSize="2xl"> Total: {totalAmount}</Text>
      </Flex>

      <Button colorScheme="blue">Clear Cart</Button>
    </>
  );
};

export default CartContainer;
