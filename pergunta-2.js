const numero = 13;

const fibonacci = (n) => {
  if (n === 0 || n === 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

const fibonacciSequence = Array.from({ length: numero }, (_, i) =>
  fibonacci(i)
);

const encontrado = fibonacciSequence.includes(numero);

if (encontrado) {
  console.log(`O número ${numero} pertence á sequencia de Fibonacci.`);
} else {
  console.log(`O número ${numero} não pertence á seqencia de Fibonacci.`);
}
