import type { Section } from '../types'

export const historiaDemo: Section = {
  slug: 'la-demo-de-lucas',
  title: 'Lectura: la demo de Lucas',
  summary: 'Seis meses depois de apagar a base de dados, Lucas apresenta para a empresa inteira. Passe o mouse (ou toque) nos trechos marcados para ver a regra.',
  blocks: [
    {
      type: 'reading',
      title: 'La demo de Lucas',
      audio: 'audio/la-demo-de-lucas.wav',
      paragraphs: [
        'Seis meses después del día que borró la base de datos, Lucas presenta una demo para toda la empresa. «[[Les voy a mostrar|abrir a demo]] el nuevo sistema de correos», dice. Hasta ahora, los correos llegan con una hora de retraso.',
        '«[[El sistema tiene|descrever as partes]] tres partes: la API, una [[cola|cola = fila]] y un servicio que manda los correos. [[La ventaja es que|comparar opções]], si ese servicio se cae, la cola guarda los mensajes y no se pierde nada».',
        'Martín, el arquitecto, levanta la mano: «[[Entiendo tu punto, pero|discordar com educação]] una cola es otro servicio que mantener». Lucas no se pone nervioso: «[[Estoy de acuerdo en parte|concordar em parte]]. Es más complejo, pero no perdemos correos. [[Creo que|opinar: creo que]] vale la pena: el mes pasado perdimos dos mil». Martín lo piensa. «[[Me parece bien|concordar]]».',
        'Llega la demo. Lucas hace clic en «Enviar» y… nada. Treinta personas esperan. «[[Parece que|quando algo dá errado]] staging está lento», dice. Nada otra vez. «[[Esto funcionó hace cinco minutos|um pouco de humor]], lo prometo». Todos se ríen.',
        'Por suerte, Lucas [[tiene un video|plano B]], por si acaso. Lo comparte: «[[Como ven|como vocês podem ver]], el correo llega en dos segundos. [[¿Alguna pregunta?|fechar com perguntas]]». Alguien de producto quiere saber cuántos correos soporta por minuto. «[[No lo sé, pero lo averiguo|não sei, mas vou descobrir]] y te aviso».',
        'Hace seis meses, Lucas escribió «apagué» cuando quiso decir «borré». Hoy explicó una arquitectura, discrepó con un arquitecto y sobrevivió a una demo rota. Todo en español.',
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
            ['el correo', 'o e-mail'],
            ['levantar la mano', 'levantar a mão'],
            ['ponerse nervioso', 'ficar nervoso'],
            ['por suerte', 'por sorte'],
            ['soportar', 'aguentar, suportar'],
            ['quiso decir', 'quis dizer'],
            ['sobrevivir', 'sobreviver'],
          ],
        },
      ],
    },
  ],
  quiz: {
    questions: [
      {
        prompt: '¿Qué problema resuelve el sistema de Lucas?',
        options: ['Los correos llegan con una hora de retraso', 'La base de datos está caída', 'Los usuarios no pueden entrar'],
        answer: 0,
        explanation: 'Até agora, os e-mails chegam com **una hora de retraso**.',
      },
      {
        prompt: '¿Qué pasa si el servicio de correos se cae?',
        options: ['Se pierden los mensajes', 'La cola guarda los mensajes', 'Lucas borra la base de datos'],
        answer: 1,
        explanation: 'Essa é **la ventaja**: a fila guarda as mensagens.',
      },
      {
        prompt: '"Entiendo tu punto, pero una cola es otro servicio que mantener." Martín está…',
        options: ['concordando totalmente', 'fazendo uma pergunta técnica', 'discordando com educação'],
        answer: 2,
        explanation: '**Entiendo tu punto, pero** + motivo: discordar com educação.',
      },
      {
        prompt: '¿Qué hace Lucas cuando la demo falla?',
        options: ['Termina la reunión', 'Muestra un video', 'Pide perdón muchas veces'],
        answer: 1,
        explanation: 'Plano B: ele tem **un video, por si acaso**.',
      },
      {
        prompt: 'Alguém pergunta algo que Lucas não sabe. O que ele responde?',
        options: ['No lo sé, pero lo averiguo y te aviso.', 'No sé, pregúntale a Martín.', 'Eso no es importante.'],
        answer: 0,
        explanation: '**No lo sé, pero lo averiguo** y te aviso.',
      },
    ],
  },
}
