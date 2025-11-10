import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

const HomeLayout = () => {
    // const {state} = useNavigation();
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <section className='min-h-screen'>
                    <Outlet></Outlet>
                    {/* {state == 'loading' ? <Loading></Loading> : <Outlet></Outlet>} */}
                </section>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;