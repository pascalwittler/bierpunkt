# BierPunkt 2022

## Get started

### Installation

The recommended way to run your own instance of BierPunkt is to start it inside two Docker containers by using the provided configuration. Just navigate into the project's folder and run `docker-compose up`. After some time, you can simply open `localhost:7258` in your web browser to access the web frontend and `localhost:7259` to check if the API is running.

You may wish to change the IP address and/or the port at the end of the python script `api/app.py` to avoid complications when trying to connect to the API.
