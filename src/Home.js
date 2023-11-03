import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://m.media-amazon.com/images/G/01/kindle/journeys/OTk5ZjI1YzAt/OTk5ZjI1YzAt-MTViMTFjZmQt-w960._CB640420224_.gif"
					// src="https://m.media-amazon.com/images/I/71TREgxAVxL._SX3000_.jpg"
					// alt=""
				/>
				<div className="home__row">
					<Product
						id="12321341"
						title="Nintendo Switch with Neon Blue and Neon Red JoyCon"
						price={169.99}
						rating={5}
						image="https://m.media-amazon.com/images/I/61nfFrm5NcL._AC_UL320_.jpg"
					/>

					<Product
						id="49538094"
						title="TCL 43-Inch Class 4K 2160p Ultra HD Smart LED TV HDR10 60Hz Refresh Rate Compatible with Alexa & Google"
						price={329.99}
						rating={4}
						image="https://m.media-amazon.com/images/I/41f34iC9o7L.__AC_SY300_SX300_QL70_FMwebp_.jpg"
					/>
				</div>
				<div className="home__row">
					<Product
						id="4903850"
						title="Shintenchi Convertible Sectional Sofa Couch, Modern Linen Fabric L-Shaped , 3-Seat Sofa Sectional , (Dark Grey)"
						price={469.99}
						rating={4}
						// image="https://m.media-amazon.com/images/I/71ziYfdkMrL._AC_UL480_QL65_.jpg"
						image="https://m.media-amazon.com/images/I/71fd31K0Y4L._AC_SL1500_.jpg"
					/>
					<Product
						id="23445930"
						title="Amazon Basics Healing Ointment and Skin Protectant for Dry & Cracked Skin, Fragrance Free, 14 Ounce, 4-Pack"
						price={31.99}
						rating={4}
						image="https://m.media-amazon.com/images/I/71nNfDeqPEL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
					/>
					<Product
						id="3254354345"
						title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
						price={598.99}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
					/>
				</div>
				<div className="home__row">
					<Product
						id="90829332"
						title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
						price={1094.98}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
					/>
				</div>
				<div className="home__row">
					<Product
						id="1603806"
						title="Amazon Basics 1/2-Inch Extra Thick Exercise Yoga Mat"
						price={25.56}
						rating={4}
						image="https://m.media-amazon.com/images/I/81M+ZqeWYPL._AC_SY300_SX300_.jpg"
					/>
					<Product
						id="16445915"
						title="Amazon Basics 500 Watt Multi-Speed Immersion Hand Blender"
						price={27.99}
						rating={5}
						image="https://m.media-amazon.com/images/I/71UlX3f+4WL._AC_SX522_.jpg"
					/>
					<Product
						id="54354341"
						title="Apple 2023 MacBook Pro Laptop M2 Pro chip with 10-core CPU and 16-core GPU: 14.2-inch Liquid Retina XDR Display, 16GB Unified Memory, 512GB SSD Storage. Works with iPhone/iPad; Space Gray"
						price={1949.99}
						rating={5}
						image="https://m.media-amazon.com/images/G/01/apple/AMZ_FamilyStripe_MacBook_Pro_16_m2._CB615848616_.png"
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
