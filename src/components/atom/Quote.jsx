import React from 'react'
import { Box, Typography } from '@material-ui/core'

function Quote () {
    return(
        <Box components="section" id='quote'>
            <Typography variant="h5">
                "The most valuable thing you can make is a mistake – <br/> you can't learn anything from being perfect." <br/> – Steve Adams
            </Typography>
        </Box>
    )
}

export default Quote;