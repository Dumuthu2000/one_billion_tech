export const validateAddTask = (formData) => {
  const newErrors = {};

  // Title validation
  if (!formData.title) {
    newErrors.title = 'Title is required';
  }

  // Description validation
  if (!formData.description) {
    newErrors.description = 'Description is required';
  }

  // Due Date validation
  if (!formData.dueDate) {
    newErrors.dueDate = 'Due Date is required';
  }

  // Due Time validation
  if (!formData.dueTime) {
    newErrors.dueTime = 'Due Time is required';
  }

  // Always return an object
  return newErrors;
};
