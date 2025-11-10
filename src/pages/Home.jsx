import React from 'react';
import Banner from '../components/Sections/Banner/Banner';
import TopArtists from '../components/TopArtistsSection/TopArtists';
import CommunityHighlights from '../components/CommunityHighlights/CommunityHighlights';
const Home = () => {
    return (
        <div>
            <section className='mt-30'>
                <Banner></Banner>
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