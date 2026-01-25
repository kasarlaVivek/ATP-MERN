const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];

// 1. Get published courses
const publishedCourses = courses.filter(c => c.published);

// 2. Sort courses by price (high → low)
const sortedByPriceDesc = [...courses].sort((a, b) => b.price - a.price);

// 3. Extract {title, price}
const courseSummary = courses.map(c => ({ title: c.title, price: c.price }));

// 4. Calculate total value of published courses
const totalPublishedValue = publishedCourses.reduce((sum, c) => sum + c.price, 0);

// 5. Add a new course immutably
const addCourse = newCourse => [...courses, newCourse];


export {publishedCourses,sortedByPriceDesc,courseSummary,totalPublishedValue,addCourse};
