import { courses } from './data.mjs';
export const publishedCourses = courses.filter(c => c.published);
export const sortedByPrice = [...courses].sort((a, b) => b.price - a.price);
export const courseList = courses.map(c => ({ title: c.title, price: c.price }));
export const totalValue = publishedCourses.reduce((sum, c) => sum + c.price, 0);
export const newCourses = [...courses, { id: 104, title: "Next.js", price: 1999, published: true }];
console.log(totalValue);
console.log(sortedByPrice[0].title);