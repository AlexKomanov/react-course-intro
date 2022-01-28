const employers = [
  'АртеМ',
  'максим',
  'Владимир',
  'сергей',
  'НикиТа',
  'евГений',
  ' Дарья',
  ' ',
  'виктория ',
  'ЕкаТерина',
  '',
  ' Андрей ',
  'КИРИЛЛ',
];

const nameCourse = 'Базовый React';
const command = employers.filter(name => name.trim().length)
    .map(name => name.trim().charAt(0).toUpperCase() + name.trim().substr(1).toLowerCase())

const data = {
  cash: [3, 8, 3],
  react: ['JSX', 'components', 'props', 'state', 'hooks'],
  add: ['styled-components', 'firebase'],
};

const {cash, react, react:[reactFirst], add} = data;

const calculateCash = everyCash => everyCash.reduce((previous, current) => previous + current)

let lesson = calculateCash(cash);

const makeBusiness = (director, allModule, gang, course , teacher = 'Максим') => {
  const sumTech = [...react, ...add, 'и другие'];
  console.log(
    `Стартуем новый курс: "${course}". Владелец: ${director}, преподаватель: ${teacher}. Всего уроков: ${allModule}.
Команда Академии: ${gang}`
  );
  console.log(
    `Первое что изучим будет ${reactFirst}. Он очень похож на HTML!`
  );
  console.log(`Технологии которые мы изучим: \n${sumTech}`);

}

makeBusiness('Артем', lesson, command, nameCourse);
