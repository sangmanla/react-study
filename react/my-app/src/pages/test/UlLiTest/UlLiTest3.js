import { recipes } from "./recipes.js";

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((rec) => {
        return (
          <div key={rec.id}>
            <h2>{rec.name}</h2>
            <ul>
              {rec.ingredients.map((ing) => {
                return <li key={ing}>{ing}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
