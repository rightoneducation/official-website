import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardActions, Collapse, Button, Typography } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  cardContent: {
    alignSelf: 'center',

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
    if (expanded === true) {
      setStat(0)
    }
    if (expanded === false) {
      setStat(1)
    }
    setExpanded(!expanded);
  };
  return (
    <Card className='error-analysis-activity'>
      <CardContent>
        <h5 className="error-analysis-activity-text" >
          What mistake did my friend make?
        </h5>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <h5 className="error-analysis-activity-answer">
          2 and 7 are factors of 14, but they missed that 1 and 14 are also factors of 14.
          </h5>
        </CardContent>
      </Collapse>
      <CardActions disableSpacing>
        <Button
          className={classes.expand}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <p className="error-analysis-activity-button">
            {hideaway[stat]} answer
          </p>
        </Button>
      </CardActions>
    </Card>
  );
}

export default InteractiveErrorAnalysisActivities;