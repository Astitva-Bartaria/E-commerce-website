import React from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/Footer";
import CartProgress from "./CartProgress";

export default function DeliveryOptions() {
    const navigate = useNavigate();
    async function checkMeOut() {
        const userId = localStorage.getItem('userId');
        const token = localStorage.getItem('tokenVal');
        try {
            const respCheckOut = await axios.get(`http://localhost:4000/api/v7/checkout/${userId}`, {
                headers: { "Authorization": "Bearer " + token }
            });
            if (respCheckOut.data) {
                toast.success(respCheckOut.data.message);
            }
            navigate("/");
        } catch (err) {
            if (err.response.data) {
                toast.error(err.response.data.message);
            }
            else {
                console.log(err);
            }
        }
    }
    return (
        <>
            <Header />
            <div className="sectioncolor" style={{ height: "85vh" }}>
                <CartProgress progress={100} positionName={"Payment Option"}></CartProgress>
                <div className="container checkout-container mt-5">
                    <h3 className='container text-center'>Payment options:</h3>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="payment" id="Cod" checked />
                        <label className="form-check-label" htmlFor="payment">
                            Cash On Delivery
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="payment" id="UPI" />
                        <label className="form-check-label" htmlFor="payment">
                            UPI
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="payment" id="Paytm" />
                        <label className="form-check-label" htmlFor="payment">
                            Paytm
                        </label>
                    </div>
                    <button className="btn btn-warning mt-4 fw-bold border-dark" onClick={checkMeOut}>CheckOut</button>
                </div>
            </div>
            <Toaster />
            <Footer />
        </>
    )
}