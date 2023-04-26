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
.react-select__menu-list{
            background-color: rgba(185, 228, 201, 0.773);
            color: #000;
             font-size: 14px;
        }
        .react-select__option{
           
            font-weight: 700;
        }
        .react-select__option:hover{
            background-color: #FD5523;
            color: #fff;
        }
        .react-select-container {
            &.genres {
                width: 100%;
                @media screen and (min-width: 768px) {
                    max-width: 500px;
                    min-width: 250px;
                }
            }
            }
            .react-select__control {
                border: 0;
                outline: 0;
                box-shadow: none;
                background-color: rgba(255, 255, 255, 0.212);
                border-radius: 20px;
 font-size: 14px;

                .react-select__value-container {
                    .react-select__placeholder,
                    .react-select__input-container {
                        color: #fff;
                        margin: 0 10px;
                    }
                }
                .react-select__single-value {
                    color: #fff;
                }
                .react-select__multi-value {
                    background-color: #FD5523;
                    border-radius: 10px;
                     color: #fff;
                    .react-select__multi-value__label {
                        color: #fff;
                    }
                    .react-select__multi-value__remove {
                        background-color: transparent;
                        color: rgb(169, 32, 32);
                        cursor: pointer;
                        &:hover {
                            color: #37966F;
                        }
                    }
                }
            }
            .react-select__menu {
                top: 40px;
                margin: 0;
                padding: 0;
            }
        }
    
`;
