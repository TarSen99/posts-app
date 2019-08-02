import React from 'react'
import PageHeader from './additional_components/PageHeader'
import PostList from '../containers/PostList'
import Pagination from '../containers/Pagination'

import './../style/home.scss'

const Home = () => (
  <main>
    <PageHeader />
    <PostList />
    <Pagination />
  </main>
);

export default Home