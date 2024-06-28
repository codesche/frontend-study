import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import MainWrap from "./MainWrap";
import Footer from "./Footer";

// Headers
// Nav
// Main - Wrap => Article, Aside
// Footer

const blogData = {
    header: {
        title: 'React.js',
        description: 'react blog'
    },

    nav: [
        {name: 'html5', linkUrl: '#'},
        {name: 'CSS', linkUrl: '#'},
        {name: 'Javascript', linkUrl: '#'},
        {name: 'jquery', linkUrl: '#' },
        {name: 'react.js', linkUrl: '#'}
    ],

    mainwrap: {
        posts: [
            {title: 'aaa', date: '2024.06.10', imgUrl: 'git.png', content: '안녕하세요11'},
            {title: 'bbb', date: '2024.06.20', imgUrl: 'git.png', content: '안녕하세요12'},
            {title: 'ccc', date: '2024.06.30', imgUrl: 'git.png', content: '안녕하세요13'}
        ],
        recentPosts: [
            {name: '111', linkUrl: '#'},
            {name: '222', linkUrl: '#'},
            {name: '333', linkUrl: '#'},
        ]
    },

    copyright: 'copyright by minsung'
}


function BlogMain() {

    return (
        <div>
            <Header header={blogData.header}></Header>
            <Nav nav={blogData.nav}></Nav>
            <MainWrap posts={blogData.mainwrap.posts} recentPosts={blogData.mainwrap.recentPosts}></MainWrap>
            <Footer copyright={blogData.copyright}></Footer>
        </div>
    )
    
}

export default BlogMain