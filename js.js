	var product1 = {
		 	image:"img/1.jpg",
            name: "Pure Snowy",
            price: 100000,
            origin: "Korea"
        };
        var product2 = {
		 	image:"img/2.jpg",
            name: "O Hui",
            price: 150000,
            origin: "Korea"
        };
        var product3 = {
		 	image:"img/3.png",
            name: "Queenie",
            price: 300000,
            origin: "Koree"
        };
		var product4 = {
		 	image:"img/4.jpg",
            name: "Laneige",
            price: 200000,
            origin: "Koree"
        };
        var product5 = {
		 	image:"img/5.jpg",
            name: "Hanisul",
            price: 2500000,
            origin: "Koree"
        };
         var product6 = {
		 	image:"img/6.png",
            name: "Hera",
            price: 3000000,
            origin: "Koree"
        };
         var product7 = {
		 	image:"img/7.png",
            name: "Oc Sen",
            price: 1000000,
            origin: "Viet Nam"
        };
         var product8 = {
		 	image:"img/8.jpg",
            name: "New One",
            price: 2000000,
            origin: "Viet Nam"
       	 };
        cart=[];
	    var products = [product1,product2,product3,product4,product5,product6,product7,product8];
	    var container_cart = document.getElementById("container_cart");
	    var container = document.getElementById("container");
	    var container_P = document.getElementById("container_pro");
	    var container_ca = document.getElementById("container_C");
	    displayProduct();

	    function displayProduct(){
			for (var i = 0; i < products.length; i++) {
			    var line = document.createElement("div");
			        line.className="line";
			        container.className="contain";
			    var Pname = document.createElement("p");
			     	Pname.innerText = products[i].name;

			    var Pprice = document.createElement("p");
			        Pprice.innerText = products[i].price;

			    var Porigin= document.createElement("p");
			        Porigin.innerText = products[i].origin;

			    var Pimg= document.createElement("img");
			        Pimg.src= products[i].image;
			        Pimg.className="img";
			               
			    var PbtAdd = document.createElement("button");
			        PbtAdd.innerText = "Add to cart";
			        PbtAdd.onclick = function(arg){
			            return function() {
			                cart.push(products[arg]);
			             	}
			            }(i);
			        line.appendChild(Pimg);
				    line.appendChild(Pname);
			        line.appendChild(Pprice);
			        line.appendChild(Porigin);
			        line.appendChild(PbtAdd);
			        container.appendChild(line);
		    }
		} 	

		function displayCart() {			
			for (var j = 0; j < cart.length; j++) {
			    var line1= document.createElement("div");
			        line1.className = "line1";

			    var Cimg= document.createElement("img");
			        Cimg.src= cart[j].image;
			        Cimg.className="img";

			    var Cname = document.createElement("p");
			   		Cname.innerText = cart[j].name;
			              
			    var Cprice = document.createElement("p");
			        Cprice.innerText = cart[j].price;
			               
			    var CbtDelete = document.createElement("button");
			        CbtDelete.innerText = "Delete";
			        CbtDelete.onclick = function(arg) {
			            return function() {
			                cart.splice(arg, 1);
			                container_ca.innerHTML = "";
			                displayCart();
			              	}
			            }(j);
			        line1.appendChild(Cimg);
					line1.appendChild(Cname);
				    line1.appendChild(Cprice);
				    line1.appendChild(CbtDelete);
				    container_ca.appendChild(line1);
		    }
		}

		function displayPro() {
			container_cart.style.display = "none";
			container.style.display = "grid";
			document.getElementById("btn-sum").style.display = 'none';
			document.getElementById("container").innerHTML = "";
			displayProduct();
		}

		function displayCar() {
			container_cart.style.display = "grid";
			container.style.display = "none";
			document.getElementById("btn-sum").style.display = 'block';
			container_ca.innerHTML = "";
			displayCart();
		}

		function sumClick1(){				       
			var tong =0;			
				for(var i=0;i<cart.length;i++){
					tong += cart[i].price;
				}
					document.getElementById("result").innerHTML = tong;		
		}

