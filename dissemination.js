var data=JSON.parse(localStorage.getItem("data"))
var protectiveMark=["RESTRICTED","CONFIDENTIAL","SECRET","TOP SECRET"]


class Dissemination{
     onLoad(){
        addEventListener("load",function(e){
             document.getElementById("des_protect").textContent=protectiveMark[data[0].protecTiveMark];
        })

        for(var i=0;i<data.length;i++){
            document.getElementById("dissemination-container").innerHTML+='<div class="col-md-8"><h4>SUMMERY OF TEXT:</h4></div><div style="vertical-align:top" class="col-md-4"><h4 style="margin-left:35px">GRADING</h4><ul class="des_grading" style="display:inline-block"><li style="display:inline-block">'+data[i].grading[0]+'</li><li style="display:inline-block">'+data[i].grading[1]+'</li><li style="display:inline-block">'+data[i].grading[2]+'</li></ul></div><div class="col-md-12"><textarea rows="10" disabled id="diss_s_'+i+'" style="width:70%">"'+data[i].value+'"</textarea></div><div class="col-md-6"><h4>Detailed handling instruction</h4></div><div class="col-md-12"><textarea rows="7" disabled id="diss_h_'+i+'" style="width:70%">"'+data[i].freeText+'"</textarea></div>'
        }
    }
}



var obj= new Dissemination();
obj.onLoad();