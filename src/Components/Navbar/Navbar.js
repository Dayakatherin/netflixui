import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
  <div class="navbar">
        <div class="navbar__brand">
          <img
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt="logo"
            class="brand__logo"
          />
        </div>

        <div class="navbar__nav__items">
          <div class="nav__item">
            <div class="dropdown__container">
              <i class="fas fa-globe"></i>
              <select
                name="languages"
                id="languagesSelect"
                class="language__drop__down"
              >
                <option value="english" selected>English</option>
                <option value="hindi">हिन्दी</option>
              </select>
            </div>
          </div>

          <div class="nav__item">
            <button class="signin__button">Sign in</button>
          </div>
        </div>
   


      <div class="hero">
        <div class="hero__bg__image__container">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/9c5457b8-9ab0-4a04-9fc1-e608d5670f1a/710d74e0-7158-408e-8d9b-23c219dee5df/IN-en-20210719-popsignuptwoweeks-perspective_alpha_website_small.jpg"
            alt="BG hero image"
            class="hero__bg__image"
          />
        </div>
        <div class="hero__bg__overlay"></div>

        <div class="hero__card">
          <h1 class="hero__title">
            Unlimited Movies TV,<br />
            Shows and More    .
          </h1>
          <p class="hero__subtitle">Watch anywhere and cancel anytime.</p>
          <p class="hero__description">
            Ready to watch? Enter your email to create or restart your
            membership .
          </p>

          <div class="email__form__container">
            <div class="form__container">
              <input type="email" class="email__input" placeholder=" " />
              <label class="email__label">Email Address</label>
            </div>
            <button class="primary__button">
              Get Started <i class="fal fa-chevron-right"></i>
            </button>
          </div>
        </div>
        </div>
</div>
    
  )
}

export default Navbar