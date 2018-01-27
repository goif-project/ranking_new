const $ = require("jquery");

function Query(){
  $.ajax({
     type: "POST",
     url: "http://mayomayooo.sakura.ne.jp/golf_db/select_score_all.php",
     dataType : "json",
     cache: "false"
   }).done(function(data){
     //  保存成功をアラート表示
     console.log("あごおお");
     console.log(data);
     var num = 0
     for(var i in data.list){
       //rank表示
       var ranking = 0;
       ranking = Number(i) + Number(1);
       //1位から3位
       if(i < 3){
         var str = "";
         str += "<li>";
         str += "<p class='title under_line_2'>"+data.list[i].user_name+"</p>";
         str += "<p class='date'>"+data.list[i].score+" 点</p>";
         str += "</li>";
         $('#top-rank-list').append(str);
         $(".under_line_2").addClass("under_line_view");
       }

       console.log(ranking)
       //4位から20位
       if(i >= 3 && i<50){
         var str = "";
         str += "<li>";
         str += "<p class='ranking'>"+ranking+"位</p>";
         str += "<p class='title'>"+data.list[i].user_name+"</p>";
         str += "<p class='date'>"+data.list[i].score+" 点</p>";
         str += "</li>";
         $('#sub_rank').append(str);
       }
       //50位
       if(i >= 50 && i < 100){
         var str = "";
         str += "<li>";
         str += "<p class='ranking'>"+ranking+"位</p>";
         str += "<p class='title'>"+data.list[i].user_name+"</p>";
         str += "<p class='date'>"+data.list[i].score+" 点</p>";
         str += "</li>";
         $('#rank50th').append(str);
       }
       //100位
       if(i == 100){
         var str = "";
         str += "<li>";
         str += "<p class='title'>"+data.list[i].user_name+"</p>";
         str += "<p class='date'>"+data.list[i].score+" 点</p>";
         str += "</li>";
         $('#rank100th').append(str);
       }
     }
   }).fail(function(XMLHttpRequest, textStatus, errorThrown){
     console.log(XMLHttpRequest);
     console.log(textStatus);
     console.log(errorThrown);
   });
}

export {Query}
