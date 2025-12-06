import { Header } from "./components/header"
import { Main } from "./components/main"
import { Navbar } from "./components/navbar"

export function LandingPage() {
    return (
        <main className="main-page">
            <Navbar/>
            <Header/>
            <Main/>
        </main>
    )
   
}