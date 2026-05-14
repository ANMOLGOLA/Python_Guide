import { Topic } from '../types';

export const topics: Topic[] = [
  {
    id: 'basics',
    title: 'Python Basics & Variables',
    description: 'Master variables, primitive data types, and basic I/O operations.',
    properties: [
      'Dynamic Typing: Python determines type at runtime.',
      'Immutability: Strings and Tuples cannot be changed after creation.',
      'Standard I/O: print() and input() for user interaction.',
      'Type Casting: Converting between types like int(), str(), float().'
    ],
    remember: [
      'Variable names cannot start with numbers.',
      'input() always returns a string by default.',
      'Python is case-sensitive (Variable vs variable).'
    ],
    keyPoints: [
      'PEP 8 naming conventions (snake_case)',
      'F-strings for readable formatting',
      'Memory management (Reference counting)',
      'The difference between / and // operators'
    ],
    questions: [
      {
        question: 'Swap two variables without using a third temporary variable.',
        solution: 'a, b = b, a',
        explanation: 'Python evaluates the right side first, creating a tuple (b, a), then unpacks it into a and b.',
        difficulty: 'basic'
      },
      {
        question: 'Calculate the area of a circle where radius is provided by the user.',
        solution: 'import math\nr = float(input("Radius: "))\narea = math.pi * r**2\nprint(area)',
        explanation: 'Use math.pi for precision and float() to handle decimal inputs.',
        difficulty: 'basic'
      },
      {
        question: 'What is the output of print(2 ** 3 ** 2)?',
        solution: '512',
        explanation: 'Exponentiation operator (**) is right-associative. So it calculates 3**2=9 first, then 2**9=512.',
        difficulty: 'medium'
      },
      {
        question: 'Convert a floating point number 12.56 to an integer.',
        solution: 'num = 12.56\nresult = int(num)\nprint(result)',
        explanation: 'int() truncates the decimal part, it does not round.',
        difficulty: 'basic'
      },
      {
        question: 'Extract the word "Python" from the string "I love Python programming" using slicing.',
        solution: 's = "I love Python programming"\nprint(s[7:13])',
        explanation: 'Slicing syntax is [start:stop]. Stop index is exclusive.',
        difficulty: 'basic'
      },
      {
        question: 'Create a multi-line string variable.',
        solution: 'msg = """This is a\nmulti-line\nstring"""',
        explanation: 'Triple quotes (single or double) allow strings to span multiple lines.',
        difficulty: 'basic'
      },
      {
        question: 'Check the data type of a variable x = 10.5.',
        solution: 'x = 10.5\nprint(type(x))',
        explanation: 'type() returns the class type of the object.',
        difficulty: 'basic'
      },
      {
        question: 'Find the ASCII value of character "A".',
        solution: 'print(ord("A"))',
        explanation: 'ord() returns the Unicode/ASCII integer of a character.',
        difficulty: 'basic'
      },
      {
        question: 'Convert integer 65 to its character representation.',
        solution: 'print(chr(65))',
        explanation: 'chr() is the inverse of ord().',
        difficulty: 'basic'
      },
      {
        question: 'Format a float to 2 decimal places using f-strings.',
        solution: 'val = 3.14159\nprint(f"{val:.2f}")',
        explanation: ':.2f inside f-string curly braces specifies 2 decimal precision.',
        difficulty: 'medium'
      },
      {
        question: 'Concatenate a string "Age: " and integer 25.',
        solution: 'print("Age: " + str(25))',
        explanation: 'You cannot add str and int directly; you must cast the int to str.',
        difficulty: 'basic'
      },
      {
        question: 'Get the length of a string "Hello World".',
        solution: 'len("Hello World")',
        explanation: 'len() returns the number of items in a container or characters in a string.',
        difficulty: 'basic'
      },
      {
        question: 'Check if "apple" exists in string "I like apple juice".',
        solution: 'print("apple" in "I like apple juice")',
        explanation: 'The "in" operator checks for substring existence and returns Boolean.',
        difficulty: 'basic'
      },
      {
        question: 'Reverse a string using slicing.',
        solution: 's = "Python"\nprint(s[::-1])',
        explanation: 'The step -1 moves backwards through the string.',
        difficulty: 'medium'
      },
      {
        question: 'Perform floor division of 10 by 3.',
        solution: 'print(10 // 3)',
        explanation: '// returns the largest integer less than or equal to the division result.',
        difficulty: 'basic'
      },
      {
        question: 'Find the remainder when 25 is divided by 4.',
        solution: 'print(25 % 4)',
        explanation: 'The modulo operator % returns the remainder.',
        difficulty: 'basic'
      },
      {
        question: 'Create a variable with a null value.',
        solution: 'x = None',
        explanation: 'None is a special constant in Python representing the absence of a value.',
        difficulty: 'basic'
      },
      {
        question: 'Convert "100" (string) to binary (int).',
        solution: 'print(int("100", 2))',
        explanation: 'The second argument in int() specifies the base.',
        difficulty: 'hard'
      },
      {
        question: 'What happens if you define a variable twice?',
        solution: 'x = 5\nx = 10\nprint(x) # 10',
        explanation: 'Python variables are references. Re-assignment just points the name to a new object.',
        difficulty: 'basic'
      },
      {
        question: 'Calculate 2 to the power of 10 without using **.',
        solution: 'print(pow(2, 10))',
        explanation: 'The built-in pow(base, exp) function performs exponentiation.',
        difficulty: 'basic'
      }
    ]
  },
  {
    id: 'control_flow',
    title: 'Control Flow & Loops',
    description: 'Master conditional logic and iterative processes.',
    properties: [
      'Indentation: Python uses whitespace to define blocks.',
      'Short-circuiting: and/or operators stop as soon as result is known.',
      'Iterable: Any object you can loop over (list, str, range).',
      'Truthiness: Empty collections and 0 are False, others are True.'
    ],
    remember: [
      'range(start, stop) stops BEFORE the stop value.',
      'else can be used with for/while loops (runs if no break occurs).',
      'break exits loop, continue skips current iteration.'
    ],
    keyPoints: [
      'Efficient looping with enumerate()',
      'Nested conditions vs logical operators',
      'Infinite loops and how to avoid them',
      'Match-Case (Python 3.10+)'
    ],
    questions: [
      {
        question: 'Check if a number is even or odd.',
        solution: 'num = int(input())\nif num % 2 == 0:\n    print("Even")\nelse:\n    print("Odd")',
        explanation: 'Modulo 2 returns 0 for even numbers.',
        difficulty: 'basic'
      },
      {
        question: 'Find the largest of three numbers.',
        solution: 'a, b, c = 10, 20, 15\nprint(max(a, b, c))',
        explanation: 'max() is a built-in function that takes multiple arguments.',
        difficulty: 'basic'
      },
      {
        question: 'Print numbers 1 to 10 using a while loop.',
        solution: 'i = 1\nwhile i <= 10:\n    print(i)\n    i += 1',
        explanation: 'Ensure the loop variable is incremented to avoid infinite loop.',
        difficulty: 'basic'
      },
      {
        question: 'Print every second character of a string.',
        solution: 's = "Python"\nfor i in range(0, len(s), 2):\n    print(s[i])',
        explanation: 'range(start, stop, step) allows skipping elements.',
        difficulty: 'medium'
      },
      {
        question: 'Sum all numbers in a list using a for loop.',
        solution: 'nums = [1, 2, 3, 4]\ntotal = 0\nfor n in nums:\n    total += n\nprint(total)',
        explanation: 'Iterate through the list and accumulate the sum.',
        difficulty: 'basic'
      },
      {
        question: 'Check if a year is a leap year.',
        solution: 'year = 2024\nif (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):\n    print("Leap Year")\nelse:\n    print("Not Leap Year")',
        explanation: 'Leap years are divisible by 4, but not by 100 unless also by 400.',
        difficulty: 'medium'
      },
      {
        question: 'Find the factorial of a number using a loop.',
        solution: 'n = 5\nfact = 1\nfor i in range(1, n + 1):\n    fact *= i\nprint(fact)',
        explanation: 'Multiply the accumulator by each number in the range.',
        difficulty: 'medium'
      },
      {
        question: 'Print a multiplication table of a given number.',
        solution: 'n = 7\nfor i in range(1, 11):\n    print(f"{n} x {i} = {n*i}")',
        explanation: 'Loop 10 times and use f-strings for formatting.',
        difficulty: 'basic'
      },
      {
        question: 'Reverse a number using a while loop.',
        solution: 'n = 1234\nrev = 0\nwhile n > 0:\n    rev = (rev * 10) + (n % 10)\n    n //= 10\nprint(rev)',
        explanation: 'Extract last digit with % and shift rev left by multiplying by 10.',
        difficulty: 'hard'
      },
      {
        question: 'Check if a number is prime.',
        solution: 'n = 17\nis_prime = True\nfor i in range(2, int(n**0.5) + 1):\n    if n % i == 0:\n        is_prime = False\n        break\nprint(is_prime)',
        explanation: 'Check divisibility up to the square root of n for efficiency.',
        difficulty: 'hard'
      },
      {
        question: 'Print Fibonacci sequence up to n terms.',
        solution: 'n = 5\na, b = 0, 1\nfor _ in range(n):\n    print(a)\n    a, b = b, a + b',
        explanation: 'Use tuple unpacking to update sequence values simultaneously.',
        difficulty: 'medium'
      },
      {
        question: 'Find the sum of digits of a number.',
        solution: 'n = 123\nsum_d = sum(int(d) for d in str(n))\nprint(sum_d)',
        explanation: 'Convert to string, iterate digits, convert back to int and sum.',
        difficulty: 'medium'
      },
      {
        question: 'Print a pattern of stars (Triangle).',
        solution: 'rows = 5\nfor i in range(1, rows + 1):\n    print("*" * i)',
        explanation: 'String multiplication prints a character multiple times.',
        difficulty: 'basic'
      },
      {
        question: 'Use break to stop a loop when value 5 is found in [1, 3, 5, 7].',
        solution: 'for x in [1, 3, 5, 7]:\n    if x == 5: break\n    print(x)',
        explanation: 'break immediately terminates the innermost loop.',
        difficulty: 'basic'
      },
      {
        question: 'Use continue to skip even numbers in range(10).',
        solution: 'for i in range(10):\n    if i % 2 == 0: continue\n    print(i)',
        explanation: 'continue skips the rest of the current loop body.',
        difficulty: 'basic'
      },
      {
        question: 'What is the "loop-else" construct?',
        solution: 'for i in range(3):\n    print(i)\nelse:\n    print("Done")',
        explanation: 'The else block runs if the loop completed naturally (no break).',
        difficulty: 'medium'
      },
      {
        question: 'Check if a string is a palindrome.',
        solution: 's = "radar"\nprint(s == s[::-1])',
        explanation: 'Compare the string with its reversed slice.',
        difficulty: 'basic'
      },
      {
        question: 'Find common elements between two lists using loops.',
        solution: 'l1, l2 = [1,2,3], [2,3,4]\ncommon = [x for x in l1 if x in l2]\nprint(common)',
        explanation: 'List comprehension with a conditional check.',
        difficulty: 'medium'
      },
      {
        question: 'Nested loop to print a 3x3 grid of coordinates.',
        solution: 'for x in range(3):\n    for y in range(3):\n        print(f"({x},{y})", end=" ")\n    print()',
        explanation: 'Outer loop for rows, inner loop for columns.',
        difficulty: 'medium'
      },
      {
        question: 'Simulate a do-while loop in Python.',
        solution: 'while True:\n    # logic\n    if not condition: break',
        explanation: 'Python doesn\'t have native do-while; use while True with a break condition at the end.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'functions',
    title: 'Functions & Scope',
    description: 'Learn to write reusable code and understand variable visibility.',
    properties: [
      'First-Class Objects: Functions can be passed as arguments.',
      'LEGB Rule: Local, Enclosing, Global, Built-in scope resolution.',
      'Docstrings: Documentation inside functions using triple quotes.',
      'Return Statement: Functions return None if no return is specified.'
    ],
    remember: [
      'Positional arguments must come before keyword arguments.',
      '*args collects extra positional arguments into a tuple.',
      '**kwargs collects extra keyword arguments into a dictionary.'
    ],
    keyPoints: [
      'Lambda functions (anonymous functions)',
      'Recursion and recursion limits',
      'Global vs Local variables',
      'Default parameter values (avoid mutable defaults!)'
    ],
    questions: [
      {
        question: 'Write a function to calculate the square of a number.',
        solution: 'def square(n):\n    return n * n',
        explanation: 'Basic function definition with one parameter and return value.',
        difficulty: 'basic'
      },
      {
        question: 'Create a function with a default parameter.',
        solution: 'def greet(name="User"):\n    print(f"Hello {name}")',
        explanation: 'Default parameters allow calling the function without arguments.',
        difficulty: 'basic'
      },
      {
        question: 'Write a lambda function to add two numbers.',
        solution: 'add = lambda x, y: x + y\nprint(add(5, 3))',
        explanation: 'Lambda is a one-line anonymous function.',
        difficulty: 'basic'
      },
      {
        question: 'Explain the difference between global and local variables.',
        solution: 'x = 10 # Global\ndef fn():\n    x = 5 # Local\n    print(x)',
        explanation: 'Local variables exist only inside the function. Global variables exist at the module level.',
        difficulty: 'medium'
      },
      {
        question: 'Write a recursive function to find factorial.',
        solution: 'def fact(n):\n    if n == 0: return 1\n    return n * fact(n-1)',
        explanation: 'Recursion requires a base case and a recursive step.',
        difficulty: 'medium'
      },
      {
        question: 'Use *args to create a function that sums any number of arguments.',
        solution: 'def sum_all(*args):\n    return sum(args)\nprint(sum_all(1, 2, 3, 4))',
        explanation: '*args packs arguments into a tuple.',
        difficulty: 'medium'
      },
      {
        question: 'Use **kwargs to print key-value pairs of arguments.',
        solution: 'def info(**kwargs):\n    for k, v in kwargs.items():\n        print(f"{k}: {v}")',
        explanation: '**kwargs packs named arguments into a dictionary.',
        difficulty: 'medium'
      },
      {
        question: 'What is a docstring and how to access it?',
        solution: 'def fn():\n    """My doc"""\n    pass\nprint(fn.__doc__)',
        explanation: 'Docstrings describe what a function does and are stored in __doc__.',
        difficulty: 'basic'
      },
      {
        question: 'Write a function that returns multiple values.',
        solution: 'def get_stats(nums):\n    return min(nums), max(nums)\nlow, high = get_stats([1, 2, 3])',
        explanation: 'Python returns multiple values as a tuple, which can be unpacked.',
        difficulty: 'medium'
      },
      {
        question: 'Modify a global variable inside a function.',
        solution: 'count = 0\ndef inc():\n    global count\n    count += 1',
        explanation: 'Use the "global" keyword to modify a global variable inside a local scope.',
        difficulty: 'medium'
      },
      {
        question: 'Create a function that takes another function as an argument.',
        solution: 'def apply(fn, val):\n    return fn(val)\nprint(apply(len, "test"))',
        explanation: 'Higher-order functions treat other functions as data.',
        difficulty: 'hard'
      },
      {
        question: 'Explain "nonlocal" keyword.',
        solution: 'def outer():\n    x = 1\n    def inner():\n        nonlocal x\n        x += 1',
        explanation: 'nonlocal is used in nested functions to modify variables in the outer (enclosing) scope.',
        difficulty: 'hard'
      },
      {
        question: 'What happens if you use a list as a default argument?',
        solution: 'def add(item, my_list=[]): ...',
        explanation: 'DANGEROUS: The list is created once at definition time, not every call. Use None instead.',
        difficulty: 'hard'
      },
      {
        question: 'Write a function to check if a number is in a range.',
        solution: 'def in_range(n, low, high):\n    return low <= n <= high',
        explanation: 'Python supports chained comparisons.',
        difficulty: 'basic'
      },
      {
        question: 'Filter a list of numbers to get only even ones using lambda.',
        solution: 'nums = [1, 2, 3, 4]\nevens = list(filter(lambda x: x % 2 == 0, nums))',
        explanation: 'filter() takes a function and an iterable.',
        difficulty: 'medium'
      },
      {
        question: 'Map a list of strings to their lengths using lambda.',
        solution: 'words = ["apple", "hi"]\nlens = list(map(len, words))',
        explanation: 'map() applies a function to every item in an iterable.',
        difficulty: 'medium'
      },
      {
        question: 'Write a function that calculates the GCD of two numbers.',
        solution: 'import math\ndef get_gcd(a, b):\n    return math.gcd(a, b)',
        explanation: 'Standard library math.gcd is the most efficient way.',
        difficulty: 'basic'
      },
      {
        question: 'Implement a simple closure.',
        solution: 'def multiplier(n):\n    def inner(x): return x * n\n    return inner\ndouble = multiplier(2)',
        explanation: 'A closure is a function that remembers the environment in which it was created.',
        difficulty: 'hard'
      },
      {
        question: 'Create a function that accepts only keyword-only arguments.',
        solution: 'def fn(*, name):\n    print(name)',
        explanation: 'Arguments after * must be passed by name.',
        difficulty: 'hard'
      },
      {
        question: 'Write a function to flatten a nested list (one level).',
        solution: 'def flatten(nested):\n    return [item for sub in nested for item in sub]',
        explanation: 'Nested list comprehension inside a function.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'data_structures',
    title: 'Data Structures',
    description: 'Master Lists, Tuples, Sets, and Dictionaries.',
    properties: [
      'List: Ordered, mutable, allows duplicates.',
      'Tuple: Ordered, immutable, allows duplicates.',
      'Set: Unordered, mutable, unique elements only.',
      'Dict: Key-value pairs, keys must be hashable/unique.'
    ],
    remember: [
      'Lists use [], Tuples use (), Sets use {}, Dicts use {k:v}.',
      'Tuples are faster than lists for fixed data.',
      'Sets are optimized for membership testing (in operator).'
    ],
    keyPoints: [
      'Dictionary methods: keys(), values(), items()',
      'List methods: append(), extend(), pop(), remove()',
      'Set operations: union, intersection, difference',
      'Slicing and indexing deep dive'
    ],
    questions: [
      {
        question: 'How to add an element to the end of a list?',
        solution: 'my_list.append(item)',
        explanation: 'append() adds a single element to the end.',
        difficulty: 'basic'
      },
      {
        question: 'Merge two dictionaries.',
        solution: 'd1 = {"a": 1}; d2 = {"b": 2}\nd1.update(d2) # or {**d1, **d2}',
        explanation: 'update() modifies in place, while unpacking creates a new dict.',
        difficulty: 'medium'
      },
      {
        question: 'Remove duplicates from a list.',
        solution: 'my_list = list(set(my_list))',
        explanation: 'Converting to a set automatically removes duplicates.',
        difficulty: 'basic'
      },
      {
        question: 'Access the last element of a list.',
        solution: 'print(my_list[-1])',
        explanation: 'Negative indexing starts from the end.',
        difficulty: 'basic'
      },
      {
        question: 'Check if a key exists in a dictionary.',
        solution: 'if "key" in my_dict: ...',
        explanation: 'The "in" operator checks keys by default.',
        difficulty: 'basic'
      },
      {
        question: 'Create a dictionary from two lists (keys and values).',
        solution: 'keys = ["a", "b"]; vals = [1, 2]\nd = dict(zip(keys, vals))',
        explanation: 'zip() pairs elements, dict() converts pairs to entries.',
        difficulty: 'medium'
      },
      {
        question: 'Find the intersection of two sets.',
        solution: 's1 = {1, 2}; s2 = {2, 3}\nprint(s1 & s2) # or s1.intersection(s2)',
        explanation: '& is the intersection operator.',
        difficulty: 'medium'
      },
      {
        question: 'Sort a list of dictionaries by a specific key.',
        solution: 'data = [{"id": 2}, {"id": 1}]\ndata.sort(key=lambda x: x["id"])',
        explanation: 'The key argument takes a function to determine sort order.',
        difficulty: 'hard'
      },
      {
        question: 'What is the difference between pop() and remove() in a list?',
        solution: 'my_list.pop() # removes by index\nmy_list.remove(val) # removes by value',
        explanation: 'pop() also returns the removed element.',
        difficulty: 'medium'
      },
      {
        question: 'Create a shallow copy of a list.',
        solution: 'new_list = old_list[:] # or old_list.copy()',
        explanation: 'Slicing with [:] creates a new list object with same elements.',
        difficulty: 'medium'
      },
      {
        question: 'Find the most frequent element in a list.',
        solution: 'from collections import Counter\ncounts = Counter([1, 2, 2, 3])\nprint(counts.most_common(1))',
        explanation: 'Counter is a specialized dictionary for counting hashable objects.',
        difficulty: 'hard'
      },
      {
        question: 'Initialize a dictionary with default values.',
        solution: 'from collections import defaultdict\nd = defaultdict(int)',
        explanation: 'defaultdict provides a default value for non-existent keys.',
        difficulty: 'hard'
      },
      {
        question: 'Convert a list of tuples into a dictionary.',
        solution: 'lt = [("a", 1), ("b", 2)]\nd = dict(lt)',
        explanation: 'dict() constructor accepts an iterable of pairs.',
        difficulty: 'basic'
      },
      {
        question: 'Get a value from a dict with a fallback if key doesn\'t exist.',
        solution: 'val = my_dict.get("key", "default")',
        explanation: 'get() prevents KeyError and allows a custom default.',
        difficulty: 'basic'
      },
      {
        question: 'Clear all elements from a set.',
        solution: 'my_set.clear()',
        explanation: 'clear() removes all items from the container.',
        difficulty: 'basic'
      },
      {
        question: 'Check if one set is a subset of another.',
        solution: 's1.issubset(s2) # or s1 <= s2',
        explanation: '<= operator is a shorthand for subset check.',
        difficulty: 'medium'
      },
      {
        question: 'Reverse a list in place.',
        solution: 'my_list.reverse()',
        explanation: 'reverse() modifies the existing list.',
        difficulty: 'basic'
      },
      {
        question: 'Sort a list in descending order.',
        solution: 'my_list.sort(reverse=True)',
        explanation: 'The reverse parameter controls the sort direction.',
        difficulty: 'basic'
      },
      {
        question: 'Flatten a 2D list using extend().',
        solution: 'flat = []\nfor sub in nested: flat.extend(sub)',
        explanation: 'extend() adds all items from an iterable to the list.',
        difficulty: 'medium'
      },
      {
        question: 'Count occurrences of an element in a tuple.',
        solution: 'my_tuple.count(val)',
        explanation: 'Tuples have count() and index() methods.',
        difficulty: 'basic'
      }
    ]
  },
  {
    id: 'oop',
    title: 'Object Oriented Programming',
    description: 'Master Classes, Objects, Inheritance, and Encapsulation.',
    properties: [
      'Class: A blueprint for creating objects.',
      'Self: Represents the instance of the class.',
      '__init__: The constructor method.',
      'Inheritance: Subclasses inheriting from parent classes.'
    ],
    remember: [
      'Private attributes start with __ (dunder).',
      'super() is used to call parent class methods.',
      'Everything in Python is an object.'
    ],
    keyPoints: [
      'Class vs Instance variables',
      '@property decorator for getters/setters',
      'Method Overriding',
      'Multiple Inheritance and MRO'
    ],
    questions: [
      {
        question: 'Create a simple class "Dog" with a name attribute.',
        solution: 'class Dog:\n    def __init__(self, name):\n        self.name = name',
        explanation: '__init__ initializes the object state.',
        difficulty: 'basic'
      },
      {
        question: 'Define a method inside a class.',
        solution: 'class Dog:\n    def bark(self):\n        print("Woof!")',
        explanation: 'Methods must take "self" as the first argument.',
        difficulty: 'basic'
      },
      {
        question: 'Implement inheritance: Create "Puppy" from "Dog".',
        solution: 'class Puppy(Dog):\n    def play(self): print("Playing")',
        explanation: 'Pass the parent class in parentheses.',
        difficulty: 'medium'
      },
      {
        question: 'Use super() to call the parent constructor.',
        solution: 'class Puppy(Dog):\n    def __init__(self, name, breed):\n        super().__init__(name)\n        self.breed = breed',
        explanation: 'super() delegates calls to the parent class.',
        difficulty: 'medium'
      },
      {
        question: 'What is a class variable?',
        solution: 'class Dog:\n    species = "Canine" # Class variable',
        explanation: 'Class variables are shared by all instances of the class.',
        difficulty: 'medium'
      },
      {
        question: 'Create a private attribute.',
        solution: 'self.__secret = "shh"',
        explanation: 'Double underscore invokes name mangling to make it harder to access from outside.',
        difficulty: 'medium'
      },
      {
        question: 'Use @property to create a getter.',
        solution: 'class C:\n    @property\n    def val(self): return self._val',
        explanation: '@property allows a method to be accessed like an attribute.',
        difficulty: 'hard'
      },
      {
        question: 'What is the __str__ method?',
        solution: 'def __str__(self):\n    return f"Dog named {self.name}"',
        explanation: '__str__ defines the string representation for print().',
        difficulty: 'medium'
      },
      {
        question: 'Implement a class method using @classmethod.',
        solution: 'class C:\n    @classmethod\n    def info(cls): print(f"Class: {cls}")',
        explanation: 'Class methods take "cls" and act on the class, not instance.',
        difficulty: 'hard'
      },
      {
        question: 'Implement a static method using @staticmethod.',
        solution: 'class C:\n    @staticmethod\n    def add(a, b): return a + b',
        explanation: 'Static methods don\'t take self or cls; they are just namespace functions.',
        difficulty: 'hard'
      },
      {
        question: 'What is Method Resolution Order (MRO)?',
        solution: 'print(MyClass.mro())',
        explanation: 'MRO is the order in which Python looks for a method in a hierarchy.',
        difficulty: 'hard'
      },
      {
        question: 'Explain "dunder" methods.',
        solution: 'Examples: __init__, __add__, __len__',
        explanation: 'Double-underscore methods allow objects to interface with built-in Python features.',
        difficulty: 'medium'
      },
      {
        question: 'Create a class that supports the len() function.',
        solution: 'class MyList:\n    def __len__(self): return 10',
        explanation: 'Implement __len__ to make the object "sized".',
        difficulty: 'medium'
      },
      {
        question: 'How to check if an object is an instance of a class?',
        solution: 'isinstance(my_dog, Dog)',
        explanation: 'isinstance() handles inheritance correctly.',
        difficulty: 'basic'
      },
      {
        question: 'What is polymorphism in Python?',
        solution: 'def make_sound(animal): animal.sound()',
        explanation: 'Different classes can have the same method name, and Python calls the correct one.',
        difficulty: 'hard'
      },
      {
        question: 'What is composition vs inheritance?',
        solution: 'Composition: class Car: engine = Engine()',
        explanation: 'Inheritance is "is-a", composition is "has-a".',
        difficulty: 'hard'
      },
      {
        question: 'Create an abstract base class.',
        solution: 'from abc import ABC, abstractmethod\nclass Shape(ABC):\n    @abstractmethod\n    def area(self): pass',
        explanation: 'ABCs cannot be instantiated and require subclasses to implement abstract methods.',
        difficulty: 'hard'
      },
      {
        question: 'How to delete an object?',
        solution: 'del my_obj',
        explanation: 'del removes the reference to the object.',
        difficulty: 'basic'
      },
      {
        question: 'What is the __new__ method?',
        solution: 'def __new__(cls, *args, **kwargs): ...',
        explanation: '__new__ is the actual constructor that creates the instance before __init__ runs.',
        difficulty: 'hard'
      },
      {
        question: 'Explain the @setter decorator.',
        solution: '@val.setter\ndef val(self, value): self._val = value',
        explanation: 'Works with @property to allow setting values with logic.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'exceptions',
    title: 'Exception Handling & Files',
    description: 'Learn to handle errors gracefully and work with the file system.',
    properties: [
      'Try-Except: The core mechanism for catching errors.',
      'Finally Block: Code that runs no matter what happens.',
      'Context Managers: The "with" statement for safe resource handling.',
      'Custom Exceptions: Creating your own error types by inheriting from Exception.'
    ],
    remember: [
      'Always catch specific exceptions (e.g., ValueError) rather than a bare except.',
      'The "with" statement automatically closes files.',
      'Files can be opened in read (r), write (w), append (a), and binary (b) modes.'
    ],
    keyPoints: [
      'The difference between SyntaxError and Exceptions',
      'Raising exceptions manually with "raise"',
      'Reading lines vs reading the whole file',
      'Using os and pathlib for file paths'
    ],
    questions: [
      {
        question: 'Write a basic try-except block to catch division by zero.',
        solution: 'try:\n    x = 1/0\nexcept ZeroDivisionError:\n    print("Cannot divide by zero")',
        explanation: 'ZeroDivisionError is the specific exception for this case.',
        difficulty: 'basic'
      },
      {
        question: 'How do you open and read a file named "data.txt"?',
        solution: 'with open("data.txt", "r") as f:\n    content = f.read()',
        explanation: 'Using "with" ensures the file is closed even if an error occurs.',
        difficulty: 'basic'
      },
      {
        question: 'Catch multiple specific exceptions in one block.',
        solution: 'try:\n    # code\nexcept (ValueError, TypeError) as e:\n    print(f"Error: {e}")',
        explanation: 'You can pass a tuple of exception classes to a single except block.',
        difficulty: 'medium'
      },
      {
        question: 'Write a line to a file, overwriting existing content.',
        solution: 'with open("test.txt", "w") as f:\n    f.write("Hello World")',
        explanation: '"w" mode stands for write (and overwrite).',
        difficulty: 'basic'
      },
      {
        question: 'Append a line to an existing file.',
        solution: 'with open("test.txt", "a") as f:\n    f.write("\\nNew Line")',
        explanation: '"a" mode stands for append.',
        difficulty: 'basic'
      },
      {
        question: 'What does the "finally" block do?',
        solution: 'try: ...\nexcept: ...\nfinally: print("Cleanup")',
        explanation: 'The finally block executes regardless of whether an exception was raised or caught.',
        difficulty: 'medium'
      },
      {
        question: 'How to raise a custom exception with a message?',
        solution: 'raise ValueError("Invalid input provided")',
        explanation: 'The "raise" keyword triggers an exception manually.',
        difficulty: 'basic'
      },
      {
        question: 'Read a file line by line using a loop.',
        solution: 'with open("file.txt") as f:\n    for line in f:\n        print(line.strip())',
        explanation: 'Iterating over the file object is memory-efficient.',
        difficulty: 'medium'
      },
      {
        question: 'Check if a file exists before opening it.',
        solution: 'import os\nif os.path.exists("file.txt"): ...',
        explanation: 'os.path.exists() returns a boolean.',
        difficulty: 'medium'
      },
      {
        question: 'Use the "else" block with try-except.',
        solution: 'try: ...\nexcept: ...\nelse: print("No errors occurred")',
        explanation: 'The else block runs only if no exceptions were raised in the try block.',
        difficulty: 'medium'
      },
      {
        question: 'Read a JSON file into a Python dictionary.',
        solution: 'import json\nwith open("data.json") as f:\n    data = json.load(f)',
        explanation: 'json.load() parses file content into Python structures.',
        difficulty: 'medium'
      },
      {
        question: 'Write a dictionary to a JSON file.',
        solution: 'import json\nwith open("data.json", "w") as f:\n    json.dump(my_dict, f)',
        explanation: 'json.dump() serializes Python objects to a file.',
        difficulty: 'medium'
      },
      {
        question: 'Define a custom exception class.',
        solution: 'class MyError(Exception): pass',
        explanation: 'Custom exceptions should inherit from the base Exception class.',
        difficulty: 'hard'
      },
      {
        question: 'How to handle an exception and still re-raise it?',
        solution: 'try: ...\nexcept Exception:\n    log_error()\n    raise',
        explanation: 'A bare "raise" inside an except block re-raises the current exception.',
        difficulty: 'hard'
      },
      {
        question: 'Read the first 10 characters of a file.',
        solution: 'with open("file.txt") as f:\n    print(f.read(10))',
        explanation: 'read(n) reads exactly n characters.',
        difficulty: 'basic'
      },
      {
        question: 'Get the current working directory.',
        solution: 'import os\nprint(os.getcwd())',
        explanation: 'getcwd stands for Get Current Working Directory.',
        difficulty: 'basic'
      },
      {
        question: 'List all files in a directory.',
        solution: 'import os\nprint(os.listdir("."))',
        explanation: 'listdir() returns a list of names of entries in the directory.',
        difficulty: 'medium'
      },
      {
        question: 'Use "with" to open two files at once.',
        solution: 'with open("f1.txt") as f1, open("f2.txt") as f2:\n    pass',
        explanation: 'You can manage multiple resources in a single with statement.',
        difficulty: 'medium'
      },
      {
        question: 'What is the "assert" statement used for?',
        solution: 'assert x > 0, "x must be positive"',
        explanation: 'Assertions are used for internal self-checks in code; they raise AssertionError if False.',
        difficulty: 'hard'
      },
      {
        question: 'Read a CSV file using the csv module.',
        solution: 'import csv\nwith open("data.csv") as f:\n    reader = csv.reader(f)\n    for row in reader: print(row)',
        explanation: 'The csv module handles parsing of comma-separated values.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'comprehensions',
    title: 'Advanced Features & Iterators',
    description: 'Master list comprehensions, generators, and decorators.',
    properties: [
      'List Comprehension: Concise way to create lists.',
      'Generators: Functions that yield values one at a time (lazy evaluation).',
      'Decorators: Functions that modify the behavior of other functions.',
      'Iterators: Objects that implement __next__ and __iter__.'
    ],
    remember: [
      'Generators use parentheses () or the yield keyword.',
      'Decorators use the @ symbol above function definitions.',
      'List comprehensions are generally faster than for-loops for list creation.'
    ],
    keyPoints: [
      'Dictionary and Set comprehensions',
      'Generator expressions vs List comprehensions',
      'The @wraps decorator for preserving metadata',
      'Infinite iterators with itertools'
    ],
    questions: [
      {
        question: 'Create a list of squares of numbers from 1 to 10 using comprehension.',
        solution: 'squares = [x**2 for x in range(1, 11)]',
        explanation: 'Syntax: [expression for item in iterable].',
        difficulty: 'basic'
      },
      {
        question: 'Filter even numbers from a list using list comprehension.',
        solution: 'evens = [x for x in nums if x % 2 == 0]',
        explanation: 'Comprehensions can include an "if" condition.',
        difficulty: 'basic'
      },
      {
        question: 'Create a dictionary mapping numbers to their squares using comprehension.',
        solution: 'sq_dict = {x: x**2 for x in range(5)}',
        explanation: 'Dict comprehension uses curly braces and key:value pairs.',
        difficulty: 'medium'
      },
      {
        question: 'What is the difference between a list comprehension and a generator expression?',
        solution: 'lc = [x for x in range(10)] # List in memory\nge = (x for x in range(10)) # Yields on demand',
        explanation: 'Generators are more memory-efficient for large datasets.',
        difficulty: 'medium'
      },
      {
        question: 'Write a simple generator function that yields numbers 1 to 3.',
        solution: 'def count():\n    yield 1\n    yield 2\n    yield 3',
        explanation: 'yield pauses the function and returns a value.',
        difficulty: 'basic'
      },
      {
        question: 'Write a decorator that prints "Starting" before a function runs.',
        solution: 'def my_dec(func):\n    def wrapper():\n        print("Starting")\n        func()\n    return wrapper',
        explanation: 'Decorators wrap a function inside another function.',
        difficulty: 'hard'
      },
      {
        question: 'Use a set comprehension to get unique lengths of words in a list.',
        solution: 'lens = {len(w) for w in words}',
        explanation: 'Set comprehension ensures the results are unique.',
        difficulty: 'medium'
      },
      {
        question: 'What is "yield from" used for?',
        solution: 'def gen(): yield from [1, 2, 3]',
        explanation: 'yield from delegates to a sub-generator or iterable.',
        difficulty: 'hard'
      },
      {
        question: 'Create a generator for an infinite sequence of numbers.',
        solution: 'def infinite():\n    n = 0\n    while True:\n        yield n\n        n += 1',
        explanation: 'Generators can represent infinite sequences because they produce values lazily.',
        difficulty: 'medium'
      },
      {
        question: 'Write a list comprehension with a nested for loop.',
        solution: 'flat = [x for row in matrix for x in row]',
        explanation: 'The order of for loops matches nested loops (outer first).',
        difficulty: 'hard'
      },
      {
        question: 'Use the "zip" function with list comprehension to sum two lists.',
        solution: 'sums = [a + b for a, b in zip(l1, l2)]',
        explanation: 'zip() allows iterating over multiple sequences in parallel.',
        difficulty: 'medium'
      },
      {
        question: 'Write a decorator that accepts arguments.',
        solution: 'def repeat(n):\n    def dec(f):\n        def wrapper():\n            for _ in range(n): f()\n        return wrapper\n    return dec',
        explanation: 'To pass arguments to a decorator, you need an extra level of nesting.',
        difficulty: 'hard'
      },
      {
        question: 'What is the purpose of functools.wraps?',
        solution: 'from functools import wraps\n@wraps(f)\ndef wrapper(...): ...',
        explanation: 'It copies the original function name and docstring to the wrapper.',
        difficulty: 'hard'
      },
      {
        question: 'Create a list of strings where only words with more than 3 letters are capitalized.',
        solution: 'res = [w.upper() if len(w) > 3 else w for w in words]',
        explanation: 'Ternary operators can be used in the expression part of comprehension.',
        difficulty: 'hard'
      },
      {
        question: 'Explain the "next()" function.',
        solution: 'it = iter([1, 2]); print(next(it))',
        explanation: 'next() retrieves the next item from an iterator.',
        difficulty: 'basic'
      },
      {
        question: 'How to turn a list into an iterator?',
        solution: 'my_iter = iter(my_list)',
        explanation: 'The iter() function calls the __iter__ method of the object.',
        difficulty: 'basic'
      },
      {
        question: 'What happens when an iterator is exhausted?',
        solution: 'It raises StopIteration exception.',
        explanation: 'Loops catch this exception internally to know when to stop.',
        difficulty: 'medium'
      },
      {
        question: 'Write a comprehension to create a 3x3 identity matrix.',
        solution: 'matrix = [[1 if i == j else 0 for j in range(3)] for i in range(3)]',
        explanation: 'Nested comprehensions can create multi-dimensional structures.',
        difficulty: 'hard'
      },
      {
        question: 'Use "enumerate" in a list comprehension.',
        solution: 'indexed = [(i, val) for i, val in enumerate(my_list)]',
        explanation: 'enumerate() provides both index and value.',
        difficulty: 'medium'
      },
      {
        question: 'Filter a dictionary to keep only keys with values > 10.',
        solution: 'filtered = {k: v for k, v in d.items() if v > 10}',
        explanation: 'Dictionary items() returns key-value pairs for iteration.',
        difficulty: 'medium'
      }
    ]
  }
];

