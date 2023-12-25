import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import Header from '../components/header'
import Footer from '../components/Footer'
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

export default function AllProducts() {
    const [allProducts, setAllProducts] = useState([]);

    async function allProductFetch() {
        try {
            const respAllPro = await axios.get('http://localhost:4000/api/v7/allProduct');
            if (respAllPro.data) {
                setAllProducts(respAllPro.data.allProD);
            }
        } catch (err) {
            if (err.response.data) {
                toast.error(err.response.data.message);
            }
            else {
                console.log(err);
            }
        }
    }
    useEffect(() => {
        allProductFetch();
    }, []);
    return (
        <>
            <section className="sectionpadding sectioncolor">
                <Header />
                <div className="container-fluid" style={{ padding: "15px" }}>
                    <h1 className="text-center productheading">All Products</h1>
                    <div className='d-flex flex-wrap justify-content-center'>
                        {
                            allProducts.length === 0 ? (<h3 style={{ height: "50vh" }} className='container text-center mt-5'>No Product Available Right Now!</h3 >) : (
                                allProducts.map((singlePrd) => {
                                    return (<ProductCard pId={singlePrd._id} pName={singlePrd.productName} pPrice={singlePrd.productPrice} pDesc={singlePrd.productDesc} pImg={singlePrd.productImage} />)
                                })
                            )
                        }
                    </div>
                </div>
            </section>
            <Footer />
            <Toaster />
        </>
    )
}
