/*Canvas*/

var canvas = document.querySelector("#canvas");
var X, Y, W, H, r;
canvas.height = 250;
function inicializarCanvas() {
    if (canvas && canvas.getContext) {
        var ctx = canvas.getContext("2d");
        if (ctx) {
            var s = getComputedStyle(canvas);
            var w = s.width;
            var h = s.height;

            W = canvas.width = w.split("px")[0];
            H = canvas.height = h.split("px")[0];

            X = Math.floor(W / 2);
            Y = Math.floor(H / 2);
            r = Math.floor(W / 3);

            dibujarEnElCanvas(ctx);
        }
    }
}

function dibujarEnElCanvas(ctx) {
    ctx.strokeStyle = "#006400";
    ctx.fillStyle = "#6ab155";
    ctx.lineWidth = 5;
    ctx.arc(X, Y, r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}