class Polygon{
    constructor(length,width,color,name){
      this.length=length;
      this.width=width;
      this.color=color;
      this.name=name;
    }
    toString(){
        return `${this.name}=> color is: ${this.color} and size: ${this.length} , ${this.width}`;
    }
    areaOfShape(){
        return `Area => ${this.length * this.width}`;
    }
}

class Rectangle extends Polygon{
    constructor(rectLen,rectWid,rectClr,rectNm){
        super(rectLen,rectWid,rectClr,rectNm);

    }

}

class Square extends Polygon{
    constructor(sqLen,sqClr,sqNm){
        super(sqLen,sqLen,sqClr,sqNm);
    }

}

class Circle extends Polygon{
    constructor(rad1,circClr,circNm){
        super(rad1,rad1,circClr,circNm);

    }
    toString(){
        return ` ${this.name}=> color is: ${this.color} and size: ${this.length}`;
    }
    areaOfShape(){
        return `Area = ${Math.PI*(this.length *this.length)}`;
    }
}

class Triangle extends Polygon{
    constructor(side1,side2,triClr,triNm,side3){
        super(side1,side2,triClr,triNm);
        this.side3=side3;
    }
    toString(){
        return `${super.toString()} , ${this.side3} `;
    }
    areaOfShape(){
        return `Area= ${this.length * this.width *  this.side3}`;
    }
}

var rect=new Rectangle(30,60,'red','rectangle');
var circle= new Circle(20,"green","circle");
var square=new Square(40,'blue','square');
var tri=new Triangle(25,15,'blueviolet','triangle',50);

console.log(rect.toString());
console.log(rect.areaOfShape());
console.log(circle.toString());
console.log(circle.areaOfShape());
console.log(tri.toString());
console.log(tri.areaOfShape());
console.log(square.toString());
console.log(square.areaOfShape());


//canvas
let canvas = document.getElementById('cnv');
let draw = canvas.getContext('2d');

//Rectangle
draw.beginPath();
draw.rect(10, 80, rect.width, rect.length);
draw.lineWidth=6;
draw.strokeStyle=`${rect.color}`;
draw.stroke();

//Circle
draw.beginPath();
draw.lineWidth=6;
draw.strokeStyle=`${circle.color}`;
draw.arc(150,30,circle.length,0, 2 * Math.PI, false);
draw.stroke();

//Square
draw.beginPath();
draw.rect(190, 20, square.length, square.length);
draw.lineWidth=6;
draw.strokeStyle=`${square.color}`;
draw.stroke();

//Triangle
draw.beginPath();
draw.lineWidth=2;
draw.strokeStyle=`${tri.color}`;
draw.moveTo(20,70);
draw.lineTo(60, 10);
draw.lineTo(100, 70);
draw.lineTo(20,70);
draw.stroke();
