import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/Footer";
import CartProgress from "./CartProgress";

export default function ShippingAddress() {
    const [allAddress, setAllAddress] = useState([]);
    const navigate = useNavigate();
    const [shippingDetails, setShippingDetails] = useState({
        fullAddress: "",
        landMark: "",
        forAddress: "Home"
    })
    function monitorShippingDetail(event) {
        setShippingDetails((prev) => ({
            ...prev, [event.target.id]: event.target.value
        }))
    }
    async function submitShipping(event) {
        event.preventDefault();
        const userId = localStorage.getItem('userId');
        const token = localStorage.getItem('tokenVal');
        try {
            const respShipping = await axios.post(`http://localhost:4000/api/v7/addShipping/${userId}`, shippingDetails, {
                headers: { "Authorization": "Bearer " + token }
            });
            if (respShipping.data) {
                toast.success(respShipping.data.message);
            }
            getAllShipping();
            navigate('/checkout');
        } catch (err) {
            if (err.response.data) {
                toast.error(err.response.data.message);
            }
            else {
                console.log(err);
            }
        }
    }
    async function getAllShipping() {
        const userId = localStorage.getItem('userId');
        const token = localStorage.getItem('tokenVal');
        try {
            const respAllShipping = await axios.get(`http://localhost:4000/api/v7/allShipping/${userId}`, {
                headers: { "Authorization": "Bearer " + token }
            });
            if (respAllShipping.data) {
                setAllAddress(respAllShipping.data.allShipping);
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
        getAllShipping();
    }, []);
    return (
        <>
            <div className="sectioncolor">
                <Header />
                <CartProgress progress={75} positionName={"Shipping Address"}></CartProgress>
                <form onSubmit={submitShipping} className="container py-5">
                    <label className="form-label contactlabel">Full Address:</label> <br />
                    <textarea cols="70" rows="5" placeholder="Enter your Full Address" className="form-control" id="fullAddress" value={shippingDetails.fullAddress} onChange={monitorShippingDetail} required></textarea> <br />
                    <label className="form-label contactlabel">LandMark:</label> <br />
                    <input type="text" className="form-control" id="landMark" placeholder="Enter Nearby Marks" value={shippingDetails.landMark} onChange={monitorShippingDetail} required /> <br />
                    <label className="form-label contactlabel">Address Type:</label> <br />
                    <select className="form-select w-25" aria-label="Default select example" id="forAddress" onChange={monitorShippingDetail} value={shippingDetails.forAddress}>
                        <option value="Home" selected>Home</option>
                        <option value="Work">Work</option>
                    </select>
                    <button className="btn btn-warning mt-4" id="contactbtn">Submit</button>
                </form>
                <h3 className="text-center">Deliver for one of these saved address:</h3>
                {
                    allAddress.length === 0 ? (<h4 className="text-center py-5">Add address and they will be visible here!</h4>) : (allAddress.map((singleAddress) => {
                        return (
                            <div className="col pb-5">
                                <div className="container">
                                    <div className="row">
                                        <button type="button" className="btn btn-outline-warning border-dark mt-4" style={{ color: "black" }} onClick={() => {
                                            setShippingDetails({
                                                fullAddress: singleAddress.fullAddress,
                                                landMark: singleAddress.landMark,
                                                forAddress: singleAddress.forAddress
                                            })
                                        }}>
                                            <h5>{singleAddress.fullAddress}</h5>
                                            <h5>{singleAddress.landMark}</h5>
                                            <h5>{singleAddress.forAddress}</h5>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    }))
                }
                <Toaster />
                <Footer />
            </div>
        </>
    )
}