import Link from 'next/link';
import articleStyle from '@/styles/Article.module.css';

const Article = ({ article }) => {
  return (
    <Link href="/articles/[id]" as={`/articles/${article.id}`}>
      <div className={articleStyle.card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.body}</p>
      </div>
    </Link>
  )
}

export default Article;
