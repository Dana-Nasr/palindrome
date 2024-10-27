def printAsterisk(number):   
  for i in range (number-1):
      value=(2*i)+1
      space=number-i
      print(" "*space+'*'* value,end='\n''\n')
      
   
  
  for j in range (number-1,-1,-1):
      space=number-j
      value=(2*j)+1
      print(" "*space+'*'* value,end='\n''\n') #string multiplication costs O(n)
def main():
  number = int(input('Enter a number of rows:'))
  printAsterisk(number) 

main()

#o(n^2) n being the number passed to func printAsterisk