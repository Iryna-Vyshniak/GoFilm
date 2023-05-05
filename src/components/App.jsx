import { useSearchParams } from 'react-router-dom';
import ScrollToTop from 'react-scroll-up';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RxThickArrowUp } from 'react-icons/rx';
import PropTypes from 'prop-types';

import { GlobalStyle } from 'styles/GlobalStyle';
import UserRoutes from './UserRoutes';

export const App = ({ languages }) => {
  const currentLanguageCode = window.localStorage.getItem('i18nextLng') || 'en';
  const currentLanguage = languages?.find(
    lang => lang.code === currentLanguageCode
  );
  const [searchParams] = useSearchParams({ language: currentLanguageCode });
  const lng = searchParams.get('language') ?? currentLanguageCode;
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lng);
  }, [lng, i18n]);

  return (
    <>
      <UserRoutes
        currentLanguage={currentLanguage}
        languages={languages}
        lng={lng}
      />

      <ScrollToTop
        showUnder={120}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bottom: 35,
          background:
            'linear-gradient(141.22deg, #ffc226 9.4%, #f84119 91.91%)',
          width: '42px',
          height: '42px',
          padding: '8px',
          borderRadius: '50%',
          boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2)',
        }}
      >
        <RxThickArrowUp size="28" strokeWidth="0.2px" />
      </ScrollToTop>
      <ToastContainer transition={Slide} draggablePercent={60} />
      <GlobalStyle />
    </>
  );
};

App.propTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      country_code: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
