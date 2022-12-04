const gulp = require("gulp");
const gulpSass = require("gulp-sass");
const sass = gulpSass(require("sass"));

gulp.task("sass", async () => {
  gulp.watch("src/components/**/*.scss", async () => {
    gulp
      .src("src/components/**/*.scss")
      .pipe(sass())
      .pipe(gulp.dest("src/css"));
  });
});
