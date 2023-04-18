// Основний модуль
import gulp from "gulp";
// Імпорт шляхів
import {
    path
} from "./gulp/config/path.js";

// Імпорт спільних плагінів
import {
    plugins
} from "./gulp/config/plugins.js";

global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins
}

// Імпорт Завдань

import {
    copy
} from "./gulp/tasks/copy.js";

import {
    reset
} from "./gulp/tasks/reset.js";

import {
    html
} from "./gulp/tasks/html.js";

import {
    server
} from "./gulp/tasks/server.js";

import {
    scss
} from "./gulp/tasks/scss.js";

import {
    js
} from "./gulp/tasks/js.js";

import {
    images
} from "./gulp/tasks/images.js";

import {
    svgSprive
} from "./gulp/tasks/svgSprive.js";
import {
    zip
} from "./gulp/tasks/zip.js";
// import { ftp } from "./gulp/tasks/ftp.js";



// Слідкувач за змінами в файлах
function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}

export {
    svgSprive
}

// Основні таски
const mainTask = gulp.parallel(copy, html, scss, js, images);

// ПОбудова сценарію виконання завдань
const dev = gulp.series(reset, mainTask, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTask);
const deployZIP = gulp.series(reset, mainTask, zip);
// const deployFTP = gulp.series(reset, mainTasks, ftp);

// Експорт сценаріїв

export {
    dev
}
export {
    build
}
export {
    deployZIP
}
// export {deployFTP}

gulp.task('default', dev);