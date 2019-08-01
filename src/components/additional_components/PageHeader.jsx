import React from 'react'
import headerImg from "../../assets/img/blog-header.jpeg";

const PageHeader = ({ headerMainImg, title }) => (
  <section className="menu__header-section">
    <div className="overlap"></div>
    <img src={headerImg || headerMainImg} alt="header-img"/>
    <h1>{title || 'Blog'}</h1>
  </section>
);

export default PageHeader