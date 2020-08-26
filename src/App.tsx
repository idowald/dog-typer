import React from "react";
import { AppBar, createStyles, Theme, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DogPlaceHolderContainer } from "./containers/dogPlaceHolder";
import { DogDescriptionContainer } from "./containers/dogDescription";
import { BreedGalleryContainer } from "./containers/breedGalleryContainer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      marginLeft: "10px"
    },
    appBar: {
      marginBottom: "20px"
    }
  })
);
function App() {
  const classes = useStyles();
  return (
    <div className="App" style={{ backgroundColor: "#f5f5f5" }}>
      <AppBar position="static" className={classes.appBar}>
        <Typography variant="h2" className={classes.title}>
          Dog-Typer
        </Typography>
      </AppBar>
      <div
        style={{
          margin: "auto",
          width: "50%",
          backgroundColor: "#f5f5f5",
        }}
      >
        <DogPlaceHolderContainer />
        <DogDescriptionContainer />
      </div>
      <BreedGalleryContainer />
    </div>
  );
}

export default App;
