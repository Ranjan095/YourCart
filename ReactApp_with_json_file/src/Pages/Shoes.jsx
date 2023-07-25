/** @format */

import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/Shoes/action";
import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Spinner,
  grid,
} from "@chakra-ui/react";
import ShoesList from "./ShoesList";
import "./shoes.css";
import SideBarShoes from "../Component/SideBarShoes";
import { useLocation, useSearchParams } from "react-router-dom";
const Shoes = () => {
  let location = useLocation();
  let [searchParams] = useSearchParams();
  let dispatch = useDispatch();

  let order = searchParams.get("order");

  let obj = {
    params: {
      _sort: order && "sp",
      _order: order,
      brand: searchParams.getAll("brand"),
      category: searchParams.getAll("category"),
      color: searchParams.getAll("color"),
    },
  };
  // console.log(location)
  useEffect(() => {
    dispatch(getData(obj));
  }, [location.search]);

  let { isLoading, isError, shoes } = useSelector(
    (store) => store.shoesReducer
  );

  // console.log(shoes)
  return isLoading ? (
    <Spinner
      className="loading"
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
  ) : (
    <Box id="shoes-page-container">
      <Flex>
        <Box>
          <SideBarShoes />
        </Box>
        <Box>
          <SimpleGrid
            className="shoesBox"
            columns={{ base: 2, sm: 2, md: 3, lg: 4 }}
          >
            {shoes.map((ele, i) => {
              return <ShoesList key={i + 1} shoes={ele} />;
            })}
          </SimpleGrid>
        </Box>
      </Flex>
    </Box>
  );
};

export default Shoes;
