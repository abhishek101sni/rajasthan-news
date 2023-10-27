import React, { useEffect } from 'react'
import { Typography, Card, CardContent, CardMedia, Container } from "@mui/material";
import { useLocation } from 'react-router-dom';


const FullNews = () => {

    const {state} = useLocation();

    return (
        <Container>
            <CardContent>

                <Typography variant="h4" component="div" style={{ marginTop: "100px" }}>
                    {state?.data?.title}
                </Typography>

                <CardMedia style={{ marginTop: "20px" }} component="img" height="300" width="400" image={state?.data?.photo} alt="Image Alt Text" />

                <Typography variant="h6" color="textSecondary" style={{ marginTop: "10px" }}>
                    {state?.data?.description}
                </Typography>

            </CardContent>
        </Container>
    )
}

export default FullNews

