import React, { useState } from 'react';
import MediaCard from "./Card";

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

function Product() {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;

    // Calcule l'index de début et de fin des produits à afficher sur la page actuelle
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = productData.slice(indexOfFirstProduct, indexOfLastProduct);

    // Change de page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div style={{ marginTop: '100px' }}>
            <div>
                <MediaCard
                    productData={currentProducts}
                    sx={{ display: 'flex' }}
                />
            </div>
            {/* Boutons de pagination */}
            <div style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}>
                {[...Array(Math.ceil(productData.length / productsPerPage)).keys()].map((number) => (
                    <button
                        style={{
                            margin: '0 10px',
                            padding: '10px 20px',
                            backgroundColor: currentPage === number + 1 ? 'black' : '#e7e5e5',
                            color: currentPage === number + 1 ? '#e7e5e5' : 'black',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                        }}
                        key={number + 1} onClick={() => paginate(number + 1)}>
                        {number + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Product;
