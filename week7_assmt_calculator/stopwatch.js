let startTime = 0;
let elapsedTime = 0;
let intervalId;
let running = false;

// Get elements
const timer = $('#timer');
const datePicker = $('#datePicker');


// Initialize date picker to current date
const setCurrentDate = () => {
    const today = new Date().toISOString().split('T')[0];
    datePicker.val(today)
};
setCurrentDate();

// prevent type
$('#datePicker').on('keydown paste', function(e) {
    e.preventDefault(); 
});

// Format time in HH:MM:SS
const formatTime = (time) => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const ms = Math.floor((time % 1000) / 100);


    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    const formattedMs = String(ms);

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    //return `${formattedHours}:${formattedMinutes}:${formattedSeconds}.${formattedMs}`;
};

// Update time label asynchronously using async/await and promises
const updateTimeLabel = async () => {
    timer.html(formatTime(elapsedTime));
};

// Start
const startwatch = async () => {
    if (!running) {
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(async () => {
            elapsedTime = Date.now() - startTime;
            await updateTimeLabel();
        }, 100);
        running = true;
    }
};

// Stop
const stopwatch = async () => {
    if (running) {
        clearInterval(intervalId);
        running = false;
    }
};

// Reset: async && await
const resetwatch = async () => {
    clearInterval(intervalId);
    elapsedTime = 0;
    await updateTimeLabel();
    running = false;
};

// 
$('#startBtn').on('click', () => {
    startwatch();
});

$("#stopBtn").on('click', () => {
     stopwatch();
});

$("#resetBtn").on('click', () => {
     resetwatch();    
});
