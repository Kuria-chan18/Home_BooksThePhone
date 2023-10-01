const Menu = ({ direction, Flex, NavLink }) => {

return (

<Flex gap="5rem" flexDir={direction}>

<NavLink herf="#" text="Menu" />
<NavLink herf="#" text="Perfil" />
<NavLink herf="#" text="Biblioteca" />
<NavLink herf="#" text="Carrinho de Compras" />

</Flex>

);

};

export default Menu;