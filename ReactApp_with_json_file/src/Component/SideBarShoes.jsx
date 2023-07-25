/** @format */

import React, { ReactNode, useEffect, useState } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Heading,
  Button,
  RadioGroup,
  Radio,
  Stack,
  StackDivider,
  Checkbox,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText } from "react";
import { useSearchParams } from "react-router-dom";

const LinkItems = [
  { name: "Home", icon: FiHome },
  { name: "Trending", icon: FiTrendingUp },
  { name: "Explore", icon: FiCompass },
  { name: "Favourites", icon: FiStar },
  { name: "Settings", icon: FiSettings },
];

const SideBarShoes = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh">
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size={"xs"}
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
};

const SidebarContent = ({ onClose, ...rest }) => {
  let [searchParams, setSearchparams] = useSearchParams();

  let initialOrder = searchParams.get("order");
  let initialBrand = searchParams.getAll("brand");
  let initialCategory = searchParams.getAll("category");
  let initialColor = searchParams.getAll("color");

  let [order, setOrder] = useState(initialOrder || "");
  let [brand, setBrand] = useState(initialBrand || []);
  let [category, setCategory] = useState(initialCategory || []);
  let [color, setColor] = useState(initialColor || []);

  // console.log(searchParams);

  //filter by Brand
  let handleBrand = (val) => {
    let newBrand = brand;
    if (newBrand.includes(val)) {
      newBrand = newBrand.filter((ele) => ele !== val);
      setBrand(newBrand);
    } else {
      setBrand([...brand, val]);
    }
  };

  //filtet by Category
  let handleCategory = (val) => {
    let newCategory = category;
    if (newCategory.includes(val)) {
      newCategory = newCategory.filter((ele) => ele !== val);
      setCategory(newCategory);
    } else {
      setCategory([...category, val]);
    }
  };
  //filter by color
  let handleColor = (val) => {
    let newColor = color;
    if (newColor.includes(val)) {
      newColor = newColor.filter((ele) => ele !== val);
      setColor(newColor);
    } else {
      setColor([...color, val]);
    }
  };

  useEffect(() => {
    let params = { brand, category, color };
    order && (params.order = order);
    setSearchparams(params);
  }, [brand, category, color, order]);

  return (
    <Box
      id="sidibar-container"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Stack
        divider={
          <StackDivider
            borderColor={useColorModeValue("gray.200", "gray.600")}
          />
        }
      >
        <Box marginLeft={"10px"}>
          <Heading as="h4" size="md">
            Sort by Price
          </Heading>
          <Box>
            <RadioGroup>
              <Stack>
                <Radio
                  onChange={() => setOrder("asc")}
                  isChecked={order === "asc"}
                >
                  Low to High
                </Radio>
                <Radio
                  onChange={() => setOrder("desc")}
                  isChecked={order === "desc"}
                >
                  High to Low
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>
        </Box>
        <Box marginLeft={"10px"}>
          <Heading size={"md"}>Filter By :-</Heading>
          <Text fontWeight={"bold"}>Brand</Text>
          <Stack direction={"column"}>
            <Checkbox
              isChecked={brand.includes("puma")}
              onChange={() => handleBrand("puma")}
            >
              PUMA
            </Checkbox>
            <Checkbox
              isChecked={brand.includes("campus")}
              onChange={() => handleBrand("campus")}
            >
              CAMPUS
            </Checkbox>
            <Checkbox
              isChecked={brand.includes("action")}
              onChange={() => handleBrand("action")}
            >
              ACTION
            </Checkbox>
            <Checkbox
              isChecked={brand.includes("adidas")}
              onChange={() => handleBrand("adidas")}
            >
              ADIDAS
            </Checkbox>
          </Stack>
          <Text fontWeight={"bold"}>Category</Text>
          <Stack direction={"column"}>
            <Checkbox
              isChecked={category.includes("kids")}
              onChange={() => handleCategory("kids")}
            >
              KIDS
            </Checkbox>
            <Checkbox
              isChecked={category.includes("men")}
              onChange={() => handleCategory("men")}
            >
              MEN
            </Checkbox>
            <Checkbox
              isChecked={category.includes("women")}
              onChange={() => handleCategory("women")}
            >
              WOMEN
            </Checkbox>
          </Stack>
          <Text fontWeight={"bold"}>color</Text>
          <Stack direction={"column"}>
            <Checkbox
              isChecked={color.includes("red")}
              onChange={() => handleColor("red")}
            >
              red
            </Checkbox>
            <Checkbox
              isChecked={color.includes("black")}
              onChange={() => handleColor("black")}
            >
              black
            </Checkbox>
            <Checkbox
              isChecked={color.includes("grey")}
              onChange={() => handleColor("grey")}
            >
              grey
            </Checkbox>
            <Checkbox
              isChecked={color.includes("white")}
              onChange={() => handleColor("white")}
            >
              white
            </Checkbox>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      {/* <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
            Logo
          </Text> */}
    </Flex>
  );
};

export default SideBarShoes;
