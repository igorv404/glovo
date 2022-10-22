import React, {useEffect, useState} from 'react';
import './homePage.css';
import ButtonCyan from './../../components/buttonCyan/ButtonCyan';
import CategoryItem from './../../components/categoryItem/CategoryItem';
import restaurants from './../../assets/images/home/restaurants.webp';
import delivery from './../../assets/images/home/delivery.webp';
import groceries from './../../assets/images/home/groceries.webp';
import downloadApp from './../../assets/images/home/download-app.webp';
import downloadAppLogo from './../../assets/images/home/download-app-logo.webp';
import appStore from './../../assets/images/download buttons/app-store-button.webp';
import googlePlay from './../../assets/images/download buttons/google-play-button.webp';
import axios from "axios";
import {ICategory} from "../../shared/interfaces/ICategory";
import Loader from "../../components/loader/Loader";

function HomePage() {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 3000);
  useEffect(() => {
    axios.get("http://localhost:8080/categories").then(res => setLeaders(res.data.slice(0, 8)));
  }, []);
  return (
    <>
      {
        loading ?
          <Loader/>
          :
          <main>
            <section className="introduction">
              <video width="45%" autoPlay loop muted data-aos="fade-right">
                <source
                  src="https://res.cloudinary.com/glovoapp//video/upload//website_assets/images/landing/address-container-animation.webm"
                  type="video/webm"/>
              </video>
              <div data-aos="fade-up">
                <h1>Food delivery and more</h1>
                <p>Groceries, shops, pharmacies, anything!</p>
                <ButtonCyan text={"Make delivery"} link="/categories"/>
              </div>
            </section>
            <section className="topRating">
              <h2>Top restaurants and more in Ukraine</h2>
              <div className="listOfLeaders">
                {leaders.map((category: ICategory) => (
                  <CategoryItem image={category.image} title={category.title} name={category.name}/>
                ))}
              </div>
            </section>
            <section className="quickInfo">
              <h2>Anything delivered</h2>
              <div className="infoList">
                <div className="info" data-aos="fade-right">
                  <img src={restaurants} alt="restaurants"/>
                  <h3>Your city's top restaurants</h3>
                  <p>With a great variety of restaurants you can order your favourite food or <mark>explore new
                    restaurants nearby!</mark></p>
                </div>
                <div className="info" data-aos="fade-up">
                  <img src={delivery} alt="delivery"/>
                  <h3>Fast delivery</h3>
                  <p>We pride ourselves on speed. Order or send anything in your city and <mark>we'll pick it up and
                    deliver it in minutes.</mark></p>
                </div>
                <div className="info" data-aos="fade-left">
                  <img src={groceries} alt="groceries"/>
                  <h3>Groceries delivery & more</h3>
                  <p>Find anything you need! From <mark>supermarkets to shops, pharmacies to florists</mark> — if it's
                    in your
                    city you can count on us to get it.
                  </p>
                </div>
              </div>
              <ButtonCyan text={"Explore stores around you"} link="/categories"/>
            </section>
            <section className="download">
              <div className="downloadInfo">
                <img src={downloadAppLogo} alt="mobile app"/>
                <h2>Download the app</h2>
                <p>Order anything and track it in real time with the Glovo app.</p>
                <div className="downloadLinks">
                  <img src={appStore} alt="App store"/>
                  <img src={googlePlay} alt="Google play"/>
                </div>
              </div>
              <img src={downloadApp} alt="download app"/>
            </section>
          </main>
      }
    </>
  )
}

export default HomePage;
