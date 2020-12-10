export async function getRestaurants(cuisines) {
  const response = await fetch(`/api/restaurants/${cuisines}`);
  if (!response.ok) {
    console.log(response.json());
  }
  const data = await response.json();

  return data;
}
