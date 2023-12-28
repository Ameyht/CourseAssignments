import "./App.css";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  const myStyles = {
    fontFamily: "'Oswald', sans-serif", // Replace 'Roboto' with your preferred font
  };
  return (
    <div className="App" style={myStyles}>
      <div className="container-fluid">
        <div className="row ">
          {/* <div className="col-sm-2 ">
          <Sidebar />
        </div> */}
          <Sidebar />
          {/* <div className="col-sm-10">
          <Main />
        </div> */}
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
