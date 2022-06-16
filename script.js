const students = [
  {
    name: 'Thales',
    n1: 10,
    n2: 10
  },
  {
    name: 'Thiago',
    n1: 8,
    n2: 8
  },
  {
    name: 'Jessica',
    n1: 6,
    n2: 7
  },
  {
    name: 'Bianca',
    n1: 5,
    n2: 7
  }
]

let average

const calcAverage = function (n1, n2) {
  average = (n1 + n2) / 2
  average = average.toFixed(1)
  return average
}

for (let student = 0; student < 4; student++) {
  calcAverage(students[student].n1, students[student].n2)

  if (average >= 7) {
    alert(
      `A média do(a) aluno(a) é  ${average}.
      Parabéns ${students[student].name}! Você foi aprovado!`
    )
  } else {
    alert(
      `A média do(a) aluno(a) é ${average}.
      Não foi dessa vez ${students[student].name}! Você foi reprovado.`
    )
  }

  console.log(average)
}
