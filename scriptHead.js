function createHeader() {
  //header
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
  //logoblock
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
  //menu
  let menu;
  try {
    menu = document.createElement("nav");
    menu.setAttribute("class", "menu");
    header.appendChild(menu);
    menu.style.width = "60%";
    menu.style.height = "20px";
    menu.style.border = "1px solid black";
    menu.style.background = "green";
  } catch (error) {
    console.error("произошла ошибка menu: ", error);
  }
  try {
    //создаем список пунктов меню и добавляем их в блок меню
    const menuList = document.createElement("ul");
    menuList.setAttribute("class", "menuList");
    menuList.style.display = "flex";
    menuList.style.justifyContent = "space-between";
    menuList.style.alignItems = "center";
    menuList.style.padding = "0";
    menuList.style.margin = "0";
    menu.appendChild(menuList);
    // создаем пункты меню и добавляем их в список
    const menuItems = ["вопросы по JS", "памятка", "пункт3", "пункт4"];

    for (let i = 0; i < menuItems.length; i++) {
      const menuItem = document.createElement("li");
      menuItem.style.listStyle = "none";

      const menuLink = document.createElement("a");
      menuLink.setAttribute("href", "#");
      menuLink.textContent = menuItems[i];
      menuLink.style.textDecoration = "none";
      menuLink.style.color = "black";

      menuItem.appendChild(menuLink);
      menuList.appendChild(menuItem);
    }
  } catch (error) {
    console.error("произошла ошибка menu: ", error);
  }
  //создаем блок справа
  let rightBlock;
  try {
    rightBlock = document.createElement("div");
    rightBlock.textContent = "lenguage";
    rightBlock.setAttribute("class", "rightblock");
    rightBlock.style.height = "20px";
    rightBlock.style.border = "1px solid black";
    rightBlock.style.background = "green";

    header.appendChild(rightBlock);
  } catch (error) {
    console.error("произошла ошибка menu: ", error);
  }
}
export { createHeader };
//createHeader();
