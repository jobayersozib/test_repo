type dataMap={id:number,value:string,grading:string[]}


class TextBoxHandle{
    public targetElement;

    public data=[];

    constructor(){
        this.targetElement=document.getElementsByClassName("text_box");
    }
    public setData(){
        for(var i=0;i<this.targetElement.length;i++){
            this.data.push({id:this.targetElement[i].id,value:this.targetElement[i].value,grading:[]})
           
        }
    }

}

document.getElementById("s_and_r").addEventListener("click",function(){
    alert("GOTCH..");
    let obj= new TextBoxHandle();

    obj.setData();

})
