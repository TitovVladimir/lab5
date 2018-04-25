

var gulp = require('gulp'), // Сообственно Gulp JS
    uglify = require('gulp-uglify'), // Минификация JS
    concat = require('gulp-concat'), // Склейка файлов
    imagemin = require('gulp-imagemin'), // Минификация изображений
    csso = require('gulp-csso'); // Минификация CSS
	browserSync = require('browser-sync');
    reload = browserSync.reload;
	paths = {
      html:['src/index.html'],
      css:['src/style/style.css'],
      script:['src/js/selectAuto.js']
    };
	
// Задача "sass". Запускается командой "gulp sass"
gulp.task('sass', function () { 
	gulp.src('src/style/style.css') // файл, который обрабатываем
		.pipe(csso()) // минифицируем css, полученный на предыдущем шаге
		.pipe(gulp.dest('build/style/')); // результат пишем по указанному адресу
});

// Задача "js". Запускается командой "gulp js"
gulp.task('js', function() {
    gulp.src([
                'src/js/jquery-3.2.1.min.js',
                'src/js/selectAuto.js'
        ]) // файлы, которые обрабатываем
   //     .pipe(concat('min.js')) // склеиваем все JS
        .pipe(uglify()) // получившуюся "портянку" минифицируем 
        .pipe(gulp.dest('build/js')) // результат пишем по указанному адресу
});

// Задача "images". Запускается командой "gulp images"
gulp.task('images', function() {
    gulp.src('src/img/*') // берем любые файлы в папке и ее подпапках
        .pipe(imagemin()) // оптимизируем изображения для веба
        .pipe(gulp.dest('build/img/')) // результат пишем по указанному адресу

});

gulp.task('html', function () { 
	gulp.src('src/index.html') // файл, который обрабатываем
		.pipe(gulp.dest('build/')); // результат пишем по указанному адресу
});

gulp.task('build', ['sass', 'images', 'html', 'js']);

// Задача "watch". Запускается командой "gulp watch"
// Она следит за изменениями файлов и автоматически запускает другие задачи
gulp.task('watch', function () {
	// При изменение файлов *.scss в папке "styles" и подпапках запускаем задачу sass
	gulp.watch('src/style/**/*.css', ['sass']); 
	// При изменение файлов *.js папке "javascripts" и подпапках запускаем задачу js
	gulp.watch('src/js/**/*.js', ['js']);
	// При изменение любых файлов в папке "images" и подпапках запускаем задачу images
	gulp.watch('src/img/**/*', ['images']);
	gulp.watch('src/**/*.html', ['html']); 
});

gulp.task('html1', function(){
  gulp.src(paths.html)
  .pipe(reload({stream:true}));
});

gulp.task('css1', function(){
  gulp.src(paths.css)
  .pipe(reload({stream:true}));
});

gulp.task('js1', function(){
  gulp.src(paths.script)
  .pipe(reload({stream:true}));
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: "src/"
    },
    port: 8080,
    open: true,
    notify: false
  });
});

gulp.task('watcher',function(){
  gulp.watch(paths.css, ['css1']);
  gulp.watch(paths.script, ['js1']);
  gulp.watch(paths.html, ['html1']);
});

gulp.task('dev', ['watcher', 'browserSync', 'watch']);