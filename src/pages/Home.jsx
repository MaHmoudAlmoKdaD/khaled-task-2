import CssBaseline from "@material-ui/core/CssBaseline";
import Widget from "../components/widget/Widget";
import { Container, Grid, Box, Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { db } from "../firebase/FirebaseAuth";
import {
  collection,
  getDocs,
} from "firebase/firestore";
import {
  makeStyles,
  createTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import SliderImages from "../components/slider/SliderImages";
import { BrowserRouter as Router, Routes } from "react-router-dom";


const Home = ({data = []}) => {
  // const [data, setData] = useState([]);
  const [index, setIndex] = useState(1);
  // const ref = collection(db, "grain");
  // useEffect(() => {
  //   getGrainsDocs();
  // }, []);
  // const getGrainsDocs = async () => {
  //   const data = await getDocs(ref);
  //   let temp = data.docs.map((doc) => {
  //     return {
  //       ...doc.data(),
  //       id: doc.id,
  //     };
  //   });
  //   setData(temp);
  // };
  return (
    <div className="App">
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          {data.slice(0, index * 12).map((e, index) => (
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Widget
                key={`${e.id}`}
                id={e.id}
                title={e.title}
                createDate={e.createdate}
                image={e.image.src}
              />
            </Grid>
          ))}
        </Grid>
        {data.length > index * 12 && (
          <Grid item xs={12} style={{ marginTop: "30px" }}>
            <Grid container justifyContent="center">
              <Box mt={8} mx={"auto"}>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setIndex(index + 1)}
                  >
                    Load More
                  </Button>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        )}
      </Container>
      {/* <Single /> */}
      {/* <SliderImages /> */}
      <CssBaseline />
    </div>
  );
};

export default Home;
