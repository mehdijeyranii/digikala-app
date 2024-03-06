import React from "react";
import banner from "./../../assets/images/banner/01.webp";
import logo from "./../../assets/images/logo/logo.svg";
import { LuShoppingCart } from "react-icons/lu";
import {
    CiDiscount1,
    CiGift,
    CiLocationOn,
    CiPercent,
    CiShop,
    CiShoppingTag,
} from "react-icons/ci";
import { BiMenu } from "react-icons/bi";
import "./Home.css";
import { NavLink } from "react-router-dom";
import CategoriesMenu from "../../layouts/header/categoriesMenu/CategoriesMenu";
import MainSlider from "../../components/slider/mainSlider/MainSlider";

const Home = () => {
    return (
        <div>
            <header>
                <div className="header-banner">
                    <a href="/">
                        <img src={banner} alt="banner" />
                    </a>
                </div>
                <div className="header-actions">
                    <div className="logo-search">
                        <div className="logo">
                            <a href="/">
                                <img src={logo} alt="digikala" />
                            </a>
                        </div>
                        <div className="search-box">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="11"
                                    cy="11"
                                    r="7"
                                    stroke="#A1A3A8"
                                    strokeWidth="2"
                                />
                                <path
                                    d="M20 20L17 17"
                                    stroke="#A1A3A8"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <input type="text" placeholder="جستجو..." />
                        </div>
                    </div>
                    <div className="user-actions">
                        <button className="btn-login-signup">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7 7.13193V6.61204C7 4.46614 7 3.3932 7.6896 2.79511C8.37919 2.19703 9.44136 2.34877 11.5657 2.65224L15.8485 3.26408C18.3047 3.61495 19.5327 3.79039 20.2664 4.63628C21 5.48217 21 6.72271 21 9.20377V14.7962C21 17.2773 21 18.5178 20.2664 19.3637C19.5327 20.2096 18.3047 20.385 15.8485 20.7359L11.5657 21.3478C9.44136 21.6512 8.37919 21.803 7.6896 21.2049C7 20.6068 7 19.5339 7 17.388V17.066"
                                    stroke="#0C0C0C"
                                />
                                <path
                                    d="M16 12L16.3904 11.6877L16.6403 12L16.3904 12.3123L16 12ZM4 12.5C3.72386 12.5 3.5 12.2761 3.5 12C3.5 11.7239 3.72386 11.5 4 11.5V12.5ZM12.3904 6.68765L16.3904 11.6877L15.6096 12.3123L11.6096 7.31235L12.3904 6.68765ZM16.3904 12.3123L12.3904 17.3123L11.6096 16.6877L15.6096 11.6877L16.3904 12.3123ZM16 12.5H4V11.5H16V12.5Z"
                                    fill="#0C0C0C"
                                />
                            </svg>
                            <span>ورود | ثبت‌نام</span>
                        </button>
                        <div className="separator"></div>
                        <button className="btn-cart">
                            <LuShoppingCart className="shopping-icon" />
                            <span className="badge-cart active"></span>
                        </button>
                    </div>
                </div>
                <div className="header-nav">
                    <nav>
                        <div class="megamenu">
                            <button className="btn-megamenu">
                                <BiMenu className="bi-icons" />
                                <span>دسته بندی کالاها</span>
                            </button>
                            <div class="dropdown-content">
                                <CategoriesMenu />
                            </div>
                        </div>
                        <div className="separator"></div>
                        <ul className="nav-menu">
                            <li>
                                <NavLink className="nav-menu-link">
                                    <CiPercent className="ci-icons" />
                                    <span>شگفت انگیزها</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-menu-link">
                                    <CiShop className="ci-icons" />
                                    <span>سوپر مارکت</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-menu-link">
                                    <CiGift className="ci-icons" />
                                    <span>کارت هدیه</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-menu-link">
                                    <CiShoppingTag className="ci-icons" />
                                    <span>پرفروش ترین ها</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-menu-link">
                                    <CiDiscount1 className="ci-icons" />
                                    <span>تخفیف ها و پیشنهاد ها</span>
                                </NavLink>
                            </li>
                        </ul>
                        <div className="separator"></div>
                        <ul className="nav-menu">
                            <li>
                                <NavLink className="nav-menu-link">
                                    <span>سوالی دارید؟</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-menu-link">
                                    <span>در دیجی کالا بفروشید!</span>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <button className="btn-select-location">
                        <CiLocationOn className="location-icon" />
                        <span>شهر خودتان را انتخاب کنید</span>
                    </button>
                </div>
            </header>
            <main className="main-section">
                <section className="main-slider">
                    <MainSlider />
                </section>
            </main>
        </div>
    );
};

export default Home;
