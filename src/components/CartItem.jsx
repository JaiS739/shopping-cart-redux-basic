import React from "react";
import {
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
} from "@chakra-ui/react";
const CartItem = ({ img, title, price, amount }) => {
  return (
    <>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        <GridItem w="100%" m={"10px"} border={"1px solid black"}>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={img} alt={img} height={"250px"} />

            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  New
                </Badge>
              </Box>

              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={1}
              >
                {title}
              </Box>

              <Box>
                {price}
                <Box as="span" color="gray.600" fontSize="sm">
                  INR
                </Box>
              </Box>

              <Box display="flex" mt="2" alignItems="center"></Box>
              <Flex gap={2} justifyContent={"center"} m={"0.5rem"}>
                <Button colorScheme="red">-</Button>
                <Heading>{amount}</Heading>
                <Button colorScheme="red">+</Button>
              </Flex>
              <Button colorScheme="blue">Add To Cart</Button>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default CartItem;
