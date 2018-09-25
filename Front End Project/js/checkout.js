document.onreadystatechange=function(){
    if(document.readyState=="complete"){
        preloader.style.display="none";
    }
}

$('#models .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2,
            nav: true
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 5,
            nav: true,
            loop: true
        }
    }
})

color_picker.style.right = "-180px";
color_picker.onclick = function () {
    if (color_picker.style.right == "-180px") {
        color_picker.style.right = "0px";
    }
    else {
        color_picker.style.right = "-180px";
    }
}

window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("top").style.display = "block";
    }
    else {
        document.getElementById("top").style.display = "none";
    }
};
document.getElementById("top").onclick = function to_top(){
    var interval=setInterval(()=>{
        document.documentElement.scrollTop-=50;
        if(document.documentElement.scrollTop==0){
            clearInterval(interval);
        }
    },10)
}

search_input.style.display = "none";
exit.style.display = "none";
search.onclick = function () {
    search_input.style.display = "block";
    exit.style.display = "block";
    exit.onclick = function () {
        search_input.style.display = "none";
        exit.style.display = "none";
    }
}
let share_dropdown=document.querySelector(".share_dropdown");
let list_dropdown=document.querySelector(".list_dropdown");
let shop_dropdown=document.querySelector(".shop_dropdown");

user.onclick=function(){
    if(list_dropdown.style.display=="none"){
        list_dropdown.style.display="block";
        shop_dropdown.style.display="none";
        share_dropdown.style.display="none";
    }
    else{
        list_dropdown.style.display="none";
    }
}

shop.onclick=function(){
    if(shop_dropdown.style.display=="none"){
        shop_dropdown.style.display="block";
        list_dropdown.style.display="none";
        share_dropdown.style.display="none";
    }
    else{
        shop_dropdown.style.display="none";
    }
}

share.onclick=function(){
    if(share_dropdown.style.display=="none"){
        share_dropdown.style.display="block";
        list_dropdown.style.display="none";
        shop_dropdown.style.display="none";
    }
    else{
        share_dropdown.style.display="none";
    }
}


$(".exit_icon").click(function(){
    $(this).parent().css("display","none");
})


navbar_keeper.onclick=function(){
    responsive_menu.style.display="block";
}

menu_exit.onclick=function(){
    responsive_menu.style.display="none";
}

$("#responsive_menu .menu ul li").click(function(){
    $(this).children("ul").toggle();
})

let model_image=document.querySelectorAll("#models img");
for( i of model_image){
    i.onclick=function(){
        document.getElementById("modal").style.display="block";
        $('#modal .owl-carousel').owlCarousel({
            loop: true,
            margin: 0,
            dots: false,
            startPosition:2,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                    nav: false
                },
                1000: {
                    items: 1,
                    loop: true
                }
            }
        })
    }
}

window.onclick = function(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}

exit_modal.onclick=function(){
    modal.style.display = "none";
}

$("#men_model_selector").click(function(){
    $(".women_model").parent().css("display","none");
    $(".men_model").parent().css("display","block");
})

$("#women_model_selector").click(function(){
    $(".men_model").parent().css("display","none");
    $(".women_model").parent().css("display","block");
})

$("#all_model_selector").click(function(){
    $(".men_model").parent().css("display","block");
    $(".women_model").parent().css("display","block");
})



login_area.onclick=function(){
    if(document.querySelector(".login").style.display=="none"){
        document.querySelector(".login").style.display="block";
    }
    else{
        document.querySelector(".login").style.display="none";
    }
}

singleproduct.onclick=function(){
    document.location.href="singleproduct.html";
}

to_shop.onclick=function(){
    document.location.href="shop.html";
}

home.onclick=function(){
    document.location.href="home.html";
}

cart.onclick=function(){
    document.location.href="cart.html";
}

videopost.onclick=function(){
    document.location.href="videopost.html";
}

checkout.onclick=function(){
    document.location.href="checkout.html";
}