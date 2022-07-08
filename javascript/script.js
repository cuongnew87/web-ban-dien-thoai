$(function () {
    chuyenTrang();
    muaHang();
});
function chuyenTrang() {
    $(".menu .trangchu").click(function () {
        $(".menu li a").attr("class", "");
        $(".menu .trangchu a").attr("class", "colorbaclk");
        $("#main main").hide(100);
        $("#main .container").stop().toggle(100);
    });
    $(".menu .vechungtoi").click(function () {
        $(".menu li a").attr("class", "");
        $(".menu .vechungtoi a").attr("class", "colorbaclk");
        $("#main main").hide(100);
        $("#main .veChungToi").stop().toggle(100);
    });
    $(".menu .khuyenmai").click(function () {
        $(".menu li a").attr("class", "");
        $(".menu .khuyenmai a").attr("class", "colorbaclk");
        $("#main main").hide(100);
        $("#main .khuyenMai").stop().toggle(100);
    });
    $(".menu .dichvu").click(function () {
        $(".menu li a").attr("class", "");
        $(".menu .dichvu a").attr("class", "colorbaclk");
        $("#main main").hide(100);
        $("#main .dichVu").stop().toggle(100);
    });
    $(".menu .tintuc").click(function () {
        $(".menu li a").attr("class", "");
        $(".menu .tintuc a").attr("class", "colorbaclk");
        $("#main main").hide(100);
        $("#main .tinTuc").stop().toggle(100);
    });
    $(".menu .lienhe").click(function () {
        $(".menu li a").attr("class", "");
        $(".menu .lienhe a").attr("class", "colorbaclk");
        $("#main main").hide(100);
        $("#main .lienHe").stop().toggle(100);
    });
}
function muaHang() {
    $(".buy").click(function () {
        window.location.href = 'muahang.html';
    });
}

function addToCart(){
    let number = document.getElementById("cart-item").innerHTML;
    document.getElementById("cart-item").innerHTML = (parseInt(number) + 1);
    window.open('detail.html', '_blank').focus();
}

function search(){
    const input = document.getElementById("search-input").value;

    for (let i = 1; i <= 12; i++) {
        if(!document.getElementById("n"+i).innerHTML.includes(input)){
            document.getElementById("i"+i).style.display = "none";
        }else{
            document.getElementById("i"+i).style.display = "block";
        }
    }
}