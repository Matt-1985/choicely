export async function getRestaurants(values) {
  const response = await fetch(`/api/restaurants/${values}`);
  if (!response.ok) {
    console.log(response.json());
  }
  const data = await response.json();

  return data;
}
