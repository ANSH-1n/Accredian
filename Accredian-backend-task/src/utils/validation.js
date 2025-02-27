const validateReferralData = (data) => {
  const errors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Required field validation
  const requiredFields = {
    referrerName: 'Referrer name',
    referrerEmail: 'Referrer email',
    refereeName: 'Referee name',
    refereeEmail: 'Referee email',
    courseId: 'Course ID',
    courseName: 'Course name'
  };

  Object.entries(requiredFields).forEach(([field, label]) => {
    if (!data[field]) {
      errors[field] = `${label} is required`;
    }
  });

  // Email format validation
  if (data.referrerEmail && !emailRegex.test(data.referrerEmail)) {
    errors.referrerEmail = 'Invalid referrer email format';
  }
  if (data.refereeEmail && !emailRegex.test(data.refereeEmail)) {
    errors.refereeEmail = 'Invalid referee email format';
  }

  // Course ID validation
  if (data.courseId && isNaN(Number(data.courseId))) {
    errors.courseId = 'Course ID must be a number';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

module.exports = {
  validateReferralData
}; 