import {
  Container,
  Flex,
  Box,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  Center,
  FormControl,
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
import { BsPerson } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importing FontAwesome Icons
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:cviguers@gmail.com?subject=Contact%20Form%20Submission&body=Name:%20${encodeURIComponent(
      name
    )}%0AEmail:%20${encodeURIComponent(
      email
    )}%0AMessage:%20${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };
  return (
    <div>
      <p className="header">contact</p>
      <Container maxW="full" centerContent overflow="hidden">
        <Flex>
          <Box>
            <Box>
              <Wrap spacing={{ base: 10, sm: 3, md: 5, lg: 20 }}>
                <Center axis="both">
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
                      <Center axis="both">
                        <div className="socialIcons">
                          <HStack spacing={5} px={5} alignContent="center">
                            <a href="https://github.com/cviguers">
                              <FontAwesomeIcon
                                icon={faGithub}
                                className="icon"
                                style={{ fontSize: "34px" }}
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
                      </Center>
                    </Box>
                  </WrapItem>
                </Center>
                <WrapItem>
                  <form onSubmit={handleSubmit}>
                    <Box borderRadius="lg">
                      <Box m={8}>
                        <VStack spacing={5}>
                          <FormControl id="name">
                            <InputGroup borderColor="#E0E1E7">
                              <InputLeftElement
                                pointerEvents="none"
                                children={<BsPerson color="gray.800" />}
                              />
                              <Input
                                type="text"
                                size="md"
                                placeholder="varo cigies"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                              />
                            </InputGroup>
                          </FormControl>
                          <FormControl id="email">
                            <InputGroup borderColor="#E0E1E7">
                              <InputLeftElement
                                pointerEvents="none"
                                children={<MdOutlineEmail color="gray.800" />}
                              />
                              <Input
                                type="email"
                                size="md"
                                placeholder="catluvr@aol.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </InputGroup>
                          </FormControl>
                          <FormControl id="message">
                            <Textarea
                              borderColor="gray.300"
                              placeholder="tippy typey"
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                            />
                          </FormControl>
                          <FormControl id="submit" float="right">
                            <Button type="submit" variant="solid">
                              send
                            </Button>
                          </FormControl>
                        </VStack>
                      </Box>
                    </Box>
                  </form>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    </div>
  );
}
