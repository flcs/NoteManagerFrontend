import {
  Box,
  Button,
  Center,
  Collapse,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import NoteOptions from "../NoteOptions";

const Note = () => {
  const [show, setShow] = React.useState(false);

  const handleToggle = () => setShow(!show);
  return (
    <Box
      w={"270px"}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"2xl"}
      rounded={"md"}
      overflow={"hidden"}
      h='min-content'
      p='16px'
    >
      <Center justifyContent='space-between'>
        <Heading>Título</Heading>
        <NoteOptions />
      </Center>
      <Collapse startingHeight={20} in={show}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum,
        erat at pretium accumsan, nisl eros cursus ex, non vehicula odio diam
        nec urna. Phasellus ac luctus sem, id pellentesque eros. Donec dolor
        ipsum, feugiat a rhoncus ut, euismod id nunc. Donec mauris turpis,
        vulputate sit amet gravida at, semper in velit. Nunc fermentum ac enim
        ut ullamcorper. Sed sagittis risus eget auctor sodales. Nulla placerat,
        ante eu sagittis ornare, elit ligula maximus diam, tristique auctor quam
        turpis ut ante. Mauris eleifend metus nec ante ultrices mollis. In et
        sodales sapien. Fusce eget diam dignissim, aliquet eros quis, iaculis
        leo. Proin vitae nisi sit amet leo hendrerit faucibus nec sit amet quam.
        Pellentesque tristique, augue nec pretium vestibulum, ex nibh fringilla
        diam, in eleifend risus augue vel odio. Aliquam vitae sollicitudin
        nulla. Donec id lacus a neque facilisis facilisis. Nunc in posuere
        sapien, et pulvinar odio. Integer at porttitor risus.
      </Collapse>
      <Button size='sm' onClick={handleToggle} mt='1rem'>
        {show ? "Esconder" : "Mostrar"}
      </Button>
    </Box>
  );
};

export default Note;
