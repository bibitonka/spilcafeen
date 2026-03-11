import { Outlet, Navigate } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"

function Layout(){
    const currentUser = localStorage.getItem("currentUser")

    if (!currentUser) {
        return <Navigate to="/" />
    }

    return(
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout
