const breadFactory = (breadType, recipe) => {
  let bread = {
    breadType: breadType,
    recipe: {
      flour: recipe.flour,
      water: recipe.water,
    },
  };

  if (breadType === 'cream') {
    bread.recipe.cream = recipe.cream;
  } else if (breadType === 'sugar') {
    bread.recipe.sugar = recipe.sugar;
  } else if (breadType === 'butter') {
    bread.recipe.butter = recipe.butter;
  }

  return bread;
};

const breads = [];

breads.push(breadFactory('cream', { flour: 100, water: 100, cream: 200 }));
breads.push(breadFactory('sugar', { flour: 100, water: 50, sugar: 200 }));
breads.push(breadFactory('butter', { flour: 100, water: 100, butter: 50 }));

for (const bread of breads) {
  console.log(`breadType: ${bread.breadType}`);
  console.log('recipe');
  for (const recipe in bread.recipe) {
      console.log(`${recipe}: ${bread.recipe[recipe]}`);
  }
}
