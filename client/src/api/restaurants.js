export async function getRestaurants(values) {
  try {
    const response = await fetch(`/api/restaurants/${values}`);
    if (!response.ok) {
      console.log(response.json());
    }
    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
}
