import "./App.css";
import Header from "../components/pageHeader";
import LetsBuild from "../components/headerTitle";
import MainAnimation from "../components/mainAnimation";
import PageBody from "../components/pageBody";
import Footer from "../components/footer";

function App() {
  return (
    <div className="pt-4  ">
      <Header />
      <LetsBuild />
      <MainAnimation />
      <PageBody />
      <Footer />
    </div>
  );
}

export default App;
