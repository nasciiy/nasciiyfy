// let cardTemplate = null;

$(function(){

//  $.get("card.html",function(temp) {
//    cardTemplate = $(temp);
//   console.log(cardTemplate);

//  });
  
// サーチボタン押されたら
 $("#search-btn").on("click", function(){

    // 検索ワードを取得
    let searchWord = $("search-word").val();
    console.log(searchWord);
    // itunesの情報を取りに行く
    $.ajax({
        url:"https://itunes.apple.com/search",
        type:"GET",
        dataType: "jsonp",
        data:{
            term: searchWord,
            country:"jp",
        }

    }).done((data) =>{
    

    }).fail((error) => {

    })


 } )


})