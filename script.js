// State
let activities = JSON.parse(localStorage.getItem('fitflow_v1')) || [];
const STEP_GOAL = 10000;
let myChart;

// DOM Elements
const goalCircle = document.getElementById('goal-circle');
const logList = document.getElementById('log-list');
const activityForm = document.getElementById('activity-form');
const modal = document.getElementById('modal-overlay');

// Circular Progress Logic
const radius = goalCircle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;
goalCircle.style.strokeDasharray = `${circumference} ${circumference}`;

function setProgress(percent) {
    const offset = circumference - (percent / 100 * circumference);
    goalCircle.style.strokeDashoffset = offset;
    document.getElementById('completion-pct').innerText = `${Math.round(percent)}%`;
}

// App Initialization
function init() {
    updateDashboard();
    renderLogs();
    initChart();
    document.getElementById('current-date').innerText = new Date().toLocaleDateString('en-US', { 
        weekday: 'long', month: 'long', day: 'numeric' 
    });
}

function updateDashboard() {
    const totals = activities.reduce((acc, curr) => {
        acc.steps += Number(curr.steps);
        acc.calories += Number(curr.calories);
        acc.duration += Number(curr.duration);
        return acc;
    }, { steps: 0, calories: 0, duration: 0 });

    document.getElementById('stat-steps').innerText = totals.steps.toLocaleString();
    document.getElementById('stat-calories').innerText = totals.calories.toLocaleString();
    document.getElementById('stat-duration').innerText = totals.duration.toLocaleString();

    const progress = Math.min((totals.steps / STEP_GOAL) * 100, 100);
    setProgress(progress || 0);
    if (myChart) updateChartData();
}

function renderLogs() {
    logList.innerHTML = activities.length ? '' : '<p style="text-align:center; color:#94a3b8; padding:20px;">No activities logged yet.</p>';
    activities.slice().reverse().forEach((act, index) => {
        const realIndex = activities.length - 1 - index;
        const item = document.createElement('div');
        item.className = 'log-item';
        item.innerHTML = `
            <div class="log-info">
                <strong>${act.type}</strong>
                <p>${act.duration}m • ${act.calories}kcal • ${act.steps} steps</p>
            </div>
            <button class="del-btn" onclick="deleteActivity(${realIndex})"><i class="fas fa-trash"></i></button>
        `;
        logList.appendChild(item);
    });
}

// Chart.js Configuration
function initChart() {
    const ctx = document.getElementById('weeklyChart').getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, '#6c5ce7');
    gradient.addColorStop(1, '#a29bfe');

    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Calories',
                data: [0, 0, 0, 0, 0, 0, 0],
                backgroundColor: gradient,
                borderRadius: 10
            }]
        },
        options: {
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: { beginAtZero: true, grid: { color: '#f1f5f9' } },
                x: { grid: { display: false } }
            }
        }
    });
    updateChartData();
}

function updateChartData() {
    const dailyCals = [0, 0, 0, 0, 0, 0, 0];
    activities.forEach(act => {
        const day = new Date(act.timestamp).getDay();
        const index = day === 0 ? 6 : day - 1; // Adjust for Mon-Sun
        dailyCals[index] += Number(act.calories);
    });
    myChart.data.datasets[0].data = dailyCals;
    myChart.update();
}

// Event Listeners
document.getElementById('add-log-btn').onclick = () => modal.style.display = 'flex';
document.getElementById('cancel-btn').onclick = () => modal.style.display = 'none';

activityForm.onsubmit = (e) => {
    e.preventDefault();
    const entry = {
        type: document.getElementById('exercise-type').value,
        duration: document.getElementById('duration').value,
        calories: document.getElementById('calories').value,
        steps: document.getElementById('steps').value,
        timestamp: new Date().toISOString()
    };
    activities.push(entry);
    localStorage.setItem('fitflow_v1', JSON.stringify(activities));
    
    modal.style.display = 'none';
    activityForm.reset();
    updateDashboard();
    renderLogs();
    showToast("Activity logged!");
};

function deleteActivity(index) {
    if (confirm("Delete this log?")) {
        activities.splice(index, 1);
        localStorage.setItem('fitflow_v1', JSON.stringify(activities));
        updateDashboard();
        renderLogs();
        showToast("Log removed");
    }
}

function showToast(msg) {
    const t = document.getElementById('toast');
    t.innerText = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3000);
}

init();