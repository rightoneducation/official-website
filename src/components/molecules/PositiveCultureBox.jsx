import React from 'react';
import { Card } from "@material-ui/core";
import PositiveCultureofErrorText from '../atoms/PositiveCultureofErrorText'

function PositiveCultureBox(props) {
    const { styles } = props
        return(
          <Card className={styles.cardIntro}>
              <PositiveCultureofErrorText styles={ styles }/>
          </Card>
        );
}

export default PositiveCultureBox;