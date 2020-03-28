class Option {
    constructor(height, width, bg, fontSize, textAlign){
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    makeDiv(){
        let div = document.createElement('div');
        document.body.appendChild(div);
        div.textContent = 'asdfasdfasdf';
        div.style.cssText = `height: ${this.height}px;
            width: ${this.width}px;
            background-color: ${this.bg};
            font-size: ${this.fontsize}px;
            text-align: ${this.textAlign};`;
    }
}

let div = new Option(50, 200, 'orange', 20, 'center');

div.makeDiv();