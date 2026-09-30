import { useState } from 'react';
import { useRecipes } from '../hooks/useRecipes';

function HomePage() {
  const { recipes, dispatch } = useRecipes();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

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

    // Очищаем форму
    setTitle('');
    setCategory('');
  };

  return (
    <div className="container">
      <h1 className="page-title">Рецепты</h1>

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

      <div className="recipes-grid">
        {recipes.map(({ id, title, category, time }) => (
          <div key={id} className="recipe-card">
            <h3>{title}</h3>
            <p>Категория: {category}</p>
            <p>Время: {time} мин</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;