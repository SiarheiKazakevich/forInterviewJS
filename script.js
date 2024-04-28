try {
  const header = document.createElement("header");
  header.setAttribute("id", "header");
  header.setAttribute("class", "header");

  document.body.appendChild(header);

  header.style.background = "red";
  header.style.display = "flex";
  header.style.justifyContent = "space-between";
  header.style.alignItems = "center";
  header.style.width = "100%";
  header.style.height = "4rem";
  header.style.border = "1px solid black";
} catch (error) {
  console.error("произошла ошибка head: ", error);
}

try {
  const logo = document.createElement("div");
  logo.setAttribute("class", "logo");
  header.appendChild(logo);
  logo.style.backgroundImage = "url('assets/iconUmbrella.png')";
  logo.style.backgroundPosition = "center";
  logo.style.backgroundSize = "cover";
  logo.style.width = "50px";
  logo.style.height = "50px";
  logo.style.border = "1px solid black";
} catch (error) {
  console.error("произошла ошибка logo: ", error);
}
