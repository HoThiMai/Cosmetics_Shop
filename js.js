	var auto =["img/1.jpg","img/2.jpg","img/3.png","img/9.jpg"];
	var position = 0;
		setInterval(function(){
		position = position+1;
		document.getElementById('myImage').src= auto[position];
		if(position == 3){
		position =0;
		}
	},1500);
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
       	 var productVn1 = {
		 	image:"img/v1.jpg",
            name: "Biona",
            price: 1550000,
            origin: "Viet Nam"
        };
        var productVn2 = {
		 	image:"img/v2.jpg",
            name: "MisWhite",
            price: 1850000,
            origin:"Viet Nam"
        };
        var productVn3 = {
		 	image:"img/v3.png",
            name:" Oixi 3 in 1",
            price: 3700000,
            origin: "Viet Nam"
        };
		var productVn4 = {
		 	image:"img/v4.png",
            name: "3 in 1",
            price: 250000,
            origin: "Viet Nam"
        };
        var productVn5 = {
		 	image:"img/v5.jpg",
            name: "KBOne Serum",
            price: 2350000,
            origin: "Viet Nam"
        };
         var productVn6 = {
		 	image:"img/v6.jfif",
            name: "Whiting Cream",
            price: 1950000,
            origin: "Viet Nam"
        };
         var productVn7 = {
		 	image:"img/v7.jpg",
            name: "Sakura",
            price: 1200000,
            origin: "Viet Nam"
        };
         var productVn8 = {
		 	image:"img/v8.jfif",
            name: "New One",
            price: 2800000,
            origin: "Viet Nam"
       	 };
       	 var productVn9 = {
		 	image:"img/v9.jpg",
            name: "Manum Big Shot",
            price: 1500000,
            origin: "Viet Nam"
        };
         var productVn10 = {
		 	image:"img/v10.jfif",
            name: "BB",
            price: 3000000,
            origin: "Viet Nam"
        };
         var productVn11 = {
		 	image:"img/v11.jpg",
            name: "Oc Sen",
            price: 1300000,
            origin: "Viet Nam"
        };
         var productVn12 = {
		 	image:"img/v12.jpg",
            name: "MisWhite ",
            price: 2450000,
            origin: "Viet Nam"
       	 };
       	 var productKor1 = {
		 	image:"img/h1.png",
            name: "Pure Snowy",
            price: 100000,
            origin: "Korea"
        };
        var productKor2 = {
		 	image:"img/h2.jpg",
            name: "O Hui",
            price: 150000,
            origin: "Korea"
        };
        var productKor3 = {
		 	image:"img/h3.jpg",
            name: "Queenie",
            price: 300000,
            origin: "Koree"
        };
		var productKor4 = {
		 	image:"img/h4.jpg",
            name: "Laneige",
            price: 200000,
            origin: "Koree"
        };
        var productKor5 = {
		 	image:"img/h5.jpg",
            name: "Hanisul",
            price: 2500000,
            origin: "Koree"
        };
         var productKor6 = {
		 	image:"img/h6.jpg",
            name: "Hera",
            price: 3000000,
            origin: "Koree"
        };
         var productKor7 = {
		 	image:"img/h7.jpg",
            name: "Oc Sen",
            price: 1000000,
            origin: "Viet Nam"
        };
         var productKor8 = {
		 	image:"img/h8.jpg",
            name: "New One",
            price: 2000000,
            origin: "Viet Nam"
       	 };
       	 var productKor9 = {
		 	image:"img/h9.jpg",
            name: "Hanisul",
            price: 2500000,
            origin: "Koree"
        };
         var productKor10 = {
		 	image:"img/h10.jpg",
            name: "Hera",
            price: 3000000,
            origin: "Koree"
        };
         var productKor11 = {
		 	image:"img/h11.jpg",
            name: "Oc Sen",
            price: 1000000,
            origin: "Viet Nam"
        };
         var productKor12 = {
		 	image:"img/h12.jpg",
            name: "New One",
            price: 2000000,
            origin: "Viet Nam"
       	 };
       	 var productTl1 = {
		 	image:"img/t1.jpg",
            name: "ReaDy 2White",
            price: 1900000,
            origin:"Thai Lan"
        };
        var productTl2 = {
		 	image:"img/t2.jpg",
            name: "Lisp Tick",
            price: 150000,
            origin: "Thai Lan"
        };
        var productTl3 = {
		 	image:"img/t3.png",
            name: "Ka Neee",
            price: 3600000,
            origin: "Thai Lan"
        };
		var productTl4 = {
		 	image:"img/t4.jpg",
            name: "Sen Spa",
            price: 2500000,
            origin: "Thai Lan"
        };
        var productTl5 = {
		 	image:"img/t5.jpg",
            name: "Combo Sen Spa",
            price: 2500000,
            origin: "Thai Lan"
        };
         var productTl6 = {
		 	image:"img/t6.jpg",
            name: "Face Wash Sen Spa",
            price: 3200000,
            origin: "Thai Lan"
        };
         var productTl7 = {
		 	image:"img/t7.jpg",
            name: "Lips Tick Odbo",
            price: 1650000,
            origin: "Thai Lan"
        };
         var productTl8 = {
		 	image:"img/t8.jpg",
            name: "Odbo",
            price: 2500000,
            origin: "Thai Lan"
       	 };
       	 var productTl9 = {
		 	image:"img/t9.png",
            name: "Lips Tick Odbo",
            price: 2000000,
            origin: "Koree"
        };
         var productTl10 = {
		 	image:"img/t10.jpg",
            name: "Tint Or Gloss ",
            price: 3000000,
            origin: "Thai Lan"

        };
         var productTl11 = {
		 	image:"img/t11.jpg",
            name: "Combo MakeUp ",
            price: 150000,
            origin: "Thai Lan"
        };
         var productTl12 = {
		 	image:"img/t12.jpg",
            name: "Mistine",
            price: 2500000,
            origin: "Thai Lan"
       	 };
      	 
        cart=[];
	    var products = [product1, product2, product3, product4, product5, product6, product7, product8];
	    var product_Vn = [productVn1, productVn2, productVn3, productVn4, productVn5, productVn6, productVn7, productVn8,
	    productVn9, productVn10, productVn11, productVn12];
	    var product_Korean =[productKor1, productKor2, productKor3, productKor4, productKor5, productKor6, productKor7,
	    productKor8, productKor9, productKor10, productKor11, productKor12];
	    var product_TL =[productTl1, productTl2, productTl3, productTl4, productTl5, productTl6, productTl7, productTl8, productTl9, productTl10,
	    productTl11, productTl12];
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

			function displayProductVn(){
				document.getElementById("container").innerHTML="";
			for (var i = 0; i < product_Vn.length; i++) {
			    var line = document.createElement("div");
			        line.className="line";
			        container.className="contain";
			    var Pname = document.createElement("p");
			     	Pname.innerText = product_Vn[i].name;

			    var Pprice = document.createElement("p");
			        Pprice.innerText = product_Vn[i].price;

			    var Porigin= document.createElement("p");
			        Porigin.innerText = product_Vn[i].origin;

			    var Pimg= document.createElement("img");
			        Pimg.src= product_Vn[i].image;
			        Pimg.className="img";
			               
			    var PbtAdd = document.createElement("button");
			        PbtAdd.innerText = "Add to cart";
			        PbtAdd.onclick = function(arg){
			            return function() {
			                cart.push(product_Vn[arg]);
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
		function displayProductKorean(){
			document.getElementById("container").innerHTML="";
			for (var i = 0; i < product_Korean.length; i++) {
			    var line = document.createElement("div");
			        line.className="line";
			        container.className="contain";
			    var Pname = document.createElement("p");
			     	Pname.innerText = product_Korean[i].name;

			    var Pprice = document.createElement("p");
			        Pprice.innerText = product_Korean[i].price;

			    var Porigin= document.createElement("p");
			        Porigin.innerText = product_Korean[i].origin;

			    var Pimg= document.createElement("img");
			        Pimg.src= product_Korean[i].image;
			        Pimg.className="img";
			               
			    var PbtAdd = document.createElement("button");
			        PbtAdd.innerText = "Add to cart";
			        PbtAdd.onclick = function(arg){
			            return function() {
			                cart.push(product_Korean[arg]);
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
		function displayProductThaiLan(){
			document.getElementById("container").innerHTML="";
			for (var i = 0; i < product_TL.length; i++) {
			    var line = document.createElement("div");
			        line.className="line";
			        container.className="contain";
			    var Pname = document.createElement("p");
			     	Pname.innerText = product_TL[i].name;

			    var Pprice = document.createElement("p");
			        Pprice.innerText = product_TL[i].price;

			    var Porigin= document.createElement("p");
			        Porigin.innerText = product_TL[i].origin;

			    var Pimg= document.createElement("img");
			        Pimg.src= product_TL[i].image;
			        Pimg.className="img";
			               
			    var PbtAdd = document.createElement("button");
			        PbtAdd.innerText = "Add to cart";
			        PbtAdd.onclick = function(arg){
			            return function() {
			                cart.push(product_TL[arg]);
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
			        line1.className = "line";
			     	container_ca.className="contain1";
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
			document.getElementById("btn-clear").style.display ='none';
			document.getElementById("btn-sort").style.display ='none';
			document.getElementById("btn-order").style.display ='none';
			document.getElementById("info").style.display = 'none';
			document.getElementById("pay").style.display = 'none';
			document.getElementById("container").innerHTML = "";
			displayProduct();
		}

		function displayCar() {
			container_cart.style.display = "grid";
			container.style.display = "none";
			document.getElementById("btn-sum").style.display = 'block';
			document.getElementById("btn-clear").style.display ='block';
			document.getElementById("btn-sort").style.display ='block';
			document.getElementById("btn-order").style.display ='block';
			document.getElementById("info").style.display = 'none';
			document.getElementById("pay").style.display = 'none';
			container_ca.innerHTML = "";
			displayCart();
		}

		function sumClick1(){				       
			var sum =0;	
			var ship=0;
			var totalPrice=0;		
				for(var i=0;i<cart.length;i++){
					sum += cart[i].price;
				}
				ship=(sum/100)*0.5;
				total=sum+ship;
			var sumPrices =document.getElementById("result");
			var div=document.createElement("div");
				div.className="div1";
			var prices =document.createElement("b");
			var ships=document.createElement("b");
			var totals =document.createElement("b");
			prices.innerText="Total Product Price: "+ sum + " VND\n";
			ships.innerText="Delivery Charges: "+ship+" VND\n";
			totals.innerText="Total Price:  "+total+" VND";
	
			div.append(prices);
			div.append(ships);
			div.append(totals);
			sumPrices.appendChild(div);
			document.getElementById("result").style.display ='block';

			}

		function clear1(){
			cart = [];
			alert("Do you want to remove all product from your cart?");
			container_ca.innerHTML = "";
	      	result.innerHTML ="";  
	       	displayCart();
	       	document.getElementById("result").style.display ='none';

	    }

	    var click = 0;
			function sortClick(){
				if (click % 2 == 0) {
					click += 1;
					for (var i = 0; i < cart.length - 1; i++) {
						for (var j = i; j < cart.length; j++) {
							if (cart[i].price < cart[j].price){
								var temp = cart[i];
								cart[i] = cart[j];
								cart[j] = temp;
							}
						}
					}
				}
				else{
					click += 1;
					for (var i = 0; i < cart.length - 1; i++) {
						for (var j = i; j < cart.length; j++) {
							if (cart[i].price > cart[j].price){
								var temp = cart[i];
								cart[i] = cart[j];
								cart[j] = temp;
							}
						}
					}
				}
				container_ca.innerHTML = "";
		       displayCart();
		       document.getElementById("result").style.display ='none';

		    }

		    function search() {
         
	            var text = document.getElementById("search").value;
	            var products = [];
	            for (var i = 0; i < product.length; i++) {
	                if (product[i].name == text) {
                    products.push(product[i]);
                    }
                }
            }

            function orderClick(){
            		document.getElementById("btn-order").style.display = 'block';
            		document.getElementById("info").style.display = 'block';
            		document.getElementById("pay").style.display = 'block';
            		document.getElementById("btn-sum").style.display = 'none';
					document.getElementById("btn-clear").style.display ='none';
					document.getElementById("btn-sort").style.display ='none';
            }

            function comfim(){
            	alert("You have successfully placed an order !");
            		document.getElementById("btn-order").style.display = 'none';
            		document.getElementById("info").style.display = 'none';
            		document.getElementById("pay").style.display = 'none';
            		container_ca.innerHTML="";

            }



		   
