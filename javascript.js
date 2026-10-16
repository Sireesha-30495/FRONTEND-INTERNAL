fetch("https://fakestoreapi.com/products")
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }
        return response.json();
    })
    .then(products => {
        console.log(products);
    })
    .catch(error => {
        console.error("Error:", error.message);
    });