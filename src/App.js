import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/scss/bootstrap.scss";
import "./App.scss";
import "./landingPage.scss"
import "./aboutPage.scss"
import "./teamPage.scss"
import "./resourcesPage.scss"
import "./rwdgrid.css";

import LandingPage from "./components/pages/LandingPage.jsx";
import AboutPage from "./components/pages/AboutPage";
import TeamPage from "./components/pages/TeamPage";
import ResourcePage from "./components/pages/ResourcePage";
import PageHeader from "./components/molecules/PageHeader";
import Footer from "./components/molecules/Footer";

import teamData from "./_localDb/teamData";
import features from "./_localDb/features";
const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0px",
  },
  bannerImage: {
    background: "#322759",
    marginTop: "-2%",
    marginBottom: "-7%",
    overflow: "hidden",
    objectFit: "contain",
    objectPosition: "center",
    alignItems: "center",
    display: "flex",
  },
  cardIntro: {
    justifyContent: "center",
    color: "white",
    width: "85%",
    position: "relative",
    padding: "5%",
    margin: "auto",
    mixBlendMode: "multiply",
    background: "linear-gradient(201.84deg, #B443CC 0%, #662AAF 73.19%)",
  },
  cardContent: {
    borderLeft: "8px solid #d80053",
    marginTop: "20px",
    paddingLeft: "20px",
    // fontWeight: "300",
    // lineHeight: "1.4",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1em",
    },
  },
  resourcesPageBk: {
    background:
      "linear-gradient(180deg, #322759 -2.67%, #40216F 64.71%, #591796 100%)",
  },
  circle: {
    position: "absolute",
    top: "115vw",
    left: "-100px",
    borderRadius: "50%",
    width: "708px",
    height: "708px",
    background: "rgba(255, 255, 255, 0.15)",
    opacity: "0.5",
    boxShadow: "0px 4px 10px 5px rgba(0, 0, 0, 0.25)",
  },
  square: {
    position: "absolute",
    top: "150vw",
    right: "-330px",
    width: "503px",
    height: "516px",
    background: "rgba(255, 255, 255, 0.15)",
    boxShadow: "0px 4px 10px 5px rgba(0, 0, 0, 0.25)",
    transform: "rotate(31.35deg)",
  },
  hexagon: {
    position: "absolute",
    top: "230vw",
    left: "-500px",
    width: " 840px",
    height: "840px",
    clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0 50%)",
    opacity: "0.15",
    background: "white",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
    transform: "rotate(139.2deg)",
  },
}));

function App() {
  const [teamProfiles, setProfiles] = useState({
    devTeamCards: teamData.devTeam,
    advisorProfiles: teamData.advisors,
  });
  const [advisors] = useState({
    advisorProfiles: teamData.advisors,
  });
  const [resourceVidLink, setResourseVidLink] = useState({
    tutorialVids: features.tutorialVideos,
  });

  const { devTeamCards } = teamProfiles;
  const { advisorProfiles } = advisors;
  const { tutorialVids } = resourceVidLink;

  const styles = useStyles();
  return (
    <Router>
      <Box className="App">
        <PageHeader styles={styles} />
        <Switch>
          <Container maxWidth="false" className={styles.container}>
            <Route
              exact
              path="/"
              render={() => <LandingPage styles={styles} />}
            />
            <Route path="/about" render={() => <AboutPage styles={styles} />} />
            <Route
              path="/team"
              render={() => (
                <TeamPage
                  styles={styles}
                  profileCards={devTeamCards}
                  advisorData={advisorProfiles}
                />
              )}
            />
            <Route
              path="/resources"
              render={() => (
                <ResourcePage styles={styles} videoSrc={tutorialVids} />
              )}
            />
          </Container>
        </Switch>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
