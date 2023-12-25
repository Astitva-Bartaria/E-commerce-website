import React from 'react'

export default function CardCarousel() {
  return (
    <div>
      <section className="homesection2 sectionpadding sectioncolor">
        <div className="container-fluid" style={{padding: "15px"}}>
            <h1 className="text-center productheading">Featured Products</h1>
        </div>
        <div className="container-fluid text-center">
            <div id="carouselExample" className="carousel slide carousel-dark" data-bs-ride="carousel">
                <div className="carousel-indicators" style={{bottom: "-50px"}}>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="card-wrapper">
                            <div className="card productcards featuredproducts">
                                <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSMkEqDN06845rSAOCKRkXMedaUufS1hdqASVoPp9uM4May1nfU4M9S5XFhwGjZlzY8ZO7WN0WmD-saicK0TuAsXi8zGB1-LDTG3pQ4K1M&usqp=CAE" className="card-img-top productimage" alt="images" />
                                <div className="card-body text-center productcardbody" style={{color: "white"}}>
                                    <h5 className="card-title">White black hoodie</h5>
                                    <h6 className="card-title">Rs. 2499</h6>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, maxime!</p>
                                </div>
                            </div>
                            <div className="card productcards featuredproducts">
                                <img src="https://assets.ajio.com/medias/sys_master/root/20231124/7OCB/6560dd4eafa4cf41f59e7489/-473Wx593H-442271713-ltbrown-MODEL.jpg" className="card-img-top productimage" alt="images" />
                                <div className="card-body text-center productcardbody" style={{color: "white"}}>
                                    <h5 className="card-title">Brown Jacket</h5>
                                    <h6 className="card-title">Rs. 2499</h6>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, maxime!</p>
                                </div>
                            </div>
                            <div className="card productcards featuredproducts">
                                <img src="https://assets.ajio.com/medias/sys_master/root/20231124/vpU2/6560c376ddf779151999ced9/-473Wx593H-442271712-ltgrey-MODEL.jpg" className="card-img-top productimage" alt="images" />
                                <div className="card-body text-center productcardbody" style={{color: "white"}}>
                                    <h5 className="card-title">White Sweatshirt</h5>
                                    <h6 className="card-title">Rs. 2499</h6>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, maxime!</p>
                                </div>
                            </div>
                            <div className="card productcards featuredproducts">
                                <img src="https://assets.ajio.com/medias/sys_master/root/20231124/iPsZ/6560c72addf779151999ec2d/-473Wx593H-442271742-plum-MODEL.jpg" className="card-img-top productimage" alt="images" />
                                <div className="card-body text-center productcardbody" style={{color: "white"}}>
                                    <h5 className="card-title">Red Sweatshirt</h5>
                                    <h6 className="card-title">Rs. 2499</h6>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, maxime!</p>
                                </div>
                            </div>
                            <div className="card productcards featuredproducts">
                                <img src="https://assets.ajio.com/medias/sys_master/root/20230621/8xLY/6492302342f9e729d75cac73/-473Wx593H-463298317-black-MODEL.jpg"  className="card-img-top productimage" alt="images" />
                                <div className="card-body text-center productcardbody" style={{color: "white"}}>
                                    <h5 className="card-title">Black Denim Jacket</h5>
                                    <h6 className="card-title">Rs. 2499</h6>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, maxime!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card-wrapper">
                            <div className="card productcards featuredproducts">
                                <img src="https://assets.ajio.com/medias/sys_master/root/20230623/E0re/6494fc7842f9e729d785c39b/-473Wx593H-464634840-multi-MODEL.jpg" className="card-img-top productimage" alt="images" />
                                <div className="card-body text-center productcardbody" style={{color: "white"}}>
                                    <h5 className="card-title">Designer Dress</h5>
                                    <h6 className="card-title">Rs. 2999</h6>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, maxime!</p>
                                </div>
                            </div>
                            <div className="card productcards featuredproducts">
                                <img src="https://assets.ajio.com/medias/sys_master/root/20231102/zi6D/6543ce02ddf77915196aef2c/-473Wx593H-466767249-blue-MODEL.jpg" className="card-img-top productimage" alt="images" />
                                <div className="card-body text-center productcardbody" style={{color: "white"}}>
                                    <h5 className="card-title">Blue Dress</h5>
                                    <h6 className="card-title">Rs. 2999</h6>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, maxime!</p>
                                </div>
                            </div>
                            <div className="card productcards featuredproducts">
                                <img src="https://assets.ajio.com/medias/sys_master/root/20230928/6GX2/65158340ddf77915190c8653/-473Wx593H-466646669-black-MODEL.jpg" className="card-img-top productimage" alt="images" />
                                <div className="card-body text-center productcardbody" style={{color: "white"}}>
                                    <h5 className="card-title">Black Dress</h5>
                                    <h6 className="card-title">Rs. 2999</h6>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, maxime!</p>
                                </div>
                            </div>
                            <div className="card productcards featuredproducts">
                                <img src="https://assets.ajio.com/medias/sys_master/root/20230907/ow1O/64f91d04ddf7791519c0b1fe/-473Wx593H-466542753-blue-MODEL.jpg" className="card-img-top productimage" alt="images" />
                                <div className="card-body text-center productcardbody" style={{color: "white"}}>
                                    <h5 className="card-title">Blue Dress</h5>
                                    <h6 className="card-title">Rs. 2999</h6>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, maxime!</p>
                                </div>
                            </div>
                            <div className="card productcards featuredproducts">
                                <img src="https://assets.ajio.com/medias/sys_master/root/20231115/wCJP/65550eb7ddf779151982ffcb/-473Wx593H-466797650-multi-MODEL.jpg" className="card-img-top productimage" alt="images" />
                                <div className="card-body text-center productcardbody" style={{color: "white"}}>
                                    <h5 className="card-title">White dress</h5>
                                    <h6 className="card-title">Rs. 2999</h6>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, maxime!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card-wrapper">
                            <div className="card productcards featuredproducts">
                                <img src="https://img.freepik.com/free-photo/full-length-portrait-cute-little-kid-boy-stylish-jeans-clothes-smiling-standing-black-kids-fashion-concept_155003-20308.jpg?w=2000" className="card-img-top productimage" alt="images" />
                                <div className="card-body text-center productcardbody" style={{color: "white"}}>
                                    <h5 className="card-title">Denim Jacket + White T-shirt</h5>
                                    <h6 className="card-title">Rs. 1799</h6>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            <div className="card productcards featuredproducts">
                                <img src="https://i.pinimg.com/236x/df/ec/f5/dfecf554624d633474f15b65fdbdc830--korean-fashion-fashion-kids.jpg" className="card-img-top productimage" alt="images" />
                                <div className="card-body text-center productcardbody" style={{color: "white"}}>
                                    <h5 className="card-title">fawn Sweater</h5>
                                    <h6 className="card-title">Rs. 1099</h6>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, maxime!</p>
                                </div>
                            </div>
                            <div className="card productcards featuredproducts">
                                <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/21388838/2023/5/30/95a07991-56d0-4614-aeb8-5c77335542661685442153864-HERENOW-Boys-Micro-Checked-Opaque-Casual-Shirt-7851685442153-1.jpg" className="card-img-top productimage" alt="images" />
                                <div className="card-body text-center productcardbody" style={{color: "white"}}>
                                    <h5 className="card-title">Black Check Shirt</h5>
                                    <h6 className="card-title">Rs. 999</h6>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, maxime!</p>
                                </div>
                            </div>
                            <div className="card productcards featuredproducts">
                                <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/16980042/2022/1/29/51c28f35-92e3-4e2f-8c04-3bfeb78faafd1643462246859pspeachesWhiteNetDress1.jpg" className="card-img-top productimage" alt="images" />
                                <div className="card-body text-center productcardbody" style={{color: "white"}}>
                                    <h5 className="card-title">White Frock</h5>
                                    <h6 className="card-title">Rs. 1099</h6>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, maxime!</p>
                                </div>
                            </div>
                            <div className="card productcards featuredproducts">
                                <img src="https://rukminim2.flixcart.com/image/550/650/xif0q/kids-t-shirt/s/z/t/8-9-years-jc-by22-rn-hs-nvy-wht-dont-jump-cuts-original-imagksuyty8yqaus.jpeg?q=90&crop=false" className="card-img-top productimage" alt="images" />
                                <div className="card-body text-center productcardbody" style={{color: "white"}}>
                                    <h5 className="card-title">Black T-shirt</h5>
                                    <h6 className="card-title">Rs. 1099</h6>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, maxime!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </section>
    </div>
  )
}
