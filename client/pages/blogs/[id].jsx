import React from 'react';
import { useRouter } from 'next/router';
import { Container, Spinner } from '@chakra-ui/react';
import BlogDetail from '../../components/BlogDetail';
import blogData from '../../blogData.json';

const BlogDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const blog = blogData.find((blog) => blog.id === id);

  if (!blog) {
    return (
      <Container maxW="container.md" minHeight={"80vh"}>
        <Spinner />
      </Container>
    );
  }

  return (
    <Container maxW="container.md" minHeight={"80vh"} mt={8}>
      <BlogDetail blog={blog} />
    </Container>
  );
};

export default BlogDetailPage;
