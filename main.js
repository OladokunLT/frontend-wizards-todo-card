// ==================== STATE MANAGEMENT ====================
let currentTitle = "Build Testable Todo Item Card";
let currentDescription =
  "Create a clean, modern, fully accessible Todo card with all required data-testid attributes, perfect responsiveness, keyboard navigation, and live time-remaining updates.";
let currentPriority = "High";
let currentDueDate = new Date("2026-04-25T18:00:00Z");
let currentStatus = "In Progress";
let isExpanded = false;

const DUE_DATE = currentDueDate; // For time calculations

// ==================== HELPER FUNCTIONS ====================
function getTimeRemaining(due) {
  if (currentStatus === "Done") return "Completed";

  const now = new Date();
  let diffMs = due - now;

  if (diffMs < 0) {
    const overdueMs = Math.abs(diffMs);
    const days = Math.floor(overdueMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (overdueMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((overdueMs % (1000 * 60 * 60)) / (1000 * 60));

    if (days >= 1) return `Overdue by ${days} day${days > 1 ? "s" : ""}`;
    if (hours >= 1) return `Overdue by ${hours} hour${hours > 1 ? "s" : ""}`;
    return `Overdue by ${minutes} min`;
  }

  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

  if (days >= 2) return `Due in ${days} days`;
  if (days === 1) return "Due tomorrow";
  if (hours >= 1) return `Due in ${hours} hour${hours > 1 ? "s" : ""}`;
  if (minutes >= 1) return `Due in ${minutes} min`;
  return "Due now!";
}

function updateTimeRemaining() {
  const el = document.getElementById("time-remaining");
  if (!el) return;

  const timeText = getTimeRemaining(DUE_DATE);
  el.textContent = timeText;

  const overdueEl = document.getElementById("overdue-indicator");
  if (timeText.includes("Overdue")) {
    overdueEl.style.display = "block";
    el.classList.add("overdue");
  } else {
    overdueEl.style.display = "none";
    el.classList.remove("overdue");
  }
}

function renderCard() {
  // Title
  document.getElementById("todo-title").textContent = currentTitle;
  document
    .getElementById("todo-title")
    .classList.toggle("line-through", currentStatus === "Done");

  // Description (truncated)
  const descEl = document.getElementById("display-description");
  descEl.textContent =
    currentDescription.length > 140
      ? currentDescription.substring(0, 140) + "..."
      : currentDescription;

  // Priority
  const priorityIndicator = document.getElementById("priority-indicator");
  priorityIndicator.className = `priority-indicator ${currentPriority.toLowerCase()}`;
  document.getElementById("priority-display").innerHTML =
    `🔥 ${currentPriority}`;

  // Status Badge
  const statusBadge = document.getElementById("status-badge");
  const dotColor = currentStatus === "Done" ? "#10b981" : "#fbbf24";
  statusBadge.innerHTML = `
            <div style="width: 8px; height: 8px; background: ${dotColor}; border-radius: 50%; animation: ${currentStatus === "Done" ? "none" : "pulse 2s infinite"};"></div>
            ${currentStatus}
        `;

  // Checkbox sync
  document.getElementById("complete-toggle").checked = currentStatus === "Done";

  // Due Date
  document.getElementById("display-due-date").textContent =
    `Due ${currentDueDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}`;
}

// ==================== EDIT MODE ====================
function enterEditMode() {
  document.getElementById("edit-form").classList.add("active");
  document.getElementById("todo-card").style.opacity = "0.7";

  // Pre-fill form
  document.getElementById("edit-title").value = currentTitle;
  document.getElementById("edit-description").value = currentDescription;
  document.getElementById("edit-priority").value = currentPriority;
  document.getElementById("edit-due-date").value = currentDueDate
    .toISOString()
    .split("T")[0];
}

function exitEditMode() {
  document.getElementById("edit-form").classList.remove("active");
  document.getElementById("todo-card").style.opacity = "1";
}

// ==================== EXPAND / COLLAPSE ====================
function toggleExpand() {
  isExpanded = !isExpanded;
  const collapsible = document.getElementById("collapsible-section");
  const toggleBtn = document.getElementById("expand-toggle");

  if (isExpanded) {
    collapsible.classList.add("expanded");
    toggleBtn.textContent = "Show less ▲";
    toggleBtn.setAttribute("aria-expanded", "true");
  } else {
    collapsible.classList.remove("expanded");
    toggleBtn.textContent = "Show more ▼";
    toggleBtn.setAttribute("aria-expanded", "false");
  }
}

// ==================== MAIN INITIALIZATION ====================
function init() {
  renderCard();
  updateTimeRemaining();
  setInterval(updateTimeRemaining, 30000); // Update every 30 seconds

  // Checkbox Toggle
  document.getElementById("complete-toggle").addEventListener("change", (e) => {
    currentStatus = e.target.checked ? "Done" : "Pending";
    renderCard();
    updateTimeRemaining();
  });

  // Status Dropdown
  document.getElementById("status-control").addEventListener("change", (e) => {
    currentStatus = e.target.value;
    renderCard();
    updateTimeRemaining();
  });

  // Expand Toggle
  document
    .getElementById("expand-toggle")
    .addEventListener("click", toggleExpand);

  // Edit Button
  document.getElementById("edit-btn").addEventListener("click", enterEditMode);

  // Save Button
  document.getElementById("save-btn").addEventListener("click", () => {
    currentTitle =
      document.getElementById("edit-title").value.trim() || currentTitle;
    currentDescription =
      document.getElementById("edit-description").value.trim() ||
      currentDescription;
    currentPriority = document.getElementById("edit-priority").value;
    const newDate = document.getElementById("edit-due-date").value;
    if (newDate) currentDueDate = new Date(newDate + "T18:00:00Z");

    renderCard();
    exitEditMode();
    updateTimeRemaining();
  });

  // Cancel Button
  document.getElementById("cancel-btn").addEventListener("click", exitEditMode);

  // Delete Button
  document.getElementById("delete-btn").addEventListener("click", () => {
    if (confirm("Delete this task?")) {
      location.reload();
    }
  });

  console.log(
    "%c🚀 Stage 1A Advanced Todo Card is now fully interactive!",
    "color:#22c55e; font-size:14px; font-weight:700",
  );
}

// Start the application
window.onload = init;
