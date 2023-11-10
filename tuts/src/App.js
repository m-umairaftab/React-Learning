import "./App.css";
import HomeContainer from "./React-Redux/Containers/HomeContainer";
import HeaderContainer from "./React-Redux/Containers/HeaderContainer";
function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <HomeContainer />
    </div>
  );
}

export default App;
