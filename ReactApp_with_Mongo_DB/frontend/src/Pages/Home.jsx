/** @format */

import { Box, Flex, Heading, Image, Stack } from "@chakra-ui/react";
import React from "react";
import home_shoes from "../utils/photos/home_shoes.jpg";
import offer from "../utils/photos/home_offer.png";
import "./home.css";

const Home = () => {
  return (
    <Box>
      <Stack id="home-main">
        <Image className="offerPic" src={offer} />
      </Stack>
      <Heading size={'md'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore laborum facilis, dolorum consequatur eius maxime beatae facere perferendis tempora, at excepturi vero numquam aliquid odit sapiente consectetur voluptas voluptate architecto!
      Illum sunt sequi ipsa corporis laboriosam amet libero eaque dicta. Voluptas corporis soluta aliquam nobis sed, commodi iste quibusdam quae explicabo. Deserunt unde quae doloremque numquam dolorum eaque tempore nesciunt.
      Reiciendis, perferendis suscipit nobis sunt sint illo ducimus quibusdam esse. Culpa mollitia ut distinctio perferendis velit sint deserunt aut nesciunt enim aliquam temporibus officia dolorum necessitatibus id provident, expedita magni.
      Sit tenetur enim officiis pariatur saepe, natus eos dolore facilis veritatis praesentium, commodi aperiam eum facere maiores sunt error odio. Velit iste perferendis iure cupiditate minus! At amet repellendus inventore?
      In, commodi facere soluta asperiores obcaecati eligendi eaque consequuntur perspiciatis, nam praesentium esse fuga alias nulla dignissimos! Nihil itaque molestiae quam quasi, facilis qui nisi repudiandae ullam culpa suscipit dolores.
      Voluptatibus molestias quam consequuntur atque soluta, quos minima dignissimos iusto? Accusamus atque ad aspernatur nesciunt voluptates necessitatibus nemo vero officia. Eius corrupti eum delectus eligendi officia odio distinctio laborum animi.
      Possimus incidunt velit explicabo, iure deleniti iusto est optio distinctio eius dolor quisquam ullam tempore animi, vero officia cupiditate nemo sunt molestias ut natus quod quo repudiandae, esse officiis. Dignissimos.
      Adipisci veritatis suscipit corporis itaque! Quis architecto accusantium doloribus at aperiam, quos dolore molestias provident totam unde itaque ducimus beatae quas perspiciatis modi eveniet consequatur animi officiis ipsum eius excepturi?
      Fugiat porro illum, voluptates deserunt in earum consectetur expedita eveniet consequuntur perspiciatis id nostrum aspernatur quidem quaerat, ex quis officia fuga? Odio neque maiores, nulla quo vero sequi voluptatibus a?
      Laudantium provident ad pariatur deserunt qui ipsum excepturi aliquid sint, doloribus rerum, consequatur magni possimus necessitatibus. Consequatur illum eius quidem eos? Sunt, modi? A ipsa sunt incidunt ab modi veniam.</Heading>
     
    </Box>
  );
};

export default Home;
