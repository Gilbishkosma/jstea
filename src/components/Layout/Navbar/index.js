import React from "react";
import { Navbar, Text } from "@nextui-org/react";

const CustomNavbar = () => {
    return <>
        <Navbar>
            <Navbar.Brand>
                <Text b color="inherit" hideIn="xs">
                    JSTea
                </Text>
            </Navbar.Brand>
        </Navbar>
    </>
}

export default CustomNavbar;