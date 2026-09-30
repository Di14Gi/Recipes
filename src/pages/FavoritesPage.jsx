import { useRecipes } from '../hooks/useRecipes';

function FavoritesPage() {
  const { recipes } = useRecipes();
  const favorites = recipes.filter(({ favorite }) => favorite);

  return (
    <div className="container">
      <h1 className="page-title">Избранное</h1>

      {favorites.length === 0 ? (
        <p className="empty-message">Нет избранных рецептов</p>
      ) : (
        <div className="recipes-grid">
          {favorites.map(({ id, title, category, time }) => (
            <div key={id} className="recipe-card">
              <h3>{title}</h3>
              <p>Категория: {category}</p>
              <p>Время: {time} мин</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;