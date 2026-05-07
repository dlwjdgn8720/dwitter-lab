import Logo from "./header/Logo.jsx";
import ToggleButton from "./header/ToggleButton.jsx";
import MenuList from "./commons/MenuList.jsx";
import { getFetchData } from "../util/fetch.js";
import { useState, useEffect } from "react";

export default function Header() {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async() => {
            const jsonData = await getFetchData("/header");
            setData(jsonData.result);
        }
        fetchData();
    }, []);

    return (
        <header className="header">
            <Logo img={data?.logo?.img}
                alt="header-logo"
                style="header-logo-img"
                title={data?.logo?.name}
            />
            <MenuList menus={data?.menus} style="header-menu open" />
            <ToggleButton />
        </header>
    )
}