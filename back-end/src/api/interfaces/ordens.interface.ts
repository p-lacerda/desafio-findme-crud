interface OrdensBody {
  data: string,
  clienteId: number,
  problemaRelatado: string,
  colaboradorId: number
}

interface OdernsReturn extends OrdensBody {
  id: number
}

export {
  OrdensBody,
  OdernsReturn
}