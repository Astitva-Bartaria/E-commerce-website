import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";

export default function OrderHistory() {
    const [allOrders, setAllOrders] = useState([]);
    async function getOrderHistory() {
        const userId = localStorage.getItem('userId');
        const token = localStorage.getItem('tokenVal');
        try {
            const respAllOrders = await axios.get(`http://localhost:4000/api/v7/orders/${userId}`, {
                headers: { "Authorization": "Bearer " + token }
            });
            if (respAllOrders.data) {
                setAllOrders(respAllOrders.data.orderPlaced);
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
        getOrderHistory();
    }, []);
    if (allOrders.length === 0) {
        return (
            <div className="container sectioncolor w-100" style={{height:"100vh"}}>
                <h4 className='container text-center mt-5'>No order yet! Shop now.</h4>
            </div>
        )
    }
    else {
        return (
            <>
                <div className="container sectioncolor w-100">
                    <div className="row justify-content-center">
                        {
                            allOrders.map((singleOrder) => {
                                return (
                                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center align-items-center order-history mt-3">
                                        <div className="card productcards">
                                            <img src={singleOrder.productId.productImage} className="card-img-top productimage" alt="images" />
                                            <div className="card-body text-center productcardbody" style={{ color: "white" }}>
                                                <Link to={{ pathname: `/productDetailed/${singleOrder.productId._id}` }} target='_blank'><h5 className="producttitle card-title text-decoration-underline" role='button'>{singleOrder.productId.productName}</h5></Link>
                                                <h6 className="card-title">{singleOrder.productId.productPrice}</h6>
                                                <p className="card-text">Type : {singleOrder.productId.productSubCategory}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <Toaster />
                </div>
            </>

        )
    }
}