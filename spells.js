window.SPELLBOOK_5E = [
  // ==================== 0 КРУГ: ЗАГОВОРЫ ====================
  {
    id: 'c_acid_splash', name: 'Брызги кислоты', level: 0, role: 'damage', rollType: 'save', dice: '1d6', tag: 'кислота / Спас Лов (сфера 5 фт)',
    classes: ['wizard', 'sorcerer'], races: [],
    meta: '1 действие • 60 фт • В, С • Мгновенно',
    desc: 'Вы создаёте кислотный пузырь в точке в пределах дистанции. Каждое существо в сфере радиусом 5 футов должно пройти Спас Ловкости или получить 1d6 урона кислотой (2d6 на 5 ур.).'
  },
  {
    id: 'c_blade_ward', name: 'Защита от оружия', level: 0, role: 'defense', rollType: 'utility', dice: '', tag: '-1d4 к атакам по вам',
    classes: ['wizard', 'bard', 'sorcerer', 'warlock'], races: [],
    meta: '1 действие • На себя • Конц. до 1 мин',
    desc: 'Пока заклинание активно, каждый раз, когда существо совершает бросок атаки по вам, оно вычитает 1d4 из результата броска атаки.'
  },
  {
    id: 'c_booming_blade', name: 'Громовой клинок', level: 0, role: 'damage', rollType: 'attack', dice: '1d8', tag: 'атака оружием + звук при шаге',
    classes: ['wizard', 'sorcerer', 'warlock'], races: [],
    meta: '1 действие • На себя (5 фт) • С, М (оружие)',
    desc: 'Рукопашная атака оружием окутывает цель гудящей энергией: если цель добровольно сдвинется с места до начала вашего следующего хода, она получит 1d8 урона звуком (2d8 на 5 ур.).'
  },
  {
    id: 'c_chill_touch', name: 'Замораживающее прикосновение', level: 0, role: 'damage', rollType: 'attack', dice: '1d10', tag: 'некротика / запрет лечения',
    classes: ['wizard', 'sorcerer', 'warlock'], races: [],
    meta: '1 действие • Касание • В, С • 1 раунд',
    desc: 'Призрачная хватка: при попадании 1d10 урона некротикой (2d10 на 5 ур.), и цель не может восстанавливать хиты до конца вашего следующего хода.'
  },
  {
    id: 'c_control_flames', name: 'Власть над огнём', level: 0, role: 'utility', rollType: 'utility', dice: '', tag: 'управление пламенем',
    classes: ['wizard', 'druid', 'sorcerer'], races: [],
    meta: '1 действие • 60 фт • С • До 1 часа',
    desc: 'Вы управляете немагическим огнём в кубе 5 футов: расширяете его на 5 футов, мгновенно тушите, удваиваете свет или создаёте из пламени простые образы.'
  },
  {
    id: 'c_create_bonfire', name: 'Сотворение костра', level: 0, role: 'damage', rollType: 'save', dice: '1d8', tag: 'огонь / зона 5×5 фт',
    classes: ['wizard', 'druid', 'sorcerer', 'warlock'], races: [],
    meta: '1 действие • 60 фт • Конц. до 1 мин',
    desc: 'На земле в кубе 5 футов вспыхивает костёр (Спас Ловкости). Существа при появлении огня или в конце своего хода получают 1d8 урона огнём (2d8 на 5 ур.).'
  },
  {
    id: 'c_dancing_lights', name: 'Пляшущие огоньки', level: 0, role: 'utility', rollType: 'utility', dice: '', tag: '4 летающих огонька',
    classes: ['wizard', 'bard', 'sorcerer'], races: ['drow'],
    meta: '1 действие • 120 фт • Конц. до 1 мин',
    desc: 'Создаёт до 4 парящих огоньков размером с факел (тусклый свет 10 фт вокруг каждого), которые можно двигать бонусным действием на 60 футов.'
  },
  {
    id: 'c_druidcraft', name: 'Искусство друидов', level: 0, role: 'utility', rollType: 'utility', dice: '', tag: 'природные эффекты',
    classes: ['druid'], races: [],
    meta: '1 действие • 30 фт • В, С • Мгновенно',
    desc: 'Предсказывает погоду на 24 часа, заставляет распуститься цветок, создаёт лёгкий природный звук/запах или зажигает/тушит свечу и костёр.'
  },
  {
    id: 'c_eldritch_blast', name: 'Мистический заряд', level: 0, role: 'damage', rollType: 'attack', dice: '1d10', tag: 'силовое поле',
    classes: ['warlock'], races: [],
    meta: '1 действие • 120 фт • В, С • Мгновенно',
    desc: 'Луч потрескивающей энергии: при попадании 1d10 урона силовым полем (на 5 ур. — 2 отдельных луча).'
  },
  {
    id: 'c_elementalism', name: 'Элементализм', level: 0, role: 'utility', rollType: 'utility', dice: '', tag: 'малые эффекты 4 стихий',
    classes: ['wizard', 'druid', 'sorcerer'], races: [],
    meta: '1 действие • 30 фт • В, С • Мгновенно',
    desc: 'Вы проявляете малую власть над стихиями в кубе 5 футов: порыв ветра, облачко пыли, искры огня или брызги прохладной воды.'
  },
  {
    id: 'c_encode_thoughts', name: 'Шифрование мыслей', level: 0, role: 'utility', rollType: 'utility', dice: '', tag: 'нить памяти (8 ч)',
    classes: ['wizard'], races: [],
    meta: '1 действие • На себя • С • До 8 часов',
    desc: 'Вы вытягиваете воспоминание или мысль из своего разума в видимую мерцающую нить энергии.'
  },
  {
    id: 'c_firebolt', name: 'Огненный снаряд', level: 0, role: 'damage', rollType: 'attack', dice: '1d10', tag: 'огонь',
    classes: ['wizard', 'sorcerer'], races: ['elf'],
    meta: '1 действие • 120 фт • В, С • Мгновенно',
    desc: 'Вы мечете сгусток огня в существо или предмет. При попадании 1d10 урона огнём (2d10 на 5 ур.). Незакреплённые горючие предметы загораются.'
  },
  {
    id: 'c_friends', name: 'Дружба', level: 0, role: 'control', rollType: 'save', dice: '', tag: 'Очарование (1 мин)',
    classes: ['wizard', 'bard', 'sorcerer', 'warlock'], races: [],
    meta: '1 действие • 10 фт • Конц. до 1 мин',
    desc: 'Существо (не враждебное) при провале Спас Мудрости считается очарованным вами на 1 минуту.'
  },
  {
    id: 'c_green_flame_blade', name: 'Зелёное пламя клинка', level: 0, role: 'damage', rollType: 'attack', dice: '1d8', tag: 'атака оружием + огонь',
    classes: ['wizard', 'sorcerer', 'warlock'], races: [],
    meta: '1 действие • На себя (5 фт) • С, М (оружие)',
    desc: 'Рукопашная атака оружием; при попадании зелёный огонь перескакивает на второго врага в 5 фт от цели и наносит ему урон огнём = вашему мод. магии (+1d8 на 5 ур.).'
  },
  {
    id: 'c_guidance', name: 'Указание', level: 0, role: 'utility', rollType: 'utility', dice: '1d4', tag: '+1d4 к навыку (1 мин)',
    classes: ['cleric', 'druid'], races: [],
    meta: '1 действие • Касание • Конц. до 1 мин',
    desc: 'Выберите навык: пока заклинание активно, цель прибавляет 1d4 к любой проверке этого навыка.'
  },
  {
    id: 'c_gust', name: 'Шквал', level: 0, role: 'utility', rollType: 'save', dice: '', tag: 'толчок ветром на 5 фт',
    classes: ['wizard', 'druid', 'sorcerer'], races: [],
    meta: '1 действие • 30 фт • В, С • Мгновенно',
    desc: 'Порыв ветра отталкивает существо Среднего размера на 5 футов (Спас Силы), сдувает лёгкие предметы или гасит незащищённое пламя.'
  },
  {
    id: 'c_infestation', name: 'Нашествие', level: 0, role: 'damage', rollType: 'save', dice: '1d6', tag: 'яд + сдвиг на 5 фт',
    classes: ['wizard', 'druid', 'sorcerer', 'warlock'], races: [],
    meta: '1 действие • 30 фт • В, С, М • Мгновенно',
    desc: 'Облако паразитов окружает цель (Спас Телосложения): при провале 1d6 урона ядом (2d6 на 5 ур.) и сдвиг на 5 футов в случайном направлении.'
  },
  {
    id: 'c_light', name: 'Свет', level: 0, role: 'utility', rollType: 'utility', dice: '', tag: 'яркий свет 20 фт',
    classes: ['wizard', 'cleric', 'bard', 'sorcerer'], races: ['aasimar'],
    meta: '1 действие • Касание • 1 час',
    desc: 'Предмет размером до 10 футов испускает яркий свет в радиусе 20 футов и тусклый ещё на 20 футов.'
  },
  {
    id: 'c_lightning_lure', name: 'Молниевая плеть', level: 0, role: 'damage', rollType: 'save', dice: '1d8', tag: 'электричество / притягивание',
    classes: ['wizard', 'sorcerer', 'warlock'], races: [],
    meta: '1 действие • На себя (15 фт) • В • Мгновенно',
    desc: 'Хлыст молнии притягивает врага в 15 фт на 10 футов к вам (Спас Силы) и наносит 1d8 урона электричеством (2d8 на 5 ур.), если он оказался в 5 фт от вас.'
  },
  {
    id: 'c_mage_hand', name: 'Волшебная рука', level: 0, role: 'utility', rollType: 'utility', dice: '', tag: 'призрачная рука на 30 фт',
    classes: ['wizard', 'bard', 'sorcerer', 'warlock'], races: [],
    meta: '1 действие • 30 фт • В, С • 1 минута',
    desc: 'Призрачная рука открывает незапертые двери, достаёт предметы до 10 фунтов, проверяет сундуки или наливает зелья на расстоянии 30 футов.'
  },
  {
    id: 'c_magic_stone', name: 'Волшебный камень', level: 0, role: 'damage', rollType: 'attack', dice: '1d6', tag: 'дробящий (3 камня)',
    classes: ['druid', 'warlock'], races: [],
    meta: '1 бонусное действие • Касание (до 3 галек) • 1 минута',
    desc: 'Зачаровывает до 3 камешков: метание на 60 футов использует ваш бонус атаки заклинанием и наносит 1d6 + мод. магии дробящего урона.'
  },
  {
    id: 'c_mending', name: 'Починка', level: 0, role: 'utility', rollType: 'utility', dice: '', tag: 'ремонт предметов',
    classes: ['wizard', 'cleric', 'bard', 'druid', 'sorcerer'], races: [],
    meta: '1 минута • Касание • В, С, М • Мгновенно',
    desc: 'Устраняет один разрыв или трещину длиной до 1 фута в объекте (сломанный ключ, порванный плащ, звено цепи) без следа.'
  },
  {
    id: 'c_message', name: 'Сообщение', level: 0, role: 'utility', rollType: 'utility', dice: '', tag: 'шёпот на 120 фт',
    classes: ['wizard', 'bard', 'druid', 'sorcerer'], races: [],
    meta: '1 действие • 120 фт • В, С, М • 1 раунд',
    desc: 'Вы шепчете послание существу в 120 футах (слышит только цель) и оно может ответить вам неслышным для остальных шёпотом.'
  },
  {
    id: 'c_mind_sliver', name: 'Взрыв мозга', level: 0, role: 'damage', rollType: 'save', dice: '1d6', tag: 'психич. / -1d4 к спасброску',
    classes: ['wizard', 'sorcerer', 'warlock'], races: [],
    meta: '1 действие • 60 фт • В • 1 раунд',
    desc: 'При провале Спас Интеллекта 1d6 урона психикой (2d6 на 5 ур.) и вычитание 1d4 из следующего спасброска цели до конца вашего следующего хода.'
  },
  {
    id: 'c_minor_illusion', name: 'Малая иллюзия', level: 0, role: 'utility', rollType: 'utility', dice: '', tag: 'звук или образ 5×5 фт',
    classes: ['wizard', 'bard', 'sorcerer', 'warlock'], races: ['gnome'],
    meta: '1 действие • 30 фт • С, М • 1 минута',
    desc: 'Создаёт звук или неподвижный образ предмета не больше куба 5 футов. Проверка Интеллекта (Анализ) против вашей Сл раскрывает иллюзию.'
  },
  {
    id: 'c_mold_earth', name: 'Лепка земли', level: 0, role: 'utility', rollType: 'utility', dice: '', tag: 'копание и укрытия',
    classes: ['wizard', 'druid', 'sorcerer'], races: [],
    meta: '1 действие • 30 фт • С • До 1 часа',
    desc: 'Мгновенно выкапывает и перемещает куб 5 футов рыхлой земли или делает землю сложнопроходимой местностью.'
  },
  {
    id: 'c_poison_spray', name: 'Отравляющие брызги', level: 0, role: 'damage', rollType: 'attack', dice: '1d12', tag: 'яд (30 фт)',
    classes: ['wizard', 'druid', 'sorcerer', 'warlock'], races: [],
    meta: '1 действие • 30 фт • В, С • Мгновенно',
    desc: 'Струя ядовитого газа: при попадании 1d12 урона ядом (2d12 на 5 ур.).'
  },
  {
    id: 'c_prestidigitation', name: 'Фокусы', level: 0, role: 'utility', rollType: 'utility', dice: '', tag: 'магические трюки',
    classes: ['wizard', 'bard', 'sorcerer', 'warlock'], races: [],
    meta: '1 действие • 10 фт • В, С • До 1 часа',
    desc: 'Зажечь/погасить свечу, мгновенно очистить или испачкать одежду, охладить/нагреть еду, создать искры, запах или метку на предмете.'
  },
  {
    id: 'c_primal_savagery', name: 'Первобытная дикость', level: 0, role: 'damage', rollType: 'attack', dice: '1d10', tag: 'кислота / когти в упор',
    classes: ['druid'], races: [],
    meta: '1 действие • На себя (5 фт) • С • Мгновенно',
    desc: 'Рукопашная атака заклинанием наносит 1d10 урона кислотой (2d10 на 5 ур.).'
  },
  {
    id: 'c_produce_flame', name: 'Сотворение пламени', level: 0, role: 'damage', rollType: 'attack', dice: '1d8', tag: 'огонь + свет 20 фт',
    classes: ['druid'], races: [],
    meta: '1 бонусное действие • На себя (бросок 60 фт) • 10 мин',
    desc: 'В руке горит пламя (яркий свет 20 фт), которое можно метнуть во врага на 60 футов: 1d8 урона огнём (2d8 на 5 ур.).'
  },
  {
    id: 'c_ray_of_frost', name: 'Ледяной луч', level: 0, role: 'damage', rollType: 'attack', dice: '1d8', tag: 'холод / -10 фт скор.',
    classes: ['wizard', 'sorcerer'], races: ['elf'],
    meta: '1 действие • 60 фт • В, С • Мгновенно',
    desc: 'При попадании 1d8 урона холодом (2d8 на 5 ур.), а скорость цели снижается на 10 футов до начала вашего следующего хода.'
  },
  {
    id: 'c_resistance', name: 'Сопротивление', level: 0, role: 'defense', rollType: 'utility', dice: '1d4', tag: '-1d4 от урона',
    classes: ['cleric', 'druid'], races: [],
    meta: '1 действие • Касание • Конц. до 1 мин',
    desc: 'Выберите тип урона: раз в ход цель уменьшает полученный урон этого типа на 1d4.'
  },
  {
    id: 'c_sacred_flame', name: 'Священное пламя', level: 0, role: 'damage', rollType: 'save', dice: '1d8', tag: 'излучение / Спас Лов',
    classes: ['cleric'], races: [],
    meta: '1 действие • 60 фт • В, С • Мгновенно',
    desc: 'При провале Спас Ловкости 1d8 урона излучением (2d8 на 5 ур.). Укрытия не дают бонусов.'
  },
  {
    id: 'c_sapping_sting', name: 'Истощающее жало', level: 0, role: 'damage', rollType: 'save', dice: '1d4', tag: 'некротика + сбивание с ног',
    classes: ['wizard'], races: [],
    meta: '1 действие • 30 фт • В, С • Мгновенно',
    desc: 'При провале Спас Телосложения 1d4 урона некротикой (2d4 на 5 ур.) и цель падает ничком.'
  },
  {
    id: 'c_shape_water', name: 'Формование воды', level: 0, role: 'utility', rollType: 'utility', dice: '', tag: 'лёд и потоки воды',
    classes: ['wizard', 'druid', 'sorcerer'], races: [],
    meta: '1 действие • 30 фт • С • До 1 часа',
    desc: 'Управляет водой в кубе 5 футов: меняет течение, поднимает волну или замораживает воду на 1 час.'
  },
  {
    id: 'c_shillelagh', name: 'Дубинка', level: 0, role: 'damage', rollType: 'utility', dice: '1d8', tag: 'атака дубинкой/посохом через Муд',
    classes: ['druid'], races: [],
    meta: '1 бонусное действие • Касание • 1 минута',
    desc: 'Дубинка или посох используют вашу базовую магическую характеристику вместо Силы, а кость урона равна 1d8 (1d10 на 5 ур.).'
  },
  {
    id: 'c_shocking_grasp', name: 'Шок', level: 0, role: 'damage', rollType: 'attack', dice: '1d8', tag: 'электричество / без реакции',
    classes: ['wizard', 'sorcerer'], races: ['elf'],
    meta: '1 действие • Касание • В, С • Мгновенно',
    desc: 'При попадании 1d8 урона электричеством (2d8 на 5 ур.), и цель не может совершать провоцированные атаки до начала своего следующего хода.'
  },
  {
    id: 'c_spare_the_dying', name: 'Уход за умирающим', level: 0, role: 'defense', rollType: 'utility', dice: '', tag: 'стабилизация при 0 ОЗ',
    classes: ['cleric', 'druid'], races: [],
    meta: '1 действие • 15 фт • В, С • Мгновенно',
    desc: 'Живое существо с 0 хитов в пределах 15 футов мгновенно стабилизируется.'
  },
  {
    id: 'c_starry_wisp', name: 'Звёздная искра', level: 0, role: 'damage', rollType: 'attack', dice: '1d8', tag: 'излучение + подсветка',
    classes: ['bard', 'druid'], races: [],
    meta: '1 действие • 60 фт • В, С • 1 раунд',
    desc: 'При попадании 1d8 урона излучением (2d8 на 5 ур.), а цель светится тусклым светом на 10 футов и не может стать невидимой.'
  },
  {
    id: 'c_sword_burst', name: 'Вспышка мечей', level: 0, role: 'damage', rollType: 'save', dice: '1d6', tag: 'силовое поле / всем в 5 фт',
    classes: ['wizard', 'sorcerer', 'warlock'], races: [],
    meta: '1 действие • На себя (5 фт) • В • Мгновенно',
    desc: 'Все существа в радиусе 5 футов, провалившие Спас Ловкости, получают 1d6 урона силовым полем (2d6 на 5 ур.).'
  },
  {
    id: 'c_thaumaturgy', name: 'Тауматургия', level: 0, role: 'utility', rollType: 'utility', dice: '', tag: 'чудеса и громовой голос',
    classes: ['cleric'], races: ['tiefling'],
    meta: '1 действие • 30 фт • В • 1 минута',
    desc: 'Громовой голос, мерцание огня, дрожь земли и распахивание незапертых дверей.'
  },
  {
    id: 'c_thorn_whip', name: 'Терновый кнут', level: 0, role: 'damage', rollType: 'attack', dice: '1d6', tag: 'колющий / притягивание',
    classes: ['druid'], races: [],
    meta: '1 действие • 30 фт • В, С, М • Мгновенно',
    desc: 'При попадании 1d6 колющего урона (2d6 на 5 ур.) и притягивание цели на 10 футов к себе.'
  },
  {
    id: 'c_thunderclap', name: 'Раскат грома', level: 0, role: 'damage', rollType: 'save', dice: '1d6', tag: 'звук / всем в 5 фт',
    classes: ['wizard', 'bard', 'druid', 'sorcerer', 'warlock'], races: [],
    meta: '1 действие • На себя (5 фт) • С • Мгновенно',
    desc: 'Все существа в радиусе 5 футов, провалившие Спас Телосложения, получают 1d6 урона звуком (2d6 на 5 ур.).'
  },
  {
    id: 'c_toll_the_dead', name: 'Погребальный звон', level: 0, role: 'damage', rollType: 'save', dice: '1d12', tag: 'некротика / Спас Муд',
    classes: ['wizard', 'cleric', 'warlock'], races: [],
    meta: '1 действие • 60 фт • В, С • Мгновенно',
    desc: 'При провале Спас Мудрости 1d8 некротики, а если цель уже ранена — 1d12 (2d8 / 2d12 на 5 ур.).'
  },
  {
    id: 'c_true_strike', name: 'Меткий удар', level: 0, role: 'damage', rollType: 'attack', dice: '1d8', tag: 'удар оружием через магию',
    classes: ['wizard', 'bard', 'sorcerer', 'warlock'], races: [],
    meta: '1 действие • На себя • С, М (оружие)',
    desc: 'Атака оружием с использованием вашей базовой магической характеристики вместо Силы/Ловкости (+1d6 излучением на 5 ур.).'
  },
  {
    id: 'c_vicious_mockery', name: 'Злая насмешка', level: 0, role: 'damage', rollType: 'save', dice: '1d6', tag: 'психич. / помеха врагу',
    classes: ['bard'], races: [],
    meta: '1 действие • 60 фт • В • Мгновенно',
    desc: 'При провале Спас Мудрости 1d6 урона психикой (2d6 на 5 ур.) и помеха на следующий бросок атаки цели.'
  },
  {
    id: 'c_word_of_radiance', name: 'Слово сияния', level: 0, role: 'damage', rollType: 'save', dice: '1d6', tag: 'излучение / врагам в 5 фт',
    classes: ['cleric'], races: [],
    meta: '1 действие • На себя (5 фт) • В, М • Мгновенно',
    desc: 'Вспышка святого света бьёт выбранных вами врагов в 5 футах (Спас Телосложения): 1d6 урона излучением (2d6 на 5 ур.).'
  },

  // ==================== 1 КРУГ ====================
  {
    id: 's1_absorb_elements', name: 'Поглощение стихий', level: 1, role: 'defense', rollType: 'utility', dice: '1d6', tag: 'сопротивление стихии (Реакция)',
    classes: ['wizard', 'druid', 'ranger', 'sorcerer'], races: [],
    meta: '1 реакция • На себя • 1 раунд',
    desc: 'Даёт сопротивление полученному стихийному урону (кислота, холод, огонь, молния, звук) и +1d6 этой стихии к вашей следующей рукопашной атаке.'
  },
  {
    id: 's1_alarm', name: 'Сигнал тревоги', level: 1, role: 'utility', rollType: 'utility', dice: '', tag: 'Ритуал • охрана лагеря (8 ч)',
    classes: ['wizard', 'ranger'], races: [],
    meta: '1 минута (Ритуал) • 30 фт • 8 часов',
    desc: 'Охраняет дверь или зону 20×20 футов: при вторжении будит вас мысленным сигналом или громким звоном.'
  },
  {
    id: 's1_animal_friendship', name: 'Дружба с животными', level: 1, role: 'control', rollType: 'save', dice: '', tag: 'Очарование зверя (24 ч)',
    classes: ['bard', 'druid', 'ranger'], races: [],
    meta: '1 действие • 30 фт • 24 часа',
    desc: 'Зверь с Интеллектом 3 или ниже при провале Спас Мудрости очарован вами на 24 часа.'
  },
  {
    id: 's1_armor_of_agathys', name: 'Доспех Агатиса', level: 1, role: 'defense', rollType: 'utility', dice: '5', tag: '+5 врем. ОЗ и 5 холода в ответ',
    classes: ['warlock'], races: [],
    meta: '1 бонусное действие • На себя • 1 час',
    desc: 'Вы получаете 5 временных хитов на 1 час; пока они есть, любой враг, попавший по вам рукопашной атакой, получает 5 урона холодом.'
  },
  {
    id: 's1_arms_of_hadar', name: 'Руки Хадара', level: 1, role: 'damage', rollType: 'save', dice: '2d6', tag: 'некротика / всем в 10 фт',
    classes: ['warlock'], races: [],
    meta: '1 действие • На себя (10 фт) • Мгновенно',
    desc: 'Тёмные щупальца хлещут всех в 10 футах (Спас Силы): 2d6 урона некротикой и запрет на реакции до следующего хода.'
  },
  {
    id: 's1_bane', name: 'Порча', level: 1, role: 'control', rollType: 'save', dice: '1d4', tag: '-1d4 к атакам и спасам врагов',
    classes: ['cleric', 'bard', 'warlock'], races: [],
    meta: '1 действие • 30 фт (до 3 целей) • Конц. до 1 мин',
    desc: 'До 3 врагов (Спас Харизмы) при провале вычитают 1d4 из всех своих бросков атаки и спасбросков.'
  },
  {
    id: 's1_beast_bond', name: 'Звериные узы', level: 1, role: 'utility', rollType: 'utility', dice: '', tag: 'телепатия со зверем',
    classes: ['druid', 'ranger'], races: [],
    meta: '1 действие • Касание • Конц. до 10 мин',
    desc: 'Устанавливает телепатическую связь с дружелюбным зверем и даёт ему преимущество на атаки по врагам рядом с вами.'
  },
  {
    id: 's1_bless', name: 'Благословение', level: 1, role: 'defense', rollType: 'utility', dice: '1d4', tag: '+1d4 к атакам и спасам (3 цели)',
    classes: ['cleric', 'paladin'], races: [],
    meta: '1 действие • 30 фт • Конц. до 1 мин',
    desc: 'До 3 союзников прибавляют 1d4 ко всем броскам атаки и спасброскам.'
  },
  {
    id: 's1_burning_hands', name: 'Огненные ладони', level: 1, role: 'damage', rollType: 'save', dice: '3d6', tag: 'огонь / конус 15 фт',
    classes: ['wizard', 'sorcerer'], races: [],
    meta: '1 действие • На себя (конус 15 фт) • Мгновенно',
    desc: 'Все в конусе 15 футов кидают Спас Ловкости: 3d6 урона огнём при провале или половина при успехе.'
  },
  {
    id: 's1_cause_fear', name: 'Вызов страха', level: 1, role: 'control', rollType: 'save', dice: '', tag: 'Испуг (Спас Муд)',
    classes: ['wizard', 'warlock'], races: [],
    meta: '1 действие • 60 фт • Конц. до 1 мин',
    desc: 'При провале Спас Мудрости цель становится испуганной вами на 1 минуту.'
  },
  {
    id: 's1_ceremony', name: 'Церемония', level: 1, role: 'utility', rollType: 'utility', dice: '', tag: 'Ритуал • святая вода и обряды',
    classes: ['cleric', 'paladin'], races: [],
    meta: '1 час (Ритуал) • Касание (25 зм) • Мгновенно',
    desc: 'Создание Святой воды, защита тела от поднятия в виде нежити или временные бонусы союзникам.'
  },
  {
    id: 's1_chaos_bolt', name: 'Снаряд хаоса', level: 1, role: 'damage', rollType: 'attack', dice: '2d8+1d6', tag: 'стихия + отскок при дубле',
    classes: ['sorcerer'], races: [],
    meta: '1 действие • 120 фт • В, С • Мгновенно',
    desc: 'При попадании 2d8+1d6 стихийного урона. Если на обеих d8 выпал дубль — снаряд перескакивает в следующую цель в 30 фт!'
  },
  {
    id: 's1_charm_person', name: 'Очарование личности', level: 1, role: 'control', rollType: 'save', dice: '', tag: 'Очарование гуманоида (1 ч)',
    classes: ['wizard', 'bard', 'druid', 'sorcerer', 'warlock'], races: [],
    meta: '1 действие • 30 фт • 1 час',
    desc: 'Гуманоид при провале Спас Мудрости считается очарованным вами на 1 час.'
  },
  {
    id: 's1_chromatic_orb', name: 'Хроматический шар', level: 1, role: 'damage', rollType: 'attack', dice: '3d8', tag: 'стихия на выбор (90 фт)',
    classes: ['wizard', 'sorcerer'], races: [],
    meta: '1 действие • 90 фт (алмаз 50 зм) • Мгновенно',
    desc: 'При попадании наносит 3d8 урона выбранной стихии (кислота, холод, огонь, молния, яд или звук).'
  },
  {
    id: 's1_color_spray', name: 'Сверкающие брызги', level: 1, role: 'control', rollType: 'save', dice: '', tag: 'Ослепление / конус 15 фт',
    classes: ['wizard', 'bard', 'sorcerer'], races: [],
    meta: '1 действие • На себя (конус 15 фт) • 1 раунд',
    desc: 'Существа в конусе 15 футов, провалившие Спас Телосложения, ослеплены до конца вашего следующего хода.'
  },
  {
    id: 's1_command', name: 'Приказ', level: 1, role: 'control', rollType: 'save', dice: '', tag: 'приказ на 1 ход (Спас Муд)',
    classes: ['cleric', 'bard', 'paladin'], races: [],
    meta: '1 действие • 60 фт • 1 раунд',
    desc: 'Приказ из одного слова («Падай», «Беги», «Брось», «Стой»): при провале Спас Мудрости цель выполняет его в свой ход.'
  },
  {
    id: 's1_compelled_duel', name: 'Вызов на дуэль', level: 1, role: 'control', rollType: 'save', dice: '', tag: 'помеха по союзникам',
    classes: ['paladin'], races: [],
    meta: '1 бонусное действие • 30 фт • Конц. до 1 мин',
    desc: 'Враг (Спас Мудрости) получает помеху на атаки по всем, кроме вас, и не может отойти дальше 30 футов.'
  },
  {
    id: 's1_comprehend_languages', name: 'Понимание языков', level: 1, role: 'utility', rollType: 'utility', dice: '', tag: 'Ритуал • перевод речи и рун',
    classes: ['wizard', 'bard', 'sorcerer', 'warlock'], races: [],
    meta: '1 действие (Ритуал) • На себя • 1 час',
    desc: 'Вы понимаете буквальный смысл любой услышанной речи и любого письменного текста на 1 час.'
  },
  {
    id: 's1_create_destroy_water', name: 'Сотворение или уничтожение воды', level: 1, role: 'utility', rollType: 'utility', dice: '', tag: '10 галлонов воды или дождь',
    classes: ['cleric', 'druid'], races: [],
    meta: '1 действие • 30 фт • Мгновенно',
    desc: 'Создаёт до 10 галлонов чистой воды или дождь в кубе 30 футов (гасит огонь).'
  },
  {
    id: 's1_cure_wounds', name: 'Лечение ран', level: 1, role: 'defense', rollType: 'heal', dice: '2d8', tag: 'лечение касанием',
    classes: ['cleric', 'bard', 'druid', 'paladin', 'ranger'], races: [],
    meta: '1 действие • Касание • Мгновенно',
    desc: 'Восстанавливает 2d8 + модификатор базовой характеристики ОЗ при касании (+2d8 за круг выше 1-го).'
  },
  {
    id: 's1_detect_evil_good', name: 'Обнаружение зла и добра', level: 1, role: 'utility', rollType: 'utility', dice: '', tag: 'чутьё на нежить/демонов/фей',
    classes: ['cleric', 'paladin'], races: [],
    meta: '1 действие • На себя (30 фт) • Конц. до 10 мин',
    desc: 'Вы знаете местонахождение любой аберрации, небожителя, элементаля, феи, исчадия или нежити в радиусе 30 футов.'
  },
  {
    id: 's1_detect_magic', name: 'Обнаружение магии', level: 1, role: 'utility', rollType: 'utility', dice: '', tag: 'Ритуал • ауры в 30 фт',
    classes: ['wizard', 'cleric', 'bard', 'druid', 'paladin', 'ranger', 'sorcerer'], races: [],
    meta: '1 действие (Ритуал) • На себя (30 фт) • Конц. до 10 мин',
    desc: 'Показывает магические ауры в радиусе 30 футов и определяет их школу магии.'
  },
  {
    id: 's1_detect_poison_disease', name: 'Обнаружение болезней и яда', level: 1, role: 'utility', rollType: 'utility', dice: '', tag: 'Ритуал • поиск ядов в 30 фт',
    classes: ['cleric', 'druid', 'paladin', 'ranger'], races: [],
    meta: '1 действие (Ритуал) • На себя (30 фт) • Конц. до 10 мин',
    desc: 'Определяет присутствие и тип ядов, ядовитых существ и болезней в радиусе 30 футов.'
  },
  {
    id: 's1_disguise_self', name: 'Маскировка', level: 1, role: 'utility', rollType: 'utility', dice: '', tag: 'иллюзия внешности и одежды',
    classes: ['wizard', 'bard', 'sorcerer'], races: [],
    meta: '1 действие • На себя • 1 час',
    desc: 'Меняет ваш внешний облик, рост (±1 фут), черты лица и вид одежды/брони на 1 час.'
  },
  {
    id: 's1_dissonant_whispers', name: 'Диссонирующий шёпот', level: 1, role: 'damage', rollType: 'save', dice: '3d6', tag: 'психич. + бегство врага',
    classes: ['bard'], races: [],
    meta: '1 действие • 60 фт • Мгновенно',
    desc: 'При провале Спас Мудрости враг получает 3d6 урона психикой и должен потратить реакцию, чтобы убежать от вас.'
  },
  {
    id: 's1_divine_favor', name: 'Божественное благоволение', level: 1, role: 'damage', rollType: 'utility', dice: '1d4', tag: '+1d4 излучения к ударам (БЕЗ конц.)',
    classes: ['paladin'], races: [],
    meta: '1 бонусное действие • На себя • 1 минута',
    desc: 'Ваши атаки оружием наносят дополнительно 1d4 урона излучением при каждом попадании в течение 1 минуты.'
  },
  {
    id: 's1_divine_smite', name: 'Божественная кара', level: 1, role: 'damage', rollType: 'utility', dice: '2d8', tag: '+2d8 излучения при попадании',
    classes: ['paladin'], races: [],
    meta: '1 бонусное действие (сразу после попадания) • Мгновенно',
    desc: 'Добавляет +2d8 урона излучением к вашему удару оружием (+1d8 дополнительно против нежити и исчадий).'
  },
  {
    id: 's1_earth_tremor', name: 'Дрожь земли', level: 1, role: 'damage', rollType: 'save', dice: '1d6', tag: 'дробящий / 10 фт + сбивание с ног',
    classes: ['wizard', 'bard', 'druid', 'sorcerer'], races: [],
    meta: '1 действие • На себя (10 фт) • В, С • Мгновенно',
    desc: 'Существа (кроме вас) в 10 футах при провале Спас Ловкости получают 1d6 дробящего урона и падают ничком.'
  },
  {
    id: 's1_ensnaring_strike', name: 'Опутывающий удар', level: 1, role: 'control', rollType: 'save', dice: '1d6', tag: 'опутывание лозами при ударе',
    classes: ['ranger'], races: [],
    meta: '1 бонусное действие • На себя • Конц. до 1 мин',
    desc: 'При попадании оружием цель кидает Спас Силы: при провале опутывается лозами и получает 1d6 колющего урона каждый ход.'
  },
  {
    id: 's1_entangle', name: 'Опутывание', level: 1, role: 'control', rollType: 'save', dice: '', tag: 'Опутывание / квадрат 20 фт',
    classes: ['druid', 'ranger'], races: [],
    meta: '1 действие • 90 фт (квадрат 20 фт) • Конц. до 1 мин',
    desc: 'Корни и лозы опутывают всех в квадрате 20×20 футов при провале Спас Силы.'
  },
  {
    id: 's1_expeditious_retreat', name: 'Скороходное отступление', level: 1, role: 'defense', rollType: 'utility', dice: '', tag: 'Рывок бонусным действием',
    classes: ['wizard', 'sorcerer', 'warlock'], races: [],
    meta: '1 бонусное действие • На себя • Конц. до 10 мин',
    desc: 'При накладывании и далее каждый ход бонусным действием вы можете совершать действие «Рывок».'
  },
  {
    id: 's1_faerie_fire', name: 'Огонь фей', level: 1, role: 'control', rollType: 'save', dice: '', tag: 'подсветка + преим. по врагам',
    classes: ['bard', 'druid'], races: ['drow'],
    meta: '1 действие • 60 фт (куб 20 фт) • Конц. до 1 мин',
    desc: 'Подсвечивает врагов в кубе 20 фт (Спас Ловкости): все атаки по ним совершаются с преимуществом.'
  },
  {
    id: 's1_false_life', name: 'Псевдожизнь', level: 1, role: 'defense', rollType: 'utility', dice: '2d4+4', tag: '+2d4+4 врем. ОЗ (БЕЗ конц.)',
    classes: ['wizard', 'sorcerer'], races: [],
    meta: '1 действие • На себя • Мгновенно',
    desc: 'Вы получаете 2d4+4 временных хитов (+5 за каждый круг ячейки выше 1-го).'
  },
  {
    id: 's1_feather_fall', name: 'Падение пёрышком', level: 1, role: 'defense', rollType: 'utility', dice: '', tag: 'спасение от падения (Реакция)',
    classes: ['wizard', 'bard', 'sorcerer'], races: [],
    meta: '1 реакция • 60 фт (до 5 целей) • 1 минута',
    desc: 'До 5 падающих существ плавно спускаются без урона от падения.'
  },
  {
    id: 's1_find_familiar', name: 'Поиск фамильяра', level: 1, role: 'utility', rollType: 'utility', dice: '', tag: 'Ритуал • фамильяр-разведчик',
    classes: ['wizard'], races: [],
    meta: '1 час (Ритуал) • 10 фт (10 зм) • Мгновенно',
    desc: 'Призывает духа-зверька (сова, ворон, кот, паук). Вы видите его глазами, передаёте касания, а в бою он даёт союзникам преимущество.'
  },
  {
    id: 's1_fog_cloud', name: 'Туманное облако', level: 1, role: 'control', rollType: 'utility', dice: '', tag: 'плотный туман (сфера 20 фт)',
    classes: ['wizard', 'druid', 'ranger', 'sorcerer'], races: [],
    meta: '1 действие • 120 фт • Конц. до 1 часа',
    desc: 'Густой туман закрывает обзор в сфере 20 футов.'
  },
  {
    id: 's1_frost_fingers', name: 'Ледяные пальцы', level: 1, role: 'damage', rollType: 'save', dice: '2d8', tag: 'холод / конус 15 фт',
    classes: ['wizard'], races: [],
    meta: '1 действие • На себя (конус 15 фт) • В, С • Мгновенно',
    desc: 'Ледяной ветер из ладоней (Спас Телосложения): 2d8 урона холодом при провале.'
  },
  {
    id: 's1_gift_of_alacrity', name: 'Дар рвения', level: 1, role: 'defense', rollType: 'utility', dice: '1d8', tag: '+1d8 к инициативе (8 ч)',
    classes: ['wizard'], races: [],
    meta: '1 минута • Касание • 8 часов (БЕЗ конц.)',
    desc: 'Цель прибавляет 1d8 ко всем своим броскам Инициативы в течение 8 часов.'
  },
  {
    id: 's1_goodberry', name: 'Чудо-ягоды', level: 1, role: 'defense', rollType: 'utility', dice: '', tag: '10 ягод по 1 ОЗ + сытость на день',
    classes: ['druid', 'ranger'], races: [],
    meta: '1 действие • Касание • Мгновенно',
    desc: 'Создаёт 10 ягод: каждая восстанавливает 1 ОЗ и заменяет дневной рацион еды.'
  },
  {
    id: 's1_grease', name: 'Скольжение', level: 1, role: 'control', rollType: 'save', dice: '', tag: 'Сбит с ног / квадрат 10 фт',
    classes: ['wizard', 'sorcerer'], races: [],
    meta: '1 действие • 60 фт • 1 минута (БЕЗ конц.)',
    desc: 'Скользкий жир в квадрате 10×10 футов: существа кидают Спас Ловкости или падают ничком.'
  },
  {
    id: 's1_guiding_bolt', name: 'Направляющий снаряд', level: 1, role: 'damage', rollType: 'attack', dice: '4d6', tag: 'излучение + преим. союзнику',
    classes: ['cleric'], races: [],
    meta: '1 действие • 120 фт • Мгновенно',
    desc: 'При попадании 4d6 урона излучением, и следующая атака по этой цели совершается с преимуществом.'
  },
  {
    id: 's1_hail_of_thorns', name: 'Град шипов', level: 1, role: 'damage', rollType: 'save', dice: '1d10', tag: 'колющий взрыв 5 фт',
    classes: ['ranger'], races: [],
    meta: '1 бонусное действие • На себя • Мгновенно',
    desc: 'При попадании дальнобойным оружием цель и все в 5 футах от неё кидают Спас Ловкости или получают 1d10 колющего урона.'
  },
  {
    id: 's1_healing_word', name: 'Лечащее слово', level: 1, role: 'defense', rollType: 'heal', dice: '2d4', tag: 'лечение бон. действием (60 фт)',
    classes: ['cleric', 'bard', 'druid'], races: [],
    meta: '1 бонусное действие • 60 фт • Мгновенно',
    desc: 'Союзник восстанавливает 2d4 + мод. магии ОЗ. Поднимает упавшего в 0 ОЗ на расстоянии.'
  },
  {
    id: 's1_hellish_rebuke', name: 'Адское возмездие', level: 1, role: 'damage', rollType: 'save', dice: '2d10', tag: 'огонь (Реакция)',
    classes: ['warlock'], races: ['tiefling'],
    meta: '1 реакция • 60 фт • Мгновенно',
    desc: 'Обидчик кидает Спас Ловкости: 2d10 урона огнём при провале или половина при успехе.'
  },
  {
    id: 's1_heroism', name: 'Героизм', level: 1, role: 'defense', rollType: 'utility', dice: '', tag: 'иммунитет к испугу + врем. ОЗ каждый ход',
    classes: ['bard', 'paladin'], races: [],
    meta: '1 действие • Касание • Конц. до 1 мин',
    desc: 'Цель получает иммунитет к испугу и каждый ход получает временные хиты = вашему мод. магии.'
  },
  {
    id: 's1_hex', name: 'Сглаз', level: 1, role: 'damage', rollType: 'utility', dice: '1d6', tag: '+1d6 некротики + помеха',
    classes: ['warlock'], races: [],
    meta: '1 бонусное действие • 90 фт • Конц. до 1 часа',
    desc: 'Ваши атаки по цели наносят +1d6 некротики, а выбранная характеристика цели проверяется с помехой.'
  },
  {
    id: 's1_hunters_mark', name: 'Метка охотника', level: 1, role: 'damage', rollType: 'utility', dice: '1d6', tag: '+1d6 к ударам (бон. действ.)',
    classes: ['ranger'], races: [],
    meta: '1 бонусное действие • 90 фт • Конц. до 1 часа',
    desc: '+1d6 урона при каждом вашем попадании оружием по цели и преимущество на её выслеживание.'
  },
  {
    id: 's1_ice_knife', name: 'Ледяной кинжал', level: 1, role: 'damage', rollType: 'attack', dice: '1d10', tag: 'колющий + 2d6 холод взрыв',
    classes: ['wizard', 'druid', 'sorcerer'], races: [],
    meta: '1 действие • 60 фт • Мгновенно',
    desc: 'При попадании 1d10 колющего урона, затем взрыв в радиусе 5 футов на 2d6 урона холодом (Спас Ловкости).'
  },
  {
    id: 's1_identify', name: 'Опознание', level: 1, role: 'utility', rollType: 'utility', dice: '', tag: 'Ритуал • свойства предметов',
    classes: ['wizard', 'bard'], races: [],
    meta: '1 минута (Ритуал) • Касание (100 зм)',
    desc: 'Раскрывает все магические свойства, заряды и активацию предмета.'
  },
  {
    id: 's1_illusory_script', name: 'Иллюзорный текст', level: 1, role: 'utility', rollType: 'utility', dice: '', tag: 'Ритуал • тайнопись (10 дней)',
    classes: ['wizard', 'bard', 'warlock'], races: [],
    meta: '1 минута (Ритуал) • Касание (10 зм) • 10 дней',
    desc: 'Шифрует послание на пергаменте: для посторонних оно выглядит как другой текст.'
  },
  {
    id: 's1_inflict_wounds', name: 'Нанесение ран', level: 1, role: 'damage', rollType: 'save', dice: '2d10', tag: 'некротика / Спас Тел',
    classes: ['cleric'], races: [],
    meta: '1 действие • Касание • Мгновенно',
    desc: 'При касании цель кидает Спас Телосложения: 2d10 урона некротикой при провале.'
  },
  {
    id: 's1_jump', name: 'Прыжок', level: 1, role: 'utility', rollType: 'utility', dice: '', tag: 'прыжок 30 фт за 10 фт движения',
    classes: ['wizard', 'druid', 'ranger', 'sorcerer'], races: [],
    meta: '1 бонусное действие • Касание • 1 минута (БЕЗ конц.)',
    desc: 'Раз в ход цель может прыгнуть на расстояние до 30 футов, потратив всего 10 футов скорости.'
  },
  {
    id: 's1_longstrider', name: 'Скороход', level: 1, role: 'utility', rollType: 'utility', dice: '', tag: '+10 фт к скорости (1 ч)',
    classes: ['wizard', 'bard', 'druid', 'ranger'], races: [],
    meta: '1 действие • Касание • 1 час (БЕЗ конц.)',
    desc: 'Скорость существа увеличивается на 10 футов на 1 час.'
  },
  {
    id: 's1_mage_armor', name: 'Магический доспех', level: 1, role: 'defense', rollType: 'utility', dice: '', tag: 'КД = 13 + Лов (8 ч)',
    classes: ['wizard', 'sorcerer'], races: [],
    meta: '1 действие • Касание • 8 часов',
    desc: 'Базовый КД цели без доспехов становится равен 13 + модификатор Ловкости на 8 часов.'
  },
  {
    id: 's1_magic_missile', name: 'Волшебная стрела', level: 1, role: 'damage', rollType: 'utility', dice: '3d4+3', tag: 'силовое поле (автопопадание)',
    classes: ['wizard', 'sorcerer'], races: [],
    meta: '1 действие • 120 фт • Мгновенно',
    desc: '3 светящихся дротика автоматически попадают в выбранные цели (по 1d4+1 урона силовым полем каждый).'
  },
  {
    id: 's1_protection_evil_good', name: 'Защита от зла и добра', level: 1, role: 'defense', rollType: 'utility', dice: '', tag: 'помеха нежити/демонам/феям',
    classes: ['wizard', 'cleric', 'paladin', 'warlock'], races: [],
    meta: '1 действие • Касание • Конц. до 10 мин',
    desc: 'Аберрации, исчадия, нежить, феи и элементали атакуют цель с помехой и не могут её очаровать или испугать.'
  },
  {
    id: 's1_purify_food_drink', name: 'Очищение пищи и питья', level: 1, role: 'utility', rollType: 'utility', dice: '', tag: 'Ритуал • снимает яд и гниль',
    classes: ['cleric', 'druid', 'paladin'], races: [],
    meta: '1 действие (Ритуал) • 10 фт • Мгновенно',
    desc: 'Очищает всю немагическую еду и воду в сфере радиусом 5 футов от ядов и болезней.'
  },
  {
    id: 's1_ray_of_sickness', name: 'Луч болезни', level: 1, role: 'damage', rollType: 'attack', dice: '2d8', tag: 'яд + Отравление',
    classes: ['wizard', 'sorcerer'], races: [],
    meta: '1 действие • 60 фт • В, С • Мгновенно',
    desc: 'При попадании наносит 2d8 урона ядом и накладывает состояние «Отравлен» до конца вашего следующего хода.'
  },
  {
    id: 's1_sanctuary', name: 'Убежище', level: 1, role: 'defense', rollType: 'save', dice: '', tag: 'защита союзника (бон. действ.)',
    classes: ['cleric'], races: [],
    meta: '1 бонусное действие • 30 фт • 1 минута (БЕЗ конц.)',
    desc: 'Враг, атакующий защищённого союзника, должен пройти Спас Мудрости или выбрать другую цель.'
  },
  {
    id: 's1_searing_smite', name: 'Палящая кара', level: 1, role: 'damage', rollType: 'save', dice: '1d6', tag: 'огонь при ударе + горение',
    classes: ['paladin'], races: [],
    meta: '1 бонусное действие (после попадания) • 1 минута',
    desc: 'Добавляет +1d6 огня к удару, а в начале каждого хода цель получает ещё 1d6 огня, пока не пройдёт Спас Телосложения.'
  },
  {
    id: 's1_shield', name: 'Щит', level: 1, role: 'defense', rollType: 'utility', dice: '', tag: '+5 к КД (Реакция)',
    classes: ['wizard', 'sorcerer'], races: [],
    meta: '1 реакция • На себя • 1 раунд',
    desc: '+5 к КД до начала вашего следующего хода и полный иммунитет к Волшебной стреле.'
  },
  {
    id: 's1_shield_of_faith', name: 'Щит веры', level: 1, role: 'defense', rollType: 'utility', dice: '', tag: '+2 к КД союзнику (бон. действ.)',
    classes: ['cleric', 'paladin'], races: [],
    meta: '1 бонусное действие • 60 фт • Конц. до 10 мин',
    desc: 'Даёт выбранному существу +2 к Классу Доспеха на 10 минут.'
  },
  {
    id: 's1_silent_image', name: 'Немой образ', level: 1, role: 'control', rollType: 'utility', dice: '', tag: 'иллюзия 15×15 фт',
    classes: ['wizard', 'bard', 'sorcerer'], races: [],
    meta: '1 действие • 60 фт • Конц. до 10 мин',
    desc: 'Создаёт визуальную иллюзию объекта или существа размером не больше куба 15 футов.'
  },
  {
    id: 's1_silvery_barbs', name: 'Серебристые колкости', level: 1, role: 'control', rollType: 'utility', dice: '', tag: 'переброс врага + преим. другу (Реакция)',
    classes: ['wizard', 'bard', 'sorcerer'], races: [],
    meta: '1 реакция • 60 фт • Мгновенно',
    desc: 'Заставляет врага перебросить успешный d20 и взять меньший результат, а союзник получает преимущество на следующий бросок.'
  },
  {
    id: 's1_sleep', name: 'Усыпление', level: 1, role: 'control', rollType: 'save', dice: '', tag: 'сон в сфере 5 фт (Спас Муд)',
    classes: ['wizard', 'bard', 'sorcerer'], races: [],
    meta: '1 действие • 60 фт (сфера 5 фт) • Конц. до 1 мин',
    desc: 'Существа в сфере 5 футов при провале Спас Мудрости засыпают до получения урона или пробуждения.'
  },
  {
    id: 's1_speak_with_animals', name: 'Разговор с животными', level: 1, role: 'utility', rollType: 'utility', dice: '', tag: 'Ритуал • общение со зверями',
    classes: ['bard', 'druid', 'ranger', 'warlock'], races: [],
    meta: '1 действие (Ритуал) • На себя • 10 минут',
    desc: 'Вы можете понимать зверей и общаться с ними словами.'
  },
  {
    id: 's1_tashas_caustic_brew', name: 'Едкое варево Таши', level: 1, role: 'damage', rollType: 'save', dice: '2d4', tag: 'кислота / линия 30×5 фт',
    classes: ['wizard', 'sorcerer'], races: [],
    meta: '1 действие • На себя (линия 30 фт) • Конц. до 1 мин',
    desc: 'Провалившие Спас Ловкости покрываются кислотой и получают 2d4 урона в начале каждого хода.'
  },
  {
    id: 's1_tashas_laughter', name: 'Жуткий смех Таши', level: 1, role: 'control', rollType: 'save', dice: '', tag: 'Сбит с ног / Спас Муд',
    classes: ['wizard', 'bard', 'warlock'], races: [],
    meta: '1 действие • 30 фт • Конц. до 1 мин',
    desc: 'При провале Спас Мудрости цель падает ничком в приступе хохота и становится недееспособной.'
  },
  {
    id: 's1_tensers_disk', name: 'Парящий диск Тензера', level: 1, role: 'utility', rollType: 'utility', dice: '', tag: 'Ритуал • перевозка 500 фнт',
    classes: ['wizard'], races: [],
    meta: '1 действие (Ритуал) • 30 фт • 1 час',
    desc: 'Парящий силовой диск следует за вами и перевозит до 500 фунтов груза.'
  },
  {
    id: 's1_thunderous_smite', name: 'Громовая кара', level: 1, role: 'damage', rollType: 'save', dice: '2d6', tag: 'звук + толчок на 10 фт',
    classes: ['paladin'], races: [],
    meta: '1 бонусное действие (после попадания) • Мгновенно',
    desc: 'Добавляет +2d6 урона звуком, а цель кидает Спас Силы или отлетает на 10 футов и падает ничком.'
  },
  {
    id: 's1_thunderwave', name: 'Волна грома', level: 1, role: 'damage', rollType: 'save', dice: '2d8', tag: 'звук / куб 15 фт + толчок',
    classes: ['wizard', 'bard', 'druid', 'sorcerer'], races: [],
    meta: '1 действие • На себя (куб 15 фт) • Мгновенно',
    desc: 'Ударная волна вокруг вас (Спас Телосложения): 2d8 урона звуком и отбрасывание на 10 футов при провале.'
  },
  {
    id: 's1_unseen_servant', name: 'Невидимый слуга', level: 1, role: 'utility', rollType: 'utility', dice: '', tag: 'Ритуал • невидимый помощник',
    classes: ['wizard', 'bard', 'warlock'], races: [],
    meta: '1 действие (Ритуал) • 60 фт • 1 час',
    desc: 'Невидимая сила (Сила 2) выполняет простые поручения: открывает двери, подаёт вещи.'
  },
  {
    id: 's1_witch_bolt', name: 'Ведьмин снаряд', level: 1, role: 'damage', rollType: 'attack', dice: '2d12', tag: 'электричество + дуга',
    classes: ['wizard', 'sorcerer', 'warlock'], races: [],
    meta: '1 действие • 60 фт • Конц. до 1 мин',
    desc: 'При попадании 2d12 электричеством, а в последующие ходы бонусным действием можно наносить 1d12 электричества автоматически.'
  },
  {
    id: 's1_wrathful_smite', name: 'Гневная кара', level: 1, role: 'damage', rollType: 'save', dice: '1d6', tag: 'некротика + Испуг',
    classes: ['paladin'], races: [],
    meta: '1 бонусное действие (после попадания) • 1 минута',
    desc: 'Добавляет +1d6 урона некротикой, а при провале Спас Мудрости цель становится испуганной вами на 1 минуту.'
  },
  {
    id: 's1_zephyr_strike', name: 'Удар зефира', level: 1, role: 'damage', rollType: 'utility', dice: '1d8', tag: 'без провоцир. атак + преим. и +1d8',
    classes: ['ranger'], races: [],
    meta: '1 бонусное действие • На себя • Конц. до 1 мин',
    desc: 'Не провоцирует атаки по возможности; один раз даёт преимущество на атаку оружием, +1d8 силового урона и +30 фт скорости.'
  },

  // ==================== 2 КРУГ ====================
  {
    id: 's2_aganazzars_scorcher', name: 'Аганназаров обжигатель', level: 2, role: 'damage', rollType: 'save', dice: '3d8', tag: 'огонь / линия 30×5 фт',
    classes: ['wizard', 'sorcerer'], races: [],
    meta: '1 действие • 30 фт (линия 30×5 фт) • Мгновенно',
    desc: 'Струя ревущего пламени бьёт по линии 30×5 футов (Спас Ловкости): 3d8 урона огнём при провале.'
  },
  {
    id: 's2_aid', name: 'Помощь', level: 2, role: 'defense', rollType: 'utility', dice: '5', tag: '+5 к макс. ОЗ для 3 союзников (8 ч)',
    classes: ['cleric', 'paladin', 'bard', 'druid', 'ranger'], races: [],
    meta: '1 действие • 30 фт (до 3 целей) • 8 часов (БЕЗ конц.)',
    desc: 'Максимальные и текущие хиты до трёх существ увеличиваются на 5 на 8 часов.'
  },
  {
    id: 's2_alter_self', name: 'Смена обличья', level: 2, role: 'utility', rollType: 'utility', dice: '', tag: 'жабры, когти или новая форма',
    classes: ['wizard', 'sorcerer'], races: [],
    meta: '1 действие • На себя • Конц. до 1 часа',
    desc: 'Даёт подводное дыхание и плавание, естественное оружие или смену внешности.'
  },
  {
    id: 's2_animal_messenger', name: 'Животное-посланец', level: 2, role: 'utility', rollType: 'utility', dice: '', tag: 'Ритуал • зверь-почтальон',
    classes: ['bard', 'druid', 'ranger'], races: [],
    meta: '1 действие (Ритуал) • 30 фт • 24 часа',
    desc: 'Крошечный зверь отправляется в указанное место и передаёт устное послание до 25 слов.'
  },
  {
    id: 's2_arcane_lock', name: 'Волшебный замок', level: 2, role: 'utility', rollType: 'utility', dice: '', tag: 'маг. усиление двери',
    classes: ['wizard'], races: [],
    meta: '1 действие • Касание • Навсегда',
    desc: 'Запирает дверь или сундук наглухо.'
  },
  {
    id: 's2_arcane_vigor', name: 'Магическая бодрость', level: 2, role: 'defense', rollType: 'heal', dice: '2d6', tag: 'самолечение бон. действием',
    classes: ['wizard', 'sorcerer'], races: [],
    meta: '1 бонусное действие • На себя • Мгновенно',
    desc: 'Мгновенно восстанавливает вам 2d6 + мод. магии ОЗ (+1d6 за круг выше 2-го).'
  },
  {
    id: 's2_augury', name: 'Гадание', level: 2, role: 'utility', rollType: 'utility', dice: '', tag: 'Ритуал • предсказание исхода',
    classes: ['cleric', 'druid', 'wizard'], races: [],
    meta: '1 минута (Ритуал) • На себя (25 зм) • Мгновенно',
    desc: 'Узнаёт у высших сил общие результаты ваших планов на ближайшие 30 минут.'
  },
  {
    id: 's2_barkskin', name: 'Древесная кожа', level: 2, role: 'defense', rollType: 'utility', dice: '', tag: 'КД не ниже 17 (БЕЗ конц.)',
    classes: ['druid', 'ranger'], races: [],
    meta: '1 бонусное действие • Касание • 1 час (БЕЗ конц.)',
    desc: 'Класс Доспеха цели не может быть ниже 17 в течение 1 часа.'
  },
  {
    id: 's2_beast_sense', name: 'Чутьё зверя', level: 2, role: 'utility', rollType: 'utility', dice: '', tag: 'Ритуал • зрение зверя',
    classes: ['druid', 'ranger'], races: [],
    meta: '1 действие (Ритуал) • Касание • Конц. до 1 часа',
    desc: 'Вы смотрите глазами и слышите ушами добровольного зверя.'
  },
  {
    id: 's2_blindness_deafness', name: 'Слепота/Глухота', level: 2, role: 'control', rollType: 'save', dice: '', tag: 'Ослепление (БЕЗ конц.)',
    classes: ['wizard', 'cleric', 'bard', 'sorcerer'], races: [],
    meta: '1 действие • 30 фт • 1 минута (БЕЗ конц.)',
    desc: 'При провале Спас Телосложения враг ослеплён на 1 минуту без концентрации.'
  },
  {
    id: 's2_blur', name: 'Размытый образ', level: 2, role: 'defense', rollType: 'utility', dice: '', tag: 'помеха по вам на 1 мин',
    classes: ['wizard', 'sorcerer'], races: [],
    meta: '1 действие • На себя • Конц. до 1 мин',
    desc: 'Все существа совершают броски атаки по вам с помехой.'
  },
  {
    id: 's2_calm_emotions', name: 'Успокоение эмоций', level: 2, role: 'control', rollType: 'save', dice: '', tag: 'снятие страха и очарования',
    classes: ['cleric', 'bard'], races: [],
    meta: '1 действие • 60 фт • Конц. до 1 мин',
    desc: 'Снимает состояния «Очарован» и «Испуган» или успокаивает враждебных гуманоидов.'
  },
  {
    id: 's2_cloud_of_daggers', name: 'Облако кинжалов', level: 2, role: 'damage', rollType: 'utility', dice: '4d4', tag: 'рубящий 4d4 (без спас.)',
    classes: ['wizard', 'bard', 'sorcerer', 'warlock'], races: [],
    meta: '1 действие • 60 фт (куб 5 фт) • Конц. до 1 мин',
    desc: 'Любое существо в кубе 5×5 футов получает 4d4 рубящего урона без спасброска.'
  },
  {
    id: 's2_continual_flame', name: 'Неугасимое пламя', level: 2, role: 'utility', rollType: 'utility', dice: '', tag: 'маг. свет навсегда',
    classes: ['wizard', 'cleric', 'druid'], races: [],
    meta: '1 действие • Касание (50 зм) • Навсегда',
    desc: 'Создаёт постоянный яркий свет (20 фт) на предмете без жара.'
  },
  {
    id: 's2_crown_of_madness', name: 'Корона безумия', level: 2, role: 'control', rollType: 'save', dice: '', tag: 'контроль гуманоида',
    classes: ['wizard', 'bard', 'sorcerer', 'warlock'], races: [],
    meta: '1 действие • 120 фт • Конц. до 1 мин',
    desc: 'Гуманоид (Спас Мудрости) вынужден атаковать ближайшую выбранную вами цель.'
  },
  {
    id: 's2_darkness', name: 'Тьма', level: 2, role: 'control', rollType: 'utility', dice: '', tag: 'маг. тьма (сфера 15 фт)',
    classes: ['wizard', 'sorcerer', 'warlock'], races: ['drow'],
    meta: '1 действие • 60 фт • Конц. до 10 мин',
    desc: 'Непроглядная магическая тьма в сфере 15 футов.'
  },
  {
    id: 's2_darkvision', name: 'Тёмное зрение', level: 2, role: 'utility', rollType: 'utility', dice: '', tag: 'зрение в темноте 60 фт (8 ч)',
    classes: ['wizard', 'druid', 'ranger', 'sorcerer'], races: [],
    meta: '1 действие • Касание • 8 часов (БЕЗ конц.)',
    desc: 'Дарует существу тёмное зрение на 60 футов на 8 часов.'
  },
  {
    id: 's2_detect_thoughts', name: 'Обнаружение мыслей', level: 2, role: 'utility', rollType: 'save', dice: '', tag: 'чтение мыслей в 30 фт',
    classes: ['wizard', 'bard', 'sorcerer'], races: [],
    meta: '1 действие • На себя (30 фт) • Конц. до 1 мин',
    desc: 'Позволяет читать поверхностные мысли существ в 30 футах или копать глубже (Спас Мудрости).'
  },
  {
    id: 's2_dragons_breath', name: 'Дыхание дракона', level: 2, role: 'damage', rollType: 'save', dice: '3d6', tag: 'конус 15 фт (1 минута)',
    classes: ['wizard', 'sorcerer'], races: [],
    meta: '1 бонусное действие • Касание • Конц. до 1 мин',
    desc: 'Союзник или фамильяр может действием выдыхать конус 15 футов на 3d6 урона (Спас Ловкости).'
  },
  {
    id: 's2_dust_devil', name: 'Пылевой вихрь', level: 2, role: 'control', rollType: 'save', dice: '1d8', tag: 'дробящий + отброс',
    classes: ['wizard', 'druid', 'sorcerer'], races: [],
    meta: '1 действие • 60 фт • Конц. до 1 мин',
    desc: 'Вихрь отбрасывает врагов на 10 футов и наносит 1d8 дробящего урона (Спас Силы).'
  },
  {
    id: 's2_earthen_grasp', name: 'Земляная хватка Максимилиана', level: 2, role: 'control', rollType: 'save', dice: '2d6', tag: 'дробящий + Опутывание',
    classes: ['wizard', 'sorcerer'], races: [],
    meta: '1 действие • 30 фт • Конц. до 1 мин',
    desc: 'Каменная рука сжимает врага (Спас Силы): 2d6 дробящего урона и опутывание.'
  },
  {
    id: 's2_enhance_ability', name: 'Улучшение характеристики', level: 2, role: 'defense', rollType: 'utility', dice: '', tag: 'преимущество на стат',
    classes: ['cleric', 'bard', 'druid', 'sorcerer', 'ranger', 'wizard'], races: [],
    meta: '1 действие • Касание • Конц. до 1 часа',
    desc: 'Даёт существу преимущество на все проверки выбранной характеристики.'
  },
  {
    id: 's2_enlarge_reduce', name: 'Увеличение/Уменьшение', level: 2, role: 'control', rollType: 'save', dice: '1d4', tag: 'бафф союзника (+1d4) или дебафф',
    classes: ['wizard', 'bard', 'druid', 'sorcerer'], races: [],
    meta: '1 действие • 30 фт • Конц. до 1 мин',
    desc: 'Удваивает размер союзника (+1d4 к урону) ИЛИ уменьшает врага (-1d4 к урону).'
  },
  {
    id: 's2_enthrall', name: 'Очарование толпы', level: 2, role: 'control', rollType: 'save', dice: '', tag: 'помеха на Внимательность врагам',
    classes: ['bard', 'warlock'], races: [],
    meta: '1 действие • 60 фт • 1 минута',
    desc: 'Отвлекает внимание существ при провале Спас Мудрости.'
  },
  {
    id: 's2_find_steed', name: 'Поиск скакуна', level: 2, role: 'utility', rollType: 'utility', dice: '', tag: 'призыв верного скакуна',
    classes: ['paladin'], races: [],
    meta: '1 действие • 30 фт • Мгновенно',
    desc: 'Призывает верного духовного скакуна, который слушается ваших команд и помогает в бою.'
  },
  {
    id: 's2_find_traps', name: 'Поиск ловушек', level: 2, role: 'utility', rollType: 'utility', dice: '', tag: 'обнаружение ловушек в 120 фт',
    classes: ['cleric', 'druid', 'ranger'], races: [],
    meta: '1 действие • 120 фт • Мгновенно',
    desc: 'Вы чувствуете присутствие любых ловушек в пределах видимости на 120 футов.'
  },
  {
    id: 's2_flame_blade', name: 'Пылающий клинок', level: 2, role: 'damage', rollType: 'attack', dice: '3d6', tag: 'огонь / клинок в руке',
    classes: ['druid', 'sorcerer'], races: [],
    meta: '1 бонусное действие • На себя • Конц. до 10 мин',
    desc: 'Огненный скимитар в руке наносит 3d6 урона огнём при попадании.'
  },
  {
    id: 's2_flaming_sphere', name: 'Пылающий шар', level: 2, role: 'damage', rollType: 'save', dice: '2d6', tag: 'огонь / таран бон. действием',
    classes: ['wizard', 'druid', 'sorcerer'], races: [],
    meta: '1 действие • 60 фт • Конц. до 1 мин',
    desc: 'Огненный шар 5 фт: враги рядом кидают Спас Ловкости (2d6 огня).'
  },
  {
    id: 's2_gentle_repose', name: 'Ритуальное успокоение', level: 2, role: 'utility', rollType: 'utility', dice: '', tag: 'Ритуал • консервация тела на 10 дней',
    classes: ['cleric', 'wizard', 'paladin'], races: [],
    meta: '1 действие (Ритуал) • Касание (25 зм) • 10 дней',
    desc: 'Продлевает таймер для воскрешения погибшего на 10 дней.'
  },
  {
    id: 's2_gust_of_wind', name: 'Порыв ветра', level: 2, role: 'control', rollType: 'save', dice: '', tag: 'линия 60 фт + отталкивание',
    classes: ['wizard', 'druid', 'ranger', 'sorcerer'], races: [],
    meta: '1 действие • На себя (линия 60×10 фт) • Конц. до 1 мин',
    desc: 'Сильный ветер отталкивает врагов на 15 футов (Спас Силы).'
  },
  {
    id: 's2_healing_spirit', name: 'Дух исцеления', level: 2, role: 'defense', rollType: 'heal', dice: '1d6', tag: 'лечащий дух 5×5 фт',
    classes: ['druid', 'ranger'], races: [],
    meta: '1 бонусное действие • 60 фт • Конц. до 1 мин',
    desc: 'Восстанавливает союзникам в зоне по 1d6 ОЗ за проход.'
  },
  {
    id: 's2_heat_metal', name: 'Нагревание металла', level: 2, role: 'damage', rollType: 'save', dice: '2d8', tag: 'огонь / урон металлу и броне',
    classes: ['bard', 'druid'], races: [],
    meta: '1 действие • 60 фт • Конц. до 1 мин',
    desc: 'Раскаляет броню или оружие врага: 2d8 урона огнём каждый ход бонусным действием + помеха на атаки врагу.'
  },
  {
    id: 's2_hold_person', name: 'Удержание личности', level: 2, role: 'control', rollType: 'save', dice: '', tag: 'Паралич гуманоида / Спас Муд',
    classes: ['wizard', 'cleric', 'bard', 'druid', 'sorcerer', 'warlock'], races: [],
    meta: '1 действие • 60 фт • Конц. до 1 мин',
    desc: 'Гуманоид при провале Спас Мудрости парализован (автокриты в ближнем бою!).'
  },
  {
    id: 's2_invisibility', name: 'Невидимость', level: 2, role: 'defense', rollType: 'utility', dice: '', tag: 'невидимость на 1 час',
    classes: ['wizard', 'bard', 'sorcerer', 'warlock'], races: [],
    meta: '1 действие • Касание • Конц. до 1 часа',
    desc: 'Существо становится невидимым до атаки или заклинания.'
  },
  {
    id: 's2_knock', name: 'Открывание', level: 2, role: 'utility', rollType: 'utility', dice: '', tag: 'открывает любой замок',
    classes: ['wizard', 'bard', 'sorcerer'], races: [],
    meta: '1 действие • 60 фт • Мгновенно',
    desc: 'Мгновенно отпирает запертую дверь или сундук.'
  },
  {
    id: 's2_lesser_restoration', name: 'Меньшее восстановление', level: 2, role: 'defense', rollType: 'utility', dice: '', tag: 'снятие болезней, слепоты, паралича',
    classes: ['cleric', 'bard', 'druid', 'paladin', 'ranger'], races: [],
    meta: '1 бонусное действие • Касание • Мгновенно',
    desc: 'Снимает болезнь или состояние: ослеплён, глух, парализован или отравлен.'
  },
  {
    id: 's2_levitate', name: 'Левитация', level: 2, role: 'utility', rollType: 'save', dice: '', tag: 'подъём до 20 фт в воздух',
    classes: ['wizard', 'sorcerer'], races: [],
    meta: '1 действие • 60 фт • Конц. до 10 мин',
    desc: 'Поднимает цель весом до 500 фунтов на высоту до 20 футов.'
  },
  {
    id: 's2_locate_animals_plants', name: 'Поиск животных или растений', level: 2, role: 'utility', rollType: 'utility', dice: '', tag: 'Ритуал • поиск зверя/травы (5 миль)',
    classes: ['bard', 'druid', 'ranger'], races: [],
    meta: '1 действие (Ритуал) • На себя (5 миль) • Мгновенно',
    desc: 'Указывает направление до конкретного вида животных или растений в радиусе 5 миль.'
  },
  {
    id: 's2_locate_object', name: 'Поиск предмета', level: 2, role: 'utility', rollType: 'utility', dice: '', tag: 'направление к предмету (1000 фт)',
    classes: ['wizard', 'cleric', 'bard', 'druid', 'paladin', 'ranger'], races: [],
    meta: '1 действие • На себя (1000 фт) • Конц. до 10 мин',
    desc: 'Указывает направление до знакомого вам предмета в радиусе 1000 футов.'
  },
  {
    id: 's2_magic_mouth', name: 'Волшебные уста', level: 2, role: 'utility', rollType: 'utility', dice: '', tag: 'Ритуал • сообщение-триггер',
    classes: ['wizard', 'bard'], races: [],
    meta: '1 минута (Ритуал) • 30 фт (10 зм) • До срабатывания',
    desc: 'Магический рот на предмете произносит записанную фразу при заданном условии.'
  },
  {
    id: 's2_magic_weapon', name: 'Магическое оружие', level: 2, role: 'damage', rollType: 'utility', dice: '', tag: 'оружие получает +1 бонус (БЕЗ конц.)',
    classes: ['wizard', 'paladin', 'ranger', 'sorcerer'], races: [],
    meta: '1 бонусное действие • Касание • 1 час (БЕЗ конц.)',
    desc: 'Оружие становится магическим и получает +1 к атаке и урону на 1 час.'
  },
  {
    id: 's2_melfs_acid_arrow', name: 'Кислотная стрела Мельфа', level: 2, role: 'damage', rollType: 'attack', dice: '4d4', tag: 'кислота + 2d4 в след. ход',
    classes: ['wizard'], races: [],
    meta: '1 действие • 90 фт • Мгновенно',
    desc: 'Стрела кислоты наносит 4d4 урона сразу и ещё 2d4 в конце следующего хода цели.'
  },
  {
    id: 's2_mind_spike', name: 'Мозговой шип', level: 2, role: 'damage', rollType: 'save', dice: '3d8', tag: 'психич. + метка невидимого',
    classes: ['wizard', 'sorcerer', 'warlock'], races: [],
    meta: '1 действие • 60 фт • Конц. до 1 часа',
    desc: 'При провале Спас Мудрости 3d8 урона психикой и отслеживание цели на 1 час.'
  },
  {
    id: 's2_mirror_image', name: 'Отражения', level: 2, role: 'defense', rollType: 'utility', dice: '', tag: '3 двойника (БЕЗ конц.)',
    classes: ['wizard', 'bard', 'sorcerer', 'warlock'], races: [],
    meta: '1 действие • На себя • 1 минута',
    desc: 'Создаёт 3 иллюзорных двойника, перехватывающих атаки по вам.'
  },
  {
    id: 's2_misty_step', name: 'Туманный шаг', level: 2, role: 'defense', rollType: 'utility', dice: '', tag: 'телепорт 30 фт (бон. действ.)',
    classes: ['wizard', 'sorcerer', 'warlock'], races: [],
    meta: '1 бонусное действие • На себя • Мгновенно',
    desc: 'Мгновенная телепортация до 30 футов в видимую точку.'
  },
  {
    id: 's2_moonbeam', name: 'Лунный луч', level: 2, role: 'damage', rollType: 'save', dice: '2d10', tag: 'излучение / столб света 5 фт',
    classes: ['druid'], races: [],
    meta: '1 действие • 120 фт • Конц. до 1 мин',
    desc: 'Столб лунного света наносит 2d10 урона излучением (Спас Телосложения).'
  },
  {
    id: 's2_nystuls_magic_aura', name: 'Магическая аура Нистула', level: 2, role: 'utility', rollType: 'utility', dice: '', tag: 'обман проверки аур',
    classes: ['wizard'], races: [],
    meta: '1 действие • Касание • 24 часа',
    desc: 'Маскирует магическую ауру предмета или существа.'
  },
  {
    id: 's2_pass_without_trace', name: 'Бесследное передвижение', level: 2, role: 'utility', rollType: 'utility', dice: '', tag: '+10 к Скрытности всей группе',
    classes: ['ranger', 'druid'], races: [],
    meta: '1 действие • Аура 30 фт • Конц. до 1 часа',
    desc: 'Отряд в радиусе 30 фт получает +10 к Скрытности и не оставляет следов.'
  },
  {
    id: 's2_phantasmal_force', name: 'Фантасмальная сила', level: 2, role: 'control', rollType: 'save', dice: '1d6', tag: 'иллюзорный урон разуму',
    classes: ['wizard', 'bard', 'sorcerer'], races: [],
    meta: '1 действие • 60 фт • Конц. до 1 мин',
    desc: 'Создаёт в разуме врага иллюзию (Спас Интеллекта), наносящую 1d6 психо-урона каждый ход.'
  },
  {
    id: 's2_prayer_of_healing', name: 'Молитва исцеления', level: 2, role: 'defense', rollType: 'heal', dice: '2d8', tag: 'лечение до 5 союзников за 10 мин',
    classes: ['cleric', 'paladin'], races: [],
    meta: '10 минут • 30 фт • Мгновенно',
    desc: 'До 5 союзников восстанавливают 2d8 + мод. магии ОЗ и получают эффект Короткого отдыха (раз в долгий отдых).'
  },
  {
    id: 's2_protection_poison', name: 'Защита от яда', level: 2, role: 'defense', rollType: 'utility', dice: '', tag: 'сопротивление яду (1 ч)',
    classes: ['cleric', 'druid', 'paladin', 'ranger'], races: [],
    meta: '1 действие • Касание • 1 час (БЕЗ конц.)',
    desc: 'Снимает отравление и даёт сопротивление урону ядом на 1 час.'
  },
  {
    id: 's2_ray_of_enfeeblement', name: 'Луч ослабления', level: 2, role: 'control', rollType: 'save', dice: '', tag: 'помеха на Силу и половинный урон',
    classes: ['wizard', 'warlock'], races: [],
    meta: '1 действие • 60 фт • Конц. до 1 мин',
    desc: 'При провале Спас Телосложения цель наносит вдвое меньше урона атаками Силой.'
  },
  {
    id: 's2_rime_binding_ice', name: 'Сковывающий лёд Римы', level: 2, role: 'damage', rollType: 'save', dice: '3d8', tag: 'холод / конус 30 фт + скорость 0',
    classes: ['wizard', 'sorcerer'], races: [],
    meta: '1 действие • На себя (конус 30 фт) • Мгновенно',
    desc: '3d8 урона холодом и вмерзание в лёд (скорость 0) при провале Спас Телосложения.'
  },
  {
    id: 's2_rope_trick', name: 'Веревочный трюк', level: 2, role: 'utility', rollType: 'utility', dice: '', tag: 'безопасное убежище на 1 час',
    classes: ['wizard'], races: [],
    meta: '1 действие • Касание • 1 час',
    desc: 'Открывает невидимое внепространственное укрытие на верёвке для 8 существ.'
  },
  {
    id: 's2_scorching_ray', name: 'Палящий луч', level: 2, role: 'damage', rollType: 'attack', dice: '2d6', tag: 'огонь × 3 луча (6d6)',
    classes: ['wizard', 'sorcerer'], races: [],
    meta: '1 действие • 120 фт • Мгновенно',
    desc: '3 огненных луча (отдельные атаки по 2d6 урона каждый).'
  },
  {
    id: 's2_see_invisibility', name: 'Видение невидимого', level: 2, role: 'utility', rollType: 'utility', dice: '', tag: 'видит невидимых (1 час)',
    classes: ['wizard', 'bard', 'sorcerer'], races: [],
    meta: '1 действие • На себя • 1 час (БЕЗ конц.)',
    desc: 'Вы видите невидимых существ и эфирный план на 1 час.'
  },
  {
    id: 's2_shadow_blade', name: 'Теневой клинок', level: 2, role: 'damage', rollType: 'attack', dice: '2d8', tag: 'психич. меч 2d8 (преим. в темноте)',
    classes: ['wizard', 'sorcerer', 'warlock'], races: [],
    meta: '1 бонусное действие • На себя • Конц. до 1 мин',
    desc: 'Лёгкий фехтовальный клинок из теней (2d8 урона психикой; в темноте атаки с преимуществом).'
  },
  {
    id: 's2_shatter', name: 'Дребезги', level: 2, role: 'damage', rollType: 'save', dice: '3d8', tag: 'звук / сфера 10 фт',
    classes: ['wizard', 'bard', 'sorcerer', 'warlock'], races: [],
    meta: '1 действие • 60 фт (сфера 10 фт) • Мгновенно',
    desc: 'Разрушительный звуковой взрыв (Спас Телосложения): 3d8 урона звуком.'
  },
  {
    id: 's2_shining_smite', name: 'Сияющая кара', level: 2, role: 'damage', rollType: 'utility', dice: '2d6', tag: 'излучение + преим. по цели всем',
    classes: ['paladin'], races: [],
    meta: '1 бонусное действие (после попадания) • Конц. до 1 мин',
    desc: '+2d6 урона излучением к удару, а все атаки по этой цели совершаются с преимуществом.'
  },
  {
    id: 's2_silence', name: 'Тишина', level: 2, role: 'control', rollType: 'utility', dice: '', tag: 'Ритуал • сфера 20 фт без звука и магии',
    classes: ['cleric', 'bard', 'ranger'], races: [],
    meta: '1 действие (Ритуал) • 120 фт • Конц. до 10 мин',
    desc: 'В сфере 20 футов нет звуков и невозможно творить заклинания с вербальным (В) компонентом.'
  },
  {
    id: 's2_spider_climb', name: 'Паучье лазание', level: 2, role: 'utility', rollType: 'utility', dice: '', tag: 'ходьба по стенам и потолку',
    classes: ['wizard', 'sorcerer', 'warlock'], races: [],
    meta: '1 действие • Касание • Конц. до 1 часа',
    desc: 'Существо может ходить по стенам и вверх тормашками по потолку.'
  },
  {
    id: 's2_spike_growth', name: 'Шипы', level: 2, role: 'control', rollType: 'utility', dice: '2d4', tag: 'колющие шипы (2d4 за 5 фт)',
    classes: ['druid', 'ranger'], races: [],
    meta: '1 действие • 150 фт • Конц. до 10 мин',
    desc: 'За каждые 5 футов движения по зоне существо получает 2d4 колющего урона.'
  },
  {
    id: 's2_spiritual_weapon', name: 'Божественное оружие', level: 2, role: 'damage', rollType: 'attack', dice: '1d8', tag: 'бон. действие (БЕЗ конц.)',
    classes: ['cleric'], races: [],
    meta: '1 бонусное действие • 60 фт • 1 минута',
    desc: 'Призрачное оружие бьёт бонусным действием на 1d8 + мод. Мудрости силовым полем.'
  },
  {
    id: 's2_suggestion', name: 'Внушение', level: 2, role: 'control', rollType: 'save', dice: '', tag: 'гипноз до 8 часов',
    classes: ['wizard', 'bard', 'sorcerer', 'warlock'], races: [],
    meta: '1 действие • 30 фт • Конц. до 8 часов',
    desc: 'При провале Спас Мудрости цель выполняет внушённый вами курс действий до 8 часов.'
  },
  {
    id: 's2_summon_beast', name: 'Призыв зверя', level: 2, role: 'damage', rollType: 'utility', dice: '1d8', tag: 'призыв духа зверя',
    classes: ['druid', 'ranger'], races: [],
    meta: '1 действие • 90 фт (200 зм) • Конц. до 1 часа',
    desc: 'Призывает верного духа зверя (земля, воздух или вода), который сражается на вашей стороне.'
  },
  {
    id: 's2_tashas_mind_whip', name: 'Разумный хлыст Таши', level: 2, role: 'damage', rollType: 'save', dice: '3d6', tag: 'психич. / лишает 1 ресурса хода',
    classes: ['wizard', 'sorcerer'], races: [],
    meta: '1 действие • 90 фт • В • 1 раунд',
    desc: 'При провале Спас Интеллекта 3d6 урона психикой, а в следующий ход враг выбирает только ОДНО: движение, действие или бонусное действие.'
  },
  {
    id: 's2_vortex_warp', name: 'Искривление вихря', level: 2, role: 'control', rollType: 'save', dice: '', tag: 'телепорт цели на 90 фт',
    classes: ['wizard', 'sorcerer'], races: [],
    meta: '1 действие • 90 фт • Мгновенно',
    desc: 'Мгновенно телепортирует союзника или врага (Спас Телосложения) в другую точку в пределах 90 футов.'
  },
  {
    id: 's2_warding_bond', name: 'Защитная связь', level: 2, role: 'defense', rollType: 'utility', dice: '', tag: '+1 КД и разделение урона',
    classes: ['cleric', 'paladin'], races: [],
    meta: '1 действие • Касание (два кольца по 50 зм) • 1 час',
    desc: 'Цель получает +1 к КД и спасброскам, а получаемый ею урон делится поровну между ней и вами.'
  },
  {
    id: 's2_web', name: 'Паутина', level: 2, role: 'control', rollType: 'save', dice: '', tag: 'Опутывание / куб 20 фт',
    classes: ['wizard', 'sorcerer'], races: [],
    meta: '1 действие • 60 фт (куб 20 фт) • Конц. до 1 часа',
    desc: 'Густая липкая паутина опутывает врагов (Спас Ловкости).'
  },
  {
    id: 's2_wither_and_bloom', name: 'Увядание и цветение', level: 2, role: 'damage', rollType: 'save', dice: '2d6', tag: '2d6 некротики врагам + лечение друга',
    classes: ['wizard', 'druid', 'sorcerer'], races: [],
    meta: '1 действие • 60 фт (сфера 10 фт) • Мгновенно',
    desc: 'Враги в сфере 10 футов получают 2d6 некротики (Спас Телосложения), а союзник может потратить 1 Кость хитов на лечение.'
  },
  {
    id: 's2_zone_of_truth', name: 'Зона правды', level: 2, role: 'control', rollType: 'save', dice: '', tag: 'нельзя лгать в зоне 15 фт',
    classes: ['cleric', 'bard', 'paladin'], races: [],
    meta: '1 действие • 60 фт (сфера 15 фт) • 10 минут',
    desc: 'Существа в сфере 15 футов при провале Спас Харизмы не могут лгать осознанно.'
  },

  // ==================== 3 КРУГ ====================
  {
    id: 's3_animate_dead', name: 'Оживление мертвецов', level: 3, role: 'control', rollType: 'utility', dice: '', tag: 'поднятие зомби или скелета',
    classes: ['wizard', 'cleric'], races: [],
    meta: '1 минута • 10 фт • Мгновенно',
    desc: 'Создаёт скелета или зомби, который подчиняется вашим ментальным приказам 24 часа.'
  },
  {
    id: 's3_ashardalons_stride', name: 'Поступь Ашардалона', level: 3, role: 'damage', rollType: 'utility', dice: '1d6', tag: '+20 фт скорости + 1d6 огня при беге',
    classes: ['wizard', 'ranger', 'sorcerer'], races: [],
    meta: '1 бонусное действие • На себя • Конц. до 1 мин',
    desc: '+20 фт скорости без провоцированных атак, а пробегая рядом с врагами, обжигаете каждого на 1d6 огня без спасброска.'
  },
  {
    id: 's3_aura_of_vitality', name: 'Аура жизненной силы', level: 3, role: 'defense', rollType: 'heal', dice: '2d6', tag: 'лечение 2d6 бон. действием (1 мин)',
    classes: ['cleric', 'druid', 'paladin'], races: [],
    meta: '1 действие • На себя (аура 30 фт) • Конц. до 1 мин',
    desc: 'Бонусным действием каждый ход восстанавливаете союзнику в 30 футах 2d6 ОЗ.'
  },
  {
    id: 's3_beacon_of_hope', name: 'Маяк надежды', level: 3, role: 'defense', rollType: 'utility', dice: '', tag: 'макс. лечение + преим. на мудрость',
    classes: ['cleric'], races: [],
    meta: '1 действие • 30 фт • Конц. до 1 мин',
    desc: 'Союзники получают преимущество на спасброски Мудрости и смерти, а любое лечение восстанавливает им максимум ОЗ.'
  },
  {
    id: 's3_bestow_curse', name: 'Наложение проклятия', level: 3, role: 'control', rollType: 'save', dice: '1d8', tag: 'проклятие + 1d8 некротики',
    classes: ['wizard', 'cleric', 'bard'], races: [],
    meta: '1 действие • Касание • Конц. до 1 мин',
    desc: 'При провале Спас Мудрости накладывает тяжёлое проклятие на врага.'
  },
  {
    id: 's3_blinding_smite', name: 'Ослепляющая кара', level: 3, role: 'damage', rollType: 'save', dice: '3d8', tag: 'излучение + Ослепление',
    classes: ['paladin'], races: [],
    meta: '1 бонусное действие (после попадания) • 1 минута',
    desc: 'Добавляет +3d8 урона излучением к удару и ослепляет цель.'
  },
  {
    id: 's3_blink', name: 'Мерцание', level: 3, role: 'defense', rollType: 'utility', dice: '', tag: 'уход в Эфир в конце хода (50%)',
    classes: ['wizard', 'sorcerer'], races: [],
    meta: '1 действие • На себя • 1 минута (БЕЗ конц.)',
    desc: 'В конце вашего хода при броске 11+ на d20 вы исчезаете на Эфирный план до следующего хода.'
  },
  {
    id: 's3_call_lightning', name: 'Призыв молнии', level: 3, role: 'damage', rollType: 'save', dice: '3d10', tag: 'электричество / молния из тучи',
    classes: ['druid', 'ranger'], races: [],
    meta: '1 действие • 120 фт • Конц. до 10 мин',
    desc: 'Штормовое облако бьёт молнией (Спас Ловкости): 3d10 урона электричеством.'
  },
  {
    id: 's3_catnap', name: 'Короткий сон', level: 3, role: 'defense', rollType: 'utility', dice: '', tag: 'Короткий отдых за 10 минут',
    classes: ['wizard', 'bard', 'sorcerer'], races: [],
    meta: '1 действие • 30 фт (до 3 союзников) • 10 минут',
    desc: 'Погружает до 3 союзников в сон на 10 минут, давая им полный эффект Короткого отдыха.'
  },
  {
    id: 's3_clairvoyance', name: 'Ясновидение', level: 3, role: 'utility', rollType: 'utility', dice: '', tag: 'невидимый датчик на 1 милю',
    classes: ['wizard', 'cleric', 'bard', 'sorcerer'], races: [],
    meta: '10 минут • 1 миля (100 зм) • Конц. до 10 мин',
    desc: 'Создаёт в известном месте на расстоянии до 1 мили невидимый датчик зрения или слуха.'
  },
  {
    id: 's3_conjure_animals', name: 'Призыв животных', level: 3, role: 'control', rollType: 'utility', dice: '', tag: 'призыв стаи зверей',
    classes: ['druid', 'ranger'], races: [],
    meta: '1 действие • 60 фт • Конц. до 1 часа',
    desc: 'Призывает духов в облике зверей, которые сражаются на вашей стороне.'
  },
  {
    id: 's3_conjure_barrage', name: 'Шквал стрел', level: 3, role: 'damage', rollType: 'save', dice: '5d8', tag: 'силовое поле / конус 60 фт',
    classes: ['ranger'], races: [],
    meta: '1 действие • На себя (конус 60 фт) • Мгновенно',
    desc: 'Все враги в конусе 60 футов кидают Спас Ловкости и получают 5d8 урона силовым полем.'
  },
  {
    id: 's3_counterspell', name: 'Контрзаклинание', level: 3, role: 'defense', rollType: 'utility', dice: '', tag: 'отмена вражеской магии (Реакция)',
    classes: ['wizard', 'sorcerer', 'warlock'], races: [],
    meta: '1 реакция • 60 фт • Мгновенно',
    desc: 'Прерывает сотворение вражеского заклинания (3 круг и ниже отменяются автоматически).'
  },
  {
    id: 's3_create_food_water', name: 'Сотворение пищи и воды', level: 3, role: 'utility', rollType: 'utility', dice: '', tag: 'еда на 15 гуманоидов',
    classes: ['cleric', 'paladin'], races: [],
    meta: '1 действие • 30 фт • Мгновенно',
    desc: 'Создаёт 45 фунтов пресной еды и 30 галлонов воды на сутки.'
  },
  {
    id: 's3_crusaders_mantle', name: 'Мантия крестоносца', level: 3, role: 'damage', rollType: 'utility', dice: '1d4', tag: '+1d4 излучения всем союзникам в 30 фт',
    classes: ['paladin'], races: [],
    meta: '1 действие • На себя (аура 30 фт) • Конц. до 1 мин',
    desc: 'Каждый союзник в радиусе 30 футов наносит +1d4 урона излучением при каждом попадании.'
  },
  {
    id: 's3_daylight', name: 'Дневной свет', level: 3, role: 'utility', rollType: 'utility', dice: '', tag: 'солнечный свет 60 фт',
    classes: ['cleric', 'druid', 'paladin', 'ranger', 'sorcerer'], races: [],
    meta: '1 действие • 60 фт • 1 час',
    desc: 'Создаёт сферу яркого солнечного света радиусом 60 футов, разгоняя тьму 3 круга и ниже.'
  },
  {
    id: 's3_dispel_magic', name: 'Рассеивание магии', level: 3, role: 'utility', rollType: 'utility', dice: '', tag: 'снятие чар и проклятий',
    classes: ['wizard', 'cleric', 'bard', 'druid', 'paladin', 'sorcerer', 'warlock'], races: [],
    meta: '1 действие • 120 фт • Мгновенно',
    desc: 'Снимает любые заклинания 3-го круга и ниже с цели или эффекта.'
  },
  {
    id: 's3_elemental_weapon', name: 'Оружие стихий', level: 3, role: 'damage', rollType: 'utility', dice: '1d4', tag: '+1 бонус + 1d4 стихии',
    classes: ['druid', 'paladin', 'ranger'], races: [],
    meta: '1 действие • Касание • Конц. до 1 часа',
    desc: 'Оружие становится магическим (+1) и наносит дополнительно 1d4 стихийного урона.'
  },
  {
    id: 's3_fear', name: 'Страх', level: 3, role: 'control', rollType: 'save', dice: '', tag: 'Испуг / конус 30 фт',
    classes: ['wizard', 'bard', 'sorcerer', 'warlock'], races: [],
    meta: '1 действие • На себя (конус 30 фт) • Конц. до 1 мин',
    desc: 'Призрачный ужас в конусе 30 футов (Спас Мудрости): враги роняют оружие и бегут.'
  },
  {
    id: 's3_feign_death', name: 'Мнимая смерть', level: 3, role: 'utility', rollType: 'utility', dice: '', tag: 'Ритуал • вид трупа + резист урону',
    classes: ['cleric', 'bard', 'druid', 'wizard'], races: [],
    meta: '1 действие (Ритуал) • Касание • 1 час',
    desc: 'Погружает союзника в состояние мнимой смерти с сопротивлением почти всему урону.'
  },
  {
    id: 's3_fireball', name: 'Огненный шар', level: 3, role: 'damage', rollType: 'save', dice: '8d6', tag: 'огонь / сфера 20 фт',
    classes: ['wizard', 'sorcerer'], races: [],
    meta: '1 действие • 150 фт (сфера 20 фт) • Мгновенно',
    desc: 'Взрыв пламени в сфере радиусом 20 футов (Спас Ловкости): 8d6 урона огнём при провале или половина при успехе.'
  },
  {
    id: 's3_fly', name: 'Полёт', level: 3, role: 'utility', rollType: 'utility', dice: '', tag: 'скорость полёта 60 фт',
    classes: ['wizard', 'sorcerer', 'warlock'], races: [],
    meta: '1 действие • Касание • Конц. до 10 мин',
    desc: 'Дарует существу скорость полёта 60 футов на 10 минут.'
  },
  {
    id: 's3_gaseous_form', name: 'Газообразная форма', level: 3, role: 'defense', rollType: 'utility', dice: '', tag: 'превращение в облако газа',
    classes: ['wizard', 'sorcerer', 'warlock'], races: [],
    meta: '1 действие • Касание • Конц. до 1 часа',
    desc: 'Превращает существо в облако газа, способное просачиваться в щели.'
  },
  {
    id: 's3_glyph_of_warding', name: 'Оберегающий глиф', level: 3, role: 'damage', rollType: 'save', dice: '5d8', tag: 'магическая руна-ловушка',
    classes: ['wizard', 'cleric', 'bard'], races: [],
    meta: '1 час • Касание (200 зм) • До срабатывания',
    desc: 'Скрытая руна взрывается на 5d8 урона, когда враг наступает на неё.'
  },
  {
    id: 's3_haste', name: 'Ускорение', level: 3, role: 'defense', rollType: 'utility', dice: '', tag: '×2 скорость, +2 КД, +1 действие',
    classes: ['wizard', 'sorcerer'], races: [],
    meta: '1 действие • 30 фт • Конц. до 1 мин',
    desc: 'Союзник получает удвоенную скорость, +2 к КД, преимущество на спасы Ловкости и 1 дополнительное действие каждый ход.'
  },
  {
    id: 's3_hunger_of_hadar', name: 'Голод Хадара', level: 3, role: 'damage', rollType: 'save', dice: '2d6', tag: 'холод + кислота / сфера 20 фт',
    classes: ['warlock'], races: [],
    meta: '1 действие • 150 фт (сфера 20 фт) • Конц. до 1 мин',
    desc: 'Сфера тьмы наносит 2d6 холода и 2d6 кислотного урона существам внутри.'
  },
  {
    id: 's3_hypnotic_pattern', name: 'Гипнотический узор', level: 3, role: 'control', rollType: 'save', dice: '', tag: 'Очарование / куб 30 фт',
    classes: ['wizard', 'bard', 'sorcerer', 'warlock'], races: [],
    meta: '1 действие • 120 фт (куб 30 фт) • Конц. до 1 мин',
    desc: 'Выключает толпу врагов (Спас Мудрости): очарованы, недееспособны, скорость 0.'
  },
  {
    id: 's3_intellect_fortress', name: 'Крепость интеллекта', level: 3, role: 'defense', rollType: 'utility', dice: '', tag: 'резист к психике + преим. на спасы',
    classes: ['wizard', 'bard', 'sorcerer', 'warlock'], races: [],
    meta: '1 действие • 30 фт • Конц. до 1 часа',
    desc: 'Сопротивление психическому урону и преимущество на спасы Инт, Муд и Хар на 1 час.'
  },
  {
    id: 's3_leomunds_tiny_hut', name: 'Крошечная хижина Леомунда', level: 3, role: 'utility', rollType: 'utility', dice: '', tag: 'Ритуал • силовой купол-лагерь (8 ч)',
    classes: ['wizard', 'bard'], races: [],
    meta: '1 минута (Ритуал) • На себя (купол 10 фт) • 8 часов',
    desc: 'Непроницаемый силовой купол на 8 часов для безопасного ночлега партии.'
  },
  {
    id: 's3_lightning_arrow', name: 'Стрела молнии', level: 3, role: 'damage', rollType: 'save', dice: '4d8', tag: 'электричество 4d8 + 2d8 по площади',
    classes: ['ranger'], races: [],
    meta: '1 бонусное действие • На себя • Мгновенно',
    desc: 'Выстрел наносит 4d8 электричества цели и 2d8 электричества всем в 10 футах (Спас Ловкости).'
  },
  {
    id: 's3_lightning_bolt', name: 'Молния', level: 3, role: 'damage', rollType: 'save', dice: '8d6', tag: 'электричество / линия 100×5 фт',
    classes: ['wizard', 'sorcerer'], races: [],
    meta: '1 действие • На себя (линия 100×5 фт) • Мгновенно',
    desc: 'Разряд молнии по линии 100×5 футов (Спас Ловкости): 8d6 урона электричеством при провале.'
  },
  {
    id: 's3_magic_circle', name: 'Магический круг', level: 3, role: 'control', rollType: 'utility', dice: '', tag: 'барьер против нежити/демонов/фей',
    classes: ['wizard', 'cleric', 'paladin', 'warlock'], races: [],
    meta: '1 минута • 10 фт (100 зм) • 1 час',
    desc: 'Цилиндрический барьер, не пропускающий выбранный тип существ.'
  },
  {
    id: 's3_major_image', name: 'Правдоподобная иллюзия', level: 3, role: 'control', rollType: 'utility', dice: '', tag: 'иллюзия со звуком и запахом 20 фт',
    classes: ['wizard', 'bard', 'sorcerer', 'warlock'], races: [],
    meta: '1 действие • 120 фт • Конц. до 10 мин',
    desc: 'Детальная иллюзия в кубе 20 футов со звуком, запахом и теплом.'
  },
  {
    id: 's3_mass_healing_word', name: 'Массовое лечащее слово', level: 3, role: 'defense', rollType: 'heal', dice: '2d4', tag: 'лечение до 6 целей бон. действием',
    classes: ['cleric', 'bard'], races: [],
    meta: '1 бонусное действие • 60 фт (до 6 целей) • Мгновенно',
    desc: 'До 6 союзников в пределах 60 футов восстанавливают 2d4 + мод. магии ОЗ.'
  },
  {
    id: 's3_meld_into_stone', name: 'Слияние с камнем', level: 3, role: 'utility', rollType: 'utility', dice: '', tag: 'Ритуал • укрытие внутри скалы (8 ч)',
    classes: ['cleric', 'druid'], races: [],
    meta: '1 действие (Ритуал) • Касание • 8 часов',
    desc: 'Вы шагаете внутрь каменной стены или скалы на 8 часов.'
  },
  {
    id: 's3_nondetection', name: 'Сокрытие', level: 3, role: 'utility', rollType: 'utility', dice: '', tag: 'защита от магии поиска (8 ч)',
    classes: ['wizard', 'bard', 'ranger'], races: [],
    meta: '1 действие • Касание (25 зм) • 8 часов',
    desc: 'Скрывает существо или предмет от любого магического обнаружения.'
  },
  {
    id: 's3_phantom_steed', name: 'Призрачный скакун', level: 3, role: 'utility', rollType: 'utility', dice: '', tag: 'Ритуал • конь со скоростью 100 фт',
    classes: ['wizard'], races: [],
    meta: '1 минута (Ритуал) • 30 фт • 1 час',
    desc: 'Призывает скакуна со скоростью 100 футов.'
  },
  {
    id: 's3_plant_growth', name: 'Рост растений', level: 3, role: 'control', rollType: 'utility', dice: '', tag: 'густой кустарник (-75% движения)',
    classes: ['bard', 'druid', 'ranger'], races: [],
    meta: '1 действие • 150 фт • Мгновенно',
    desc: 'Любое движение в заросшей зоне требует в 4 раза больше скорости.'
  },
  {
    id: 's3_protection_from_energy', name: 'Защита от энергии', level: 3, role: 'defense', rollType: 'utility', dice: '', tag: 'сопротивление стихии на 1 час',
    classes: ['wizard', 'cleric', 'druid', 'paladin', 'ranger', 'sorcerer'], races: [],
    meta: '1 действие • Касание • Конц. до 1 часа',
    desc: 'Дарует сопротивление к выбранному типу стихийного урона.'
  },
  {
    id: 's3_remove_curse', name: 'Снятие проклятия', level: 3, role: 'defense', rollType: 'utility', dice: '', tag: 'снятие проклятий',
    classes: ['wizard', 'cleric', 'paladin', 'warlock'], races: [],
    meta: '1 действие • Касание • Мгновенно',
    desc: 'Снимает все проклятия с существа или позволяет снять проклятый предмет.'
  },
  {
    id: 's3_revivify', name: 'Возрождение', level: 3, role: 'defense', rollType: 'utility', dice: '', tag: 'воскрешение погибшего (1 ОЗ)',
    classes: ['cleric', 'paladin', 'druid', 'ranger'], races: [],
    meta: '1 действие • Касание (алмаз 300 зм) • Мгновенно',
    desc: 'Возвращает к жизни существо, умершее не более 1 минуты назад, с 1 хитом.'
  },
  {
    id: 's3_sending', name: 'Послание', level: 3, role: 'utility', rollType: 'utility', dice: '', tag: 'мысленная связь на любом расстоянии',
    classes: ['wizard', 'cleric', 'bard'], races: [],
    meta: '1 действие • На любом расстоянии • 1 раунд',
    desc: 'Отправляет мысленное сообщение до 25 слов любому знакомому существу с возможностью ответа.'
  },
  {
    id: 's3_sleet_storm', name: 'Шторм с градом', level: 3, role: 'control', rollType: 'save', dice: '', tag: 'град / 40 фт + сбивание с ног',
    classes: ['wizard', 'druid', 'sorcerer'], races: [],
    meta: '1 действие • 150 фт • Конц. до 1 мин',
    desc: 'Ледяной шторм сбивает с ног (Спас Ловкости) и срывает концентрацию заклинателей.'
  },
  {
    id: 's3_slow', name: 'Замедление', level: 3, role: 'control', rollType: 'save', dice: '', tag: 'до 6 врагов: -2 КД, 1 атака, нет реакций',
    classes: ['wizard', 'bard', 'sorcerer'], races: [],
    meta: '1 действие • 120 фт (до 6 целей) • Конц. до 1 мин',
    desc: 'До 6 врагов (Спас Мудрости) теряют половину скорости, получают -2 к КД и совершают только 1 атаку за ход.'
  },
  {
    id: 's3_speak_with_dead', name: 'Разговор с мёртвыми', level: 3, role: 'utility', rollType: 'utility', dice: '', tag: 'до 5 вопросов трупу',
    classes: ['wizard', 'cleric', 'bard'], races: [],
    meta: '1 действие • 10 фт • 10 минут',
    desc: 'Позволяет задать до 5 вопросов трупу.'
  },
  {
    id: 's3_speak_with_plants', name: 'Разговор с растениями', level: 3, role: 'utility', rollType: 'utility', dice: '', tag: 'общение с растениями',
    classes: ['bard', 'druid', 'ranger'], races: [],
    meta: '1 действие • На себя (30 фт) • 10 минут',
    desc: 'Вы общаетесь с растениями в 30 футах и просите их расступиться.'
  },
  {
    id: 's3_spirit_guardians', name: 'Духовные стражи', level: 3, role: 'damage', rollType: 'save', dice: '3d8', tag: 'излучение / аура 15 фт',
    classes: ['cleric'], races: [],
    meta: '1 действие • На себя (15 фт) • Конц. до 10 мин',
    desc: 'Замедляет врагов в 15 фт вдвое и наносит им 3d8 урона излучением каждый ход (Спас Мудрости).'
  },
  {
    id: 's3_spirit_shroud', name: 'Саван духов', level: 3, role: 'damage', rollType: 'utility', dice: '1d8', tag: '+1d8 урона + запрет лечения врагам',
    classes: ['wizard', 'cleric', 'paladin', 'warlock'], races: [],
    meta: '1 бонусное действие • На себя (10 фт) • Конц. до 1 мин',
    desc: 'Ваши атаки наносят +1d8 урона (холод, некротика или излучение), а враги в 10 фт не могут лечиться.'
  },
  {
    id: 's3_stinking_cloud', name: 'Вонючее облако', level: 3, role: 'control', rollType: 'save', dice: '', tag: 'тошнота в сфере 20 фт',
    classes: ['wizard', 'bard', 'sorcerer'], races: [],
    meta: '1 действие • 90 фт • Конц. до 1 мин',
    desc: 'Провалившие Спас Телосложения тратят действие на тошноту.'
  },
  {
    id: 's3_summon_fey', name: 'Призыв феи', level: 3, role: 'damage', rollType: 'utility', dice: '3d6', tag: 'призыв духа феи',
    classes: ['wizard', 'druid', 'ranger', 'warlock'], races: [],
    meta: '1 действие • 90 фт (300 зм) • Конц. до 1 часа',
    desc: 'Призывает боевого духа феи, который атакует врагов и умеет телепортироваться.'
  },
  {
    id: 's3_summon_shadowspawn', name: 'Призыв порождения тени', level: 3, role: 'damage', rollType: 'utility', dice: '1d12', tag: 'призыв теневого стража',
    classes: ['wizard', 'warlock'], races: [],
    meta: '1 действие • 90 фт (300 зм) • Конц. до 1 часа',
    desc: 'Призывает теневого духа, пугающего врагов и наносящего урон холодом.'
  },
  {
    id: 's3_summon_undead', name: 'Призыв нежити', level: 3, role: 'damage', rollType: 'utility', dice: '1d10', tag: 'призыв духа нежити',
    classes: ['wizard', 'warlock'], races: [],
    meta: '1 действие • 90 фт (300 зм) • Конц. до 1 часа',
    desc: 'Призывает дух нежити (Призрак, Скелет или Зомби) на 1 час.'
  },
  {
    id: 's3_thunder_step', name: 'Громовой шаг', level: 3, role: 'damage', rollType: 'save', dice: '3d10', tag: 'телепорт 90 фт + взрыв 3d10',
    classes: ['wizard', 'sorcerer', 'warlock'], races: [],
    meta: '1 действие • 90 фт • Мгновенно',
    desc: 'Телепортация на 90 футов со звуковым взрывом на 3d10 урона (Спас Телосложения) в точке старта.'
  },
  {
    id: 's3_tidal_wave', name: 'Приливная волна', level: 3, role: 'damage', rollType: 'save', dice: '4d8', tag: 'дробящий / 30×10 фт + сбив с ног',
    classes: ['wizard', 'druid', 'sorcerer'], races: [],
    meta: '1 действие • 120 фт • Мгновенно',
    desc: 'Волна воды наносит 4d8 дробящего урона и сбивает с ног (Спас Ловкости).'
  },
  {
    id: 's3_tongues', name: 'Языки', level: 3, role: 'utility', rollType: 'utility', dice: '', tag: 'понимание и речь на любых языках',
    classes: ['wizard', 'cleric', 'bard', 'sorcerer', 'warlock'], races: [],
    meta: '1 действие • Касание • 1 час (БЕЗ конц.)',
    desc: 'Цель понимает любой язык и может говорить на нём в течение 1 часа.'
  },
  {
    id: 's3_vampiric_touch', name: 'Вампирское прикосновение', level: 3, role: 'damage', rollType: 'attack', dice: '3d6', tag: 'некротика с лечением от урона',
    classes: ['wizard', 'sorcerer', 'warlock'], races: [],
    meta: '1 действие • Касание • Конц. до 1 мин',
    desc: 'Рукопашная атака заклинанием наносит 3d6 урона некротикой и лечит вас на половину нанесённого урона.'
  },
  {
    id: 's3_water_breathing', name: 'Дыхание под водой', level: 3, role: 'utility', rollType: 'utility', dice: '', tag: 'Ритуал • жабры на 24 часа',
    classes: ['wizard', 'cleric', 'druid', 'ranger', 'sorcerer'], races: [],
    meta: '1 действие (Ритуал) • 30 фт • 24 часа',
    desc: 'До 10 существ свободно дышат под водой 24 часа.'
  },
  {
    id: 's3_water_walk', name: 'Хождение по воде', level: 3, role: 'utility', rollType: 'utility', dice: '', tag: 'Ритуал • бег по воде/лаве (1 ч)',
    classes: ['cleric', 'druid', 'ranger', 'sorcerer'], races: [],
    meta: '1 действие (Ритуал) • 30 фт • 1 час',
    desc: 'До 10 существ могут ходить по поверхности воды, снега и лавы 1 час.'
  },
  {
    id: 's3_wind_wall', name: 'Стена ветра', level: 3, role: 'control', rollType: 'save', dice: '3d8', tag: 'звук / сдувает стрелы',
    classes: ['druid', 'ranger'], races: [],
    meta: '1 действие • 60 фт • Конц. до 1 мин',
    desc: 'Стена ветра отклоняет стрелы и наносит 3d8 урона звуком при попытке пройти (Спас Силы).'
  }
];
console.log('SPELLBOOK_5E loaded:', window.SPELLBOOK_5E.length);
