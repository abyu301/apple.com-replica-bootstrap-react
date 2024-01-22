import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


// Home page
import Navigation from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";

// Pages
import Iphone from "./Pages/Iphone/iphone";
import Mac from "./Pages/Mac/Mac";
import Four04 from "./Pages/Four04/Four04";
import Productpage from "./Pages/Productpage/Productpage";
import Ipad from "./Pages/Ipad/Ipad"
import Watch from "./Pages/Watch/Watch"
import Tv from "./Pages/Tv/Tv"
import Music from "./Pages/Music/Music"
import Support from "./Pages/Support/Support"

// import general css
import "./css/styles.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/mac" exact component={Mac} />
          <Route path="/iphone" exact component={Iphone} />
          <Route path="/iphone/:productid" exact component={Productpage} />
          <Route path="/ipad" component={Ipad} />
          <Route path="/watch" component={Watch} />
          <Route path="/tv" component={Tv} />
          <Route path="/music" component={Music} />
          <Route path="/support" component={Support} />
          <Route path="/" component={Four04} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
