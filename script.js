const products = [
  {
    name: "CN X909 Advanced RAT",
    price: "$49",
    image: "https://via.placeholder.com/250x150?text=RAT+Tool"
  },
  {
    name: "ZeroTrace Keylogger",
    price: "$29",
    image: "https://via.placeholder.com/250x150?text=Keylogger"
  },
  {
    name: "WiFi Password Cracker Pro",
    price: "$39",
    image: "https://via.placeholder.com/250x150?text=WiFi+Cracker"
  },
  {
    name: "Android Spyware Injector",
    price: "$59",
    image: "https://via.placeholder.com/250x150?text=Android+Spyware"
  },
  {
    name: "Payload Generator X",
    price: "$35",
    image: "https://via.placeholder.com/250x150?text=Payload+Gen"
  },
  {
    name: "Reverse Shell Master",
    price: "$69",
    image: "https://via.placeholder.com/250x150?text=Shell+Tool"
  }
];

const container = document.getElementById("products");

products.forEach(p => {
  const div = document.createElement("div");
  div.classList.add("product");
  div.innerHTML = `
    <img src="${p.image}" alt="${p.name}">
    <h3>${p.name}</h3>
    <p>Price: ${p.price}</p>
    <button onclick="buyNow('${p.name}')">Buy via Telegram</button>
  `;
  container.appendChild(div);
});

function buyNow(productName) {
  const telegramUsername = "CIPHERNOVAX909";
  const url = `https://t.me/${telegramUsername}`;
  window.open(url, '_blank');
}