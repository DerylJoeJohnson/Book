$(document).ready(function(){
    $("#1").click(function(){
        $.ajax({
            type:"GET",
            url:"book.json",
            success:function(data)
            {
                var output=" ";
                for(var i in data)
                {
                    var name=data[i].name;
                    var author=data[i].author;
                    var genre=data[i].genre;
                    var description=data[i].descript;
                    var img=data[i].img;
                    var price=data[i].price;

                    output+="<div class='col col-sm-4 col-4 d-flex align-items-stretch'><div class='card'> <img src='"+img+"'width=''height=''class='card-img-top'><div class='card-body'>"+name+"<br>"+author+"<br>"+genre+"<br>"+description+"<br>"+price+"<br></div></div></div>";
                
                }
                $("#book").html(output);
            }
        });
    });
});