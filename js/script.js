
    var allItems = [
            {
                name: "Chicken",
                price: "9",
                id: 1,
                image:"img/prod.jpg"
            },
            {
                name: "Kandha",
                price: "900",
                id: 2,
                image:"img/prod.jpg"
            },
            {
                name: "Tofu",
                price: "900",
                id: 3,
                image:"img/prod.jpg"
            },
            {
                name: "Mutton",
                price: "10",
                id: 4,
                image:"img/prod.jpg"
            }
        ]



    var wraper = document.querySelector('#prodlist')

    function remove(itemId){
        var item = document.getElementById(itemId);
    }


    function create(item){

        var newItem = document.createElement("li");
        var infoWrap = document.createElement("a");
        var cartSection = document.createElement("div");
        var name = document.createElement("h3");
        var price = document.createElement("div");


        var newContent = document.createTextNode(item.name);
        var amount = document.createTextNode(item.price);
        var img = document.createElement('img');

        img.src = item.image
        img.classList = "itemImg"
        price.classList = 'prodTotal cartSection'
        cartSection.classList = 'cartSection info'
        infoWrap.classList = 'infoWrap'
        newItem.classList = 'items'


        cartSection.appendChild(img); //ad
        name.appendChild(newContent); //ad
        price.appendChild(amount); //ad

        cartSection.appendChild(name); //ad
        infoWrap.appendChild(cartSection); //ad
        infoWrap.appendChild(price); //ad

        newItem.appendChild(infoWrap); //ad

        newItem.id = item.id
        infoWrap.href = item.url

        wraper.appendChild(newItem)
        
        
    }

    allItems.map( item => {
       // create(item)
    })

