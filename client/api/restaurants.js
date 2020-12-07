export async function getRandomRestaurant() {
  const response = await fetch(`/api/restaurants/restaurant_id`);

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message);
  }

  const RestaurantNameList = await response.json();

  return RestaurantNameList;
}
