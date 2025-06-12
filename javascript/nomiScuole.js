const fs = require('fs');
const path = require('path');
const Tesseract = require('tesseract.js');

const baseDir = path.join(__dirname, '..', 'grafici');
const anni = fs.readdirSync(baseDir).filter(f => fs.lstatSync(path.join(baseDir, f)).isDirectory());
const tipi = ['iniziale', 'finale']; // Aggiungi altri se servono

(async () => {
    for (const anno of anni) {
        const yearDir = path.join(baseDir, anno);
        const outputPath = path.join(yearDir, 'nomiScuole.json');

        if (fs.existsSync(outputPath)) {
            console.log(`⏭️  Saltato ${anno}: nomiScuole.json esiste già`);
            continue;
        }

        const results = {};

        for (const tipo of tipi) {
            let categoria = 1;

            while (true) {
                const nomeFile = `${anno}-${tipo}-${categoria}-1.png`;
                const filePath = path.join(yearDir, nomeFile);

                if (!fs.existsSync(filePath)) {
                    console.log(`✅ Fine ${tipo} ${anno} a ${categoria - 1} categorie.`);
                    break; // Esce dal ciclo se non trova più immagini consecutive
                }

                console.log(`🔍 OCR su: ${nomeFile}`);

                try {
                    const { data: { text } } = await Tesseract.recognize(filePath, 'ita');
                    const primaRiga = text.split('\n').map(l => l.trim()).find(l => l);
                    const nomeScuola = primaRiga?.split('-')[0]?.trim() || 'Sconosciuto';
                    const chiave = path.basename(nomeFile, '.png'); // es. 2017-finale-1-1
                    results[chiave] = nomeScuola;
                    console.log(`✔️  ${chiave}: ${nomeScuola}`);
                } catch (err) {
                    console.error(`❌ Errore OCR per ${nomeFile}:`, err);
                }

                categoria++;
            }
        }

        fs.writeFileSync(outputPath, JSON.stringify(results, null, 2), 'utf8');
        console.log(`📁 Salvato: ${outputPath}`);
    }
})();
