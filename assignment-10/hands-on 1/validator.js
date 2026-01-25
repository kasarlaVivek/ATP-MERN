// 1. Validate task title (not empty, min 3 chars)
export function validateTitle(title) {
  if (!title || typeof title !== "string") return false;
  return title.trim().length >= 3;
}

// 2. Validate priority (must be: low, medium, high)
export function validatePriority(priority) {
  const allowed = ["low", "medium", "high"];
  return allowed.includes(priority.toLowerCase());
}

// 3. Validate due date (must be future date)
export function validateDueDate(date) {
  const due = new Date(date);
  const today = new Date();
  return due > today;        // must be a future date
}
