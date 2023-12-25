import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export default function AllRatings() {
    const location = useLocation();
    const productId = location.pathname.split("/")[2];

    const [allRatings, setAllRatings] = useState([]);
    async function getAllRatings() {
        try {
            const respRatingDe = await axios.get(`http://localhost:4000/api/v7/productDetails/${productId}`);
            if (respRatingDe.data) {
                console.log(respRatingDe.data)
                setAllRatings(respRatingDe.data.ratings);
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
        getAllRatings();
    }, []);
    if (allRatings.length === 0) {
        return (
            <>
                <div>
                    <h4 className="container text-center py-5">No Rating Available For this product!</h4>
                </div>
            </>
        )
    }
    else {
        return (
            <div>
                <h4 className="container text-center my-3">All Ratings:-</h4>
                {
                    allRatings.map((singleRating) => {
                        return (
                            <>
                                <div className="container shadow p-4 my-4" style={{backgroundColor:"#ffc107", borderRadius:"10px"}}>
                                    <h6>Rated by : {singleRating.ratedBy.fullName}</h6>
                                    <p>Rating Message : {singleRating.messageUser}</p>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        )
    }
}