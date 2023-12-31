import { ChakraProvider, Flex } from "@chakra-ui/react";
import "./App.css";
import SectionOne from "./sections/section-1";
import theme from "./theme";
import SectionTwo from "./sections/section-2";

function App() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Flex flexDir="column" w="full">
        <SectionOne />
        <SectionTwo />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
