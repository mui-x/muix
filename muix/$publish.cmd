set root=d:\reactxx\muix\

d:

rem *** delete .js, generated by TS transpiler
cd %root%deploy
rmdir lib /s /q
rmdir es /s /q

cd %root%
call $compile

rem *** npm package publishing
call %root%$publish_ basic
call %root%$publish_ fela
call %root%$publish_ stateman
call %root%$publish_ reactxx

call %root%$publish_ mui
rmdir %root%deploy\mui\es\native\fonts /s /q
xcopy %root%src\mui\native\fonts %root%deploy\mui\es\native\fonts /s /q /i 

