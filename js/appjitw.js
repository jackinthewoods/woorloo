
//
window.onload = function(){
	//
	var menuToggle = document.getElementById("menu-toggle");  
	menuToggle.addEventListener("click",toggleMenu,false);
	//
	var menuShadow = document.getElementById("menu-shadow");
	menuShadow.addEventListener("click",hideMenu);
	var menuC = document.getElementById("menu");
	var menuSeen = false;
	//
	var sec0 = document.getElementById("shome");//.scrollIntoView();
	var sec1 = document.getElementById("sabout");
	var sec2 = document.getElementById("sproject");
	var sec3 = document.getElementById("scontact");
	//
	var menuItem = document.querySelectorAll(".menu-item");
	// m item home
	menuItem[0].addEventListener("click",function(){
		hideMenu();
		sec0.scrollIntoView({
			behavior: 'smooth' 
		});
	});
	// m item about
	menuItem[1].addEventListener("click",function(){
		hideMenu();
		sec1.scrollIntoView({
			behavior: 'smooth' 
		});
	});
	// m item projects
	menuItem[2].addEventListener("click",function(){
		hideMenu();
		sec2.scrollIntoView({
			behavior: 'smooth' 
		});
	});
	// m item contact
	menuItem[3].addEventListener("click",function(){
		hideMenu();
		sec3.scrollIntoView({
			behavior: 'smooth' 
		});
	});
	
	
	function toggleMenu(){
		if(!menuSeen){
			showMenu();
		}else{
			hideMenu();
		}
	}
	
	function showMenu(){
		menuC.setAttribute("class","anim500 slideInRight");
		menuShadow.setAttribute("class","anim500 slideInRight");
		menuSeen = true;
	}
	function hideMenu(){
		menuC.setAttribute("class","anim500 slideOutRightFade");
		menuShadow.setAttribute("class","anim700 slideOutRight");
		menuSeen = false;
	}
	
};
