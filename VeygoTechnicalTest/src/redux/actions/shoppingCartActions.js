import * as types from "./actionTypes";

export function addItemToCart(item) {
  return { type: types.ADD_ITEM_TO_CART, item };
}

export function removeItemFromCart(item) {
  return { type: types.REMOVE_ITEM_FROM_CART, item };
}

export function getShoppingCartItems(items) {
  return { type: types.GET_SHOPPING_CART_ITEMS, items };
}

export function clearCart() {
  return { type: types.CLEAR_CART };
}

// export function loadCourses() {
//   return function (dispatch) {
//     dispatch(beginApiCall());
//     return courseApi
//       .getCourses()
//       .then((courses) => {
//         //dispatch(loadCoursesSuccess(courses));
//       })
//       .catch((error) => {
//         dispatch(apiCallError(error));
//         throw error;
//       });
//   };
// }

// export function getCourseFromSlug(slug) {
//   return function (dispatch) {
//     dispatch(beginApiCall());
//     return courseApi
//       .getCourses()
//       .then((courses) => {
//         const course = courses.find((course) => course.slug === slug);
//         //dispatch(getCourseFromSlugSuccess(course));
//       })
//       .catch((error) => {
//         dispatch(apiCallError(error));
//         throw error;
//       });
//   };
// }

// export function saveCourse(course) {
//   return function (dispatch, getState) {
//     dispatch(beginApiCall());
//     return courseApi
//       .saveCourse(course)
//       .then((savedCourse) => {
//         course.id;
//         // ? dispatch(updateCourseSuccess(savedCourse))
//         // : dispatch(createCourseSuccess(savedCourse));
//       })
//       .catch((error) => {
//         dispatch(apiCallError(error));
//         throw error;
//       });
//   };
// }

// export function deleteCourse(course) {
//   return function (dispatch) {
//     // dispatch(deleteCourseOptimistic(course));
//     return courseApi.deleteCourse(course.id);
//   };
// }
