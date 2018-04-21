var gulp = require('gulp'),
  uglify = require('gulp-uglify');
  uglifycss = require('gulp-cssmin');
  copy = require('gulp-contrib-copy'); 
  rename = require("gulp-rename");
  browserSync = require('browser-sync');
  reload = browserSync.reload;
  paths = {
    html:['index.html'],
    css:['css/style.css'],
    script:['js/selectAuto.js']
  };
  
  
gulp.task('minifyjs', function () {
  gulp.src('js/selectAuto.js')
  .pipe(uglify())
  .pipe(gulp.dest('build/js'))
});
  
gulp.task('minifycss', function () {
  gulp.src('css/style.css')
  .pipe(uglifycss())
  .pipe(gulp.dest('build/css'))
});

gulp.task('copyhtml', function() {
  gulp.src('index.html')
  .pipe(copy())
  .pipe(gulp.dest('build'));
});

gulp.task('gulpall', function () {
  gulp.src('js/selectAuto.js')
  .pipe(uglify())
  .pipe(rename({
    basename: "selectAuto",
    suffix: ".min",
    extname: ".js"
  }))
  .pipe(gulp.dest('build/js'))
  gulp.src('css/style.css')
  .pipe(uglifycss())
  .pipe(rename({
    basename: "style",
    suffix: ".min",
    extname: ".css"
  }))
  .pipe(gulp.dest('build/css'))
  gulp.src('index.html')
  .pipe(copy())
  .pipe(gulp.dest('build'));
});

gulp.task('html', function(){
  gulp.src(paths.html)
  .pipe(reload({stream:true}));
});

gulp.task('css', function(){
  gulp.src(paths.css)
  .pipe(reload({stream:true}));
});

gulp.task('js', function(){
  gulp.src(paths.script)
  .pipe(reload({stream:true}));
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: "./"
    },
    port: 8080,
    open: true,
    notify: false
  });
});

gulp.task('watcher',function(){
  gulp.watch(paths.css, ['css']);
  gulp.watch(paths.script, ['js']);
  gulp.watch(paths.html, ['html']);
});

gulp.task('default', ['watcher', 'browserSync']);