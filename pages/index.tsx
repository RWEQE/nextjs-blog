import React, { ReactNode } from 'react'
import { GetServerSideProps } from 'next'
// import type { NextPage } from 'next'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

interface HomeProp {
  children: ReactNode;
  allPostsData: Array<{
    title: string;
    id: string;
    date: string;
  }>
}

const Home: React.FC<HomeProp> = ({ allPostsData }) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Rap Start · 前端King · 煜神</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://www.nextjs.cn/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                {date}
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export default Home;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    }
  }
}
