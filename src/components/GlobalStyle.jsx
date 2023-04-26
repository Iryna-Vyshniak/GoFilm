import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    min-height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background: #B9E4C9;
    font-size: 12px;
    line-height: 1.5;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  main {
    flex: 1 1 auto;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
	margin: 0;
}

ul,
ol {
	margin: 0;
	padding: 0;
	list-style: none;
}

img {
	display: block;
	max-width: 100%;
	height: auto;
}

a {
text-decoration: none;
}

/* SWIPER */

div.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);
  box-sizing: content-box;

}

.swiper-slide {
  text-align: center;
  font-size: 18px;

  display: flex;
  justify-content: center;
  align-items: center;

}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  color: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: center;
}

div.swiper-slide,
swiper-slide {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  transition-property: transform;
  display: block;
}

div.swiper.swiper-initialized.swiper-horizontal.mySwiper{
padding: 30px 0;
}


/* SELECT */
@keyframes scaleIn {
	0% {
		opacity: 0;
		transform: scale(0.9);
	}
	50% {
		opacity: 0.3;
	}
	100% {
		opacity: 1;
		transform: scale(1);
	}
}


 .react-select-container {
  margin: 0 auto;
  width: 100%;

  @media screen and (min-width: 768px) {
    max-width: 500px;
    min-width: 250px;
  }
}

div.react-select__control {
  border: none;
  outline: none;
  box-shadow: none;
  background-color: transparent;
  border-radius: 30px;
  box-shadow: 1px 1px 2px #f3d8a0, inset -1px -1px 1px #fff;
  font-size: 14px;

  .react-select__value-container {
    padding: 0;
    cursor: text;

    .react-select__placeholder,
    .react-select__input-container {
      margin: 0 10px;
      padding: 0 10px;
      color: #fd5523;
      font-size: 14px;
    }
  }

  .react-select__indicators {
    cursor: pointer;
    svg {
    fill: #37966f;
    }
    
  }

  .react-select__menu {
    top: 40px;
    margin: 0;
    padding: 0;
    animation: scaleIn 350ms ease-in-out;

    .react-select__menu-list {
      background-color: rgba(185, 228, 201, 0.773);
      color: #000;
      font-size: 14px;

      .react-select__option {
        font-weight: 700;
        font-size: 14px;
        
    &:hover {
        background-color: #fd5523;
        color: #fff;
      }
    }
  }

  .react-select__single-value {
    padding: 0 10px;
    color: #fff;
    background-color: #fd5523;
    border-radius: 10px;

    .react-select__single-value__label {
      color: #fff;
    }
  }
`;
