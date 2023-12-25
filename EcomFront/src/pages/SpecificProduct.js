import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";
import Header from "../components/header";
import Footer from "../components/Footer";

export default function SpecificProduct() {
    const location = useLocation();
    const specType = location.pathname.split("/")[1];
    const [specPro, setSpecPro] = useState([]);

    async function getSpecProduct() {
        try {
            const respSpecPro = await axios.get(`http://localhost:4000/api/v7/product/${specType}`);
            if (respSpecPro.data) {
                setSpecPro(respSpecPro.data.productData);
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
        getSpecProduct();
        // eslint-disable-next-line
    }, [specType]);
    if (specPro.length === 0) {
        return (
            <>
                <Header />
                <div className="sectioncolor">
                    <h2 className='container text-center pt-5' style={{ height: "85vh" }}>No Product for {specType}</h2>
                </div>
                <Footer />
            </>
        )
    }
    else {
        return (
            <>
                <Header />
                <div className="d-flex flex-wrap p-5 sectioncolor justify-content-center">
                    {
                        specPro.map((singleSpec) => {
                            return (
                                <div className="card productcards m-3" key={singleSpec._id}>
                                    <img src={singleSpec.productImage} className="card-img-top productimage" alt="images" />
                                    <div className="card-body text-center productcardbody" style={{ color: "white" }}>
                                        <h5 className="card-title">{singleSpec.productName}</h5>
                                        <h6 className="card-title">Rs. {singleSpec.productPrice}</h6>
                                        <p className="card-text">{singleSpec.productDesc}</p>
                                        <a href="/" className="btn btn-warning productcardbtn">
                                            <i className="cart fa fa-shopping-cart productcarticon"></i>Add to cart
                                        </a>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <Toaster />
                </div>
                <Footer />
            </>
        )
    }
}