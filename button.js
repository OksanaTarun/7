class myButton {
  constructor(width, height, type, colour) {
    this.width = width;
    this.height = height;
    this.type = type;
    this.colour = colour;
    this.props = [this.width, this.height, this.type, this.colour];
  }
  onClick() {
    console.log(this.props);
  }
}
let greenButton = new myButton(2, 3, "button", "green");
greenButton.onClick();

function testButton(greenButton) {
  if (greenButton.colour == "g") {
    greenButton.onClick();
  } else {
    console.log("This is not a green button");
  }
}
testButton(greenButton);
