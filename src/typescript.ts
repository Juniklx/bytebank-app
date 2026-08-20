let valor: number = 3000;
let nome: string = "";
let isPago: boolean = true;
let qualquer: any = 22;


// Arrays
const lista: number[] = [];
lista.push(22, 10+5, 44, 100/5);

// Tipos Personalizados (Type Alias)
type Transacao = {
    tipoTransacao: string;
    data: Date;
    valor: number;
}

const novaTransacao: Transacao = {
    tipoTransacao: "",
    data: new Date(),
    valor: 0
}