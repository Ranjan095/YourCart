/** @format */

import { Box, Flex, Heading, Image, Stack } from "@chakra-ui/react";
import React from "react";
import home_shoes from "../utils/photos/home_shoes.jpg";
import offer from "../utils/photos/home_offer.png";

const Home = () => {
  return (
    <Box>
  
      <Stack
        style={{ padding: "100px 0px 350px 10px" }}
        backgroundImage={home_shoes}
      >
        <Flex>
          <Image src={offer} />
          {/* <Image/> */}
        </Flex>
      </Stack>
      
    </Box>
  );
};

export default Home;
