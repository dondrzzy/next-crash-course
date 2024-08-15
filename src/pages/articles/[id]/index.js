import { server } from '@/config';
import Link from 'next/link';

// import { useRouter } from 'next/router';

const Article = ({ article }) => {
  // const router = useRouter();
  // const { id } = router.query;
  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Back</Link>
    </>

  )
}

export const getStaticProps = async (context) => {
  console.log('context: ', context);
  const res = await fetch(`${server}/api/articles/${context.params.id}`);
  const article = await res.json();
  return {
    props: { article }
  }
}
// export const getStaticProps = async (context) => {
//   console.log('context: ', context);
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//   const article = await res.json();
//   return {
//     props: { article }
//   }
// }

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles/`);
  const articles = await res.json();
  const ids = articles.map(article => article.id);
  const paths = ids.map(id => ({params: { id: id.toString()}}));
  console.log('ids', ids);
  console.log('paths', paths);
  return {
    paths,
    fallback: false,
  }
}
// export const getStaticPaths = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const articles = await res.json();
//   const ids = articles.map(article => article.id);
//   const paths = ids.map(id => ({params: { id: id.toString()}}));
//   console.log('ids', ids);
//   console.log('paths', paths);
//   return {
//     paths,
//     fallback: false,
//   }
// }

export default Article;
