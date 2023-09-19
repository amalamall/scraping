"use client";
import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Heading,
  Text,
  Image,
  Stack,
  Button,
  Flex,
  Container,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

function SplitScreen(props) {
  const { image, text, description, title } = props;

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex maxW={"xxl"} p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} maxWidth={"md"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "10%", md: "10%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "pink.400",
                zIndex: -1,
              }}
            >
              {text}
            </Text>
            <br />{" "}
            <Text color={"pink.400"} as={"span"}>
              {title}
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            {description}
          </Text>
        </Stack>
        <Stack maxWidth={"md"}>
          <Image src={image} />
        </Stack>
      </Flex>
    </Stack>
  );
}

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);
  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });
  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: "IPhone 14 Pro Max",
      text: "The world’s fastest smartphone chip.",
      image: "/assets/images/iphone14.png",
    },
    {
      title: "IPhone 11 Pro Max",
      text: "A huge leap in battery life",
      image: "/assets/images/iphone1.png",
    },
    {
      title: "IPhone 13",
      text: " Our most advanced dual‑camera system ever.",
      image: "/assets/images/iphone_hands.png",
    },
  ];

  return (
    <Box
      bgGradient="linear(to-l, whiteAlpha.500, whiteAlpha.200)"
      roundedRight={{ base: 150, sm: 50 }}
      marginTop={150}
    >
      <Box
        position={"relative"}
        height={"600px"}
        width={"full"}
        overflow={"hidden"}
        roundedRight={{ base: 150, sm: 50 }}
      >
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <BiLeftArrowAlt size="40px" />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <BiRightArrowAlt size="40px" />
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((card, index) => (
            <Box size="container.lg" height="600px" zIndex={2} key={index}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                height={500}
                width={"100%"}
              >
                <SplitScreen
                  image={card.image}
                  title={card.title}
                  text={card.text}
                />
              </Box>
              <Box
                height={"6xl"}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundImage={`url(${card.image})`}
                filter={"blur(150px)"}
                zIndex={-1}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}
