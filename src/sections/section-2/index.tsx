import React, { useEffect } from "react";
import useCars from "../../hooks/useCars";
import { Box, Flex, Heading, Image, Input, Text } from "@chakra-ui/react";
import { rupiah } from "../../helper/currency.helper";

const SectionTwo: React.FC = () => {
  const { getCarList, list, setList, getTotal } = useCars();

  const updateQuantity = (productCode: string, newQuantity: number) => {
    setList((prevProducts) =>
      prevProducts.map((item) =>
        item.product.code === productCode
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const handleQuantityChange = (
    productCode: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newQuantity = parseInt(event.target.value, 10) || 0;
    updateQuantity(productCode, newQuantity);
  };

  useEffect(() => {
    getCarList();
  }, [getCarList]);

  return (
    <Box w="full">
      <Flex
        background="#000000"
        color="#eeeeee"
        justifyContent="space-between"
        py="20px"
        px={{ base: "20px", sm: "80px" }}
      >
        <Box w="70%" textAlign="center">
          Product
        </Box>
        <Box w="15%" textAlign="center">
          Quantity
        </Box>
        <Box w="15%" textAlign="center">
          Subtotal
        </Box>
      </Flex>
      {list.map((list) => {
        return (
          <Flex
            key={list.product.code}
            background="#eeeeee"
            justifyContent="space-between"
            alignItems="center"
            py="20px"
            px={{ base: "20px", sm: "80px" }}
          >
            <Flex w="70%" alignItems="flex-start" gap="20px">
              <Box w="25%">
                <Image src={list.product.media_url} alt={list.product.name} />
              </Box>
              <Flex w="75%" flexDir="column" gap="5px">
                <Heading fontSize="28px" color="#2F6FED">
                  {list.product.code}
                </Heading>
                <Text fontSize="22px">{list.product.name}</Text>
                <Text fontSize="18px" opacity="0.75">
                  {rupiah.format(list.product.price)}
                </Text>
                <Text fontSize="14px" color="#E02D3C">
                  {list.product.stock} in Stock
                </Text>
              </Flex>
            </Flex>
            <Box w="15%" textAlign="center">
              <Input
                w="25%"
                type="number"
                border="1px solid black"
                value={list.quantity}
                onChange={(e) => handleQuantityChange(list.product.code, e)}
              />
            </Box>
            <Box w="15%" textAlign="center">
              <Text fontSize="18px" opacity="0.75">
                {rupiah.format(list.quantity * list.product.price)}
              </Text>
            </Box>
          </Flex>
        );
      })}
      <Flex
        background="#000000"
        color="#eeeeee"
        justifyContent="space-between"
        py="20px"
        px={{ base: "20px", sm: "80px" }}
      >
        <Box w="70%" textAlign="center" />
        <Box w="15%" textAlign="center">
          {getTotal().totalQuantity}
        </Box>
        {/* Something wrong here need to be fixed but im running out of time */}
        <Box w="15%" textAlign="center">
          {rupiah.format(getTotal().totalPrice)}
        </Box>
      </Flex>
    </Box>
  );
};

export default SectionTwo;
