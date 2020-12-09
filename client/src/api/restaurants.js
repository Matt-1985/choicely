export async function getRandomRestaurant(cuisine) {
  const response = await fetch(`/api/restaurants/${cuisine}`);

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message);
  }

  const RestaurantNameList = await response.json();

  return RestaurantNameList;
}
