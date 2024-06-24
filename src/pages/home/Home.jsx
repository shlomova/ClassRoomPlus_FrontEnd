import HeroSection from './../../Components/hero-section/HeroSection.jsx'
import CoursesSection from './../../Components/courses-section/CoursesSection.jsx'
// import TeachersSection from './../../Components/teachers-section/TeachersSection.jsx'
import Header from './../../Components/header/Header.jsx'
import Chatbot from './../../Components/chatbot/chatbot.jsx'
import Footer from './../../Components/footer/Footer.jsx'
import UtilsCheckUserAndToken from '../../utils/utilsCheckUserAndToken'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'

const Home = () => {
  const checkUserAndToken= UtilsCheckUserAndToken()
    useEffect(() => {
        checkUserAndToken()
      }, [])
    return (
        <>
            <Chatbot />
            <Header showLinks={true} showPartLinks={false} />
            <Outlet />
          
            <>
                <HeroSection />
            </>
            <>
                <CoursesSection />
            </>
            <Footer />
            <>
                {/* <TeachersSection/> */}
            </>
        </>
    )
}
export default Home