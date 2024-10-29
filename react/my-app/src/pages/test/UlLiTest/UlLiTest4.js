import { recipes } from "./recipes.js";

function RecipeItem({ id, name, ingredients }) {
  console.log(id);
  console.log(name);
  console.log(ingredients);
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {ingredients.map((ing) => {
          return <li key={ing}>{ing}</li>;
        })}
      </ul>
    </div>
  );
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((rec) => {
        return <RecipeItem key={rec.id} {...rec} />;
      })}
    </div>
  );
}
