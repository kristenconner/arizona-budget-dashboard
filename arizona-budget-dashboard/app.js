// Arizona Budget Dashboard - Main Application Logic

// Global state
let currentView = 'dashboard';
let currentDepartment = null;
let fundingChart = null;
let categoryChart = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeDashboard();
    setupNavigation();
});

// Initialize dashboard with department cards
function initializeDashboard() {
    const grid = document.getElementById('department-grid');
    const departments = getAllDepartments();
    
    grid.innerHTML = '';
    
    departments.forEach(dept => {
        const card = createDepartmentCard(dept);
        grid.appendChild(card);
    });
}

// Create a department card element
function createDepartmentCard(dept) {
    const card = document.createElement('div');
    card.className = 'dept-card';
    card.onclick = () => showDepartmentDetail(dept.id);
    
    const isPositive = dept.changes.percentageChange >= 0;
    const changeClass = isPositive ? 'positive' : 'negative';
    const changeIndicator = getChangeIndicator(dept.changes.percentageChange);
    
    card.innerHTML = `
        <div class="card-header">
            <div class="card-icon">${dept.icon}</div>
            <div class="card-change ${changeClass}">${changeIndicator}</div>
        </div>
        <h3 class="card-title">${dept.abbreviation}</h3>
        <p class="card-subtitle">${dept.description}</p>
        <div class="card-stats">
            <div class="stat-row">
                <span class="stat-label">FY 2027 Budget:</span>
                <span class="stat-value">${formatCurrency(dept.fy2027.totalBudget)}</span>
            </div>
            <div class="stat-row">
                <span class="stat-label">Change from FY 2026:</span>
                <span class="stat-value change ${changeClass}">
                    ${formatPercentage(dept.changes.percentageChange)}
                </span>
            </div>
        </div>
        <div class="card-footer">
            View Details →
        </div>
    `;
    
    return card;
}

// Setup navigation buttons
function setupNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    
    navButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            navButtons.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const deptId = this.getAttribute('data-dept');
            
            if (deptId === 'all') {
                showDashboard();
            } else {
                showDepartmentDetail(deptId);
            }
        });
    });
}

// Show dashboard view
function showDashboard() {
    document.getElementById('dashboard-view').classList.add('active');
    document.getElementById('detail-view').classList.remove('active');
    currentView = 'dashboard';
    
    // Update nav button
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-dept') === 'all') {
            btn.classList.add('active');
        }
    });
}

// Show department detail view
function showDepartmentDetail(deptId) {
    const dept = getDepartmentById(deptId);
    if (!dept) return;
    
    currentDepartment = dept;
    
    // Switch views
    document.getElementById('dashboard-view').classList.remove('active');
    document.getElementById('detail-view').classList.add('active');
    currentView = 'detail';
    
    // Update nav button
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-dept') === deptId) {
            btn.classList.add('active');
        }
    });
    
    // Populate detail view
    populateDepartmentDetail(dept);
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Populate department detail view
function populateDepartmentDetail(dept) {
    // Header
    document.getElementById('detail-icon').textContent = dept.icon;
    document.getElementById('detail-name').textContent = dept.name;
    document.getElementById('detail-description').textContent = dept.description;
    
    // FY 2026 Budget
    document.getElementById('fy26-total').textContent = formatCurrency(dept.fy2026.totalBudget);
    document.getElementById('fy26-general').textContent = formatCurrency(dept.fy2026.generalFund);
    document.getElementById('fy26-other').textContent = formatCurrency(dept.fy2026.otherFunds);
    document.getElementById('fy26-federal').textContent = formatCurrency(dept.fy2026.federalFunds);
    
    // FY 2027 Budget
    document.getElementById('fy27-total').textContent = formatCurrency(dept.fy2027.totalBudget);
    document.getElementById('fy27-general').textContent = formatCurrency(dept.fy2027.generalFund);
    document.getElementById('fy27-other').textContent = formatCurrency(dept.fy2027.otherFunds);
    document.getElementById('fy27-federal').textContent = formatCurrency(dept.fy2027.federalFunds);
    
    // Changes
    const changeAmount = document.getElementById('change-amount');
    const changePercentage = document.getElementById('change-percentage');
    const isPositive = dept.changes.percentageChange >= 0;
    
    changeAmount.textContent = formatCurrency(dept.changes.totalChange);
    changeAmount.className = 'budget-amount change-amount ' + (isPositive ? 'positive' : 'negative');
    
    changePercentage.textContent = formatPercentage(dept.changes.percentageChange);
    changePercentage.className = 'change-percentage ' + (isPositive ? 'positive' : 'negative');
    
    document.getElementById('change-general').textContent = formatCurrency(dept.changes.generalFundChange);
    
    // Significant Changes
    const changesList = document.getElementById('significant-changes');
    changesList.innerHTML = '';
    dept.changes.significantChanges.forEach(change => {
        const li = document.createElement('li');
        li.textContent = change;
        changesList.appendChild(li);
    });
    
    // Create charts
    createFundingChart(dept);
    createCategoryChart(dept);
}

