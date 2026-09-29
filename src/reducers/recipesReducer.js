import { recipes } from '../data/recipes';

// Начальное состояние — импортированный массив рецептов
const initialState = recipes;

export function recipesReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_RECIPE': {
            const newRecipe = {
                id: Date.now(),
                title: action.payload.title,
                category: action.payload.category,
                time: action.payload.time,
                ingredients: action.payload.ingredients,
                steps: action.payload.steps,
                favorite: false,
            };
            return [...state, newRecipe];
        }

        case 'DELETE_RECIPE': {
            return state.filter(recipe => recipe.id !== action.payload.id);
        }

        case 'TOGGLE_FAVORITE': {
            return state.map(recipe =>
                recipe.id === action.payload.id
                ? { ...recipe, favorite: !recipe.favorite }
                : recipe
            );
        }

        case 'EDIT_RECIPE': {
            return state.map(recipe =>
                recipe.id === action.payload.id
                ? {
                    ...recipe,
                    title: action.payload.title,
                    category: action.payload.category,
                    time: action.payload.time,
                    ingredients: action.payload.ingredients,
                    steps: action.payload.steps,
                    }
                : recipe
            );
        }

        default:
            return state;
        }
}