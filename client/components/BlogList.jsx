import React from 'react';
import Link from 'next/link';
import { Box, Heading, Text, Stack } from '@chakra-ui/react';

const BlogList = ({ blogs }) => {
  return (
    <Stack spacing={4}>
      {blogs.map((blog) => (
        <Link key={blog.id} href={`/blogs/${blog.id}`}>
          <Box
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            cursor="pointer"
            _hover={{ shadow: 'md' }}
          >
            <Heading fontSize="xl" color={"pink.800"}>{blog.title}</Heading>
            <Text mt={2}>{blog.content}</Text>
          </Box>
        </Link>
      ))}
    </Stack>
  );
};

export default BlogList;
