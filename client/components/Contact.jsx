"use client";

import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  IconProps,
  Icon,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

const Blur = (props) => {
  return (
    <Icon
      width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};

export default function Contact() {
  return (
    <Box 
    position={"relative"}
    p={8} 
    bgGradient="linear(to-r, gray.100, whiteAlpha.200)"
    roundedLeft={{ base: 150, sm: 50 }}
    marginTop={50}
    >
      <Container
        as={SimpleGrid}
        maxW={"7xl"}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10}}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack justifyContent={"center"}
         alignItems={"center"}
        >
          <Image
            src={"/assets/images/iphone6.png"}
            maxWidth={400}
            maxHeight={500}
          />
        </Stack>
        <Stack
        justifyContent={"center"}
        alignItems={"flex-start"}
        >
          <Heading
            color={"gray.800"}
            lineHeight={1.1}
            fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            fontWeight="extrabold"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
          >
            Subscribe to our newsletter & stay up to date !
          </Heading>
          <Text color={"gray.600"} fontSize={{ base: "sm", sm: "md" }}>
            Subscribe to our newsletter and never miss out on the latest{" "}
            <Text
              as={"span"}
              bgGradient="linear(to-r, red.400,pink.400)"
              bgClip="text"
            >
              trends
            </Text>
            ,{" "}
            <Text
              as={"span"}
              bgGradient="linear(to-r, red.400,pink.400)"
              bgClip="text"
            >
              deals
            </Text>
            , and{" "}
            <Text
              as={"span"}
              bgGradient="linear(to-r, red.400,pink.400)"
              bgClip="text"
            >
              updates
            </Text>{" "}
            in the world of smartphones. Get exclusive insights into the newest
            models, tech innovations, and special offers delivered straight to
            your inbox. Whether you're a tech enthusiast or looking for the
            perfect upgrade, our newsletter is your key to staying up to date in
            the fast-paced realm of mobile technology. Join our community today
            and stay connected
            <Text
              as={"span"}
              bgGradient="linear(to-r, red.400,pink.400)"
              bgClip="text"
            >
              !
            </Text>
          </Text>
          <Stack
            spacing={4}
            direction={{ base: "column", md: "row" }}
            w={"full"}
          >
            <Input
              type={"text"}
              placeholder={"john@doe.net"}
              color={useColorModeValue("gray.800", "gray.200")}
              bg={useColorModeValue("gray.100", "gray.600")}
              border={0}
              _focus={{
                bg: useColorModeValue("gray.200", "gray.800"),
                outline: "none",
              }}
            />
            <Button
              // as={"a"}
              display={{ md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"purple.400"}
              // href={"#"}
              _hover={{
                bg: "purple.600",
              }}
            >
              Subscribe
            </Button>
          </Stack>
        </Stack>
      </Container>
      {/* <Blur
        zIndex={-1}
        position={"absolute"}
        top={10}
        left={{ sm:"0", md: "50%"}}
        style={{ filter: "blur(70px)" }}
      /> */}
    </Box>
  );
}
