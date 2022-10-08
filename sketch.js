let enableBtn;
let note = "";
let noteSpan;

function setup() {
  createCanvas(400, 400);
  getAudioContext().resume();
  // enableBtn = createButton('Enable Mic');
  // enableBtn.mousePressed(toggleLiveInput);
  toggleLiveInput();
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