def get_data():
 with open('names.txt','r') as file:

    names = file.read()
    names = names.split()

    return names