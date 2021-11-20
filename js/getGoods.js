const getGoods = () => {
    const links = document.querySelectorAll(".navigation-link")
    const getData = () => {
    fetch("https://server-1ec49-default-rtdb.firebaseio.com/db.json")
    .then((res) => res.json())
    .then((data) => {
   localStorage.setItem("data", JSON.stringify(data));
});

}
links.forEach((link) => {
    link.addEventListener("click", (event) => {
    event.preventDefault();  
    getData();  
    })
})
    localStorage.setItem("goods", JSON.stringify({name:"all"}))

    const goods = JSON.parse(localStorage.getItem("goods"));
    // console.log(goods);
    localStorage.removeItem("goods");
}

getGoods();