import { observable, action } from "mobx";
class Kdata{
    @observable bbw;
    @observable List;
    constructor(){ 
    this.bbw='2345'
    this.ddalist=[
        {
         ysm:'maria',
         phph:'1876356798',
         addrrss:'WuHanXijie',
         hhy:'Lucy',
         hhys:'2019-7-6',
         end:'2019-7-8'
        }
    ]
   
    }

  bbcc=(e)=>{
     this.ddalist.push(e)
  }  
    
  

}
const kdata=new Kdata()
export {kdata}
