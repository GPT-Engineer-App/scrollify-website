import { Container, Text, VStack, Box, Image } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";
import { IconButton } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={8}>
        <Box textAlign="center">
          <Text fontSize="4xl" fontWeight="bold">
            Welcome to Our Website
          </Text>
          <Text fontSize="lg">Scroll down to explore more</Text>
        </Box>

        <Box>
          <Image src="https://images.unsplash.com/photo-1606240724602-5b21f896eae8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBsYW5kc2NhcGV8ZW58MHx8fHwxNzE3MTY1NDUwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Beautiful Landscape" borderRadius="md" />
          <Text mt={4}>Experience the beauty of nature with our curated landscapes.</Text>
        </Box>

        <Box>
          <Image src="https://images.unsplash.com/photo-1493134799591-2c9eed26201a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5bGluZXxlbnwwfHx8fDE3MTcxNjU0NTB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="City Skyline" borderRadius="md" />
          <Text mt={4}>Discover the stunning cityscapes from around the world.</Text>
        </Box>

        <Box>
          <Image src="https://images.unsplash.com/photo-1537420327992-d6e192287183?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzcGFjZXxlbnwwfHx8fDE3MTcxNjU0NTB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Outer Space" borderRadius="md" />
          <Text mt={4}>Explore the mysteries of the universe and beyond.</Text>
        </Box>

        <Box textAlign="center">
          <Text fontSize="2xl" fontWeight="bold">
            Stay Connected
          </Text>
          <IconButton aria-label="Rocket" icon={<FaRocket />} size="lg" mt={4} />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
