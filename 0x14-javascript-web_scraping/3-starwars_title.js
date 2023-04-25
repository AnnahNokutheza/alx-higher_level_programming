#!/usr/bin/node

import sys
import requests

movie_id = sys.argv[1]
response = requests.get(f"https://swapi-api.alx-tools.com/api/films/{movie_id}")

if response.status_code == 200:
    movie = response.json()
    if int(movie["episode_id"]) == int(sys.argv[2]):
        print(movie["title"])
else:
    print("Error retrieving data from API.")
