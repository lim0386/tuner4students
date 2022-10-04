let enableBtn;
let note = "";
let noteSpan;

function setup() {
  createCanvas(400, 400);
  enableBtn = createButton('Enable Mic');
  enableBtn.mousePressed(toggleLiveInput);
  noteSpan = select('#pitch');
  textSize(48);
}

function draw() {
  background(220);

  if (noteSpan.html() != "-") {
    note = noteSpan.html();
    text(note, 200, 200);
  }
}