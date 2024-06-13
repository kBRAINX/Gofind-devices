import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import PhoneImage from '../assets/phones.svg'
import LaptopImage from '../assets/autre.svg'
import OtherImage from '../assets/autre.svg'

export default function Category() {
    return (
        <ImageList sx={{ width: '100%',
            height: 'auto',
            display: 'flex',
            marginTop: 1,
            justifyContent: 'space-between'
        }}>
            {itemData.map((item) => (
                <ImageListItem
                    key={item.img}
                    sx={{ margin: 5,}}>
                    <img
                        srcSet={`${item.img}?w=48&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.img}?w=48&fit=crop&auto=format`}
                        alt={item.title}
                        loading="lazy"
                        style={{
                            width: "150px",
                            height: 'auto',
                            display: 'block'
                        }}
                    />
                    <ImageListItemBar
                        title={item.title}
                        position="below"
                        sx={{
                            textAlign: 'center',
                            marginTop: 1,
                            fontSize: 30,
                            fontFamily: 'analytics',
                            fontStyle: 'bold',
                        }}
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

const itemData = [
    {
        img: PhoneImage,
        title: 'Smartphone',
    },
    {
        img: LaptopImage,
        title: 'Laptop',
    },
    {
        img: OtherImage,
        title: 'Other Electronic',
    },
    {
        img: OtherImage,
        title: 'Other Electronic',
    },
];
