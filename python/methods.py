import time
import numpy
import matplotlib.pyplot as plt

def ShufflingMethod(myCards):

	myDeck = list(range(1, myCards + 1))
	myHalf = int(len(myDeck)/2)

	myDeck = [val for pair in zip(myDeck[myHalf:], myDeck[:myHalf]) for val in pair]

	i = 1
	while myDeck[0] != 1:
		i += 1
		myDeck = [val for pair in zip(myDeck[myHalf:], myDeck[:myHalf]) for val in pair]

	return i

	# print(str(myCards) + ' cards took ' + str(i) + ' shuffles.')

def DirectMovementMethod(myCards):

	myPosition = 2

	i = 1
	while myPosition != 1:
		i += 1
		myPosition = myPosition*2 % (myCards + 1)

	return i

	# print(str(myCards) + ' cards took ' + str(i) + ' shuffles.')

def ModularReductionMethod(myCards):

	1 + 1

print('\n')
m = list(numpy.arange(10000,10004,2))

print(m)

shuffleTimes = []
movemenTimes = []

for i in m:
	t0 = time.time()
	ShufflingMethod(i)
	t1 = time.time()
	shuffleTimes.append(t1 - t0)
	DirectMovementMethod(i)
	t2 = time.time()
	movemenTimes.append(t2 - t1)

plt.plot(m, shuffleTimes, 'r--', m, movemenTimes, 'b--')
plt.show()

print('\n')
