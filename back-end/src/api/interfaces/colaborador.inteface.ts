interface ColaboradorBody {
  nome: string,
  email: string,
  senha: string
}

interface ColaboradorReturn extends ColaboradorBody {
  id: number
}

export {
  ColaboradorBody,
  ColaboradorReturn
}