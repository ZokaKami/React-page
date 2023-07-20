import "./App.css";
import Header from "../components/pageHeader";
import LetsBuild from "../components/headerTitle";
import MainAnimation from "../components/mainAnimation";
import PageBody from "../components/pageBody";

function App() {
  return (
    <div className="pt-4  ">
      <Header />
      <LetsBuild />
      <MainAnimation />
      <PageBody />
    </div>
  );
}

export default App;
