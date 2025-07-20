function HtmlElement() {
  this.click = function() {
    console.log("Clicked");
    this.focus();
  };
}

HtmlElement.prototype.focus = function() {
  console.log("Focused");
};

function HtmlSelectElement(items = []) {
  this.items = items;

  this.addItem = function(item) {
    this.items.push(item);
  };

  this.removeItem = function(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  };

  this.render = function() {
    const options = this.items.map(item => `<option>${item}</option>`).join('');
    return `<select>${options}</select>`;
  };
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlImageElement(src) {
  this.src = src;

  this.render = function() {
    return `<img src="${this.src}" />`;
  };
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

const select = new HtmlSelectElement([1, 2, 3]);
console.log(select.render());

const image = new HtmlImageElement("https://example.com/cat.png");
console.log(image.render());
