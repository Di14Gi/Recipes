import { createContext, useReducer } from 'react';
import { recipesReducer } from '../reducers/recipesReducer';
import { recipes } from '../data/recipes';

export const RecipesContext = createContext();

export function RecipesProvider({ children }) {
    const [state, dispatch] = useReducer(recipesReducer, recipes);

    return (
        <RecipesContext.Provider value={{ recipes: state, dispatch }}>
            {children}
        </RecipesContext.Provider>
    );
}