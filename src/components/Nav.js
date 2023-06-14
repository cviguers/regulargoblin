import React from "react";
import {
  Box,
  Flex,
  Link,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [scroll, setScroll] = React.useState(false);

  const changeScroll = () =>
    window.scrollY > 0 ? setScroll(true) : setScroll(false);

  React.useEffect(() => {
    window.addEventListener("scroll", changeScroll);
    return () => {
      window.removeEventListener("scroll", changeScroll);
    };
  }, []);

  return (
    <Flex
      bg={useColorModeValue("gray.100", "gray.900")}
      px={4}
      h={16}
      boxShadow={scroll ? "base" : "none"}
      position="sticky"
      top={0}
      zIndex={999}
      as="nav"
      alignItems="center"
      justifyContent="space-between"
      w="100%"
    >
      <Box>C V</Box>

      <Flex alignItems="center">
        <Stack direction="row" spacing={7}>
          <Link href="#about">
            <Button display="block">about</Button>
          </Link>
          <Link href="#experience">
            <Button>experience</Button>
          </Link>
          <Link href="#portfolio">
            <Button>projects</Button>
          </Link>
          <Link href="#contact">
            <Button>contact</Button>
          </Link>
        </Stack>
      </Flex>

      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
    </Flex>
  );
}
