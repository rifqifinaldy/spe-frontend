import { Flex } from "@chakra-ui/react";
import React from "react";
import AwesomeTerminal from "../../component/awesome-terminal";

const SectionOne: React.FC = () => {
  return (
    <Flex
      bgGradient="linear(to-r, #00DBDE, #FC00FF)"
      h="100vh"
      p={{ base: "0", sm: "80px" }}
      pb={{base: "50%", sm:"10px"}}
      position="relative"
    >
      <AwesomeTerminal />
    </Flex>
  );
};

export default SectionOne;
