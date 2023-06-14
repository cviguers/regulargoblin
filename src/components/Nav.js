// import React from "react";
// import "../styles/style.css";
// import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
// import {
//   Flex,
//   useColorMode,
//   useColorModeValue,
//   Button,
// } from "@chakra-ui/react";

// // Here we are using object destructuring assignment to pluck off our variables from the props object
// // We assign them to their own variable names
// function NavTabs({ currentPage, handlePageChange }) {
//   const { colorMode, toggleColorMode } = useColorMode();

//   return (
//     <>
//       <Flex
//             bg={useColorModeValue("gray.300", "gray.900")}
//             px={4}
//             h={16}
//             alignItems={"end"}
//             justifyContent={"space-between"}
//             w="100%"

//       >
//         <nav class="navbar navbar-dark navbox navbar-expand-lg">
//           <ul className="navbar-nav navbox mr-auto">
//             <li className="nav-item">
//               <a
//                 href="#home"
//                 onClick={() => handlePageChange("Home")}
//                 // This is a conditional (ternary) operator that checks to see if the current page is "Home"
//                 // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
//                 className={
//                   currentPage === "Home" ? "nav-link active" : "nav-link"
//                 }
//               >
//                 home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a
//                 href="#about"
//                 onClick={() => handlePageChange("About")}
//                 // Check to see if the currentPage is `Home`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//                 className={
//                   currentPage === "About" ? "nav-link active" : "nav-link"
//                 }
//               >
//                 about
//               </a>
//             </li>
//             <li className="nav-item">
//               <a
//                 href="#portfolio"
//                 onClick={() => handlePageChange("Portfolio")}
//                 // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//                 className={
//                   currentPage === "Portfolio" ? "nav-link active" : "nav-link"
//                 }
//               >
//                 portfolio
//               </a>
//             </li>
//             <li className="nav-item">
//               <a
//                 href="#contact"
//                 onClick={() => handlePageChange("Contact")}
//                 // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//                 className={
//                   currentPage === "Contact" ? "nav-link active" : "nav-link"
//                 }
//               >
//                 contact
//               </a>
//             </li>
//             <Button onClick={toggleColorMode}>
//               {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
//             </Button>
//           </ul>
//         </nav>
//       </Flex>
//     </>
//   );
// }

// export default NavTabs;

import React from "react";
import { ReactNode } from "react";
import { useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  Text,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import About from "../components/pages/About";
import Experience from "../components/pages/Experience";
import Portfolio from "../components/pages/Portfolio";
import Contact from "../components/pages/Contact";

export default function Nav() {
  // theme toggler
  const { colorMode, toggleColorMode } = useColorMode();

  // scroll to section functions
  const [scroll, setScroll] = useState(false);

  const scrollToHome = () => {
    const homeSection = document.querySelector("#home");
    homeSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToExperience = () => {
    const experienceSection = document.querySelector("#experience");
    experienceSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProjects = () => {
    const projectsSection = document.querySelector("#portfolio");
    projectsSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };
  const changeScroll = () =>
    document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
      ? setScroll(true)
      : setScroll(false);

  window.addEventListener("scroll", changeScroll);

  return (
    <>
      <Box bg={useColorModeValue("gray.25", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <a href="home">
            <Box>C V</Box>
          </a>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <a href="#about">
                <Button display="block">About</Button>
              </a>
              <a href="#experience">
                <Button>Experience</Button>
              </a>
              <a href="#portfolio">
                <Button>Projects</Button>
              </a>
              <a href="#contact">
                <Button>Contact</Button>
              </a>
            </Stack>
          </Flex>

          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
      </Box>
    </>
  );
}
