/** config
 * @file config.js
 * @author fe
 */
require.config({
    baseUrl: '../src',
    paths: {},
    packages: [
        {
            name: 'underscore',
            location: '../dep/underscore/1.5.2/src',
            main: 'underscore'
        },
        {
            name: 'moment',
            location: '../dep/moment/2.7.0/src',
            main: 'moment'
        },
        {
            name: 'etpl',
            location: '../dep/etpl/3.0.0/src',
            main: 'main'
        },
        {
            'name': 'esui',
            'location': '../dep/esui/3.2.0-beta.1/src',
            'main': 'main'
        },
        {
            'name': 'ub-ria-ui',
            'location': '../src',
            'main': 'main'
        },
        {
            name: 'eoo',
            location: '../dep/eoo/0.1.4/src',
            main: 'main'
        },
        {
            name: 'jquery',
            location: '../dep/jquery/1.9.1/src',
            main: 'jquery.min'
        }
    ]
});
