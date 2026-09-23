import { Outlet } from "react-router-dom";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";


function Layout() {


    return (
        <>
            <header className="header">
                <Header />
            </header>

            <main className="main">
                <Outlet />
            </main>

            <footer className="footer">
                <Footer />
            </footer>
        </>
    )
}

export default Layout;