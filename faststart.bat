:: Important stuff
@echo off && cls
title Vyond 2019

::::::::::::::::::::
:: Initialization ::
::::::::::::::::::::

:: Terminate existing node.js apps
TASKKILL /IM node.exe /F 2>nul
cls

::::::::::::::::::::::
:: Start Vyond 2019 ::
::::::::::::::::::::::

:: Check for installation
if exist notinstalled (
	echo Vyond 2019 is not installed! Installing...
	call npm install
	ren "notinstalled" "installed"
	cls
	goto start
) else (
	goto start
)

:: Run npm start
:start
echo Vyond 2019 is now starting...
echo Please navigate to http://localhost or http://localhost:80 on your browser.
npm start
