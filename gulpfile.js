const gulp = require("gulp");
const sass = require("gulp-sass");
const webserver = require("gulp-webserver");
gulp.task("devSass", () => {
    return gulp.src("./web/scss/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./web/css"))
})
gulp.task("server", () => {
    return gulp.src("./web")
        .pipe(webserver({
            port: 8888,
            livereload: true,
            open: true,
            proxies: []
        }))
})
gulp.task("watching", () => {
    return gulp.watch("./web/scss/**/*.scss", gulp.series("devSass"))
})
gulp.task("default", gulp.series("devSass", "server", "watching"))