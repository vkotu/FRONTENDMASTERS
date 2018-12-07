export class Rectangle {
    constructor (width, height) {
      this.width  = width;
      this.height = height;
    }

    set width (width) { this.width = width; }
    get width () { return this.width; }
    set height (height) { this.height = height; }
    get height () { return this.height; }
    get area () { return this.height * this.width; }

}
