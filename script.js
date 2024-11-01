 // Show each section when scrolled into view
 document.addEventListener("scroll", function () {
    document.querySelectorAll(".section").forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            section.classList.add("show");
        }
    });
});

// Usage Line Graph
const usageCtx = document.getElementById('usageGraph').getContext('2d');
const usageGraph = new Chart(usageCtx, {
    type: 'line',
    data: {
        labels: ['1980', '1990', '2000', '2010', '2020', 'Present'],
        datasets: [{
            label: 'Hybrid Seed Usage (in %)',
            data: [5, 15, 30, 50, 70, 85],
            borderColor: '#4CAF50',
            fill: false,
            pointHoverRadius: 10,
            pointHoverBackgroundColor: '#4CAF50'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            tooltip: {
                enabled: true,
                callbacks: {
                    label: function(context) {
                        return `Usage in ${context.label}: ${context.raw}%`;
                    }
                }
            }
        }
    }
});

// Biodiversity Index Bar Graph
const biodiversityCtx = document.getElementById('biodiversityGraph').getContext('2d');
const biodiversityGraph = new Chart(biodiversityCtx, {
    type: 'bar',
    data: {
        labels: ['1980', '1990', '2000', '2010', '2020', 'Present'],
        datasets: [{
            label: 'Biodiversity Index',
            data: [90, 80, 70, 60, 50, 40],
            backgroundColor: '#FF7043',
            hoverBackgroundColor: '#D84315'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            tooltip: {
                enabled: true,
                callbacks: {
                    label: function(context) {
                        return `Biodiversity Index in ${context.label}: ${context.raw}`;
                    }
                }
            }
        }
    }
});

// Historical Seed Usage Pie Chart
const historicalPieCtx = document.getElementById('historicalPieChart').getContext('2d');
const historicalPieChart = new Chart(historicalPieCtx, {
    type: 'pie',
    data: {
        labels: ['Traditional Crops', 'Hybrid Crops'],
        datasets: [{
            data: [80, 20],  // Example historical data
            backgroundColor: ['#66BB6A', '#FFA726'],
            hoverBackgroundColor: ['#388E3C', '#FB8C00']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            tooltip: {
                enabled: true,
                callbacks: {
                    label: function(context) {
                        return `${context.label}: ${context.raw}%`;
                    }
                }
            }
        }
    }
});

// Current Seed Usage Pie Chart
const currentPieCtx = document.getElementById('currentPieChart').getContext('2d');
const currentPieChart = new Chart(currentPieCtx, {
    type: 'pie',
    data: {
        labels: ['Traditional Crops', 'Hybrid Crops'],
        datasets: [{
            data: [35, 65],  // Example current data
            backgroundColor: ['#66BB6A', '#FFA726'],
            hoverBackgroundColor: ['#388E3C', '#FB8C00']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            tooltip: {
                enabled: true,
                callbacks: {
                    label: function(context) {
                        return `${context.label}: ${context.raw}%`;
                    }
                }
            }
        }
    }
});
window.addEventListener('load', function() {
    const container = document.getElementById('conclusion');
    container.style.opacity = 1;
    container.style.transform = 'translateY(0)';
});
// tools//
function updateComparison() {
    const crop = document.getElementById('cropSelect').value;
    
    // Placeholder logic for displaying data
    document.getElementById('nativeYield').innerText = crop === 'wheat' ? '3 tons/ha' : 'TBD';
    document.getElementById('hybridYield').innerText = crop === 'wheat' ? '4.5 tons/ha' : 'TBD';
    // Add more comparison logic as needed
}

function calculateImpact() {
    const region = document.getElementById('region').value;
    const rainfall = document.getElementById('rainfall').value;
    const soil = document.getElementById('soil').value;
    
    // Sample logic for calculation and updating the result
    const impactResult = `Impact for ${region}: ${rainfall}mm rainfall, Soil: ${soil}`;
    
    document.getElementById('impactResult').innerText = impactResult;
}
