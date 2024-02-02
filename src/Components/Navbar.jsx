import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Navbar() {
    return (
        <>
            <nav className='nav'>
                <Link to='/Home' className='text '>Kalvium ❤️</Link>
                <div>
                    <Link to='/Contact' className='text '>Contacts</Link>
                    <Link to='/About' className='text'>About</Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar