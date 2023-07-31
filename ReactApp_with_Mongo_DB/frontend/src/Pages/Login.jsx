/** @format */

import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { userLogin } from "../Redux/Authantication/authAction";

const obj = {
  email: "",
  password: "",
};

export default function Login() {
  const [formData, setFormData] = useState(obj);
  let toast = useToast();
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let location = useLocation();




  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name,value)
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin(formData, toast));
    setFormData(obj);
  };




  let { isLoading, isError,token,isAuth } = useSelector(
    (store) => store.authReducer
  );
  if (isAuth) {
    navigate(location.state, { replace: true });
  }

  // console.log(isAuth,isLoading,isError,token)


  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <Heading fontSize={"2xl"}>Login to your account</Heading>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                required
                name="email"
                onChange={handleChange}
                value={formData.email}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                required
                name="password"
                onChange={handleChange}
                value={formData.password}
              />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.500"}>Forgot password?</Link>
              </Stack>
              <Link to="/register" color={"teal"}>
                Create a free account?{" "}
              </Link>
              <Button colorScheme={"blue"} variant={"solid"} type="submit">
                Login
              </Button>
            </Stack>
          </Stack>
        </form>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          }
        />
      </Flex>
    </Stack>
  );
}
