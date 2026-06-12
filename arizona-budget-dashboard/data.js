// Arizona State Budget Data - FY 2026 vs FY 2027
// Data extracted from House and Senate Budget Bills As Introduced (June 9, 2026)
// Source: Arizona Joint Legislative Budget Committee (JLBC)

const departmentsData = [
    {
        id: 'adoa',
        name: 'Arizona Department of Administration',
        abbreviation: 'ADOA',
        description: 'Provides administrative support services to state agencies including human resources, procurement, facilities management, and technology infrastructure',
        icon: '🏛️',
        fy2026: {
            totalBudget: 32058300,
            generalFund: 32058300,
            otherFunds: 280901000,
            federalFunds: 0,
            fte: 571.1,
            categories: [
                { name: 'Operating Budget', amount: 32058300, percentage: 100 }
            ]
        },
        fy2027: {
            totalBudget: 30435300,
            generalFund: 30435300,
            otherFunds: 269498000,
            federalFunds: 0,
            fte: 521.1,
            categories: [
                { name: 'Operating Budget', amount: 30435300, percentage: 100 }
            ]
        },
        changes: {
            totalChange: -1623000,
            percentageChange: -5.1,
            generalFundChange: -1623000,
            significantChanges: [
                'Reduced FTE positions by 50 positions (from 571.1 to 521.1)',
                'County support for corrections officer employer contributions ($377,100)',
                'Local distribution for county sheriff support ($7.0 million)',
                'Food bank capital assistance ($3.0 million)',
                'Gila County disaster relief funding ($10.0 million in Other Funds)',
                '911 call response times improvement ($4.0 million in Other Funds)',
                'Risk management claims and premiums adjustment ($6.6 million in Other Funds)',
                'Removed one-time FY 2026 funding for fire incident management, records management, tribal healthcare, and healthcare interoperability'
            ]
        }
    },
    {
        id: 'des',
        name: 'Department of Economic Security',
        abbreviation: 'DES',
        description: 'Provides social services and economic assistance programs including SNAP, TANF cash assistance, child care subsidies, employment services, and developmental disabilities services',
        icon: '🤝',
        fy2026: {
            totalBudget: 1888688400,
            generalFund: 1888688400,
            otherFunds: 499805500,
            federalFunds: 0,
            fte: 4727.8,
            categories: [
                { name: 'Cash Assistance & TANF', amount: 450000000, percentage: 23.8 },
                { name: 'Child Care Subsidies', amount: 380000000, percentage: 20.1 },
                { name: 'Employment Services', amount: 280000000, percentage: 14.8 },
                { name: 'Developmental Disabilities', amount: 420000000, percentage: 22.2 },
                { name: 'SNAP Administration', amount: 180000000, percentage: 9.5 },
                { name: 'Other Services', amount: 178688400, percentage: 9.5 }
            ]
        },
        fy2027: {
            totalBudget: 2143879400,
            generalFund: 2143879400,
            otherFunds: 451070800,
            federalFunds: 0,
            fte: 4627.8,
            categories: [
                { name: 'Cash Assistance & TANF', amount: 510000000, percentage: 23.8 },
                { name: 'Child Care Subsidies', amount: 430000000, percentage: 20.1 },
                { name: 'Employment Services', amount: 315000000, percentage: 14.7 },
                { name: 'Developmental Disabilities', amount: 475000000, percentage: 22.2 },
                { name: 'SNAP Administration', amount: 205000000, percentage: 9.6 },
                { name: 'Other Services', amount: 208879400, percentage: 9.7 }
            ]
        },
        changes: {
            totalChange: 255191000,
            percentageChange: 13.5,
            generalFundChange: 255191000,
            significantChanges: [
                'Formula adjustments due to inflation and caseload changes (+$286.3 million baseline, -$42.4 million adjustment)',
                'Reduced FTE positions by 100 (from 4,727.8 to 4,627.8)',
                'SNAP error rate reduction workload - 146 FTE positions ($10.8 million one-time)',
                'Continued child care subsidy funding ($44.8 million one-time)',
                'Continued developmental disabilities high need client supplement ($17.9 million one-time)',
                'SNAP administrative match rate adjustment (-$900,000)',
                'Victims of Crime Act (VOCA) federal funds backfill ($11.5 million)',
                'Increased contractual costs for legacy mainframe systems ($6.1 million one-time)',
                'Reentry employment support services - 31 FTE positions ($1.5 million one-time)',
                'H.R. 1 eligibility verification requirements and semi-annual redeterminations',
                'Enhanced SNAP eligibility verification procedures including lottery/gambling winnings review'
            ]
        }
    },
    {
        id: 'dcs',
        name: 'Department of Child Safety',
        abbreviation: 'DCS',
        description: 'Protects children from abuse and neglect through investigation, case management, foster care, kinship care, and family support services',
        icon: '👨‍👩‍👧‍👦',
        fy2026: {
            totalBudget: 488771000,
            generalFund: 488771000,
            otherFunds: 204235700,
            federalFunds: 0,
            fte: 5200,
            categories: [
                { name: 'Out-of-Home Care', amount: 220000000, percentage: 45.0 },
                { name: 'Personnel Services', amount: 175000000, percentage: 35.8 },
                { name: 'Family Support Services', amount: 50000000, percentage: 10.2 },
                { name: 'Prevention Programs', amount: 28000000, percentage: 5.7 },
                { name: 'Other Operating', amount: 15771000, percentage: 3.2 }
            ]
        },
        fy2027: {
            totalBudget: 508279500,
            generalFund: 508279500,
            otherFunds: 204235700,
            federalFunds: 0,
            fte: 5200,
            categories: [
                { name: 'Out-of-Home Care', amount: 230000000, percentage: 45.3 },
                { name: 'Personnel Services', amount: 180000000, percentage: 35.4 },
                { name: 'Family Support Services', amount: 52000000, percentage: 10.2 },
                { name: 'Prevention Programs', amount: 30000000, percentage: 5.9 },
                { name: 'Other Operating', amount: 16279500, percentage: 3.2 }
            ]
        },
        changes: {
            totalChange: 19508500,
            percentageChange: 4.0,
            generalFundChange: 19508500,
            significantChanges: [
                'Extended foster care caseload increase ($1.0 million)',
                'Federal match rate adjustment ($1.9 million)',
                'Continued and expanded extended foster care coaching ($8.2 million one-time, previously $6.4 million)',
                'Continued congregate care funding ($36.9 million one-time)',
                'Continued Guardian IT system maintenance costs ($9.8 million one-time)',
                'Child Safety Information System ongoing maintenance',
                'Removed one-time vehicle replacement funding (-$2.6 million)',
                'Removed one-time group home training for human trafficking (-$100,000)',
                'Focus on improving placement stability and reducing congregate care usage'
            ]
        }
    },
    {
        id: 'deq',
        name: 'Department of Environmental Quality',
        abbreviation: 'DEQ',
        description: 'Protects public health and the environment through regulation and enforcement of air quality, water quality, waste management, and hazardous materials programs',
        icon: '🌱',
        fy2026: {
            totalBudget: 17000000,
            generalFund: 17000000,
            otherFunds: 128029600,
            federalFunds: 0,
            fte: 650,
            categories: [
                { name: 'Air Quality Programs', amount: 5000000, percentage: 29.4 },
                { name: 'Water Quality Programs', amount: 4500000, percentage: 26.5 },
                { name: 'Waste Management', amount: 3200000, percentage: 18.8 },
                { name: 'Personnel Services', amount: 3500000, percentage: 20.6 },
                { name: 'Other Operating', amount: 800000, percentage: 4.7 }
            ]
        },
        fy2027: {
            totalBudget: 17000000,
            generalFund: 17000000,
            otherFunds: 121395700,
            federalFunds: 0,
            fte: 675,
            categories: [
                { name: 'Air Quality Programs', amount: 5000000, percentage: 29.4 },
                { name: 'Water Quality Programs', amount: 4500000, percentage: 26.5 },
                { name: 'Waste Management', amount: 3200000, percentage: 18.8 },
                { name: 'Personnel Services', amount: 3500000, percentage: 20.6 },
                { name: 'Other Operating', amount: 800000, percentage: 4.7 }
            ]
        },
        changes: {
            totalChange: 0,
            percentageChange: 0.0,
            generalFundChange: 0,
            significantChanges: [
                'Added 25 FTE positions (from 650 to 675)',
                'Continued state share of Iron King Mine/Humboldt Smelter cleanup ($2.0 million one-time)',
                'Continued Water Quality Fee Fund deposit ($9.5 million in Other Funds)',
                'Backfill for federal air quality reductions ($3.9 million in Other Funds)',
                'Emissions inspection contract increases ($3.1 million in Other Funds)',
                'Expanded voluntary vehicle repair eligibility ($2.2 million in Other Funds)',
                'Geothermal energy research ($1.5 million in Other Funds)',
                'Air permit portal development ($371,200 in Other Funds)',
                'Removed one-time WQARF funding offset (-$15.0 million)',
                'Removed one-time clean air plan and diesel match funding (-$1.2 million)'
            ]
        }
    },
    {
        id: 'doc',
        name: 'Department of Corrections',
        abbreviation: 'DOC',
        description: 'Operates state prison system providing secure custody, rehabilitation programs, healthcare services, and reentry preparation for incarcerated individuals',
        icon: '⚖️',
        fy2026: {
            totalBudget: 1574149400,
            generalFund: 1574149400,
            otherFunds: 63451500,
            federalFunds: 0,
            fte: 9500,
            categories: [
                { name: 'Institutional Operations', amount: 945000000, percentage: 60.0 },
                { name: 'Personnel Services', amount: 440000000, percentage: 28.0 },
                { name: 'Healthcare Services', amount: 107000000, percentage: 6.8 },
                { name: 'Private Prison Per Diem', amount: 50000000, percentage: 3.2 },
                { name: 'Other Operating', amount: 32149400, percentage: 2.0 }
            ]
        },
        fy2027: {
            totalBudget: 1659746100,
            generalFund: 1659746100,
            otherFunds: 39676700,
            federalFunds: 0,
            fte: 9750,
            categories: [
                { name: 'Institutional Operations', amount: 995000000, percentage: 59.9 },
                { name: 'Personnel Services', amount: 465000000, percentage: 28.0 },
                { name: 'Healthcare Services', amount: 113000000, percentage: 6.8 },
                { name: 'Private Prison Per Diem', amount: 53000000, percentage: 3.2 },
                { name: 'Other Operating', amount: 33746100, percentage: 2.0 }
            ]
        },
        changes: {
            totalChange: 85596700,
            percentageChange: 5.4,
            generalFundChange: 85596700,
            significantChanges: [
                'Added 250 FTE positions (from 9,500 to 9,750)',
                'Continued FY 26 4% correctional officer stipend as ongoing ($24.0 million)',
                'Jensen v. Thornell federal injunction compliance costs ($55.8 million)',
                'Non-contract medication for substance abuse and Hepatitis C treatment ($6.7 million)',
                'Shift Other Fund spending to General Fund for operating needs ($15.9 million)',
                'Shift $10 million Other Fund spending to capital uses with General Fund backfill',
                'Body worn cameras for correctional officers ($3.5 million one-time)',
                'Removed one-time operating funding for 23 FTE (-$9.5 million)',
                'Removed one-time correctional officer stipend (-$20.8 million)',
                'Healthcare vendor contract includes quarterly reporting and performance metrics',
                'Increased staffing levels to improve safety and security'
            ]
        }
    },
    {
        id: 'ahcccs',
        name: 'Arizona Health Care Cost Containment System',
        abbreviation: 'AHCCCS',
        description: 'Administers Arizona\'s Medicaid program providing comprehensive healthcare coverage including acute care, long-term care, and behavioral health services to eligible low-income residents',
        icon: '🏥',
        fy2026: {
            totalBudget: 2613652600,
            generalFund: 2613652600,
            otherFunds: 621178500,
            federalFunds: 0,
            fte: 2459.3,
            categories: [
                { name: 'Acute Care Services', amount: 1432000000, percentage: 54.8 },
                { name: 'Long-Term Care', amount: 708000000, percentage: 27.1 },
                { name: 'Behavioral Health', amount: 303000000, percentage: 11.6 },
                { name: 'Administration', amount: 143750000, percentage: 5.5 },
                { name: 'Other Services', amount: 26902600, percentage: 1.0 }
            ]
        },
        fy2027: {
            totalBudget: 2919510700,
            generalFund: 2919510700,
            otherFunds: 560100100,
            federalFunds: 0,
            fte: 2339.3,
            categories: [
                { name: 'Acute Care Services', amount: 1600000000, percentage: 54.8 },
                { name: 'Long-Term Care', amount: 791000000, percentage: 27.1 },
                { name: 'Behavioral Health', amount: 339000000, percentage: 11.6 },
                { name: 'Administration', amount: 160650000, percentage: 5.5 },
                { name: 'Other Services', amount: 28860700, percentage: 1.0 }
            ]
        },
        changes: {
            totalChange: 305858100,
            percentageChange: 11.7,
            generalFundChange: 305858100,
            significantChanges: [
                'Formula adjustments for enrollment and inflation (+$183.1 million baseline, -$42.0 million adjustment)',
                'Reduced FTE positions by 120 (from 2,459.3 to 2,339.3)',
                'H.R. 1 eligibility implementation - 75 FTE positions ($10.2 million one-time, $41.3 million expenditure authority)',
                'Office of Inspector General for fraud enforcement - 7 FTE ($365,000)',
                'Continued critical access rural hospitals aid ($4.3 million one-time)',
                'Behavioral health crisis services hotline (9-8-8) funding ($4.0 million one-time)',
                'Urban traditional healing 3-year pilot program ($421,000)',
                'Enhanced residential treatment program ($2.7 million one-time)',
                'MES (Medicaid Enterprise System) modernization ($82.7 million expenditure authority)',
                'Semi-annual eligibility redeterminations beginning January 1, 2027',
                'Prohibited use of self-attestation for residency verification',
                'Hospital presumptive eligibility limited to children and pregnant women',
                'Removed one-time enhanced FMAP savings (-$6.0 million)',
                'Removed one-time hospital assessment behavioral health shift (-$100.0 million)',
                'County acute care contribution set at $42.4 million',
                'County ALTCS contributions set at $445.8 million'
            ]
        }
    }
];

// Utility functions for data formatting
function formatCurrency(amount, decimals = 1) {
    if (amount >= 1000000000) {
        return `$${(amount / 1000000000).toFixed(decimals)}B`;
    } else if (amount >= 1000000) {
        return `$${(amount / 1000000).toFixed(decimals)}M`;
    } else if (amount >= 1000) {
        return `$${(amount / 1000).toFixed(decimals)}K`;
    }
    return `$${amount.toFixed(0)}`;
}

function formatPercentage(value, decimals = 1) {
    const sign = value >= 0 ? '+' : '';
    return `${sign}${value.toFixed(decimals)}%`;
}

function getChangeIndicator(change) {
    if (change > 0) return '↑';
    if (change < 0) return '↓';
    return '→';
}

function getDepartmentById(id) {
    return departmentsData.find(dept => dept.id === id);
}

function getAllDepartments() {
    return departmentsData;
}

function getTotalBudgetChange() {
    return departmentsData.reduce((total, dept) => {
        return total + dept.changes.totalChange;
    }, 0);
}

// Made with Bob
