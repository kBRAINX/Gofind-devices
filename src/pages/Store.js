import React from 'react'

import Headstore from '../components/Headstore'
import Filter from "../components/Filter";
import Product from "../components/Product";

const store = () => {
    return (
        <>
            <Headstore />
            <Filter className='filter'/>
            <Product />
        </>
    )
}

export default store
