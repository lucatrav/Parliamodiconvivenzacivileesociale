document.addEventListener('DOMContentLoaded', () => {
    // --- 1. LEGGI I PARAMETRI DALL'URL ---
    const params = new URLSearchParams(window.location.search);
    const anno = params.get('anno');
    const fase = params.get('fase');

    // --- 2. STRUTTURA DATI COMPLETA E CORRETTA ---
    const datiCompleti = {
        "2017": {
            "iniziale": {
                "Ist. Palumbo (Scienze Umane-Latiano)": {
                    "Questionario 1a Parte": "grafici/2017/2017-iniziale-1-1.png",
                    "Questionario 2a Parte": "grafici/2017/2017-iniziale-1-2.png",
                    "Grafici": "grafici/2017/2017-iniziale-1-3.png",
                },
                "ISS Majorana (Scientifico Internazionale-Triennio)": {
                    "Questionario 1a Parte": "grafici/2017/2017-iniziale-2-1.png",
                    "Questionario 2a Parte": "grafici/2017/2017-iniziale-2-2.png",
                    "Grafici": "grafici/2017/2017-iniziale-2-3.png",
                },
                "IISS Majorana (Scienze Applicate-Triennio)": {
                    "Questionario 1a Parte": "grafici/2017/2017-iniziale-3-1.png",
                    "Questionario 2a Parte": "grafici/2017/2017-iniziale-3-2.png",
                    "Grafici": "grafici/2017/2017-iniziale-3-3.png",

                },
                "IPSIA Ferraris (Elettronica)": {
                    "Questionario 1a Parte": "grafici/2017/2017-iniziale-4-1.png",
                    "Questionario 2a Parte": "grafici/2017/2017-iniziale-4-2.png",
                    "Grafici": "grafici/2017/2017-iniziale-4-3.png",
                },
                "IPSIA Ferraris (Meccanica)": {
                    "Questionario 1a Parte": "grafici/2017/2017-iniziale-5-1.png",
                    "Questionario 2a Parte": "grafici/2017/2017-iniziale-5-2.png",
                    "Grafici": "grafici/2017/2017-iniziale-5-3.png",
                },
                "Ist.Majorana (Tecnico Industriale 2^ tranche)": {
                    "Questionario 1a Parte": "grafici/2017/2017-iniziale-6-1.png",
                    "Questionario 2a Parte": "grafici/2017/2017-iniziale-6-2.png",
                    "Grafici": "grafici/2017/2017-iniziale-6-3.png",
                },
                "Ist. De Marco - Valzani":{
                    "Questionario 1a Parte": "grafici/2017/2017-iniziale-7-1.png",
                    "Questionario 2a Parte": "grafici/2017/2017-iniziale-7-2.png",
                    "Grafici": "grafici/2017/2017-iniziale-7-3.png",
                },
                "Ist. Majorana (Scientifico Internazionale)":{
                    "Questionario 1a Parte": "grafici/2017/2017-iniziale-8-1.png",
                    "Questionario 2a Parte": "grafici/2017/2017-iniziale-8-2.png",
                    "Grafici": "grafici/2017/2017-iniziale-8-3.png",
                },
                "Ist. Majorana (Tecnico Industriale)":{
                    "Questionario 1a Parte": "grafici/2017/2017-iniziale-9-1.png",
                    "Questionario 2a Parte": "grafici/2017/2017-iniziale-9-2.png",
                    "Grafici": "grafici/2017/2017-iniziale-9-3.png",
                },
                "Ist. Majorana (Scientifico)":{
                    "Questionario 1a Parte": "grafici/2017/2017-iniziale-10-1.png",
                    "Questionario 2a Parte": "grafici/2017/2017-iniziale-10-2.png",
                    "Grafici": "grafici/2017/2017-iniziale-10-3.png",
                },
                "Ist. Palumbo (Economico Sociale)": {
                    "Questionario 1a Parte": "grafici/2017/2017-iniziale-11-1.png",
                    "Questionario 2a Parte": "grafici/2017/2017-iniziale-11-2.png",
                    "Grafici": "grafici/2017/2017-iniziale-11-3.png",
                },
                "Ist. Palumbo (Scienze Umane)": {
                    "Questionario 1a Parte": "grafici/2017/2017-iniziale-12-1.png",
                    "Questionario 2a Parte": "grafici/2017/2017-iniziale-12-2.png",
                    "Grafici": "grafici/2017/2017-iniziale-12-3.png",
                }
            },
            "finale": {
                "Ist. Palumbo (Scienze Umane-Latiano)": {
                    "Questionario 1a Parte": "grafici/2017/2017-finale-1-1.png",
                    "Questionario 2a Parte": "grafici/2017/2017-finale-1-2.png",
                    "Grafici": "grafici/2017/2017-finale-1-3.png",
                },
                "ISS Majorana (Scientifico Internazionale-Triennio)": {
                    "Questionario 1a Parte": "grafici/2017/2017-finale-2-1.png",
                    "Questionario 2a Parte": "grafici/2017/2017-finale-2-2.png",
                    "Grafici": "grafici/2017/2017-finale-2-3.png",
                },
                "IISS Majorana (Scienze Applicate-Triennio)": {
                    "Questionario 1a Parte": "grafici/2017/2017-finale-3-1.png",
                    "Questionario 2a Parte": "grafici/2017/2017-finale-3-2.png",
                    "Grafici": "grafici/2017/2017-finale-3-3.png",

                },
                "IPSIA Ferraris (Elettronica)": {
                    "Questionario 1a Parte": "grafici/2017/2017-finale-4-1.png",
                    "Questionario 2a Parte": "grafici/2017/2017-finale-4-2.png",
                    "Grafici": "grafici/2017/2017-finale-4-3.png",
                },
                "IPSIA Ferraris (Meccanica)": {
                    "Questionario 1a Parte": "grafici/2017/2017-finale-5-1.png",
                    "Questionario 2a Parte": "grafici/2017/2017-finale-5-2.png",
                    "Grafici": "grafici/2017/2017-finale-5-3.png",
                },
                "Ist.Majorana (Tecnico Industriale 2^ tranche)": {
                    "Questionario 1a Parte": "grafici/2017/2017-finale-6-1.png",
                    "Questionario 2a Parte": "grafici/2017/2017-finale-6-2.png",
                    "Grafici": "grafici/2017/2017-finale-6-3.png",
                },
                "Ist. De Marco - Valzani":{
                    "Questionario 1a Parte": "grafici/2017/2017-finale-7-1.png",
                    "Questionario 2a Parte": "grafici/2017/2017-finale-7-2.png",
                    "Grafici": "grafici/2017/2017-finale-7-3.png",
                },
                "Ist. Majorana (Scientifico Internazionale)":{
                    "Questionario 1a Parte": "grafici/2017/2017-finale-8-1.png",
                    "Questionario 2a Parte": "grafici/2017/2017-finale-8-2.png",
                    "Grafici": "grafici/2017/2017-finale-8-3.png",
                },
                "Ist. Majorana (Tecnico Industriale)":{
                    "Questionario 1a Parte": "../grafici/2017/2017-finale-9-1.png",
                    "Questionario 2a Parte": "../grafici/2017/2017-finale-9-2.png",
                    "Grafici": "../grafici/2017/2017-finale-9-3.png",
                },
                "Ist. Majorana (Scientifico)":{
                    "Questionario 1a Parte": "grafici/2017/2017-finale-10-1.png",
                    "Questionario 2a Parte": "grafici/2017/2017-finale-10-2.png",
                    "Grafici": "grafici/2017/2017-finale-10-3.png",
                },
                "Ist. Palumbo (Economico Sociale)": {
                    "Questionario 1a Parte": "grafici/2017/2017-finale-11-1.png",
                    "Questionario 2a Parte": "grafici/2017/2017-finale-11-2.png",
                    "Grafici": "grafici/2017/2017-finale-11-3.png",
                },
                "Ist. Palumbo (Scienze Umane)": {
                    "Questionario 1a Parte": "grafici/2017/2017-finale-12-1.png",
                    "Questionario 2a Parte": "grafici/2017/2017-finale-12-2.png",
                    "Grafici": "grafici/2017/2017-finale-12-3.png",
                }
            }
        },
        "2018": {
            "iniziale": {
                "Ist. Majorana (Chimico Ordinario)": {
                    "Questionario 1a Parte": "grafici/2018/2018-iniziale-1-1 (Chimico Ordinario).png",
                    "Questionario 2a Parte": "grafici/2018/2018-iniziale-1-2 (Chimico Ordinario).png",
                    "Grafici": "grafici/2018/2018-iniziale-1-3 (Chimico Ordinario).png",
                },
                "Ist. Majorana (Chimico Sperimentale)": {
                    "Questionario 1a Parte": "grafici/2018/2018-iniziale-2-1 (Chimico Sperimentale).png",
                    "Questionario 2a Parte": "grafici/2018/2018-iniziale-2-2 (Chimico Sperimentale).png",
                    "Grafici": "grafici/2018/2018-iniziale-2-3 (Chimico Sperimentale).png",
                },
                "IISS Majorana (Scientifico Internazionale)": {
                    "Questionario 1a Parte": "grafici/2018/2018-iniziale-3-1 (Scientifico Internazionale).png",
                    "Questionario 2a Parte": "grafici/2018/2018-iniziale-3-2 (Scientifico Internazionale).png",
                    "Grafici": "grafici/2018/2018-iniziale-3-3 (Scientifico Internazionale).png",
                },
                "I.I.S.S. Majorana (Sanitario)": {
                    "Questionario 1a Parte": "grafici/2018/2018-iniziale-4-1 (Sanitario).png",
                    "Questionario 2a Parte": "grafici/2018/2018-iniziale-4-2 (Sanitario).png",
                    "Grafici": "grafici/2018/2018-iniziale-4-3 (Sanitario).png",
                },
                "IPSIA FERRARIS (Classi 4AI 4AM)": {
                    "Questionario 1a Parte": "grafici/2018/2018-iniziale-5-1 (4AI 4AM).png",
                    "Questionario 2a Parte": "grafici/2018/2018-iniziale-5-2 (4AI 4AM).png",
                    "Grafici": "grafici/2018/2018-iniziale-5-3 (4AI 4AM).png",
                },
                "I.I.S.S. Majorana (Scienze Applicate)": {
                    "Questionario 1a Parte": "grafici/2018/2018-iniziale-6-1 (Scienze Applicate).png",
                    "Questionario 2a Parte": "grafici/2018/2018-iniziale-6-2 (Scienze Applicate).png",
                    "Grafici": "grafici/2018/2018-iniziale-6-3 (Scienze Applicate).png",
                },
                "Casa Circondariale di Brindisi": {
                    "Questionario 1a Parte": "grafici/2018/2018-iniziale-7-1 (Casa Circondariale).png",
                    "Questionario 2a Parte": "grafici/2018/2018-iniziale-7-2 (Casa Circondariale).png",
                    "Grafici": "grafici/2018/2018-iniziale-7-3 (Casa Circondariale).png",
                },
                "IPSIA FERRARIS (Classi 4AT 4BT)": {
                    "Questionario 1a Parte": "grafici/2018/2018-iniziale-8-1 (4AT 4BT).png",
                    "Questionario 2a Parte": "grafici/2018/2018-iniziale-8-2 (4AT 4BT).png",
                    "Grafici": "grafici/2018/2018-iniziale-8-3 (4AT 4BT).png",
                },
                "Ist. FERRARIS (Ind. Elettronica)": {
                    "Questionario 1a Parte": "grafici/2018/2018-iniziale-9-1 (Elettronica).png",
                    "Questionario 2a Parte": "grafici/2018/2018-iniziale-9-2 (Elettronica).png",
                    "Grafici": "grafici/2018/2018-iniziale-9-3 (Elettronica).png",
                },
                "Ist. De Marco (Triennio)": {
                    "Questionario 1a Parte": "grafici/2018/2018-iniziale-10-1 (Triennio).png",
                    "Questionario 2a Parte": "grafici/2018/2018-iniziale-10-2 (Triennio).png",
                    "Grafici": "grafici/2018/2018-iniziale-10-3 (Triennio).png",
                },
                "Ist. Palumbo-Latiano (Scienze Umane-Biennio-Caggiano)": {
                    "Questionario 1a Parte": "grafici/2018/2018-iniziale-11-1 (Scienze Umane Caggiano).png",
                    "Questionario 2a Parte": "grafici/2018/2018-iniziale-11-2 (Scienze Umane Caggiano).png",
                    "Grafici": "grafici/2018/2018-iniziale-11-3 (Scienze Umane Caggiano).png",
                },
                "Ist. Palumbo-Latiano (Scienze Umane-Biennio-Calcagno)": {
                    "Questionario 1a Parte": "grafici/2018/2018-iniziale-12-1 (Scienze Umane Calcagno).png",
                    "Questionario 2a Parte": "grafici/2018/2018-iniziale-12-2 (Scienze Umane Calcagno).png",
                    "Grafici": "grafici/2018/2018-iniziale-12-3 (Scienze Umane Calcagno).png",
                }
            },
            "finale": {
                "Ist. Majorana (Chimico Ordinario)": {
                    "Questionario 1a Parte": "grafici/2018/2018-finale-1-1 (Chimico Ordinario).png",
                    "Questionario 2a Parte": "grafici/2018/2018-finale-1-2 (Chimico Ordinario).png",
                    "Grafici": "grafici/2018/2018-finale-1-3 (Chimico Ordinario).png",
                },
                "Ist. Majorana (Chimico Sperimentale)": {
                    "Questionario 1a Parte": "grafici/2018/2018-finale-2-1 (Chimico Sperimentale).png",
                    "Questionario 2a Parte": "grafici/2018/2018-finale-2-2 (Chimico Sperimentale).png",
                    "Grafici": "grafici/2018/2018-finale-2-3 (Chimico Sperimentale).png",
                },
                "IISS Majorana (Scientifico Internazionale)": {
                    "Questionario 1a Parte": "grafici/2018/2018-finale-3-1 (Scientifico Internazionale).png",
                    "Questionario 2a Parte": "grafici/2018/2018-finale-3-2 (Scientifico Internazionale).png",
                    "Grafici": "grafici/2018/2018-finale-3-3 (Scientifico Internazionale).png",
                },
                "I.I.S.S. Majorana (Sanitario)": {
                    "Questionario 1a Parte": "grafici/2018/2018-finale-4-1 (Sanitario).png",
                    "Questionario 2a Parte": "grafici/2018/2018-finale-4-2 (Sanitario).png",
                    "Grafici": "grafici/2018/2018-finale-4-3 (Sanitario).png",
                },
                "IPSIA FERRARIS (Classi 4AI 4AM)": {
                    "Questionario 1a Parte": "grafici/2018/2018-finale-5-1 (4AI 4AM).png",
                    "Questionario 2a Parte": "grafici/2018/2018-finale-5-2 (4AI 4AM).png",
                    "Grafici": "grafici/2018/2018-finale-5-3 (4AI 4AM).png",
                },
                "I.I.S.S. Majorana (Scienze Applicate)": {
                    "Questionario 1a Parte": "grafici/2018/2018-finale-6-1 (Scienze Applicate).png",
                    "Questionario 2a Parte": "grafici/2018/2018-finale-6-2 (Scienze Applicate).png",
                    "Grafici": "grafici/2018/2018-finale-6-3 (Scienze Applicate).png",
                },
                "Casa Circondariale di Brindisi": {
                    "Questionario 1a Parte": "grafici/2018/2018-finale-7-1 (Casa Circondariale).png",
                    "Questionario 2a Parte": "grafici/2018/2018-finale-7-2 (Casa Circondariale).png",
                    "Grafici": "grafici/2018/2018-finale-7-3 (Casa Circondariale).png",
                },
                "IPSIA FERRARIS (Classi 4AT 4BT)": {
                    "Questionario 1a Parte": "grafici/2018/2018-finale-8-1 (4AT 4BT).png",
                    "Questionario 2a Parte": "grafici/2018/2018-finale-8-2 (4AT 4BT).png",
                    "Grafici": "grafici/2018/2018-finale-8-3 (4AT 4BT).png",
                },
                "Ist. FERRARIS (Ind. Elettronica)": {
                    "Questionario 1a Parte": "../grafici/2018/2018-finale-9-1 (Elettronica).png",
                    "Questionario 2a Parte": "../grafici/2018/2018-finale-9-2 (Elettronica).png",
                    "Grafici": "../grafici/2018/2018-finale-9-3 (Elettronica).png",
                },
                "Ist. De Marco (Triennio)": {
                    "Questionario 1a Parte": "grafici/2018/2018-finale-10-1 (Triennio).png",
                    "Questionario 2a Parte": "grafici/2018/2018-finale-10-2 (Triennio).png",
                    "Grafici": "grafici/2018/2018-finale-10-3 (Triennio).png",
                },
                "Ist. Palumbo-Latiano (Scienze Umane-Biennio-Caggiano)": {
                    "Questionario 1a Parte": "grafici/2018/2018-finale-11-1 (Scienze Umane Caggiano).png",
                    "Questionario 2a Parte": "grafici/2018/2018-finale-11-2 (Scienze Umane Caggiano).png",
                    "Grafici": "grafici/2018/2018-finale-11-3 (Scienze Umane Caggiano).png",
                },
                "Ist. Palumbo-Latiano (Scienze Umane-Biennio-Calcagno)": {
                    "Questionario 1a Parte": "grafici/2018/2018-finale-12-1 (Scienze Umane Calcagno).png",
                    "Questionario 2a Parte": "grafici/2018/2018-finale-12-2 (Scienze Umane Calcagno).png",
                    "Grafici": "grafici/2018/2018-finale-12-3 (Scienze Umane Calcagno).png",
                },
            },
        },
        "2019": {
            "iniziale": {
                "I.I.S.S. Majorana (Sanitario)": {
                    "Questionario 1": "grafici/2019/2019-iniziale-1-1.png",
                    "Questionario 2": "grafici/2019/2019-iniziale-1-2.png",
                    "Grafici": "grafici/2019/2019-iniziale-1-3.png",
                },
                "I.I.S.S. Majorana (Scientifico Internazionale)": {
                    "Questionario 1": "grafici/2019/2019-iniziale-2-1.png",
                    "Questionario 2": "grafici/2019/2019-iniziale-2-2.png",
                    "Grafici": "grafici/2019/2019-iniziale-2-3.png",
                },
                "I.I.S.S. Majorana (Scienze Applicate)": {
                    "Questionario 1": "grafici/2019/2019-iniziale-3-1.png",
                    "Questionario 2": "grafici/2019/2019-iniziale-3-2.png",
                    "Grafici": "grafici/2019/2019-iniziale-3-3.png",
                },
                "Ist. Palumbo-Brindisi (Economico Sociale-Biennio)": {
                    "Questionario 1": "grafici/2019/2019-iniziale-4-1.png",
                    "Questionario 2": "grafici/2019/2019-iniziale-4-2.png",
                    "Grafici": "grafici/2019/2019-iniziale-4-3.png",
                },
            },
            "finale": {
                "I.I.S.S. Majorana (Sanitario)": {
                    "Questionario 1": "grafici/2019/2019-finale-1-1.png",
                    "Questionario 2": "grafici/2019/2019-finale-1-2.png",
                    "Grafici": "grafici/2019/2019-finale-1-3.png",
                },
                "I.I.S.S. Majorana (Scientifico Internazionale)": {
                    "Questionario 1": "grafici/2019/2019-finale-2-1.png",
                    "Questionario 2": "grafici/2019/2019-finale-2-2.png",
                    "Grafici": "grafici/2019/2019-finale-2-3.png",
                },
                "I.I.S.S. Majorana (Scienze Applicate)": {
                    "Questionario 1": "grafici/2019/2019-finale-3-1.png",
                    "Questionario 2": "grafici/2019/2019-finale-3-2.png",
                    "Grafici": "grafici/2019/2019-finale-3-3.png",
                },
                "Ist. Palumbo-Brindisi (Economico Sociale-Biennio)": {
                    "Questionario 1": "grafici/2019/2019-finale-4-1.png",
                    "Questionario 2": "grafici/2019/2019-finale-4-2.png",
                    "Grafici": "grafici/2019/2019-finale-4-3.png",
                },
            }
        },
        "2021": {
            "iniziale": {
                "I.I.S.S. Majorana (Sanitario)": {
                    "Domanda 1: Sesso":
                        "grafici/2021/Majorana sanitario iniziale 2021/1.Sesso.png",

                    "Domanda 2: Conosci le regole":
                        "grafici/2021/Majorana sanitario iniziale 2021/2.Conosci le regole.png",

                    "Domanda 3: Cosa sono le regole":
                        "grafici/2021/Majorana sanitario iniziale 2021/3.Cosa sono le regole.png",

                    "Domanda 4: A cosa servono le regole":
                        "grafici/2021/Majorana sanitario iniziale 2021/4.A cosa servono le regole.png",

                    "Domanda 5: Pensi che le regole servano solo nei luoghi comuni o anche in famiglia":
                        "grafici/2021/Majorana sanitario iniziale 2021/5.Regole luoghi comuni o famiglia.png",

                    "Domanda 6: Perche' le regole siano rispettate devono essere scritte o sono valide anche quelle del 'saper vivere'":
                        "grafici/2021/Majorana sanitario iniziale 2021/6.Perche' le regole siano rispettate.png",

                    "Domanda 7: Cosa pensi di chi trasgredisce le regole":
                        "grafici/2021/Majorana sanitario iniziale 2021/7.Cosa pensi di chi trasgredisce le regole.png",

                    "Domanda 8: Secondo te le punizioni presenti oggigiorno per chi trasgredisce le regole sono valide":
                        "grafici/2021/Majorana sanitario iniziale 2021/8.Punizioni odierne valide.png",

                    "Domanda 9: Saresti favorevole a punizioni piu' rigide del carcere come la pena di morte":
                        "grafici/2021/Majorana sanitario iniziale 2021/9.Favorevole alla pena di morte.png",

                    "Domanda 10: Ritieni il carcere come una misura unica e valida o credi che si possa risolvere diversamente la punizione dei reati minori, tipo con le misure alternative":
                        "grafici/2021/Majorana sanitario iniziale 2021/10.Carcere unica misura.png",

                    "Domanda 11: Credi nel reinserimento dei detenuti nella societa', una volta scontata la pena, e ne sei favorevole":
                        "grafici/2021/Majorana sanitario iniziale 2021/11.Cosa pensi di chi trasgredisce le regole.png",

                    "Domanda 12: Ti piacerebbe un confronto diretto con i detenuti per capire le motivazioni del loro agire e conoscerne le conseguenze ":
                        "grafici/2021/Majorana sanitario iniziale 2021/12.Confronto diretto con detenuti.png",
                },
                "Ist. Palumbo": {
                    "Domanda 1: Sesso":
                        "grafici/2021/Palumbo iniziale 2021/1.Sesso.png",

                    "Domanda 2: Conosci le regole":
                        "grafici/2021/Palumbo iniziale 2021/2.Conosci le regole.png",

                    "Domanda 3: Cosa sono le regole":
                        "grafici/2021/Palumbo iniziale 2021/3.Cosa sono le regole.png",

                    "Domanda 4: A cosa servono le regole":
                        "grafici/2021/Palumbo iniziale 2021/4.A cosa servono le regole.png",

                    "Domanda 5: Pensi che le regole servano solo nei luoghi comuni o anche in famiglia":
                        "grafici/2021/Palumbo iniziale 2021/5.Pensi che le regole servano solo nei luoghi comuni o anche in famiglia.png",

                    "Domanda 6: Perche' le regole siano rispettate devono essere scritte o sono valide anche quelle del 'saper vivere'":
                        "grafici/2021/Palumbo iniziale 2021/6.Perche' le regole siano rispettate devono essere scritte o sono valide anche quelle del saper vivere.png",

                    "Domanda 7: Cosa pensi di chi trasgredisce le regole":
                        "grafici/2021/Palumbo iniziale 2021/7.Cosa pensi di chi trasgredisce le regole.png",

                    "Domanda 8: Secondo te le punizioni presenti oggigiorno per chi trasgredisce le regole sono valide":
                        "grafici/2021/Palumbo iniziale 2021/8.Secondo te le punizioni presenti oggigiorno per chi trasgredisce le regole sono valide.png",

                    "Domanda 9: Saresti favorevole a punizioni piu' rigide del carcere come la pena di morte":
                        "grafici/2021/Palumbo iniziale 2021/9.Saresti favorevole a punizioni piu' rigide del carcere come la pena di morte.png",

                    "Domanda 10: Ritieni il carcere come una misura unica e valida o credi che si possa risolvere diversamente la punizione dei reati minori, tipo con le misure alternative":
                        "grafici/2021/Palumbo iniziale 2021/10.Ritieni il carcere come una misura unica e valida o credi che si possa risolvere diversamente la punizione dei reati minori, tipo con le misure alternative.png",

                    "Domanda 11: Credi nel reinserimento dei detenuti nella societa', una volta scontata la pena, e ne sei favorevole":
                        "grafici/2021/Palumbo iniziale 2021/11.Credi nel reinserimento dei detenuti nella societa', una volta scontata la pena, e ne sei favorevole.png",

                    "Domanda 12: Ti piacerebbe un confronto diretto con i detenuti per capire le motivazioni del loro agire e conoscerne le conseguenze ":
                        "grafici/2021/Palumbo iniziale 2021/12.Ti piacerebbe un confronto diretto con i detenuti per capire le motivazioni del loro agire e conoscerne le conseguenze.png",
                },
            },
            "finale": {
                "I.I.S.S. Majorana (Sanitario)": {
                    "Domanda 1: Sesso":
                        "grafici/2021/Majorana sanitario finale 2021/1.Sesso.png",

                    "Domanda 2: Conosci le regole":
                        "grafici/2021/Majorana sanitario finale 2021/2.Conosci le regole.png",

                    "Domanda 3: Cosa sono le regole":
                        "grafici/2021/Majorana sanitario finale 2021/3.Cosa sono le regole.png",

                    "Domanda 4: A cosa servono le regole":
                        "grafici/2021/Majorana sanitario finale 2021/4.A cosa servono le regole.png",

                    "Domanda 5: Pensi che le regole servano solo nei luoghi comuni o anche in famiglia":
                        "grafici/2021/Majorana sanitario finale 2021/5.Regole luoghi comuni o famiglia.png",

                    "Domanda 6: Perche' le regole siano rispettate devono essere scritte o sono valide anche quelle del 'saper vivere'":
                        "grafici/2021/Majorana sanitario finale 2021/6.Perche' le regole siano rispettate.png",

                    "Domanda 7: Cosa pensi di chi trasgredisce le regole":
                        "grafici/2021/Majorana sanitario finale 2021/7.Cosa pensi di chi trasgredisce le regole.png",

                    "Domanda 8: Secondo te le punizioni presenti oggigiorno per chi trasgredisce le regole sono valide":
                        "grafici/2021/Majorana sanitario finale 2021/8.Punizioni odierne valide.png",

                    "Domanda 9: Saresti favorevole a punizioni piu' rigide del carcere come la pena di morte":
                        "grafici/2021/Majorana sanitario finale 2021/9.Favorevole alla pena di morte.png",

                    "Domanda 10: Ritieni il carcere come una misura unica e valida o credi che si possa risolvere diversamente la punizione dei reati minori, tipo con le misure alternative":
                        "grafici/2021/Majorana sanitario finale 2021/10.Carcere unica misura.png",

                    "Domanda 11: Credi nel reinserimento dei detenuti nella societa', una volta scontata la pena, e ne sei favorevole":
                        "grafici/2021/Majorana sanitario finale 2021/11.Cosa pensi di chi trasgredisce le regole.png",

                    "Domanda 12: Ti piacerebbe un confronto diretto con i detenuti per capire le motivazioni del loro agire e conoscerne le conseguenze ":
                        "grafici/2021/Majorana sanitario finale 2021/12.Confronto diretto con detenuti.png",
                },
                "Ist. Palumbo": {
                    "Domanda 1: Sesso":
                        "grafici/2021/Palumbo finale 2021/1.Sesso.png",

                    "Domanda 2: Conosci le regole":
                        "grafici/2021/Palumbo finale 2021/2.Conosci le regole.png",

                    "Domanda 3: Cosa sono le regole":
                        "grafici/2021/Palumbo finale 2021/3.Cosa sono le regole.png",

                    "Domanda 4: A cosa servono le regole":
                        "grafici/2021/Palumbo finale 2021/4.A cosa servono le regole.png",

                    "Domanda 5: Pensi che le regole servano solo nei luoghi comuni o anche in famiglia":
                        "grafici/2021/Palumbo finale 2021/5.Pensi che le regole servano solo nei luoghi comuni o anche in famiglia.png",

                    "Domanda 6: Perche' le regole siano rispettate devono essere scritte o sono valide anche quelle del 'saper vivere'":
                        "grafici/2021/Palumbo finale 2021/6.Perche' le regole siano rispettate devono essere scritte o sono valide anche quelle del saper vivere.png",

                    "Domanda 7: Cosa pensi di chi trasgredisce le regole":
                        "grafici/2021/Palumbo finale 2021/7.Cosa pensi di chi trasgredisce le regole.png",

                    "Domanda 8: Secondo te le punizioni presenti oggigiorno per chi trasgredisce le regole sono valide":
                        "grafici/2021/Palumbo finale 2021/8.Secondo te le punizioni presenti oggigiorno per chi trasgredisce le regole sono valide.png",

                    "Domanda 9: Saresti favorevole a punizioni piu' rigide del carcere come la pena di morte":
                        "grafici/2021/Palumbo finale 2021/9.Saresti favorevole a punizioni piu' rigide del carcere come la pena di morte.png",

                    "Domanda 10: Ritieni il carcere come una misura unica e valida o credi che si possa risolvere diversamente la punizione dei reati minori, tipo con le misure alternative":
                        "grafici/2021/Palumbo finale 2021/10.Ritieni il carcere come una misura unica e valida o credi che si possa risolvere diversamente la punizione dei reati minori, tipo con le misure alternative.png",

                    "Domanda 11: Credi nel reinserimento dei detenuti nella societa', una volta scontata la pena, e ne sei favorevole":
                        "grafici/2021/Palumbo finale 2021/11.Credi nel reinserimento dei detenuti nella societa', una volta scontata la pena, e ne sei favorevole.png",

                    "Domanda 12: Ti piacerebbe un confronto diretto con i detenuti per capire le motivazioni del loro agire e conoscerne le conseguenze ":
                        "grafici/2021/Palumbo finale 2021/12.Ti piacerebbe un confronto con i detenuti.png",
                },
            },
        },
        "2022": {
            "iniziale": {
                "I.I.S.S. Majorana 1 grp (Chimico)": {
                    "Domanda 1: Sesso":
                        "grafici/2022/Majorana chimico iniziale I grp 2022/1.Sesso.png",

                    "Domanda 2: Conosci le regole":
                        "grafici/2022/Majorana chimico iniziale I grp 2022/2.Conosci le regole.png",

                    "Domanda 3: Cosa sono le regole":
                        "grafici/2022/Majorana chimico iniziale I grp 2022/3.Cosa sono le regole.png",

                    "Domanda 4: A cosa servono le regole":
                        "grafici/2022/Majorana chimico iniziale I grp 2022/4.A cosa servono le regole.png",

                    "Domanda 5: Pensi che le regole servano solo nei luoghi comuni o anche in famiglia":
                        "grafici/2022/Majorana chimico iniziale I grp 2022/5.Pensi che le regole servano solo nei luoghi comuni o anche in famiglia.png",

                    "Domanda 6: Perche' le regole siano rispettate devono essere scritte o sono valide anche quelle del 'saper vivere'":
                        "grafici/2022/Majorana chimico iniziale I grp 2022/6.Perche' le regole siano rispettate devono essere scritte o sono valide anche quelle del saper vivere.png",

                    "Domanda 7: Cosa pensi di chi trasgredisce le regole":
                        "grafici/2022/Majorana chimico iniziale I grp 2022/7.Cosa pensi di chi trasgredisce le regole.png",

                    "Domanda 8: Secondo te le punizioni presenti oggigiorno per chi trasgredisce le regole sono valide":
                        "grafici/2022/Majorana chimico iniziale I grp 2022/8.Secondo te le punizioni presenti oggigiorno per chi trasgredisce le regole sono valide.png",

                    "Domanda 9: Saresti favorevole a punizioni piu' rigide del carcere come la pena di morte":
                        "grafici/2022/Majorana chimico iniziale I grp 2022/9.Saresti favorevole a punizioni piu' rigide del carcere come la pena di morte.png",

                    "Domanda 10: Ritieni il carcere come una misura unica e valida o credi che si possa risolvere diversamente la punizione dei reati minori, tipo con le misure alternative":
                        "grafici/2022/Majorana chimico iniziale I grp 2022/10.Carcere unica misura.png",

                    "Domanda 11: Credi nel reinserimento dei detenuti nella societa', una volta scontata la pena, e ne sei favorevole":
                        "grafici/2022/Majorana chimico iniziale I grp 2022/11.Credi nel reinserimento dei detenuti nella societa', una volta scontata la pena, e ne sei favorevole.png",

                    "Domanda 12: Ti piacerebbe un confronto diretto con i detenuti per capire le motivazioni del loro agire e conoscerne le conseguenze ":
                        "grafici/2022/Majorana chimico iniziale I grp 2022/12.Ti piacerebbe un confronto diretto con i detenuti per capire le motivazioni del loro agire e conoscerne le conseguenze.png",
                },
                "I.I.S.S. Majorana 2 grp (Chimico)": {
                    "Domanda 1: Sesso":
                        "grafici/2022/Majorana chimico iniziale II grp 2022/1.Sesso.png",

                    "Domanda 2: Conosci le regole":
                        "grafici/2022/Majorana chimico iniziale II grp 2022/2.Conosci le regole.png",

                    "Domanda 3: Cosa sono le regole":
                        "grafici/2022/Majorana chimico iniziale II grp 2022/3.Cosa sono le regole.png",

                    "Domanda 4: A cosa servono le regole":
                        "grafici/2022/Majorana chimico iniziale II grp 2022/4.A cosa servono le regole.png",

                    "Domanda 5: Pensi che le regole servano solo nei luoghi comuni o anche in famiglia":
                        "grafici/2022/Majorana chimico iniziale II grp 2022/5.Pensi che le regole servano solo nei luoghi comuni o anche in famiglia.png",

                    "Domanda 6: Perche' le regole siano rispettate devono essere scritte o sono valide anche quelle del 'saper vivere'":
                        "grafici/2022/Majorana chimico iniziale II grp 2022/6.Perche' le regole siano rispettate devono essere scritte o sono valide anche quelle del saper vivere.png",

                    "Domanda 7: Cosa pensi di chi trasgredisce le regole":
                        "grafici/2022/Majorana chimico iniziale II grp 2022/7.Cosa pensi di chi trasgredisce le regole.png",

                    "Domanda 8: Secondo te le punizioni presenti oggigiorno per chi trasgredisce le regole sono valide":
                        "grafici/2022/Majorana chimico iniziale II grp 2022/8.Secondo te le punizioni presenti oggigiorno per chi trasgredisce le regole sono valide.png",

                    "Domanda 9: Saresti favorevole a punizioni piu' rigide del carcere come la pena di morte":
                        "grafici/2022/Majorana chimico iniziale II grp 2022/9.Saresti favorevole a punizioni piu' rigide del carcere come la pena di morte.png",

                    "Domanda 10: Ritieni il carcere come una misura unica e valida o credi che si possa risolvere diversamente la punizione dei reati minori, tipo con le misure alternative":
                        "grafici/2022/Majorana chimico iniziale II grp 2022/10.Carcere unica misura.png",

                    "Domanda 11: Credi nel reinserimento dei detenuti nella societa', una volta scontata la pena, e ne sei favorevole":
                        "grafici/2022/Majorana chimico iniziale II grp 2022/11.Credi nel reinserimento dei detenuti nella societa', una volta scontata la pena, e ne sei favorevole.png",

                    "Domanda 12: Ti piacerebbe un confronto diretto con i detenuti per capire le motivazioni del loro agire e conoscerne le conseguenze ":
                        "grafici/2022/Majorana chimico iniziale II grp 2022/12.Ti piacerebbe un confronto diretto con i detenuti per capire le motivazioni del loro agire e conoscerne le conseguenze.png",
                },
                "I.I.S.S. Majorana (Sanitario)": {
                    "Domanda 1: Sesso":
                        "grafici/2022/Majorana sanitario iniziale 2022/1.Sesso.png",

                    "Domanda 2: Conosci le regole":
                        "grafici/2022/Majorana sanitario iniziale 2022/2.Conosci le regole.png",

                    "Domanda 3: Cosa sono le regole":
                        "grafici/2022/Majorana sanitario iniziale 2022/3.Cosa sono le regole.png",

                    "Domanda 4: A cosa servono le regole":
                        "grafici/2022/Majorana sanitario iniziale 2022/4.A cosa servono le regole.png",

                    "Domanda 5: Pensi che le regole servano solo nei luoghi comuni o anche in famiglia":
                        "grafici/2022/Majorana sanitario iniziale 2022/5.Pensi che le regole servano solo nei luoghi comuni o anche in famiglia.png",

                    "Domanda 6: Perche' le regole siano rispettate devono essere scritte o sono valide anche quelle del 'saper vivere'":
                        "grafici/2022/Majorana sanitario iniziale 2022/6.Perche' le regole siano rispettate devono essere scritte o sono valide anche quelle del saper vivere.png",

                    "Domanda 7: Cosa pensi di chi trasgredisce le regole":
                        "grafici/2022/Majorana sanitario iniziale 2022/7.Cosa pensi di chi trasgredisce le regole.png",

                    "Domanda 8: Secondo te le punizioni presenti oggigiorno per chi trasgredisce le regole sono valide":
                        "grafici/2022/Majorana sanitario iniziale 2022/8.Secondo te le punizioni presenti oggigiorno per chi trasgredisce le regole sono valide.png",

                    "Domanda 9: Saresti favorevole a punizioni piu' rigide del carcere come la pena di morte":
                        "grafici/2022/Majorana sanitario iniziale 2022/9.Saresti favorevole a punizioni piu' rigide del carcere come la pena di morte.png",

                    "Domanda 10: Ritieni il carcere come una misura unica e valida o credi che si possa risolvere diversamente la punizione dei reati minori, tipo con le misure alternative":
                        "grafici/2022/Majorana sanitario iniziale 2022/10.Carcere unica misura.png",

                    "Domanda 11: Credi nel reinserimento dei detenuti nella societa', una volta scontata la pena, e ne sei favorevole":
                        "grafici/2022/Majorana sanitario iniziale 2022/11.Credi nel reinserimento dei detenuti nella societa', una volta scontata la pena, e ne sei favorevole.png",

                    "Domanda 12: Ti piacerebbe un confronto diretto con i detenuti per capire le motivazioni del loro agire e conoscerne le conseguenze ":
                        "grafici/2022/Majorana sanitario iniziale 2022/12.Ti piacerebbe un confronto diretto con i detenuti per capire le motivazioni del loro agire e conoscerne le conseguenze.png",
                },
            },
            "finale": {
                "I.I.S.S. Majorana 1 grp (Chimico)": {
                    "Domanda 1: Sesso":
                        "grafici/2022/Majorana chimico finale I grp 2022/1.Sesso.png",

                    "Domanda 2: Conosci le regole":
                        "grafici/2022/Majorana chimico finale I grp 2022/2.Conosci le regole.png",

                    "Domanda 3: Cosa sono le regole":
                        "grafici/2022/Majorana chimico finale I grp 2022/3.Cosa sono le regole.png",

                    "Domanda 4: A cosa servono le regole":
                        "grafici/2022/Majorana chimico finale I grp 2022/4.A cosa servono le regole.png",

                    "Domanda 5: Pensi che le regole servano solo nei luoghi comuni o anche in famiglia":
                        "grafici/2022/Majorana chimico finale I grp 2022/5.Pensi che le regole servano solo nei luoghi comuni o anche in famiglia.png",

                    "Domanda 6: Perche' le regole siano rispettate devono essere scritte o sono valide anche quelle del 'saper vivere'":
                        "grafici/2022/Majorana chimico finale I grp 2022/6.Perche' le regole siano rispettate devono essere scritte o sono valide anche quelle del saper vivere.png",

                    "Domanda 7: Cosa pensi di chi trasgredisce le regole":
                        "grafici/2022/Majorana chimico finale I grp 2022/7.Cosa pensi di chi trasgredisce le regole.png",

                    "Domanda 8: Secondo te le punizioni presenti oggigiorno per chi trasgredisce le regole sono valide":
                        "grafici/2022/Majorana chimico finale I grp 2022/8.Secondo te le punizioni presenti oggigiorno per chi trasgredisce le regole sono valide.png",

                    "Domanda 9: Saresti favorevole a punizioni piu' rigide del carcere come la pena di morte":
                        "grafici/2022/Majorana chimico finale I grp 2022/9.Saresti favorevole a punizioni piu' rigide del carcere come la pena di morte.png",

                    "Domanda 10: Ritieni il carcere come una misura unica e valida o credi che si possa risolvere diversamente la punizione dei reati minori, tipo con le misure alternative":
                        "grafici/2022/Majorana chimico finale I grp 2022/10.Carcere unica misura.png",

                    "Domanda 11: Credi nel reinserimento dei detenuti nella societa', una volta scontata la pena, e ne sei favorevole":
                        "grafici/2022/Majorana chimico finale I grp 2022/11.Credi nel reinserimento dei detenuti nella societa', una volta scontata la pena, e ne sei favorevole.png",

                    "Domanda 12: Ti piacerebbe un confronto diretto con i detenuti per capire le motivazioni del loro agire e conoscerne le conseguenze ":
                        "grafici/2022/Majorana chimico finale I grp 2022/12.Ti piacerebbe un confronto diretto con i detenuti per capire le motivazioni del loro agire e conoscerne le conseguenze.png",
                },
                "I.I.S.S. Majorana 2 grp (Chimico)": {
                    "Domanda 1: Sesso":
                        "grafici/2022/Majorana chimico finale II grp 2022/1.Sesso.png",

                    "Domanda 2: Conosci le regole":
                        "grafici/2022/Majorana chimico finale II grp 2022/2.Conosci le regole.png",

                    "Domanda 3: Cosa sono le regole":
                        "grafici/2022/Majorana chimico finale II grp 2022/3.Cosa sono le regole.png",

                    "Domanda 4: A cosa servono le regole":
                        "grafici/2022/Majorana chimico finale II grp 2022/4.A cosa servono le regole.png",

                    "Domanda 5: Pensi che le regole servano solo nei luoghi comuni o anche in famiglia":
                        "grafici/2022/Majorana chimico finale II grp 2022/5.Pensi che le regole servano solo nei luoghi comuni o anche in famiglia.png",

                    "Domanda 6: Perche' le regole siano rispettate devono essere scritte o sono valide anche quelle del 'saper vivere'":
                        "grafici/2022/Majorana chimico finale II grp 2022/6.Perche' le regole siano rispettate devono essere scritte o sono valide anche quelle del saper vivere.png",

                    "Domanda 7: Cosa pensi di chi trasgredisce le regole":
                        "grafici/2022/Majorana chimico finale II grp 2022/7.Cosa pensi di chi trasgredisce le regole.png",

                    "Domanda 8: Secondo te le punizioni presenti oggigiorno per chi trasgredisce le regole sono valide":
                        "grafici/2022/Majorana chimico finale II grp 2022/8.Secondo te le punizioni presenti oggigiorno per chi trasgredisce le regole sono valide.png",

                    "Domanda 9: Saresti favorevole a punizioni piu' rigide del carcere come la pena di morte":
                        "grafici/2022/Majorana chimico finale II grp 2022/9.Saresti favorevole a punizioni piu' rigide del carcere come la pena di morte.png",

                    "Domanda 10: Ritieni il carcere come una misura unica e valida o credi che si possa risolvere diversamente la punizione dei reati minori, tipo con le misure alternative":
                        "grafici/2022/Majorana chimico finale II grp 2022/10.Carcere unica misura.png",

                    "Domanda 11: Credi nel reinserimento dei detenuti nella societa', una volta scontata la pena, e ne sei favorevole":
                        "grafici/2022/Majorana chimico finale II grp 2022/11.Credi nel reinserimento dei detenuti nella societa', una volta scontata la pena, e ne sei favorevole.png",

                    "Domanda 12: Ti piacerebbe un confronto diretto con i detenuti per capire le motivazioni del loro agire e conoscerne le conseguenze ":
                        "grafici/2022/Majorana chimico finale II grp 2022/12.Ti piacerebbe un confronto diretto con i detenuti per capire le motivazioni del loro agire e conoscerne le conseguenze.png",
                },
                "I.I.S.S. Majorana (Sanitario)": {
                    "Domanda 1: Sesso":
                        "grafici/2022/Majorana sanitario finale 2022/1.Sesso.png",

                    "Domanda 2: Conosci le regole":
                        "grafici/2022/Majorana sanitario finale 2022/2.Conosci le regole.png",

                    "Domanda 3: Cosa sono le regole":
                        "grafici/2022/Majorana sanitario finale 2022/3.Cosa sono le regole.png",

                    "Domanda 4: A cosa servono le regole":
                        "grafici/2022/Majorana sanitario finale 2022/4.A cosa servono le regole.png",

                    "Domanda 5: Pensi che le regole servano solo nei luoghi comuni o anche in famiglia":
                        "grafici/2022/Majorana sanitario finale 2022/5.Pensi che le regole servano solo nei luoghi comuni o anche in famiglia.png",

                    "Domanda 6: Perche' le regole siano rispettate devono essere scritte o sono valide anche quelle del 'saper vivere'":
                        "grafici/2022/Majorana sanitario finale 2022/6.Perche' le regole siano rispettate devono essere scritte o sono valide anche quelle del saper vivere.png",

                    "Domanda 7: Cosa pensi di chi trasgredisce le regole":
                        "grafici/2022/Majorana sanitario finale 2022/7.Cosa pensi di chi trasgredisce le regole.png",

                    "Domanda 8: Secondo te le punizioni presenti oggigiorno per chi trasgredisce le regole sono valide":
                        "grafici/2022/Majorana sanitario finale 2022/8.Secondo te le punizioni presenti oggigiorno per chi trasgredisce le regole sono valide.png",

                    "Domanda 9: Saresti favorevole a punizioni piu' rigide del carcere come la pena di morte":
                        "grafici/2022/Majorana sanitario finale 2022/9.Saresti favorevole a punizioni piu' rigide del carcere come la pena di morte.png",

                    "Domanda 10: Ritieni il carcere come una misura unica e valida o credi che si possa risolvere diversamente la punizione dei reati minori, tipo con le misure alternative":
                        "grafici/2022/Majorana sanitario finale 2022/10.Carcere unica misura.png",

                    "Domanda 11: Credi nel reinserimento dei detenuti nella societa', una volta scontata la pena, e ne sei favorevole":
                        "grafici/2022/Majorana sanitario finale 2022/11.Credi nel reinserimento dei detenuti nella societa', una volta scontata la pena, e ne sei favorevole.png",

                    "Domanda 12: Ti piacerebbe un confronto diretto con i detenuti per capire le motivazioni del loro agire e conoscerne le conseguenze ":
                        "grafici/2022/Majorana sanitario finale 2022/12.Ti piacerebbe un confronto diretto con i detenuti per capire le motivazioni del loro agire e conoscerne le conseguenze.png",
                },
            },
        },
        "2023": {
            "iniziale": {
                "I.I.S.S. Majorana (Chimico)": {
                    "Domanda 1: Sesso":
                        "grafici/2023/Majorana Chimico iniziale 2023/1.Sesso.png",

                    "Domanda 2: Conosci le regole":
                        "grafici/2023/Majorana Chimico iniziale 2023/2.Conosci le regole.png",

                    "Domanda 3: Cosa sono le regole":
                        "grafici/2023/Majorana Chimico iniziale 2023/3.Cosa sono le regole.png",

                    "Domanda 4: A cosa servono le regole":
                        "grafici/2023/Majorana Chimico iniziale 2023/4.A cosa servono le regole.png",

                    "Domanda 5: Pensi che le regole servano solo nei luoghi comuni o anche in famiglia":
                        "grafici/2023/Majorana Chimico iniziale 2023/5.Pensi che le regole servano solo nei luoghi comuni o anche in famiglia.png",

                    "Domanda 6: Perche' le regole siano rispettate devono essere scritte o sono valide anche quelle del 'saper vivere'":
                        "grafici/2023/Majorana Chimico iniziale 2023/6.Perche' le regole siano rispettate devono essere scritte o sono valide anche quelle del saper vivere.png",

                    "Domanda 7: Cosa pensi di chi trasgredisce le regole":
                        "grafici/2023/Majorana Chimico iniziale 2023/7.Cosa pensi di chi trasgredisce le regole.png",

                    "Domanda 8: Secondo te le punizioni presenti oggigiorno per chi trasgredisce le regole sono valide":
                        "grafici/2023/Majorana Chimico iniziale 2023/8.Secondo te le punizioni presenti oggigiorno per chi trasgredisce le regole sono valide.png",

                    "Domanda 9: Saresti favorevole a punizioni piu' rigide del carcere come la pena di morte":
                        "grafici/2023/Majorana Chimico iniziale 2023/9.Saresti favorevole a punizioni piu' rigide del carcere come la pena di morte.png",

                    "Domanda 10: Ritieni il carcere come una misura unica e valida o credi che si possa risolvere diversamente la punizione dei reati minori, tipo con le misure alternative":
                        "grafici/2023/Majorana Chimico iniziale 2023/10.Carcere unica misura.png",

                    "Domanda 11: Credi nel reinserimento dei detenuti nella societa', una volta scontata la pena, e ne sei favorevole":
                        "grafici/2023/Majorana Chimico iniziale 2023/11.Credi nel reinserimento dei detenuti nella societa', una volta scontata la pena, e ne sei favorevole.png",

                    "Domanda 12: Ti piacerebbe un confronto diretto con i detenuti per capire le motivazioni del loro agire e conoscerne le conseguenze ":
                        "grafici/2023/Majorana Chimico iniziale 2023/12.Ti piacerebbe un confronto diretto con i detenuti per capire le motivazioni del loro agire e conoscerne le conseguenze.png",
                },
                "I.I.S.S. Majorana (Sanitario)": {
                    "Domanda 1: Sesso":
                        "grafici/2023/Majorana sanitario iniziale 2023/1.Sesso.png",

                    "Domanda 2: Conosci le regole":
                        "grafici/2023/Majorana sanitario iniziale 2023/2.Conosci le regole.png",

                    "Domanda 3: Cosa sono le regole":
                        "grafici/2023/Majorana sanitario iniziale 2023/3.Cosa sono le regole.png",

                    "Domanda 4: A cosa servono le regole":
                        "grafici/2023/Majorana sanitario iniziale 2023/4.A cosa servono le regole.png",

                    "Domanda 5: Pensi che le regole servano solo nei luoghi comuni o anche in famiglia":
                        "grafici/2023/Majorana sanitario iniziale 2023/5.Pensi che le regole servano solo nei luoghi comuni o anche in famiglia.png",

                    "Domanda 6: Perche' le regole siano rispettate devono essere scritte o sono valide anche quelle del 'saper vivere'":
                        "grafici/2023/Majorana sanitario iniziale 2023/6.Perche' le regole siano rispettate devono essere scritte o sono valide anche quelle del saper vivere.png",

                    "Domanda 7: Cosa pensi di chi trasgredisce le regole":
                        "grafici/2023/Majorana sanitario iniziale 2023/7.Cosa pensi di chi trasgredisce le regole.png",

                    "Domanda 8: Secondo te le punizioni presenti oggigiorno per chi trasgredisce le regole sono valide":
                        "grafici/2023/Majorana sanitario iniziale 2023/8.Secondo te le punizioni presenti oggigiorno per chi trasgredisce le regole sono valide.png",

                    "Domanda 9: Saresti favorevole a punizioni piu' rigide del carcere come la pena di morte":
                        "grafici/2023/Majorana sanitario iniziale 2023/9.Saresti favorevole a punizioni piu' rigide del carcere come la pena di morte.png",

                    "Domanda 10: Ritieni il carcere come una misura unica e valida o credi che si possa risolvere diversamente la punizione dei reati minori, tipo con le misure alternative":
                        "grafici/2023/Majorana sanitario iniziale 2023/10.Carcere unica misura.png",

                    "Domanda 11: Credi nel reinserimento dei detenuti nella societa', una volta scontata la pena, e ne sei favorevole":
                        "grafici/2023/Majorana sanitario iniziale 2023/11.Credi nel reinserimento dei detenuti nella societa', una volta scontata la pena, e ne sei favorevole.png",

                    "Domanda 12: Ti piacerebbe un confronto diretto con i detenuti per capire le motivazioni del loro agire e conoscerne le conseguenze ":
                        "grafici/2023/Majorana sanitario iniziale 2023/12.Ti piacerebbe un confronto diretto con i detenuti per capire le motivazioni del loro agire e conoscerne le conseguenze.png",
                },
                "Ist. Palumbo (Economico Sociale)": {
                    "Domanda 1: Sesso":
                        "grafici/2023/Palumbo Ec.Soc. iniziale 2023/1.Sesso.png",

                    "Domanda 2: Conosci le regole":
                        "grafici/2023/Palumbo Ec.Soc. iniziale 2023/2.Conosci le regole.png",

                    "Domanda 3: Cosa sono le regole":
                        "grafici/2023/Palumbo Ec.Soc. iniziale 2023/3.Cosa sono le regole.png",

                    "Domanda 4: A cosa servono le regole":
                        "grafici/2023/Palumbo Ec.Soc. iniziale 2023/4.A cosa servono le regole.png",

                    "Domanda 5: Pensi che le regole servano solo nei luoghi comuni o anche in famiglia":
                        "grafici/2023/Palumbo Ec.Soc. iniziale 2023/5.Pensi che le regole servano solo nei luoghi comuni o anche in famiglia.png",

                    "Domanda 6: Perche' le regole siano rispettate devono essere scritte o sono valide anche quelle del 'saper vivere'":
                        "grafici/2023/Palumbo Ec.Soc. iniziale 2023/6.Perche' le regole siano rispettate devono essere scritte o sono valide anche quelle del saper vivere.png",

                    "Domanda 7: Cosa pensi di chi trasgredisce le regole":
                        "grafici/2023/Palumbo Ec.Soc. iniziale 2023/7.Cosa pensi di chi trasgredisce le regole.png",

                    "Domanda 8: Secondo te le punizioni presenti oggigiorno per chi trasgredisce le regole sono valide":
                        "grafici/2023/Palumbo Ec.Soc. iniziale 2023/8.Secondo te le punizioni presenti oggigiorno per chi trasgredisce le regole sono valide.png",

                    "Domanda 9: Saresti favorevole a punizioni piu' rigide del carcere come la pena di morte":
                        "grafici/2023/Palumbo Ec.Soc. iniziale 2023/9.Saresti favorevole a punizioni piu' rigide del carcere come la pena di morte.png",

                    "Domanda 10: Ritieni il carcere come una misura unica e valida o credi che si possa risolvere diversamente la punizione dei reati minori, tipo con le misure alternative":
                        "grafici/2023/Palumbo Ec.Soc. iniziale 2023/10.Carcere unica misura.png",

                    "Domanda 11: Credi nel reinserimento dei detenuti nella societa', una volta scontata la pena, e ne sei favorevole":
                        "grafici/2023/Palumbo Ec.Soc. iniziale 2023/11.Ti piacerebbe un confronto con i detenuti.png",

                    "Domanda 12: Ti piacerebbe un confronto diretto con i detenuti per capire le motivazioni del loro agire e conoscerne le conseguenze ":
                        "grafici/2023/Palumbo Ec.Soc. iniziale 2023/12.Ti piacerebbe un confronto con i detenuti.png",
                },
                "Ist. Palumbo (Linguistico)": {
                    "Domanda 1: Sesso":
                        "grafici/2023/Palumbo liceo linguistico iniziale I grp 2023/1.Sesso.png",

                    "Domanda 2: Conosci le regole":
                        "grafici/2023/Palumbo liceo linguistico iniziale I grp 2023/2.Conosci le regole.png",

                    "Domanda 3: Cosa sono le regole":
                        "grafici/2023/Palumbo liceo linguistico iniziale I grp 2023/3.Cosa sono le regole.png",

                    "Domanda 4: A cosa servono le regole":
                        "grafici/2023/Palumbo liceo linguistico iniziale I grp 2023/4.A cosa servono le regole.png",

                    "Domanda 5: Pensi che le regole servano solo nei luoghi comuni o anche in famiglia":
                        "grafici/2023/Palumbo liceo linguistico iniziale I grp 2023/5.Regole luoghi comuni o famiglia.png",

                    "Domanda 6: Perche' le regole siano rispettate devono essere scritte o sono valide anche quelle del 'saper vivere'":
                        "grafici/2023/Palumbo liceo linguistico iniziale I grp 2023/6.Perche' le regole siano rispettate.png",

                    "Domanda 7: Cosa pensi di chi trasgredisce le regole":
                        "grafici/2023/Palumbo liceo linguistico iniziale I grp 2023/7.Trasgredire le regole.png",

                    "Domanda 8: Secondo te le punizioni presenti oggigiorno per chi trasgredisce le regole sono valide":
                        "grafici/2023/Palumbo liceo linguistico iniziale I grp 2023/8.Punizioni odierne valide.png",

                    "Domanda 9: Saresti favorevole a punizioni piu' rigide del carcere come la pena di morte":
                        "grafici/2023/Palumbo liceo linguistico iniziale I grp 2023/9.Favorevole alla pena di morte.png",

                    "Domanda 10: Ritieni il carcere come una misura unica e valida o credi che si possa risolvere diversamente la punizione dei reati minori, tipo con le misure alternative":
                        "grafici/2023/Palumbo liceo linguistico iniziale I grp 2023/10.Carcere unica misura.png",

                    "Domanda 11: Credi nel reinserimento dei detenuti nella societa', una volta scontata la pena, e ne sei favorevole":
                        "grafici/2023/Palumbo liceo linguistico iniziale I grp 2023/11.Reinserimento detenuti.png",

                    "Domanda 12: Ti piacerebbe un confronto diretto con i detenuti per capire le motivazioni del loro agire e conoscerne le conseguenze ":
                        "grafici/2023/Palumbo liceo linguistico iniziale I grp 2023/12.Confronto diretto con detenuti.png",
                },
            },
            "finale": {
                "I.I.S.S. Majorana (Chimico)": {
                    "Domanda 1: Sesso":
                        "grafici/2023/Majorana Chimico finale 2023/1.Sesso.png",

                    "Domanda 2: Conosci le regole":
                        "grafici/2023/Majorana Chimico finale 2023/2.Conosci le regole.png",

                    "Domanda 3: Cosa sono le regole":
                        "grafici/2023/Majorana Chimico finale 2023/3.Cosa sono le regole.png",

                    "Domanda 4: A cosa servono le regole":
                        "grafici/2023/Majorana Chimico finale 2023/4.A cosa servono le regole.png",

                    "Domanda 5: Pensi che le regole servano solo nei luoghi comuni o anche in famiglia":
                        "grafici/2023/Majorana Chimico finale 2023/5.Pensi che le regole servano solo nei luoghi comuni o anche in famiglia.png",

                    "Domanda 6: Perche' le regole siano rispettate devono essere scritte o sono valide anche quelle del 'saper vivere'":
                        "grafici/2023/Majorana Chimico finale 2023/6.Perche' le regole siano rispettate devono essere scritte o sono valide anche quelle del saper vivere.png",

                    "Domanda 7: Cosa pensi di chi trasgredisce le regole":
                        "grafici/2023/Majorana Chimico finale 2023/7.Cosa pensi di chi trasgredisce le regole.png",

                    "Domanda 8: Secondo te le punizioni presenti oggigiorno per chi trasgredisce le regole sono valide":
                        "grafici/2023/Majorana Chimico finale 2023/8.Secondo te le punizioni presenti oggigiorno per chi trasgredisce le regole sono valide.png",

                    "Domanda 9: Saresti favorevole a punizioni piu' rigide del carcere come la pena di morte":
                        "grafici/2023/Majorana Chimico finale 2023/9.Saresti favorevole a punizioni piu' rigide del carcere come la pena di morte.png",

                    "Domanda 10: Ritieni il carcere come una misura unica e valida o credi che si possa risolvere diversamente la punizione dei reati minori, tipo con le misure alternative":
                        "grafici/2023/Majorana Chimico finale 2023/10.Carcere unica misura.png",

                    "Domanda 11: Credi nel reinserimento dei detenuti nella societa', una volta scontata la pena, e ne sei favorevole":
                        "grafici/2023/Majorana Chimico finale 2023/11.Credi nel reinserimento dei detenuti nella societa', una volta scontata la pena, e ne sei favorevole.png",

                    "Domanda 12: Ti piacerebbe un confronto diretto con i detenuti per capire le motivazioni del loro agire e conoscerne le conseguenze ":
                        "grafici/2023/Majorana Chimico finale 2023/12.Ti piacerebbe un confronto diretto con i detenuti per capire le motivazioni del loro agire e conoscerne le conseguenze.png",
                },
                "I.I.S.S. Majorana (Sanitario)": {
                    "Domanda 1: Sesso":
                        "grafici/2023/Majorana sanitario finale 2023/1.Sesso.png",

                    "Domanda 2: Conosci le regole":
                        "grafici/2023/Majorana sanitario finale 2023/2.Conosci le regole.png",

                    "Domanda 3: Cosa sono le regole":
                        "grafici/2023/Majorana sanitario finale 2023/3.Cosa sono le regole.png",

                    "Domanda 4: A cosa servono le regole":
                        "grafici/2023/Majorana sanitario finale 2023/4.A cosa servono le regole.png",

                    "Domanda 5: Pensi che le regole servano solo nei luoghi comuni o anche in famiglia":
                        "grafici/2023/Majorana sanitario finale 2023/5.Pensi che le regole servano solo nei luoghi comuni o anche in famiglia.png",

                    "Domanda 6: Perche' le regole siano rispettate devono essere scritte o sono valide anche quelle del 'saper vivere'":
                        "grafici/2023/Majorana sanitario finale 2023/6.Perche' le regole siano rispettate devono essere scritte o sono valide anche quelle del saper vivere.png",

                    "Domanda 7: Cosa pensi di chi trasgredisce le regole":
                        "grafici/2023/Majorana sanitario finale 2023/7.Cosa pensi di chi trasgredisce le regole.png",

                    "Domanda 8: Secondo te le punizioni presenti oggigiorno per chi trasgredisce le regole sono valide":
                        "grafici/2023/Majorana sanitario finale 2023/8.Secondo te le punizioni presenti oggigiorno per chi trasgredisce le regole sono valide.png",

                    "Domanda 9: Saresti favorevole a punizioni piu' rigide del carcere come la pena di morte":
                        "grafici/2023/Majorana sanitario finale 2023/9.Saresti favorevole a punizioni piu' rigide del carcere come la pena di morte.png",

                    "Domanda 10: Ritieni il carcere come una misura unica e valida o credi che si possa risolvere diversamente la punizione dei reati minori, tipo con le misure alternative":
                        "grafici/2023/Majorana sanitario finale 2023/10.Carcere unica misura.png",

                    "Domanda 11: Credi nel reinserimento dei detenuti nella societa', una volta scontata la pena, e ne sei favorevole":
                        "grafici/2023/Majorana sanitario finale 2023/11.Credi nel reinserimento dei detenuti nella societa', una volta scontata la pena, e ne sei favorevole.png",

                    "Domanda 12: Ti piacerebbe un confronto diretto con i detenuti per capire le motivazioni del loro agire e conoscerne le conseguenze ":
                        "grafici/2023/Majorana sanitario finale 2023/12.Ti piacerebbe un confronto diretto con i detenuti per capire le motivazioni del loro agire e conoscerne le conseguenze.png",
                },
                "Ist. Palumbo (Economico Sociale)": {
                    "Domanda 1: Sesso":
                        "grafici/2023/Palumbo Ec.Soc. finale 2023/1.Sesso.png",

                    "Domanda 2: Conosci le regole":
                        "grafici/2023/Palumbo Ec.Soc. finale 2023/2.Conosci le regole.png",

                    "Domanda 3: Cosa sono le regole":
                        "grafici/2023/Palumbo Ec.Soc. finale 2023/3.Cosa sono le regole.png",

                    "Domanda 4: A cosa servono le regole":
                        "grafici/2023/Palumbo Ec.Soc. finale 2023/4.A cosa servono le regole.png",

                    "Domanda 5: Pensi che le regole servano solo nei luoghi comuni o anche in famiglia":
                        "grafici/2023/Palumbo Ec.Soc. finale 2023/5.Pensi che le regole servano solo nei luoghi comuni o anche in famiglia.png",

                    "Domanda 6: Perche' le regole siano rispettate devono essere scritte o sono valide anche quelle del 'saper vivere'":
                        "grafici/2023/Palumbo Ec.Soc. finale 2023/6.Perche' le regole siano rispettate devono essere scritte o sono valide anche quelle del saper vivere.png",

                    "Domanda 7: Cosa pensi di chi trasgredisce le regole":
                        "grafici/2023/Palumbo Ec.Soc. finale 2023/7.Cosa pensi di chi trasgredisce le regole.png",

                    "Domanda 8: Secondo te le punizioni presenti oggigiorno per chi trasgredisce le regole sono valide":
                        "grafici/2023/Palumbo Ec.Soc. finale 2023/8.Secondo te le punizioni presenti oggigiorno per chi trasgredisce le regole sono valide.png",

                    "Domanda 9: Saresti favorevole a punizioni piu' rigide del carcere come la pena di morte":
                        "grafici/2023/Palumbo Ec.Soc. finale 2023/9.Saresti favorevole a punizioni piu' rigide del carcere come la pena di morte.png",

                    "Domanda 10: Ritieni il carcere come una misura unica e valida o credi che si possa risolvere diversamente la punizione dei reati minori, tipo con le misure alternative":
                        "grafici/2023/Palumbo Ec.Soc. finale 2023/10.Carcere unica misura.png",

                    "Domanda 11: Credi nel reinserimento dei detenuti nella societa', una volta scontata la pena, e ne sei favorevole":
                        "grafici/2023/Palumbo Ec.Soc. finale 2023/11.Credi nel reinserimento dei detenuti nella societa', una volta scontata la pena, e ne sei favorevole.png",

                    "Domanda 12: Ti piacerebbe un confronto diretto con i detenuti per capire le motivazioni del loro agire e conoscerne le conseguenze ":
                        "grafici/2023/Palumbo Ec.Soc. finale 2023/12.Ti piacerebbe un confronto con i detenuti.png",
                },
                "Ist. Palumbo (Linguistico)": {
                    "Domanda 1: Sesso":
                        "grafici/2023/Palumbo liceo linguistico finale I grp 2023/1.Sesso.png",

                    "Domanda 2: Conosci le regole":
                        "grafici/2023/Palumbo liceo linguistico finale I grp 2023/2.Conosci le regole.png",

                    "Domanda 3: Cosa sono le regole":
                        "grafici/2023/Palumbo liceo linguistico finale I grp 2023/3.Cosa sono le regole.png",

                    "Domanda 4: A cosa servono le regole":
                        "grafici/2023/Palumbo liceo linguistico finale I grp 2023/4.A cosa servono le regole.png",

                    "Domanda 5: Pensi che le regole servano solo nei luoghi comuni o anche in famiglia":
                        "grafici/2023/Palumbo liceo linguistico finale I grp 2023/5.Regole luoghi comuni o famiglia.png",

                    "Domanda 6: Perche' le regole siano rispettate devono essere scritte o sono valide anche quelle del 'saper vivere'":
                        "grafici/2023/Palumbo liceo linguistico finale I grp 2023/6.Perche' le regole siano rispettate.png",

                    "Domanda 7: Cosa pensi di chi trasgredisce le regole":
                        "grafici/2023/Palumbo liceo linguistico finale I grp 2023/7.Trasgredire le regole.png",

                    "Domanda 8: Secondo te le punizioni presenti oggigiorno per chi trasgredisce le regole sono valide":
                        "grafici/2023/Palumbo liceo linguistico finale I grp 2023/8.Punizioni odierne valide.png",

                    "Domanda 9: Saresti favorevole a punizioni piu' rigide del carcere come la pena di morte":
                        "grafici/2023/Palumbo liceo linguistico finale I grp 2023/9.Favorevole alla pena di morte.png",

                    "Domanda 10: Ritieni il carcere come una misura unica e valida o credi che si possa risolvere diversamente la punizione dei reati minori, tipo con le misure alternative":
                        "grafici/2023/Palumbo liceo linguistico finale I grp 2023/10.Carcere unica misura.png",

                    "Domanda 11: Credi nel reinserimento dei detenuti nella societa', una volta scontata la pena, e ne sei favorevole":
                        "grafici/2023/Palumbo liceo linguistico finale I grp 2023/11.Reinserimento detenuti.png",

                    "Domanda 12: Ti piacerebbe un confronto diretto con i detenuti per capire le motivazioni del loro agire e conoscerne le conseguenze ":
                        "grafici/2023/Palumbo liceo linguistico finale I grp 2023/12.Confronto diretto con detenuti.png",
                },
            },
        },
        "2024": {
            "iniziale": {
                "I.I.S.S. Majorana (Ambientale)": {
                    "Domanda 1: Sesso":
                        "grafici/2024/Majorana ambientale iniziale 2024/1.Sesso.png",

                    "Domanda 2: Conosci le regole":
                        "grafici/2024/Majorana ambientale iniziale 2024/2.Conosci le regole.png",

                    "Domanda 3: Cosa sono le regole":
                        "grafici/2024/Majorana ambientale iniziale 2024/3.Cosa sono le regole.png",

                    "Domanda 4: A cosa servono le regole":
                        "grafici/2024/Majorana ambientale iniziale 2024/4.A cosa servono le regole.png",

                    "Domanda 5: Pensi che le regole servano solo nei luoghi comuni o anche in famiglia":
                        "grafici/2024/Majorana ambientale iniziale 2024/5.Regole luoghi comuni o famiglia.png",

                    "Domanda 6: Perche' le regole siano rispettate devono essere scritte o sono valide anche quelle del 'saper vivere'":
                        "grafici/2024/Majorana ambientale iniziale 2024/6.Perche' le regole siano rispettate.png",

                    "Domanda 7: Cosa pensi di chi trasgredisce le regole":
                        "grafici/2024/Majorana ambientale iniziale 2024/7.Trasgredire le regole.png",

                    "Domanda 8: Secondo te le punizioni presenti oggigiorno per chi trasgredisce le regole sono valide":
                        "grafici/2024/Majorana ambientale iniziale 2024/8.Punizioni odierne valide.png",

                    "Domanda 9: Saresti favorevole a punizioni piu' rigide del carcere come la pena di morte":
                        "grafici/2024/Majorana ambientale iniziale 2024/9.Favorevole alla pena di morte.png",

                    "Domanda 10: Ritieni il carcere come una misura unica e valida o credi che si possa risolvere diversamente la punizione dei reati minori, tipo con le misure alternative":
                        "grafici/2024/Majorana ambientale iniziale 2024/10.Carcere unica misura.png",

                    "Domanda 11: Credi nel reinserimento dei detenuti nella societa', una volta scontata la pena, e ne sei favorevole":
                        "grafici/2024/Majorana ambientale iniziale 2024/11.Reinserimento detenuti.png",

                    "Domanda 12: Ti piacerebbe un confronto diretto con i detenuti per capire le motivazioni del loro agire e conoscerne le conseguenze ":
                        "grafici/2024/Majorana ambientale iniziale 2024/12.Confronto diretto con detenuti.png",
                },
                "I.I.S.S. Majorana (Chimico)": {
                    "Domanda 1: Sesso":
                        "grafici/2024/Majorana chimico iniziale 2024/1.Sesso.png",

                    "Domanda 2: Conosci le regole":
                        "grafici/2024/Majorana chimico iniziale 2024/2.Conosci le regole.png",

                    "Domanda 3: Cosa sono le regole":
                        "grafici/2024/Majorana chimico iniziale 2024/3.Cosa sono le regole.png",

                    "Domanda 4: A cosa servono le regole":
                        "grafici/2024/Majorana chimico iniziale 2024/4.A cosa servono le regole.png",

                    "Domanda 5: Pensi che le regole servano solo nei luoghi comuni o anche in famiglia":
                        "grafici/2024/Majorana chimico iniziale 2024/5.Regole luoghi comuni o famiglia.png",

                    "Domanda 6: Perche' le regole siano rispettate devono essere scritte o sono valide anche quelle del 'saper vivere'":
                        "grafici/2024/Majorana chimico iniziale 2024/6.Perche' le regole siano rispettate.png",

                    "Domanda 7: Cosa pensi di chi trasgredisce le regole":
                        "grafici/2024/Majorana chimico iniziale 2024/7.Trasgredire le regole.png",

                    "Domanda 8: Secondo te le punizioni presenti oggigiorno per chi trasgredisce le regole sono valide":
                        "grafici/2024/Majorana chimico iniziale 2024/8.Punizioni odierne valide.png",

                    "Domanda 9: Saresti favorevole a punizioni piu' rigide del carcere come la pena di morte":
                        "grafici/2024/Majorana chimico iniziale 2024/9.Favorevole alla pena di morte.png",

                    "Domanda 10: Ritieni il carcere come una misura unica e valida o credi che si possa risolvere diversamente la punizione dei reati minori, tipo con le misure alternative":
                        "grafici/2024/Majorana chimico iniziale 2024/10.Carcere unica misura.png",

                    "Domanda 11: Credi nel reinserimento dei detenuti nella societa', una volta scontata la pena, e ne sei favorevole":
                        "grafici/2024/Majorana chimico iniziale 2024/11.Reinserimento detenuti.png",

                    "Domanda 12: Ti piacerebbe un confronto diretto con i detenuti per capire le motivazioni del loro agire e conoscerne le conseguenze ":
                        "grafici/2024/Majorana chimico iniziale 2024/12.Confronto diretto con detenuti.png",
                },
                "I.I.S.S. Majorana (Sanitario)": {
                    "Domanda 1: Sesso":
                        "grafici/2024/Majorana sanitario iniziale 1 grp 2024/1.Sesso.png",

                    "Domanda 2: Conosci le regole":
                        "grafici/2024/Majorana sanitario iniziale 1 grp 2024/2.Conosci le regole.png",

                    "Domanda 3: Cosa sono le regole":
                        "grafici/2024/Majorana sanitario iniziale 1 grp 2024/3.Cosa sono le regole.png",

                    "Domanda 4: A cosa servono le regole":
                        "grafici/2024/Majorana sanitario iniziale 1 grp 2024/4.A cosa servono le regole.png",

                    "Domanda 5: Pensi che le regole servano solo nei luoghi comuni o anche in famiglia":
                        "grafici/2024/Majorana sanitario iniziale 1 grp 2024/5.Regole luoghi comuni o famiglia.png",

                    "Domanda 6: Perche' le regole siano rispettate devono essere scritte o sono valide anche quelle del 'saper vivere'":
                        "grafici/2024/Majorana sanitario iniziale 1 grp 2024/6.Perche' le regole siano rispettate.png",

                    "Domanda 7: Cosa pensi di chi trasgredisce le regole":
                        "grafici/2024/Majorana sanitario iniziale 1 grp 2024/7.Trasgredire le regole.png",

                    "Domanda 8: Secondo te le punizioni presenti oggigiorno per chi trasgredisce le regole sono valide":
                        "grafici/2024/Majorana sanitario iniziale 1 grp 2024/8.Punizioni odierne valide.png",

                    "Domanda 9: Saresti favorevole a punizioni piu' rigide del carcere come la pena di morte":
                        "grafici/2024/Majorana sanitario iniziale 1 grp 2024/9.Favorevole alla pena di morte.png",

                    "Domanda 10: Ritieni il carcere come una misura unica e valida o credi che si possa risolvere diversamente la punizione dei reati minori, tipo con le misure alternative":
                        "grafici/2024/Majorana sanitario iniziale 1 grp 2024/10.Carcere unica misura.png",

                    "Domanda 11: Credi nel reinserimento dei detenuti nella societa', una volta scontata la pena, e ne sei favorevole":
                        "grafici/2024/Majorana sanitario iniziale 1 grp 2024/11.Reinserimento detenuti.png",

                    "Domanda 12: Ti piacerebbe un confronto diretto con i detenuti per capire le motivazioni del loro agire e conoscerne le conseguenze ":
                        "grafici/2024/Majorana sanitario iniziale 1 grp 2024/12.Confronto diretto con detenuti.png",
                },
                "Ist. Palumbo (Economico Sociale 1 grp)": {
                    "Domanda 1: Sesso":
                        "grafici/2024/Palumbo economico sociale iniziale 1 grp 2024/1.Sesso.png",

                    "Domanda 2: Conosci le regole":
                        "grafici/2024/Palumbo economico sociale iniziale 1 grp 2024/2.Conosci le regole.png",

                    "Domanda 3: Cosa sono le regole":
                        "grafici/2024/Palumbo economico sociale iniziale 1 grp 2024/3.Cosa sono le regole.png",

                    "Domanda 4: A cosa servono le regole":
                        "grafici/2024/Palumbo economico sociale iniziale 1 grp 2024/4.A cosa servono le regole.png",

                    "Domanda 5: Pensi che le regole servano solo nei luoghi comuni o anche in famiglia":
                        "grafici/2024/Palumbo economico sociale iniziale 1 grp 2024/5.Regole luoghi comuni o famiglia.png",

                    "Domanda 6: Perche' le regole siano rispettate devono essere scritte o sono valide anche quelle del 'saper vivere'":
                        "grafici/2024/Palumbo economico sociale iniziale 1 grp 2024/6.Perche' le regole siano rispettate.png",

                    "Domanda 7: Cosa pensi di chi trasgredisce le regole":
                        "grafici/2024/Palumbo economico sociale iniziale 1 grp 2024/7.Trasgredire le regole.png",

                    "Domanda 8: Secondo te le punizioni presenti oggigiorno per chi trasgredisce le regole sono valide":
                        "grafici/2024/Palumbo economico sociale iniziale 1 grp 2024/8.Punizioni odierne valide.png",

                    "Domanda 9: Saresti favorevole a punizioni piu' rigide del carcere come la pena di morte":
                        "grafici/2024/Palumbo economico sociale iniziale 1 grp 2024/9.Favorevole alla pena di morte.png",

                    "Domanda 10: Ritieni il carcere come una misura unica e valida o credi che si possa risolvere diversamente la punizione dei reati minori, tipo con le misure alternative":
                        "grafici/2024/Palumbo economico sociale iniziale 1 grp 2024/10.Carcere unica misura.png",

                    "Domanda 11: Credi nel reinserimento dei detenuti nella societa', una volta scontata la pena, e ne sei favorevole":
                        "grafici/2024/Palumbo economico sociale iniziale 1 grp 2024/11.Reinserimento detenuti.png",

                    "Domanda 12: Ti piacerebbe un confronto diretto con i detenuti per capire le motivazioni del loro agire e conoscerne le conseguenze ":
                        "grafici/2024/Palumbo economico sociale iniziale 1 grp 2024/12.Confronto diretto con detenuti.png",
                },
                "Ist. Palumbo (Economico Sociale 2 grp)": {
                    "Domanda 1: Sesso":
                        "grafici/2024/Palumbo economico sociale iniziale 2 grp 2024/1.Sesso.png",

                    "Domanda 2: Conosci le regole":
                        "grafici/2024/Palumbo economico sociale iniziale 2 grp 2024/2.Conosci le regole.png",

                    "Domanda 3: Cosa sono le regole":
                        "grafici/2024/Palumbo economico sociale iniziale 2 grp 2024/3.Cosa sono le regole.png",

                    "Domanda 4: A cosa servono le regole":
                        "grafici/2024/Palumbo economico sociale iniziale 2 grp 2024/4.A cosa servono le regole.png",

                    "Domanda 5: Pensi che le regole servano solo nei luoghi comuni o anche in famiglia":
                        "grafici/2024/Palumbo economico sociale iniziale 2 grp 2024/5.Regole luoghi comuni o famiglia.png",

                    "Domanda 6: Perche' le regole siano rispettate devono essere scritte o sono valide anche quelle del 'saper vivere'":
                        "grafici/2024/Palumbo economico sociale iniziale 2 grp 2024/6.Perche' le regole siano rispettate.png",

                    "Domanda 7: Cosa pensi di chi trasgredisce le regole":
                        "grafici/2024/Palumbo economico sociale iniziale 2 grp 2024/7.Trasgredire le regole.png",

                    "Domanda 8: Secondo te le punizioni presenti oggigiorno per chi trasgredisce le regole sono valide":
                        "grafici/2024/Palumbo economico sociale iniziale 2 grp 2024/8.Punizioni odierne valide.png",

                    "Domanda 9: Saresti favorevole a punizioni piu' rigide del carcere come la pena di morte":
                        "grafici/2024/Palumbo economico sociale iniziale 2 grp 2024/9.Favorevole alla pena di morte.png",

                    "Domanda 10: Ritieni il carcere come una misura unica e valida o credi che si possa risolvere diversamente la punizione dei reati minori, tipo con le misure alternative":
                        "grafici/2024/Palumbo economico sociale iniziale 2 grp 2024/10.Carcere unica misura.png",

                    "Domanda 11: Credi nel reinserimento dei detenuti nella societa', una volta scontata la pena, e ne sei favorevole":
                        "grafici/2024/Palumbo economico sociale iniziale 2 grp 2024/11.Reinserimento detenuti.png",

                    "Domanda 12: Ti piacerebbe un confronto diretto con i detenuti per capire le motivazioni del loro agire e conoscerne le conseguenze ":
                        "grafici/2024/Palumbo economico sociale iniziale 2 grp 2024/12.Confronto diretto con i detenuti.png",
                },
                "Ist. Palumbo (Linguistico 1 grp)": {
                    "Domanda 1: Sesso":
                        "grafici/2024/Palumbo liceo linguistico iniziale 1 grp 2024/1.Sesso.png",

                    "Domanda 2: Conosci le regole":
                        "grafici/2024/Palumbo liceo linguistico iniziale 1 grp 2024/2.Conosci le regole.png",

                    "Domanda 3: Cosa sono le regole":
                        "grafici/2024/Palumbo liceo linguistico iniziale 1 grp 2024/3.Cosa sono le regole.png",

                    "Domanda 4: A cosa servono le regole":
                        "grafici/2024/Palumbo liceo linguistico iniziale 1 grp 2024/4.A cosa servono le regole.png",

                    "Domanda 5: Pensi che le regole servano solo nei luoghi comuni o anche in famiglia":
                        "grafici/2024/Palumbo liceo linguistico iniziale 1 grp 2024/5.Regole luoghi comuni o famiglia.png",

                    "Domanda 6: Perche' le regole siano rispettate devono essere scritte o sono valide anche quelle del 'saper vivere'":
                        "grafici/2024/Palumbo liceo linguistico iniziale 1 grp 2024/6.Perche' le regole siano rispettate.png",

                    "Domanda 7: Cosa pensi di chi trasgredisce le regole":
                        "grafici/2024/Palumbo liceo linguistico iniziale 1 grp 2024/7.Trasgredire le regole.png",

                    "Domanda 8: Secondo te le punizioni presenti oggigiorno per chi trasgredisce le regole sono valide":
                        "grafici/2024/Palumbo liceo linguistico iniziale 1 grp 2024/8.Punizioni odierne valide.png",

                    "Domanda 9: Saresti favorevole a punizioni piu' rigide del carcere come la pena di morte":
                        "grafici/2024/Palumbo liceo linguistico iniziale 1 grp 2024/9.Favorevole alla pena di morte.png",

                    "Domanda 10: Ritieni il carcere come una misura unica e valida o credi che si possa risolvere diversamente la punizione dei reati minori, tipo con le misure alternative":
                        "grafici/2024/Palumbo liceo linguistico iniziale 1 grp 2024/10.Carcere unica misura.png",

                    "Domanda 11: Credi nel reinserimento dei detenuti nella societa', una volta scontata la pena, e ne sei favorevole":
                        "grafici/2024/Palumbo liceo linguistico iniziale 1 grp 2024/11.Reinserimento detenuti.png",

                    "Domanda 12: Ti piacerebbe un confronto diretto con i detenuti per capire le motivazioni del loro agire e conoscerne le conseguenze ":
                        "grafici/2024/Palumbo liceo linguistico iniziale 1 grp 2024/12.Confronto diretto con detenuti.png",
                },
                "Ist. Palumbo (Linguistico 2 grp)": {
                    "Domanda 1: Sesso":
                        "grafici/2024/Palumbo liceo linguistico iniziale 2 grp 2024/1.Sesso.png",

                    "Domanda 2: Conosci le regole":
                        "grafici/2024/Palumbo liceo linguistico iniziale 2 grp 2024/2.Conosci le regole.png",

                    "Domanda 3: Cosa sono le regole":
                        "grafici/2024/Palumbo liceo linguistico iniziale 2 grp 2024/3.Cosa sono le regole.png",

                    "Domanda 4: A cosa servono le regole":
                        "grafici/2024/Palumbo liceo linguistico iniziale 2 grp 2024/4.A cosa servono le regole.png",

                    "Domanda 5: Pensi che le regole servano solo nei luoghi comuni o anche in famiglia":
                        "grafici/2024/Palumbo liceo linguistico iniziale 2 grp 2024/5.Regole luoghi comuni o famiglia.png",

                    "Domanda 6: Perche' le regole siano rispettate devono essere scritte o sono valide anche quelle del 'saper vivere'":
                        "grafici/2024/Palumbo liceo linguistico iniziale 2 grp 2024/6.Perche' le regole siano rispettate.png",

                    "Domanda 7: Cosa pensi di chi trasgredisce le regole":
                        "grafici/2024/Palumbo liceo linguistico iniziale 2 grp 2024/7.Trasgredire le regole.png",

                    "Domanda 8: Secondo te le punizioni presenti oggigiorno per chi trasgredisce le regole sono valide":
                        "grafici/2024/Palumbo liceo linguistico iniziale 2 grp 2024/8.Punizioni odierne valide.png",

                    "Domanda 9: Saresti favorevole a punizioni piu' rigide del carcere come la pena di morte":
                        "grafici/2024/Palumbo liceo linguistico iniziale 2 grp 2024/9.Favorevole alla pena di morte.png",

                    "Domanda 10: Ritieni il carcere come una misura unica e valida o credi che si possa risolvere diversamente la punizione dei reati minori, tipo con le misure alternative":
                        "grafici/2024/Palumbo liceo linguistico iniziale 2 grp 2024/10.Carcere unica misura.png",

                    "Domanda 11: Credi nel reinserimento dei detenuti nella societa', una volta scontata la pena, e ne sei favorevole":
                        "grafici/2024/Palumbo liceo linguistico iniziale 2 grp 2024/11.Reinserimento detenuti.png",

                    "Domanda 12: Ti piacerebbe un confronto diretto con i detenuti per capire le motivazioni del loro agire e conoscerne le conseguenze ":
                        "grafici/2024/Palumbo liceo linguistico iniziale 2 grp 2024/12.Confronto diretto con detenuti.png",
                },
            },
            "finale": {
                "I.I.S.S. Majorana (Ambientale)": {
                    "Domanda 1: Sesso":
                        "grafici/2024/Majorana ambientale finale 2024/1.Sesso.png",

                    "Domanda 2: Conosci le regole":
                        "grafici/2024/Majorana ambientale finale 2024/2.Conosci le regole.png",

                    "Domanda 3: Cosa sono le regole":
                        "grafici/2024/Majorana ambientale finale 2024/3.Cosa sono le regole.png",

                    "Domanda 4: A cosa servono le regole":
                        "grafici/2024/Majorana ambientale finale 2024/4.A cosa servono le regole.png",

                    "Domanda 5: Pensi che le regole servano solo nei luoghi comuni o anche in famiglia":
                        "grafici/2024/Majorana ambientale finale 2024/5.Regole luoghi comuni o famiglia.png",

                    "Domanda 6: Perche' le regole siano rispettate devono essere scritte o sono valide anche quelle del 'saper vivere'":
                        "grafici/2024/Majorana ambientale finale 2024/6.Perche' le regole siano rispettate.png",

                    "Domanda 7: Cosa pensi di chi trasgredisce le regole":
                        "grafici/2024/Majorana ambientale finale 2024/7.Trasgredire le regole.png",

                    "Domanda 8: Secondo te le punizioni presenti oggigiorno per chi trasgredisce le regole sono valide":
                        "grafici/2024/Majorana ambientale finale 2024/8.Punizioni odierne valide.png",

                    "Domanda 9: Saresti favorevole a punizioni piu' rigide del carcere come la pena di morte":
                        "grafici/2024/Majorana ambientale finale 2024/9.Favorevole alla pena di morte.png",

                    "Domanda 10: Ritieni il carcere come una misura unica e valida o credi che si possa risolvere diversamente la punizione dei reati minori, tipo con le misure alternative":
                        "grafici/2024/Majorana ambientale finale 2024/10.Carcere unica misura.png",

                    "Domanda 11: Credi nel reinserimento dei detenuti nella societa', una volta scontata la pena, e ne sei favorevole":
                        "grafici/2024/Majorana ambientale finale 2024/11.Reinserimento detenuti.png",

                    "Domanda 12: Ti piacerebbe un confronto diretto con i detenuti per capire le motivazioni del loro agire e conoscerne le conseguenze ":
                        "grafici/2024/Majorana ambientale finale 2024/12.Confronto diretto con detenuti.png",
                },
                "I.I.S.S. Majorana (Chimico)": {
                    "Domanda 1: Sesso":
                        "grafici/2024/Majorana chimico finale 2024/1.Sesso.png",

                    "Domanda 2: Conosci le regole":
                        "grafici/2024/Majorana chimico finale 2024/2.Conosci le regole.png",

                    "Domanda 3: Cosa sono le regole":
                        "grafici/2024/Majorana chimico finale 2024/3.Cosa sono le regole.png",

                    "Domanda 4: A cosa servono le regole":
                        "grafici/2024/Majorana chimico finale 2024/4.A cosa servono le regole.png",

                    "Domanda 5: Pensi che le regole servano solo nei luoghi comuni o anche in famiglia":
                        "grafici/2024/Majorana chimico finale 2024/5.Regole luoghi comuni o famiglia.png",

                    "Domanda 6: Perche' le regole siano rispettate devono essere scritte o sono valide anche quelle del 'saper vivere'":
                        "grafici/2024/Majorana chimico finale 2024/6.Perche' le regole siano rispettate.png",

                    "Domanda 7: Cosa pensi di chi trasgredisce le regole":
                        "grafici/2024/Majorana chimico finale 2024/7.Trasgredire le regole.png",

                    "Domanda 8: Secondo te le punizioni presenti oggigiorno per chi trasgredisce le regole sono valide":
                        "grafici/2024/Majorana chimico finale 2024/8.Punizioni odierne valide.png",

                    "Domanda 9: Saresti favorevole a punizioni piu' rigide del carcere come la pena di morte":
                        "grafici/2024/Majorana chimico finale 2024/9.Favorevole alla pena di morte.png",

                    "Domanda 10: Ritieni il carcere come una misura unica e valida o credi che si possa risolvere diversamente la punizione dei reati minori, tipo con le misure alternative":
                        "grafici/2024/Majorana chimico finale 2024/10.Carcere unica misura.png",

                    "Domanda 11: Credi nel reinserimento dei detenuti nella societa', una volta scontata la pena, e ne sei favorevole":
                        "grafici/2024/Majorana chimico finale 2024/11.Reinserimento detenuti.png",

                    "Domanda 12: Ti piacerebbe un confronto diretto con i detenuti per capire le motivazioni del loro agire e conoscerne le conseguenze ":
                        "grafici/2024/Majorana chimico finale 2024/12.Confronto diretto con detenuti.png",
                },
                "I.I.S.S. Majorana (Sanitario)": {
                    "Domanda 1: Sesso":
                        "grafici/2024/Majorana sanitario finale 1 grp 2024/1.Sesso.png",

                    "Domanda 2: Conosci le regole":
                        "grafici/2024/Majorana sanitario finale 1 grp 2024/2.Conosci le regole.png",

                    "Domanda 3: Cosa sono le regole":
                        "grafici/2024/Majorana sanitario finale 1 grp 2024/3.Cosa sono le regole.png",

                    "Domanda 4: A cosa servono le regole":
                        "grafici/2024/Majorana sanitario finale 1 grp 2024/4.A cosa servono le regole.png",

                    "Domanda 5: Pensi che le regole servano solo nei luoghi comuni o anche in famiglia":
                        "grafici/2024/Majorana sanitario finale 1 grp 2024/5.Regole luoghi comuni o famiglia.png",

                    "Domanda 6: Perche' le regole siano rispettate devono essere scritte o sono valide anche quelle del 'saper vivere'":
                        "grafici/2024/Majorana sanitario finale 1 grp 2024/6.Perche' le regole siano rispettate.png",

                    "Domanda 7: Cosa pensi di chi trasgredisce le regole":
                        "grafici/2024/Majorana sanitario finale 1 grp 2024/7.Trasgredire le regole.png",

                    "Domanda 8: Secondo te le punizioni presenti oggigiorno per chi trasgredisce le regole sono valide":
                        "grafici/2024/Majorana sanitario finale 1 grp 2024/8.Punizioni odierne valide.png",

                    "Domanda 9: Saresti favorevole a punizioni piu' rigide del carcere come la pena di morte":
                        "grafici/2024/Majorana sanitario finale 1 grp 2024/9.Favorevole alla pena di morte.png",

                    "Domanda 10: Ritieni il carcere come una misura unica e valida o credi che si possa risolvere diversamente la punizione dei reati minori, tipo con le misure alternative":
                        "grafici/2024/Majorana sanitario finale 1 grp 2024/10.Carcere unica misura.png",

                    "Domanda 11: Credi nel reinserimento dei detenuti nella societa', una volta scontata la pena, e ne sei favorevole":
                        "grafici/2024/Majorana sanitario finale 1 grp 2024/11.Reinserimento detenuti.png",

                    "Domanda 12: Ti piacerebbe un confronto diretto con i detenuti per capire le motivazioni del loro agire e conoscerne le conseguenze ":
                        "grafici/2024/Majorana sanitario finale 1 grp 2024/12.Confronto diretto con detenuti.png",
                },
                "Ist. Palumbo (Economico Sociale 1 grp)": {
                    "Domanda 1: Sesso":
                        "grafici/2024/Palumbo economico sociale finale 1 grp 2024/1.Sesso.png",

                    "Domanda 2: Conosci le regole":
                        "grafici/2024/Palumbo economico sociale finale 1 grp 2024/2.Conosci le regole.png",

                    "Domanda 3: Cosa sono le regole":
                        "grafici/2024/Palumbo economico sociale finale 1 grp 2024/3.Cosa sono le regole.png",

                    "Domanda 4: A cosa servono le regole":
                        "grafici/2024/Palumbo economico sociale finale 1 grp 2024/4.A cosa servono le regole.png",

                    "Domanda 5: Pensi che le regole servano solo nei luoghi comuni o anche in famiglia":
                        "grafici/2024/Palumbo economico sociale finale 1 grp 2024/5.Regole luoghi comuni o famiglia.png",

                    "Domanda 6: Perche' le regole siano rispettate devono essere scritte o sono valide anche quelle del 'saper vivere'":
                        "grafici/2024/Palumbo economico sociale finale 1 grp 2024/6.Perche' le regole siano rispettate.png",

                    "Domanda 7: Cosa pensi di chi trasgredisce le regole":
                        "grafici/2024/Palumbo economico sociale finale 1 grp 2024/7.Trasgredire le regole.png",

                    "Domanda 8: Secondo te le punizioni presenti oggigiorno per chi trasgredisce le regole sono valide":
                        "grafici/2024/Palumbo economico sociale finale 1 grp 2024/8.Punizioni odierne valide.png",

                    "Domanda 9: Saresti favorevole a punizioni piu' rigide del carcere come la pena di morte":
                        "grafici/2024/Palumbo economico sociale finale 1 grp 2024/9.Favorevole alla pena di morte.png",

                    "Domanda 10: Ritieni il carcere come una misura unica e valida o credi che si possa risolvere diversamente la punizione dei reati minori, tipo con le misure alternative":
                        "grafici/2024/Palumbo economico sociale finale 1 grp 2024/10.Carcere unica misura.png",

                    "Domanda 11: Credi nel reinserimento dei detenuti nella societa', una volta scontata la pena, e ne sei favorevole":
                        "grafici/2024/Palumbo economico sociale finale 1 grp 2024/11.Reinserimento detenuti.png",

                    "Domanda 12: Ti piacerebbe un confronto diretto con i detenuti per capire le motivazioni del loro agire e conoscerne le conseguenze ":
                        "grafici/2024/Palumbo economico sociale finale 1 grp 2024/12.Confronto diretto con detenuti.png",
                },
                "Ist. Palumbo (Economico Sociale 2 grp)": {
                    "Domanda 1: Sesso":
                        "grafici/2024/Palumbo economico sociale finale 2 grp 2024/1.Sesso.png",

                    "Domanda 2: Conosci le regole":
                        "grafici/2024/Palumbo economico sociale finale 2 grp 2024/2.Conosci le regole.png",

                    "Domanda 3: Cosa sono le regole":
                        "grafici/2024/Palumbo economico sociale finale 2 grp 2024/3.Cosa sono le regole.png",

                    "Domanda 4: A cosa servono le regole":
                        "grafici/2024/Palumbo economico sociale finale 2 grp 2024/4.A cosa servono le regole.png",

                    "Domanda 5: Pensi che le regole servano solo nei luoghi comuni o anche in famiglia":
                        "grafici/2024/Palumbo economico sociale finale 2 grp 2024/5.Regole luoghi comuni o famiglia.png",

                    "Domanda 6: Perche' le regole siano rispettate devono essere scritte o sono valide anche quelle del 'saper vivere'":
                        "grafici/2024/Palumbo economico sociale finale 2 grp 2024/6.Perche' le regole siano rispettate.png",

                    "Domanda 7: Cosa pensi di chi trasgredisce le regole":
                        "grafici/2024/Palumbo economico sociale finale 2 grp 2024/7.Trasgredire le regole.png",

                    "Domanda 8: Secondo te le punizioni presenti oggigiorno per chi trasgredisce le regole sono valide":
                        "grafici/2024/Palumbo economico sociale finale 2 grp 2024/8.Punizioni odierne valide.png",

                    "Domanda 9: Saresti favorevole a punizioni piu' rigide del carcere come la pena di morte":
                        "grafici/2024/Palumbo economico sociale finale 2 grp 2024/9.Favorevole alla pena di morte.png",

                    "Domanda 10: Ritieni il carcere come una misura unica e valida o credi che si possa risolvere diversamente la punizione dei reati minori, tipo con le misure alternative":
                        "grafici/2024/Palumbo economico sociale finale 2 grp 2024/10.Carcere unica misura.png",

                    "Domanda 11: Credi nel reinserimento dei detenuti nella societa', una volta scontata la pena, e ne sei favorevole":
                        "grafici/2024/Palumbo economico sociale finale 2 grp 2024/11.Reinserimento detenuti.png",

                    "Domanda 12: Ti piacerebbe un confronto diretto con i detenuti per capire le motivazioni del loro agire e conoscerne le conseguenze ":
                        "grafici/2024/Palumbo economico sociale finale 2 grp 2024/12.Confronto diretto con detenuti.png",
                },
                "Ist. Palumbo (Linguistico 1 grp)": {
                    "Domanda 1: Sesso":
                        "grafici/2024/Palumbo liceo linguistico finale 1 grp 2024/1.Sesso.png",

                    "Domanda 2: Conosci le regole":
                        "grafici/2024/Palumbo liceo linguistico finale 1 grp 2024/2.Conosci le regole.png",

                    "Domanda 3: Cosa sono le regole":
                        "grafici/2024/Palumbo liceo linguistico finale 1 grp 2024/3.Cosa sono le regole.png",

                    "Domanda 4: A cosa servono le regole":
                        "grafici/2024/Palumbo liceo linguistico finale 1 grp 2024/4.A cosa servono le regole.png",

                    "Domanda 5: Pensi che le regole servano solo nei luoghi comuni o anche in famiglia":
                        "grafici/2024/Palumbo liceo linguistico finale 1 grp 2024/5.Regole luoghi comuni o famiglia.png",

                    "Domanda 6: Perche' le regole siano rispettate devono essere scritte o sono valide anche quelle del 'saper vivere'":
                        "grafici/2024/Palumbo liceo linguistico finale 1 grp 2024/6.Perche' le regole siano rispettate.png",

                    "Domanda 7: Cosa pensi di chi trasgredisce le regole":
                        "grafici/2024/Palumbo liceo linguistico finale 1 grp 2024/7.Trasgredire le regole.png",

                    "Domanda 8: Secondo te le punizioni presenti oggigiorno per chi trasgredisce le regole sono valide":
                        "grafici/2024/Palumbo liceo linguistico finale 1 grp 2024/8.Punizioni odierne valide.png",

                    "Domanda 9: Saresti favorevole a punizioni piu' rigide del carcere come la pena di morte":
                        "grafici/2024/Palumbo liceo linguistico finale 1 grp 2024/9.Favorevole alla pena di morte.png",

                    "Domanda 10: Ritieni il carcere come una misura unica e valida o credi che si possa risolvere diversamente la punizione dei reati minori, tipo con le misure alternative":
                        "grafici/2024/Palumbo liceo linguistico finale 1 grp 2024/10.Carcere unica misura.png",

                    "Domanda 11: Credi nel reinserimento dei detenuti nella societa', una volta scontata la pena, e ne sei favorevole":
                        "grafici/2024/Palumbo liceo linguistico finale 1 grp 2024/11.Reinserimento detenuti.png",

                    "Domanda 12: Ti piacerebbe un confronto diretto con i detenuti per capire le motivazioni del loro agire e conoscerne le conseguenze ":
                        "grafici/2024/Palumbo liceo linguistico finale 1 grp 2024/12.Confronto diretto con detenuti.png",
                },
                "Ist. Palumbo (Linguistico 2 grp)": {
                    "Domanda 1: Sesso":
                        "grafici/2024/Palumbo liceo linguistico finale 2 grp 2024/1.Sesso.png",

                    "Domanda 2: Conosci le regole":
                        "grafici/2024/Palumbo liceo linguistico finale 2 grp 2024/2.Conosci le regole.png",

                    "Domanda 3: Cosa sono le regole":
                        "grafici/2024/Palumbo liceo linguistico finale 2 grp 2024/3.Cosa sono le regole.png",

                    "Domanda 4: A cosa servono le regole":
                        "grafici/2024/Palumbo liceo linguistico finale 2 grp 2024/4.A cosa servono le regole.png",

                    "Domanda 5: Pensi che le regole servano solo nei luoghi comuni o anche in famiglia":
                        "grafici/2024/Palumbo liceo linguistico finale 2 grp 2024/5.Regole luoghi comuni o famiglia.png",

                    "Domanda 6: Perche' le regole siano rispettate devono essere scritte o sono valide anche quelle del 'saper vivere'":
                        "grafici/2024/Palumbo liceo linguistico finale 2 grp 2024/6.Perche' le regole siano rispettate.png",

                    "Domanda 7: Cosa pensi di chi trasgredisce le regole":
                        "grafici/2024/Palumbo liceo linguistico finale 2 grp 2024/7.Trasgredire le regole.png",

                    "Domanda 8: Secondo te le punizioni presenti oggigiorno per chi trasgredisce le regole sono valide":
                        "grafici/2024/Palumbo liceo linguistico finale 2 grp 2024/8.Punizioni odierne valide.png",

                    "Domanda 9: Saresti favorevole a punizioni piu' rigide del carcere come la pena di morte":
                        "grafici/2024/Palumbo liceo linguistico finale 2 grp 2024/9.Favorevole alla pena di morte.png",

                    "Domanda 10: Ritieni il carcere come una misura unica e valida o credi che si possa risolvere diversamente la punizione dei reati minori, tipo con le misure alternative":
                        "grafici/2024/Palumbo liceo linguistico finale 2 grp 2024/10.Carcere unica misura.png",

                    "Domanda 11: Credi nel reinserimento dei detenuti nella societa', una volta scontata la pena, e ne sei favorevole":
                        "grafici/2024/Palumbo liceo linguistico finale 2 grp 2024/11.Reinserimento detenuti.png",

                    "Domanda 12: Ti piacerebbe un confronto diretto con i detenuti per capire le motivazioni del loro agire e conoscerne le conseguenze ":
                        "grafici/2024/Palumbo liceo linguistico finale 2 grp 2024/12.Confronto diretto con detenuti.png",
                },
            },
        },
    };

    const datiGrafici = datiCompleti[anno] ? datiCompleti[anno][fase] : null;

    // --- 3. RIFERIMENTI AGLI ELEMENTI HTML ---
    const selectScuola = document.getElementById('seleziona-scuola');
    const selectDomanda = document.getElementById('seleziona-domanda');
    const containerGrafico = document.getElementById('area-grafico-container');
    const placeholder = document.getElementById('placeholder-grafico');
    const prevBtn = document.getElementById('prevDomandaBtn');
    const nextBtn = document.getElementById('nextDomandaBtn');

    // --- 4. VARIABILI DI STATO PER LA NAVIGAZIONE ---
    let domandeDisponibili = [];
    let domandaCorrenteIndex = -1;
    // NUOVE VARIABILI per la navigazione tra scuole
    let scuoleDisponibili = [];
    let scuolaCorrenteIndex = -1;


    // --- 5. INIZIALIZZA LA PAGINA ---
    if (datiGrafici) {
        // Popola la lista delle scuole disponibili per la navigazione continua
        scuoleDisponibili = Object.keys(datiGrafici);

        for (const scuola of scuoleDisponibili) {
            const option = document.createElement('option');
            option.value = scuola;
            option.textContent = scuola;
            selectScuola.appendChild(option);
        }
    } else {
        placeholder.innerHTML = `<p>Non sono disponibili dati per l'anno ${anno}, fase ${fase}.</p>`;
    }

    // --- 6. GESTORI DEGLI EVENTI ---

    // Quando si seleziona una scuola
    selectScuola.addEventListener('change', () => {
        const scuolaSelezionata = selectScuola.value;

        // Aggiorna l'indice della scuola corrente
        scuolaCorrenteIndex = scuoleDisponibili.indexOf(scuolaSelezionata);

        selectDomanda.innerHTML = '<option value="">-- Scegli una domanda --</option>';
        selectDomanda.disabled = true;

        domandeDisponibili = [];
        domandaCorrenteIndex = -1;
        updateArrowButtons();

        containerGrafico.innerHTML = '';
        placeholder.innerHTML = '<p>Seleziona una scuola e una domanda per visualizzare il grafico corrispondente.</p>';
        placeholder.style.display = 'block';
        containerGrafico.appendChild(placeholder);

        if (scuolaSelezionata && datiGrafici) {
            const domande = datiGrafici[scuolaSelezionata];
            domandeDisponibili = Object.keys(domande);

            for (const domanda of domandeDisponibili) {
                const option = document.createElement('option');
                option.value = domanda;
                option.textContent = domanda;
                selectDomanda.appendChild(option);
            }
            selectDomanda.disabled = false;

            if (domandeDisponibili.length > 0) {
                domandaCorrenteIndex = 0;
                visualizzaGrafico();
            }
        }
    });

    // Quando si seleziona una domanda dal menu
    selectDomanda.addEventListener('change', () => {
        const domandaSelezionata = selectDomanda.value;
        if (domandaSelezionata) {
            domandaCorrenteIndex = domandeDisponibili.indexOf(domandaSelezionata);
            visualizzaGrafico();
        }
    });

    // --- NUOVA LOGICA PER I BOTTONI FRECCIA ---

    nextBtn.addEventListener('click', () => {
        // C'è ancora una domanda successiva in QUESTA scuola?
        if (domandaCorrenteIndex < domandeDisponibili.length - 1) {
            domandaCorrenteIndex++;
            visualizzaGrafico();
        } else {
            // Altrimenti, siamo all'ultima domanda. C'è una scuola SUCCESSIVA?
            if (scuolaCorrenteIndex < scuoleDisponibili.length - 1) {
                scuolaCorrenteIndex++; // Passa alla scuola successiva
                selectScuola.value = scuoleDisponibili[scuolaCorrenteIndex]; // Aggiorna il menu
                selectScuola.dispatchEvent(new Event('change')); // Simula il click per ricaricare tutto
            }
        }
    });

    prevBtn.addEventListener('click', () => {
        // C'è ancora una domanda precedente in QUESTA scuola?
        if (domandaCorrenteIndex > 0) {
            domandaCorrenteIndex--;
            visualizzaGrafico();
        } else {
            // Altrimenti, siamo alla prima domanda. C'è una scuola PRECEDENTE?
            if (scuolaCorrenteIndex > 0) {
                scuolaCorrenteIndex--; // Passa alla scuola precedente
                selectScuola.value = scuoleDisponibili[scuolaCorrenteIndex];

                // Ricarica le domande della nuova scuola, ma vai ALL'ULTIMA domanda
                const scuolaPrecedente = scuoleDisponibili[scuolaCorrenteIndex];
                const domande = datiGrafici[scuolaPrecedente];
                domandeDisponibili = Object.keys(domande);
                domandaCorrenteIndex = domandeDisponibili.length - 1; // Imposta all'ultimo indice

                // Aggiorna la UI
                selectDomanda.innerHTML = '<option value="">-- Scegli una domanda --</option>';
                for (const domanda of domandeDisponibili) {
                    const option = document.createElement('option');
                    option.value = domanda;
                    option.textContent = domanda;
                    selectDomanda.appendChild(option);
                }
                selectDomanda.disabled = false;
                visualizzaGrafico();
            }
        }
    });

    // --- 7. FUNZIONI PRINCIPALI ---

    function visualizzaGrafico() {
        const scuola = selectScuola.value;
        const domanda = domandeDisponibili[domandaCorrenteIndex];

        selectDomanda.value = domanda;
        const urlGrafico = datiGrafici[scuola][domanda];
        containerGrafico.innerHTML = '';

        if (urlGrafico) {
            placeholder.style.display = 'none';
            const img = document.createElement('img');
            img.src = urlGrafico;
            img.alt = `Grafico per ${scuola} - ${domanda}`;
            containerGrafico.appendChild(img);
        } else {
            placeholder.innerHTML = '<p>Grafico non ancora disponibile per questa selezione.</p>';
            placeholder.style.display = 'block';
            containerGrafico.appendChild(placeholder);
        }

        updateArrowButtons();
    }

    function updateArrowButtons() {
        // Le frecce sono disabilitate solo se siamo al primo grafico della prima scuola
        // o all'ultimo grafico dell'ultima scuola.
        prevBtn.disabled = (scuolaCorrenteIndex === 0 && domandaCorrenteIndex === 0);
        nextBtn.disabled = (scuolaCorrenteIndex === scuoleDisponibili.length - 1 && domandaCorrenteIndex === domandeDisponibili.length - 1);
    }
});