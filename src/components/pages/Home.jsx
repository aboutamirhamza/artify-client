import { useOutletContext } from 'react-router';
import CommunityHighlights from '../CommunityHighlights/CommunityHighlights';
import FeaturedArtWork from '../FeaturedArtWork/FeaturedArtWork';
import Banner from '../Sections/Banner/Banner';
import TopArtists from '../TopArtistsSection/TopArtists';
const Home = () => {

    const { dark } = useOutletContext();

    return (
        <div>
            <section className='mt-30'>
                <Banner dark={dark}></Banner>
            </section>
            <section className='mt-30'>
                <FeaturedArtWork dark={dark}></FeaturedArtWork>
            </section>
            <section className='mt-10'>
                <TopArtists dark={dark}></TopArtists>
            </section>
            <section>
                <CommunityHighlights dark={dark}></CommunityHighlights>
            </section>
        </div>
    );
};

export default Home;