
const products = [
  {
    name: "iPad Pro 12.9” 2023",
    price: 4999,
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-9-select-202303?wid=940&hei=1112&fmt=png-alpha&.v=1678866229081"
  },
  {
    name: "iPad Air 5th Gen",
    price: 3199,
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-select-wifi-purple-202203_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&.v=1644969385433"
  },
  {
    name: "iPad 10th Gen",
    price: 2399,
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-10-select-202210_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&.v=1669295839485"
  }
];

const productList = document.getElementById("product-list");

products.forEach(product => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <img src="product.image" alt="{product.name}">
    <h3>product.name</h3>
    <p>RM{product.price}</p>
    <button onclick="alert('Produk ${product.name} ditambah ke cart!')">Tambah ke Cart</button>
  `;
  productList.appendChild(div);
});
