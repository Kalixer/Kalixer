import React from 'react';
import blogData from '@utils/blogData';
import MoreRead from '@components/MoreRead';

import '@styles/BlogTest.scss';



const text1 = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur eum optio, at non voluptate hic voluptates deleniti obcaecati harum. Qui eius voluptate, nemo voluptatum soluta sed praesentium iure maiores quibusdam!`

const Blog3 = () => {
    
    return (
        <div className='BlogTest'>
            <figure className='BlogImage'>
                <img src={blogData[2].image} alt="" />
            </figure>
            <div className='Title'>
                <h1>Title {blogData[2].title}</h1>
            </div>
            <div className='blog-content'>
                <p>{text1}</p>
                <p>{text1}</p>
                <p>{text1}</p>
                <p>{text1}</p>
                <p>{text1}</p>
                <p>{text1}</p>
            </div>
            <MoreRead current={2}/>
        </div>
    )
}

export default Blog3;