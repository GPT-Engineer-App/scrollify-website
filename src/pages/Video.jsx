import { Box, Heading, Center } from "@chakra-ui/react";

function Video() {
  return (
    <Center>
      <Box>
        <Heading as="h1" size="xl" mb={4}>
          Video Page
        </Heading>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </Box>
    </Center>
  );
}

export default Video;
