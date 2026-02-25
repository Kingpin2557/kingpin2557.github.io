async function fetchShoes() {
  try {
    const res = await fetch("./shoes.json");
    if (!res.ok) {
      throw new Error("Data not available");
    }
    const arrData = await res.json();

    const div = document.querySelector(".js-shoes");

    const ul = document.createElement("ul");

    arrData.forEach((item) => {
      const li = document.createElement("li");
      li.className = "c-shoe";

      const name = document.createElement("p");
      name.className = "c-shoe__name";
      name.textContent = item.name;
      li.appendChild(name);

      ul.appendChild(li);
    });

    div.append(ul);
  } catch (err) {
    console.error(`Shoes not loaded correctly: ${err}`);
  }
}

fetchShoes();
