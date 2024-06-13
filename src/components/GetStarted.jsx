import React from 'react'
import Category from "./Category";


const GetStarted = () => {

    return (
        <div style={{
            backgroundColor: 'rgba(246,246,245,0.84)',
            marginTop: 0,
        }}>
            <h2
                style={{
                    textAlign: 'center',
                    paddingTop: 40,
                    fontSize: 40,
                    fontStyle: 'italic',
                    fontFamily: 'serif'
                }}
            >
                All Categories
            </h2>
            <Category/>
        </div>
    )
}

export default GetStarted;
