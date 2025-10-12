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
        "2022": {
            "iniziale": {
                "Scuola I.I.SS. Ettore Majorana": {
                    "Domanda 1: Sesso": "grafici/2022/Domanda_1_Majorana.png",
                    "Domanda 2: Conosci le regole": "grafici/2022/Domanda_2_Majorana.png",
                    "Domanda 3: Cosa sono le regole": ""
                    // ... altre domande
                },
                "Istituto L. Einaudi": {
                    "Domanda 1: Convivenza": "grafici/2022/2022-iniziale-2-1.png",
                    "Domanda 2: Rispetto": "grafici/2022/2022-iniziale-2-2.png"
                }
            }
        }
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