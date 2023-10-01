const NavBar = () => {

const [isLargerThanMD, useMediaQuery, Box, HStack, Logo, Navmenu, NavMenuMobile] = useMediaQuery("min-width: 768px");    

return (

<Box position={"relative"}>   

<HStack

bgColor="teal.200"
w="full"
p={{ base: "1rem 3rem", md: "1rem 8rem" }}
justifyContent={"space-between"}

>

<Logo size="5rem" />

{isLargerThanMD ? <Navmenu /> : <NavMenuMobile />}

</HStack>

</Box> 

);

}; 

export default NavBar;