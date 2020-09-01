import React from "react";
import { AppBar, createStyles, Theme, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DogPlaceHolderContainer } from "./containers/dogPlaceHolder";
import { DogDescriptionContainer } from "./containers/dogDescription";
import { BreedGalleryContainer } from "./containers/breedGalleryContainer";
import { DogUploaderContainer } from "./containers/dogUploaderContainer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    app: {
      backgroundColor: "#f5f5f5",
      margin: "10px"
    },
    appBar: {
      marginBottom: "20px"
    },
    mainView: {
      marginTop: "80px",
      width: "100%",
      backgroundColor: "#f5f5f5",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center"
    }
  })
);
function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <AppBar className={classes.appBar}>
        <Typography variant="h2">Dog-Typer</Typography>
      </AppBar>
      <div className={classes.mainView}>
        <DogPlaceHolderContainer />
        <DogDescriptionContainer />
        <DogUploaderContainer />
          <BreedGalleryContainer />
      </div>
    </div>
  );
}

export default App;
