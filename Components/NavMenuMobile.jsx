import { useState } from "react"

const NavMenuMobile = () => {

const [isOpen, setIsOpen, IconButton, CloseIcon, HamburguerIcon, Box, Navmenu]  = useState(false);

return (

<>

<IconButton

colorscheme="teal"
icon={isOpen ? <CloseIcon /> : <HamburguerIcon />}
boxSize="3rem"
size="2rem"
onClick={ () => setIsOpen(!isOpen) }


/>

<Box

p="2rem 8rem"
m="0 !important"
bgColor="teal"
position="absolute"
top="100%"
left="0"
w="full"
display={isOpen ? "flex" : "none"}

>

<Navmenu direction="column" />

</Box>

</>

);

};

export default NavMenuMobile;

