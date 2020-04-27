import React from 'react'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  profilePhoto: {
    cursor: "pointer",
    width: "249px",
    marginBottom: "-20px"
  }
});

function Front (props) {
    const {photo, handleFlip} = props
    const styles = useStyles();
    return (
        <div>
            <button onMouseOver={handleFlip} onClick={handleFlip}>
                <img src={photo} width='100%' className={styles.profilePhoto} alt='right-on-education-team-member'/>
            </button>
        </div>
    )
}

export default Front;