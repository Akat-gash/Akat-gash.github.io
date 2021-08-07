class Duck {

    constructor(){
        this.flying=false;
        this.quaking=false;
        this.xPos = 0;
        this.yPos =0;
    }

    takeOff(){
        this.flying = true;
    }
    land(){
        this.flying =false;
    }
    startQuaking(){
        this.quaking = true;
    }
    stopQuaking(){
        this.quaking = false;
    }
    moveTo(x, y){
        this.xPos=x;
        this.yPos=y;
        if (this.xPos!=0 && this.yPos!=0){
            console.log("Duck is swimming to "+ this.xPos+", "+this.yPos)
        }
        if((this.xPos!=0 && this.yPos!=0)&& this.flying==false&&this.quaking==true){
            console.log("Duck is swimming to "+ this.xPos+", "+this.yPos+ "while quaking")
        }
        if((this.xPos!=0 && this.yPos!=0)&& this.flying==true){
            console.log("Duck is flying to "+ this.xPos+", "+this.yPos+ "while quaking")
        }
        if((this.xPos!=0 && this.yPos!=0)&& this.flying==true&& this.quaking==true){
            console.log("Duck is flying to "+ this.xPos+", "+this.yPos+ "while quaking")
        }
    }

    moveTo(x,y){
        this.xPos = x;
        this.yPos = y;

        if(this.quaking==false && this.flying==false){
            console.log(`Duck is swimming to ${this.xPos},${this.yPos}`)
        }

        if(this.quaking==true && this.flying==false){
            console.log(`Duck is swimming to ${this.xPos},${this.yPos} while quacking` )
        }

        if(this.quaking==false && this.flying==true){
            console.log(`Duck is flying to ${this.xPos},${this.yPos}`)
        }

        if(this.quaking==true && this.flying==true){
            console.log(`Duck is flying to ${this.xPos},${this.yPos} while quacking` )
        }

    
    }
}
module.exports = Duck;