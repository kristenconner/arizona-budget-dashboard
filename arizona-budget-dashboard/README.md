# Arizona State Budget Dashboard

An interactive dashboard displaying Arizona state budget data for FY 2026 vs FY 2027, featuring the iconic Arizona state flag design and colors.

![Arizona Flag Colors](https://img.shields.io/badge/Copper-%23FFB81C-orange) ![Arizona Flag Colors](https://img.shields.io/badge/Red-%23BF0A30-red) ![Arizona Flag Colors](https://img.shields.io/badge/Blue-%23002868-blue) ![Arizona Flag Colors](https://img.shields.io/badge/Gold-%23FFD700-yellow)

## 🌟 Features

### 📊 Six Department Coverage
- **ADOA** - Arizona Department of Administration
- **DES** - Department of Economic Security
- **DCS** - Department of Child Safety
- **DEQ** - Department of Environmental Quality
- **DOC** - Department of Corrections
- **AHCCCS** - Arizona Health Care Cost Containment System

### 🎨 Arizona Flag-Themed Design
- Authentic Arizona state flag colors (Copper, Red, Blue, Gold)
- Ray pattern background inspired by the flag
- Copper star accents throughout
- Professional, modern interface

### 📈 Interactive Visualizations
- **Bar Charts**: Side-by-side FY26 vs FY27 funding source comparisons
- **Pie Charts**: Budget category breakdowns
- **Interactive Cards**: Click to explore detailed department information
- **Responsive Charts**: Automatically adjust to screen size

### 🔄 Comparison Tools
- Clear year-over-year budget changes
- Percentage change indicators
- Funding source breakdowns (General, Other, Federal)
- Significant changes highlighted

### 📱 Responsive Design
- Mobile-friendly interface
- Tablet optimization
- Desktop full-feature experience
- Print-friendly views

### 💾 Data Export
- Export department data to CSV
- Print-optimized layouts
- Easy data sharing

## 🚀 Quick Start

### Option 1: Open Directly in Browser (Recommended)

1. **Download or clone this repository**
   ```bash
   git clone https://github.com/yourusername/arizona-budget-dashboard.git
   cd arizona-budget-dashboard
   ```

2. **Open `index.html` in your web browser**
   - Double-click `index.html`, or
   - Right-click → Open with → Your preferred browser

3. **That's it!** The dashboard is fully functional without any installation.

### Option 2: Use a Local Web Server

For better performance and to avoid CORS issues:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if installed)
npx serve

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 📖 How to Use

### Dashboard Home View

1. **Overview Cards**: See all 6 departments at a glance
   - Department icon and name
   - FY 2027 total budget
   - Change from FY 2026 (amount and percentage)
   - Visual indicators (↑ for increase, ↓ for decrease)

2. **Navigation**: Use the top navigation bar to:
   - View all departments
   - Jump directly to a specific department

3. **Click Any Card**: Click on a department card to view detailed information

### Department Detail View

1. **Budget Overview**: Three cards showing:
   - FY 2026 budget breakdown
   - FY 2027 budget breakdown
   - Total change and percentage

2. **Funding Sources Chart**: Bar chart comparing:
   - General Fund
   - Other Funds
   - Federal Funds
   - Side-by-side FY26 vs FY27

3. **Category Breakdown Chart**: Pie chart showing:
   - Personnel Services
   - Operating Expenses
   - Program-specific categories
   - Percentage of total budget

4. **Significant Changes**: Bulleted list of:
   - Major policy changes
   - New programs
   - Staffing changes
   - Notable increases/decreases

5. **Export Options**:
   - **Export Data (CSV)**: Download department data as CSV file
   - **Print View**: Print-optimized layout

### Keyboard Shortcuts

- **Escape**: Return to dashboard from detail view
- **Left Arrow**: Navigate to previous department
- **Right Arrow**: Navigate to next department

## 🎨 Arizona Flag Design

The dashboard incorporates authentic Arizona state flag elements:

