import React, { useState } from 'react';
import ReactBnbGallery from 'react-bnb-gallery';

export interface sidebarProps { }

const Sidebar: React.FC<sidebarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const photos = [{
    photo: "img/view_of_the_coast.jpg",
    caption: "'View of the Coast' | Oil on Linen | 36 x 24 in.",
    subcaption: "© 2021 Matthew Conrad",
    thumbnail: "img/view_of_the_coast.jpg",
  }, {
    photo: "img/still_life4.jpg",
    caption: "'Still Life with Fruits and Wine' | Oil on Linen | 40 x 30 in.",
    subcaption: "© 2021 Matthew Conrad",
    thumbnail: "img/still_life4.jpg",
  }, {
    photo: "img/landscape1.jpg",
    caption: "'Storm Clouds Over Tuscany' | Acrylic on Canvas | 20 x 16 in.",
    subcaption: "© 2021 Matthew Conrad",
    thumbnail: "img/landscape1.jpg",
  }, {
    photo: "img/still_life3.jpg",
    caption: "'Afternoon in Talamone' | Acrylic on Canvas | 20 x 16 in.",
    subcaption: "© 2021 Matthew Conrad",
    thumbnail: "img/still_life3.jpg",
  }, {
    photo: "img/still_life2.jpg",
    caption: "'Still Life with Book and Candle' | Acrylic on Canvas | 16 x 18 in.",
    subcaption: "© 2021 Matthew Conrad",
    thumbnail: "img/still_life2.jpg",
  }, {
    photo: "img/still_life1.jpg",
    caption: "'Still Life with Orange and Wine Glass' | Acrylic on Canvas | 16 x 18 in.",
    subcaption: "© 2021 Matthew Conrad",
    thumbnail: "img/still_life1.jpg",
  }, {
    photo: "img/Design/krystal-dazzle_logo.png",
    caption: "'Krystal Dazzle Skincare Logo' | Krystal Dazzle Skincare",
    subcaption: "© 2021 Matthew Conrad",
    thumbnail: "img/Design/krystal-dazzle_logo.png",
  }, {
    photo: "img/Design/sea_moss_turmeric_mask.png",
    caption: "'Sea Moss Turmeric Mask' | Labels for Krystal Dazzle Skincare Products",
    subcaption: "© 2021 Matthew Conrad",
    thumbnail: "img/Design/sea_moss_turmeric_mask.png",
  }, {
    photo: "img/Design/honey_turmeric_soap_large.png",
    caption: "'Honey Turmeric Handcrafted Soap' | Labels for Krystal Dazzle Skincare Products",
    subcaption: "© 2021 Matthew Conrad",
    thumbnail: "img/Design/honey_turmeric_soap_large.png",
  }, {
    photo: "img/Design/rose_petal_oil_soap_large.png",
    caption: "'Rose Petal Oil Handcrafted Soap' | Labels for Krystal Dazzle Skincare Products",
    subcaption: "© 2021 Matthew Conrad",
    thumbnail: "img/Design/rose_petal_oil_soap_large.png",
  }, {
    photo: "img/Design/vanilla_and_honey_soap_large.png",
    caption: "'Vanilla and Honey Handcrafted Soap' | Labels for Krystal Dazzle Skincare Products",
    subcaption: "© 2021 Matthew Conrad",
    thumbnail: "img/Design/vanilla_and_honey_soap_large.png",
  }, {
    photo: "img/Design/lavender_and_goat_milk_soap_large.png",
    caption: "'Lavender and Goat Milk Handcrafted Soap' | Labels for Krystal Dazzle Skincare Products",
    subcaption: "© 2021 Matthew Conrad",
    thumbnail: "img/Design/lavender_and_goat_milk_soap_large.png",
  }, {
    photo: "img/Design/gg20.jpg",
    caption: "'GG Coat of Arms' | Grow Gang Cannabis-Inspired Apparel",
    subcaption: "© 2021 Matthew Conrad",
    thumbnail: "img/Design/gg20.jpg",
  }, {
    photo: "img/Design/gg17.jpg",
    caption: "'Might Smoking Flower Rangers' | Grow Gang Cannabis-Inspired Apparel",
    subcaption: "© 2021 Matthew Conrad",
    thumbnail: "img/Design/gg17.jpg",
  }, {
    photo: "img/Design/gg15.jpg",
    caption: "'Get Lifted' | Grow Gang Cannabis-Inspired Apparel",
    subcaption: "© 2021 Matthew Conrad",
    thumbnail: "img/Design/gg15.jpg",
  }, {
    photo: "img/Design/edibles_mango_front.png",
    caption: "'Mango Flavored Gummy Edibles' | Royal Kreations Cannabis Co.",
    subcaption: "© 2021 Matthew Conrad",
    thumbnail: "img/Design/edibles_mango_front.png",
  }, {
    photo: "img/Design/edibles_strawberry_front.png",
    caption: "'Strawberry Flavored Gummy Edibles' | Royal Kreations Cannabis Co.",
    subcaption: "© 2021 Matthew Conrad",
    thumbnail: "img/Design/edibles_strawberry_front.png",
  }];
  return (
    <>
      <ReactBnbGallery
        show={isOpen}
        onClose={() => setIsOpen(false)}
        photos={photos}
      />
      <div className="sidebar">
        <div className="sidebar-header">
          <div>
            <img className="profile-img" src="img/me.jpg" alt="Matt Conrad | Web Developer"/>
          </div>
        </div>
        <div className="sidebar-nav">
          <div className="sidebar-nav_link">
            <a href="/">
              <svg className="icon nav-link" viewBox="0 0 20 28">
                <path d="M20 21.859c0 2.281-1.5 4.141-3.328 4.141h-13.344c-1.828 0-3.328-1.859-3.328-4.141 0-4.109 1.016-8.859 5.109-8.859 1.266 1.234 2.984 2 4.891 2s3.625-0.766 4.891-2c4.094 0 5.109 4.75 5.109 8.859zM16 8c0 3.313-2.688 6-6 6s-6-2.688-6-6 2.688-6 6-6 6 2.688 6 6z"></path>
              </svg>
              Welcome
            </a>
          </div>
          <div className="sidebar-nav_link">
            <a href="/skills">
              <svg className="icon nav-link" viewBox="0 0 30 28">
                <path d="M14 14c0-2.203-1.797-4-4-4s-4 1.797-4 4 1.797 4 4 4 4-1.797 4-4zM26 22c0-1.094-0.906-2-2-2s-2 0.906-2 2c0 1.109 0.906 2 2 2 1.109 0 2-0.906 2-2zM26 6c0-1.094-0.906-2-2-2s-2 0.906-2 2c0 1.109 0.906 2 2 2 1.109 0 2-0.906 2-2zM20 12.578v2.891c0 0.203-0.156 0.438-0.359 0.469l-2.422 0.375c-0.125 0.406-0.297 0.797-0.5 1.188 0.438 0.625 0.906 1.203 1.406 1.797 0.063 0.094 0.109 0.187 0.109 0.313 0 0.109-0.031 0.219-0.109 0.297-0.313 0.422-2.063 2.328-2.516 2.328-0.125 0-0.234-0.047-0.328-0.109l-1.797-1.406c-0.391 0.203-0.781 0.359-1.203 0.484-0.078 0.797-0.156 1.656-0.359 2.422-0.063 0.219-0.25 0.375-0.469 0.375h-2.906c-0.219 0-0.438-0.172-0.469-0.391l-0.359-2.391c-0.406-0.125-0.797-0.297-1.172-0.484l-1.844 1.391c-0.078 0.078-0.203 0.109-0.313 0.109-0.125 0-0.234-0.047-0.328-0.125-0.406-0.375-2.25-2.047-2.25-2.5 0-0.109 0.047-0.203 0.109-0.297 0.453-0.594 0.922-1.172 1.375-1.781-0.219-0.422-0.406-0.844-0.547-1.281l-2.375-0.375c-0.219-0.031-0.375-0.234-0.375-0.453v-2.891c0-0.203 0.156-0.438 0.359-0.469l2.422-0.375c0.125-0.406 0.297-0.797 0.5-1.188-0.438-0.625-0.906-1.203-1.406-1.797-0.063-0.094-0.109-0.203-0.109-0.313s0.031-0.219 0.109-0.313c0.313-0.422 2.063-2.312 2.516-2.312 0.125 0 0.234 0.047 0.328 0.109l1.797 1.406c0.391-0.203 0.781-0.359 1.203-0.5 0.078-0.781 0.156-1.641 0.359-2.406 0.063-0.219 0.25-0.375 0.469-0.375h2.906c0.219 0 0.438 0.172 0.469 0.391l0.359 2.391c0.406 0.125 0.797 0.297 1.172 0.484l1.844-1.391c0.094-0.078 0.203-0.109 0.313-0.109 0.125 0 0.234 0.047 0.328 0.125 0.406 0.375 2.25 2.063 2.25 2.5 0 0.109-0.047 0.203-0.109 0.297-0.453 0.609-0.922 1.172-1.359 1.781 0.203 0.422 0.391 0.844 0.531 1.281l2.375 0.359c0.219 0.047 0.375 0.25 0.375 0.469zM30 20.906v2.188c0 0.234-2.016 0.453-2.328 0.484-0.125 0.297-0.281 0.562-0.469 0.812 0.141 0.313 0.797 1.875 0.797 2.156 0 0.047-0.016 0.078-0.063 0.109-0.187 0.109-1.859 1.109-1.937 1.109-0.203 0-1.375-1.563-1.531-1.797-0.156 0.016-0.313 0.031-0.469 0.031s-0.313-0.016-0.469-0.031c-0.156 0.234-1.328 1.797-1.531 1.797-0.078 0-1.75-1-1.937-1.109-0.047-0.031-0.063-0.078-0.063-0.109 0-0.266 0.656-1.844 0.797-2.156-0.187-0.25-0.344-0.516-0.469-0.812-0.313-0.031-2.328-0.25-2.328-0.484v-2.188c0-0.234 2.016-0.453 2.328-0.484 0.125-0.281 0.281-0.562 0.469-0.812-0.141-0.313-0.797-1.891-0.797-2.156 0-0.031 0.016-0.078 0.063-0.109 0.187-0.094 1.859-1.094 1.937-1.094 0.203 0 1.375 1.547 1.531 1.781 0.156-0.016 0.313-0.031 0.469-0.031s0.313 0.016 0.469 0.031c0.438-0.609 0.906-1.219 1.437-1.75l0.094-0.031c0.078 0 1.75 0.984 1.937 1.094 0.047 0.031 0.063 0.078 0.063 0.109 0 0.281-0.656 1.844-0.797 2.156 0.187 0.25 0.344 0.531 0.469 0.812 0.313 0.031 2.328 0.25 2.328 0.484zM30 4.906v2.187c0 0.234-2.016 0.453-2.328 0.484-0.125 0.297-0.281 0.562-0.469 0.812 0.141 0.313 0.797 1.875 0.797 2.156 0 0.047-0.016 0.078-0.063 0.109-0.187 0.109-1.859 1.109-1.937 1.109-0.203 0-1.375-1.563-1.531-1.797-0.156 0.016-0.313 0.031-0.469 0.031s-0.313-0.016-0.469-0.031c-0.156 0.234-1.328 1.797-1.531 1.797-0.078 0-1.75-1-1.937-1.109-0.047-0.031-0.063-0.078-0.063-0.109 0-0.266 0.656-1.844 0.797-2.156-0.187-0.25-0.344-0.516-0.469-0.812-0.313-0.031-2.328-0.25-2.328-0.484v-2.188c0-0.234 2.016-0.453 2.328-0.484 0.125-0.281 0.281-0.562 0.469-0.812-0.141-0.313-0.797-1.891-0.797-2.156 0-0.031 0.016-0.078 0.063-0.109 0.187-0.094 1.859-1.094 1.937-1.094 0.203 0 1.375 1.547 1.531 1.781 0.156-0.016 0.313-0.031 0.469-0.031s0.313 0.016 0.469 0.031c0.438-0.609 0.906-1.219 1.437-1.75l0.094-0.031c0.078 0 1.75 0.984 1.937 1.094 0.047 0.031 0.063 0.078 0.063 0.109 0 0.281-0.656 1.844-0.797 2.156 0.187 0.25 0.344 0.531 0.469 0.812 0.313 0.031 2.328 0.25 2.328 0.484z"></path>
              </svg>
              Skills
            </a>
          </div>
          <div className="sidebar-nav_link">
            <a href="/portfolio">
              <svg className="icon nav-link" viewBox="0 0 28 28">
                <path d="M10 4h8v-2h-8v2zM28 14v7.5c0 1.375-1.125 2.5-2.5 2.5h-23c-1.375 0-2.5-1.125-2.5-2.5v-7.5h10.5v2.5c0 0.547 0.453 1 1 1h5c0.547 0 1-0.453 1-1v-2.5h10.5zM16 14v2h-4v-2h4zM28 6.5v6h-28v-6c0-1.375 1.125-2.5 2.5-2.5h5.5v-2.5c0-0.828 0.672-1.5 1.5-1.5h9c0.828 0 1.5 0.672 1.5 1.5v2.5h5.5c1.375 0 2.5 1.125 2.5 2.5z"></path>
              </svg>
              Portfolio
            </a>
          </div>
          <div className="sidebar-nav_link">
            <button onClick={() => setIsOpen(true)}>
              <svg className="icon nav-link" viewBox="0 0 28 28">
                <path d="M25.234 0c1.422 0 2.734 1.062 2.734 2.547 0 0.828-0.328 1.625-0.703 2.359-1.219 2.312-5.313 9.953-7.266 11.75-0.953 0.891-2.078 1.422-3.406 1.422-2.641 0-4.797-2.25-4.797-4.875 0-1.25 0.516-2.469 1.437-3.313l9.969-9.047c0.547-0.5 1.266-0.844 2.031-0.844zM11.031 16.156c0.812 1.578 2.297 2.766 4.016 3.219l0.016 1.109c0.094 4.453-3 7.516-7.469 7.516-5.297 0-7.594-4.219-7.594-9.016 0.578 0.391 2.594 2 3.25 2 0.391 0 0.719-0.219 0.859-0.578 1.328-3.469 3.406-4.094 6.922-4.25z"></path>
              </svg>
              Art/Design
            </button>
          </div>
        </div>
        <div className="social">
          <a href="https://github.com/mvrad">
            <svg className="icon github" viewBox="0 0 32 32">
              <path d="M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z"></path>
            </svg>
          </a>
          <a href="https://linkedin.com/in/mvrad">
            <svg className="icon linkedin" viewBox="0 0 32 32">
              <path d="M27.263 27.269h-4.739v-7.425c0-1.771-0.036-4.049-2.469-4.049-2.471 0-2.848 1.927-2.848 3.919v7.556h-4.739v-15.269h4.552v2.081h0.061c0.636-1.2 2.183-2.467 4.493-2.467 4.801 0 5.689 3.16 5.689 7.273zM7.116 9.911c-1.525 0-2.751-1.235-2.751-2.753 0-1.517 1.227-2.751 2.751-2.751 1.52 0 2.752 1.233 2.752 2.751 0 1.519-1.233 2.753-2.752 2.753zM9.492 27.269h-4.752v-15.269h4.752zM29.633 0h-27.272c-1.305 0-2.361 1.032-2.361 2.305v27.389c0 1.275 1.056 2.305 2.361 2.305h27.268c1.304 0 2.371-1.031 2.371-2.305v-27.389c0-1.273-1.067-2.305-2.371-2.305z"></path>
            </svg>
          </a>
        </div>
        <div className="copyright">
          <p>
          &#169; 2021. Made with <span className="coffee">&#9749;</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
