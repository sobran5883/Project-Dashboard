import Banner from '../components/Banner';
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

function Layout(){
    return(
        <>
         <Banner/>
         <Header/>
         <Outlet/>
        </>
    )
}
export default Layout;