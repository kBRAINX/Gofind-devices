import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from '@mui/material/styles';

const Tag = styled('div')(({ theme }) => ({
    position: 'absolute',
    top: theme.spacing(1),
    left: theme.spacing(1),
    backgroundColor: '#f53e4c',
    color: 'white',
    padding: theme.spacing(0.5, 1),
    borderRadius: theme.shape.borderRadius,
    zIndex: 1,
    fontWeight: 'bold',
}));

const ImageContainer = styled('div')({
    position: 'relative',
});

export default function MediaCard({ productData }) {
    return (
        <div style={{
            margin: 10,
            flexWrap: 'wrap',
            display: 'flex'
        }}>
            {productData.map((item) => (
                <Card key={item.imei} sx={{ margin: '30px 6rem' }}>
                    <ImageContainer>
                        <Tag>volé</Tag>
                        <CardMedia>
                            <img
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={item.img}
                                alt={item.title}
                                style={{
                                    width: "100%",
                                    height: 'auto',
                                    display: 'block'
                                }}
                                loading="lazy"
                            />
                        </CardMedia>
                    </ImageContainer>
                    <CardContent>
                        <Typography
                            gutterBottom variant="h5"
                            component="div"
                            style={{ fontFamily: 'serif' }}
                        >
                            Mark : {item.mark}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            IMEI : {item.imei}
                        </Typography>
                        <div style={{ display: "flex" }}>
                            <img
                                srcSet={`${item.imageAuthor}?w=24&fit=crop&auto=format&borderRadius=50&dpr=2 2x`}
                                src={`${item.imageAuthor}?w=24&fit=crop&auto=format&borderRadius=50`}
                                alt={item.author}
                                style={{
                                    marginTop: 12,
                                    width: "30px",
                                    height: '30px',
                                    display: 'block',
                                    borderRadius: '50px'
                                }}
                                loading="lazy"
                            />
                            <Typography
                                variant="body1"
                                color="text.primary"
                                style={{ margin: '15px 10px', fontFamily: 'serif' }}
                            >
                                {item.author}
                            </Typography>
                        </div>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            justifyContent="end"
                            style={{
                                textAlign: 'right',
                                fontFamily: 'cursive'
                            }}
                        >
                            Published : {item.date}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">signaler</Button>
                    </CardActions>
                </Card>
            ))}
        </div>
    );
}
