import re


resultado = re.search(r'\d\d\w','11a22b33c')
print(resultado)

resultados = re.finditer(r'(\d\d)\w','11a22b33c')
for resultado in resultados:
    print(f"{resultado.group()} com grupo {resultado.group(1)} [{resultado.start()},{resultado.end()}]")