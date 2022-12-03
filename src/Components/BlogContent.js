import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../Style/BlogContent.css';
function BlogContent(props) {
    return (
        <div>
            <Card sx={{ minWidth: 350, maxWidth: 351, backgroundColor: '#FFFFFF', height: 350, margin: '10px', borderRadius: '10px' }}>
                <CardMedia
                    component="img"
                    height="180"
                    image={props.url}
                    alt={props.imgAlt}
                />
                <CardContent sx={{ height: 100 }}>
                    <Typography className='title' gutterBottom variant="h5" component="div">
                        {props.title}
                    </Typography>
                </CardContent>
                <CardActions sx={{ display: 'flex', alignItems: 'center' }}>
                    <Button size="small">Read More</Button>
                    {/* <Button size="small">Learn More</Button> */}
                </CardActions>
            </Card>
        </div>
    );
}

export default BlogContent;