import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardActions, Collapse, Button, Typography } from '@material-ui/core';


const useStyles = makeStyles( theme => ({
  cardContent: {
    alignSelf: 'center',
    padding: '10%',
    '&:hover': {
      transform: 'rotateY(180deg)',
    }
  },
  expand: {
    color: '#B443CC',
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    marginRight: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
}))


function InteractiveErrorAnalysisActivities() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [stat, setStat] = React.useState(0)
  const hideaway = ['reveal', 'hide'];

  const handleExpandClick = () => {
    if (expanded === true){
      setStat(0)
    }
    if (expanded === false){
      setStat(1)
    }
    setExpanded(!expanded);
  };
  return(
    <Card>
      <CardContent>
          <Typography variant="h5" style={{ marginBottom: "10px", marginTop: "30px", textAlign: "center" }}>
            What did Uno get right, and what mistake has Uno made?
          </Typography>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h5" style={{ marginBottom: "10px", marginTop: "10px", textAlign: "center" }}>
            2 and 7 are factors of 14, but Uno has missed that 1 and 14 are also factors of 14.
          </Typography>
        </CardContent>
      </Collapse>
      <CardActions disableSpacing>
        <Button
          className={classes.expand}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          Click here to {hideaway[stat]} answer
        </Button>
      </CardActions>
    </Card>
  );
}

export default InteractiveErrorAnalysisActivities;