import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import './index.css';
import { RecipesProvider } from './contexts/RecipesContext';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RecipesProvider>
      <RouterProvider router={router} />
    </RecipesProvider> 
  </StrictMode>,
)
