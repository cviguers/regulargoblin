import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importing FontAwesome Icons
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function contact() {
  return (
    <div>
      <p className="header">contact</p>
      <Container maxW="full" mt={0} centerContent overflow="hidden">
        <Flex>
          <Box>
            <Box>
              <Wrap spacing={{ base: 10, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Button
                          size="md"
                          variant="ghost"
                          leftIcon={<MdPhone size="20px" />}
                        >
                          732-272-8289
                        </Button>
                        <Button
                          size="md"
                          variant="ghost"
                          leftIcon={<MdEmail size="20px" />}
                        >
                          cviguers@gmail.com
                        </Button>
                        <Button
                          size="md"
                          variant="ghost"
                          leftIcon={<MdLocationOn size="20px" />}
                        >
                          Charlotte, North Carolina
                        </Button>
                      </VStack>
                    </Box>
                    <div className="socialIcons">
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignContent="center"
                    >
                      <a href="https://github.com/cviguers">
                        <FontAwesomeIcon
                          icon={faGithub}
                          className="icon"
                          style={{ fontSize: "34px"}}
                        />
                      </a>
                      <a href="https://www.linkedin.com/in/caroline-viguers-1568531ba/">
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          style={{ fontSize: "34px" }}
                          className="px-3 icon"
                        />
                      </a>
                    </HStack>
                    </div>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box borderRadius="lg">
                    <Box m={8}>
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>your name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: "gray.300",
                            }}
                            placeholder="message"
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            variant="solid"
                            bg="#0D74FF"
                            color="white"
                            _hover={{}}
                          >
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    </div>
  );
}
