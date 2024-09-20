function displayPersonalityResult(scores) {
    const explanations = {
        "Inflamável": "🔥Você tem uma personalidade altamente reativa, 'inflamando' em situações de estresse. Prepare-se para perder a paciência com facilidade.",
        "Explosivo": "💥Você tem uma personalidade imprevisível e intensa, explodindo em reações desproporcionais quando menos se espera.",
        "Tóxico": "☠️Você tem comportamentos prejudiciais, drenando a energia emocional dos outros e deixando um rastro de negatividade.",
        "Irritante": "😡Você é aquele tipo de pessoa que sempre consegue irritar os outros, mesmo sem ser intencional. Constantemente provoca desconforto.",
        "Perigoso quando molhado": "💧Você é tranquilo, até que certas situações emocionais o transformam em alguém destrutivo. Tenha cuidado com seu humor variável.",
        "Corrosivo": "🧪Sua personalidade crítica corrói relacionamentos lentamente, minando as pessoas ao seu redor com seu negativismo constante.",
        "Mutagênico": "🧬Você influencia negativamente os outros, alterando suas essências para pior após longos períodos de interação.",
        "Infeccioso": "🦠Seu carisma é contagioso, mas não sabemos se isso é uma boa coisa. As pessoas se tornam mais parecidas com você com o tempo.",
        "Orgânico Peróxido": "⚠️Você é impulsivo e volátil, provocando reações perigosas quando está com as influências erradas.",
        "Gás Tóxico": "🚫Você intoxica rapidamente o ambiente ao seu redor com comportamentos nocivos e palavras prejudiciais.",
        "Agente Oxidante": "🌬️Você intensifica o drama e provoca reações fortes, exacerbando conflitos e emoções nas pessoas ao seu redor."
    };

    const sarcasticComments = {
        "Inflamável": "Nossa, já pensou em contar até 10 antes de queimar tudo à sua volta?",
        "Explosivo": "Alguém tem um extintor por perto? Só por precaução...",
        "Tóxico": "Talvez seja hora de deixar as pessoas respirarem um pouco, não acha?",
        "Irritante": "Como você consegue ser tão consistentemente irritante? É um talento?",
        "Perigoso quando molhado": "Cuidado, pessoal! Essa pessoa fica perigosa quando molhada, ou talvez só emocionalmente molhada.",
        "Corrosivo": "Se você fosse um ácido, já teria dissolvido metade dos seus amigos.",
        "Mutagênico": "Cuidado ao se aproximar, ou você pode sair dessa experiência pior do que entrou.",
        "Infeccioso": "Você é o tipo de pessoa que transforma qualquer reunião em um 'evento contagiante'.",
        "Orgânico Peróxido": "Misturar-se com você é como brincar com fogo – emocionante, mas potencialmente desastroso.",
        "Gás Tóxico": "Você chega e, de repente, todo mundo precisa de uma máscara de proteção.",
        "Agente Oxidante": "Conflitos simples ao seu redor se transformam em verdadeiras tempestades em copos d'água. Parabéns!"
    };

    // Filtrar as personalidades mais altas
    const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const topScores = sortedScores.filter(score => score[1] > 0);
    
    if (topScores.length === 0) {
        // Se nenhuma pontuação for maior que 0
        return "Você é uma verdadeira joia... ou está só escondendo suas toxicidades?";
    }

    const topPersonalities = topScores.filter(score => score[1] === topScores[0][1]);

    // Se houver mais de duas personalidades empatadas no pódio com pontuação > 2
    if (topPersonalities.length > 2 && topPersonalities[0][1] > 2) {
        return "Parabéns! Você alcançou o status de Super Tóxico. Bem, pelo menos você é consistente.";
    }

    // Montar o texto de resultado
    let resultText = "As suas personalidades mais presentes são:\n";
    
    topPersonalities.slice(0, 2).forEach(([personality]) => {
        resultText += `${personality}: ${explanations[personality]}\n`;
        resultText += `Comentário sarcástico: ${sarcasticComments[personality]}\n\n`;
    });

    return resultText;
}
