/** @format */
import "./SingleShoesPage.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  GET_SINGLE_SHOES_ERROR,
  GET_SINGLE_SHOES_REQUEST,
  GET_SINGLE_SHOES_SUCCESS,
} from "../Redux/Shoes/actionType";

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  Center,
  HStack,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { initializeUseSelector } from "react-redux/es/hooks/useSelector";
import { baseURL } from "../utils/assets";
import { ADD_TO_CART } from "../Redux/Cart/cartType";

let token = localStorage.getItem("token");
const SingleShoesPage = () => {
  let [shoes, setShoes] = useState({});

  let dispatch = useDispatch();
  let params = useParams();
  let { id } = params;

  let getSingleShoes = () => {
    dispatch({ type: GET_SINGLE_SHOES_REQUEST });
    axios
      .get(`${baseURL}/shoes/${id}`, {
        headers: {
          Authorization: `Bearear ${token}`,
        },
      })
      .then((res) => {
        dispatch({ type: GET_SINGLE_SHOES_SUCCESS });
        let data = res.data;
        data && setShoes(res.data);
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: GET_SINGLE_SHOES_ERROR });
      });
  };
  useEffect(() => {
    getSingleShoes();
  }, []);
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            // src={
            //   "https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080"
            // }
            src={shoes?.image}
            // fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading className="brand" as="h5" size="md">
              {shoes?.brand}
            </Heading>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "4xl" }}
            >
              {shoes?.title}
            </Heading>
            <Box className="price_box">
              <Flex gap={7}>
                <Heading as="h3" size="md">
                  {shoes?.sp?.toLocaleString("en-IN", {
                    maximumFractionDigits: 2,
                    style: "currency",
                    currency: "INR",
                  })}
                </Heading>
                <Heading className="price" as="h3" size="md">
                  {shoes?.mrp?.toLocaleString("en-IN", {
                    maximumFractionDigits: 2,
                    style: "currency",
                    currency: "INR",
                  })}
                </Heading>
                <Heading className="offer" as="h3" size="md">
                  {`${shoes?.offer}% off`}
                </Heading>
              </Flex>
            </Box>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <div style={{ display: "flex" }}>
              <h3 className="rating">
                {`${shoes?.rating}`}
                <AiFillStar />
              </h3>
            </div>
            <Box textTransform={"uppercase"}>
              <Text>{shoes?.discription}</Text>
            </Box>
            {/* <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Features
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Chronograph</ListItem>
                  <ListItem>Master Chronometer Certified</ListItem>{" "}
                  <ListItem>Tachymeter</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Anti‑magnetic</ListItem>
                  <ListItem>Chronometer</ListItem>
                  <ListItem>Small seconds</ListItem>
                </List>
              </SimpleGrid>
            </Box> */}
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Color:
                  </Text>{" "}
                  {shoes?.color}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Category:
                  </Text>{" "}
                  {shoes?.category}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Rating:
                  </Text>{" "}
                  {shoes?.rating}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Brand:
                  </Text>{" "}
                  {shoes?.brand}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Size:
                  </Text>{" "}
                  {/* {shoes && SIZE(shoes.size)} */}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Offer:
                  </Text>{" "}
                  {`${shoes?.offer}%`}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Discription:
                  </Text>{" "}
                  {shoes?.discription}
                </ListItem>
              </List>
            </Box>
          </Stack>

          <HStack>
            <Button
              onClick={() =>
                dispatch({ type: ADD_TO_CART, payload: { ...shoes, qty: 1 } })
              }
              rounded={"none"}
              w={"full"}
              mt={8}
              size={"lg"}
              py={"7"}
              bg={"orange"}
              color={useColorModeValue("white", "gray.900")}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
            >
              Add to cart
            </Button>
            <Button
              rounded={"none"}
              w={"full"}
              mt={8}
              size={"lg"}
              py={"7"}
              bg={useColorModeValue("orange.700", "gray.20")}
              color={useColorModeValue("white", "gray.900")}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
            >
              Buy now
            </Button>
          </HStack>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default SingleShoesPage;
