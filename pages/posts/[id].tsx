import Head from 'next/head'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import dayjs from 'dayjs'
import utilStyles from '../../styles/utils.module.css'

interface PostDataProp {
  title: string;
  id: strig;
  date: string;
}

interface PostProp {
  postData: PostDataProp;
}

const Post = ({ postData }): PostProp => {
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

export async function getStaticPaths() {
  const paths = getAllPostIds()
  console.log('===============> paths', paths);
  return {
    paths,
    fallback: false,
  }
  // Return a list of possible value for id
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    }
  }
  // Fetch necessary data for the blog post using params.id
}
