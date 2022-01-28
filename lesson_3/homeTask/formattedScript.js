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
let command = [];
for (let employee of employers) {
  if (employee.length > 0 && employee.trim() !== '') {
    command.push(employee);
  }
}
for (let i = 0; i < command.length; i++) {
  command[i] = command[i].toLowerCase().trim();
  command[i] = command[i][0].toUpperCase() + command[i].slice(1);
}

const data = {
  cash: [3, 8, 3],
  react: ['JSX', 'components', 'props', 'state', 'hooks'],
  add: ['styled-components', 'firebase'],
};

const {cash} = data;
const calcCash = (own = 0) => {

  const everyCash = cash;
  let total = own;
  for (let every of everyCash) {
    total += every;
  }
  return total;
}

let lesson = calcCash();
const {react, react:[reactFirst], add} = data;

const makeBusiness = (director, allModule, gang, course , teacher = 'Максим') => {
  const sumTech = `${react} ${add}, и другие`;
  console.log(
    `Стартуем новый курс: "${course}". Владелец: ${director}, преподаватель: ${teacher}. Всего уроков: ${allModule}.
Команда Академии: ${gang}`
  );
  console.log(
    `Первое что изучим будет ${reactFirst}. Он очень похож на HTML!`
  );
  console.log(`Технологии которые мы изучим: \n${sumTech}`);

}

makeBusiness( 'Артем', lesson, command, nameCourse);
