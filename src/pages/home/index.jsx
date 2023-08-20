/* eslint-disable no-unused-vars */
import AboutUs from 'components/aboutUs'
import Booking from 'components/booking'
import ContactUs from 'components/contactUs'
import Footer from 'components/footer'
import Header from 'components/header'
import Services from 'components/services'
import Team from 'components/team'
import React from 'react'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { i18n } = useTranslation();
  if (i18n.language == "ru-RU") {
    i18n.changeLanguage("ru");
  }
  return (
    <>
      <Header/>
      <main>
        <Services/>
        <div className='bg'>
          <Booking/>
          <AboutUs/>
          <Team/>
        </div>
        <ContactUs/>
      </main>
      <Footer/>
    </>
  )
}

export default Home