const simbol = {"Ё":"YO","Й":"I","Ц":"TS","У":"U","К":"K","Е":"E","Н":"N","Г":"G","Ш":"SH","Щ":"SCH","З":"Z","Х":"H","Ъ":"","ё":"yo","й":"i","ц":"ts","у":"u","к":"k","е":"e","н":"n","г":"g","ш":"sh","щ":"sch","з":"z","х":"h","ъ":"","Ф":"F","Ы":"I","В":"V","А":"a","П":"P","Р":"R","О":"O","Л":"L","Д":"D","Ж":"ZH","Э":"E","ф":"f","ы":"i","в":"v","а":"a","п":"p","р":"r","о":"o","л":"l","д":"d","ж":"zh","э":"e","Я":"Ya","Ч":"CH","С":"S","М":"M","И":"I","Т":"T","Ь":"","Б":"B","Ю":"YU","я":"ya","ч":"ch","с":"s","м":"m","и":"i","т":"t","ь":"","б":"b","ю":"yu"};

export const transliterate = (text) => {
    return text.split('').map(function(char){
        return typeof simbol[char] !== 'undefined' ? simbol[char] : char;
    }).join("");
};

export const url = {
    url:'http://dev.kaerus.ru/Pwa/getCategories.json',
    userId:'81dc9bdb52d04dc20036dbd8313ed055',
    STATIC_SERVER: 'http://dev.kaerus.ru',
    CLIENT_ID: '81dc9bdb52d04dc20036dbd8313ed055',
    PLATFORM: 6,
    apiIdVk: 6056998,
    appDomen: 'http://argonavtt-ru.1gb.ru/login'
};

export const API = (controll, method, token = '') => {
    if (token !== ''){
        token+=','
    }
    return `http://dev.kaerus.ru/${controll}/${method}.json?commands=[{%22data%22:{${token}%22client_id%22:%22${url.CLIENT_ID}%22,%22platform%22:%22${url.PLATFORM}%22}}]`
};

export const titleList = {
    pizza: 'Пицца',
    sushi: 'Суши и роллы',
    wok: 'Wok',
    pasta: 'Паста',
    beverages: 'Напитки',
    snacks: 'Закуски',
    salad: 'Салаты',
    dessert: 'Десерты',
    soup: 'Супы'
};

export const urlList = {
    index: '/',
    catalog: '/catalog',
    pizza: '/catalog/pizza',
    sushi: '/catalog/sushi',
    wok: '/catalog/wok',
    pasta: '/catalog/pasta',
    beverages: '/catalog/beverages',
    snacks: '/catalog/snacks',
    salad: '/catalog/salad',
    dessert: '/catalog/dessert',
    soup: '/catalog/soup',
    detail: '/catalog/:type/:id',
    basket: '/basket',
    order: '/order',
    contact: '/contact',
    guarantees: '/guarantees',
    delivery: '/delivery',
    payment: '/payment',
    shares: '/shares',
    shareDetail: '/share_detail',
    end: '/end',
    endregistration: '/endregistration',
    comein: '/comein',
    login: '/login',
    registration: '/registration',
    user: '/user'
};

export const storage = {
    user: 'user',
    actions: 'actions',
    loyalty: 'loyalty',
    categoryList: 'categoryList',
    categoryItems: 'categoryItems',
    basket: 'basket',
};

export const errorTextServer = 'Ошибка от сервера';