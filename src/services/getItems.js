

export const getProducts = () => {
  return new Promise ((resolve, reject) => {
    fetch(`https://fakestoreapi.com/products`)
    .then(response => response.json())
    .then(data => {
      //console.log(data);
      resolve(data);
    })
    .catch(error => {
      console.log(error);
      reject(error.message)
    })
  })
}

export const getProductsById = (id) => {
  return new Promise((resolve, reject) => {
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(response => response.json())
    .then(data => {
      //console.log(data);
      resolve(data);
    })
    .catch(error => {
      console.log(error);
      reject(error.message);
    })
  })
}

export const getProductsByCatergory = (categoryName) => {
  return new Promise((resolve, reject) => {
    fetch(`https://fakestoreapi.com/products`)
    .then(response => response.json())
    .then(data => {
      //console.log(data);
      const productsByCategory = data.filter(data => data.category.startsWith(categoryName))
      resolve(productsByCategory);
    })
    .catch(error => {
      console.log(error);
      reject(error.message);
    })
  })
}