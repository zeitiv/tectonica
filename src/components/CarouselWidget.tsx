import { Box, FlexProps, Flex, Stack } from "@chakra-ui/react";

interface CarouselWidgetProps extends FlexProps {
    children?: React.ReactNode;
}

const CarouselWidget = ({ children }: CarouselWidgetProps) => {
    return (
        <Box
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            minH={"100vh"}
        >
            <Flex justify="center" align={"center"} minH={"100vh"}>
                <Stack
                    w={{ base: '90%', md: '70%' }}
                >
                    <Flex width={"100%"} backgroundColor={"rgba(16,16,16,0.9)"} p={"5%"} borderRadius={"1%"}>
                        {children}
                    </Flex>
                </Stack>
            </Flex>
        </Box>
    )
}
export default CarouselWidget;