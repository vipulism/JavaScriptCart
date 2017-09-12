var items = (function () {
    var filteredItems = [];
    var allItems = [
        {
            "id": 1,
            "name": "Sony Bravia KLV-24P413D 59.9 cm (24) WXGA LED Television With 1 + 1 Year Extended Warranty",
            "url": "https://www.snapdeal.com/product/sony-bravia-klv24p413d-60-cm/636480746986#bcrumbLabelId:64",
            "image": "https://n1.sdlcdn.com/imgs/b/d/e/large/Sony-Bravia-KLV-24P413D-60-SDL778226353-1-3cc4f.jpg",
            "price": 13499
        },
        {
            "id": 2,
            "name": "Sony BRAVIA KLV-32W512D 80 cm (32) HD Ready Internet LED Television With 1 + 1 Year Extended Warranty",
            "url": "https://www.snapdeal.com/product/sony-klv32w512d-81-cm-32/629644145476#bcrumbLabelId:64",
            "image": "https://n1.sdlcdn.com/imgs/b/u/5/large/Sony-KLV-32W512D-81-cm-SDL759905332-1-78ea9.jpg",
            "price": 27699
        },
        {
            "id": 3,
            "name": "LG 24LH452A 60 cm ( 24 ) HD Ready (HDR) LED Television",
            "url": "https://www.snapdeal.com/product/lg-24lh452a-60-cm-24/670676909568#bcrumbLabelId:64",
            "image": "https://n3.sdlcdn.com/imgs/c/k/1/large/LG-24LH452A-60-cm-24-SDL074830667-1-f0528.jpg",
            "price": 11289
        },
        {
            "id": 4,
            "name": "Sony BRAVIA KDL-43W800D 108cm (43) Full HD 3D LED Android TV With 1 + 1 Year Extended Warranty",
            "url": "https://www.snapdeal.com/product/sony-kdl43w800d-109-cm-43/672053439838#bcrumbLabelId:64",
            "image": "https://n1.sdlcdn.com/imgs/b/s/3/large/Sony-KDL-43W800D-109-cm-SDL505254555-1-4620b.jpg",
            "price": 56785
        },
        {
            "id": 5,
            "name": "LG 32LH516A 80 cm ( 32 ) HD Ready LED Television",
            "url": "https://www.snapdeal.com/product/lg-32lh516a-80-cm-32/674818094275#bcrumbLabelId:64",
            "image": "https://n4.sdlcdn.com/imgs/b/2/9/large/LG-32LH516A-80-cm-32-SDL070944031-1-5179f.jpg",
            "price": 17399
        },
        {
            "id": 6,
            "name": "Sony KLV-32R412D 80 cm (32) HD Ready (HDR) LED Television With 1 + 1 Year Extended Warranty",
            "url": "https://www.snapdeal.com/product/sony-klv32r412d-81-cm-32/643551920328#bcrumbLabelId:64",
            "image": "https://n4.sdlcdn.com/imgs/b/t/g/large/Sony-KLV-32R412D-81-cm-SDL049486513-1-c6b48.jpg",
            "price": 25899
        },
        {
            "id": 7,
            "name": "Sony BRAVIA KLV-40W562D 101.6cm (40) Full HD Smart LED Television With 1 + 1 Year Extended Warranty",
            "url": "https://www.snapdeal.com/product/sony-klv40w562d-102-cm-40/633181530187#bcrumbLabelId:64",
            "image": "https://n2.sdlcdn.com/imgs/b/u/5/large/Sony-KLV-40W562D-102-cm-SDL765029276-1-8412a.jpg",
            "price": 45490
        },
        {
            "id": 8,
            "name": "LG 32LH512A 80 cm (32)  HD Ready LED Television",
            "url": "https://www.snapdeal.com/product/lg-32lh512a-81-cm-32/678954804516#bcrumbLabelId:64",
            "image": "https://n1.sdlcdn.com/imgs/c/y/f/large/Large_940x620-f9518.jpg",
            "price": 18750
        },
        {
            "id": 9,
            "name": "Samsung 43k5002 102 cm ( 43 ) Full HD (FHD) LED Television",
            "url": "https://www.snapdeal.com/product/samsung-43k5002-102-cm-43/623970079123#bcrumbLabelId:64",
            "image": "https://n2.sdlcdn.com/imgs/c/u/e/large/Samsung-43k5002-102-cm-43-SDL310635219-1-ffa6d.jpg",
            "price": 40990
        },
        {
            "id": 10,
            "name": "Wybor F1-W32N06 80 cm (32) HD Ready LED Television",
            "url": "https://www.snapdeal.com/product/wybor-w32-n06-80cm-hd/676305819256#bcrumbLabelId:64",
            "image": "https://n2.sdlcdn.com/imgs/b/a/z/large/W32_80cm_F1_N06_01-87a37.jpg",
            "price": 11390
        },
        {
            "id": 11,
            "name": "Samsung 32K5100 81.28 cm ( 32 ) HD Ready (HDR) LED Television",
            "url": "https://www.snapdeal.com/product/samsung-32k5100-8128-cm-32/653273116402#bcrumbLabelId:64",
            "image": "https://n1.sdlcdn.com/imgs/c/l/2/large/Samsung-32K5100-81-28-cm-SDL813225311-1-26424.jpg",
            "price": 31300
        },
        {
            "id": 12,
            "name": "LG 32LH564A 80 cm ( 32 ) HD Ready LED Television",
            "url": "https://www.snapdeal.com/product/lg-32lh564a-80-cm-32/648202579935#bcrumbLabelId:64",
            "image": "https://n3.sdlcdn.com/imgs/b/2/9/large/LG-32LH564A-80-cm-32-SDL006951019-1-50c41.jpg",
            "price": 19399
        },
        {
            "id": 13,
            "name": "Panasonic  TH-32D400D 80 cm (32)  HD Ready LED Television",
            "url": "https://www.snapdeal.com/product/panasonic-th32d400d-led-television/678758968619#bcrumbLabelId:64",
            "image": "https://n2.sdlcdn.com/imgs/b/8/k/large/Panasonic-TH-32D400D-80-cm-SDL717453082-1-1baf0.jpg",
            "price": 17499
        },
        {
            "id": 14,
            "name": "LG 32LH576D 80 cm ( 32 ) Smart HD Ready LED Television",
            "url": "https://www.snapdeal.com/product/lg-32lh576d-80-cm-32/687110213653#bcrumbLabelId:64",
            "image": "https://n1.sdlcdn.com/imgs/b/2/9/large/LG-32LH576D-80-cm-32-SDL090679523-1-9e97c.jpg",
            "price": 22990
        },
        {
            "id": 15,
            "name": "Weston WEL-3200 80 cm (32) HD Ready LED TV",
            "url": "https://www.snapdeal.com/product/weston-led-smart-tv-32/1875404081#bcrumbLabelId:64",
            "image": "https://n4.sdlcdn.com/imgs/b/m/z/large/SDL957611047_1-547de.jpg",
            "price": 12490
        },
        {
            "id": 16,
            "name": "LG 43LH547A 108 cm ( 43 ) Full HD LED Television",
            "url": "https://www.snapdeal.com/product/lg-43lh547a-108-cm-43/642442116771#bcrumbLabelId:64",
            "image": "https://n4.sdlcdn.com/imgs/b/2/9/large/LG-43LH547A-108-cm-43-SDL981414880-1-4f318.jpg",
            "price": 33351
        },
        {
            "id": 17,
            "name": "Micromax 32GRAND_i 81 cm (31.5) HD Ready LED Television with 1 + 2 year Extended Warranty",
            "url": "https://www.snapdeal.com/product/micromax-32t6175hd-8128-cm-32/654872041826#bcrumbLabelId:64",
            "image": "https://n3.sdlcdn.com/imgs/c/d/c/large/Micromax-32T6175HD-81-28-cm-SDL170865218-1-204d1.jpg",
            "price": 13003
        },
        {
            "id": 18,
            "name": "Samsung UA 24H4003 AR 59.8 cm (24) HD Ready LED Television",
            "url": "https://www.snapdeal.com/product/samsung-24h4003-24-inches-hd/146399905#bcrumbLabelId:64",
            "image": "https://n4.sdlcdn.com/imgs/a/l/c/large/Samsung-24H4003-24-Inches-HD-SDL822350027-1-48ad8.jpg",
            "price": 11945
        },
        {
            "id": 19,
            "name": "Micromax Grand 81 cm (31.5) HD Ready LED Television with 1 + 2 year Extended Warranty",
            "url": "https://www.snapdeal.com/product/micromax-grand-smart-led-television/649855122828#bcrumbLabelId:64",
            "image": "https://n3.sdlcdn.com/imgs/b/x/7/large/Micromax-Grand-Smart-LED-Television-SDL860930512-1-38e0e.jpg",
            "price": 13499
        },
        {
            "id": 20,
            "name": "Samsung 43K5300 109.22 cm ( 43 ) Smart Full HD (FHD) LED Television",
            "url": "https://www.snapdeal.com/product/samsung-43k5300-10922-cm-43/640971583082#bcrumbLabelId:64",
            "image": "https://n4.sdlcdn.com/imgs/c/l/0/large/Samsung-43K5300-109-22-cm-SDL647562774-1-61517.jpg",
            "price": 55786
        }
    ]

    var order = 1;
    var searchInput = document.querySelector('#search');
    var priceSort = document.querySelector('#sort');
    var wraper = document.querySelector('#prodlist');


    _render(allItems); // run on load


    /**
     * @desc this function is sued to render data in DOM
     */
    function _render(totalItems) {

        
      wraper.innerHTML = ""


        /**
         * @desc this function is sued to create template of an item
         */
        function createElement(item) {
            return `<li class="items" id=${item.id}>
                        <a class="infoWrap" href=${item.url} target="_blank">
                            <div class="cartSection info"><img src=${item.image} class="itemImg">
                                <h3>${item.name}</h3>
                            </div>
                            <div class="prodTotal cartSection">${item.price}</div>
                        </a>
                    </li>`
        }

        totalItems.map(item => {
            wraper.innerHTML = wraper.innerHTML + createElement(item)
        })

    }

    /**
     * @desc this function is sued to add new item  
     */
    function addItem(item) {
        allItems.unshift(item);
        _render(allItems);
    }
    /**
     * @desc this function is sued to remove new item  
     */
    function removeItem(id) {
        allItems.map((item, i) => {
            if (item.id == id) allItems.splice(i, 1);
        })
        _render(allItems);
    }


    /**
     * @desc this function is sued to sort data
     * @param {key} key is used to sort  the list by this key 
     */
    function sort(key) {

        var sortMyItems = filteredItems.length ? filteredItems : allItems

        if (order) {
            sortMyItems = sortMyItems.sort(function (a, b) {
                var x = a[key]; var y = b[key];
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            });

            priceSort.classList = 'sort asc'
            order = 0
        } else {
            sortMyItems = sortMyItems.sort(function (a, b) {
                var x = a[key]; var y = b[key];
                return ((x > y) ? -1 : ((x < y) ? 1 : 0));
            });
            
            priceSort.classList = 'sort desc'
            order = 1
        }

        _render(sortMyItems);
    }

    /**
     * @desc this function is sued to provide new filtered list by search
     */
    function search() {
        setTimeout(function () {
            var val = searchInput.value.toLowerCase();
            if (val) {
                filteredItems = allItems.filter(item => {
                    itemName = item.name.toLowerCase()
                    return itemName.indexOf(val) != -1
                });
            } else {
                filteredItems = allItems;
            }
            _render(filteredItems);
            priceSort.classList = 'sort'
        }, 100);
    }
 

    /**
     * @desc this function is sued to to bind search box 
     */
    searchInput.addEventListener("keyup", search, false);


    return {
        add: addItem,
        remove: removeItem,
        sort: sort,
    }


})();
 