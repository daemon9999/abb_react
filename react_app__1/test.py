"""
from random import*
def qarsiliqli_sade(a,b):
    for i in range(2,a+1):
        if a%i==0 and b%i==0:
            return False
    return True
N=int(input(":"))
a=[randint(10,90) for i in range(N)]
print(a)
new_list=[]

i = 1
while i < N - 2:
    if qarsiliqli_sade(a[i], a[i+2]):
        new_list += [a[i], a[i+2]]
        i += 4
    else:
        i += 2
print(new_list)
"""

"""def factorial(number):
    product = 1
    for i in range(2, number+1):
        product *= i
    return product

x = float(input('x: '))
n = int(input('n: '))
S = 0

for i in range(1,n+1 ):
    equation = x ** i / factorial(i)
    S += equation

print('Sn: {:.3f}'.format(S))
"""


def convert_sentence(sentence):#Hello World! Good Luck!!!
    N = len(sentence)
    converted = ''
    dividers = ['.', '!', '?']
    start = 0
    i = 0
    while i < N:

        if sentence[i] in dividers:
            if i == N - 1:
                converted += sentence[start: j][::-1]
                return converted
            for j in range(i+1, N):
                if j == N - 1:
                    converted += sentence[start: j][::-1]
                    return converted
                if sentence[j] == ' ':
                    converted += sentence[start: j][::-1] + ' '
                    break
            i = j + 1
            start = i

        i += 1
    
    return converted

    


sentence = input('Cumleni daxil edin: ')
print(convert_sentence(sentence))