let valor: number = 3000;
let nome: string = "";
let isPago: boolean = true;
let qualquer: any = 22;


// Arrays
const lista: number[] = [];
lista.push(22, 10+5, 44, 100/5);

// Tipos Personalizados (Type Alias)
type Transacao = {
    tipoTransacao: TipoTransacao;
    data: Date;
    valor: number;
}

// Enum 
enum TipoTransacao {
    DEPOSITO = "Depósito",
    TRANSFERENCIA = "Transferência",
    PAGAMENTO_BOLETO = "Pagamento de Boleto"
}

const novaTransacao: Transacao = {
    tipoTransacao: TipoTransacao.DEPOSITO,
    data: new Date(),
    valor: 0
}