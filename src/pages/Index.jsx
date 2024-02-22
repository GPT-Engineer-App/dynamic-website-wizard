import React from "react";
import { ChakraProvider, Box, Grid, theme, Heading, Text, Button, Image, Link, Stack, Flex, useColorModeValue, VStack, FormControl, FormLabel, Input, HStack } from "@chakra-ui/react";
import { FaUserCircle, FaShoppingCart, FaSearch, FaUserCog } from "react-icons/fa";

const Index = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            <Flex w="full" p={5} alignItems="center" justifyContent="space-between">
              <Heading>My Website</Heading>
              <HStack as="nav" spacing={4}>
                <Link isExternal href="#">
                  Home
                </Link>
                <Link isExternal href="#">
                  About
                </Link>
                <Link isExternal href="#">
                  Shop <FaShoppingCart />
                </Link>
                <Link isExternal href="#">
                  Admin <FaUserCog />
                </Link>
              </HStack>
            </Flex>

            <Image size="xl" src="https://images.unsplash.com/photo-1553895501-af9e282e7fc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxob21lcGFnZSUyMGJhbm5lcnxlbnwwfHx8fDE3MDg2MzEzNjh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Homepage Banner" />

            <Heading>Welcome to My Website</Heading>
            <Text>This is a customizable homepage with dynamic content.</Text>

            <Stack spacing={4} direction="row" align="center">
              <Button leftIcon={<FaUserCircle />} colorScheme="teal" variant="solid">
                Login
              </Button>
              <Button rightIcon={<FaSearch />} colorScheme="gray" variant="outline">
                Search
              </Button>
            </Stack>

            <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
              <Heading as="h3" size="lg" mb={4}>
                Contact Us
              </Heading>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" placeholder="Enter your email" />
              </FormControl>
              <FormControl id="message" mt={4} isRequired>
                <FormLabel>Message</FormLabel>
                <Input type="text" placeholder="Enter your message" />
              </FormControl>
              <Button width="full" mt={4} type="submit">
                Send Message
              </Button>
            </Box>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