// Create funding sources comparison chart
function createFundingChart(dept) {
    const ctx = document.getElementById('fundingChart');
    
    // Destroy existing chart if it exists
    if (fundingChart) {
        fundingChart.destroy();
    }
    
    const data = {
        labels: ['General Fund', 'Other Funds', 'Federal Funds'],
        datasets: [
            {
                label: 'FY 2026',
                data: [
                    dept.fy2026.generalFund,
                    dept.fy2026.otherFunds,
                    dept.fy2026.federalFunds
                ],
                backgroundColor: 'rgba(255, 184, 28, 0.8)', // Arizona Copper
                borderColor: 'rgba(255, 184, 28, 1)',
                borderWidth: 2
            },
            {
                label: 'FY 2027',
                data: [
                    dept.fy2027.generalFund,
                    dept.fy2027.otherFunds,
                    dept.fy2027.federalFunds
                ],
                backgroundColor: 'rgba(191, 10, 48, 0.8)', // Arizona Red
                borderColor: 'rgba(191, 10, 48, 1)',
                borderWidth: 2
            }
        ]
    };
    
    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += formatCurrency(context.parsed.y, 0);
                            return label;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return formatCurrency(value, 0);
                        }
                    }
                }
            }
        }
    };
    
    fundingChart = new Chart(ctx, config);
}

// Create budget category breakdown chart
function createCategoryChart(dept) {
    const ctx = document.getElementById('categoryChart');
    
    // Destroy existing chart if it exists
    if (categoryChart) {
        categoryChart.destroy();
    }
    
    const categories = dept.fy2027.categories;
    
    const data = {
        labels: categories.map(cat => cat.name),
        datasets: [{
            label: 'FY 2027 Budget',
            data: categories.map(cat => cat.amount),
            backgroundColor: [
                'rgba(255, 184, 28, 0.8)',  // Copper
                'rgba(191, 10, 48, 0.8)',   // Red
                'rgba(0, 40, 104, 0.8)',    // Blue
                'rgba(255, 215, 0, 0.8)',   // Gold
                'rgba(255, 213, 128, 0.8)', // Light Copper
                'rgba(230, 57, 70, 0.8)'    // Light Red
            ],
            borderColor: [
                'rgba(255, 184, 28, 1)',
                'rgba(191, 10, 48, 1)',
                'rgba(0, 40, 104, 1)',
                'rgba(255, 215, 0, 1)',
                'rgba(255, 213, 128, 1)',
                'rgba(230, 57, 70, 1)'
            ],
            borderWidth: 2
        }]
    };
    
    const config = {
        type: 'pie',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        font: {
                            size: 12
                        },
                        padding: 15
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = formatCurrency(context.parsed, 0);
                            const percentage = categories[context.dataIndex].percentage.toFixed(1);
                            return `${label}: ${value} (${percentage}%)`;
                        }
                    }
                }
            }
        }
    };
    
    categoryChart = new Chart(ctx, config);
}

// Export data to CSV
function exportData() {
    if (!currentDepartment) return;
    
    const dept = currentDepartment;
    
    // Create CSV content
    let csv = 'Arizona State Budget Data\n';
    csv += `Department: ${dept.name}\n`;
    csv += `Abbreviation: ${dept.abbreviation}\n\n`;
    
    csv += 'Budget Overview\n';
    csv += 'Category,FY 2026,FY 2027,Change,% Change\n';
    csv += `Total Budget,${dept.fy2026.totalBudget},${dept.fy2027.totalBudget},${dept.changes.totalChange},${dept.changes.percentageChange}%\n`;
    csv += `General Fund,${dept.fy2026.generalFund},${dept.fy2027.generalFund},${dept.changes.generalFundChange},\n`;
    csv += `Other Funds,${dept.fy2026.otherFunds},${dept.fy2027.otherFunds},,\n`;
    csv += `Federal Funds,${dept.fy2026.federalFunds},${dept.fy2027.federalFunds},,\n\n`;
    
    csv += 'FY 2027 Budget Categories\n';
    csv += 'Category,Amount,Percentage\n';
    dept.fy2027.categories.forEach(cat => {
        csv += `${cat.name},${cat.amount},${cat.percentage}%\n`;
    });
    
    csv += '\nSignificant Changes\n';
    dept.changes.significantChanges.forEach((change, index) => {
        csv += `${index + 1},"${change}"\n`;
    });
    
    // Create download link
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${dept.abbreviation}_Budget_FY26_vs_FY27.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

// Add some visual feedback for positive/negative changes
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Handle window resize for charts
window.addEventListener('resize', function() {
    if (currentView === 'detail' && currentDepartment) {
        // Recreate charts on resize for better responsiveness
        setTimeout(() => {
            if (fundingChart) {
                fundingChart.resize();
            }
            if (categoryChart) {
                categoryChart.resize();
            }
        }, 100);
    }
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    // Escape key to go back to dashboard
    if (e.key === 'Escape' && currentView === 'detail') {
        showDashboard();
    }
    
    // Arrow keys to navigate between departments
    if (currentView === 'detail' && currentDepartment) {
        const departments = getAllDepartments();
        const currentIndex = departments.findIndex(d => d.id === currentDepartment.id);
        
        if (e.key === 'ArrowLeft' && currentIndex > 0) {
            showDepartmentDetail(departments[currentIndex - 1].id);
        } else if (e.key === 'ArrowRight' && currentIndex < departments.length - 1) {
            showDepartmentDetail(departments[currentIndex + 1].id);
        }
    }
});

console.log('Arizona Budget Dashboard initialized successfully!');
console.log(`Total departments: ${getAllDepartments().length}`);
console.log(`Total budget change FY26 to FY27: ${formatCurrency(getTotalBudgetChange())}`);

// Made with Bob
