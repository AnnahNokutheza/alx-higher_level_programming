#!/usr/bin/node

# Define the string to write to the file
string_to_write = "This is the string I want to write to the file."

# Ask the user for the file name
filename = input("Enter the name of the file: ")

# Open the file in write mode
with open(filename, 'w') as file:
    # Write the string to the file
    file.write(string_to_write)
    print("String written to file!")
