set drive=c

set root=%drive%:\muix\build-types-material-ui\
%drive%:

cd %root%
copy %root%\node_modules$dts-generator$index.js %root%\node_modules\dts-generator\index.js /y
node dts-generator.js
