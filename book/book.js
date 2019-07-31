$(document).ready(function(){
    var choice="";
    $.ajax(
    {
        type:"GET",
        url:"book.json",
        success:function(list)
        {
            var options="<select id='opt'><option value='select'>---Select---</option>";
            for (var j in list)
            {
                options+="<option value="+list[j].genre+">"+list[j].genre+"</option>";
            }
            options+="</select>";
            $('.optionid').html(options);
        }
    });

   


    $("#1").click(function(){
        $.ajax({
            type:"GET",
            url:"book.json",
            success:function(data)
            {   var x=$("#opt").val();
                var output=" ";
                for(var i in data)
                {   
                    var name=data[i].name;
                    var author=data[i].author;
                    var genre=data[i].genre;
                    var description=data[i].descript;
                    var img=data[i].img;
                    var price=data[i].price;
                    
                    if(genre==x){
                        output+="<div class='col col-sm-4 col-4 d-flex align-items-stretch'><div class='card'> <img src='"+img+"'width=''height=''class='card-img-top'><div class='card-body'>"+name+"<br>"+author+"<br>"+genre+"<br>"+description+"<br>"+price+"<br></div></div></div>";  
                    }
                    if(x=="select"){ 
                    output+="<div class='col col-sm-4 col-4 d-flex align-items-stretch'><div class='card'> <img src='"+img+"'width=''height=''class='card-img-top'><div class='card-body'>"+name+"<br>"+author+"<br>"+genre+"<br>"+description+"<br>"+price+"<br></div></div></div>";
                    }
                    console.log(x);
                    console.log(data[i].genre);
                }
                $("#book").html(output);
            }
        });
    });
});