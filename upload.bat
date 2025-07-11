@echo off
cd /d "%USERPROFILE%\Desktop\HNSwebsite"
git add .
git commit -m "更新"
git push origin main
pause