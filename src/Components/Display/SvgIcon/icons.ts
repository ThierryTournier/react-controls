// let fileList = require.context('../../../Common/theming/icons', true, /[\s\S]*$/);

// let dictionary = {};
// fileList.keys().forEach(x => {
//     x = x.replace('./', '');
//     dictionary[x.replace('.svg', '')] = require(`../../../Common/theming/icons/${x}`);
// });



export type IconName = 'add' | 'asterisk' | 'calendar' | 'caret-down' | 'caret-right' | 'caret-up' | 'close' | 'comment' | 'confirm' | 'cross' | 'delete' | 'download' | 'edit' | 'email' | 'error-sign' | 'export' | 'filter' | 'filter-list' | 'help' | 'import' | 'info-sign' | 'link' | 'minus' | 'mobile-phone' | 'none' | 'ok-sign' | 'phone' | 'plus' | 'refresh' | 'save' | 'search' | 'sort-asc' | 'sort-desc' | 'stop' | 'tick' | 'unlock' | 'upload' | 'user' | 'user-with-cross-sign' | 'warning-sign' | 'zoom-in' | 'zoom-out';

export var IconNames: IconName[] = ['add', 'asterisk', 'calendar', 'caret-down', 'caret-right', 'caret-up', 'close', 'comment', 'confirm', 'cross', 'delete', 'download', 'edit', 'email', 'error-sign', 'export', 'filter', 'filter-list', 'help', 'import', 'info-sign', 'link', 'minus', 'mobile-phone', 'none', 'ok-sign', 'phone', 'plus', 'refresh', 'save', 'search', 'sort-asc', 'sort-desc', 'stop', 'tick', 'unlock', 'upload', 'user' , 'user-with-cross-sign', 'warning-sign', 'zoom-in', 'zoom-out'];


let dictionary = {};

for (var i = 0; i < IconNames.length; i++) {
    var iconName = IconNames[i];
    dictionary[iconName] = require("../../../Common/theming/icons/" + iconName + ".svg")
}



export default dictionary
