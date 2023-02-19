const student = "Ромашов Владимир Владимирович"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество

document.getElementById("student").innerHTML = student;

const chars = `
Пономарев Андрей Алексеевич, мужчина, 11.12.1980
Рыбакова Алина Семёновна, женщина, 16.04.1974
Молчанов Даниил Ильич, мужчина, 21.03.1984
Смирнова София Львовна, женщина, 02.01.1987
Владимиров Артём Григорьевич, мужчина, 07.12.1990
Маслова Елизавета Егоровна, женщина, 10.10.1997
Назарова Вера Романовна, женщина, 01.05.1983
Иванов Иван Фёдорович, мужчина, 05.05.1999
Дмитриев Алексей Григорьевич, мужчина, 12.11.1998
Овчинников Платон Александрович, мужчина, 26.05.1999
Мартынова Софья Тимуровна, женщина, 07.06.1995
Соколов Михаил Адамович, мужчина, 11.03.1979
`

class Char {
    constructor (char_info) {
        let info = char_info.split(', ');
        this.initials = info[0];
        this.gender = info[1];
        this.birth = info[2];
        this.bfor();
    }

    nfor() {
        let full_initials =  this.initials.split(' ');
        full_initials = `${full_initials[0]} ${full_initials[1].substring(0, 1)}.${full_initials[2].substring(0, 1)}.`;
        return full_initials;
    } // Формат 1

    bfor () {
        let birth = this.birth.split('.');
        this.birth = `${birth[2]}/${birth[1]}/${birth[0]}`;
        return this.birth
    } // Формат 2

    gend() {
        return this.gender == 'мужчина' ? 'Муж': 'Жен';
    } // Пол

    years() {
        let currdate = new Date();

        let number = new Date(this.birth);

        let birth_present = new Date(number);
        birth_present.setFullYear(currdate.getFullYear());

        let diff = new Date(currdate - number);
        let yearso = Math.abs(diff.getFullYear() - 1969);

        if ((currdate - birth_present) < 0) {
            yearso = yearso - 1;
        }
        return yearso
    } // Рассчёт полных лет
}

let characters = chars.split('\n');
characters = characters.filter(characters_elem => characters_elem != '');

let charac_classes = [];

for (let characters_id in characters) {
    let charac = new Char(characters[characters_id]);
    charac_classes.push(charac);
}

const characters_amount = charac_classes.length;
const men = charac_classes.filter(characters => characters.gend() == 'Муж').length;
const women = charac_classes.filter(characters => characters.gend() == 'Жен').length;

console.log(`Всего гостей: ${characters_amount}`)
console.log(`Мужчин: ${men}`)
console.log(`Женщин: ${women}`)
console.log('Список гостей:')

for (let characters_id in charac_classes) {
    characters = charac_classes[characters_id];
    console.log(`${characters.nfor()}, ${characters.gend()}, Возраст: ${characters.years()}`);
}