// pages/index.js
import React from 'react';
import { Box, Container, Heading } from '@chakra-ui/react';
import BlogList from '../../components/BlogList';
import blogData from '../../blogData.json';

const Home = () => {
  return (
    <Container
    maxW={"7xl"}
    marginTop={"8rem"}
    className="bootstrap-wrapper"
    minHeight={"80vh"}
  >
      <Box mt={8}>
        <Heading as="h1" size="xl" color={"pink.600"} mb={4}>
          Blog Posts
        </Heading>
        <BlogList blogs={blogData} />
      </Box>
    </Container>
  );
};

export default Home;
