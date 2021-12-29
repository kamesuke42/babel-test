const greet = name => console.log(`Hello, ${name}`);
greet('Alan');

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  area() {
    return this.height * this.width;
  }
}
const rec = new Rectangle(10, 12);
console.log(rec.area());
