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
                    label: function (context) {
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
                    label: function (context) {
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
                    label: function (context) {
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
                    label: function (context) {
                        return `${context.label}: ${context.raw}%`;
                    }
                }
            }
        }
    }
});
window.addEventListener('load', function () {
    const container = document.getElementById('conclusion');
    container.style.opacity = 1;
    container.style.transform = 'translateY(0)';
});
// tools//
// function updateComparison() {
// const crop = document.getElementById('cropSelect').value;

// // Placeholder logic for displaying data
// document.getElementById('nativeYield').innerText = crop === 'wheat' ? '3 tons/ha' : 'TBD';
// document.getElementById('hybridYield').innerText = crop === 'wheat' ? '4.5 tons/ha' : 'TBD';
// document.getElementById('nativeResistance').innerText = crop === 'wheat' ? '3 tons/ha' : 'TBD';
// document.getElementById('hybridResistance').innerText = crop === 'wheat' ? '4.5 tons/ha' : 'TBD';
// document.getElementById('nativeImpact').innerText = crop === 'wheat' ? '3 tons/ha' : 'TBD';
// document.getElementById('hybridImpact').innerText = crop === 'wheat' ? '4.5 tons/ha' : 'TBD';
// document.getElementById('nativeEconomic').innerText = crop === 'wheat' ? '3 tons/ha' : 'TBD';
// document.getElementById('hybridEconomic').innerText = crop === 'wheat' ? '4.5 tons/ha' : 'TBD';


// document.getElementById('nativeYield').innerText = crop === 'rice' ? '3 tons/ha' : 'TBD';
// document.getElementById('hybridYield').innerText = crop === 'rice' ? '4.5 tons/ha' : 'TBD';
// document.getElementById('nativeResistance').innerText = crop === 'rice' ? '3 tons/ha' : 'TBD';
// document.getElementById('hybridResistance').innerText = crop === 'rice' ? '4.5 tons/ha' : 'TBD';
// document.getElementById('nativeImpact').innerText = crop === 'rice' ? '3 tons/ha' : 'TBD';
// document.getElementById('hybridImpact').innerText = crop === 'rice' ? '4.5 tons/ha' : 'TBD';
// document.getElementById('nativeEconomic').innerText = crop === 'rice' ? '3 tons/ha' : 'TBD';
// document.getElementById('hybridEconomic').innerText = crop === 'rice' ? '4.5 tons/ha' : 'TBD';

