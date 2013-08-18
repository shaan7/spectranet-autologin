spectranet-autologin
====================

Autologin script for Spectranet broadband (now, Citycom Cable Broadband).

Requirements
====================

1. PhantomJS [http://phantomjs.org/]
Download and install so that phantomjs is in PATH and available as a command.

2. CasperJS [ttp://http://casperjs.org/]
Download and install so that casperjs is in PATH and available as a command.

Usage
===================

From the command line, run

	$ casperjs test spectranet_login.js --username=YOUR_USERNAME --password=YOUR_PASSWORD

To get verbose output, run

	$ casperjs --direct --log-level=info test spectranet_login.js --username=YOUR_USERNAME --password=YOUR_PASSWORD
