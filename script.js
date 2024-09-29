document.addEventListener('DOMContentLoaded', () => {
    const logList = document.getElementById('log-list');
    
    // Log exercise from the plan to the workout log
    document.querySelectorAll('#workout-plan .day ul li strong').forEach(item => {
        item.parentElement.addEventListener('click', () => {
            const exercise = item.textContent;
            const sets = item.parentElement.textContent.match(/Sets: (\d+)/)[1];
            const reps = item.parentElement.textContent.match(/Reps: (.*?)(,|$)/)[1];

            const logEntry = document.createElement('li');
            logEntry.textContent = `${exercise}: ${sets} sets, ${reps}`;
            logEntry.style.animation = 'fadeIn 0.5s';
            logList.appendChild(logEntry);
        });
    });

    // Log custom exercises
    document.getElementById('exercise-form').addEventListener('submit', (event) => {
        event.preventDefault();
        
        const exercise = document.getElementById('exercise').value;
        const sets = document.getElementById('sets').value;
        const reps = document.getElementById('reps').value;
        const weight = document.getElementById('weight').value;

        const logEntry = document.createElement('li');
        logEntry.textContent = `${exercise}: ${sets} sets, ${reps} reps, ${weight} lbs`;
        logEntry.style.animation = 'fadeIn 0.5s';
        logList.appendChild(logEntry);

        // Clear the form
        event.target.reset();
    });
});
function toggleTheme() {
    const body = document.body;
    const dayElements = document.querySelectorAll('.day');
    const detailsElements = document.querySelectorAll('.details');
    const detailBoxes = document.querySelectorAll('.detail-box');

    body.classList.toggle('dark');
    dayElements.forEach(day => day.classList.toggle('dark'));
    detailsElements.forEach(details => details.classList.toggle('dark'));
    detailBoxes.forEach(box => box.classList.toggle('dark'));
}
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('exercise-form');
    const logList = document.getElementById('log-list');

    // Load saved logs from localStorage
    let exerciseLogs = JSON.parse(localStorage.getItem('exerciseLogs')) || [];

    // Function to display saved logs
    const displayLogs = () => {
        logList.innerHTML = '';
        exerciseLogs.forEach((log, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${log.exercise} - Sets: ${log.sets}, Reps: ${log.reps}, Weight: ${log.weight} lbs`;
            
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = () => deleteLog(index);
            
            listItem.appendChild(deleteButton);
            logList.appendChild(listItem);
        });
    };

    // Function to delete a log
    const deleteLog = (index) => {
        exerciseLogs.splice(index, 1);
        localStorage.setItem('exerciseLogs', JSON.stringify(exerciseLogs));
        displayLogs();
    };

    // Add new log entry
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const exercise = document.getElementById('exercise').value;
        const sets = document.getElementById('sets').value;
        const reps = document.getElementById('reps').value;
        const weight = document.getElementById('weight').value;

        // Save the new log entry to the array
        const newLog = { exercise, sets, reps, weight };
        exerciseLogs.push(newLog);

        // Save logs to localStorage
        localStorage.setItem('exerciseLogs', JSON.stringify(exerciseLogs));

        // Reset the form
        form.reset();

        // Display updated logs
        displayLogs();
    });

    // Initial display of logs
    displayLogs();
});
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('exercise-form');
    const logList = document.getElementById('log-list');

    // Navigation buttons
    const homeBtn = document.getElementById('home-btn');
    const logBtn = document.getElementById('log-btn');
    
    const homeSection = document.getElementById('home-section');
    const logSection = document.getElementById('log-section');

    // Load saved logs from localStorage
    let exerciseLogs = JSON.parse(localStorage.getItem('exerciseLogs')) || [];

    // Function to display saved logs
    const displayLogs = () => {
        logList.innerHTML = '';
        exerciseLogs.forEach((log, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${log.exercise} - Sets: ${log.sets}, Reps: ${log.reps}, Weight: ${log.weight} lbs`;
            
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = () => deleteLog(index);
            
            listItem.appendChild(deleteButton);
            logList.appendChild(listItem);
        });
    };

    // Function to delete a log
    const deleteLog = (index) => {
        exerciseLogs.splice(index, 1);
        localStorage.setItem('exerciseLogs', JSON.stringify(exerciseLogs));
        displayLogs();
    };

    // Add new log entry
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const exercise = document.getElementById('exercise').value;
        const sets = document.getElementById('sets').value;
        const reps = document.getElementById('reps').value;
        const weight = document.getElementById('weight').value;

        // Ensure all values are captured
        if (!exercise || !sets || !reps || !weight) return;

        // Save the new log entry to the array
        const newLog = { exercise, sets, reps, weight };
        exerciseLogs.push(newLog);

        // Save logs to localStorage
        localStorage.setItem('exerciseLogs', JSON.stringify(exerciseLogs));

        // Reset the form
        form.reset();

        // Display updated logs
        displayLogs();
    });

    // Navigation functionality
    homeBtn.addEventListener('click', () => {
        homeSection.style.display = 'block';
        logSection.style.display = 'none';
    });

    logBtn.addEventListener('click', () => {
        homeSection.style.display = 'none';
        logSection.style.display = 'block';
        displayLogs(); // Ensure logs are updated every time Log Page is accessed
    });

    // Initial display of logs
    displayLogs();
});
