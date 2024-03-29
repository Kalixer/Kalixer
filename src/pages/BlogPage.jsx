import React from 'react';
import IntroSection from '@components/IntroSection';
import BlogEntries from '@components/BlogEntries';
import { BlogProvider } from '../hooks/useContext';
import '@styles/BlogPage.scss';

const blogDescription = `Unraveling the labyrinth of an Introvert's mind`

const introEx = <p className='p-intro'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam optio molestias fugiat temporibus laborum, distinctio, est error, sit deserunt libero fugit porro cum reiciendis ducimus numquam accusamus. Dicta, quas similique.</p>

const BlogPage = () => {
    return (
        <div className='BlogPage'>
            <IntroSection/>
            <div className='title'>
                <h1>Hello Blog</h1>
                <p>{blogDescription}</p>
                <p>Or at least trying to</p>
            </div>
            <section className='content'>
                <div className='intro'>
                    {introEx}
                    {introEx}
                    {introEx}
                    {introEx}
                    {introEx}
                </div>
                <BlogEntries/>
                {/* <BlogPageTest/> */}
            </section>
        </div>
    )   
}

export default BlogPage;