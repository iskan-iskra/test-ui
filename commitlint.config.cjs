/** @type {import('@commitlint/types').UserConfig} */
module.exports = {
  rules: {
    // ✅ Разрешённые типы коммитов
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'refactor', 'chore', 'ui', 'release']],

    // 🔠 Тип должен быть в нижнем регистре
    'type-case': [2, 'always', 'lower-case'],

    // ⛔ Заголовок не должен быть пустым
    'subject-empty': [2, 'never'],

    // ⛔ Без точки на конце
    'subject-full-stop': [2, 'never', '.'],

    // 🔡 Без заглавных букв
    'subject-case': [2, 'never', ['start-case', 'pascal-case', 'upper-case']],

    // 🔢 Максимальная длина заголовка
    'header-max-length': [2, 'always', 100],
  },
};