// document.getElementById('nativeYield').innerText = crop === 'corn' ? '3 tons/ha' : 'TBD';
// document.getElementById('hybridYield').innerText = crop === 'corn' ? '4.5 tons/ha' : 'TBD';
// document.getElementById('nativeResistance').innerText = crop === 'corn' ? '3 tons/ha' : 'TBD';
// document.getElementById('hybridResistance').innerText = crop === 'corn' ? '4.5 tons/ha' : 'TBD';
// document.getElementById('nativeImpact').innerText = crop === 'corn' ? '3 tons/ha' : 'TBD';
// document.getElementById('hybridImpact').innerText = crop === 'corn' ? '4.5 tons/ha' : 'TBD';
// document.getElementById('nativeEconomic').innerText = crop === 'corn' ? '3 tons/ha' : 'TBD';
// document.getElementById('hybridEconomic').innerText = crop === 'corn' ? '4.5 tons/ha' : 'TBD';
// Add more comparison logic as needed
// }
function updateComparison() {
    const crop = document.getElementById('cropSelect').value;

    // Define values for each crop type
    let nativeYield, hybridYield, nativeResistance, hybridResistance, nativeImpact, hybridImpact, nativeEconomic, hybridEconomic;

    // Set values based on selected crop
    switch (crop) {
        case 'wheat':
            nativeYield = '3 tons/ha';
            hybridYield = '4.5 tons/ha';
            nativeResistance = 'Moderate';
            hybridResistance = 'High';
            nativeImpact = 'Low';
            hybridImpact = 'Medium';
            nativeEconomic = 'Low cost';
            hybridEconomic = 'Higher cost';
            break;

        case 'rice':
            nativeYield = '2.5 tons/ha';
            hybridYield = '5 tons/ha';
            nativeResistance = 'Moderate';
            hybridResistance = 'High';
            nativeImpact = 'Medium';
            hybridImpact = 'Higher';
            nativeEconomic = 'Cost-effective';
            hybridEconomic = 'Higher cost';
            break;

        case 'corn':
            nativeYield = '2.5 tons/ha';
            hybridYield = '4.5 tons/ha';
            nativeResistance = 'Low';
            hybridResistance = 'High';
            nativeImpact = 'Moderate';
            hybridImpact = 'High';
            nativeEconomic = 'Cost-effective';
            hybridEconomic = 'More expensive';
            break;

        case 'barley':
            nativeYield = '1.8 tons/ha';
            hybridYield = '3 tons/ha';
            nativeResistance = 'Low';
            hybridResistance = 'High';
            nativeImpact = 'Low';
            hybridImpact = 'Moderate';
            nativeEconomic = 'Cost-effective';
            hybridEconomic = 'Expensive';
            break;

        case 'soyabean':
            nativeYield = '1.5 tons/ha';
            hybridYield = '3 tons/ha';
            nativeResistance = 'Moderate';
            hybridResistance = 'High';
            nativeImpact = 'Low';
            hybridImpact = 'High';
            nativeEconomic = 'Low Cost';
            hybridEconomic = 'Higher cost, higher market value';
            break;

        case 'millet':
            nativeYield = '1 tons/ha';
            hybridYield = '3 tons/ha';
            nativeResistance = 'High (drought-tolerant)';
            hybridResistance = 'Very High (drought-tolerant)';
            nativeImpact = ' Very Low';
            hybridImpact = 'Low';
            nativeEconomic = 'Low cost, low profit';
            hybridEconomic = 'Moderate input cost, high profitability';
            break;

        case 'cotton':
            nativeYield = '0.8 tons/ha';
            hybridYield = '1.6 tons/ha';
            nativeResistance = 'Low';
            hybridResistance = 'High (pest-resistant)';
            nativeImpact = '  Low';
            hybridImpact = 'Moderate';
            nativeEconomic = 'Low cost';
            hybridEconomic = 'Higher costs, high demand';
            break;


        case 'tomato':
            nativeYield = '30 tons/ha';
            hybridYield = '60 tons/ha';
            nativeResistance = 'Low';
            hybridResistance = 'Moderate';
            nativeImpact = '  Low';
            hybridImpact = ' Moderate, requires more water';
            nativeEconomic = 'Cost-effective';
            hybridEconomic = 'Higher input costs, profitable yield';
            break;

        case 'potato':
            nativeYield = '20 tons/ha';
            hybridYield = '35 tons/ha';
            nativeResistance = 'Moderate';
            hybridResistance = 'High (disease-resistant)';
            nativeImpact = '  Low';
            hybridImpact = 'Moderate';
            nativeEconomic = ' Cost-effective';
            hybridEconomic = ' Higher cost, high profitability';
            break;

        case 'sunflower':
            nativeYield = '1.2 tons/ha';
            hybridYield = '2.5 tons/ha';
            nativeResistance = 'Moderate (pest tolerance)';
            hybridResistance = 'High (disease-resistant, drought-tolerant)';
            nativeImpact = 'Low';
            hybridImpact = 'Moderate, requires more fertilizer';
            nativeEconomic = 'Lower input cost, moderate profitability';
            hybridEconomic = 'Higher input costs, higher market demand and profitability';
            break;

        case 'sugercane':
            nativeYield = '60 tons/ha';
            hybridYield = '90-120 tons/ha';
            nativeResistance = 'Low to moderate (less tolerant to drought and pests)';
            hybridResistance = 'High (pest and disease-resistant)';
            nativeImpact = 'Low, but less water-efficient';
            hybridImpact = 'Moderate to high due to increased water and fertilizer needs';
            nativeEconomic = ' Lower production cost, less profitable';
            hybridEconomic = 'High initial investment, high profitability due to higher yield';
            break;


        case 'green_gram':
            nativeYield = '0.6 tons/ha';
            hybridYield = '1.5 tons/ha';
            nativeResistance = 'Moderate (good drought tolerance)';
            hybridResistance = 'High (enhanced disease resistance)';
            nativeImpact = 'Low, nitrogen-fixing, improves soil health';
            hybridImpact = 'Low, nitrogen-fixing but with higher fertilizer input';
            nativeEconomic = 'Low input cost, moderate profitability';
            hybridEconomic = 'Moderate input cost, higher profitability and market value';
            break;


        case 'black_gram':
            nativeYield = '0.5 tons/ha';
            hybridYield = '1.2 tons/ha';
            nativeResistance = 'Moderate (drought-tolerant)';
            hybridResistance = 'High (improved pest and disease resistance)';
            nativeImpact = 'Low, nitrogen-fixing, beneficial for soil';
            hybridImpact = 'Low, soil-enriching, requires moderate fertilizer input';
            nativeEconomic = 'Low input cost, moderate profitability';
            hybridEconomic = 'Moderate input cost, higher profitability due to increased yield';
            break;



        default:
            nativeYield = 'TBD';
            hybridYield = 'TBD';
            nativeResistance = 'TBD';
            hybridResistance = 'TBD';
            nativeImpact = 'TBD';
            hybridImpact = 'TBD';
            nativeEconomic = 'TBD';
            hybridEconomic = 'TBD';
    }

    // Update UI with the selected crop's data
    document.getElementById('nativeYield').innerText = nativeYield;
    document.getElementById('hybridYield').innerText = hybridYield;
    document.getElementById('nativeResistance').innerText = nativeResistance;
    document.getElementById('hybridResistance').innerText = hybridResistance;
    document.getElementById('nativeImpact').innerText = nativeImpact;
    document.getElementById('hybridImpact').innerText = hybridImpact;
    document.getElementById('nativeEconomic').innerText = nativeEconomic;
    document.getElementById('hybridEconomic').innerText = hybridEconomic;
}

function calculateImpact() {
    const region = document.getElementById('region').value;
    const rainfall = document.getElementById('rainfall').value;
    const soil = document.getElementById('soil').value;

    // Sample logic for calculation and updating the result
    const impactResult = `Impact for ${region}: ${rainfall}mm rainfall, Soil: ${soil}`;

    document.getElementById('impactResult').innerText = impactResult;
}
