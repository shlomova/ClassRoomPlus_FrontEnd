
import './App.css'
import Header from "./Components/header/Header.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Dashboard from "./pages/dashboard/dashboard.jsx";
import Login from "./pages/login/login.jsx";
import Footer from "./Components/footer/Footer.jsx"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: '/dashboard',
        element: <Dashboard/>
    },
    {
        path: '/login',
        element: <Login/>
    }
    // {
    //     path: '/sign-up',
    //     element: <SignUp/>
    // },
    // {
    //     path: '/about',
    //     element: <About/>
    // },
    // {
    //     path: 'courses',
    //     element: <Coureses/>
    // }
]);

function App() {

    return (
        <>
            <Header/>
            <RouterProvider router={router}/>

                {/*<Subjects/>*/}

            <Footer/>

        </>
    )

}

export default App
