import CommunityHighlights from '../CommunityHighlights/CommunityHighlights';
import FeaturedArtWork from '../FeaturedArtWork/FeaturedArtWork';
import Banner from '../Sections/Banner/Banner';
import TopArtists from '../TopArtistsSection/TopArtists';
const Home = () => {
    return (
        <div>
            <section className='mt-30'>
                <Banner></Banner>
            </section>
            <section className='mt-30'>
                <FeaturedArtWork></FeaturedArtWork>
            </section>
            <section className='mt-10'>
                <TopArtists></TopArtists>
            </section>
            <section>
                <CommunityHighlights></CommunityHighlights>
            </section>
        </div>
    );
};

export default Home;