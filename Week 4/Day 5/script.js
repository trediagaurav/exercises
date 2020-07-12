const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    },
    {
      id: 11,
      name: 'Sharon DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
];



const main = document.getElementById("container");
const createRobots = (arr) => {
    main.innerHTML = '';
    const newArray = arr.forEach(item =>{
        let card = document.createElement("div");
        card.setAttribute("class", "card");
        card.style.backgroundColor = "#ff00ff";
        card.style.borderRadius = "5%";
        card.style.height = '25em';
        card.style.maxWidth = '30%'
        card.style.margin = "20px";
        let img = document.createElement("img");
        img.src = item.image;
        img.setAttribute('style', "width: 60%; height: 70%; margin-top: 20px; margin-left: 80px");
        img.style.borderRadius = "50%";
        img.style.backgroundColor = "#990000"
        card.append(img);
        let name = document.createElement("div");
        name.setAttribute("class", "name");
        name.setAttribute("style", "margin-top: 10px; margin-left: 30px; font-weight: bold; font-size: 30px; background-color: #ff00ff");
        name.textContent = item.name;
        card.append(name);
        let email = document.createElement("div");
        email.setAttribute("style", "margin-top: 5px; margin-left: 30px;background-color: #ff00ff");
        email.textContent = item.email;
        card.append(email);
        main.append(card);
    });
    main.style.display = "flex";
    main.style.flexWrap = "wrap";
}
createRobots(robots);

const searchBar = document.getElementById("searchBox");
searchBar.addEventListener('keyup', (e) => {
	const term = e.target.value.toLowerCase();
	const filter = robots.filter( item => {
    return item.name.toLowerCase().includes(term);
  });
  createRobots(filter);
});
