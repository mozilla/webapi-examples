
// Good Web citizens check for capabilities!
// The API is `navigator.vibrate`, so we'll check to see that the `navigator`
// object has a property called `vibrate`.

if ('vibrate' in navigator) {

    // There are two ways to call navigator.vibrate.
    // The simplest is just to pass it the number of milliseconds
    // the device should vibrate.

    document.querySelector('#vibrate-200').addEventListener('touchstart',
        function() {
            navigator.vibrate(200);
        }
    );


    // The second way is to pass an Array of timings.
    // The times will alternate between the number of milliseconds the motor
    // is on and the number of milliseconds the motor is off.

    document.querySelector('#vibrate-pulse').addEventListener('touchstart',
        function() {
            // on 100ms, off 200ms, on 100ms, etc.
            navigator.vibrate([100,200,100,200,100]);
        }
    );


    // A more complex example.

    function sos() {
        navigator.vibrate([
            100,200,100,200,100, //s
            200,
            300,200,300,200,300, //o
            200,
            100,200,100,200,100  //s
        ]);
    }

    document.querySelector('#vibrate-sos').addEventListener('touchstart',
        function() {
            sos();
        }
    );

    // You can't make the vibration motor run indefinitely, but you can make
    // it run a pretty long time.

    document.querySelector('#vibrate-long').addEventListener('touchstart',
        function() {
            navigator.vibrate(10000); // 10 seconds
        }
    );

    // Fortunately, by calling the api with a value of 0, you can also stop
    // the vibration.

    document.querySelector('#vibrate-stop').addEventListener('touchstart', function() {
        navigator.vibrate(0);
    });

} else {

    // We couldn't find the vibration API, so let's display an error message.

    document.querySelector('#support-message').classList.add('api-missing');

}

