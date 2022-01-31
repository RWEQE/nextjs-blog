import React from 'react'
import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import dayjs from 'dayjs'
import utilStyles from '../../styles/utils.module.css'

interface PostDataProp {
  title: string;
  id: string;
  date: string;
  contentHtml: string;
}

interface PostProp {
  postData: PostDataProp;
}

const Post: React.FC<PostProp> = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          {dayjs(postData.date).format('YYYY年MM月DD日')}
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
  // Return a list of possible value for id
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    }
  }
  // Fetch necessary data for the blog post using params.id
}
