function Link({ herf, text, Text, Box }) {
    return (

        <Box>

            <link href={herf} />

            <Text color="gray.800">{text}</Text>

        </Box>

    );
}

export default Link;