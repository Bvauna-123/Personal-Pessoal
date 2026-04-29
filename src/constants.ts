import { WorkoutsData } from './types';

export const WORKOUTS: WorkoutsData = {
  'A': [
      { 
          id: 'a1', 
          name: "Esteira 12'", 
          series: "Aquecimento", 
          reps: "12 min total", 
          obs: "2min Caminhada / 2min Trote", 
          icon: "footprints", 
          guide: "O objetivo é elevar a temperatura corporal e preparar as articulações. Não é para cansar excessivamente. Mantenha uma postura ereta, abdômen levemente contraído e alterne: 2 minutos de caminhada firme (velocidade 5-6) e 2 minutos de trote leve (velocidade 7-8). Repita 3x." 
      },
      { 
          id: 'a2', 
          name: "Voador Máquina (Peck Deck)", 
          series: "4", 
          reps: "10", 
          obs: "Foco na contração final", 
          icon: "user", 
          guide: "Ajuste o banco para que as manoplas fiquem na linha média do peito. Mantenha as escápulas (asas das costas) travadas no encosto o tempo todo. Ao fechar, imagine que quer encostar seus cotovelos um no outro, espremendo o peitoral por 1 segundo antes de voltar controlando a carga." 
      },
      { 
          id: 'a3', 
          name: "Supino Sentado (Máquina)", 
          series: "3", 
          reps: "8 a 12", 
          obs: "Cotovelos levemente abaixo do ombro", 
          icon: "user", 
          guide: "Estufe o peito e mantenha os ombros longe das orelhas. Ao empurrar, não estique os braços a ponto de travar o cotovelo (mantenha uma leve flexão para tensão constante). Na volta, controle o peso sentindo o peitoral alongar, sem deixar as placas baterem." 
      },
      { 
          id: 'a4', 
          name: "Supino Inclinado c/ Halteres", 
          series: "3", 
          reps: "8 a 12", 
          obs: "Cotovelos fechados em 45°", 
          icon: "dumbbell", 
          guide: "Banco a 30° ou 45°. Ao descer, não deixe os cotovelos abertos em linha reta com os ombros (formato de T), feche-os levemente apontando para o chão (formato de seta). Desça até o halter tocar a linha do ombro e suba convergindo os pesos, mas sem batê-los no topo." 
      },
      { 
          id: 'a5', 
          name: "Bike (Bicicleta)", 
          series: "Cardio", 
          reps: "5 a 10 min", 
          obs: "Recuperação Ativa", 
          icon: "bike", 
          guide: "Mantenha um ritmo moderado (RPM 60-70). O objetivo aqui é manter o fluxo sanguíneo alto para remover lactato e preparar para a próxima etapa do treino. Use carga leve a moderada." 
      },
      { 
          id: 'a6', 
          name: "Tríceps Corda", 
          series: "4", 
          reps: "8 a 12", 
          obs: "Abra a corda no final", 
          icon: "cable", 
          guide: "Postura ereta, peito aberto e joelhos semiflexionados. O segredo é a estabilidade: cole os cotovelos nas costelas e NÃO os mova. Apenas o antebraço se mexe. Ao descer tudo, 'rasgue' a corda para os lados contraindo forte o tríceps. Suba devagar até a altura do peito." 
      },
      { 
          id: 'a7', 
          name: "Tríceps Francês Unilateral", 
          series: "3", 
          reps: "8 a 12", 
          obs: "Cotovelo apontando pro teto", 
          icon: "dumbbell", 
          guide: "Pode ser feito em pé ou sentado. Eleve o braço e dobre o cotovelo levando o peso atrás da nuca. O ponto chave é o alongamento: deixe o peso descer bem para alongar o tríceps, mantendo o cotovelo apontado para cima e fechado (próximo à cabeça)." 
      },
      { 
          id: 'a8', 
          name: "Abdominal Remador", 
          series: "3", 
          reps: "25", 
          obs: "Expire todo o ar ao subir", 
          icon: "user", 
          guide: "Deitado, estenda braços e pernas. Num movimento explosivo, suba o tronco e traga os joelhos ao peito, abraçando-os. O segredo do abdômen é soltar todo o ar pela boca quando você 'espreme' a barriga. Desça controlando o corpo no colchonete." 
      },
      { 
          id: 'a9', 
          name: "Bike Final", 
          series: "Cardio", 
          reps: "5 a 10 min", 
          obs: "Volta à calma", 
          icon: "bike", 
          guide: "Pedale em ritmo leve para baixar a frequência cardíaca gradualmente e relaxar a musculatura das pernas." 
      }
  ],
  'B': [
      { 
          id: 'b1', 
          name: "Esteira 12'", 
          series: "Aquecimento", 
          reps: "12 min total", 
          obs: "2min Caminhada / 2min Trote", 
          icon: "footprints", 
          guide: "Aquecimento padrão. Use esse tempo para focar na respiração e mentalizar o treino. Aumente a intensidade do trote progressivamente a cada ciclo se sentir confortável." 
      },
      { 
          id: 'b2', 
          name: "Pulley Alto Frente", 
          series: "3", 
          reps: "8 a 12", 
          obs: "Puxe com os cotovelos", 
          icon: "cable", 
          guide: "Pegada aberta. Incline levemente o tronco para trás (apenas um pouco) e estufe o peito. O movimento começa descendo as escápulas (ombros longe da orelha). Imagine que quer enfiar os cotovelos nos bolsos de trás da calça. Puxe até a barra chegar perto do queixo/clavícula." 
      },
      { 
          id: 'b3', 
          name: "Remada Cavalinho", 
          series: "3", 
          reps: "8 a 12", 
          obs: "Coluna neutra e travada", 
          icon: "anchor", 
          guide: "Fundamental manter a coluna reta. Incline o tronco à frente. Puxe a carga em direção ao quadril (umbigo), não para o peito. Ao puxar, feche bem as costas (junte as escápulas). Alongue bem os braços na descida sem arredondar a coluna." 
      },
      { 
          id: 'b4', 
          name: "Pulldown (Polia Alta)", 
          series: "3", 
          reps: "8 a 12", 
          obs: "Braços rígidos (sem dobrar)", 
          icon: "cable", 
          guide: "Este exercício isola a dorsal. Em pé, tronco levemente inclinado à frente, braços esticados acima da cabeça. Abaixe a barra até a coxa mantendo os braços retos, usando apenas a força das costas (dorsal). Segure 1 segundo embaixo contraindo a lateral das costas." 
      },
      { 
          id: 'b5', 
          name: "Bike", 
          series: "Cardio", 
          reps: "5 a 10 min", 
          obs: "Manter aquecimento", 
          icon: "bike", 
          guide: "Pedalada moderada para manter o metabolismo acelerado antes de entrar no treino isolado de braços." 
      },
      { 
          id: 'b6', 
          name: "Rosca Martelo Barra H", 
          series: "3", 
          reps: "8 a 10", 
          obs: "Sem balançar o tronco", 
          icon: "dumbbell", 
          guide: "Pegada neutra (palmas viradas uma para a outra). Mantenha os cotovelos fixos ao lado do corpo. Suba o peso até contrair totalmente o bíceps e desça bem devagar (3 segundos na descida). Não use o impulso das costas (roubar) para subir o peso." 
      },
      { 
          id: 'b7', 
          name: "Rosca Concentrada", 
          series: "3", 
          reps: "8 a 10", 
          obs: "Isolamento total", 
          icon: "dumbbell", 
          guide: "Sente-se com as pernas afastadas. Apoie o TRÍCEPS (não o cotovelo) na parte interna da coxa. Isso impede que você roube. Faça o movimento completo, esticando quase tudo embaixo e espremendo o bíceps no topo. Foque na qualidade, não na carga." 
      },
      { 
          id: 'b8', 
          name: "Abdominal Infra na Paralela", 
          series: "3", 
          reps: "15 a 20", 
          obs: "Enrole a coluna (Quadril)", 
          icon: "arrow-up", 
          guide: "Apoie-se firmemente. O erro comum é apenas levantar as pernas. O correto é tentar levar o joelho no peito, fazendo o quadril girar para cima. É esse movimento de 'enrolar' a pélvis que contrai a parte inferior do abdômen. Desça devagar." 
      },
      { 
          id: 'b9', 
          name: "Bike Final", 
          series: "Cardio", 
          reps: "5 a 10 min", 
          obs: "Relaxamento", 
          icon: "bike", 
          guide: "Finalize o treino com uma pedalada leve." 
      }
  ],
  'C': [
      { 
          id: 'c1', 
          name: "Cadeira Extensora", 
          series: "3", 
          reps: "12", 
          obs: "Pico de contração (2 seg)", 
          icon: "server", 
          guide: "Ajuste o banco para que seu joelho fique alinhado com o eixo da máquina. Chute para cima e, quando a perna estiver totalmente esticada, SEGURE por 2 segundos contraindo a coxa com força máxima. Desça resistindo ao peso, não deixe cair." 
      },
      { 
          id: 'c2', 
          name: "Agachamento c/ Halter (Goblet)", 
          series: "4", 
          reps: "12", 
          obs: "Amplitude máxima segura", 
          icon: "dumbbell", 
          guide: "Segure o halter colado no peito. Pés na largura dos ombros, pontas levemente para fora. Agache jogando o quadril para trás e abrindo os joelhos (não deixe os joelhos entrarem). Tente descer até o cotovelo tocar perto do joelho. Mantenha o calcanhar no chão." 
      },
      { 
          id: 'c3', 
          name: "Leg Press 45°", 
          series: "4", 
          reps: "12", 
          obs: "Não estique o joelho totalmente", 
          icon: "box", 
          guide: "Pés na largura do quadril, no meio da plataforma. Desça o peso o máximo que conseguir sem tirar o bumbum do banco. Empurre com a força do calcanhar. IMPORTANTE: Pare o movimento antes de travar a perna esticada para manter a tensão na coxa e proteger a articulação." 
      },
      { 
          id: 'c4', 
          name: "Cadeira Flexora", 
          series: "3", 
          reps: "12", 
          obs: "Quadril colado no banco", 
          icon: "server", 
          guide: "Ajuste para que o rolo fique no tornozelo. Ao dobrar a perna, faça força para manter o quadril pressionado contra o banco (não deixe o bumbum levantar). Contraia forte o posterior da coxa e controle a volta (fase negativa) bem devagar." 
      },
      { 
          id: 'c5', 
          name: "Cadeira Abdutora", 
          series: "4", 
          reps: "12", 
          obs: "Tronco desencostado (opcional)", 
          icon: "users", 
          guide: "Sente-se na ponta do banco ou incline o tronco levemente para frente para focar mais no glúteo médio. Abra as pernas com força explosiva, segure 1 segundo aberto e volte resistindo à força da máquina. Não deixe os pesos baterem na volta." 
      },
      { 
          id: 'c6', 
          name: "Panturrilha Sentado", 
          series: "4", 
          reps: "12", 
          obs: "Calcanhar até o chão", 
          icon: "arrow-down", 
          guide: "A amplitude é o mais importante aqui. Desça o calcanhar o máximo possível sentindo alongar muito. Suba o máximo possível, ficando na ponta dos dedos. Faça o movimento pausado, sem usar impulso (efeito mola)." 
      },
      { 
          id: 'c7', 
          name: "Abdominal Prancha", 
          series: "3", 
          reps: "Até a falha (45s+)", 
          obs: "Abdômen de aço", 
          icon: "minus", 
          guide: "Apoie cotovelos e pontas dos pés. O corpo deve formar uma linha reta. O segredo não é só 'ficar parado', é fazer força ativa: contraia glúteos, coxas e puxe o umbigo para dentro como se quisesse encostar nas costas. Respire curto e controlado." 
      }
  ]
};
