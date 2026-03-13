# Admin Dashboard Project Specification

## Project Overview
- **Project Name**: Admin Dashboard
- **Type**: Single Page Application (React)
- **Core Functionality**: A comprehensive admin dashboard with sidebar navigation, dynamic charts, user table, and contact form with internal API
- **Target Users**: Admin users managing a system

## UI/UX Specification

### Layout Structure
- **Sidebar**: Fixed left sidebar (240px width on desktop, collapsible on mobile)
- **Main Content**: Flexible right area that fills remaining space
- **Responsive Breakpoints**:
  - Mobile: < 768px (sidebar hidden, hamburger menu)
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

### Visual Design

#### Color Palette
- **Primary**: `#6366f1` (Indigo-500)
- **Primary Dark**: `#4f46e5` (Indigo-600)
- **Secondary**: `#ec4899` (Pink-500)
- **Background Light**: `#f8fafc` (Slate-50)
- **Background Dark**: `#0f172a` (Slate-900)
- **Card Light**: `#ffffff`
- **Card Dark**: `#1e293b` (Slate-800)
- **Text Primary Light**: `#1e293b` (Slate-800)
- **Text Primary Dark**: `#f1f5f9` (Slate-100)
- **Text Secondary**: `#64748b` (Slate-500)
- **Success**: `#10b981` (Emerald-500)
- **Warning**: `#f59e0b` (Amber-500)
- **Error**: `#ef4444` (Red-500)

#### Typography
- **Font Family**: 'Inter', system-ui, sans-serif
- **Headings**: 
  - H1: 28px, font-weight 700
  - H2: 24px, font-weight 600
  - H3: 20px, font-weight 600
- **Body**: 14px, font-weight 400
- **Small**: 12px, font-weight 400

#### Spacing System
- Base unit: 4px
- Common spacings: 4, 8, 12, 16, 24, 32, 48px

### Components

#### Sidebar
- Logo/Brand at top
- Navigation links with icons
- Active state: background highlight with primary color
- Hover state: subtle background change
- Dark mode toggle button

#### Cards (3 cards)
- Total Users card with icon
- Total Sales card with icon
- Active Users card with icon
- Each card shows: icon, title, value, percentage change

#### Charts
- **Line Chart**: Monthly sales data (12 months)
- **Bar Chart**: Users per role (Admin, User, Editor, Viewer)
- Both charts use Chart.js with responsive design

#### Table
- Columns: Name, Email, Role, Status
- Features: Search, Sort by any column, Pagination
- Export to CSV button
- Status badges (Active/Inactive)

#### Contact Form
- Fields: Name, Email, Message
- Validation: Required fields, email format
- Submit adds user to API
- Success message on submit
- Form clears after submission

## Functionality Specification

### Core Features
1. **Navigation**: React Router for page navigation
2. **Dashboard Page**: 
   - Fetch users from API
   - Fetch sales data from API
   - Display metrics cards
   - Display charts with fetched data
   - Display user table with search/sort
3. **Contact Page**:
   - Form submission adds new user to API
   - Validates input
   - Shows success/error feedback
4. **Dark Mode**: Toggle between light/dark themes
5. **Export CSV**: Download table data as CSV file

### Data Handling
- **Internal API**: Using json-server for fake REST API
- **Endpoints**:
  - GET /users - List all users
  - POST /users - Add new user
  - GET /sales - Get monthly sales data
- **State Management**: React useState and useEffect hooks

### Edge Cases
- Loading states while fetching data
- Error states when API fails
- Empty states when no data
- Form validation errors

## Acceptance Criteria
1. ✅ Sidebar shows 5 navigation links (Dashboard, Users, Analytics, Contact, Settings)
2. ✅ Dashboard displays 3 metric cards with dynamic data
3. ✅ Line chart shows monthly sales with real data
4. ✅ Bar chart shows users per role with real data
5. ✅ Table lists users with Name, Email, Role, Status
6. ✅ Table has search functionality
7. ✅ Table has sorting functionality
8. ✅ Export CSV button downloads table data
9. ✅ Contact form adds user to API
10. ✅ Contact form clears after submission
11. ✅ Dark mode toggle works
12. ✅ Responsive design works on all screen sizes
13. ✅ Loading states display while fetching
14. ✅ Error states display on API failure

## File Structure
```
/dashboard
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── index.html
├── db.json (json-server data)
├── src/
│   ├── main.jsx
│   ├── index.css
│   ├── App.jsx
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   ├── Cards.jsx
│   │   ├── Charts.jsx
│   │   ├── UserTable.jsx
│   │   ├── ContactForm.jsx
│   │   └── DarkModeToggle.jsx
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Contact.jsx
│   │   └── Settings.jsx
│   └── api/
│       └── api.js
```

