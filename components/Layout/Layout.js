import NextLink from 'next/link';
import { AppBar, Link, Toolbar, Typography } from '@mui/material';
import { Container } from '@mui/system';
import Head from 'next/head';
import React from 'react';
import Script from 'next/script';

const Layout = ({ children }) => {

    return (
        <div className='layout-main'>
            <Head>
                <title>SHOPPA - by Asraful. Using Next.js</title>

            </Head>

            <AppBar position='static' className='navbar-main' style={{background: "#203040"}}>
                <Toolbar>
                    <Typography variant="h5">
                        <NextLink href="/" passHref>
                            <Link underline='none' style={{ color: "#fff" }}>
                                <span>SHOPPA</span>
                            </Link>
                        </NextLink>
                        <Typography variant="caption" display="block" gutterBottom>
                            By <a href="https://mxasraful.com/"> Mx Asraful</a>
                        </Typography>
                    </Typography>
                    <div className="navbar-middle-spacing"></div>
                    <Typography variant="h6" className="navbar-right-links">
                        <NextLink href="/cart" passHref>
                            <Link className="navbar-right-cart me-3" underline='none' style={{ color: "#fff" }}>
                                <span>Cart </span>
                            </Link>
                        </NextLink>
                        <NextLink href="/login" passHref>
                            <Link className="navbar-right-login" underline='none' style={{ color: "#fff" }}>
                                <span>Login </span>
                            </Link>
                        </NextLink>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container className="container-main">
                {children}
            </Container>
            <footer className='footer-main py-4'>
                <div className="h6">©{new Date().getFullYear()} <Link className='text-dark' underline='none' href="https://asrafulweb.com">AsrafulWeb</Link>  All rights reserved.</div>
            </footer>

        </div>
    );
};

export default Layout; 