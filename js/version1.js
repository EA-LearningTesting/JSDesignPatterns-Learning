var catCount = 0;

    function UrlExists(url) {
        var http = new XMLHttpRequest();
        http.open('HEAD', url, false);
        http.send();
        return http.status != 404;
    }

    function Cat(name) {
            var count = 0;
            catCount++;
            var name = name;

            var div = document.createElement("div");
            div.className = "cat";
            if (UrlExists('img/cat' + catCount + '.jpg')) {
                div.style.background = 'url("img/cat' + catCount + '.jpg") no-repeat';
            } else {
                div.style.background = 'url("img/cat6.jpg") no-repeat';
            }

            div.style.backgroundSize = 'cover';
            document.body.appendChild(div);

            var p = document.createElement("p");
            p.textContent = name;
            div.appendChild(p);

            var span = document.createElement("span");
            span.textContent = "0";
            div.appendChild(span);
            div.addEventListener("click", function () {
                span.textContent = parseInt(span.textContent) + 1;
            });

        }
        /*
            var cats = document.getElementsByClassName("cat");
            var cat1 = Cat("Cat 1");
            var cat2 = Cat("Cat 2");
            var cat3 = Cat("Cat 3");
            var cat4 = Cat("Cat 4");
            var cat5 = Cat("Cat 5");*/
    for (var x = 0; x < 8; x++) {
        Cat("Cat " + (x + 1));
    }