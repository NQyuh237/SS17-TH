//cách khởi tạo đối tượng:
// cách 1:
// let quangHuy = {
//     name: "Nguyễn Quang Huy",
//     age: 25,
//     class: "HN-JV230630",
//     move: () => {
//         console.log("di chuyển nhanh");
//     }
// }
// console.log(quangHuy);
// //truy cập 1 thuộc tính hoặc phương thức sử dụng dấu chấm . 
// console.log(quangHuy.move());
// quangHuy.age = 26;
// quangHuy.maSV = "SV237";
// console.log(quangHuy);


//cách 2 : định nghĩa giống như 1 hàm để định nghĩa 1 lớp
// function studens(name, age, className, maSV) {
//     console.log(this); // this đại diện cho đối tượng sinh ra từ lớp / hàm đó
//     this.name = name; //gán gá trị tham số cho thuộc tính fullname
//     this.age = age;
//     this.className = className;
//     this.maSV = maSV;
//     this.move = () => { "di chuyen cham" }
// }
// let huy = new studens("huy", 27, "JV06", "SV237");
// let quangHuy1 = new studens("nguyen quang huy", 18, "JV06", "SV237");
// console.log(quangHuy1);
// let obj = { "màu mũ": "đỏ" }
// obj["màu mũ"];
// console.log(obj);

//duyệt đối tượng
// for (const key in quangHuy1) {
//     console.log(quangHuy1[key]);
// }

// // VD1:
// let hongHai = {
//     name: "Nguyen Hong Hai",
//     age: 15,
//     class: "FPT01",
//     move: () => {
//         console.log("hoc thi ngu");
//     }
// }
// console.log(hongHai);
// hongHai.age = 18
// console.log(hongHai.move());

// // VD2:
// function students(name,age,address) {
//     console.log(this);
//     this.name = name;
//     this.age = age;
//     this.address = address;
//     this.move = ()=>{"luoi vcl"}
// }
// let hai = new studens("hai", 20, "Laocai");
// console.log(hai);



// cách thứ 3 sử dụng class trong es6
// class School {
//khai báo các thuộc tính
// fullname = "Nguyen Van A";
// age = 10;
// className = "FPT02";
// maSV = "HN0710";
// tạo constructor để gán giá trị ban đầu lúc khơi tạo
//     constructor(fullname, age, className, maSV) {
//         this.fullname = fullname;
//         this.age = age;
//         this.className = className;
//         this.maSV = maSV;
//     }
//     // định nghĩa các phương thức
//     move = () => {
//         console.log("di chuyen nhanh");
//     }
// }


// khởi tạo đối tượng
// let school1 = new School("Nguyen Van B", 9, "HHT", "SV007");
// console.log(school1);


// VD3
// class School3 {
//     constructor(fullname, age, maSV) {
//         this.fullname = fullname;
//         this.age = age;
//         this.maSV = maSV;
//         this.move = () => {
//             console.log("hoc thi dot lai con luoi");
//         }
//     }
// }
// let School4 = new School3("NHK", 3, "ABC");
// console.log(School4);
// 
// 
//tạo lớp hình học
class Shape {
    constructor(color, area, perimeter) {
        this.color = color;
        this.area = 0;
        this.perimeter = 0;
    }
}

//tạo lớp hình tam giác
class Triangle extends Shape {
    constructor(a, b, c, color, area, perimeter) {
        super(color); //gọi đến constructor của lớp shape
        this.a = a;
        this.b = b;
        this.c = c;
        this.perimeter = this.a + this.b + this.c;
        this.area = Math.sqrt((this.perimeter / 2) * ((this.perimeter / 2) - (this.perimeter / 2)) * ((this.perimeter / 2) - b) * ((this.perimeter / 2) - c));
    }
}
let Triangle1 = new Triangle(5, 10, 15, "black")

//tạo lớp hình tròn
class Circle extends Shape {
    constructor(r, color) {
        super(color);
        this.r = r;
        this.area = Math.PI * Math.pow(this.r, 2);
        this.perimeter = 2 * this.r * Math.PI
    }
}
let circle1 = new Circle(5, "red")
console.log(circle1);
//tạo lớp hình chữ nhật 
class Rectangle extends Shape {
    constructor(a, b, color) {
        super(color);
        this.a = a;
        this.b = b;
        this.area = this.a * this.b;
        this.perimeter = (this.a + this.b) * 2
    }
}
let rectangle1 = new Rectangle(5, 10, "green")
console.log(rectangle1);

//tạo lớp hình vuông
class Square extends Rectangle {
    constructor(a, color, area, perimeter) {
        super(a, a, color, area, perimeter);
    }
}
let square1 = new Square(5, "blue", 0, 0)
console.log(square1);