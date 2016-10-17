function fibonacci (n) {
  if (n===0) return 0;
  if (n===1) return 1;
  return fibonacci(n-1) + fibonacci(n-2)
}

0, 1, 1, 2, 3, 5, 8, 13, ..

fibonacci (0)  ==> 0 
fibonacci (1)  ==> 1 
                        1               0
fibonacci (2)  ==> fibonacci (1) +  fibonacci (0) => 1

                        1               1
fibonacci (3)  ==> fibonacci (2) +  fibonacci (1) => 2

                        2               1
fibonacci (4)  ==> fibonacci (3) +  fibonacci (2) => 3

                        3               2
fibonacci (5)  ==> fibonacci (4) +  fibonacci (3) => 5

                        5               3
fibonacci (6)  ==> fibonacci (5) +  fibonacci (4) => 8