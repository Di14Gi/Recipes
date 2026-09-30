import { useState } from 'react';
import { useRecipes } from '../hooks/useRecipes';

function HomePage() {
  const { recipes, dispatch } = useRecipes();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: 'ADD_RECIPE',
      payload: {
        title,
        category,
        time: 30,
        ingredients: [],
        steps: [],
      },
    });

    setTitle('');
    setCategory('');
  };

  return (
    <div className="container">
      <h1 className="page-title">Рецепты</h1>

      <div className="search-box">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Поиск рецептов..."
          className="search-input"
        />
      </div>

      <form onSubmit={handleSubmit} className="recipe-form">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Название рецепта"
          required
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Категория"
          required
        />
        <button type="submit">Добавить</button>
      </form>

      {filteredRecipes.length === 0 ? (
        <p className="empty-message">Ничего не найдено</p>
      ) : (
        <div className="recipes-grid">
          {filteredRecipes.map(({ id, title, category, time, favorite }) => (
            <div key={id} className="recipe-card">
              <h3>{title}</h3>
              <p>Категория: {category}</p>
              <p>Время: {time} мин</p>

              <button
                className="recipe-favorite"
                onClick={() => dispatch({ type: 'TOGGLE_FAVORITE', payload: { id } })}
              >
                {favorite ? '★ Убрать' : '☆ В избранное'}
              </button>

              <button
                className="recipe-delete"
                onClick={() => dispatch({ type: 'DELETE_RECIPE', payload: { id } })}
              >
                Удалить
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;