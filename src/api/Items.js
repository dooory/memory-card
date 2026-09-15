const apiURL = "https://api.minecraftitems.xyz";
const imageFetchURL = `${apiURL}/api/item/`;

export async function fetchItemImage(itemId) {
  const url = `${imageFetchURL}${itemId}`;

  const cache = await caches.open("images-v1");

  let response = await cache.match(url);

  if (!response) {
    response = await fetch(url);
    await cache.put(url, response.clone());
  }

  if (response.ok) {
    const image = await response.blob();

    return image;
  }

  throw new Error(response.status);
}
