import {
  Box,
  Center,
  useColorModeValue,
  Text,
  Stack,
  Image,
  Button,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/slices/productsSlice";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ProductSimple({ name, price, image, _id }) {
  const dispatch = useDispatch();
  const handleAddProduct = () => {
    const newProduct = { name, price, image, _id };
    dispatch(addProduct(newProduct));
  };
  const router = useRouter();
  return (
    <Center py={6}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        h={600} // 
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
        overflow="hidden"
      >
        <Box
          rounded={"lg"}
          pos={"relative"}
          height={"230px"}>
          <Link href={`${router.basePath}/products/${_id}`} passHref>
            <Image
              rounded={"lg"}
              maxHeight={"150%"}
              width={200}
              objectFit={"fill"}
              src={image}
              position="absolute"
              top="80%"
              left="50%"
              transform="translate(-50%, -50%)"
            />
          </Link>
        </Box>
        <Stack pt={150} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {name}
          </Text>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              ${price}
            </Text>
            <Button fontSize={"sm"} onClick={() => handleAddProduct()} fontWeight={600} colorScheme='pink' variant='outline'>
              Add To Cart
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
