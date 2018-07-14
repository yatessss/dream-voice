var base = 'https://www.easy-mock.com/mock/5a39d3d2717d4953ed48bd47/weChatApp/';
var url = 'https://www.easy-mock.com/mock/5a6a944f396ee930b9c4b8bc/jisihui';
var baseUrl = 'https://api.dreamvoice.club:88';
var api = {
    baseUrl: 'https://api.dreamvoice.club:88',
    indexListApi: {
        development: baseUrl + '/app/getIndexInfo'
    },
    weekAndMonth: {
        development: baseUrl + '/m /weekAndMonth'
    },
    bookDetailApi: {
        development: baseUrl + '/book'
    },
    bookCategoryApi: {
        development: url + '/m/good/c/1/1'
    },
    bookListApi: {
        development: url + '/bookList/bookList'
    },
}

module.exports = api;