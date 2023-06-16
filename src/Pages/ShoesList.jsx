/** @format */

import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import "./shoes.css";

const ShoesList = ({ shoes }) => {
  let [imageNum, setImageNum] = useState(0);

  let sp = (mrp, offer) => {
    let res = (mrp * (100 - offer)) / 100;
    return res;
  };

  let size = (arr) => {
    let bag = "";
    for (let i = 0; i < arr.length; i++) {
      if (i == arr.length - 1) {
        bag += arr[i];
      } else {
        bag += `${arr[i]},${" "}`;
      }
    }
    return bag;
  };

  return (
    <Box className="shoesListBox">
      <Image src={shoes.images[`${imageNum}`]} />

      <Heading as="h5" size="sm">
        {shoes.brand}
      </Heading>
      <Heading as="h5" size="sm">
        {shoes.title}
      </Heading>
      <Stack>
        <Flex gap={"10px"}>
          <Heading className="SP" as="h5" size="sm">
            ₹{sp(shoes.price, shoes.offer)}
          </Heading>
          <Heading className="MRP" as="h5" size="sm">
            ₹{shoes.price}
          </Heading>
          <Heading className="offer" as="h5" size="sm">
            {shoes.offer}% off
          </Heading>
        </Flex>
      </Stack>
      <Text className="size">Size {size(shoes.size)}</Text>
    </Box>
  );
};

export default ShoesList;
