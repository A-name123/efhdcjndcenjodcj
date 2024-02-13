function preload() {
    }
    
    function setup() {
    createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIIDEO);
    video.hide();
    tint_color ="";
    }
    
    function draw() {
            image(video, 10, 10, 150,120);
              tint(tint_color);
    }
    function take_snapshot(){
        save('student_name.png');
    }
    function filter_tint(){
tint_color = document.getElementbyId("color_name").value;
    }