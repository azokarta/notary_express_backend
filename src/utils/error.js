const error = (id, language) => {
  switch (language.toUpperCase()) {
    case 'RUS':
      return errorRus(id);
    case 'KAZ':
      return errorKaz(id);
    default:
      return errorRus(id);
  }
};
const errorRus = (id) => {
  switch (id) {
    case 400:
      return 'Неверный запрос';
    default:
      return '';
  }
};

const errorKaz = (id) => {
  switch (id) {
    case 400:
      return 'Қате сұраныс';
    default:
      return '';
  }
};

module.exports = error;
// function error(id, language) {
//   switch (language.toUpperCase()) {
//     case 'RUS':
//       return errorRus(id);
//     case 'KAZ':
//       return errorKaz(id);
//     default:
//       return errorRus(id);
//   }
// }

// function errorRus(id) {
//   switch (id) {
//     case 400:
//       return 'Неверный запрос';
//     default:
//       return '';
//   }
// }
// function errorKaz(id) {
//   switch (id) {
//     case 400:
//       return 'Қате сұраныс';
//     default:
//       return '';
//   }
// }
