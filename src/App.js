
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';
import OurServices from './components/OurServices/OurServices';
import ContactUs from './components/ContactUs/ContactUs';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header></Header>
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
    <Route path="/home">
    <Home></Home>
    </Route>
    <Route path="/about">
    <AboutUs></AboutUs>
    </Route>
    <Route path="/services">
      <OurServices></OurServices>
    </Route>
    <Route path="/contact">
      <ContactUs></ContactUs>
    </Route>
    <Route path="*">
      <NotFound></NotFound>
    </Route>
    </Switch>
    <Footer></Footer>
    </BrowserRouter>
    </div>
  );
}

export default App;
