@echo off
cd /d "%USERPROFILE%\Desktop\HNSwebsite"
git add .
git commit -m "選手募集ページの修正"
git push origin main
pause