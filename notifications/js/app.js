
document.getElementById('create').addEventListener('click', function() {
    var noti = mozCreateNotification('Urgent Message',
                                     'You should do whatever this message says.');
    // Display it
});