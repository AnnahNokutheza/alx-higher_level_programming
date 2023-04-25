#!/usr/bin/node
# Ask the user for the file name
filename = input("Enter the name of the file: ")

# Open the file in read mode
with open(filename, 'r') as file:
    # Read the contents of the file
    content = file.read()
    # Print the contents of the file
    print(content)