### Colors
- **Copper (#FFB81C)**: Primary color, represents Arizona's copper mining heritage
- **Red (#BF0A30)**: Secondary color, from the flag's rays
- **Blue (#002868)**: Navigation and text, from the flag's bottom half
- **Gold (#FFD700)**: Highlights and accents, from the copper star

### Design Elements
- **Ray Pattern**: Header background inspired by the 13 rays (representing original colonies and Arizona sunset)
- **Copper Star**: Used as accent throughout the interface
- **Gradient Backgrounds**: Smooth transitions between flag colors

## 📊 Data Structure

### Budget Data Includes:
- **Total Budget**: Overall appropriation for each fiscal year
- **Funding Sources**:
  - General Fund
  - Other Funds (fees, dedicated revenues)
  - Federal Funds
- **Budget Categories**: Department-specific spending categories
- **FTE Count**: Full-time equivalent positions
- **Significant Changes**: Major policy and program changes

### Data Source
Budget data is sourced from the Arizona Joint Legislative Budget Committee (JLBC):
- [JLBC Budget Documents](https://www.azjlbc.gov)
- FY 2026 and FY 2027 appropriations

## 🔧 Customization

### Updating Budget Data

Edit `data.js` to update department information:

```javascript
{
    id: 'adoa',
    name: 'Arizona Department of Administration',
    abbreviation: 'ADOA',
    fy2026: {
        totalBudget: 125000000,
        generalFund: 85000000,
        // ... more fields
    },
    fy2027: {
        totalBudget: 132000000,
        // ... more fields
    }
}
```

### Modifying Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --az-copper: #FFB81C;
    --az-red: #BF0A30;
    --az-blue: #002868;
    --az-gold: #FFD700;
}
```

### Adding New Departments

1. Add department data to `data.js`
2. Add navigation button in `index.html`
3. The dashboard will automatically display the new department

## 📱 Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🏗️ Project Structure

```
arizona-budget-dashboard/
├── index.html          # Main HTML file
├── styles.css          # Arizona-themed styles
├── data.js            # Budget data for all departments
├── app.js             # Application logic and interactivity
├── package.json       # Project metadata (for npm users)
└── README.md          # This file
```

## 📈 Performance

- **Load Time**: < 2 seconds on standard connection
- **File Size**: ~150KB total (uncompressed)
- **Dependencies**: Chart.js (loaded from CDN)
- **No Build Required**: Works directly in browser

## 🔒 Privacy & Security

- **No Data Collection**: All data is static, no analytics or tracking
- **No External Requests**: Except Chart.js library from CDN
- **Client-Side Only**: All processing happens in your browser
- **No Cookies**: No cookies or local storage used

## 🤝 Contributing

To contribute to this project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Data Accuracy

**Important**: The budget data in this dashboard is for demonstration purposes. For official budget information, please refer to:

- [Arizona Joint Legislative Budget Committee](https://www.azjlbc.gov)
- [Arizona State Budget Documents](https://www.azjlbc.gov/budget.asp)
- Individual department websites

## 🐛 Troubleshooting

### Charts Not Displaying
- **Issue**: Charts appear blank
- **Solution**: Ensure Chart.js CDN is accessible. Check browser console for errors.

### Styling Issues
- **Issue**: Colors or layout appear broken
- **Solution**: Clear browser cache and reload. Ensure `styles.css` is loaded.

### Data Not Loading
- **Issue**: Department cards are empty
- **Solution**: Check browser console for JavaScript errors. Ensure `data.js` is loaded correctly.

### Print View Issues
- **Issue**: Print layout is incorrect
- **Solution**: Use "Print" button in detail view for optimized print layout.

## 📞 Support

For questions or issues:
- Check the [Troubleshooting](#-troubleshooting) section
- Review the [How to Use](#-how-to-use) guide
- Open an issue on GitHub

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Arizona Joint Legislative Budget Committee for budget data
- Chart.js for visualization library
- Arizona State Flag design inspiration

## 📅 Version History

### Version 1.0.0 (June 2026)
- Initial release
- 6 department coverage
- Interactive charts and visualizations
- Arizona flag-themed design
- CSV export functionality
- Responsive design
- Print-friendly views

## 🔮 Future Enhancements

Potential features for future versions:
- Historical data (FY 2024, FY 2025)
- Additional departments
- Advanced filtering options
- Comparison with other states
- Mobile app version
- Real-time data updates
- Multi-language support

---

**Made with ❤️ for Arizona**

*Last Updated: June 12, 2026*