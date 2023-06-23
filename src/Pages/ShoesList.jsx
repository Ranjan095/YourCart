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
import { Link } from "react-router-dom";
import { SIZE, SP } from "../Redux/Shoes/action";
import SideBarShoes from "../Component/SideBarShoes";

const ShoesList = ({ shoes }) => {
  let [imageNum, setImageNum] = useState(0);

  return (
   
    <Box className="shoesListBox">
      <Link to={`/singleShoesPage/${shoes.id}`}><Image src={shoes.images[`${imageNum}`]} /></Link>

      <Heading as="h5" size="sm">
        {shoes.brand}
      </Heading>
      <Heading as="h5" size="sm">
        {shoes.title}
      </Heading>
      <Stack>
        <Flex gap={"10px"}>
          <Heading className="SP" as="h5" size="sm">
            {/* ₹{SP(shoes.mrp, shoes.offer)} */}
            ₹{shoes.sp}
          </Heading>
          <Heading className="MRP" as="h5" size="sm">
            ₹{shoes.mrp}
          </Heading>
          <Heading className="offer" as="h5" size="sm">
            {shoes.offer}% off
          </Heading>
        </Flex>
      </Stack>
      <Text className="size">Size {SIZE(shoes.size)}</Text>
    </Box>
  );
};

export default ShoesList;
