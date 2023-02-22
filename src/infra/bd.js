import Doador from '../models/doador.js'
import Donatario from '../models/donatario.js'
import Item from '../models/item.js'

const bdDoador = []
const bdDonatario = []
const bdItem = []


//DOADOR

const doador = new Doador(1, 'Victor Renato Kaue', '29134350411', 'renato@outlook.com.br', 'ck5buidgde')
bdDoador.push(doador)

const doador2 = new Doador(2, 'Wallace Correia Miranda', '47296440422', 'wallace.miranda@gmail.com', '#vbtSQ@8priW')
bdDoador.push(doador2)

const doador3 = new Doador(3, 'Vanessa Cruz Santomauro', '11648375243', 'vanessasantomauro@bol.com.br', '35wdrvfhYmA')
bdDoador.push(doador3)

const doador4 = new Doador(4, 'Kamily Ximenes Farias', '24977267443', 'kamily.farias@protonmail.com', '7og!c0p7+Fs*')
bdDoador.push(doador4)

//DONÁTARIO

const donatario = new Donatario(1, 'Victor Renato Kaue', 'renato@outlook.com.br', 'ck5buidgde', new Date())
bdDonatario.push(donatario)

const donatario2 = new Donatario(2, 'Wallace Correia Miranda', 'wallace.miranda@gmail.com', '#vbtSQ@8priW', new Date())
bdDonatario.push(donatario2)

const donatario3 = new Donatario(3, 'Vanessa Cruz Santomauro', 'vanessasantomauro@bol.com.br', '35wdrvfhYmA', new Date())
bdDonatario.push(donatario3)

const donatario4 = new Donatario(4, 'Kamily Ximenes Farias', 'kamily.farias@protonmail.com', '7og!c0p7+Fs*', new Date())
bdDonatario.push(donatario4)

//ITEM

const item = new Item(1, 'Roupa infantil(6pçs - 12anos) tamanho M', 'Usado - Novo', new Date())
bdItem.push(item)

const item2 = new Item(2, 'Cesta Básica Mega (80 Itens) Alimento + Limpeza', 'Novo', new Date())
bdItem.push(item2)

const item3 = new Item(3, 'Aparelho de pressão digital de pulso', 'Bom', new Date())
bdItem.push(item3)

const item4 = new Item(4, 'Banheira infatil + conjunto de higiene básico', 'Razoável', new Date())
bdItem.push(item4)


export {bdDoador, bdDonatario, bdItem}