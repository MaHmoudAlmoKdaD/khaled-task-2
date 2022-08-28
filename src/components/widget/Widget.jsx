import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import { Link,NavLink } from "react-router-dom";

const useStyles = makeStyles({
  dateText: {
    marginTop: "10px",
  },
});

const Widget = ({ id, title, createDate, image }) => {
  const [date, setDate] = useState("");
  useEffect(() => {
    const secs = createDate.seconds;
    const date = new Date(secs * 1000);
    const day = date.getDay() + 1;
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    setDate(`${day}/${month}/${year}`);
  }, []);

  const classes = useStyles();
  return (
    <NavLink to={id} style={{textDecoration: 'none'}}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="image Cover"
            // height="200"
            image={`${image}`}
            title="Contemplative Reptile"
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {`${title}`}
            </Typography>
            <Typography variant="body1" className={classes.dateText}>
              {`${date}`}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </NavLink>
  );
};

export default Widget;
