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
/* AppBar */
.css-hyum1k-MuiToolbar-root {
    width: 100%;
}

.css-hyum1k-MuiToolbar-root {
    justify-content: space-between;

    .MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-edgeStart MuiIconButton-sizeMedium css-6iz4mj-MuiButtonBase-root-MuiIconButton-root {
    align-items: center;
    justify-content: space-between;
    
    }
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


.swiper-slide-shadow-left,
.swiper-slide-shadow-right {
  display: none;
}

/* SLIDER SLICK*/

div.slick-slider.slick-initialized > button.slick-arrow.slick-prev,
div.slick-slider.slick-initialized > button.slick-arrow.slick-next {
    display: none;
}

.slick-slider {
    position: relative;
    display: block;
    box-sizing: border-box;
    -webkit-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
}

.slick-slide > div {
  margin: 0 10px;
}
.slick-list {
  margin: 0 -10px;
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
  max-width: 20.4rem;
  height: 2.2rem;

}

div.react-select__control {
  outline: none;
  box-shadow: none;
  background-color: transparent;
  border-radius: 30px;
  box-shadow: inset 0 -1px 1px #fff;
  font-size: 14px;
  text-align: center;

  .react-select__value-container {
    border: none;
    padding: 0;
    cursor: text;

    .react-select__placeholder,
    .react-select__input-container {
      margin: 0 10px;
      padding: 0 10px;
      color: #fff;
      font-size: 14px;
    }
  }

  .react-select__indicators {
    cursor: pointer;
    svg {
    fill: #fff;
    }
    
  }

  .react-select__option {
    background-color: ${({ theme }) => theme.body};
  }

  .react-select__input-container{
  }
  .react-select__input{
  }



`;
