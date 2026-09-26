import type { Section } from '../types'

export const historiaMvp: Section = {
  slug: 'el-mvp-de-fernanda',
  title: 'Lectura: el MVP de Fernanda',
  summary: 'Uma feature de última hora, um prazo impossível e uma dev que negocia um MVP, com as frases do módulo. Passe o mouse (ou toque) nos trechos marcados para ver a regra.',
  blocks: [
    {
      type: 'reading',
      title: 'El MVP de Fernanda',
      audio: 'audio/el-mvp-de-fernanda.wav',
      paragraphs: [
        'Es lunes. Fernanda, desarrolladora full stack, abre Slack y ve un mensaje de Carla, de producto: «Necesitamos exportar los reportes a PDF, Excel y CSV, con gráficos. Es [[urgente|prioridade]]. El cliente lo quiere para el viernes».',
        'En la daily, Fernanda cuenta: «[[Ayer terminé|ayer + pretérito]] el filtro de fechas. [[Hoy voy a|hoy + ir a]] mirar lo de los reportes». Después lee el pedido con calma. Tres formatos, gráficos, diseño nuevo… [[Calcula|estimar: calculo…]] dos semanas, como mínimo.',
        'Ella sabe que prometer y fallar es peor que avisar temprano. Le escribe a Carla: «[[Te aviso que|te aviso: para uma pessoa]] para el viernes [[no voy a llegar|não vou conseguir entregar]] con todo. El [[alcance|alcance = escopo]] es más grande de lo que parece. [[¿Qué te parece si|propor uma saída]] hablamos diez minutos?».',
        'En la llamada, Fernanda pregunta: «¿Qué necesita el cliente el viernes, de verdad?». Carla lo piensa: «Bueno… descargar los datos para una reunión». Entonces Fernanda propone un MVP: «[[Puedo entregar|propor: puedo entregar]] el CSV el jueves, sin gráficos. El PDF y el Excel [[pueden esperar al|pode ficar para depois]] próximo sprint». Carla acepta.',
        'Fernanda crea los tickets y [[le pone|estimar: le pongo X puntos]] tres puntos al CSV. El miércoles, un test [[falla|verbo de bug]]: el archivo sale roto cuando un nombre tiene ñ, como «Peña». Fernanda abre un ticket con los [[pasos para reproducir|ticket de bug]], lo arregla y [[vuelve a|volver a + infinitivo]] probar. Todo bien.',
        'El jueves, el CSV [[está listo|listo = pronto]] en producción. El viernes, el cliente descarga sus datos y Carla le escribe a Fernanda: «¡Salió perfecto, gracias!». No hizo todo. Hizo lo importante.',
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
            ['el pedido', 'o pedido, a solicitação'],
            ['lo de los reportes', 'a questão dos relatórios'],
            ['temprano', 'cedo'],
            ['la llamada', 'a call, a ligação'],
            ['descargar', 'baixar (download)'],
            ['salir roto / salir perfecto', 'sair quebrado / ficar perfeito'],
          ],
        },
      ],
    },
  ],
  quiz: {
    questions: [
      {
        prompt: '¿Qué pide Carla?',
        options: ['Exportar los reportes a PDF, Excel y CSV para el viernes', 'Arreglar el filtro de fechas', 'Una reunión con el cliente'],
        answer: 0,
        explanation: 'Carla pede exportar os relatórios em três formatos, com gráficos, **para el viernes**.',
      },
      {
        prompt: '¿Qué hace Fernanda después de estimar?',
        options: ['Trabaja todo el fin de semana', 'Avisa temprano y propone hablar con Carla', 'Empieza con el PDF'],
        answer: 1,
        explanation: 'Ela avisa cedo: **te aviso que no voy a llegar** e propõe uma conversa.',
      },
      {
        prompt: '¿Qué entrega Fernanda el jueves?',
        options: ['El PDF y el Excel', 'Todo lo que pidió Carla', 'Solo el CSV, sin gráficos'],
        answer: 2,
        explanation: 'O MVP: **solo el CSV**, sem gráficos.',
      },
      {
        prompt: '"El PDF y el Excel pueden esperar al próximo sprint." O que significa?',
        options: ['PDF e Excel já estão prontos', 'PDF e Excel ficam para o próximo sprint', 'PDF e Excel foram cancelados'],
        answer: 1,
        explanation: '**Puede esperar** = pode ficar para depois.',
      },
      {
        prompt: 'Como Fernanda avisa Carla que não vai entregar tudo na sexta?',
        options: [
          'Te aviso que para el viernes no voy a llegar con todo.',
          'Desculpa, el viernes está pronto.',
          'Todavía voy a llegar con todo.',
        ],
        answer: 0,
        explanation: '**Te aviso que** + **no voy a llegar**.',
      },
    ],
  },
}
