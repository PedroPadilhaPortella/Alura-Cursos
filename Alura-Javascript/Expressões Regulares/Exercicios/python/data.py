import re


target = '2007-12-31'

resultado = re.sub('-', '/', target)

print(resultado)