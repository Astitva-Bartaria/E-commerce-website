import Header from "../components/header";
import Footer from "../components/Footer";
import CartProgress from "./CartProgress";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

export default function CartSummary() {
    const [myTotal, setMyTotal] = useState(0);
    async function getTotal() {
        const userId = localStorage.getItem('userId');
        const token = localStorage.getItem('tokenVal');
        try {
            const respTotal = await axios.get(`http://localhost:4000/api/v7/summary/${userId}`, {
                headers: { "Authorization": "Bearer " + token }
            });
            if (respTotal.data) {
                setMyTotal(respTotal.data.grandTotal);
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
        getTotal();
    }, []);
    return (
        <>
            <Header />
            <CartProgress progress={50} positionName={"Summary"}></CartProgress>
            <div className="col px-5 sectioncolor" style={{ height: "80vh" }} id="cartsection2">
                <div className="card">
                    <div className="card-header text-center">
                        <h1>Summary</h1>
                    </div>
                    <div className="card-body text-center">
                        <div className="row">
                            <table className="table table-borderless">
                                <tr>
                                    <td className="text-start">Cost</td>
                                    <td className="text-end">Rs. {myTotal}</td>
                                </tr>
                                <tr>
                                    <td className="text-start">Shipping</td>
                                    <td className="text-end">Rs. 100</td>
                                </tr>
                            </table>
                            <hr />
                            <table className="table table-borderless">
                                <thead>
                                    <tr>
                                        <th className="text-start">Total</th>
                                        <th className="text-end">Rs. {myTotal + 100}</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div className="container">
                            <div className="row">
                                <Link to="/Addaddress" className="checkoutbtn">
                                    <div className='d-grid gap-2'>
                                        <button className="btn btn-warning fw-bold" id="cartbtn">Checkout</button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster />
            <Footer />
        </>
    )
}