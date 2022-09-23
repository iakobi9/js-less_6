function getUsers() {
  let request = new XMLHttpRequest();

  function renderLogika() {
    let main1 = this.responseText;
    let main2 = JSON.parse(main1);
    console.log(main2);

    let ul = document.createElement("ul");

    main2.data.forEach((element) => {
      let li = document.createElement("li");

      let p = document.createElement("p");
      p.textContent = element.first_name;
      let img = document.createElement("img");
      img.src = element.avatar;
      img.setAttribute("alt", "user-image");
      li.appendChild(p);
      li.appendChild(img);
      ul.appendChild(li);
    });

    document.getElementById("xmlapi").appendChild(ul);
  }

  function errorLogika2() {
    let p = document.createElement("p");
    p.textContent = "server error";
    document.getElementById("xmlapi").appendChild(p);
  }

  request.addEventListener("load", renderLogika);
  request.addEventListener("error", errorLogika2);
  request.open("GET", "https://reqres.in/api/users?page=2");
  request.send();
}

getUsers();

function getUsers2() {
  let request2 = new XMLHttpRequest();

  function renderLogika2() {
    let x = this.responseText;
    let y = JSON.parse(x);
    console.log(y);

    let ul = document.createElement("ul");

    let li = document.createElement("li");
    li.textContent = y.data[0].name + " " + y.data[0].year;
    ul.appendChild(li);
    document.getElementById("xmlapi2").appendChild(ul);
  }

  function errorLogika() {
    let p = document.createElement("p");
    p.textContent = "server error";
    document.getElementById("xmlapi2").appendChild(p);
  }

  request2.addEventListener("load", renderLogika2);
  request2.addEventListener("error", errorLogika);
  request2.open("GET", "https://reqres.in/api/unknown");
  request2.send();
}

getUsers2();
