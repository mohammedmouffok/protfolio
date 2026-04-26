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

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ff5252",
    },
  },
});
// use the default theme customasation to switch mode
// const primary = {
//   main: "#1976d2",
//   light: "#42a5f5",
//   dark: "#1565c0",
//   contrastText: "#fff",
// };

//////////////////////////////////::

// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { lime, purple } from '@mui/material/colors';
// import Button from '@mui/material/Button';

// const theme = createTheme({
//   palette: {
//     primary: lime,
//     secondary: purple,
//   },
// });

// export default function UsingColorObject() {
//   return (
//     <ThemeProvider theme={theme}>
//       <Button variant="contained">Primary</Button>
//       <Button variant="contained" color="secondary" sx={{ ml: 2 }}>
//         Secondary
//       </Button>
//     </ThemeProvider>
//   );
// }

////////////////////////////////:::::

// import { createTheme } from "@mui/material/styles";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#FF5733",
//       // light: will be calculated from palette.primary.main,
//       // dark: will be calculated from palette.primary.main,
//       // contrastText: will be calculated to contrast with palette.primary.main
//     },
//     secondary: {
//       main: "#E0C2FF",
//       light: "#F5EBFF",
//       // dark: will be calculated from palette.secondary.main,
//       contrastText: "#47008F",
//     },
//   },
// });

///////////////////////////////////////::

function App() {
  return (
    <div className="items-center ">
      <ThemeProvider theme={darkTheme}>
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
