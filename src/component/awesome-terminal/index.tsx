import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import TimeStamp from "../timestamp";

const AwesomeTerminal: React.FC = () => {
  return (
    <Flex
      background="#000000"
      color="#00FF00"
      flexDir="column"
      justifyContent={{ base: "flex-end", sm: "center" }}
      alignItems="center"
      p="20px"
      position={{ base: "static", sm: "absolute" }}
      w="full"
      h="100%"
      left="0"
      top="-60%"
      margin={{ base: "auto", sm: "none" }}
      transform={{ base: "none", sm: "rotate(-30deg)" }}
      border={{ base: "none", sm: "20px solid #fff" }}
      rounded={{ base: "0", sm: "20px" }}
      borderBottom={{base: "20px solid #fff"}}
    >
      <Box
        position={{ base: "static", sm: "absolute" }}
        bottom="30px"
        left="250px"
      >
        <Text fontSize="48px">&lt; SPE Frontend &gt;</Text>
      </Box>
      <Box
        position={{ base: "static", sm: "absolute" }}
        left="-70px"
        transform={{ base: "none", sm: "rotate(90deg)" }}
      >
        <Text fontSize="14px">
          <TimeStamp />
        </Text>
      </Box>
    </Flex>
  );
};

export default AwesomeTerminal;
