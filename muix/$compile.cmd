set root=d:\reactxx\muix\
set tsc="c:\Program Files (x86)\Microsoft SDKs\TypeScript\2.9\tsc.exe"

d:

cd %root%

call %tsc% --p %root%tsconfig-web.json -d
call %tsc% --p %root%tsconfig-native.json -d

rmdir %root%deploy\es\mui\native\fonts /s /q
xcopy %root%src\mui\native\fonts %root%deploy\es\mui\native\fonts /s /q /i 