import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
  Button,
  Icon,
  createIcon,
} from "@chakra-ui/react";

const Arrow = createIcon({
  displayName: "Arrow",
  viewBox: "0 0 72 24",
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
      fill="currentColor"
    />
  ),
});

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <section>
      <Stack
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"lg"}
        p={8}
        rounded={"xl"}
        align={"center"}
        pos={"relative"}
        _after={{
          content: `""`,
          w: 0,
          h: 0,
          borderLeft: "solid transparent",
          borderLeftWidth: 16,
          borderRight: "solid transparent",
          borderRightWidth: 16,
          borderTop: "solid",
          borderTopWidth: 16,
          borderTopColor: useColorModeValue("white", "gray.800"),
          pos: "absolute",
          bottom: "-16px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {children}
      </Stack>
    </section>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
      fontWeight={"bold"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Stack
        direction={"column"}
        spacing={3}
        align={"center"}
        alignSelf={"center"}
        position={"relative"}
      >
        <Box>
          <Avatar src={src} alt={name} mb={2} />
          <Icon
            as={Arrow}
            color={useColorModeValue("gray.800", "gray.300")}
            w={150}
            position={"absolute"}
            right={-101}
            top={"10px"}
          />
          <Text
            fontSize={"lg"}
            fontFamily={"Caveat"}
            position={"absolute"}
            right={"-180px"}
            top={"-15px"}
            transform={"rotate(10deg)"}
          >
            {title}
          </Text>
        </Box>
        <Text fontSize={"lg"} fontFamily={"Caveat"}>
        {name}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function Testimonials() {
  return (
    <Box 
    bgGradient="linear(to-l, purple.100, whiteAlpha.200)"
    roundedRight={{ base: 150, sm: 50 }}
    marginTop={50}
    >
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading fontSize="5xl" fontWeight="extrabold" textAlign={"center"}>
            <Text
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontWeight="extrabold"
              textAlign={"center"}
            >
              Our buyers around the world !
            </Text>
          </Heading>
        </Stack>
        <Stack
          direction={{ base: "column", lg: "column", xl: "row" }}
          spacing={5}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialText>
              "As a busy professional who relies on seamless communication, finding the right phone was crucial. This ecom phone website offered an extensive range, and I was able to pick the perfect phone that suits my work and lifestyle. The purchase was hassle-free, and the customer service promptly addressed my inquiries. I'm now equipped with a reliable device that helps me stay productive on the go."
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              }
              name={"Sarah M."}
              title={"Marketing Executive"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialText>
              "I run a small business, and efficiency is paramount. Navigating this phone website was a breeze, and I found a feature-packed phone that caters to my entrepreneurial needs. The transaction was secure, and the phone arrived promptly. It's proven to be an invaluable asset in managing my business operations effectively."
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              }
              name={"Emily L."}
              title={"Small Business Owner"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialText>
              "As a tech journalist, staying updated with the latest gadgets is essential. This ecom phone website not only provided an impressive array of phones to choose from but also ensured I had access to the newest models. The ordering process was seamless, and my chosen phone was delivered intact and on time. Now, I can review phones with firsthand experience, thanks to this reliable platform."
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              }
              name={"David R."}
              title={"Tech Journalist"}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
