import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { db } from "./firebase/FirebaseAuth";
import { collection, getDocs } from "firebase/firestore";
import Home from "./pages/Home";
import Single from "./components/single/Single";
import { useEffect, useState } from "react";
// import { addData } from "./firebase/Funcitons";

const theme = createTheme({
  typography: {
    fontFamily: ["Tajawal", "sans-serif"].join(","),
  },
  textDecoration: "none",
});
function App() {
  const [data, setData] = useState([]);
  const ref = collection(db, "grain");
  useEffect(() => {
    // addData()
    getGrainsDocs();
  }, []);
  const getGrainsDocs = async () => {
    const data = await getDocs(ref);
    let temp = data.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };
    });
    setData(temp);
  };
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/:id" element={<Single />} />
        </Routes>
        <CssBaseline />
      </ThemeProvider>
    </Router>
  );
}

export default App;
