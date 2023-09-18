import React from 'react';
import { Box, Heading, Text, Container } from '@chakra-ui/react';

const BlogDetail = ({ blog }) => {
  return (
    <Container
    maxW={"7xl"}
    marginTop={"8rem"}
    className="bootstrap-wrapper"
  >
    <Box p={4} borderWidth="1px" borderRadius="lg">
      <Heading fontSize="xl">{blog.title}</Heading>
      <Text mt={2}>{blog.content}</Text>
    </Box>
   </Container>
  );
};

export default BlogDetail;
