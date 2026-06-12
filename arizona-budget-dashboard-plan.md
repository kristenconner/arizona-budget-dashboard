# Arizona Budget Dashboard - Detailed Plan

## Project Overview
An interactive React-based dashboard displaying Arizona state budget data for 6 key departments, featuring the Arizona state flag design and colors, with detailed comparisons between FY 2026 and FY 2027.

## Target Departments
1. **ADOA** - Arizona Department of Administration
2. **DES** - Department of Economic Security
3. **DCS** - Department of Child Safety
4. **DEQ** - Department of Environmental Quality
5. **DOC** - Department of Corrections
6. **AHCCCS** - Arizona Healthcare Cost Containment System

---

## Arizona State Flag Design Specifications

### Colors (Official)
- **Copper/Old Gold**: `#FFB81C` (top rays)
- **Red**: `#BF0A30` (bottom half, star)
- **Blue**: `#002868` (bottom half background)
- **Yellow/Gold**: `#FFD700` (star center)

### Design Elements
- 13 rays emanating from center (representing original 13 colonies and Arizona sunset)
- Copper star in center (Arizona's copper mining heritage)
- Top half: alternating red and gold rays
- Bottom half: solid blue field

### Application to Dashboard
- Primary color: Copper/Gold `#FFB81C`
- Secondary color: Red `#BF0A30`
- Accent color: Blue `#002868`
- Highlight color: Gold `#FFD700`
- Background: Light variations of these colors

---

## Dashboard Architecture

### Technology Stack
```
Frontend Framework: React 18+
Routing: React Router v6
Charts: Recharts (React-friendly charting library)
Styling: CSS Modules + Tailwind CSS
State Management: React Context API
Build Tool: Vite
```

### Project Structure
```
arizona-budget-dashboard/
├── public/
│   ├── arizona-flag.svg
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   ├── Header.module.css
│   │   │   └── FlagDesign.jsx
│   │   ├── Navigation/
│   │   │   ├── DepartmentNav.jsx
│   │   │   └── DepartmentNav.module.css
│   │   ├── Dashboard/
│   │   │   ├── DashboardHome.jsx
│   │   │   ├── DepartmentCard.jsx
│   │   │   └── Dashboard.module.css
│   │   ├── DepartmentDetail/
│   │   │   ├── DepartmentDetail.jsx
│   │   │   ├── BudgetBreakdown.jsx
│   │   │   ├── ComparisonChart.jsx
│   │   │   └── DepartmentDetail.module.css
│   │   └── Charts/
│   │       ├── BarChart.jsx
│   │       ├── LineChart.jsx
│   │       ├── PieChart.jsx
│   │       └── Charts.module.css
│   ├── data/
│   │   ├── departmentData.js
│   │   └── budgetData.js
│   ├── context/
│   │   └── BudgetContext.jsx
│   ├── utils/
│   │   ├── formatters.js
│   │   └── calculations.js
│   ├── styles/
│   │   ├── variables.css
│   │   ├── global.css
│   │   └── arizona-theme.css
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

---

## Data Structure

### Department Data Model
```javascript
{
  id: "adoa",
  name: "Arizona Department of Administration",
  abbreviation: "ADOA",
  description: "Brief description of department mission",
  fy2026: {
    totalBudget: 0,
    generalFund: 0,
    otherFunds: 0,
    federalFunds: 0,
    categories: [
      {
        name: "Personnel",
        amount: 0,
        percentage: 0
      },
      // ... more categories
    ]
  },
  fy2027: {
    totalBudget: 0,
    generalFund: 0,
    otherFunds: 0,
    federalFunds: 0,
    categories: [
      {
        name: "Personnel",
        amount: 0,
        percentage: 0
      },
      // ... more categories
    ]
  },
  changes: {
    totalChange: 0,
    percentageChange: 0,
    generalFundChange: 0,
    significantChanges: [
      "Description of major change 1",
      "Description of major change 2"
    ]
  }
}
```

---

## UI/UX Design

### Dashboard Home View
```
┌─────────────────────────────────────────────────────────┐
│  [Arizona Flag Header with Rays]                        │
│  Arizona State Budget Dashboard                         │
│  FY 2026 vs FY 2027 Comparison                         │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│  [Navigation: ADOA | DES | DCS | DEQ | DOC | AHCCCS]   │
└─────────────────────────────────────────────────────────┘
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│   ADOA       │ │     DES      │ │     DCS      │
│  $XXX.XM     │ │   $XXX.XM    │ │   $XXX.XM    │
│  ↑ +X.X%     │ │   ↑ +X.X%    │ │   ↓ -X.X%    │
│  [View →]    │ │   [View →]   │ │   [View →]   │
└──────────────┘ └──────────────┘ └──────────────┘
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│   DEQ        │ │     DOC      │ │   AHCCCS     │
│  $XXX.XM     │ │   $XXX.XM    │ │   $XXX.XM    │
│  ↑ +X.X%     │ │   ↑ +X.X%    │ │   ↑ +X.X%    │
│  [View →]    │ │   [View →]   │ │   [View →]   │
└──────────────┘ └──────────────┘ └──────────────┘
```

### Department Detail View
```
┌─────────────────────────────────────────────────────────┐
│  ← Back to Dashboard                                     │
│  Department of Economic Security (DES)                   │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│  Budget Overview                                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │  FY 2026     │  │  FY 2027     │  │  Change      │  │
│  │  $XXX.XM     │  │  $XXX.XM     │  │  +$XX.XM     │  │
│  │              │  │              │  │  +X.X%       │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│  Funding Sources Comparison                              │
│  [Bar Chart: General Fund | Other Funds | Federal]      │
│  FY26 vs FY27 side-by-side                              │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│  Budget Category Breakdown                               │
│  [Pie Chart: Personnel | Operations | Capital | etc.]   │
│  Toggle: FY26 | FY27                                    │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│  Significant Changes                                     │
│  • Change description 1                                  │
│  • Change description 2                                  │
│  • Change description 3                                  │
└─────────────────────────────────────────────────────────┘
```

---

## Component Specifications

### 1. Header Component
**Purpose**: Display Arizona flag-inspired header with title
**Features**:
- SVG-based flag rays background
- Responsive design
- Gradient using Arizona colors
- Copper star accent

### 2. Department Navigation
**Purpose**: Quick navigation between departments
**Features**:
- Horizontal tab-style navigation
- Active state highlighting
- Responsive (hamburger menu on mobile)
- Arizona color scheme

### 3. Department Card
**Purpose**: Summary card for each department on home view
**Features**:
- Department name and abbreviation
- Total budget (FY27)
- Change indicator (up/down arrow)
- Percentage change
- Click to view details
- Hover effects with Arizona colors

### 4. Comparison Charts
**Purpose**: Visual comparison of FY26 vs FY27
**Chart Types**:
- **Bar Chart**: Side-by-side comparison of funding sources
- **Line Chart**: Trend over fiscal years
- **Pie Chart**: Budget category breakdown
- **Stacked Bar**: Multi-category comparisons

**Features**:
- Interactive tooltips
- Legend with Arizona colors
- Responsive sizing
- Export to PNG/CSV

### 5. Budget Breakdown Table
**Purpose**: Detailed line-item budget data
**Features**:
- Sortable columns
- Filter by category
- Search functionality
- Highlight changes
- Export to CSV

---

## Color Palette Implementation

### CSS Variables
```css
:root {
  /* Primary Arizona Colors */
  --az-copper: #FFB81C;
  --az-red: #BF0A30;
  --az-blue: #002868;
  --az-gold: #FFD700;
  
  /* Lighter Variations */
  --az-copper-light: #FFD580;
  --az-red-light: #E63946;
  --az-blue-light: #1E3A8A;
  
  /* Darker Variations */
  --az-copper-dark: #CC8A00;
  --az-red-dark: #8B0000;
  --az-blue-dark: #001845;
  
  /* Neutral Colors */
  --bg-primary: #FFFFFF;
  --bg-secondary: #F8F9FA;
  --text-primary: #212529;
  --text-secondary: #6C757D;
  
  /* Chart Colors */
  --chart-1: var(--az-copper);
  --chart-2: var(--az-red);
  --chart-3: var(--az-blue);
  --chart-4: var(--az-gold);
  --chart-5: var(--az-copper-light);
  --chart-6: var(--az-red-light);
}
```

### Component Color Usage
- **Headers**: Copper gradient background
- **Navigation**: Blue background with gold active state
- **Cards**: White with copper border, red accent on hover
- **Charts**: Rotating Arizona color palette
- **Buttons**: Copper primary, red secondary
- **Links**: Blue with copper hover

---

## Interactive Features

### 1. Department Filtering
- Filter by budget size
- Filter by change percentage
- Filter by funding source

### 2. Comparison Tools
- Toggle between FY26 and FY27
- Side-by-side view
- Overlay view
- Difference highlighting

### 3. Data Export
- Export individual department data (CSV)
- Export all departments (CSV)
- Export charts (PNG)
- Print-friendly view

### 4. Search & Navigation
- Quick search across all departments
- Breadcrumb navigation
- Keyboard shortcuts
- Deep linking to specific departments

---

## Responsive Design Breakpoints

```css
/* Mobile First Approach */
/* Small devices (phones, 0-640px) */
@media (max-width: 640px) {
  /* Single column layout */
  /* Stacked cards */
  /* Hamburger menu */
}

/* Medium devices (tablets, 641-1024px) */
@media (min-width: 641px) and (max-width: 1024px) {
  /* Two column layout */
  /* Condensed navigation */
}

/* Large devices (desktops, 1025px+) */
@media (min-width: 1025px) {
  /* Three column layout */
  /* Full navigation */
  /* Side-by-side charts */
}
```

---

## Data Extraction Requirements

### From PDF Document
For each department, extract:

1. **FY 2026 Data**:
   - Total appropriation
   - General fund amount
   - Other funds amount
   - Federal funds amount
   - FTE count (if available)

2. **FY 2027 Data**:
   - Total appropriation
   - General fund amount
   - Other funds amount
   - Federal funds amount
   - FTE count (if available)

3. **Budget Categories** (if detailed):
   - Personnel services
   - Employee-related expenses
   - Professional services
   - Other operating expenses
   - Capital outlay
   - Grants and benefits

4. **Significant Changes**:
   - Major policy changes
   - New programs
   - Eliminated programs
   - Significant increases/decreases

---

## Implementation Phases

### Phase 1: Setup & Foundation
1. Initialize React project with Vite
2. Install dependencies (React Router, Recharts, etc.)
3. Set up project structure
4. Create CSS variables and theme
5. Build Arizona flag SVG component

### Phase 2: Data & Context
1. Extract budget data from PDF
2. Create data structure
3. Implement BudgetContext
4. Create utility functions (formatters, calculators)

### Phase 3: Core Components
1. Build Header with flag design
2. Create Navigation component
3. Develop Department Card component
4. Implement Dashboard Home view

### Phase 4: Detail Views
1. Create Department Detail page
2. Build comparison charts
3. Implement budget breakdown table
4. Add filtering and search

### Phase 5: Interactivity
1. Add routing between views
2. Implement data export
3. Add responsive design
4. Create print styles

### Phase 6: Polish & Testing
1. Test all interactions
2. Optimize performance
3. Add loading states
4. Implement error handling
5. Write documentation

---

## Performance Considerations

### Optimization Strategies
1. **Code Splitting**: Lazy load department detail views
2. **Memoization**: Use React.memo for expensive components
3. **Virtual Scrolling**: For large data tables
4. **Image Optimization**: Optimize flag SVG
5. **Bundle Size**: Tree-shake unused dependencies

### Accessibility
1. **ARIA Labels**: All interactive elements
2. **Keyboard Navigation**: Full keyboard support
3. **Screen Reader**: Semantic HTML
4. **Color Contrast**: WCAG AA compliance
5. **Focus Indicators**: Visible focus states

---

## Deployment Strategy

### Build Process
```bash
npm run build
# Generates optimized production build in /dist
```

### Hosting Options
1. **GitHub Pages**: Free, simple deployment
2. **Netlify**: Automatic deployments from Git
3. **Vercel**: Optimized for React apps
4. **AWS S3 + CloudFront**: Scalable, professional

### Environment Configuration
- Development: Local dev server with hot reload
- Staging: Preview deployments for testing
- Production: Optimized build with CDN

---

## Testing Strategy

### Unit Tests
- Component rendering
- Data calculations
- Utility functions

### Integration Tests
- Navigation flow
- Data filtering
- Chart interactions

### E2E Tests
- Complete user journeys
- Cross-browser testing
- Responsive design validation

---

## Documentation Requirements

### User Documentation
1. **README.md**: Project overview, setup instructions
2. **USER_GUIDE.md**: How to use the dashboard
3. **DATA_SOURCES.md**: Budget data sources and methodology

### Developer Documentation
1. **CONTRIBUTING.md**: Development guidelines
2. **ARCHITECTURE.md**: Technical architecture details
3. **API.md**: Data structure and component APIs

---

## Success Metrics

### Functionality
- ✓ All 6 departments displayed
- ✓ FY26 vs FY27 comparison working
- ✓ Interactive charts functional
- ✓ Data export working
- ✓ Responsive on all devices

### Design
- ✓ Arizona flag colors implemented
- ✓ Consistent theme throughout
- ✓ Professional appearance
- ✓ Intuitive navigation

### Performance
- ✓ Load time < 3 seconds
- ✓ Smooth interactions
- ✓ No layout shifts
- ✓ Accessible (WCAG AA)

---

## Next Steps

1. **Review this plan** with stakeholders
2. **Extract budget data** from PDF document
3. **Begin Phase 1** implementation
4. **Iterate based on feedback**

---

## Notes & Considerations

### Data Accuracy
- All budget figures must be verified against official sources
- Include data source citations
- Add last updated timestamp

### Future Enhancements
- Historical data (FY24, FY25)
- Predictive analytics
- Comparison with other states
- Mobile app version
- Real-time data updates

### Maintenance
- Annual updates for new fiscal years
- Regular dependency updates
- Security patches
- Performance monitoring

---

**Document Version**: 1.0  
**Last Updated**: June 12, 2026  
**Status**: Planning Phase