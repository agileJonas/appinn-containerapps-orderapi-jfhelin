import hashlib

password = input("Enter your password: ")
hash = hashlib.md5(password.encode())
print("Your hashed password is:", hash.hexdigest())
