$(document).ready(function(){
        var url="data.json";
        $("#topSpots tbody").html("");
        $.getJSON(url,function(SDTS){
        $.each(SDTS, function(i,SDTS){
        var newRow =
        "<tr>"
        +"<td>"+SDTS.name+"</td>"
        +"<td>"+SDTS.description+"</td>"
        +"<td>"+`<a href=https://www.google.com/maps?q=${SDTS.location}>link</a>`
        +"</td>"
        +"</tr>";
        $(newRow).appendTo("#topSpots tbody");
        });
        });
        
        });


    