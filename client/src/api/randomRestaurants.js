export async function getRandomRestaurants() {
  const response = await fetch(`/api/random-restaurants`);
  if (!response.ok) {
    console.log(response.json());
  }
  const data = await response.json();
  return data;
}
