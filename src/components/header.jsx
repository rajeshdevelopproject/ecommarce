import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { Badge } from "primereact/badge";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { Avatar } from "primereact/avatar";
import "./header.css";
let Item = [
  {
    label: "Home",
    icon: "pi pi-home",
  },
  {
    label: "About",
    icon: "pi pi-home",
  },
  {
    label: "Category",
    icon: "pi pi-home",
  },
  {
    label: "Profile",
    icon: "pi pi-home",
  },
];
const start = (
  <img
    alt="logo"
    src="https://primefaces.org/cdn/primereact/images/logo.png"
    height="40"
    className="mr-2"
  ></img>
);
const end = (
  <div className="flex align-items-center gap-2">
    <InputText placeholder="Search" type="text" className="w-8rem sm:w-auto" />
    <Avatar
      image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
      shape="circle"
    />
  </div>
);
const Header = () => {
  return (
    <>
      <div id="header">
        <Menubar model={Item} start={start} end={end}></Menubar>
      </div>
    </>
  );
};

export default Header;
