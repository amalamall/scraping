import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  List,
  ListItem,
  Spinner,
  Grid,
  useMediaQuery,
} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";
import Products from "components/Products";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/slices/productsSlice";

const SERVER_URL = process.env.SERVER_URL

export default function ProductById() {
  const [isTablet] = useMediaQuery("(min-width: 768px)");
  const [isDesktop] = useMediaQuery("(min-width: 1024px)");
  const [data, setData] = useState(null);
  const { query } = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, [query.id]);

  async function fetchData() {
    if(query.id) {
      const res = await fetch(`${SERVER_URL}/products?id=${query.id}`);
      const data = (await res.json()).products;
      console.log(data);
      setData(data);
    }
  }

  const handleAddProduct = () => {
    const newProduct = data;
    dispatch(addProduct(newProduct));
  };

  let gridTemplateColumns = "1fr";

  if (isTablet) {
    gridTemplateColumns = "1fr 1fr";
  }

  if (isDesktop) {
    gridTemplateColumns = "1fr 1fr";
  }

  return (

        <Container
          maxW={"7xl"}
          marginTop={"8rem"}
          className="bootstrap-wrapper"
        >
          <SimpleGrid templateColumns={gridTemplateColumns}>
            {(data && (
              <>
                <Grid
                  display={{ base: "flex", md: "grid" }}
                  flexDir={{ base: "column-reverse", md: "row" }}
                  gridTemplateColumns="1fr 5fr"
                  gap="2rem"
                  alignContent="flex-start"
                  alignItems="flex-center"
                >
                  <Flex justifyContent={"center"} padding={"2rem"}>
                    <Box
                      padding="0.3rem"
                      border="1px solid var(--primaryColor)"
                      borderRightColor="transparent"
                      cursor="pointer"
                      transition="0.3s"
                      width={"40vmin"}
                    >
                      <Image
                        rounded={"md"}
                        alt={"product image"}
                        src={data.image}
                        objectFit={"cover"}
                        width={"100%"}
                      />
                    </Box>
                  </Flex>
                </Grid>
                <Stack spacing={{ base: 6, md: 10 }}>
                  <Box as={"header"}>
                    <Heading
                      lineHeight={1.1}
                      fontWeight={600}
                      fontSize={{ base: "xl", sm: "3xl", lg: "4xl" }}
                    >
                      {data.name}
                    </Heading>
                    <Text fontWeight={400} fontSize={"2xl"}>
                      {data.price}
                    </Text>
                  </Box>

                  <Stack
                    spacing={{ base: 4, sm: 6 }}
                    direction={"column"}
                    divider={<StackDivider borderColor={"gray"} />}
                  >
                    <Box>
                      <List spacing={2}>
                        <ListItem>
                          <Text
                            color={"gray"}
                            fontSize={"xl"}
                            fontWeight={"400"}
                          >
                            <Text
                              as={"span"}
                              fontWeight={"bold"}
                              textColor={"pink.600"}
                            >
                              {data.brand}
                            </Text>{" "}
                          </Text>
                        </ListItem>
                        <ListItem>
                          <Text fontSize={"5xs"}>
                            <Text
                              as={"span"}
                              fontWeight={"bold"}
                              textColor={"pink.700"}
                            >
                              Availability:
                            </Text>{" "}
                            {data.availability}
                          </Text>
                        </ListItem>
                      </List>
                    </Box>

                    <Box>
                      <Text
                        fontSize={{ base: "16px", lg: "18px" }}
                        fontWeight={"500"}
                        textTransform={"uppercase"}
                        mb={"4"}
                      >
                        Product Details
                      </Text>

                      <List spacing={2}>
                        {
                          data.specifications.map(spec => {
                            return <ListItem key={spec._id}>
                            <Text as={"span"} fontWeight={"bold"}>
                             {spec.key}:
                            </Text>{" "}
                            {spec.value}
                          </ListItem>
                          })
                        }
               
                       
                      </List>
                    </Box>
                  </Stack>

                  <Button
                    w={"full"}
                    mt={8}
                    size={"lg"}
                    py={"7"}
                    onClick={() => handleAddProduct()}
                    colorScheme='pink' variant='outline'
                    disabled={!data} 
                  >
                    Add to cart
                  </Button>

                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent={"center"}
                  >
                    <MdLocalShipping size={'42px'}/>
                    <Text fontSize={'medium'} color={'pink.500'}>{data.delivery}</Text>
                  </Stack>
                </Stack>
              </>
            )) || <Spinner color="red.500" />}
          </SimpleGrid>
          <Products />
        </Container>
  );
}
