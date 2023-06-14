import About from "../components/pages/About";
import Experience from "../components/pages/Experience";
import Portfolio from "../components/pages/Portfolio";
import Contact from "../components/pages/Contact";

function Route() {
  return (
    <>
      <Nav />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/experience" component={Experience} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </>
  );
}
