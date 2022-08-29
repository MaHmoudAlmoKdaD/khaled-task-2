import {
  Container,
  Grid,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import { makeStyles } from "@material-ui/core/styles";
import SliderImages from "../slider/SliderImages";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { db } from "../../firebase/FirebaseAuth";
import { collection, getDocs } from "firebase/firestore";
const useStyles = makeStyles({
  icon: {
    color: "#6E6E6E",
  },
  slider: {
    height: "auto",
    marginTop: "25px",
  },
  button: {
    backgroundColor: "#0C9FC1",
  },
  paragraph: {
    marginTop: "20px",
  },
});

const Single = () => {
  const [doc, setDoc] = useState({});
  const [data, setData] = useState([]);
  const { id } = useParams();
  const classes = useStyles();
  const ref = collection(db, "grain");
  useEffect(() => {
    getGrainsDocs();
    fun();
  }, []);
  useEffect(() => {
    for (let i = 0; i < data.length; i++) {
      if (id === data[i].id) {
        setDoc(data[i]);
        return;
      }
    }
  }, [data]);

  const fun = () => {};
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
  const showMore = () => {
    let buttonText = document.getElementById("buttonShow");
    if (buttonText.innerText === "SHOW MORE") {
      document.getElementById("more").style.display = "inline";
      buttonText.innerText = "SHOW LESS";
    } else {
      document.getElementById("more").style.display = "none";
      buttonText.innerText = "SHOW MORE";
    }
  };
  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid item lg={12}>
          <Typography variant="h3"> {doc?.title}</Typography>
        </Grid>
        <Grid container justifyContent="flex-start">
          <Grid item>
            <IconButton aria-label="delete">
              <FacebookIcon className={classes.icon} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton aria-label="delete">
              <TwitterIcon className={classes.icon} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton aria-label="delete">
              <LinkedInIcon className={classes.icon} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton aria-label="delete">
              <EmailIcon className={classes.icon} />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item lg={6} md={8} sm={12}>
          <Grid item >
            <Typography className={classes.paragraph}>
              {doc?.description}
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              id="buttonShow"
              onClick={() => showMore()}
            >
              SHOW MORE
            </Button>
          </Grid>
        </Grid>
        <Grid item lg={6} md={8} sm={9} className={classes.slider} style={{width: '100%'}}>
          <SliderImages images={doc?.carousel} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Single;
