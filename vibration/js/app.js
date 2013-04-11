
document.querySelector('#vibrate-200').addEventListener('touchstart', function() {
    navigator.vibrate(200);
});

document.querySelector('#vibrate-pulse').addEventListener('touchstart', function() {
    navigator.vibrate([100,200,100,200,100]);
});

document.querySelector('#vibrate-sos').addEventListener('touchstart', function() {
    sos();
});

document.querySelector('#vibrate-long').addEventListener('touchstart', function() {
    navigator.vibrate(10000); // 10 seconds
});

document.querySelector('#vibrate-stop').addEventListener('touchstart', function() {
    navigator.vibrate(0);
});

function sos() {
    navigator.vibrate([
        100,200,100,200,100, //s
        200,
        300,200,300,200,300, //o
        200,
        100,200,100,200,100  //s
    ]);
}

