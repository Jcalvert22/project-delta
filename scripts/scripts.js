// iPhone Timer Redesign - Simple Timer

let countdown = null;
let timeLeft = 0;

// When page loads
document.addEventListener('DOMContentLoaded', function() {
    try {
        setupButtons();
        console.log('JavaScript successfully uploaded');
    } catch (error) {
        console.error('Error initializing timer:', error);
    }
});

// Setup all button listeners
function setupButtons() {
    // Preset buttons
    document.querySelectorAll('.btn-preset').forEach(btn => {
        btn.addEventListener('click', function() {
            usePreset(this);
        });
    });

    // Start and Reset buttons
    document.getElementById('startBtn').addEventListener('click', startTimer);
    document.getElementById('resetBtn').addEventListener('click', resetTimer);
}

// Preset button clicked
function usePreset(button) {
    let minutes = button.getAttribute('data-minutes');
    
    // Remove active from all buttons
    document.querySelectorAll('.btn-preset').forEach(b => b.classList.remove('active'));
    
    // Make this button active
    button.classList.add('active');
    
    // Set the time
    document.getElementById('hours').value = 0;
    document.getElementById('minutes').value = minutes;
    document.getElementById('seconds').value = 0;
}

// Start timer button
function startTimer() {
    // Get values
    let hours = parseInt(document.getElementById('hours').value) || 0;
    let minutes = parseInt(document.getElementById('minutes').value) || 0;
    let seconds = parseInt(document.getElementById('seconds').value) || 0;
    
    // Calculate total seconds
    timeLeft = (hours * 3600) + (minutes * 60) + seconds;
    
    if (timeLeft === 0) {
        return;
    }
    
    // Start countdown
    document.querySelector('.status').textContent = 'Running...';
    document.getElementById('timerDisplay').classList.add('running');
    
    countdown = setInterval(function() {
        timeLeft--;
        
        if (timeLeft <= 0) {
            timerDone();
            return;
        }
        
        // Update display
        let h = Math.floor(timeLeft / 3600);
        let m = Math.floor((timeLeft % 3600) / 60);
        let s = timeLeft % 60;
        
        document.querySelector('.time').textContent = 
            `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }, 1000);
}

// Timer finished
function timerDone() {
    clearInterval(countdown);
    document.querySelector('.time').textContent = '00:00:00';
    document.querySelector('.status').textContent = 'Done!';
    document.getElementById('timerDisplay').classList.remove('running');
}

// Reset button
function resetTimer() {
    // Stop timer
    clearInterval(countdown);
    
    // Reset inputs
    document.getElementById('hours').value = 0;
    document.getElementById('minutes').value = 0;
    document.getElementById('seconds').value = 0;
    
    // Reset display
    document.querySelector('.time').textContent = '00:00:00';
    document.querySelector('.status').textContent = 'Ready';
    document.getElementById('timerDisplay').classList.remove('running');
    
    // Remove active buttons
    document.querySelectorAll('.btn-preset').forEach(b => b.classList.remove('active'));
}