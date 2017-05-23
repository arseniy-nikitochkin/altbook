const BooksActions = require('../actions/BooksActions');

const booksJSON = [
  {
    id: 0,
    name: "Солярис",
    author: "Станислав Лем",
    src: "https://i.livelib.ru/boocover/1000194898/o/013e/Stanislav_Lem__Solyaris.jpeg",
    snippet: "«Солярис» - бесспорная вершина творчества Станислава Лема, произведение, повлиявшее на развитие научной фантастики XX века, в том числе и на русскую фантастику. Роман дважды экранизирован, по нему были поставлены радиопьесы, спектакли – и даже балет! Итак, что же такое – Солярис? Бескрайний мыслящий океан, преследующий непонятные человеку цели, тончайший камертон, преобразующий людские чувства в материальную форму? Воплощенный кошмар психолога или духовный целитель? " 
  },
  {
    id: 1,
    name: "Человек в высоком замке",
    author: "Филип Дик",
    src: "https://i.livelib.ru/boocover/1001498512/o/6d3c/Filip_Dik__Chelovek_v_vysokom_zamke.jpeg",
    snippet: "Американского фантаста Филипа К. Дика не зря называют «культовым разрушителем реальности». Только в его произведениях вымысел не просто виртуозно сплетается с реальностью, но и частенько становится единственной причиной существования последней. 1962 год. Прошло пятнадцать лет с тех пор, как Вторая мировая война завершилась победой Гитлера и стран Оси. На территории США образованы немецкие и японские колонии, население Африки почти полностью подверглось уничтожению из-за несоответствия стандартам расовой чистоты, а СССР был оккупирован еще в 1941 году. "
  },
  {
    id: 2,
    name: "Нейромант",
    author: "Уильям Гибсон",
    src: "https://i.livelib.ru/boocover/1001069111/o/719f/Uilyam_Gibson__Nejromant.jpeg",
    snippet: "«Нейромант» — это классический дебют жанрового революционера, которому оказались тесны рамки любого жанра. Это книга, определившая лицо современной литературы на десятилетия вперед. Это краеугольный камень киберпанка — стиля и культурного феномена. "
  },
  {
    id: 3,
    name: "Снятся ли андроидам электроовцы?",
    author: "Филип Дик",
    src: "https://j.livelib.ru/boocover/1000868196/o/cd40/Filip_Kindred_Dik__Do_Androids_Dream_of_Electric_Sheep.jpeg",
    snippet: "Наряду с «Человеком в высоком замке» этот роман является самым известным произведением Дика. Это одно из классических фантастических произведений, в котором исследуются этические проблемы создания андроидов — искусственных людей."
  },
  {
    id: 4,
    name: "О дивный новый мир",
    author: "Олдос Хаксли",
    src: "https://i.livelib.ru/boocover/1000113867/o/013e/Oldos_Haksli__O_divnyj_novyj_mir.jpeg",
    snippet: "О ДИВНЫЙ НОВЫЙ МИР - изысканная и остроумная антиутопия о генетически программируемом «обществе потребления», в котором разворачивается трагическая история Дикаря - «Гамлета» этого мира. Роман, который многие критики называли и называют «главной книгой Олдоса Хаксли»."
  }, 
];

const BooksSource = {
  fetchBooks() {
    return {
      remote() {
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            if (true) {
              resolve(booksJSON);
            } else {
              reject('Things have broken');
            }
          }, 500);
        });
      },

      local() {
        return null;
      },

      success: BooksActions.updateBooks,
      error: BooksActions.booksFailed,
      loading: BooksActions.fetchBooks
    }
  }
};

module.exports = BooksSource;
