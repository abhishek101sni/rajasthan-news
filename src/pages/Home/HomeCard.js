import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material'
import { Typography, Grid } from '@mui/material';

const HomeCard = ({ result, onClick }) => {
    return (
        <Grid item xs={12} sm={12} md={4} lg={4}>
            
            <Card variant="outlined">
                <CardActionArea onClick={onClick}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={result?.photo}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{
                            display: '-webkit-box',
                            overflow: 'hidden',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 2,
                        }}>
                            {result?.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{
                            display: '-webkit-box',
                            overflow: 'hidden',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 5,
                        }}>
                            {result?.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

export default HomeCard
