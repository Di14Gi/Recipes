import { memo } from 'react';

function RecipeCard({ recipe, onToggle, onDelete }) {
    const { id, title, category, time, favorite } = recipe;

    return (
        <div className="recipe-card">
            <h3>{title}</h3>
            <p>Категория: {category}</p>
            <p>Время: {time} мин</p>

            <button
                className="recipe-favorite"
                onClick={() => onToggle(id)}
            >
                {favorite ? '★ Убрать' : '☆ В избранное'}
            </button>

            <button
                className="recipe-delete"
                onClick={() => onDelete(id)}
            >
                Удалить
            </button>
        </div>
    );
}

export default memo(RecipeCard);