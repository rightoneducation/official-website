import React from "react";
import { Paper } from "@material-ui/core";
import image from "../../images/unsplash-3.png";
// image can be changed

function ResourceBannerImage(props){
    const { styles } = props;

    return (
        <Paper elevation={2} className={styles.bannerImage}>
            <img src={image} alt="right-on-resource" width="100%" align="top" />
        </Paper>
    );
}

export default ResourceBannerImage;