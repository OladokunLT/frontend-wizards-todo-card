# Frontend Wizards — Stage 0: Testable Todo Item Card

A clean, modern, fully accessible and testable Todo Card component built as part of the Frontend Wizards Stage 0 task.

![Todo Card Preview]("https://www.awesomescreenshot.com/image/59762618?key=1c6dac553e38017673b94955c6a11d3d")

## ✅ Features Implemented

- All required `data-testid` attributes exactly as specified
- Fully responsive design (320px to 1200px+)
- Live time-remaining calculation with friendly text ("Due in 3 days", "Due tomorrow", "Overdue by 2 hours", etc.)
- Interactive checkbox with visual feedback (strikethrough title + status change to "Done")
- Accessible Edit and Delete buttons with proper ARIA labels
- Keyboard navigable (Tab, Space, Enter)
- WCAG AA compliant contrast and visible focus styles
- Semantic HTML (`<article>`, `<time>`, `<label>`, etc.)
- Modern glassmorphic UI with Tailwind CSS

## 🧪 Testability

All required data-testid values are present:

- `test-todo-card`
- `test-todo-title`
- `test-todo-description`
- `test-todo-priority`
- `test-todo-due-date`
- `test-todo-time-remaining`
- `test-todo-status`
- `test-todo-complete-toggle`
- `test-todo-tags` (with `test-todo-tag-work` and `test-todo-tag-urgent`)
- `test-todo-edit-button`
- `test-todo-delete-button`

## 🚀 Live Demo

[View Live Demo](https://frontend-wizards-todo-card.vercel.app/)

## 🛠️ Technologies Used

- HTML5 (Semantic)
- Tailwind CSS (via CDN)
- Vanilla JavaScript
- Responsive design with mobile-first approach

## 📱 Responsiveness

- Fully responsive from **320px** (mobile) to **1200px** (desktop)
- Tags wrap nicely on small screens
- No horizontal overflow
- Comfortable max-width on larger screens

## ♿ Accessibility

- Proper semantic HTML
- Real `<input type="checkbox">` with associated `<label>`
- Visible focus indicators
- ARIA labels on icon-only buttons
- Keyboard navigation support
- Good color contrast

## 📂 Project Structure

frontend-wizards-todo-card/

├── index.html

└── README.md

## 🧩 Behaviour

- Checkbox toggle: Strikes through title and updates status to "Done"
- Time remaining: Updates every 60 seconds with accurate friendly text
- Edit button: Opens demo alert
- Delete button: Shows confirmation then demo deletion animation

## ✅ How to Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/OladokunLT/frontend-wizards-todo-card.git

   ```

2. Open index.html in your browser.

## Submission Details

- **Task:** Frontend Wizards Stage 0

- **Deadline:** April 16, 2026

- **Live URL:** https://frontend-wizards-todo-card.vercel.app/

- **GitHub Repo:** https://github.com/OladokunLT/frontend-wizards-todo-card

---

Built with ❤️ for Frontend Wizards
