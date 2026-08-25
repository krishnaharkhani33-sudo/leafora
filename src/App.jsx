import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./Leafora/Header";
import Footer from "./Leafora/Footer";

import Hero from "./Leafora/Hero";
import Info from "./Leafora/Info";
import Plantcare from "./Leafora/Plantcare";
import Collection from "./Leafora/Collection";
import CareGuide from "./Leafora/CareGuide";
import Whychoose from "./Leafora/Whychoose";
import MyPlant from "./Leafora/Myplant";
import Blog from "./Leafora/Blog";
import BottomSections from "./Leafora/BottomSections";

function Home() {
  return (
    <>
      <Hero />
      <Info />
      <Plantcare />
      <Collection />
      <CareGuide />
      <Whychoose />
      <MyPlant />
      <Blog />
      <BottomSections />
    </>
  );
}

function About() {
  return (
    <>
      <Info />
    </>
  );
}

function PlantCarePage() {
  return <Plantcare />;
}

function MyPlantsPage() {
  return (
    <>
      <MyPlant />
      <Blog />
    </>
  );
}

function HelpPage() {
  return <CareGuide />;
}

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/plant-care">
          <PlantCarePage />
        </Route>

        <Route path="/my-plants">
          <MyPlantsPage />
        </Route>

        <Route path="/help">
          <HelpPage />
        </Route>

      </Switch>

      <Footer />

    </BrowserRouter>
  );
}

export default App;