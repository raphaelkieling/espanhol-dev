import type { Section } from '../types'

export const falsosAmigos: Section = {
  slug: 'falsos-amigos',
  title: 'Falsos amigos',
  summary: 'Palavras que parecem português mas significam outra coisa, começando pelas que causam confusão no trabalho.',
  blocks: [
    {
      type: 'card',
      blocks: [
        {
          type: 'text',
          text: 'Português e espanhol dividem muitas palavras, mas algumas enganam. Estas são as que mais aparecem no dia a dia de um time de tecnologia.',
        },
        {
          type: 'table',
          columns: ['Español', 'Significa'],
          rows: [
            ['**borrar**', 'apagar, deletar'],
            ['**apagar**', 'desligar'],
            ['**prender** / **encender**', 'ligar (um aparelho)'],
            ['**llamar**', 'ligar (telefonar)'],
            ['**listo**', 'pronto, terminado'],
            ['**pronto**', 'logo, em breve'],
            ['**un rato**', 'um tempinho'],
            ['**largo**', 'comprido, longo'],
            ['**contestar**', 'responder'],
            ['**oficina**', 'escritório'],
          ],
        },
      ],
    },

    {
      type: 'card',
      title: 'borrar × apagar',
      blocks: [
        {
          type: 'text',
          text: 'O mais perigoso da lista. Em espanhol, **borrar** é deletar e **apagar** é desligar. Trocar os dois num incidente muda tudo.',
        },
        {
          type: 'examples',
          items: [
            { es: '**Borré** la rama vieja.', pt: 'Apaguei a branch antiga.' },
            { es: '**Apagué** el servidor de staging.', pt: 'Desliguei o servidor de staging.' },
            { es: '¿Puedes **prender** la cámara?', pt: 'Pode ligar a câmera?' },
          ],
        },
        {
          type: 'note',
          tone: 'warning',
          text: '~~Apagué el archivo~~ → **Borré** el archivo. "Apagué el archivo" soa como "desliguei o arquivo".',
        },
      ],
    },

    {
      type: 'card',
      title: 'listo × pronto',
      blocks: [
        {
          type: 'text',
          text: 'O "pronto" do português é **listo**. O **pronto** do espanhol significa "logo".',
        },
        {
          type: 'examples',
          items: [
            { es: '¿Está **listo** el PR? — Sí, **listo**.', pt: 'O PR está pronto? — Sim, pronto.' },
            { es: 'Lo termino **pronto**.', pt: 'Termino logo.' },
          ],
        },
        {
          type: 'note',
          tone: 'warning',
          text: '~~El deploy está pronto~~ → El deploy está **listo**.',
        },
      ],
    },

    {
      type: 'card',
      title: 'acordar, acordarse, despertarse',
      blocks: [
        {
          type: 'table',
          columns: ['Español', 'Significa', 'Exemplo'],
          rows: [
            ['**acordar**', 'combinar', '**Acordamos** desplegar el lunes.'],
            ['**acordarse de**', 'lembrar', '¿**Te acuerdas de** la contraseña?'],
            ['**despertarse**', 'acordar (do sono)', 'Hoy **me desperté** tarde.'],
          ],
        },
      ],
    },

    {
      type: 'card',
      title: 'Fora do trabalho',
      blocks: [
        {
          type: 'table',
          columns: ['Español', 'Significa', 'O que você quis dizer'],
          rows: [
            ['**embarazada**', 'grávida', 'envergonhada = **avergonzada**'],
            ['**exquisito**', 'delicioso', 'esquisito = **raro**'],
            ['**presunto**', 'suposto', 'presunto = **jamón**'],
          ],
        },
      ],
    },
  ],
  quiz: {
    questions: [
      {
        prompt: 'Deletei a branch antiga.',
        options: ['Apagué la rama vieja.', 'Borré la rama vieja.', 'Desligué la rama vieja.'],
        answer: 1,
        explanation: 'Deletar é **borrar**. Apagar significa desligar.',
      },
      {
        prompt: '¿Está ___ el PR? Quiero revisarlo.',
        options: ['listo', 'pronto', 'largo'],
        answer: 0,
        explanation: 'O "pronto" do português é **listo**.',
      },
      {
        prompt: '"Te llamo en un rato." O que significa?',
        options: ['Te ligo daqui a pouco.', 'Te ligo amanhã.', 'Te respondo por escrito.'],
        answer: 0,
        explanation: '**Llamar** = ligar e **un rato** = um tempinho.',
      },
      {
        prompt: 'Combinamos de fazer o deploy na segunda.',
        options: [
          'Nos acordamos hacer el deploy el lunes.',
          'Despertamos hacer el deploy el lunes.',
          'Acordamos hacer el deploy el lunes.',
        ],
        answer: 2,
        explanation: '**Acordar** = combinar. **Acordarse** é lembrar.',
      },
      {
        prompt: 'Antes de sair, desligue o monitor.',
        options: [
          'Antes de salir, borra el monitor.',
          'Antes de salir, apaga el monitor.',
          'Antes de salir, prende el monitor.',
        ],
        answer: 1,
        explanation: 'Desligar é **apagar**. Prender é ligar.',
      },
    ],
  },
}
