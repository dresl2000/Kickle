@ECHO OFF
set PATH=%PATH%;%CD%
"node_modules\.bin\webpack.cmd" %*
