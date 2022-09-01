import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import ErrorPage from '../../components/ErrorPage/ErrorPage';
import Layout from '../../components/Layout/Layout';
import data from '../../utlis/data';
import NextLink from 'next/link';
import { AppBar, Link, Toolbar, Typography } from '@mui/material';

const Product = () => {

    const router = useRouter()

    const { slug } = router.query

    const itemData = data.products.find(dt => slug === dt.slug)

    // Manage Invalid Product
    if (!itemData) {
        return (
            <ErrorPage code="404" message="Product Not Found"></ErrorPage>
        )
    }

    return (
        <Layout title={`${itemData?.name} - Amazon 2.0 | By Asraful`}>
            <div className="product-item-main">
                <div className="container pt-4">
                    {
                        itemData ?
                            <>
                                <NextLink href='/' passHref>
                                    <Link className="">
                                        <Button>
                                            Back To Home
                                        </Button>
                                    </Link>
                                </NextLink>
                                <div className="row pt-3">
                                    <div className="col-sm-6 pb-4 card bg-light d-flex justify-content-center align-items-center p-3">
                                        <img className="w-100 rounded" src={itemData?.image} alt={itemData?.name} />
                                    </div>
                                    <div className="col-sm-6">
                                        <h4>{itemData?.name}</h4> <br />
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <table className="table table-borderless">
                                                    <tbody>
                                                        <tr>
                                                            <td className='text-end'><b>Categories: </b> </td>
                                                            <td colSpan="2">{itemData?.categories}</td>
                                                        </tr>
                                                        <tr>
                                                            <td className='text-end'><b>Brand: </b> </td>
                                                            <td colSpan="2">{itemData?.brand}</td>
                                                        </tr>
                                                        <tr>
                                                            <td className='text-end'><b>Rating: </b> </td>
                                                            <td colSpan="2">{itemData?.rating} Stars ({itemData?.numReviews} Reviews)</td>
                                                        </tr>
                                                        <tr>
                                                            <td className='text-end'><b>In Stock: </b> </td>
                                                            <td colSpan="2">{itemData?.countInStock} Items</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="col-lg-6 card">
                                                <div className="card-body">
                                                    <h5>
                                                        <b>
                                                            <table className="table table-borderless">
                                                                <tbody>
                                                                    <tr>
                                                                        <td>Price: </td>
                                                                        <td>$ {itemData?.price}.00</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Stock: </td>
                                                                        <td>{itemData?.countInStock ? "In Stock" : "Out Of Stock"}</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </b>
                                                    </h5>
                                                    {
                                                        itemData?.countInStock ?
                                                            <Button variant='contained' color='primary' className="product-item-page-add-to-cart w-100">Add To Cart</Button>
                                                            :
                                                            <Button variant='contained' color='primary' className="product-item-page-add-to-cart w-100" disabled>Add To Cart</Button>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <br />
                                        <h6><b>Description: </b><span>{itemData.description}</span></h6>
                                    </div>
                                </div>
                            </>
                            :
                            <div className="text-center" style={{ marginTop: "43vh" }}>
                                <span>Loading...</span>
                            </div>
                    }
                </div>
            </div>
        </Layout>
    );
};

export default Product;