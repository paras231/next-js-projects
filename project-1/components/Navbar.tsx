import React from "react";
import { HiHome } from "react-icons/hi";
import { MdOutlineStoreMallDirectory } from "react-icons/md";
import { BsWallet2 } from "react-icons/bs";
// import {TbDiscount2} from "react-icons/td"
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

const Navbar = () => {
  return <></>;
};

export default Navbar; 

export const BottomNavigateComponent = () => {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };
  return (
    <>
      <BottomNavigation
        sx={{ width: 500 }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label="Recents"
          value="recents"
          icon={<HiHome />}
        />
        <BottomNavigationAction
          label="Favorites"
          value="favorites"
          icon={<MdOutlineStoreMallDirectory />}
        />
        <BottomNavigationAction
          label="Nearby"
          value="nearby"
          icon={<BsWallet2 />}
        />
        <BottomNavigationAction
          label="Folder"
          value="folder"
          icon={<BsWallet2 />}
        />
      </BottomNavigation>
    </>
  );
};
