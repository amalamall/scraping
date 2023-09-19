import {
  Container,
  Box,
  SimpleGrid,
  Icon,
  Text,
  useColorModeValue,
  Stack,
  Flex,
  Center,
  Divider,
  Heading,
} from "@chakra-ui/react";
import {
  FcAssistant,
  FcDonate,
  FcInTransit,
  FcMoneyTransfer,
} from "react-icons/fc";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack display={"flex"} alignItems={"center"}>
      <Flex
        w={100}
        h={100}
        align={"center"}
        justify={"center"}
        color={"black"}
        rounded={"full"}
        bg={"whiteAlpha.500"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text
        fontSize={"lg"}
        color={"gray.800"}
        fontWeight={"bold"}
        textAlign="center"
      >
        {title}
      </Text>
      <Divider />
      <Text
        color={"gray.600"}
        textAlign="center"
        fontWeight={"bold"}
      >
        {text}
      </Text>
    </Stack>
  );
};

export default function Features() {
  return (
    <Box
      roundedLeft={{ base: 150, sm: 50 }}
      padding={8}
      bgGradient="linear(to-r, gray.100, whiteAlpha.200)"
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
              Features
            </Text>
          </Heading>
        </Stack>
        <SimpleGrid columns={{ base: 3, sm: 1, md: 3 }} spacing={10}>
          <Feature
            icon={<Icon as={FcInTransit} w={65} h={65} />}
            title={"Free Shipping"}
            text={"Enjoy shopping without the extra cost. Free shipping on all orders, straight to your doorstep."}
          />
          <Feature
            icon={<Icon as={FcDonate}w={65} h={65} />}
            title={"100% Money Back Granteed"}
            text={"Shop risk-free with our Money Back Guarantee. If you're not satisfied, we'll refund you – no questions asked."}
          />
          <Feature
            icon={<Icon as={FcAssistant}w={65} h={65} />}
            title={"24/7 Support"}
            text={"Need help? We're here 24/7. Reach out anytime for prompt and friendly customer support."}
            
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
}
