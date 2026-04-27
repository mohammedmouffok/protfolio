import "./App.css";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import About from "./component/About";
import Projects from "./component/Projects";
import Skills from "./component/Skills";
// import Contact from "./component/Contact"
import Hero from "./component/Hero";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// const darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//     primary: {
//       main: "#ff5252",
//     },
//   },
// });
// use the default theme customasation to switch mode
const primary = {
  main: "#1976d2",
  light: "#42a5f5",
  dark: "#1565c0",
  contrastText: "#fff",
};
const secondary = {
  main: "#1976d2",
  light: "#42a5f5",
  dark: "#1565c0",
  contrastText: "#fff",
};

//////////////////////////////////::


const theme = createTheme({
  palette: {
    primary: primary,
    secondary: secondary,
  },
});


///////////////////////////////////////::

function App() {
  return (
    <div className="items-center ">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        {/* <Contact/> */}
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
