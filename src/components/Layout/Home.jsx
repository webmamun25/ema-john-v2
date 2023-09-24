import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

function Home() {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    )
}

export default Home
