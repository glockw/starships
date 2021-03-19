import "./App.css";
import SelectForm from "./components/SelectForm";
import Starchips from "./components/Starchips";
import Layout from "./containers/Layout";
import StarshipContextProvider from "./context/StarshipContext";

function AppComponent() {
  return (
    <Layout>
      <SelectForm />
      <Starchips />
    </Layout>
  );
}

const App = () => {
  return (
    <StarshipContextProvider>
      <AppComponent />
    </StarshipContextProvider>
  );
};

export default App;
