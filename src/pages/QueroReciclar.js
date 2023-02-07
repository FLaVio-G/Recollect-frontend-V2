import { Header } from "../components/Header/Header";
import { Box, Card, Flex } from "@chakra-ui/react";
import logo from "../assets/imgs/morro-2.png";
import Map from "../components/googleMaps/Map";
import { useJsApiLoader } from "@react-google-maps/api";

import { mapOptions } from "../components/googleMaps/MapConfiguration";

function QueroReciclar() {
  const { isLoaded } = useJsApiLoader({
    id: mapOptions.googleMapApiKey,
    googleMapsApiKey: mapOptions.googleMapApiKey,
  });
  return (
    <Box backgroundSize="cover" bgImage={logo} height="100vh">
      <Header />
      <Flex 
      justify="center"
      >
      <Card
        className="card_login"
        backdropFilter="auto"
        backdropBlur="40px"
        ml="2%"
        mr="2%"
        border="1px solid white"
        borderStartRadius="20px"
        borderEndRadius="20px"
        variant="outline"
        backgroundColor="none"
        padding="50px"
        alignContent="center"

      >
        <Map isLoaded={isLoaded} />
      </Card>
      </Flex>
    </Box>
  );
}
export default QueroReciclar;
