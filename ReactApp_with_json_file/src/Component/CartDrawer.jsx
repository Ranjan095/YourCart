/** @format */

import {
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  Flex,
  Image,
  Heading,
  Text,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure,
  transition,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CART_QTY_MINUS,
  CART_QTY_PLUS,
  REMOVE_FROM_CART,
} from "../Redux/Cart/cartType";

const CartDrawer = ({ isOpenDro, onClose, btnRef }) => {
  let { cart } = useSelector((store) => store.cartReducer);

  let total_sp = 0;
  let total_mrp = 0;

  cart.map((pro) => {
    total_sp += pro.sp * pro.qty;
    total_mrp += pro.mrp * pro.qty;
  });
  let totalDiscount = total_mrp - total_sp;
  return (
    <Box>
      <Drawer
        size={"md"}
        isOpen={isOpenDro}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{`Your Cart : ( ${cart.length} )`}</DrawerHeader>

          <DrawerBody>
            {cart?.map((ele) => (
              <CartList {...ele} />
            ))}
          </DrawerBody>
          <Box marginLeft={"7"}>
            <Flex gap={"10px"}>
              <Heading size={"md"}>
                Total Amount :{" "}
                {total_sp.toLocaleString("en-IN", {
                  maximumFractionDigits: 2,
                  style: "currency",
                  currency: "INR",
                })}
              </Heading>
              <Heading
                color={"grey"}
                textDecoration={"line-through"}
                size={"md"}
              >
                {total_mrp.toLocaleString("en-IN", {
                  maximumFractionDigits: 2,
                  style: "currency",
                  currency: "INR",
                })}
              </Heading>
            </Flex>
            <Text
              color={"green"}
              fontWeight={"bold"}
            >{`You will save ${totalDiscount.toLocaleString("en-IN", {
              maximumFractionDigits: 2,
              style: "currency",
              currency: "INR",
            })} on this order `}</Text>
          </Box>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">PLACE ORDER</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default CartDrawer;

let CartList = ({ image, title, sp, mrp, offer, id, qty }) => {
  let dispatch = useDispatch();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  let handleRemove = () => {
    dispatch({ type: REMOVE_FROM_CART, payload: id });
    onClose();
  };

  return (
    <Box
      borderRadius={"15px"}
      boxShadow="rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"
      marginBottom={"7px"}
      padding={"7px"}
      _hover={{
        transition: ".5s",
        transform: "scale(1.06)",
        backgroundColor: " #f5d0ce",
      }}
    >
      <Flex gap={"10px"}>
        <Image width={"70px"} src={image} />
        <Box>
          <Heading marginBottom={"7px"} size={"sm"}>
            {title}
          </Heading>
          <Flex marginBottom={"7px"} gap={"5px"} textAlign={"center"}>
            <Button
              onClick={() => dispatch({ type: CART_QTY_MINUS, payload: id })}
              size={"xs"}
              isDisabled={qty == 1}
            >
              -
            </Button>
            <Text>{qty}</Text>
            <Button
              onClick={() => dispatch({ type: CART_QTY_PLUS, payload: id })}
              size={"xs"}
              isDisabled={qty == 5}
            >
              +
            </Button>
            <Heading size={"sm"}>
              {sp.toLocaleString("en-IN", {
                maximumFractionDigits: 2,
                style: "currency",
                currency: "INR",
              })}
            </Heading>
            <Heading textDecoration={"line-through"} color={"grey"} size={"sm"}>
              {mrp.toLocaleString("en-IN", {
                maximumFractionDigits: 2,
                style: "currency",
                currency: "INR",
              })}
            </Heading>
            <Heading color={"green"} size={"sm"}>
              {offer}% off
            </Heading>
          </Flex>
          <Button
            onClick={onOpen}
            // onClick={() => dispatch({ type: REMOVE_FROM_CART, payload: id })}
            _hover={{
              bg: "red.500",
              color: "white",
            }}
            bg={"grey"}
            padding={"3px"}
            size={"xm"}
          >
            Remove
          </Button>
        </Box>
      </Flex>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Remove from Cart
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to remove product?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                No
              </Button>
              <Button colorScheme="red" onClick={handleRemove} ml={3}>
                YES
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
};
