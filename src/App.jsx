import { useState } from "react";
import Board from "./components/Board";
import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
import Body from "./components/Body";
import CreateNewBoard from "./components/CreateNewBoard";

function App() {
  const [showSideBar, SetShowSideBar] = useState(true);

  const HandleSideBar = () => {
    SetShowSideBar(!showSideBar);
    console.log("yes");
  };

  return (
    <div className="h-[100vh] overflow-hidden ">
      <Nav showSideBar={showSideBar} />
      <Body showSideBar={showSideBar} HandleSideBar={HandleSideBar} />
      {/* <CreateNewBoard /> */}
    </div>
  );
}

export default App;
