# Memória Descritiva

No meu quadro Mondrian, decidi fazer com que uma das linhas tremesse. Inicialmente até pus várias a tremer, porque ainda estava a tentar perceber como esta função funcionava, mas entretanto afinei o código e deixei apenas uma.

Para que a linha pudesse tremer, tive primeiro de apagar a função noLoop(). Como essa função bloqueia o ecrã numa imagem estática, ao tirá-la o código passa a correr numa animação contínua. Também adicionei o frameRate() para conseguir controlar a velocidade (os frames por segundo), garantindo que o movimento não ficava rápido demais.

Para o efeito em si, criei o comando let shakeY = random(-2, 1.5). Escolhi valores pequenos para a linha tremer de forma cuidadosa e contida. Se colocasse, por exemplo, um random(-50, 50), ia causar a tal destruição da composição, que era exatamente o que não se pretendia. Assim, com valores pequenos, foi só ir à parte de baixo do código e somar o shakeY às coordenadas da linha horizontal para conseguir o efeito de tremor.

O motivo da escolha deste elemento foi porque de certa forma dava vida ao mondrian e também porque tinha curiosidade como isso poderia funcionar no quadro.