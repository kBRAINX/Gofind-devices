import React from 'react';
import MediaCard from "./Card";
import { Link } from "react-router-dom";

const productData = [
    {
        img: './assets/image2.jpeg',
        mark: 'Smartphone',
        imei: '#TTRTV35546GGDGG',
        author: 'brayan',
        imageAuthor: './assets/phone.jpeg',
        date: '23/05/2024'
    },
    {
        img: './assets/image2.jpeg',
        mark: 'laptop',
        imei: '#TTRTV35546GGDTR',
        author: 'brayanne',
        imageAuthor: './assets/phone.jpeg',
        date: '23/05/2024'
    },
    {
        img: './assets/image2.jpeg',
        mark: 'Other Electronic',
        imei: '#TTRTV3554ETTR45',
        author: 'brian',
        imageAuthor: './assets/phone.jpeg',
        date: '23/05/2024'
    },
    {
        img: './assets/image2.jpeg',
        mark: 'laptop',
        imei: '#TTRTV35546GGDTR',
        author: 'brayanne',
        imageAuthor: './assets/phone.jpeg',
        date: '23/05/2024'
    },
    {
        img: './assets/image2.jpeg',
        mark: 'Other Electronic',
        imei: '#TTRTV3554ETTR45',
        author: 'brian',
        imageAuthor: './assets/phone.jpeg',
        date: '23/05/2024'
    },
    {
        img: './assets/image2.jpeg',
        mark: 'Other Electronic',
        imei: '#TTRTV3554ETTR45',
        author: 'brian',
        imageAuthor: './assets/phone.jpeg',
        date: '23/05/2024'
    },
    {
        img: './assets/image2.jpeg',
        mark: 'Other Electronic',
        imei: '#TTRTV3554ETTR45',
        author: 'brian',
        imageAuthor: './assets/phone.jpeg',
        date: '23/05/2024'
    },
    {
        img: './assets/image2.jpeg',
        mark: 'Other Electronic',
        imei: '#TTRTV3554ETTR45',
        author: 'brian',
        imageAuthor: './assets/phone.jpeg',
        date: '23/05/2024'
    },
    {
        img: './assets/image2.jpeg',
        mark: 'Other Electronic',
        imei: '#TTRTV3554ETTR45',
        author: 'brian',
        imageAuthor: './assets/phone.jpeg',
        date: '23/05/2024'
    },
];

function ProductList() {
    const limitedProductData = productData.slice(0, 8); // Limite à 8 éléments

    return (
        <div style={{ marginTop: '100px' }}>
            <div>
                <h2 style={{
                    marginBottom: '50px',
                    textAlign: 'center',
                    fontSize: 50,
                    fontStyle: 'italic',
                    fontFamily: 'serif'
                }}>
                    some articles
                </h2>
                <MediaCard
                    productData={limitedProductData}
                    sx={{ display: 'flex' }}
                />
            </div>
            <Link to={'/store'} style={{
                margin: '30px 47%',
                textDecoration: 'underline',
                color: "black",
                fontSize: 20,
                fontFamily: 'serif',
                fontStyle: 'italic'
            }}>
                <span>View More</span>
            </Link>
        </div>
    );
}

export default ProductList;
