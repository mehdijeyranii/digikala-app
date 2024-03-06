import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PiCaretLeftBold } from "react-icons/pi";
import getDataMenu from "../../../data/dataMenu";
import "./CategoriesMenu.css";

const CategoriesMenu = () => {
    const categoriesMenu = getDataMenu();
    const [links, setLinks] = useState(categoriesMenu);

    const toggleLink = (index) => {
        setLinks((prevLinks) =>
            prevLinks.map((content, i) => ({
                ...content,
                isOpen: i === index ? true : false,
            }))
        );
    };

    return (
        <div className="content">
            <div className="links-section">
                {links.map((link, index) => (
                    <Link
                        className={link.isOpen ? "item-link active" : "item-link"}
                        to={link.categoryLink}
                        key={index}
                        onMouseEnter={() => toggleLink(index)}
                    >
                        <span className="category-title">
                            {link.categoryTitle}
                        </span>
                        {link.icon}
                    </Link>
                ))}
            </div>
            <div className="links-content">
                {links.map((link, p) => (
                    <div key={p} className={link.isOpen ? "link show" : "link"}>
                        {link.categorizedContent.map((contentLink) => (
                            <div>
                                <Link className="title-box">
                                    <p>{contentLink.mainTitleLink}</p>
                                    <PiCaretLeftBold />
                                </Link>
                                <div className="main-content">
                                    <div className="content-box">
                                        {contentLink.items.map((item, j) => (
                                            <ul className="list-box" key={j}>
                                                <Link
                                                    to={contentLink.link}
                                                    className="label"
                                                >
                                                    <span>{item.label}</span>
                                                    <PiCaretLeftBold />
                                                </Link>
                                                {item.detail.map((value, o) => (
                                                    <li key={o}>
                                                        <Link
                                                            className="item"
                                                            to={
                                                                contentLink.link
                                                            }
                                                        >
                                                            {value}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoriesMenu;
