import Article from './Article';

import articleStyles from '@/styles/Article.module.css';
import Meta from './Meta';

const Articles = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      <Meta title={'articles'} />
      {articles.map((article) => (<Article key={article.id} article={article} />) )}
    </div>
  )
}

export default Articles
