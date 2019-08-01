import React from 'react'
import PageHeader from './additional_components/PageHeader'
import PostList from '../containers/PostList'

import './../style/home.scss'

const Home = () => (
  <main>
    <PageHeader />
    <PostList />
  </main>
);

export default Home