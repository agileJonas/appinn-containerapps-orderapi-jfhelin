import os

def delete_file(filename):
    os.system("rm " + filename)

filename = input("Enter a filename to delete: ")
delete_file(filename)