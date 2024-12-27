@echo off
cd C:\path\to\your\project
echo Pulling latest changes from GitHub...
git pull origin main
echo Installing dependencies...
npm install
echo Building the project...
npm run build
echo Deployment completed.
pause
