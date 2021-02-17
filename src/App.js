import Header from './components/Header';
import Navbar from './components/Navbar';
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Home from './components/Home';
import Footer from './components/Footer';
import { Scrollbars } from 'react-custom-scrollbars';
import RestoreScroll from './components/RestoreScroll';

function App() {
  const location = useLocation();

  return (
    <>
      <Scrollbars 
        style={{ width: '100vw', height: '100vh' }}
        // implement auto scrollToTop() on router page change
      >
        <Header />
        <Navbar />
        <Footer />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/" component={Home} />
            

          </Switch>
        </AnimatePresence>
      </Scrollbars>
    </>
  );
}

export default App;
