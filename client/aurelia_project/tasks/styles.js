import gulp from 'gulp';
import changedInPlace from 'gulp-changed-in-place';
import sourcemaps from 'gulp-sourcemaps';
import cleanCss from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';
import concat from 'gulp-concat';
import project from '../aurelia.json';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';

export default function styles() {
    return gulp.src(project.styles.source)
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(changedInPlace({firstPass: true}))
        .pipe(sourcemaps.init())
        .pipe(autoprefixer())
        .pipe(cleanCss())
        .pipe(concat('bundle.css'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./styles'));
}