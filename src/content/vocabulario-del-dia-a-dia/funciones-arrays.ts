import type { Section } from '../types'

export const funcionesArrays: Section = {
  slug: 'funciones-arrays-y-valores',
  title: 'Funciones, arrays y valores',
  summary: 'O vocabulário para explicar código: tipos, valores e o que uma função recebe e retorna.',
  blocks: [
    {
      type: 'text',
      text: 'Muitos termos ficam em inglês (string, array, callback). O que muda são os verbos e as palavras em volta, que você usa para explicar o que o código faz.',
    },

    { type: 'heading', text: 'Tipos e valores' },
    {
      type: 'table',
      columns: ['Español', 'Português'],
      rows: [
        ['**la cadena** (string)', 'a string'],
        ['**el número** / **el entero**', 'o número / o inteiro'],
        ['**el booleano**', 'o booleano'],
        ['**verdadero** / **falso**', 'true / false'],
        ['**nulo** / **indefinido**', 'null / undefined'],
        ['**el arreglo** (array)', 'o array'],
        ['**el objeto**', 'o objeto'],
        ['**la clave** / **el valor**', 'a chave / o valor'],
        ['**vacío**', 'vazio'],
      ],
      caption: '"String" e "array" em inglês são entendidos em qualquer time.',
    },

    { type: 'heading', text: 'Verbos de código' },
    {
      type: 'table',
      columns: ['Español', 'Português'],
      rows: [
        ['**llamar** a una función', 'chamar uma função'],
        ['**recibir** un parámetro', 'receber um parâmetro'],
        ['**devolver** / **retornar**', 'retornar'],
        ['**recorrer** un arreglo', 'percorrer um array'],
        ['**guardar** en una variable', 'guardar numa variável'],
        ['**correr** / **ejecutar**', 'rodar, executar'],
        ['**agregar** / **quitar**', 'adicionar / remover'],
        ['**lanzar** una excepción', 'lançar uma exceção'],
      ],
    },
    {
      type: 'note',
      tone: 'warning',
      text: '~~Rodar los tests~~ → **Correr** los tests. E para arquivos o normal é **guardar**: **guardé** el archivo.',
    },
    {
      type: 'note',
      tone: 'tip',
      title: 'Na Espanha',
      text: 'Ouve-se mais **ejecutar** (em vez de correr) e **añadir** (em vez de agregar).',
    },

    { type: 'heading', text: 'Explicar uma função' },
    {
      type: 'text',
      text: 'Para explicar uma função, diga o que ela **recebe**, o que **faz** e o que **devuelve**.',
    },
    {
      type: 'examples',
      items: [
        { es: 'La función **recibe** un arreglo de usuarios y **devuelve** solo los activos.', pt: 'A função recebe um array de usuários e retorna só os ativos.' },
        { es: '**Recorre** el arreglo y, si un usuario es **nulo**, lo ignora.', pt: 'Percorre o array e, se um usuário é null, ignora.' },
        { es: 'Si la lista está **vacía**, **lanza** una excepción.', pt: 'Se a lista está vazia, lança uma exceção.' },
      ],
    },
    {
      type: 'note',
      tone: 'tip',
      text: 'Posições: el **primer** elemento, el **último**, la **posición** cero.',
    },
  ],
  quiz: {
    questions: [
      {
        prompt: 'Salvei o arquivo.',
        options: ['Apagué el archivo.', 'Guardé el archivo.', 'Borré el archivo.'],
        answer: 1,
        explanation: 'Salvar um arquivo é **guardar**. Borrar é deletar e apagar é desligar.',
      },
      {
        prompt: 'Vou rodar os testes.',
        options: ['Voy a correr los tests.', 'Voy a rodar los tests.', 'Voy a borrar los tests.'],
        answer: 0,
        explanation: 'Rodar é **correr** (ou ejecutar).',
      },
      {
        prompt: 'La función ___ un booleano: true o false.',
        options: ['recorre', 'lanza', 'devuelve'],
        answer: 2,
        explanation: 'Retornar é **devolver**.',
      },
      {
        prompt: 'El arreglo está ___, no tiene elementos.',
        options: ['lleno', 'vacío', 'largo'],
        answer: 1,
        explanation: 'Sem elementos: **vacío**.',
      },
      {
        prompt: 'Adicionei um elemento ao array.',
        options: ['Agregué un elemento al array.', 'Agregué un elemento a el array.', 'Quité un elemento al array.'],
        answer: 0,
        explanation: 'Adicionar é **agregar**, e a + el = **al**.',
      },
    ],
  },
}
