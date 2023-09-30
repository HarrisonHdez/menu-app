

import React from 'react'
import styles from "../routes/planer.module.css";
import { useEffect, useState } from 'react';

interface Recipe {
    id: number;
    nombre: string;
    ingredientes: number[];
    instrucciones: string;
    foto: string;
}

interface Ingredient {
    id: number;
    nombre: string;
    foto: string;
    cantidad_disponible: number;
}

interface SelectMenuProps {
    data: {
        recetas: Recipe[];
        ingredientes: Ingredient[];
    };
}
const SelectMenu: React.FC<SelectMenuProps> = ({ data }) => {

    const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
    const [selectedRecipeIngredients, setSelectedRecipeIngredients] = useState<Ingredient[]>([]);

    useEffect(() => {
        // Carga la receta seleccionada desde el localStorage al montar el componente
        const storedRecipe = localStorage.getItem('selectedRecipe');
        if (storedRecipe) {
            const parsedRecipe = JSON.parse(storedRecipe);
            setSelectedRecipe(parsedRecipe);
            loadIngredients(parsedRecipe.ingredientes);
        }
    }, []);

    const loadIngredients = (ingredientIds: number[]) => {
        // Busca los ingredientes de la receta seleccionada en el archivo Datos.json
        const ingredients = data.ingredientes.filter((ingredient) => ingredientIds.includes(ingredient.id));
        setSelectedRecipeIngredients(ingredients);
    };

    const handleRecipeSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedRecipeId = parseInt(event.target.value);
        const selectedRecipe = data.recetas.find((recipe) => recipe.id === selectedRecipeId);

        if (selectedRecipe) {
            setSelectedRecipe(selectedRecipe);
            localStorage.setItem('selectedRecipe', JSON.stringify(selectedRecipe));
            loadIngredients(selectedRecipe.ingredientes);
        } else {
            setSelectedRecipe(null);
            localStorage.removeItem('selectedRecipe');
            setSelectedRecipeIngredients([]);
        }
    };

    return (
        <div className={styles.form}>
            <h3 className={styles.planner__title}>Calidad para ti</h3>
            <p>Elige una de nuestras recetas:</p>
            <div className={styles.form__input}>
                <select onChange={handleRecipeSelection} value={selectedRecipe ? selectedRecipe.id : ''}>
                    <option value="">Selecciona una receta</option>
                    {data.recetas.map((recipe) => (
                        <option key={recipe.id} value={recipe.id}>
                            {recipe.nombre}
                        </option>
                    ))}
                </select>
            </div>
            {selectedRecipe && (
                <div>
                    <h4>Receta seleccionada: {selectedRecipe.nombre}</h4>
                    <p>Instrucciones: {selectedRecipe.instrucciones}</p>
                    <img src={selectedRecipe.foto} alt={selectedRecipe.nombre} />
                    <h4>Ingredientes:</h4>
                    <ul>
                        {selectedRecipeIngredients.map((ingredient) => (
                            <li key={ingredient.id}>
                                {ingredient.nombre} - Cantidad disponible: {ingredient.cantidad_disponible}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default SelectMenu