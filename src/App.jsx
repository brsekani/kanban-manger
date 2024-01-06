import Board from "./components/Board";
import Nav from "./components/Nav";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div>
      <Nav />
      <div>
        <SideBar />
        <Board />
      </div>
    </div>
  );
}

export default App;
