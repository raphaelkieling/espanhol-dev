import type { Section } from '../types'

export const historiaBaseDeDatos: Section = {
  slug: 'el-dia-que-borre-la-base-de-datos',
  title: 'Lectura: el día que borré la base de datos',
  summary: 'Um dev brasileiro conta o pior dia da carreira dele, com o vocabulário do módulo. Passe o mouse (ou toque) nos trechos marcados para ver a regra.',
  blocks: [
    {
      type: 'reading',
      title: 'El día que borré la base de datos',
      audio: 'audio/el-dia-que-borre-la-base-de-datos.wav',
      paragraphs: [
        'Hola. Me llamo Lucas, soy de Brasil y [[trabajo como|cargo: trabajo como]] [[desarrollador|não "desenvolvedor"]] backend en una empresa de Ciudad de México. [[Llevo dos años|llevar + tempo]] en el equipo. Hoy les voy a contar el peor día de mi carrera.',
        'Un viernes, a las cinco de la tarde, mi líder me pidió un script para [[borrar|borrar = deletar]] los usuarios de prueba. Fácil. Escribí una función que [[recibe|recibir un parámetro]] un [[arreglo|arreglo = array]] de IDs y arma la query con esos IDs.',
        'Lo [[corrí|correr = rodar]] en producción. El problema es que el arreglo llegó [[vacío|vacío = vazio]], así que la query quedó así: «DELETE FROM users [[punto y coma|;]]». Sin WHERE. O sea, sin filtro.',
        'En dos segundos, la tabla de usuarios quedó vacía. Escribí en Slack: «Perdón, [[apagué|apagar = desligar!]] la base de datos». Mi líder [[contestó|contestar = responder]]: «Tranquilo, la [[prendemos|prender = ligar]] otra vez». Y yo: «No… la borré».',
        'Nadie dijo nada durante un [[rato|un rato = um tempinho]]. Después restauramos el backup de la noche anterior y, a las nueve, todo quedó [[listo|listo = pronto, terminado]]. Solo perdimos los usuarios nuevos de ese día.',
        'Aprendí dos cosas. Primero: antes de correr un script en producción, leo la query en voz alta, con cada coma y cada [[paréntesis|( ) = paréntesis]]. Segundo: en español, apagar no es borrar.',
      ],
    },

    {
      type: 'card',
      title: 'Palavras do texto',
      blocks: [
        {
          type: 'table',
          columns: ['Español', 'Português'],
          rows: [
            ['me pidió', 'me pediu'],
            ['armar', 'montar'],
            ['llegar', 'chegar'],
            ['quedar', 'ficar (quedó vacía = ficou vazia)'],
            ['nadie', 'ninguém'],
            ['Tranquilo.', 'Calma. / Relaxa.'],
          ],
        },
      ],
    },
  ],
  quiz: {
    questions: [
      {
        prompt: '¿Qué le pidió el líder a Lucas?',
        options: ['Un script para borrar los usuarios de prueba', 'Un backup de la base de datos', 'Una query para crear usuarios'],
        answer: 0,
        explanation: 'O líder pediu um script para **borrar** (deletar) os usuários de teste.',
      },
      {
        prompt: '¿Por qué la query borró toda la tabla?',
        options: [
          'Porque Lucas la corrió en staging',
          'Porque el arreglo llegó vacío y la query quedó sin WHERE',
          'Porque faltó un punto y coma',
        ],
        answer: 1,
        explanation: 'O array chegou **vacío**, então a query ficou sem WHERE, sem filtro.',
      },
      {
        prompt: '¿Por qué el líder contestó «la prendemos otra vez»?',
        options: [
          'Porque la base de datos no tiene backup',
          'Porque Lucas escribió «borré»',
          'Porque «apagué» significa que Lucas la desligó',
        ],
        answer: 2,
        explanation: '**Apagar** = desligar. O líder achou que bastava ligar de novo.',
      },
      {
        prompt: 'Na frase "todo quedó listo", listo significa…',
        options: ['logo, em breve', 'pronto, terminado', 'ligado'],
        answer: 1,
        explanation: '**Listo** = pronto. O "pronto" do espanhol significa logo.',
      },
      {
        prompt: 'Como Lucas deveria ter escrito "Deletei a base de dados" no Slack?',
        options: ['Borré la base de datos.', 'Apagué la base de datos.', 'Prendí la base de datos.'],
        answer: 0,
        explanation: 'Deletar é **borrar**.',
      },
    ],
  },
}
