import replace from "gulp-replace"; // Пошук і заміна
import plumber from "gulp-plumber"; // Обробка помилок
import notify from "gulp-notify"; // Повідомлення (Підказки)
import browsersync from "browser-sync"; // Локальний сервер 
import newer from "gulp-newer"; // Перевірка оновлення
import ifPlugin from "gulp-if"; // Умовне гілкування

export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer,
    if: ifPlugin,
}