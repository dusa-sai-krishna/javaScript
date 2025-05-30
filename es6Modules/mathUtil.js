/**
 * ES6 Modules - Sometimes we have some functions or classes that are highly complex and are to be
 * used in multiple places in our
 * project.
 * Thus we can place such
 * functions,variables,classes
 * in an external file and import and use them wherever we want
 */

/**
 * Whatever are to be imported by other files
 * Shoudl be declared with export keyword.
 */

export const PI = 3.14;

export function getCircumference(radius) {
  return PI * radius * 2;
}

export function getArea(radius) {
  return PI * Math.pow(radius, 2);
}

export function getVolume(radius) {
  return 4 * PI * Math.pow(radius, 3);
}
