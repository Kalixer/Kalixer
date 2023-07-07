import React from 'react';
import IntroSection from '@components/IntroSection';

import '@styles/BlogPage.scss';

const blogDescription = `Unraveling the labyrinth of an Introverts mind`

const BlogPage = () => {
    return (
        <div className='BlogPage'>
            <IntroSection/>
            <div className='title'>
                <h1>Hello About</h1>
                <p>{blogDescription}</p>
            </div>
            <section className='content'></section>
        </div>
    )   
}

export default BlogPage;