import { useState, useEffect } from "react";

/* ─── BRAND PALETTE ─── */
const C = {
  bg: "#FAF6F1",          // beige chiaro
  surface: "#FFFFFF",      // bianco
  card: "#FFF8F0",         // beige caldo
  border: "#E8DDD0",       // beige scuro
  borderLight: "#F0E8DC",
  magenta: "#9B1B4D",      // magenta brand
  magentaDark: "#7A1540",
  magentaSoft: "rgba(155,27,77,0.08)",
  magentaGlow: "rgba(155,27,77,0.2)",
  gold: "#C8A84E",         // oro brand
  goldSoft: "rgba(200,168,78,0.1)",
  goldGlow: "rgba(200,168,78,0.25)",
  green: "#2B9E6F",
  red: "#D94F4F",
  pink: "#E8789A",
  text: "#2D2A26",         // testo scuro
  sub: "#7A7168",          // testo secondario
  dim: "#B0A898",          // testo tenue
  white: "#FFFFFF",
};

/* ─── SLIDE GENERATORS (50 slides each, ~2h content) ─── */
function makeSlides(topic) {
  const banks = {
    "Storytelling per i Social": [
      ["Introduzione allo Storytelling Digitale","Lo storytelling digitale è l'arte di comunicare attraverso narrazioni strutturate sui canali online. A differenza della comunicazione tradizionale, richiede adattamento ai formati brevi, alla fruizione mobile e alla competizione per l'attenzione. In questo corso esploreremo come costruire storie che creano connessione autentica."],
      ["Perché le Storie Funzionano","Il cervello umano è programmato per processare storie, non dati. Le neuroscienze dimostrano che durante l'ascolto di una storia si attivano le stesse aree cerebrali di chi la vive. Questo fenomeno, chiamato 'neural coupling', è la base scientifica del potere narrativo."],
      ["Storia vs Contenuto Informativo","Un post informativo dice 'Il 70% degli utenti preferisce video brevi'. Una storia dice 'Quando ho pubblicato il mio primo reel, non avevo idea che 3 secondi avrebbero cambiato tutto'. La differenza? L'emozione. L'informazione educa, la storia trasforma."],
      ["I 3 Pilastri della Narrazione","Ogni storia efficace poggia su tre pilastri: un protagonista con cui identificarsi, un conflitto o sfida da superare, e una trasformazione che ispira. Senza anche solo uno di questi elementi, la narrazione perde forza e coinvolgimento."],
      ["Il Protagonista: Chi Parla?","Nei social il protagonista sei tu, il tuo cliente o la tua audience. La chiave è la vulnerabilità calibrata: mostrare abbastanza imperfezioni da risultare umano, ma mantenere l'autorevolezza. Il pubblico si connette con chi è autentico, non perfetto."],
      ["Il Conflitto: La Tensione Narrativa","Senza conflitto non c'è storia. Il conflitto può essere esterno (un ostacolo di mercato), interno (paura, insicurezza) o relazionale (incomprensione con un cliente). È la tensione che mantiene l'attenzione e rende la risoluzione significativa."],
      ["La Trasformazione: Il Payoff","La trasformazione è il momento in cui il protagonista cambia grazie all'esperienza. Non deve essere epica: può essere un piccolo cambio di prospettiva, una lezione appresa, un risultato raggiunto. È ciò che il pubblico porta con sé."],
      ["L'Arco Narrativo in 5 Fasi","Situazione iniziale → Evento scatenante → Sviluppo e complicazioni → Climax → Risoluzione. Questo schema classico funziona anche in un post da 200 parole. La differenza è la compressione: ogni fase può essere una singola frase."],
      ["Hook: I Primi 3 Secondi","Hai 3 secondi per catturare l'attenzione. Le tipologie di hook più efficaci sono: domanda provocatoria, statistica sorprendente, affermazione controintuitiva, scenario 'e se...', e il cliffhanger immediato. Ogni hook deve creare un gap di curiosità."],
      ["Tipologie di Hook: La Domanda","'Sai qual è l'errore che il 90% dei content creator fa senza rendersene conto?' La domanda funziona perché attiva il bisogno di risposta del cervello. La domanda migliore è quella che il lettore crede di sapere ma di cui non è sicuro."],
      ["Tipologie di Hook: La Statistica","'Ho guadagnato €0 per 6 mesi. Poi ho cambiato una sola cosa.' I numeri creano concretezza. Il contrasto tra un numero basso e uno alto crea tensione. Non inventare statistiche: l'autenticità è fondamentale."],
      ["Tipologie di Hook: L'Affermazione Controintuitiva","'Smettila di postare ogni giorno.' Questa tecnica sfida le credenze del lettore, creando un impulso irresistibile a continuare per capire il perché. Usa con moderazione: se ogni post è controintuitivo, perdi credibilità."],
      ["La Struttura AIDA per i Social","Attention (hook) → Interest (contesto e rilevanza) → Desire (beneficio e visione) → Action (CTA). Questa struttura pubblicitaria classica si adatta perfettamente ai post sui social. Ogni sezione può essere una riga o un paragrafo."],
      ["La Struttura PAS","Problem → Agitate → Solve. Identifica un problema del tuo pubblico, amplifica il dolore o la frustrazione, poi presenta la soluzione. Questa struttura è particolarmente efficace per post di vendita e lead generation."],
      ["La Struttura BAB","Before → After → Bridge. Mostra la situazione prima, dipingi il risultato dopo, poi spiega come arrivarci. Funziona bene per testimonial, case study e trasformazioni personali. È la struttura del 'viaggio dell'eroe' condensata."],
      ["Storytelling Visivo: Le Immagini","L'immagine è il primo livello narrativo. Un carosello racconta una storia attraverso la sequenza. Un'immagine singola deve catturare un momento significativo. Il testo sull'immagine funge da hook visivo."],
      ["Storytelling nei Caroselli","Slide 1: Hook visivo potente. Slide 2-3: Contesto e problema. Slide 4-7: Contenuto di valore. Slide 8-9: Trasformazione o risultato. Slide 10: CTA. Ogni slide deve avere una sola idea e spingere a scorrere alla successiva."],
      ["Il Potere dei Micro-Racconti","Un micro-racconto è una storia completa in 3-5 frasi. Esempio: 'Avevo 23 anni e un lavoro che odiavo. Un martedì piovoso ho scritto il mio primo post. Nessuno lo ha letto. L'ho riscritto 47 volte. Oggi quel post è la base del mio business.'"],
      ["Lo Storytelling nei Reel","Nei reel la storia si racconta con immagini, testo overlay e voce. La struttura è compressa: hook nei primi 0.5 secondi, sviluppo in 10-20 secondi, payoff finale. Il pattern interrupt ogni 2-3 secondi mantiene l'attenzione."],
      ["Creare Personaggi Memorabili","Anche nei social i personaggi contano. Il tuo 'personaggio' online ha tratti definiti: valori, linguaggio, estetica, ricorrenze. Crea 'personaggi ricorrenti' nei tuoi contenuti: il cliente tipo, il mentore, l'antagonista (il dubbio, il mercato)."],
      ["L'Empatia come Strumento Narrativo","L'empatia si costruisce mostrando che comprendi il vissuto del tuo pubblico. Frasi come 'So cosa significa...', 'Anche io ci sono passato...', 'Forse ti stai chiedendo...' creano connessione immediata. Non fingere: l'empatia deve essere autentica."],
      ["Il Tono di Voce nella Narrazione","Il tono di voce è come suoni, non cosa dici. Può essere autorevole ma caldo, ironico ma rispettoso, tecnico ma accessibile. Scegli 3 aggettivi che definiscono il tuo tono e usali come filtro per ogni contenuto."],
      ["Storytelling e Vulnerabilità","La vulnerabilità è il superpotere del narratore. Condividere fallimenti, dubbi e momenti difficili crea connessione più profonda del successo. La chiave è il 'vulnerability loop': mostro la debolezza → il pubblico si identifica → la fiducia cresce."],
      ["I Framework Narrativi: Il Viaggio dell'Eroe","Il viaggio dell'eroe di Joseph Campbell si applica ai social: Mondo ordinario → Chiamata all'avventura → Sfide → Mentore → Prova suprema → Ritorno trasformato. Puoi raccontare il tuo viaggio imprenditoriale con questo schema."],
      ["I Framework Narrativi: La Montagna","La struttura a montagna alterna momenti di tensione crescente a piccoli rilasci. Ogni 'salita' aumenta la posta in gioco. Il climax è il momento più intenso, seguito da una discesa che porta alla risoluzione. Perfetta per storie lunghe."],
      ["Come Trovare le Tue Storie","Le storie sono ovunque: conversazioni con clienti, errori commessi, lezioni apprese, momenti di svolta, osservazioni quotidiane. Tieni un 'diario delle storie': ogni giorno annota almeno una cosa che ti ha colpito. In un mese avrai 30 spunti."],
      ["Lo Story Bank: Organizzare le Idee","Crea un database delle tue storie organizzato per categoria: Origine (come hai iniziato), Fallimenti (cosa non ha funzionato), Successi (risultati), Clienti (trasformazioni), Valori (cosa credi), Dietro le quinte (processo)."],
      ["Adattare la Storia alla Piattaforma","Instagram: visivo, caroselli narrativi, reel. LinkedIn: professionale, case study, lezioni di carriera. TikTok: rapido, trend-based, raw. Twitter/X: thread, battute, osservazioni. Ogni piattaforma ha il suo linguaggio narrativo."],
      ["La Serialità: Storie che Continuano","Crea serie ricorrenti: 'Ogni lunedì racconto un fallimento', 'Venerdì di vittorie', 'Dietro le quinte del martedì'. La serialità crea aspettativa e fidelizzazione. Il pubblico torna perché vuole il prossimo episodio."],
      ["Lo Storytelling nei Copy di Vendita","Vendere con le storie significa trasformare il prodotto in un elemento narrativo. Non vendi un corso: racconti la storia di chi lo ha fatto e come è cambiato. Il prodotto è il ponte tra il 'prima' e il 'dopo' del cliente."],
      ["Storytelling e Personal Branding","La tua storia personale è il fondamento del tuo brand. Racconta il tuo 'perché': perché fai quello che fai, cosa ti ha portato qui, quale visione ti guida. Questa narrazione deve essere coerente su tutti i canali."],
      ["Le Emozioni nella Narrazione","Le 6 emozioni primarie utilizzabili nello storytelling: gioia (celebrazioni, risultati), tristezza (empatia, perdita), paura (urgenza, rischio), rabbia (ingiustizia, frustrazione), sorpresa (twist, rivelazioni), disgusto (cosa evitare). Ogni emozione ha il suo scopo."],
      ["L'Uso del Dialogo nei Post","Il dialogo rende il testo vivo. 'Il mio cliente mi ha detto: Non ci credo, funziona davvero.' è più potente di 'Il cliente era soddisfatto.' Il dialogo crea scene, e le scene creano immaginazione. Usa il dialogo per i momenti chiave."],
      ["Il Ritmo della Narrazione","Frasi brevi = velocità, tensione, urgenza. Frasi lunghe = riflessione, profondità, contemplazione. Alterna i ritmi per creare dinamismo. Un paragrafo di frasi lunghe seguito da una frase secca crea impatto drammatico."],
      ["Show, Don't Tell","'Era nervoso' è telling. 'Le sue mani tremavano mentre apriva il laptop' è showing. Mostra attraverso dettagli sensoriali, azioni e dialoghi invece di dichiarare emozioni. Questo principio letterario funziona anche in una caption."],
      ["Il Cliffhanger nei Contenuti","Il cliffhanger è l'interruzione nel momento di massima tensione. Nei caroselli: 'Ma quello che è successo dopo ha cambiato tutto → scorri'. Nelle serie: 'Domani vi racconto come è finita.' Crea dipendenza narrativa."],
      ["Storytelling con i Dati","I numeri raccontano storie se contestualizzati. '10.000 follower' è un dato. 'Da 0 a 10.000 follower in 6 mesi, partendo da una stanza di 9mq con un telefono rotto' è una storia. Il dato diventa significativo dentro una narrazione."],
      ["La Call to Action Narrativa","Non 'Clicca qui'. Ma 'Se ti sei riconosciuto in questa storia, il prossimo passo è...' La CTA narrativa connette l'azione al percorso emotivo appena vissuto. Il lettore agisce perché si sente parte della storia, non perché glielo ordini."],
      ["Errori Comuni nello Storytelling","I 5 errori più frequenti: parlare solo di sé senza valore per il pubblico, storie troppo lunghe senza editing, mancanza di conflitto, morale troppo esplicita e forzata, incoerenza tra il racconto e la realtà. Ogni errore ha una correzione specifica."],
      ["Il Feedback Loop: Testare le Storie","Pubblica, analizza, migliora. Quali storie generano più salvataggi? Quali più commenti? Quali più condivisioni? Ogni metrica indica un tipo di engagement diverso. I salvataggi indicano valore, i commenti connessione, le condivisioni risonanza."],
      ["Storytelling e Community","Le storie migliori nascono dalla community. Chiedi ai tuoi follower di condividere le loro esperienze, usa i sondaggi per scoprire sfide comuni, trasforma i DM in spunti narrativi. La community non è solo pubblico: è co-autore."],
      ["Costruire una Narrazione di Brand","La narrazione di brand ha 4 livelli: Origin story (come è nato), Mission (perché esiste), Values (in cosa crede), Vision (dove vuole andare). Questi 4 elementi devono emergere nei contenuti in modo naturale, mai forzato."],
      ["Lo Storytelling Cross-Platform","Una storia può vivere su più piattaforme con adattamenti. Il thread su Twitter diventa un carosello su Instagram, che diventa un video su TikTok, che diventa un articolo su LinkedIn. Il nucleo narrativo è lo stesso, il formato cambia."],
      ["L'Arte del Plot Twist","Il plot twist ribalta le aspettative. 'Pensavo che il problema fosse il mio prodotto. In realtà era il mio mindset.' Il twist funziona se è autentico e se la premessa è stata costruita bene. Non forzarlo: un twist artificiale perde credibilità."],
      ["Storytelling Etico","Raccontare storie comporta responsabilità. Non manipolare, non inventare risultati, non strumentalizzare le emozioni. La linea tra persuasione e manipolazione è sottile. Lo storytelling etico costruisce fiducia a lungo termine."],
      ["Case Study: Analisi di Post Virali","Analizziamo 5 post che hanno superato il milione di visualizzazioni. Cosa hanno in comune? Hook potente, storia personale, conflitto chiaro, trasformazione tangibile e CTA naturale. Struttura e autenticità vincono sempre."],
      ["Workshop: Scrivi la Tua Origin Story","Esercizio pratico: rispondi a queste domande. Qual era la tua vita prima? Qual è stato il momento di svolta? Cosa hai fatto di diverso? Qual è il risultato? Cosa vuoi per chi ti segue? Ora assembla le risposte in una narrazione coerente."],
      ["Workshop: Il Calendario Narrativo","Crea un calendario editoriale basato sullo storytelling. Lunedì: storia di fallimento. Mercoledì: dietro le quinte. Venerdì: storia di successo del cliente. Questa struttura crea varietà e coerenza narrativa."],
      ["Strumenti per lo Storytelling","App e tool utili: Notion per lo story bank, Canva per i visual narrativi, CapCut per i reel, ChatGPT per brainstorming e varianti. Ogni strumento supporta una fase diversa del processo creativo."],
      ["Recap e Piano d'Azione","Hai imparato: strutture narrative, tecniche di hook, framework avanzati, storytelling cross-platform e costruzione di community attraverso le storie. Il tuo piano d'azione: crea lo story bank, definisci il tono, pubblica 3 storie questa settimana."],
    ],
    "Reel che Convertono": [
      ["Benvenuto nel Corso","I reel sono il formato più potente per crescere sui social nel 2026. In questo corso imparerai a pianificare, girare, editare e pubblicare reel che non solo ottengono views, ma generano lead, vendite e autorevolezza. Preparati a trasformare il tuo approccio ai video brevi."],
      ["Perché i Reel Dominano gli Algoritmi","Gli algoritmi di Instagram, TikTok e YouTube Shorts premiano i video brevi perché massimizzano il tempo sulla piattaforma. Un reel con alta retention viene mostrato a pubblici sempre più ampi. Capire l'algoritmo è il primo passo per dominarlo."],
      ["Anatomia di un Reel Virale","Un reel virale ha 5 componenti: hook visivo nei primi 0.5s, pattern interrupt ogni 2-3s, contenuto di valore nel corpo, payoff emotivo, e loop o CTA finale. Ognuno di questi elementi è ottimizzabile."],
      ["La Retention: La Metrica che Conta","La retention è la percentuale di video guardata. Se il 50% degli spettatori arriva a metà, l'algoritmo considera il reel mediocre. Sopra il 70% di retention media, il reel ha potenziale virale. Ogni secondo perso è un punto di retention in meno."],
      ["Hook Visivi: I Primi 0.5 Secondi","L'hook visivo è il primo frame che appare. Deve essere: inaspettato, in movimento, con testo grande leggibile, e creare curiosità. Tecniche: zoom improvviso, oggetto insolito in mano, espressione facciale forte, testo provocatorio."],
      ["Pattern Interrupt: Mantenere l'Attenzione","Il pattern interrupt è un cambio improvviso che resetta l'attenzione. Ogni 2-3 secondi inserisci: cambio inquadratura, zoom, effetto sonoro, testo che appare, cambio di sfondo. Il cervello si annoia dopo 3 secondi di stimolo costante."],
      ["I 10 Formati di Reel che Funzionano","1) Tutorial rapido 2) Prima/Dopo 3) Trend + valore 4) POV storytelling 5) Lista consigli 6) Unboxing/Review 7) Day in my life 8) Risposta a commento 9) Confronto A vs B 10) Behind the scenes. Ogni formato ha la sua struttura ottimale."],
      ["Formato 1: Tutorial Rapido","Il tutorial rapido insegna qualcosa in 15-60 secondi. Struttura: 'Ecco come fare X' + dimostrazione veloce + risultato. Funziona perché offre valore immediato e ha alta probabilità di salvataggio."],
      ["Formato 2: Prima e Dopo","Il Prima/Dopo mostra una trasformazione. Può essere visiva (editing foto), personale (crescita), o di risultato (metriche). La chiave è il contrasto drammatico tra i due stati. Usa transizioni creative per il momento del cambio."],
      ["Formato 3: Trend + Valore Aggiunto","Prendi un trend (audio, formato, challenge) e aggiungici il tuo valore unico. Il trend ti dà visibilità algoritmica, il valore ti differenzia. Non seguire i trend in modo generico: adattali alla tua nicchia."],
      ["Formato 4: POV Storytelling","'POV: sei un freelancer che scopre che il cliente ha approvato il budget.' Il POV mette lo spettatore nella scena. Funziona perché attiva l'immedesimazione. Usa espressioni facciali, scenari riconoscibili e twist finali."],
      ["Formato 5: Lista di Consigli","'5 errori che fanno i creator principianti'. Le liste sono efficaci perché promettono un numero definito di valore. Usa testo overlay per ogni punto, con grafica pulita e ritmo sostenuto. Ogni punto deve durare 3-5 secondi."],
      ["Pianificazione: Lo Script del Reel","Ogni reel inizia con uno script. Anche se improvvisi, avere punti chiave previene divagazioni. Il mio template: Hook (1 riga) + Corpo (3-5 punti) + CTA (1 riga). Scrivi lo script, cronometralo, taglia il superfluo."],
      ["Lo Storyboard per Reel","Uno storyboard visuale aiuta a pianificare inquadrature e transizioni. Anche un semplice schema su carta: Frame 1 = primo piano con testo, Frame 2 = dettaglio mani, Frame 3 = schermo, etc. Risparmia tempo in fase di ripresa."],
      ["Attrezzatura: Cosa Serve Davvero","Non serve una videocamera professionale. Serve: smartphone con buona fotocamera (qualsiasi modello recente), treppiede o supporto stabile, luce naturale o un ring light da €20, microfono lavalier da €15. L'audio conta più del video."],
      ["Illuminazione per Reel","La luce è il 70% della qualità video. Regola d'oro: fonte di luce davanti a te, mai dietro. La luce naturale di finestra è la migliore e gratuita. Per interni: ring light a 45 gradi. Evita luci al neon e fluorescenti."],
      ["Audio: Il Fattore Sottovalutato","Il 60% dell'esperienza di un video è audio. Un video con audio mediocre viene skippato. Usa un microfono esterno, registra in ambienti silenziosi, e controlla sempre l'audio prima di editare. Il rumore di fondo è il nemico numero uno."],
      ["Inquadrature Base per Reel","Le 5 inquadrature essenziali: primo piano (volto, emozioni), mezzo busto (parlato), dettaglio (mani, oggetti), campo largo (contesto), over the shoulder (schermo). Alternare queste inquadrature crea dinamismo visivo."],
      ["Il Movimento della Camera","Un video statico annoia. Aggiungi movimento: pan lento (scorrimento laterale), tilt (scorrimento verticale), zoom lento in avanti (enfasi), dolly shot (avvicinamento fisico). Anche piccoli movimenti fanno grande differenza."],
      ["Come Girare con lo Smartphone","Imposta il video a 1080x1920 (verticale), 30fps per contenuto standard, 60fps per slow motion. Attiva la griglia per composizione. Pulisci la lente prima di girare. Tieni il telefono con due mani per stabilità."],
      ["Editing: I Tool Essenziali","CapCut è il re dell'editing mobile: gratuito, potente, con template. Alternative: InShot (semplicità), VN (controllo avanzato), Adobe Premiere Rush (integrazione). Scegli uno e padroneggialo prima di passare al successivo."],
      ["Editing: Il Ritmo del Taglio","Taglia ogni pausa, ogni 'ehm', ogni momento morto. Il ritmo ideale: un taglio ogni 2-3 secondi per contenuti informativi, ogni 1-2 secondi per contenuti energici. L'editing è dove il contenuto mediocre diventa professionale."],
      ["Sottotitoli e Testo Overlay","L'80% degli utenti guarda i reel senza audio. I sottotitoli non sono opzionali, sono essenziali. Usa font leggibili, dimensione grande, contrasto alto. Evidenzia le parole chiave con colore diverso per guidare l'occhio."],
      ["Transizioni Creative","Le transizioni più efficaci: match cut (stesso movimento tra due clip), whip pan (movimento rapido della camera), snap (schiocco dita + cambio scena), cover lens (coprire la lente con la mano). Ogni transizione deve avere uno scopo narrativo."],
      ["Musica e Audio Trending","La musica trending amplifica la reach. Come trovarla: sezione 'Trending' nell'app, libreria audio di CapCut, osserva cosa usano i creator nella tua nicchia. Scegli musica che supporti il mood del contenuto, non che lo sovrasti."],
      ["Effetti e Filtri: Usare con Parsimonia","Un filtro coerente crea identità visiva. Scegli 2-3 preset che rappresentano il tuo brand e usali sempre. Evita effetti esagerati che distraggono dal contenuto. Meno è spesso di più quando si parla di post-produzione."],
      ["La Velocità del Video","Il rallentatore enfatizza momenti importanti. Lo speed-up comprime azioni lunghe. Il time-lapse mostra processi. Combina velocità diverse nello stesso reel per creare dinamismo. La velocità normale è il punto di ancoraggio."],
      ["Creare un Template Riutilizzabile","Crea template in CapCut con la tua grafica, font e colori. Ogni nuovo reel parte dal template, risparmiando ore. Include: intro animata, stile testo, transizioni standard, outro con CTA. La coerenza visiva costruisce il brand."],
      ["La Caption del Reel","La caption non è un ripensamento, è parte della strategia. Struttura: espandi il contenuto del reel con valore aggiunto, aggiungi contesto, inserisci CTA e hashtag. Una buona caption aumenta il tempo sulla pagina e i salvataggi."],
      ["Hashtag Strategy per Reel","Usa 5-15 hashtag mix: 3-4 di nicchia specifica con basso volume, 3-4 di nicchia ampia con medio volume, 2-3 generali con alto volume. Evita hashtag con oltre 50M di post: il tuo contenuto si perde nel rumore."],
      ["Quando Pubblicare i Reel","Non esiste un orario universale. Analizza i tuoi Insights per trovare quando la tua audience è online. Regola generale: mattina presto (7-9), pausa pranzo (12-14), sera (19-21). Testa e adatta sulla base dei dati."],
      ["La Frequenza di Pubblicazione","La consistenza batte la frequenza. Meglio 3 reel eccellenti a settimana che 7 mediocri. L'algoritmo premia la qualità costante. Crea un calendario editoriale realistico e mantienilo. Il burnout è il vero nemico del creator."],
      ["Reel per Vendere: Il Funnel","Awareness (reel virali, trend) → Consideration (reel educativi, tutorial) → Conversion (reel con CTA diretta, testimonianze). Non tutti i reel devono vendere. Il 70% deve dare valore, il 20% costruire fiducia, il 10% vendere."],
      ["Reel di Vendita: Struttura","Hook con problema del cliente → Agita il problema → Presenta la soluzione (tuo prodotto) → Social proof (testimonianza/risultato) → CTA chiara. Durata ideale: 30-60 secondi. Ogni secondo deve giustificare la sua presenza."],
      ["Storytelling nei Reel","Racconta micro-storie in formato video. La struttura: situazione iniziale (3s) → conflitto (5s) → sviluppo (10s) → risoluzione (5s) → lezione (5s). Usa voiceover, musica emotiva e visual che supportino la narrazione."],
      ["Analizzare le Performance","Le metriche chiave: views (reach), retention media (qualità), salvataggi (valore percepito), condivisioni (risonanza), commenti (connessione), click al profilo (interesse). Ogni metrica racconta una storia diversa."],
      ["A/B Testing per Reel","Testa una variabile alla volta: stesso contenuto con hook diverso, stessa struttura con musica diversa, stesso topic con formato diverso. Dopo 10 test avrai dati sufficienti per capire cosa funziona con la tua audience."],
      ["Collaborazioni e Duetti","Le collaborazioni amplificano la reach esponenzialmente. Cerca creator nella tua nicchia con audience simile ma non identica. Proponi collaborazioni win-win: ognuno porta valore all'audience dell'altro."],
      ["Reel per Diverse Nicchie","Ogni nicchia ha le sue regole. Food: dettagli ravvicinati, ASMR, processi. Fitness: trasformazioni, routine. Business: consigli pratici, numeri. Lifestyle: estetica, routine. Adatta formato e ritmo alla tua nicchia specifica."],
      ["Evitare il Shadowban","Comportamenti che riducono la visibilità: contenuto riciclato con watermark di altre piattaforme, violazione delle guidelines, engagement artificiale, hashtag bannati, contenuto sensibile. Mantieni il profilo 'pulito' per l'algoritmo."],
      ["Repurposing: Un Contenuto, Molti Reel","Un video lungo di 10 minuti può diventare 5-10 reel. Un articolo del blog può diventare 3 reel. Un carosello può diventare un reel con voiceover. Massimizza ogni pezzo di contenuto creato."],
      ["Il Reel 'Evergreen'","I reel evergreen continuano a generare views mesi dopo la pubblicazione. Sono contenuti senza data di scadenza: tutorial, consigli universali, errori comuni. Bilancia i trend (visibilità immediata) con gli evergreen (crescita sostenibile)."],
      ["Costruire una Serie di Reel","Le serie creano fidelizzazione. 'Parte 1 di 5: Come ho costruito il mio business'. Lo spettatore vuole vedere la parte successiva, visita il profilo, segue. Le serie aumentano il tempo sul profilo e i follower."],
      ["Case Study: Analisi di Reel Virali","Analizziamo 5 reel che hanno superato il milione di views nella nostra nicchia. Elementi comuni: hook nei primi 0.3s, high energy, valore immediato, produzione curata ma non perfetta, CTA naturale. L'autenticità batte la perfezione."],
      ["Il Workflow Ottimale","Il mio workflow per un reel: 1) Idea e script (10min) 2) Setup e ripresa (20min) 3) Editing e sottotitoli (30min) 4) Caption e hashtag (10min) 5) Pubblicazione e engagement (15min). Totale: 1h 25min per reel di qualità."],
      ["Batch Content Creation","Crea contenuti in batch: dedica un giorno a girare 5-10 reel, un altro a editarli, un altro a programmarli. Il batch elimina il context switching e aumenta la produttività del 300%. È il segreto dei creator più prolifici."],
      ["Gestire i Commenti e l'Engagement","Rispondi a ogni commento nella prima ora. I commenti generano commenti. Fai domande nei commenti per stimolare la conversazione. Usa i commenti negativi come spunto per nuovi contenuti. L'engagement reciproco alimenta l'algoritmo."],
      ["Monetizzare i Reel","Le vie di monetizzazione: brand deal e sponsorizzazioni, vendita di prodotti o servizi propri, affiliate marketing, fondo creator della piattaforma, lead generation verso funnel di vendita. La monetizzazione segue la fiducia dell'audience."],
      ["Il Mindset del Creator","La viralità non è il successo. Il successo è costruire un'audience che ti conosce, si fida e compra. Un reel da 100 views con 5 messaggi diretti vale più di uno da 100K views senza interazione. Misura ciò che conta per il tuo business."],
      ["Recap e Piano d'Azione 30 Giorni","Settimana 1: Pianifica 10 reel e crea i template. Settimana 2: Gira e pubblica 5 reel, analizza. Settimana 3: Ottimizza basandoti sui dati, testa nuovi formati. Settimana 4: Scala ciò che funziona, elimina ciò che non funziona."],
    ],
    "Brand Identity Digitale": generateGenericSlides("Brand Identity Digitale", "Costruire un'identità visiva e verbale coerente", ["Cos'è la Brand Identity","Il brand non è il logo","Valori fondanti del brand","Mission e Vision","Analisi del target","Buyer persona dettagliata","Posizionamento competitivo","Mappa del posizionamento","Archetipo di brand","I 12 archetipi di Jung","Scegliere l'archetipo giusto","Tone of voice: definizione","Tone of voice: applicazione","Naming e payoff","La psicologia dei colori","Scegliere la palette","Tipografia e font pairing","Logo design: principi","Declinazioni del logo","Moodboard e direzione visiva","Template grafici","Coerenza cross-platform","Brand su Instagram","Brand su LinkedIn","Brand su TikTok","Brand nel sito web","Brand nelle email","Il brand kit","Photography style","Iconografia e illustrazioni","Pattern e texture","Packaging digitale","Brand voice in pratica: copy","Brand voice in pratica: social","Brand voice in pratica: ads","Personal branding vs corporate","Costruire autorevolezza","Lo storytelling di brand","Brand activism e valori","Gestire una crisi di brand","Rebranding: quando e come","Misurare la brand awareness","Brand loyalty e community","Brand collaboration","Protezione del brand","Case study: brand di successo","Workshop: il tuo brand kit","Workshop: guida di stile","Workshop: piano editoriale","Recap e piano d'azione"]),
    "Copywriting con AI": generateGenericSlides("Copywriting con AI", "Scrivere copy efficaci con l'intelligenza artificiale", ["Introduzione al Copywriting con AI","L'AI come co-pilota creativo","Limiti e potenzialità dell'AI","Etica nell'uso dell'AI","Prompt engineering: le basi","Anatomia di un buon prompt","Il framework RICE per prompt","Prompt per headline","Prompt per caption Instagram","Prompt per newsletter","Prompt per landing page","Prompt per ads","Prompt per bio profilo","Prompt per CTA","Prompt per email marketing","Prompt per blog post","Varianti e iterazioni","Tono di voce nei prompt","Personalizzare l'output","Editing dell'output AI","Il tocco umano: cosa l'AI non può fare","Costruire una libreria di prompt","Template di prompt per settore","Copy per e-commerce con AI","Copy per servizi con AI","Copy per B2B con AI","Copy per personal brand con AI","Headline formulas + AI","Power words e trigger emotivi","A/B testing con AI","Copywriting persuasivo: AIDA","Copywriting persuasivo: PAS","Copywriting persuasivo: 4P","Storytelling copy con AI","Microcopy e UX writing","SEO copywriting con AI","Copy per video script","Copy per podcast description","Copy per webinar","Social proof e testimonial","Urgency e scarcity nel copy","Long form vs short form","Adattare il copy alla piattaforma","Analisi della concorrenza con AI","Workflow completo di copywriting","Errori comuni da evitare","Case study: campagne reali","Workshop: riscrivi i tuoi copy","Workshop: crea il tuo prompt kit","Recap e piano d'azione"]),
    "Fotografia per Instagram": generateGenericSlides("Fotografia per Instagram", "Scattare foto professionali con lo smartphone", ["Introduzione alla fotografia mobile","Lo smartphone come strumento pro","Impostazioni camera essenziali","La regola dei terzi","Linee guida e composizione","Spazio negativo","Simmetria e pattern","Punto di vista e prospettiva","Foreground e background","La profondità nella foto","Luce naturale: golden hour","Luce naturale: blue hour","Luce dura vs luce morbida","Fotografare in interni","Fotografare in esterni","Il ritratto con smartphone","Flat lay photography","Food photography","Product photography","Street photography per social","Colori e armonia cromatica","Il cerchio cromatico","Palette coerente nel feed","Editing base: esposizione","Editing base: contrasto e toni","Editing avanzato: curve","Editing avanzato: HSL","Preset e filtri personalizzati","Lightroom Mobile: tutorial","VSCO: tutorial","Snapseed: tutorial","Il feed di Instagram: griglia","Pianificare il feed visivamente","Coerenza visiva del profilo","Foto per Stories","Foto per Reel cover","Foto per caroselli","Foto per highlight cover","Shooting in batch","Il setup casalingo","Accessori utili e economici","Composizione per e-commerce","Foto lifestyle e brand","Foto di team e behind the scenes","User generated content","Diritti e watermark","Analizzare foto performanti","Case study: profili esemplari","Workshop: il tuo shooting plan","Workshop: editing dal vivo","Recap e piano d'azione"]),
    "Strategie di Crescita": generateGenericSlides("Strategie di Crescita", "Framework per crescere in modo organico e sostenibile", ["Introduzione alle strategie di crescita","Growth mindset per creator","Definire gli obiettivi SMART","KPI per social media","Analisi della situazione attuale","Analisi SWOT personale","Identificare la nicchia","Sotto-nicchia e micro-nicchia","Content pillars: definizione","Creare i tuoi 3-5 pilastri","Calendario editoriale","Frequenza e consistenza","Il content mix ideale","Contenuti top of funnel","Contenuti middle of funnel","Contenuti bottom of funnel","Crescita organica vs paid","L'algoritmo di Instagram 2026","L'algoritmo di TikTok 2026","L'algoritmo di LinkedIn 2026","SEO per social media","Hashtag strategy avanzata","Collaborazioni strategiche","Cross-promotion","Guest posting e podcast","Community building","Engagement genuino","DM strategy","Newsletter come asset","Funnel di conversione","Lead magnet per creator","Landing page efficaci","Email marketing per creator","Webinar e live","Workshop e eventi","Monetizzazione diretta","Monetizzazione indiretta","Pricing strategy","Scaling del contenuto","Delegare e costruire un team","Tool per la produttività","Automazione responsabile","Analytics e data-driven","Vanity metrics vs real metrics","Pivot: quando cambiare strategia","Case study: da 0 a 10K","Case study: da 10K a 100K","Workshop: il tuo growth plan","Workshop: 90 giorni di azione","Recap e piano d'azione finale"]),
  };
  return banks[topic] || [];
}

function generateGenericSlides(title, desc, titles) {
  const bodies = {
    "Brand Identity Digitale": [
      "La brand identity è l'insieme di elementi visivi, verbali e valoriali che definiscono come il tuo brand viene percepito dal pubblico. È molto più di un logo.",
      "Un logo è solo la punta dell'iceberg. Sotto ci sono valori, missione, tono di voce, estetica, esperienza. Il brand è ciò che le persone dicono di te quando non sei nella stanza.",
      "I valori fondanti guidano ogni decisione del brand. Devono essere autentici, specifici e dimostrabili. Valori generici come 'qualità' e 'innovazione' non differenziano nessuno.",
      "La mission spiega cosa fai e per chi. La vision spiega dove vuoi arrivare. Insieme, creano la bussola strategica del tuo brand e orientano ogni contenuto che produci.",
      "Il target non è 'tutti'. Più specifico è il target, più efficace sarà la comunicazione. Definisci demografia, psicografia, comportamenti, bisogni e frustrazioni del tuo cliente ideale.",
      "La buyer persona è un ritratto dettagliato del cliente tipo. Include nome fittizio, età, professione, obiettivi, sfide, canali preferiti, obiezioni all'acquisto. Crea 2-3 persona per segmento.",
      "Il posizionamento è lo spazio che occupi nella mente del tuo pubblico. Rispondi: per chi sei? Cosa offri di diverso? Perché dovrebbero scegliere te? La risposta è il tuo posizionamento.",
      "La mappa del posizionamento confronta il tuo brand con i competitor su due assi significativi. Ti aiuta a trovare spazi vuoti nel mercato e a comunicare la tua unicità.",
      "L'archetipo di brand è il modello narrativo che incarna la personalità del brand. Jung ha identificato 12 archetipi universali che risuonano con l'inconscio collettivo.",
      "I 12 archetipi: Innocente, Esploratore, Saggio, Eroe, Ribelle, Mago, Uomo Comune, Amante, Burlone, Custode, Creatore, Sovrano. Ognuno ha valori, linguaggio e tono specifici.",
      "Scegli l'archetipo che riflette autenticamente il tuo brand. Non quello che 'sembra figo'. L'archetipo guida il tono di voce, le scelte visive e il tipo di storie che racconti.",
      "Il tone of voice è come il tuo brand suona. Non è cosa dici, ma come lo dici. Definiscilo con 3-4 aggettivi: esperto ma accessibile, energico ma riflessivo, diretto ma empatico.",
      "Applica il tono di voce a ogni touchpoint: post social, email, sito web, customer service, presentazioni. La coerenza costruisce riconoscibilità e fiducia nel tempo.",
      "Il naming deve essere memorabile, pronunciabile, disponibile come dominio e handle social. Il payoff è la frase che sintetizza la promessa del brand in poche parole incisive.",
      "Ogni colore evoca emozioni specifiche. Rosso: energia e urgenza. Blu: fiducia e professionalità. Verde: crescita e natura. Viola: creatività e lusso. Giallo: ottimismo e calore.",
      "Scegli 3-5 colori: un colore primario dominante, un secondario per supporto, un accento per CTA e highlight, e 1-2 neutri per testo e sfondi. Definisci i codici esatti HEX e RGB.",
      "La tipografia comunica personalità. Serif = tradizione e autorevolezza. Sans-serif = modernità e pulizia. Script = eleganza e creatività. Scegli massimo 2 font e usali ovunque.",
      "Un buon logo è semplice, memorabile, versatile, appropriato e senza tempo. Deve funzionare in bianco e nero, in piccolo e in grande, su sfondo chiaro e scuro.",
      "Crea versioni del logo: orizzontale, verticale, icona, monogramma, versione chiara e scura. Ogni contesto richiede la declinazione giusta. Definisci lo spazio minimo attorno al logo.",
      "Il moodboard è una tavola visiva che raccoglie immagini, colori, texture, font e riferimenti che definiscono l'atmosfera del brand. È il punto di partenza per ogni scelta creativa.",
      "I template grafici garantiscono coerenza visiva senza dover progettare da zero ogni volta. Crea template per: post social, storie, copertine, presentazioni, documenti.",
      "La coerenza cross-platform significa che il tuo brand è riconoscibile ovunque. Adatta il formato alla piattaforma ma mantieni palette, font, tono e stile visivo identici.",
      "Su Instagram il brand si esprime attraverso il feed (griglia coerente), le storie (dietro le quinte), i reel (personalità) e la bio (posizionamento). Ogni elemento conta.",
      "Su LinkedIn il brand è più professionale ma non deve essere noioso. Usa la stessa palette, adatta il tono verso l'expertise, condividi insight e thought leadership.",
      "Su TikTok il brand è più raw e autentico. La perfezione visiva conta meno, la personalità conta di più. Mantieni i colori brand ma abbraccia l'estetica 'real' della piattaforma.",
      "Il sito web è la casa del tuo brand. Deve riflettere perfettamente l'identità visiva e verbale. È spesso il primo touchpoint per chi ti scopre: la prima impressione conta.",
      "Le email sono un'estensione del brand. Header con logo, colori coerenti, tono di voce riconoscibile, firma brandizzata. Ogni email è un'opportunità di rafforzare l'identità.",
      "Il brand kit è il documento che raccoglie tutte le linee guida: logo e varianti, palette colori con codici, tipografia, tono di voce, do's and don'ts, template. È la bibbia del brand.",
      "Lo stile fotografico è parte dell'identità. Definisci: luce (naturale/studio), mood (luminoso/scuro), composizione (minimal/ricca), soggetti (persone/oggetti), editing (preset specifici).",
      "L'iconografia deve essere coerente: scegli uno stile (lineare, filled, outlined) e mantienilo. Le icone personalizzate rafforzano il brand più di quelle generiche.",
      "Pattern e texture aggiungono profondità al brand. Un pattern geometrico, una texture organica, un gradiente specifico possono diventare elementi riconoscibili e distintivi.",
      "Il packaging digitale include: copertine e-book, mockup prodotti, grafiche per corsi, badge, certificati. Ogni asset digitale deve respirare l'identità del brand.",
      "Scrivi copy che suoni come il tuo brand. Se il tuo tono è 'diretto e amichevole', una frase come 'Gentilissimo cliente' non funziona. La voce scritta deve essere naturale e coerente.",
      "Sui social la brand voice diventa conversazionale. Rispondi ai commenti, interagisci nelle storie, scrivi caption che suonino come parleresti a un amico. Professionale sì, robotico no.",
      "Nelle ads la brand voice deve essere riconoscibile anche senza il logo. Se qualcuno leggesse solo il testo, dovrebbe capire che sei tu. Questo livello di coerenza richiede pratica.",
      "Il personal branding mette la persona al centro: il volto, i valori, la storia. Il corporate branding astrae dalla persona. Scegli in base al tuo modello di business e ai tuoi obiettivi.",
      "L'autorevolezza si costruisce con costanza: contenuti di valore, risultati dimostrabili, testimonianze, apparizioni media, collaborazioni con brand riconosciuti. È un processo lungo.",
      "Lo storytelling di brand racconta il perché: perché esisti, perché fai quello che fai, quale problema risolvi. La storia crea connessione emotiva più di qualsiasi feature o beneficio.",
      "Il brand activism è prendere posizione su temi rilevanti per i tuoi valori. È rischioso ma autentico. Non farlo per marketing: fallo perché ci credi. Il pubblico distingue la sincerità.",
      "Una crisi di brand si gestisce con: trasparenza immediata, assunzione di responsabilità, piano d'azione concreto, comunicazione costante. Il silenzio peggiora sempre la situazione.",
      "Il rebranding è necessario quando: il brand non riflette più chi sei, il mercato è cambiato, l'audience è diversa, la percezione è negativa. Fallo con strategia, non per noia.",
      "Misura la brand awareness con: menzioni spontanee, ricerche del brand name, traffico diretto al sito, riconoscibilità nei sondaggi. La brand awareness è un asset a lungo termine.",
      "La brand loyalty si costruisce con: esperienza eccellente, community attiva, valori condivisi, comunicazione costante, programmi di fidelizzazione. Un cliente fedele vale 10 clienti nuovi.",
      "Le collaborazioni di brand funzionano quando i valori sono allineati, le audience complementari e il valore reciproco. Una buona collaborazione amplifica entrambi i brand.",
      "Proteggi il brand: registra il marchio, monitora l'uso non autorizzato, definisci linee guida chiare per partner e collaboratori. Un brand non protetto è un brand vulnerabile.",
      "Analizziamo brand che hanno costruito identità iconiche: cosa li rende riconoscibili? Coerenza totale, storytelling forte, community attiva, evoluzione senza perdere l'essenza.",
      "Workshop pratico: crea il tuo brand kit completo. Logo + varianti, palette con codici, 2 font, tono di voce con esempi, moodboard, 3 template social. Questo è il tuo fondamento.",
      "Workshop pratico: scrivi la tua guida di stile. Documenta ogni decisione visiva e verbale. Questa guida sarà il riferimento per te e per chiunque lavori con il tuo brand.",
      "Workshop pratico: crea un piano editoriale di 30 giorni che rifletta la tua brand identity. Ogni contenuto deve respirare i tuoi valori, il tuo tono e la tua estetica.",
      "Hai completato il percorso sulla Brand Identity Digitale. Il tuo piano d'azione: finalizza il brand kit, implementa la guida di stile, pubblica 4 settimane di contenuti on-brand.",
    ],
  };
  return titles.map((t, i) => {
    const bodyBank = bodies[title];
    const body = bodyBank ? bodyBank[i] : `In questa lezione approfondiamo "${t}" nel contesto di ${desc}. Questo argomento è fondamentale per padroneggiare ${title} e costruire una presenza digitale professionale e riconoscibile. Analizzeremo casi pratici, framework consolidati e strumenti operativi che potrai applicare immediatamente.`;
    return [t, body];
  });
}

const COURSES = [
  { id:"c1", title:"Storytelling per i Social", desc:"Impara a costruire narrazioni che catturano l'attenzione e creano connessione autentica con la tua audience.", category:"Content", premium:false, lessons:50, duration:"2h 30min", level:"Intermedio", students:1243, icon:"📖" },
  { id:"c2", title:"Reel che Convertono", desc:"Dalla pianificazione al montaggio: crea reel che non solo ottengono views, ma portano risultati concreti al tuo business.", category:"Video", premium:true, lessons:50, duration:"2h 20min", level:"Base", students:2891, icon:"🎬" },
  { id:"c3", title:"Brand Identity Digitale", desc:"Costruisci un'identità visiva e verbale coerente che ti renda riconoscibile e memorabile online.", category:"Branding", premium:true, lessons:50, duration:"2h 45min", level:"Avanzato", students:876, icon:"✨" },
  { id:"c4", title:"Copywriting con AI", desc:"Usa l'intelligenza artificiale come co-pilota creativo per scrivere copy efficaci in metà del tempo.", category:"AI", premium:false, lessons:50, duration:"2h 15min", level:"Base", students:3402, icon:"🤖" },
  { id:"c5", title:"Fotografia per Instagram", desc:"Scatta foto professionali con il tuo smartphone e crea un feed coerente e accattivante.", category:"Visual", premium:true, lessons:50, duration:"2h 30min", level:"Intermedio", students:1567, icon:"📷" },
  { id:"c6", title:"Strategie di Crescita", desc:"Framework e tattiche testate per far crescere la tua presenza digitale in modo organico e sostenibile.", category:"Growth", premium:false, lessons:50, duration:"2h 40min", level:"Avanzato", students:2105, icon:"🚀" },
].map(c => ({ ...c, slides: makeSlides(c.title).map(([title, body]) => ({ title, body })) }));

const REELS = [
  { id:"r1", title:"5 Hook per Reel Virali", duration:"15 min", views:"12.4K", premium:false, color:C.magenta, icon:"🎯",
    slides: [
      { title:"Perché gli Hook sono Tutto", body:"Nei social hai 3 secondi per catturare l'attenzione. Se il tuo hook non funziona, il resto del contenuto è invisibile. L'hook è la porta d'ingresso: se è chiusa, nessuno entrerà nella tua storia." },
      { title:"Hook #1: La Domanda Provocatoria", body:"'Sai perché il 90% dei reel fallisce?' — La domanda funziona perché attiva il bisogno di risposta del cervello. La domanda migliore è quella che il lettore crede di sapere ma di cui non è sicuro." },
      { title:"Hook #2: La Statistica Shock", body:"'Ho perso 10K follower in un giorno' — I numeri creano concretezza. Il contrasto tra un numero alto e una situazione negativa crea tensione immediata. Non inventare statistiche: l'autenticità è fondamentale." },
      { title:"Hook #3: L'Affermazione Controintuitiva", body:"'Smettila di postare ogni giorno' — Questa tecnica sfida le credenze del lettore, creando un impulso irresistibile a continuare per capire il perché. Usa con moderazione." },
      { title:"Hook #4: Lo Scenario Ipotetico", body:"'E se ti dicessi che bastano 3 secondi per cambiare tutto?' — Lo scenario 'e se' invita il lettore a immaginare una realtà alternativa. Funziona perché il cervello non distingue tra immaginazione e realtà." },
      { title:"Hook #5: Il Cliffhanger", body:"'Quello che è successo dopo ha cambiato tutto...' — Il cliffhanger sfrutta l'effetto Zeigarnik: il cervello ha bisogno di chiusura. Lo spettatore DEVE continuare per sapere come finisce." },
      { title:"Come Scegliere l'Hook Giusto", body:"Vuoi educare? Usa la domanda. Vuoi vendere? Usa la statistica. Vuoi intrattenere? Usa il cliffhanger. Testa 3 hook diversi sullo stesso contenuto e vedi quale performa meglio." },
      { title:"Esercizio Pratico", body:"Prendi il tuo ultimo post e riscrivi l'hook usando tutte e 5 le tecniche. Quale suona meglio? Pubblicalo e confronta le metriche. Ripeti per 2 settimane: troverai il TUO stile di hook." },
    ]},
  { id:"r2", title:"Transizioni Pro con CapCut", duration:"20 min", views:"8.7K", premium:true, color:C.gold, icon:"✂️",
    slides: [
      { title:"Perché le Transizioni Contano", body:"Una transizione professionale trasforma un reel amatoriale in contenuto premium. Le transizioni guidano l'occhio, mantengono il ritmo e creano un'esperienza fluida che tiene incollati." },
      { title:"Transizione #1: Il Whip Pan", body:"Muovi la camera velocemente da un lato all'altro alla fine della prima clip, inizia la seconda con lo stesso movimento. In CapCut: taglia nel punto del movimento veloce e allinea le direzioni." },
      { title:"Transizione #2: Il Match Cut", body:"Stessa posizione del corpo, scena diversa. Esempio: alzi la mano in ufficio, nella clip successiva abbassi la mano in spiaggia. Usa i keyframe per allineare perfettamente." },
      { title:"Transizione #3: Lo Snap", body:"Schiocca le dita e cambia scena. Taglia esattamente sul frame dello schiocco. Aggiungi un effetto sonoro 'snap'. È la transizione più semplice ma tra le più efficaci." },
      { title:"Transizione #4: Il Zoom Through", body:"Zooma verso un oggetto fino a coprire lo schermo, poi nella clip successiva zooma indietro dalla nuova scena. Usa lo zoom digitale al 300% come punto di giunzione." },
      { title:"Transizione #5: La Mask Transition", body:"Copri la lente con la mano o muoviti verso la camera. La seconda clip inizia scoprendo la lente. Usa la funzione 'mask' per una transizione più pulita." },
      { title:"Workflow Completo in CapCut", body:"1) Importa le clip 2) Taglia le parti inutili 3) Allinea i punti di transizione 4) Effetti sonori 5) Musica 6) Sottotitoli 7) Color correction 8) Esporta a 1080p." },
    ]},
  { id:"r3", title:"Come Usare i Trend Audio", duration:"12 min", views:"21.1K", premium:false, color:C.green, icon:"🎵",
    slides: [
      { title:"Il Potere degli Audio Trending", body:"Gli audio trending amplificano la reach del 300%. L'algoritmo favorisce i contenuti con audio popolari. Ma non basta usarli: bisogna usarli nel modo giusto e al momento giusto." },
      { title:"Dove Trovare Audio in Crescita", body:"Instagram → Reels → la freccia ↑ accanto al nome dell'audio indica che è in crescita. Salva quelli con meno di 10K utilizzi: sono nella fase di crescita e danno più visibilità." },
      { title:"Timing: Il Ciclo di Vita di un Audio", body:"Nascita (0-3 giorni) → Crescita (3-10 giorni, IDEALE) → Picco (10-20 giorni, saturato) → Declino. Usa l'audio nella fase di crescita per massimizzare la reach." },
      { title:"Adattare l'Audio alla Nicchia", body:"Non usare un trend comico per contenuti seri. L'audio deve supportare il messaggio. Audio motivazionale = fitness, business. Audio ironico = lifestyle, entertainment." },
      { title:"Creare Audio Originali", body:"Se hai una frase iconica o un format ricorrente, crea audio originali. Se diventa trending, la tua visibilità esplode. Ma non forzare: lascia che sia il pubblico a renderlo virale." },
      { title:"Esercizio Settimanale", body:"Trova 5 audio trending nella tua nicchia, crea un reel per ognuno. Pubblica uno al giorno, dopo 5 giorni analizza quale ha performato meglio. Usa quel format per 2 settimane." },
    ]},
  { id:"r4", title:"Storytelling in 30 Secondi", duration:"18 min", views:"15.3K", premium:true, color:C.pink, icon:"📖",
    slides: [
      { title:"L'Arte della Compressione Narrativa", body:"Raccontare una storia in 30 secondi non è tagliare una storia lunga. È distillare l'essenza emotiva in pochi secondi perfetti. Ogni parola, ogni frame deve giustificare la sua presenza." },
      { title:"La Struttura dei 30 Secondi", body:"Sec 1-5: Hook emotivo e contesto. Sec 5-15: Conflitto e sviluppo. Sec 15-25: Svolta e trasformazione. Sec 25-30: Payoff e CTA. Il viaggio dell'eroe in mezzo minuto." },
      { title:"L'Hook Emotivo (Sec 1-5)", body:"'Un anno fa ero al punto più basso' — In 5 secondi stabilisci CHI sei e DOVE ti trovavi. Non dire 'non avevo clienti', dì 'mi svegliavo ogni mattina con la paura'." },
      { title:"Il Conflitto (Sec 5-15)", body:"'Ho provato tutto, ho speso €5000 in ads senza risultati.' — Il conflitto deve essere specifico e riconoscibile. Il pubblico deve pensare 'anch'io ci sono passato'." },
      { title:"La Svolta (Sec 15-25)", body:"'Poi ho cambiato UNA sola cosa' — La svolta deve essere semplice e sorprendente. Non 'ho cambiato strategia', ma 'ho smesso di vendere e ho iniziato ad ascoltare'." },
      { title:"Il Payoff (Sec 25-30)", body:"'Oggi faccio 10x quello che facevo prima.' — Chiudi il cerchio emotivo e apri una porta. Non esagerare con i risultati: l'autenticità vince sempre sull'iperbole." },
      { title:"Voice Over vs Testo vs Camera", body:"Storie emotive: voice over + b-roll. Storie informative: testo overlay + musica. Storie personali: parlato diretto in camera. Scegli il formato che amplifica l'emozione." },
      { title:"Esercizio: La Tua Storia", body:"Rispondi in una frase: 1) Dov'eri un anno fa? 2) Qual era il problema? 3) Cosa non ha funzionato? 4) Cosa hai cambiato? 5) Il risultato? Assembla le 5 frasi: ecco la tua storia." },
    ]},
  { id:"r5", title:"Editing Cinematic Mobile", duration:"22 min", views:"6.9K", premium:true, color:C.magentaDark, icon:"🎬",
    slides: [
      { title:"Il Look Cinematico con lo Smartphone", body:"Non serve una RED camera. Con il tuo smartphone e le giuste tecniche di editing puoi creare contenuti che sembrano usciti da uno studio. Il segreto è nella post-produzione." },
      { title:"Aspect Ratio 2.35:1", body:"Le bande nere (letterbox) urlano 'cinema'. In CapCut: aggiungi un overlay nero 2.35:1 o ridimensiona il video. Questo semplice trucco cambia immediatamente la percezione di qualità." },
      { title:"Color Grading Cinematico", body:"La formula: toni caldi nelle highlights, ombre fredde (blu/teal). Riduci saturazione del 15%, alza le ombre per un look 'faded'. Salva come preset per coerenza visiva." },
      { title:"Slow Motion Strategico", body:"Il slow motion enfatizza i momenti emotivi. Non usarlo ovunque: solo sui momenti chiave. Il contrasto tra velocità normale e slow crea impatto drammatico." },
      { title:"Movimenti di Camera Fluidi", body:"Senza gimbal: gomiti al corpo, muoviti con le gambe. Per pan e tilt: ruota il busto. Stabilizzazione di CapCut al 50% massimo o perdi qualità." },
      { title:"Grana e Audio Design", body:"Aggiungi grana leggera (10-20% opacità) per un look organico. Per l'audio: separa, pulisci con noise reduction, aggiungi musica a -12dB. Il cinema è 50% audio." },
      { title:"Composizione e Luce", body:"Regola dei terzi, leading lines, profondità con foreground/background. Luce laterale per drammaticità. Golden hour è il tuo migliore alleato gratuito." },
      { title:"Workflow Completo", body:"1) Gira in 4K 60fps 2) Taglia e assembla 3) Letterbox 2.35:1 4) Color grading 5) Slow motion 6) Stabilizzazione 7) Grana 8) Audio design 9) Esporta 1080p 24fps." },
    ]},
  { id:"r6", title:"Caption che Convertono", duration:"15 min", views:"9.2K", premium:false, color:C.gold, icon:"✍️",
    slides: [
      { title:"La Caption Non È un Ripensamento", body:"La caption è parte della strategia. Aumenta il tempo sulla pagina, genera salvataggi, stimola commenti. È il secondo hook del tuo contenuto dopo il visual." },
      { title:"La Struttura AIDA", body:"Attention: hook nella prima riga. Interest: contesto e rilevanza. Desire: beneficio concreto. Action: CTA specifica. Funziona per qualsiasi tipo di post." },
      { title:"La Prima Riga: Tutto Si Gioca Qui", body:"Instagram mostra solo 1-2 righe. Tecniche: inizia con un numero, una domanda o un'affermazione forte. Mai iniziare con 'Ciao ragazzi' o formule generiche." },
      { title:"Il Corpo: Valore Reale", body:"Dopo l'hook, offri valore vero. Paragrafi corti (2-3 righe), spazi per leggibilità mobile. Lunghezza ideale: 150-300 parole per massimizzare il tempo sulla pagina." },
      { title:"La CTA Specifica", body:"Non 'lasciate un like'. Ma: 'Salva per dopo' (salvataggi), 'Tagga chi deve leggere' (reach), 'Scrivi nei commenti il tuo errore più grande' (engagement)." },
      { title:"Emoji e Hashtag", body:"Max 3-4 emoji come separatori, mai 5 di fila. Hashtag: 5-15 mix tra nicchia specifica, ampia e generali. Alla fine della caption o nel primo commento." },
      { title:"Esercizio: Riscrivi 5 Caption", body:"Prendi i tuoi ultimi 5 post, riscrivi ogni caption con AIDA. L'hook è forte? Il corpo offre valore? La CTA è specifica? Pubblica come carosello 'Prima vs Dopo'." },
    ]},
];

const COMMUNITY = [
  { id:1, author:"Maria R.", avatar:"MR", time:"2h fa", content:"Ho appena finito il corso di Storytelling e wow, le mie caption sono migliorate tantissimo! Qualcuno vuole fare un challenge insieme?", likes:24, comments:8, tag:"Successi" },
  { id:2, author:"Luca T.", avatar:"LT", time:"4h fa", content:"Cerco un collaboratore per un progetto di reel per un brand di fitness. Chi è dentro? 💪", likes:15, comments:12, tag:"Collaborazioni" },
  { id:3, author:"Sofia B.", avatar:"SB", time:"6h fa", content:"Consiglio: usate il template 'Neon Gradient' per le copertine, i risultati sono pazzi!", likes:42, comments:19, tag:"Tips" },
  { id:4, author:"Marco D.", avatar:"MD", time:"1g fa", content:"Qualcuno ha provato a generare reel con lo stile 'Cinematic'? Non riesco a ottenere il look giusto...", likes:8, comments:14, tag:"Domande" },
];

/* ─── COMPONENTS ─── */
function Badge({ children, color = C.magenta, glow = false }) {
  return <span style={{ display:"inline-flex", alignItems:"center", gap:4, background:color+"14", color, fontSize:11, fontWeight:700, padding:"3px 10px", borderRadius:8, letterSpacing:0.3, boxShadow:glow?`0 0 12px ${color}30`:"none", fontFamily:"var(--fb)" }}>{children}</span>;
}

function Btn({ children, onClick, variant="primary", disabled=false, style:sx={} }) {
  const base = { fontFamily:"var(--fb)", fontWeight:600, fontSize:14, border:"none", borderRadius:12, cursor:disabled?"not-allowed":"pointer", display:"inline-flex", alignItems:"center", gap:8, transition:"all 0.25s", opacity:disabled?0.5:1, whiteSpace:"nowrap" };
  const v = {
    primary: { background:`linear-gradient(135deg, ${C.magenta}, ${C.magentaDark})`, color:C.white, padding:"11px 24px", boxShadow:`0 4px 20px ${C.magentaGlow}` },
    gold: { background:`linear-gradient(135deg, ${C.gold}, #B8943A)`, color:C.white, padding:"11px 24px", boxShadow:`0 4px 20px ${C.goldGlow}` },
    ghost: { background:"transparent", color:C.sub, padding:"10px 18px", border:`1px solid ${C.border}` },
  };
  return <button onClick={disabled?undefined:onClick} style={{ ...base, ...v[variant], ...sx }}>{children}</button>;
}

function ReelPlayer({ scenes }) {
  const [currentScene, setCurrentScene] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!playing) return;
    const dur = parseInt(scenes[currentScene]?.duration || "3") * 1000;
    const interval = 50;
    let elapsed = 0;
    const timer = setInterval(() => {
      elapsed += interval;
      setProgress((elapsed / dur) * 100);
      if (elapsed >= dur) {
        setCurrentScene(prev => (prev + 1) % scenes.length);
        elapsed = 0;
        setProgress(0);
      }
    }, interval);
    return () => clearInterval(timer);
  }, [currentScene, playing, scenes]);

  const scene = scenes[currentScene];
  const gradients = [
    "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",
    "linear-gradient(135deg, #2d1b69, #11998e)",
    "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
    "linear-gradient(135deg, #1f1c2c, #928dab)",
    "linear-gradient(135deg, #0c0c1d, #3a1c71, #d76d77)",
    "linear-gradient(135deg, #141e30, #243b55)",
    "linear-gradient(135deg, #1a002e, #5b2c6f, #1a002e)",
  ];

  return (
    <div style={{ position:"relative", borderRadius:18, overflow:"hidden", aspectRatio:"9/16", background:gradients[currentScene % gradients.length], transition:"background 1s ease" }}
      onClick={() => setPlaying(!playing)}
    >
      {/* Animated background particles */}
      <div style={{ position:"absolute", inset:0, overflow:"hidden" }}>
        {[...Array(6)].map((_,i) => (
          <div key={i} style={{
            position:"absolute", borderRadius:"50%",
            width: 8+i*12, height: 8+i*12,
            background:`rgba(255,255,255,${0.03+i*0.015})`,
            left:`${15+i*14}%`, top:`${10+i*13}%`,
            animation:`float${i%3} ${4+i}s ease-in-out infinite`,
          }} />
        ))}
      </div>

      {/* Scene number */}
      <div style={{ position:"absolute", top:12, left:12, background:"rgba(0,0,0,0.5)", borderRadius:8, padding:"4px 10px", color:"#fff", fontSize:11, fontWeight:600, fontFamily:"var(--fb)", backdropFilter:"blur(4px)" }}>
        Scena {scene.scene}/{scenes.length}
      </div>

      {/* Music indicator */}
      <div style={{ position:"absolute", top:12, right:12, display:"flex", alignItems:"center", gap:4 }}>
        {[...Array(4)].map((_,i) => (
          <div key={i} style={{
            width:3, borderRadius:2, background:"#fff",
            height: playing ? undefined : 6,
            animation: playing ? `musicBar 0.8s ease-in-out infinite ${i*0.15}s` : "none",
            minHeight:3, maxHeight:16,
          }} />
        ))}
      </div>

      {/* Center content */}
      <div style={{ position:"absolute", inset:0, display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", padding:"20px 18px", textAlign:"center" }}>
        {/* Visual description icon */}
        <div style={{
          width:60, height:60, borderRadius:"50%",
          background:"rgba(255,255,255,0.1)", backdropFilter:"blur(8px)",
          display:"flex", alignItems:"center", justifyContent:"center",
          marginBottom:16, border:"1px solid rgba(255,255,255,0.15)",
          animation: playing ? "scaleIn 0.5s ease-out" : "none",
        }}>
          <span style={{ fontSize:28 }}>{["📷","🎬","✂️","💡","🎯","🎤","✨"][currentScene % 7]}</span>
        </div>

        {/* Text overlay */}
        {scene.text_overlay && (
          <div style={{
            color:"#fff", fontSize:18, fontWeight:800, fontFamily:"var(--fh)",
            textShadow:"0 2px 20px rgba(0,0,0,0.5)",
            lineHeight:1.3, marginBottom:12, maxWidth:"90%",
            animation: "fadeUp 0.6s ease-out",
          }}>
            {scene.text_overlay}
          </div>
        )}

        {/* Voiceover subtitle */}
        {scene.voiceover && (
          <div style={{
            background:"rgba(0,0,0,0.6)", backdropFilter:"blur(6px)",
            borderRadius:10, padding:"8px 14px", maxWidth:"90%",
            animation: "fadeUp 0.8s ease-out",
          }}>
            <div style={{ color:"rgba(255,255,255,0.9)", fontSize:12, fontFamily:"var(--fb)", lineHeight:1.5, fontStyle:"italic" }}>
              🎤 {scene.voiceover}
            </div>
          </div>
        )}
      </div>

      {/* Transition label */}
      <div style={{ position:"absolute", bottom:56, left:12, background:"rgba(155,27,77,0.7)", borderRadius:6, padding:"3px 8px", backdropFilter:"blur(4px)" }}>
        <span style={{ color:"#fff", fontSize:10, fontFamily:"var(--fb)", fontWeight:600 }}>{scene.transition}</span>
      </div>

      {/* Music mood */}
      <div style={{ position:"absolute", bottom:56, right:12, background:"rgba(0,0,0,0.5)", borderRadius:6, padding:"3px 8px", backdropFilter:"blur(4px)" }}>
        <span style={{ color:"rgba(255,255,255,0.7)", fontSize:10, fontFamily:"var(--fb)" }}>🎵 {scene.music_mood?.split(",")[0]}</span>
      </div>

      {/* Play/Pause overlay */}
      {!playing && (
        <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", background:"rgba(0,0,0,0.3)" }}>
          <div style={{ width:56, height:56, borderRadius:"50%", background:"rgba(255,255,255,0.2)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:24, backdropFilter:"blur(4px)" }}>▶</div>
        </div>
      )}

      {/* Bottom progress + controls */}
      <div style={{ position:"absolute", bottom:0, left:0, right:0, padding:"8px 12px 10px" }}>
        {/* Scene progress dots */}
        <div style={{ display:"flex", gap:3, marginBottom:6 }}>
          {scenes.map((_,i) => (
            <div key={i} style={{ flex:1, height:2.5, borderRadius:2, background:"rgba(255,255,255,0.2)", overflow:"hidden", cursor:"pointer" }}
              onClick={e => { e.stopPropagation(); setCurrentScene(i); setProgress(0); }}
            >
              <div style={{
                height:"100%", borderRadius:2,
                background: i < currentScene ? "#fff" : i === currentScene ? "#fff" : "transparent",
                width: i < currentScene ? "100%" : i === currentScene ? `${progress}%` : "0%",
                transition: i === currentScene ? "none" : "width 0.3s",
              }} />
            </div>
          ))}
        </div>
        {/* Duration */}
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <span style={{ color:"rgba(255,255,255,0.6)", fontSize:10, fontFamily:"var(--fb)" }}>{scene.duration}</span>
          <span style={{ color:"rgba(255,255,255,0.6)", fontSize:10, fontFamily:"var(--fb)" }}>~{scenes.reduce((a,s)=>a+parseInt(s.duration),0)}s totali</span>
        </div>
      </div>

      {/* Side actions */}
      <div style={{ position:"absolute", right:10, top:"45%", display:"flex", flexDirection:"column", gap:16, alignItems:"center" }}>
        {["❤️","💬","↗️","🔖"].map((e,i) => (
          <div key={i} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:2 }}>
            <span style={{ fontSize:20, filter:"drop-shadow(0 1px 3px rgba(0,0,0,0.3))" }}>{e}</span>
            <span style={{ color:"#fff", fontSize:9, fontFamily:"var(--fb)" }}>{["24K","1.2K","892","5.6K"][i]}</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes float0{0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-20px) scale(1.1)}}
        @keyframes float1{0%,100%{transform:translateY(0) translateX(0)}50%{transform:translateY(-15px) translateX(10px)}}
        @keyframes float2{0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-25px) scale(0.9)}}
        @keyframes musicBar{0%,100%{height:4px}50%{height:16px}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes scaleIn{from{opacity:0;transform:scale(0.7)}to{opacity:1;transform:scale(1)}}
      `}</style>
    </div>
  );
}

function Logo({ size=36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" style={{ borderRadius:size*0.2, flexShrink:0 }}>
      <rect width="100" height="100" rx="16" fill="#FAF6F1"/>
      {/* Y with radio waves */}
      <text x="50" y="42" textAnchor="middle" dominantBaseline="central" fill="#9B1B4D" style={{ fontSize:38, fontWeight:800, fontFamily:"'Playfair Display',serif" }}>Y</text>
      {/* Radio waves left */}
      <path d="M22 18 Q16 28 22 38" stroke="#9B1B4D" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M27 22 Q23 28 27 34" stroke="#9B1B4D" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      {/* Radio waves right */}
      <path d="M78 18 Q84 28 78 38" stroke="#9B1B4D" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M73 22 Q77 28 73 34" stroke="#9B1B4D" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      {/* Digital text */}
      <text x="42" y="64" textAnchor="middle" dominantBaseline="central" fill="#C8A84E" style={{ fontSize:16, fontWeight:700, fontFamily:"'Playfair Display',serif", letterSpacing:"-0.5px" }}>Digital</text>
      {/* V */}
      <text x="72" y="82" textAnchor="middle" dominantBaseline="central" fill="#9B1B4D" style={{ fontSize:30, fontWeight:800, fontFamily:"'Playfair Display',serif" }}>V</text>
    </svg>
  );
}

/* ─── LOGIN ─── */
function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const valid = email.trim().length > 0;
  return (
    <div style={{ minHeight:"100vh", background:`linear-gradient(160deg, ${C.bg}, #F5EDE3)`, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"var(--fb)" }}>
      <div style={{ background:C.white, border:`1px solid ${C.border}`, borderRadius:24, padding:"48px 40px", width:"100%", maxWidth:400, textAlign:"center", boxShadow:"0 20px 60px rgba(0,0,0,0.06)" }}>
        <div style={{ marginBottom:20 }}><Logo size={64} /></div>
        <h1 style={{ fontFamily:"var(--fh)", color:C.magenta, fontSize:22, margin:"0 0 2px" }}>Your Digital Voice</h1>
        <p style={{ color:C.sub, fontSize:14, margin:"0 0 32px" }}>Accedi per continuare</p>
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="La tua email" onKeyDown={e=>e.key==="Enter"&&valid&&onLogin(email.trim())}
          style={{ width:"100%", padding:"14px 18px", borderRadius:14, background:C.card, border:`1px solid ${C.border}`, color:C.text, fontSize:15, fontFamily:"var(--fb)", outline:"none", marginBottom:16, boxSizing:"border-box" }} />
        <Btn onClick={()=>valid&&onLogin(email.trim())} disabled={!valid} style={{ width:"100%", justifyContent:"center" }}>Accedi →</Btn>
        <p style={{ color:C.dim, fontSize:12, marginTop:20 }}>Demo — inserisci qualsiasi email</p>
      </div>
    </div>
  );
}

/* ─── COURSE PAGE ─── */
function CoursePage({ course, onBack, user, onSubscribe }) {
  const [slide, setSlide] = useState(0);
  const s = course.slides[slide];
  const total = course.slides.length;
  return (
    <div>
      <Btn variant="ghost" onClick={onBack} style={{ marginBottom:24 }}>← Torna ai corsi</Btn>
      <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:24, flexWrap:"wrap" }}>
        <span style={{ fontSize:36 }}>{course.icon}</span>
        <div>
          <h1 style={{ fontFamily:"var(--fh)", color:C.text, fontSize:22, margin:0 }}>{course.title}</h1>
          <p style={{ color:C.sub, fontSize:13, margin:"4px 0 0", fontFamily:"var(--fb)" }}>{course.category} · {course.level} · Lezione {slide+1} di {total}</p>
        </div>
        {course.premium && <Badge color={C.gold} glow>★ PREMIUM</Badge>}
      </div>
      {/* progress */}
      <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:28 }}>
        <div style={{ flex:1, height:6, background:C.borderLight, borderRadius:3, overflow:"hidden" }}>
          <div style={{ width:`${((slide+1)/total)*100}%`, height:"100%", borderRadius:3, background:`linear-gradient(90deg, ${C.magenta}, ${C.gold})`, transition:"width 0.4s ease" }} />
        </div>
        <span style={{ color:C.sub, fontSize:13, fontFamily:"var(--fb)", fontWeight:600 }}>{Math.round(((slide+1)/total)*100)}%</span>
      </div>
      {/* slide */}
      <div style={{ background:C.white, border:`1px solid ${C.border}`, borderRadius:20, padding:"40px 36px", minHeight:200, boxShadow:"0 4px 20px rgba(0,0,0,0.03)" }}>
        <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:20 }}>
          <span style={{ background:C.magentaSoft, color:C.magenta, fontWeight:700, fontSize:13, padding:"4px 12px", borderRadius:8, fontFamily:"var(--fb)" }}>Slide {slide+1}</span>
        </div>
        <h2 style={{ fontFamily:"var(--fh)", color:C.text, fontSize:20, margin:"0 0 18px" }}>{s.title}</h2>
        <p style={{ fontFamily:"var(--fb)", color:C.sub, fontSize:15, lineHeight:1.85, margin:0 }}>{s.body}</p>
      </div>
      {/* nav */}
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:20 }}>
        <Btn variant="ghost" onClick={()=>setSlide(Math.max(0,slide-1))} disabled={slide===0}>← Precedente</Btn>
        <div style={{ display:"flex", gap:8 }}>
          <input type="number" min={1} max={total} value={slide+1} onChange={e=>{const v=parseInt(e.target.value);if(v>=1&&v<=total)setSlide(v-1);}}
            style={{ width:60, textAlign:"center", padding:"8px", borderRadius:8, border:`1px solid ${C.border}`, background:C.white, color:C.text, fontSize:14, fontFamily:"var(--fb)", outline:"none" }} />
          <span style={{ color:C.dim, fontSize:13, alignSelf:"center", fontFamily:"var(--fb)" }}>/ {total}</span>
        </div>
        {slide<total-1 ? <Btn onClick={()=>setSlide(slide+1)}>Successiva →</Btn> : <Btn variant="gold" onClick={onBack}>✓ Completa</Btn>}
      </div>
    </div>
  );
}

/* ─── DASHBOARD ─── */
function DashboardPage({ user, onSubscribe }) {
  const stats = [
    { label:"Corsi disponibili", value:"6", icon:"📚", color:C.magenta },
    { label:"Slide totali", value:"300", icon:"📝", color:C.gold },
    { label:"Ore di contenuto", value:"14h+", icon:"⏱", color:C.green },
    { label:"Community", value:"156", icon:"💬", color:C.pink },
  ];
  return (
    <div>
      <h1 style={{ fontFamily:"var(--fh)", color:C.text, fontSize:26, margin:"0 0 4px" }}>Bentornato 👋</h1>
      <p style={{ color:C.sub, fontSize:14, margin:"0 0 28px", fontFamily:"var(--fb)" }}>Ecco la tua Digital Voice</p>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(170px, 1fr))", gap:14, marginBottom:28 }}>
        {stats.map((s,i)=>(
          <div key={i} style={{ background:C.white, borderRadius:16, padding:"20px 22px", border:`1px solid ${C.border}`, boxShadow:"0 2px 12px rgba(0,0,0,0.03)" }}>
            <div style={{ display:"flex", justifyContent:"space-between", marginBottom:14 }}>
              <span style={{ fontSize:26 }}>{s.icon}</span>
              <div style={{ width:8, height:8, borderRadius:"50%", background:s.color, boxShadow:`0 0 10px ${s.color}40` }} />
            </div>
            <div style={{ color:C.text, fontSize:24, fontWeight:700, fontFamily:"var(--fh)" }}>{s.value}</div>
            <div style={{ color:C.sub, fontSize:12, marginTop:4, fontFamily:"var(--fb)" }}>{s.label}</div>
          </div>
        ))}
      </div>
      {!user.isSubscribed && (
        <button onClick={onSubscribe} style={{ width:"100%", padding:"18px 28px", borderRadius:18, cursor:"pointer", background:C.goldSoft, border:`1px solid ${C.gold}30`, display:"flex", alignItems:"center", gap:16, fontFamily:"var(--fb)" }}>
          <span style={{ fontSize:28 }}>⚡</span>
          <div style={{ flex:1, textAlign:"left" }}><div style={{ color:C.gold, fontWeight:700, fontSize:15 }}>Passa a Premium</div><div style={{ color:C.sub, fontSize:13 }}>Sblocca tutti i corsi e contenuti esclusivi</div></div>
          <Badge color={C.gold} glow>UPGRADE</Badge>
        </button>
      )}
    </div>
  );
}

/* ─── CORSI LIST ─── */
function CorsiPage({ user, onOpenCourse, onSubscribe, useCredit, hasAccess }) {
  const [filter, setFilter] = useState("Tutti");
  const filtered = COURSES.filter(c=>{ if(filter==="Gratuiti")return !c.premium; if(filter==="Premium")return c.premium; return true; });
  return (
    <div>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:24, flexWrap:"wrap", gap:12 }}>
        <div>
          <h1 style={{ fontFamily:"var(--fh)", color:C.text, fontSize:24, margin:"0 0 4px" }}>Corsi</h1>
          <p style={{ color:C.sub, fontSize:14, margin:0, fontFamily:"var(--fb)" }}>{COURSES.length} corsi · 300 slide · 14+ ore</p>
        </div>
        <div style={{ display:"flex", gap:8 }}>
          {["Tutti","Gratuiti","Premium"].map(f=>( <button key={f} onClick={()=>setFilter(f)} style={{ padding:"8px 18px", borderRadius:10, fontSize:13, fontWeight:600, fontFamily:"var(--fb)", cursor:"pointer", background:filter===f?C.magenta:"transparent", color:filter===f?C.white:C.sub, border:filter===f?"none":`1px solid ${C.border}`, transition:"all 0.2s" }}>{f}</button> ))}
        </div>
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))", gap:16 }}>
        {filtered.map(course=>{
          const locked=course.premium&&!user.isSubscribed&&!hasAccess();
          return (
            <div key={course.id} onClick={()=>{if(course.premium&&!user.isSubscribed){if(useCredit()){onOpenCourse(course);}}else{onOpenCourse(course);}}} style={{ background:C.white, borderRadius:18, border:`1px solid ${C.border}`, overflow:"hidden", cursor:"pointer", transition:"all 0.3s", boxShadow:"0 2px 12px rgba(0,0,0,0.03)" }}>
              <div style={{ height:100, background:locked?C.goldSoft:C.magentaSoft, display:"flex", alignItems:"center", justifyContent:"center", fontSize:40, position:"relative" }}>
                {course.icon}
                {course.premium&&<span style={{ position:"absolute", top:10, right:10 }}><Badge color={C.gold} glow>★ PREMIUM</Badge></span>}
                <span style={{ position:"absolute", top:10, left:10 }}><Badge color={C.magenta}>{course.level}</Badge></span>
              </div>
              <div style={{ padding:"16px 20px 20px" }}>
                <Badge color={C.magenta}>{course.category}</Badge>
                <h3 style={{ fontFamily:"var(--fh)", color:C.text, fontSize:16, margin:"10px 0 8px" }}>{course.title}</h3>
                <p style={{ color:C.sub, fontSize:13, lineHeight:1.5, margin:"0 0 12px", fontFamily:"var(--fb)" }}>{course.desc.slice(0,90)}...</p>
                <div style={{ display:"flex", gap:12, color:C.dim, fontSize:12, fontFamily:"var(--fb)", marginBottom:14, flexWrap:"wrap" }}>
                  <span>📝 {course.lessons} slide</span><span>⏱ {course.duration}</span><span>👥 {course.students.toLocaleString()}</span>
                </div>
                <div style={{ width:"100%", padding:"11px 0", borderRadius:12, textAlign:"center", background:locked?`linear-gradient(135deg, ${C.gold}, #B8943A)`:`linear-gradient(135deg, ${C.magenta}, ${C.magentaDark})`, color:C.white, fontWeight:600, fontSize:14, fontFamily:"var(--fb)" }}>
                  {locked?"🔒 Abbonati per accedere":course.premium&&!user.isSubscribed?`⚡ Usa 1 credito (${user.credits} rimasti)`:"Inizia il corso →"}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── CONTENUTI ─── */
function ContenutiPage({ user, onSubscribe, useCredit, hasAccess }) {
  const [filter, setFilter] = useState("Tutti");
  const [openReel, setOpenReel] = useState(null);
  const [slide, setSlide] = useState(0);
  const [liked, setLiked] = useState({});
  const [saved, setSaved] = useState({});

  const filtered = REELS.filter(r => {
    if (filter === "Gratuiti") return !r.premium;
    if (filter === "Premium") return r.premium;
    return true;
  });

  const handleOpen = (reel) => {
    if (reel.premium && !user.isSubscribed) {
      if (!useCredit()) return;
    }
    setOpenReel(reel);
    setSlide(0);
  };

  // Detail view with slides
  if (openReel) {
    const s = openReel.slides[slide];
    const total = openReel.slides.length;
    return (
      <div>
        <Btn variant="ghost" onClick={() => setOpenReel(null)} style={{ marginBottom:24 }}>← Torna ai contenuti</Btn>
        <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:20, flexWrap:"wrap" }}>
          <span style={{ fontSize:32 }}>{openReel.icon}</span>
          <div>
            <h1 style={{ fontFamily:"var(--fh)", color:C.text, fontSize:22, margin:0 }}>{openReel.title}</h1>
            <p style={{ color:C.sub, fontSize:13, margin:"4px 0 0", fontFamily:"var(--fb)" }}>{openReel.duration} · {openReel.slides.length} slide · Lezione {slide+1}</p>
          </div>
          {openReel.premium && <Badge color={C.gold} glow>★ PREMIUM</Badge>}
        </div>
        {/* Progress */}
        <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:24 }}>
          <div style={{ flex:1, height:6, background:C.borderLight, borderRadius:3, overflow:"hidden" }}>
            <div style={{ width:`${((slide+1)/total)*100}%`, height:"100%", borderRadius:3, background:`linear-gradient(90deg, ${openReel.color}, ${openReel.color}88)`, transition:"width 0.4s ease" }} />
          </div>
          <span style={{ color:C.sub, fontSize:13, fontFamily:"var(--fb)", fontWeight:600 }}>{Math.round(((slide+1)/total)*100)}%</span>
        </div>
        {/* Slide content */}
        <div style={{ background:C.white, border:`1px solid ${C.border}`, borderRadius:20, padding:"36px 32px", minHeight:200, boxShadow:"0 4px 20px rgba(0,0,0,0.03)", marginBottom:20 }}>
          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:18 }}>
            <span style={{ background:`${openReel.color}12`, color:openReel.color, fontWeight:700, fontSize:13, padding:"4px 12px", borderRadius:8, fontFamily:"var(--fb)" }}>Slide {slide+1}</span>
          </div>
          <h2 style={{ fontFamily:"var(--fh)", color:C.text, fontSize:20, margin:"0 0 16px" }}>{s.title}</h2>
          <p style={{ fontFamily:"var(--fb)", color:C.sub, fontSize:15, lineHeight:1.85, margin:0 }}>{s.body}</p>
        </div>
        {/* Actions */}
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:16, flexWrap:"wrap", gap:10 }}>
          <Btn variant="ghost" onClick={()=>setSlide(Math.max(0,slide-1))} disabled={slide===0}>← Precedente</Btn>
          <div style={{ display:"flex", gap:8 }}>
            <input type="number" min={1} max={total} value={slide+1} onChange={e=>{const v=parseInt(e.target.value);if(v>=1&&v<=total)setSlide(v-1);}}
              style={{ width:60, textAlign:"center", padding:"8px", borderRadius:8, border:`1px solid ${C.border}`, background:C.white, color:C.text, fontSize:14, fontFamily:"var(--fb)", outline:"none" }} />
            <span style={{ color:C.dim, fontSize:13, alignSelf:"center", fontFamily:"var(--fb)" }}>/ {total}</span>
          </div>
          {slide<total-1 ? <Btn onClick={()=>setSlide(slide+1)}>Successiva →</Btn> : <Btn variant="gold" onClick={()=>setOpenReel(null)}>✓ Completato</Btn>}
        </div>
        {/* Like/Save */}
        <div style={{ display:"flex", gap:10, justifyContent:"center" }}>
          <button onClick={()=>setLiked(l=>({...l,[openReel.id]:!l[openReel.id]}))} style={{
            background:liked[openReel.id]?`${C.magenta}10`:C.card, border:`1px solid ${liked[openReel.id]?C.magenta:C.border}`,
            borderRadius:10, padding:"8px 18px", cursor:"pointer", display:"flex", alignItems:"center", gap:6,
            color:liked[openReel.id]?C.magenta:C.sub, fontSize:13, fontFamily:"var(--fb)", fontWeight:600, transition:"all 0.2s",
          }}>{liked[openReel.id]?"❤️ Piaciuto":"🤍 Mi piace"}</button>
          <button onClick={()=>setSaved(s=>({...s,[openReel.id]:!s[openReel.id]}))} style={{
            background:saved[openReel.id]?`${C.gold}10`:C.card, border:`1px solid ${saved[openReel.id]?C.gold:C.border}`,
            borderRadius:10, padding:"8px 18px", cursor:"pointer", display:"flex", alignItems:"center", gap:6,
            color:saved[openReel.id]?C.gold:C.sub, fontSize:13, fontFamily:"var(--fb)", fontWeight:600, transition:"all 0.2s",
          }}>{saved[openReel.id]?"🔖 Salvato":"📑 Salva"}</button>
        </div>
      </div>
    );
  }

  // Grid view
  return (
    <div>
      <h1 style={{ fontFamily:"var(--fh)", color:C.text, fontSize:24, margin:"0 0 4px" }}>Contenuti & Mini-Lezioni</h1>
      <p style={{ color:C.sub, fontSize:14, margin:"0 0 20px", fontFamily:"var(--fb)" }}>Lezioni brevi e pratiche su temi specifici</p>
      <div style={{ display:"flex", gap:8, marginBottom:24, flexWrap:"wrap" }}>
        {["Tutti","Gratuiti","Premium"].map(f=>(
          <button key={f} onClick={()=>setFilter(f)} style={{
            padding:"8px 18px", borderRadius:10, fontSize:13, fontWeight:600,
            fontFamily:"var(--fb)", cursor:"pointer",
            background:filter===f?C.magenta:"transparent",
            color:filter===f?C.white:C.sub,
            border:filter===f?"none":`1px solid ${C.border}`, transition:"all 0.2s",
          }}>{f}</button>
        ))}
      </div>
      {filtered.length===0&&<div style={{ textAlign:"center", padding:40, color:C.dim, fontFamily:"var(--fb)" }}>Nessun contenuto in questa categoria.</div>}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))", gap:16 }}>
        {filtered.map(reel=>{
          const locked=reel.premium&&!user.isSubscribed;
          return (
            <div key={reel.id} onClick={()=>handleOpen(reel)} style={{
              background:C.white, borderRadius:18, overflow:"hidden",
              border:`1px solid ${C.border}`, cursor:"pointer",
              boxShadow:"0 2px 12px rgba(0,0,0,0.03)", transition:"all 0.3s",
            }}
              onMouseEnter={e=>{if(!locked){e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow=`0 8px 30px ${reel.color}15`;}}}
              onMouseLeave={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="0 2px 12px rgba(0,0,0,0.03)";}}
            >
              <div style={{ height:120, background:`linear-gradient(135deg, ${reel.color}20, ${reel.color}06)`, display:"flex", alignItems:"center", justifyContent:"center", position:"relative" }}>
                {locked?<span style={{ fontSize:40, opacity:0.5 }}>🔒</span>:<span style={{ fontSize:48 }}>{reel.icon}</span>}
                {reel.premium&&<span style={{ position:"absolute", top:10, right:10 }}><Badge color={C.gold} glow>★</Badge></span>}
                <span style={{ position:"absolute", bottom:10, right:12, color:C.text, fontSize:12, fontWeight:600, fontFamily:"var(--fb)", background:"rgba(255,255,255,0.85)", padding:"2px 10px", borderRadius:6 }}>{reel.slides.length} slide · {reel.duration}</span>
              </div>
              <div style={{ padding:"16px 18px 20px" }}>
                <h3 style={{ fontFamily:"var(--fh)", color:C.text, fontSize:16, margin:"0 0 8px" }}>{reel.title}</h3>
                <p style={{ color:C.sub, fontSize:13, margin:"0 0 12px", fontFamily:"var(--fb)", lineHeight:1.5 }}>{reel.slides[0].body.slice(0,100)}...</p>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                  <span style={{ color:C.dim, fontSize:12, fontFamily:"var(--fb)" }}>👁 {reel.views}</span>
                  {locked?(
                    <Btn variant="gold" onClick={e=>{e.stopPropagation();onSubscribe();}} style={{ padding:"6px 14px", fontSize:12 }}>Sblocca</Btn>
                  ):(
                    <span style={{ color:C.magenta, fontSize:12, fontWeight:600, fontFamily:"var(--fb)" }}>Inizia →</span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function BrandPositioningPage({ user, onSubscribe, useCredit, hasAccess }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [generating, setGenerating] = useState(false);
  const [result, setResult] = useState(null);
  const [saved, setSaved] = useState(false);

  const questions = [
    {
      id: "business_type",
      icon: "🏢",
      title: "Che tipo di attività hai?",
      subtitle: "Aiutaci a capire il tuo business",
      type: "select",
      options: ["Freelancer / Consulente", "Agenzia", "E-commerce", "Personal Brand", "Startup", "Ristorante / Locale", "Coach / Formatore", "Artigiano / Creativo", "Altro"],
    },
    {
      id: "sector",
      icon: "🎯",
      title: "In che settore operi?",
      subtitle: "Sii il più specifico possibile",
      type: "text",
      placeholder: "es. Marketing digitale per ristoranti, Gioielli artigianali in argento, Coaching per imprenditori under 30...",
    },
    {
      id: "target",
      icon: "👥",
      title: "Chi è il tuo cliente ideale?",
      subtitle: "Descrivi la persona che vuoi raggiungere",
      type: "text",
      placeholder: "es. Donne 25-40 anni, professioniste, attente alla sostenibilità, che cercano gioielli unici e non vogliono il fast fashion...",
    },
    {
      id: "problem",
      icon: "🔥",
      title: "Quale problema risolvi?",
      subtitle: "Qual è il dolore principale del tuo cliente che tu risolvi?",
      type: "text",
      placeholder: "es. I miei clienti non sanno come comunicare il proprio brand online e perdono opportunità ogni giorno...",
    },
    {
      id: "unique",
      icon: "💎",
      title: "Cosa ti rende diverso dai competitor?",
      subtitle: "Perché dovrebbero scegliere te?",
      type: "text",
      placeholder: "es. Unisco strategia e creatività, ho 10 anni di esperienza nel settore, uso un metodo proprietario...",
    },
    {
      id: "values",
      icon: "❤️",
      title: "Quali sono i tuoi 3 valori fondamentali?",
      subtitle: "I valori che guidano ogni decisione del tuo brand",
      type: "multi_select",
      options: ["Autenticità", "Innovazione", "Qualità", "Sostenibilità", "Trasparenza", "Creatività", "Accessibilità", "Esclusività", "Empatia", "Affidabilità", "Coraggio", "Semplicità"],
      max: 3,
    },
    {
      id: "tone",
      icon: "🗣️",
      title: "Come parli al tuo pubblico?",
      subtitle: "Scegli il tono di voce del tuo brand",
      type: "select",
      options: ["Professionale e autorevole", "Amichevole e accessibile", "Ironico e provocatorio", "Elegante e sofisticato", "Energico e motivazionale", "Tecnico e competente", "Caldo e empatico", "Diretto e no-nonsense"],
    },
    {
      id: "competitors",
      icon: "⚔️",
      title: "Chi sono i tuoi 2-3 competitor principali?",
      subtitle: "Brand o persone nella tua nicchia con cui ti confronti",
      type: "text",
      placeholder: "es. @mariocontent (30K follower, molto educativo), @luciabrand (50K, molto visuale), NomeBrand (leader nel settore)...",
    },
    {
      id: "goals",
      icon: "🚀",
      title: "Qual è il tuo obiettivo principale nei prossimi 6 mesi?",
      subtitle: "Scegli l'obiettivo prioritario",
      type: "select",
      options: ["Aumentare i follower e la visibilità", "Generare più clienti e vendite", "Lanciare un nuovo prodotto/servizio", "Costruire una community attiva", "Diventare un punto di riferimento nel settore", "Monetizzare il mio pubblico esistente", "Rebranding e riposizionamento"],
    },
    {
      id: "budget",
      icon: "💰",
      title: "Quanto investi mensilmente nel marketing?",
      subtitle: "Questo ci aiuta a calibrare la strategia",
      type: "select",
      options: ["€0 — Solo organico", "€100-300 / mese", "€300-500 / mese", "€500-1000 / mese", "€1000+ / mese"],
    },
  ];

  const totalSteps = questions.length;
  const q = questions[step];
  const canProceed = answers[q?.id] && (typeof answers[q.id] === "string" ? answers[q.id].trim() : answers[q.id].length > 0);

  const handleSelect = (option) => {
    setAnswers(a => ({ ...a, [q.id]: option }));
  };

  const handleMultiSelect = (option) => {
    const current = answers[q.id] || [];
    if (current.includes(option)) {
      setAnswers(a => ({ ...a, [q.id]: current.filter(v => v !== option) }));
    } else if (current.length < (q.max || 3)) {
      setAnswers(a => ({ ...a, [q.id]: [...current, option] }));
    }
  };

  const generatePositioning = async () => {
    if (!useCredit()) return;
    setGenerating(true);
    const prompt = `Sei un brand strategist di livello mondiale. Basandoti su queste risposte, crea un posizionamento di mercato completo e professionale in italiano.

DATI DEL BRAND:
- Tipo: ${answers.business_type}
- Settore: ${answers.sector}
- Target: ${answers.target}
- Problema risolto: ${answers.problem}
- Differenziazione: ${answers.unique}
- Valori: ${(answers.values||[]).join(", ")}
- Tono di voce: ${answers.tone}
- Competitor: ${answers.competitors}
- Obiettivo: ${answers.goals}
- Budget marketing: ${answers.budget}

Genera un documento di posizionamento strutturato con queste sezioni:
1. POSITIONING STATEMENT (una frase potente che sintetizza chi sei, per chi, cosa offri e perché sei diverso)
2. ANALISI SWOT (Punti di forza, Debolezze, Opportunità, Minacce — 3 punti per ogni area)
3. BUYER PERSONA (profilo dettagliato del cliente ideale con nome fittizio, età, professione, bisogni, frustrazioni, dove passa il tempo online)
4. PROPOSTA DI VALORE UNICA (UVP — perché scegliere te in una frase)
5. ARCHETIPO DI BRAND (quale dei 12 archetipi di Jung si adatta meglio e perché)
6. STRATEGIA DI COMUNICAZIONE (3 pilastri di contenuto, frequenza consigliata, piattaforme prioritarie)
7. PIANO D'AZIONE 30 GIORNI (azioni concrete settimana per settimana)

Sii specifico, pratico e basato sui dati forniti. Niente generalità.`;

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 2000,
          messages: [{ role: "user", content: prompt }],
        })
      });
      const data = await res.json();
      const text = data.content?.map(i => i.text || "").join("") || "";
      setResult(text);
    } catch {
      setResult(`📋 POSIZIONAMENTO DI MERCATO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. POSITIONING STATEMENT
"Per ${answers.target?.split(",")[0] || "il tuo target"} che ${answers.problem?.split(".")[0]?.toLowerCase() || "hanno bisogno di una soluzione"}, ${answers.sector || "il tuo brand"} è ${answers.business_type?.toLowerCase() || "il partner"} che ${answers.unique?.split(",")[0]?.toLowerCase() || "offre un approccio unico"}, a differenza dei competitor come ${answers.competitors?.split(",")[0] || "gli altri"}, perché ${(answers.values||["qualità"]).join(", ")} sono al centro di tutto ciò che facciamo."

2. ANALISI SWOT

💪 PUNTI DI FORZA
• ${answers.unique || "Differenziazione chiara"} — è il tuo vantaggio competitivo principale
• Valori forti (${(answers.values||[]).join(", ")}) che creano connessione autentica
• Tono di voce "${answers.tone}" coerente con il target

⚠️ DEBOLEZZE
• Budget marketing ${answers.budget || "limitato"} — richiede focus sull'organico
• Necessità di costruire awareness in un mercato competitivo
• Dipendenza da un singolo canale di acquisizione

🌟 OPPORTUNITÀ
• Il settore ${answers.sector} è in forte crescita sui social
• Pochi competitor offrono il tuo mix unico di competenze
• Il tuo target è attivo online e cerca soluzioni autentiche

⚡ MINACCE
• Competitor come ${answers.competitors || "quelli nel settore"} hanno più visibilità
• Saturazione dei contenuti generici nella nicchia
• Cambiamenti algoritmici delle piattaforme social

3. BUYER PERSONA

🎯 Nome: Chiara (rappresentativa del target)
• Età: 28-38 anni
• Professione: ${answers.target?.includes("professionista") ? "Professionista" : "Imprenditrice / professionista"}
• Bisogno principale: ${answers.problem || "Trovare soluzioni efficaci"}
• Frustrazione: Ha provato altre soluzioni ma nessuna era personalizzata
• Dove passa il tempo: Instagram (60%), LinkedIn (25%), TikTok (15%)
• Trigger d'acquisto: Testimonianze reali e contenuti educativi

4. PROPOSTA DI VALORE UNICA (UVP)
"${answers.unique || "Offriamo qualcosa di unico"} — il tutto con un approccio ${answers.tone?.toLowerCase() || "professionale"} che mette al centro ${(answers.values||["la qualità"])[0]?.toLowerCase()}."

5. ARCHETIPO DI BRAND
${answers.tone?.includes("Professionale") ? "IL SAGGIO — Autorevole, competente, guida illuminata. Il tuo brand educa e ispira fiducia attraverso la conoscenza." : answers.tone?.includes("Energico") ? "L'EROE — Coraggioso, determinato, trasformativo. Il tuo brand ispira il cambiamento e motiva all'azione." : answers.tone?.includes("Amichevole") ? "L'UOMO COMUNE — Autentico, accessibile, affidabile. Il tuo brand crea connessione genuina e fa sentire tutti parte della storia." : "IL CREATORE — Visionario, innovativo, originale. Il tuo brand trasforma le idee in realtà concrete e ispira la creatività."}

6. STRATEGIA DI COMUNICAZIONE

📌 3 PILASTRI DI CONTENUTO:
1. Educativo (40%) — Tips, tutorial, how-to sul settore ${answers.sector}
2. Storytelling (35%) — Storie personali, behind the scenes, trasformazioni clienti
3. Conversione (25%) — Testimonianze, offerte, CTA dirette

📊 FREQUENZA: 4-5 post a settimana + stories giornaliere
📱 PIATTAFORME: Instagram (principale) + ${answers.target?.toLowerCase()?.includes("professionista") ? "LinkedIn (secondaria)" : "TikTok (secondaria)"}

7. PIANO D'AZIONE 30 GIORNI

📅 SETTIMANA 1 — FONDAMENTA
• Aggiorna bio Instagram con il positioning statement
• Crea brand kit visivo (colori, font, template)
• Pianifica i primi 8 contenuti con i 3 pilastri
• Pubblica il primo post con la tua origin story

📅 SETTIMANA 2 — CONTENUTO
• Pubblica 4 contenuti educativi sulla tua expertise
• Lancia una serie di stories "Dietro le quinte"
• Rispondi a 20 commenti di account nella tua nicchia
• Crea il primo reel con un consiglio pratico

📅 SETTIMANA 3 — COMMUNITY
• Avvia una rubrica settimanale (es. "Tip del Martedì")
• Fai 3 collaborazioni con account complementari
• Lancia un sondaggio nelle stories per conoscere il pubblico
• Pubblica una testimonianza o case study

📅 SETTIMANA 4 — CONVERSIONE
• Pubblica un contenuto con CTA verso il tuo servizio
• Crea un lead magnet (checklist, guida, template)
• Analizza le metriche e identifica i contenuti top
• Pianifica il mese successivo basandoti sui dati`);
    }
    setGenerating(false);
  };

  // Show result
  if (result) {
    return (
      <div>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:20, flexWrap:"wrap", gap:12 }}>
          <div>
            <h1 style={{ fontFamily:"var(--fh)", color:C.text, fontSize:24, margin:"0 0 4px" }}>Il Tuo Posizionamento</h1>
            <p style={{ color:C.sub, fontSize:14, margin:0, fontFamily:"var(--fb)" }}>Strategia personalizzata basata sulle tue risposte</p>
          </div>
          <div style={{ display:"flex", gap:8 }}>
            <button onClick={()=>{navigator.clipboard?.writeText(result);setSaved(true);setTimeout(()=>setSaved(false),2000);}} style={{
              background:saved?`${C.green}15`:C.card, border:`1px solid ${saved?C.green:C.border}`, borderRadius:10,
              padding:"8px 16px", cursor:"pointer", fontSize:13, fontFamily:"var(--fb)",
              color:saved?C.green:C.sub, display:"flex", alignItems:"center", gap:5, fontWeight:600, transition:"all 0.2s",
            }}>{saved?"✓ Copiato!":"📋 Copia tutto"}</button>
            <Btn variant="ghost" onClick={()=>{setResult(null);setStep(0);setAnswers({});}}>🔄 Ricomincia</Btn>
          </div>
        </div>

        {/* Summary cards */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(150px, 1fr))", gap:10, marginBottom:24 }}>
          {[
            { label:"Settore", value:answers.sector?.slice(0,25), icon:"🎯" },
            { label:"Target", value:answers.target?.split(",")[0]?.slice(0,25), icon:"👥" },
            { label:"Tono", value:answers.tone?.split(" ")[0], icon:"🗣️" },
            { label:"Obiettivo", value:answers.goals?.split(" ").slice(0,3).join(" "), icon:"🚀" },
          ].map((c,i) => (
            <div key={i} style={{ background:C.white, borderRadius:12, padding:"12px 14px", border:`1px solid ${C.border}` }}>
              <div style={{ fontSize:20, marginBottom:4 }}>{c.icon}</div>
              <div style={{ color:C.dim, fontSize:11, fontFamily:"var(--fb)" }}>{c.label}</div>
              <div style={{ color:C.text, fontSize:13, fontWeight:600, fontFamily:"var(--fb)", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{c.value}</div>
            </div>
          ))}
        </div>

        {/* Result document */}
        <div style={{ background:C.white, borderRadius:20, padding:"32px 28px", border:`1px solid ${C.border}`, boxShadow:"0 4px 20px rgba(0,0,0,0.03)" }}>
          <pre style={{ fontFamily:"var(--fb)", color:C.text, fontSize:14, lineHeight:1.8, margin:0, whiteSpace:"pre-wrap", wordWrap:"break-word" }}>{result}</pre>
        </div>
      </div>
    );
  }

  // Generating state
  if (generating) {
    return (
      <div style={{ textAlign:"center", padding:"80px 20px" }}>
        <div style={{ fontSize:56, marginBottom:20, animation:"pulse 1.5s infinite" }}>🧠</div>
        <h2 style={{ fontFamily:"var(--fh)", color:C.text, fontSize:22, margin:"0 0 8px" }}>Creo il tuo posizionamento...</h2>
        <p style={{ color:C.sub, fontSize:14, fontFamily:"var(--fb)", marginBottom:24 }}>L'AI sta analizzando le tue risposte e generando una strategia personalizzata</p>
        <div style={{ display:"flex", justifyContent:"center", gap:8 }}>
          {["Analizzo il settore","Studio il target","Definisco la strategia","Creo il piano"].map((t,i) => (
            <div key={i} style={{
              background:C.card, borderRadius:10, padding:"8px 14px",
              color:C.sub, fontSize:12, fontFamily:"var(--fb)",
              animation:`fadeIn 0.5s ease-out ${i*0.4}s both`,
            }}>{t}</div>
          ))}
        </div>
        <style>{`@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.6;transform:scale(1.05)}} @keyframes fadeIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}`}</style>
      </div>
    );
  }

  // Questionnaire
  return (
    <div>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:24, flexWrap:"wrap", gap:12 }}>
        <div>
          <h1 style={{ fontFamily:"var(--fh)", color:C.text, fontSize:24, margin:"0 0 4px" }}>Brand Positioning</h1>
          <p style={{ color:C.sub, fontSize:14, margin:0, fontFamily:"var(--fb)" }}>Rispondi a {totalSteps} domande e ottieni la tua strategia di posizionamento</p>
        </div>
        {!user.isSubscribed && (
          <div style={{ background:C.magentaSoft, border:`1px solid ${C.magenta}20`, borderRadius:10, padding:"5px 12px", display:"flex", alignItems:"center", gap:6 }}>
            <span style={{ fontSize:14 }}>⚡</span>
            <span style={{ color:C.magenta, fontSize:13, fontWeight:700, fontFamily:"var(--fb)" }}>{user.credits} crediti</span>
          </div>
        )}
      </div>

      {/* Progress bar */}
      <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:28 }}>
        <div style={{ flex:1, height:8, background:C.borderLight, borderRadius:4, overflow:"hidden" }}>
          <div style={{ width:`${((step+1)/totalSteps)*100}%`, height:"100%", borderRadius:4, background:`linear-gradient(90deg, ${C.magenta}, ${C.gold})`, transition:"width 0.5s ease" }} />
        </div>
        <span style={{ color:C.sub, fontSize:14, fontFamily:"var(--fb)", fontWeight:600, whiteSpace:"nowrap" }}>{step+1} / {totalSteps}</span>
      </div>

      {/* Question card */}
      <div style={{ background:C.white, borderRadius:20, padding:"36px 32px", border:`1px solid ${C.border}`, boxShadow:"0 4px 20px rgba(0,0,0,0.03)", marginBottom:24, minHeight:300 }}>
        <div style={{ fontSize:40, marginBottom:16 }}>{q.icon}</div>
        <h2 style={{ fontFamily:"var(--fh)", color:C.text, fontSize:22, margin:"0 0 6px" }}>{q.title}</h2>
        <p style={{ color:C.sub, fontSize:14, margin:"0 0 24px", fontFamily:"var(--fb)" }}>{q.subtitle}</p>

        {/* Text input */}
        {q.type === "text" && (
          <textarea
            value={answers[q.id] || ""}
            onChange={e => setAnswers(a => ({ ...a, [q.id]: e.target.value }))}
            placeholder={q.placeholder}
            rows={4}
            style={{
              width:"100%", padding:"14px 18px", borderRadius:14,
              background:C.card, border:`1px solid ${C.border}`, color:C.text,
              fontSize:15, fontFamily:"var(--fb)", outline:"none",
              resize:"vertical", boxSizing:"border-box", lineHeight:1.6,
            }}
          />
        )}

        {/* Single select */}
        {q.type === "select" && (
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))", gap:10 }}>
            {q.options.map(opt => (
              <button key={opt} onClick={() => handleSelect(opt)} style={{
                padding:"14px 18px", borderRadius:14, cursor:"pointer", textAlign:"left",
                background: answers[q.id] === opt ? C.magentaSoft : C.card,
                border: `2px solid ${answers[q.id] === opt ? C.magenta : C.border}`,
                color: answers[q.id] === opt ? C.magenta : C.text,
                fontSize:14, fontFamily:"var(--fb)", fontWeight: answers[q.id] === opt ? 600 : 400,
                transition:"all 0.2s",
              }}>{opt}</button>
            ))}
          </div>
        )}

        {/* Multi select */}
        {q.type === "multi_select" && (
          <div>
            <div style={{ color:C.dim, fontSize:12, fontFamily:"var(--fb)", marginBottom:12 }}>Seleziona fino a {q.max} opzioni ({(answers[q.id]||[]).length}/{q.max})</div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(150px, 1fr))", gap:8 }}>
              {q.options.map(opt => {
                const selected = (answers[q.id] || []).includes(opt);
                return (
                  <button key={opt} onClick={() => handleMultiSelect(opt)} style={{
                    padding:"12px 16px", borderRadius:12, cursor:"pointer", textAlign:"center",
                    background: selected ? C.magentaSoft : C.card,
                    border: `2px solid ${selected ? C.magenta : C.border}`,
                    color: selected ? C.magenta : C.text,
                    fontSize:14, fontFamily:"var(--fb)", fontWeight: selected ? 600 : 400,
                    transition:"all 0.2s",
                  }}>{selected ? "✓ " : ""}{opt}</button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        <Btn variant="ghost" onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0}>← Indietro</Btn>
        {step < totalSteps - 1 ? (
          <Btn onClick={() => setStep(step + 1)} disabled={!canProceed}>Avanti →</Btn>
        ) : (
          <Btn variant="gold" onClick={generatePositioning} disabled={!canProceed}>
            ✨ Genera Posizionamento (1 credito)
          </Btn>
        )}
      </div>
    </div>
  );
}

function AIStudioPage({ user, onSubscribe, useCredit, hasAccess }) {
  const [activeTab, setActiveTab] = useState("competitors");
  const [sector, setSector] = useState("");
  const [competitors, setCompetitors] = useState([]);
  const [analyzing, setAnalyzing] = useState(false);
  const [genTab, setGenTab] = useState("script");
  const [genPrompt, setGenPrompt] = useState("");
  const [genResult, setGenResult] = useState(null);
  const [generating, setGenerating] = useState(false);
  const [genHistory, setGenHistory] = useState([]);

  const sectorSuggestions = ["Fitness","Food","Fashion","Beauty","Tech","Travel","Business","Coaching","Real Estate","E-commerce"];

  const analyzeCompetitors = async () => {
    if (!sector.trim()) return;
    if (!useCredit()) return;
    setAnalyzing(true); setCompetitors([]);
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [{ role: "user", content: `Sei un esperto di social media marketing. Analizza il settore "${sector}" in Italia e genera un JSON array di 4 competitor di esempio con questa struttura esatta (rispondi SOLO con il JSON, niente altro):
[{"name":"NomeAccount","followers":"123K","engagement":"4.2%","strength":"Punto di forza principale","weakness":"Punto debole principale","content_type":"Tipo contenuto principale","post_freq":"Frequenza post","tip":"Consiglio strategico per superarli"}]` }],
        })
      });
      const data = await res.json();
      const text = data.content?.map(i => i.text || "").join("") || "";
      const clean = text.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(clean);
      setCompetitors(parsed);
    } catch (err) {
      setCompetitors([
        { name:`${sector}TopCreator`, followers:"45.2K", engagement:"5.1%", strength:"Contenuti educativi di alta qualità, posting costante", weakness:"Poco engagement nelle Stories, assenza di reel", content_type:"Caroselli educativi", post_freq:"5 post/settimana", tip:"Punta sui reel e sulle Stories interattive per differenziarti" },
        { name:`${sector}Daily`, followers:"28.7K", engagement:"3.8%", strength:"Community molto attiva nei commenti, tone of voice autentico", weakness:"Qualità visiva inconsistente, nessun brand kit", content_type:"Post personali + tips", post_freq:"7 post/settimana", tip:"Investi nella coerenza visiva e crea un brand kit riconoscibile" },
        { name:`${sector}Pro`, followers:"67.1K", engagement:"2.9%", strength:"Grande reach organica, collaborazioni con brand importanti", weakness:"Engagement basso rispetto ai follower, contenuti troppo promozionali", content_type:"Reel + sponsorizzazioni", post_freq:"4 post/settimana", tip:"Bilancia contenuti di valore e promozionali (80/20 rule)" },
        { name:`${sector}Academy`, followers:"15.3K", engagement:"6.4%", strength:"Engagement altissimo, community fedele e coinvolta", weakness:"Crescita lenta, poca varietà nei formati", content_type:"Tutorial + mini-corsi", post_freq:"3 post/settimana", tip:"Sperimenta con nuovi formati (reel, live, collaborazioni) mantenendo la qualità" },
      ]);
    }
    setAnalyzing(false);
  };

  const [videoGenerating, setVideoGenerating] = useState(false);
  const [videoResult, setVideoResult] = useState(null);

  const generateContent = async () => {
    if (!genPrompt.trim()) return;
    if (!useCredit()) return;
    if (genTab === "video") { generateVideo(); return; }
    setGenerating(true); setGenResult(null);
    const typeLabels = { script:"uno script per reel/video", grafica:"un testo per grafica/copertina social con titolo, sottotitolo e CTA", caption:"una caption Instagram ottimizzata", idea:"5 idee di contenuto originali" };
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [{ role: "user", content: `Sei un social media strategist esperto. Genera ${typeLabels[genTab]} basato su questa richiesta: "${genPrompt}". Sii creativo, specifico e pratico. Formatta il risultato in modo chiaro e pronto all'uso.` }],
        })
      });
      const data = await res.json();
      const text = data.content?.map(i => i.text || "").join("") || "";
      setGenResult(text);
      setGenHistory(h => [{ id:Date.now(), type:genTab, prompt:genPrompt, result:text }, ...h].slice(0,10));
    } catch (err) {
      const fallbacks = {
        script: `🎬 SCRIPT: "${genPrompt}"\n\n[HOOK - 0:00-0:03]\n"Stai facendo questo errore e non lo sai..."\n\n[SVILUPPO - 0:03-0:20]\n"Ogni giorno vedo creator nel settore ${genPrompt} che commettono lo stesso errore: pensano che la quantità batta la qualità. Ma i dati dicono il contrario..."\n\n[VALORE - 0:20-0:45]\n"Ecco le 3 regole che ho imparato:\n1. Un contenuto eccellente vale più di 5 mediocri\n2. La retention nei primi 3 secondi determina tutto\n3. Il tuo pubblico vuole autenticità, non perfezione"\n\n[CTA - 0:45-0:55]\n"Salva questo reel e applicalo al tuo prossimo contenuto. Se vuoi approfondire, trovi il link in bio."`,
        grafica: `🎨 GRAFICA PER: "${genPrompt}"\n\n📌 TITOLO PRINCIPALE:\n"Il Segreto che Nessuno Ti Dice"\n\n📌 SOTTOTITOLO:\n"3 strategie testate per ${genPrompt}"\n\n📌 CTA:\n"Salva per dopo →"\n\n📌 COLORI CONSIGLIATI:\nGradiente da #9B1B4D a #C8A84E\nTesto bianco su sfondo scuro per massimo contrasto\n\n📌 FONT:\nTitolo: Bold/Extra Bold, grande\nSottotitolo: Regular, medio\nCTA: Semi Bold con icona freccia`,
        caption: `✍️ CAPTION PER: "${genPrompt}"\n\nStai per leggere qualcosa che cambierà il tuo approccio a ${genPrompt}.\n\nQuando ho iniziato, pensavo che bastasse postare tanto. Sbagliavo.\n\nDopo 6 mesi di test, ho scoperto che la differenza la fanno 3 cose:\n\n→ La costanza batte la frequenza\n→ Il valore batte l'estetica\n→ L'autenticità batte la perfezione\n\nIl risultato? I miei contenuti hanno iniziato a essere salvati 4x di più.\n\nE il bello è che puoi applicare questa formula oggi stesso.\n\n💡 Salva questo post per quando ne avrai bisogno.\n\n#${genPrompt.replace(/\s+/g,'')} #ContentCreator #SocialMediaTips #DigitalMarketing #ContentStrategy`,
        idea: `💡 5 IDEE CONTENUTO PER: "${genPrompt}"\n\n1. 🎬 REEL "Prima vs Dopo"\nMostra la trasformazione: come appariva il tuo lavoro/prodotto prima e come appare ora. Il contrasto visivo è irresistibile.\n\n2. 📸 CAROSELLO "I 5 Errori"\n"5 errori che fanno tutti nel settore ${genPrompt} (e come evitarli)". Formato educativo con alto tasso di salvataggio.\n\n3. 🎤 STORY INTERATTIVA "Questo o Quello"\nUsa i sondaggi nelle stories per far interagire il pubblico su temi del settore. Aumenta l'engagement del 300%.\n\n4. 📖 POST STORYTELLING\nRacconta il tuo momento di svolta nel settore ${genPrompt}. Le storie personali generano 2x commenti rispetto ai post informativi.\n\n5. 🤝 COLLABORAZIONE\nFai un reel "duetto" con un altro creator della tua nicchia. Ognuno porta la propria audience: crescita esponenziale.`
      };
      setGenResult(fallbacks[genTab]);
      setGenHistory(h => [{ id:Date.now(), type:genTab, prompt:genPrompt, result:fallbacks[genTab] }, ...h].slice(0,10));
    }
    setGenerating(false);
  };

  const generateVideo = async () => {
    setVideoGenerating(true); setVideoResult(null); setGenResult(null);
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [{ role: "user", content: `Sei un regista di reel per social media. Crea uno storyboard dettagliato per un reel/video basato su: "${genPrompt}".
Rispondi SOLO con un JSON array di 5-7 scene con questa struttura (niente altro testo):
[{"scene":1,"duration":"3s","visual":"Descrizione visiva dettagliata","text_overlay":"Testo che appare sullo schermo","voiceover":"Testo del voiceover","transition":"Tipo di transizione","music_mood":"Mood della musica"}]` }],
        })
      });
      const data = await res.json();
      const text = data.content?.map(i => i.text || "").join("") || "";
      const clean = text.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(clean);
      setVideoResult({ scenes: parsed, prompt: genPrompt });
      setGenHistory(h => [{ id:Date.now(), type:"video", prompt:genPrompt, result:`Video Reel: ${parsed.length} scene generate per "${genPrompt}"` }, ...h].slice(0,10));
    } catch (err) {
      const fallbackScenes = [
        { scene:1, duration:"2s", visual:"Primo piano del protagonista con espressione intrigata, sfondo sfocato", text_overlay:`"${genPrompt.slice(0,30)}..."`, voiceover:"Stai facendo questo errore e non lo sai", transition:"Zoom in rapido", music_mood:"Suspense, beat lento" },
        { scene:2, duration:"4s", visual:"B-roll dinamico: mani che scorrono il telefono, schermo con analytics", text_overlay:"Il 90% sbaglia qui", voiceover:"Ogni giorno vedo lo stesso errore ripetersi", transition:"Whip pan a destra", music_mood:"Beat che sale" },
        { scene:3, duration:"5s", visual:"Split screen: PRIMA (risultati scarsi) vs DOPO (risultati eccellenti)", text_overlay:"PRIMA → DOPO", voiceover:"Ma quando ho cambiato approccio, tutto è cambiato", transition:"Match cut", music_mood:"Drop del beat, energia alta" },
        { scene:4, duration:"5s", visual:"Primo piano, parlata diretta in camera con gesticolazione", text_overlay:"Regola #1: Qualità > Quantità\nRegola #2: Hook nei primi 3s\nRegola #3: Autenticità sempre", voiceover:"Ecco le 3 regole d'oro che funzionano sempre", transition:"Snap transition per ogni regola", music_mood:"Motivazionale, energia crescente" },
        { scene:5, duration:"4s", visual:"Time-lapse di creazione contenuto: dall'idea al post pubblicato", text_overlay:"Il processo completo ⬇️", voiceover:"E questo è il mio processo, dal primo all'ultimo step", transition:"Speed ramp (lento→veloce→lento)", music_mood:"Chill, produttivo" },
        { scene:6, duration:"3s", visual:"Primo piano sorridente, gesto di invito alla CTA", text_overlay:"Salva questo reel 🔖\nLink in bio per il corso completo", voiceover:"Salva questo reel e inizia oggi. Link in bio.", transition:"Zoom out con dissolvenza", music_mood:"Outro, beat che sfuma" },
      ];
      setVideoResult({ scenes: fallbackScenes, prompt: genPrompt });
      setGenHistory(h => [{ id:Date.now(), type:"video", prompt:genPrompt, result:`Video Reel: ${fallbackScenes.length} scene generate per "${genPrompt}"` }, ...h].slice(0,10));
    }
    setVideoGenerating(false);
  };

  if (!hasAccess()) {
    return (
      <div>
        <h1 style={{ fontFamily:"var(--fh)", color:C.text, fontSize:24, margin:"0 0 4px" }}>AI Studio</h1>
        <p style={{ color:C.sub, fontSize:14, margin:"0 0 28px", fontFamily:"var(--fb)" }}>Analisi competitor e generazione contenuti con AI</p>
        <div style={{ background:C.white, border:`1px solid ${C.gold}30`, borderRadius:20, padding:"48px 32px", textAlign:"center", maxWidth:480, margin:"20px auto", boxShadow:"0 8px 40px rgba(0,0,0,0.04)" }}>
          <div style={{ fontSize:48, marginBottom:16 }}>🤖</div>
          <h2 style={{ fontFamily:"var(--fh)", color:C.text, fontSize:20, margin:"0 0 8px" }}>Crediti esauriti</h2>
          <p style={{ fontFamily:"var(--fb)", color:C.sub, fontSize:14, lineHeight:1.6, margin:"0 0 24px" }}>Hai usato tutti i tuoi crediti gratuiti. Abbonati per accesso illimitato a tutti gli strumenti AI.</p>
          <Btn variant="gold" onClick={onSubscribe}>⚡ Abbonati per accesso illimitato</Btn>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:12, marginBottom:20 }}>
        <div>
          <h1 style={{ fontFamily:"var(--fh)", color:C.text, fontSize:24, margin:"0 0 4px" }}>AI Studio</h1>
          <p style={{ color:C.sub, fontSize:14, margin:0, fontFamily:"var(--fb)" }}>Analisi competitor e generazione contenuti con AI</p>
        </div>
        <div style={{ background:user.isSubscribed?C.goldSoft:C.magentaSoft, border:`1px solid ${user.isSubscribed?C.gold:C.magenta}30`, borderRadius:14, padding:"10px 18px", display:"flex", alignItems:"center", gap:8 }}>
          <span style={{ fontSize:18 }}>{user.isSubscribed?"♾️":"⚡"}</span>
          <div>
            <div style={{ color:user.isSubscribed?C.gold:C.magenta, fontSize:14, fontWeight:700, fontFamily:"var(--fb)" }}>{user.isSubscribed?"Illimitato":`${user.credits} crediti`}</div>
            <div style={{ color:C.dim, fontSize:11, fontFamily:"var(--fb)" }}>{user.isSubscribed?"Piano Premium":"rimasti"}</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display:"flex", gap:0, marginBottom:24, borderBottom:`2px solid ${C.borderLight}` }}>
        {[
          { key:"competitors", label:"🔍 Analisi Competitor" },
          { key:"generate", label:"✨ Genera Contenuti" },
          { key:"history", label:"📋 Cronologia" },
        ].map(t=>(
          <button key={t.key} onClick={()=>setActiveTab(t.key)} style={{
            padding:"12px 20px", border:"none", cursor:"pointer", fontFamily:"var(--fb)",
            background:"transparent", borderBottom:`3px solid ${activeTab===t.key?C.magenta:"transparent"}`,
            color:activeTab===t.key?C.magenta:C.sub, fontWeight:activeTab===t.key?700:400,
            fontSize:14, transition:"all 0.2s", marginBottom:-2,
          }}>{t.label}</button>
        ))}
      </div>

      {/* ===== COMPETITOR ANALYSIS ===== */}
      {activeTab==="competitors"&&(
        <div>
          <div style={{ background:C.white, borderRadius:18, padding:24, border:`1px solid ${C.border}`, marginBottom:20, boxShadow:"0 2px 12px rgba(0,0,0,0.03)" }}>
            <h3 style={{ fontFamily:"var(--fh)", color:C.text, fontSize:17, margin:"0 0 12px" }}>Inserisci il tuo settore</h3>
            <div style={{ display:"flex", gap:10, marginBottom:14 }}>
              <input value={sector} onChange={e=>setSector(e.target.value)} onKeyDown={e=>e.key==="Enter"&&analyzeCompetitors()} placeholder="es. Fitness, Food, Fashion..."
                style={{ flex:1, padding:"12px 16px", borderRadius:12, background:C.card, border:`1px solid ${C.border}`, color:C.text, fontSize:15, fontFamily:"var(--fb)", outline:"none" }} />
              <Btn onClick={analyzeCompetitors} disabled={analyzing||!sector.trim()}>
                {analyzing?"Analizzo...":"🔍 Analizza"}
              </Btn>
            </div>
            <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
              {sectorSuggestions.map(s=>(
                <button key={s} onClick={()=>setSector(s)} style={{
                  padding:"5px 12px", borderRadius:8, fontSize:12, fontFamily:"var(--fb)", cursor:"pointer",
                  background:sector===s?C.magentaSoft:"transparent", color:sector===s?C.magenta:C.dim,
                  border:`1px solid ${sector===s?C.magenta+"40":C.border}`, transition:"all 0.2s",
                }}>{s}</button>
              ))}
            </div>
          </div>

          {analyzing&&(
            <div style={{ textAlign:"center", padding:40 }}>
              <div style={{ fontSize:40, marginBottom:12, animation:"pulse 1.5s infinite" }}>🔍</div>
              <div style={{ color:C.sub, fontSize:15, fontFamily:"var(--fb)" }}>Analizzo i competitor nel settore <strong style={{ color:C.magenta }}>{sector}</strong>...</div>
              <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.5}}`}</style>
            </div>
          )}

          {competitors.length>0&&(
            <div>
              <h3 style={{ fontFamily:"var(--fh)", color:C.text, fontSize:18, margin:"0 0 16px" }}>Competitor nel settore: <span style={{ color:C.magenta }}>{sector}</span></h3>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))", gap:16 }}>
                {competitors.map((comp,i)=>(
                  <div key={i} style={{ background:C.white, borderRadius:18, padding:22, border:`1px solid ${C.border}`, boxShadow:"0 2px 12px rgba(0,0,0,0.03)" }}>
                    <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:14 }}>
                      <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                        <div style={{ width:40, height:40, borderRadius:12, background:`linear-gradient(135deg, ${[C.magenta,C.gold,C.green,C.pink][i%4]}, ${[C.gold,C.green,C.pink,C.magenta][i%4]})`, display:"flex", alignItems:"center", justifyContent:"center", color:C.white, fontWeight:700, fontSize:16 }}>{i+1}</div>
                        <div>
                          <div style={{ fontFamily:"var(--fh)", color:C.text, fontWeight:600, fontSize:15 }}>@{comp.name}</div>
                          <div style={{ color:C.dim, fontSize:12, fontFamily:"var(--fb)" }}>{comp.content_type}</div>
                        </div>
                      </div>
                    </div>
                    <div style={{ display:"flex", gap:16, marginBottom:14 }}>
                      <div style={{ textAlign:"center" }}>
                        <div style={{ color:C.text, fontWeight:700, fontSize:16, fontFamily:"var(--fh)" }}>{comp.followers}</div>
                        <div style={{ color:C.dim, fontSize:11, fontFamily:"var(--fb)" }}>Follower</div>
                      </div>
                      <div style={{ textAlign:"center" }}>
                        <div style={{ color:C.green, fontWeight:700, fontSize:16, fontFamily:"var(--fh)" }}>{comp.engagement}</div>
                        <div style={{ color:C.dim, fontSize:11, fontFamily:"var(--fb)" }}>Engagement</div>
                      </div>
                      <div style={{ textAlign:"center" }}>
                        <div style={{ color:C.sub, fontWeight:600, fontSize:13, fontFamily:"var(--fb)" }}>{comp.post_freq}</div>
                        <div style={{ color:C.dim, fontSize:11, fontFamily:"var(--fb)" }}>Frequenza</div>
                      </div>
                    </div>
                    <div style={{ marginBottom:8 }}>
                      <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:4 }}><span style={{ color:C.green, fontSize:13 }}>💪</span><span style={{ color:C.sub, fontSize:13, fontFamily:"var(--fb)" }}>{comp.strength}</span></div>
                      <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:4 }}><span style={{ color:C.pink, fontSize:13 }}>⚠️</span><span style={{ color:C.sub, fontSize:13, fontFamily:"var(--fb)" }}>{comp.weakness}</span></div>
                    </div>
                    <div style={{ background:C.magentaSoft, borderRadius:10, padding:"10px 14px" }}>
                      <div style={{ color:C.magenta, fontSize:12, fontWeight:600, fontFamily:"var(--fb)", marginBottom:2 }}>💡 Strategia consigliata:</div>
                      <div style={{ color:C.text, fontSize:13, fontFamily:"var(--fb)", lineHeight:1.5 }}>{comp.tip}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ===== CONTENT GENERATOR ===== */}
      {activeTab==="generate"&&(
        <div>
          <div style={{ background:C.white, borderRadius:18, padding:24, border:`1px solid ${C.border}`, marginBottom:20, boxShadow:"0 2px 12px rgba(0,0,0,0.03)" }}>
            <h3 style={{ fontFamily:"var(--fh)", color:C.text, fontSize:17, margin:"0 0 14px" }}>Cosa vuoi generare?</h3>
            <div style={{ display:"flex", gap:8, marginBottom:16, flexWrap:"wrap" }}>
              {[
                { key:"script", label:"🎬 Script Reel", desc:"Script completo per video" },
                { key:"video", label:"📹 Video Reel AI", desc:"Storyboard scena per scena" },
                { key:"grafica", label:"🎨 Testo Grafica", desc:"Titoli e CTA per immagini" },
                { key:"caption", label:"✍️ Caption", desc:"Caption Instagram ottimizzata" },
                { key:"idea", label:"💡 Idee Contenuto", desc:"5 idee originali" },
              ].map(t=>(
                <button key={t.key} onClick={()=>{setGenTab(t.key);setGenResult(null);setVideoResult(null);}} style={{
                  padding:"12px 18px", borderRadius:14, cursor:"pointer", textAlign:"left",
                  background:genTab===t.key?C.magentaSoft:C.card,
                  border:`2px solid ${genTab===t.key?C.magenta:C.border}`,
                  transition:"all 0.2s", flex:"1 1 140px",
                }}>
                  <div style={{ fontSize:14, fontWeight:600, color:genTab===t.key?C.magenta:C.text, fontFamily:"var(--fb)" }}>{t.label}</div>
                  <div style={{ fontSize:11, color:C.dim, fontFamily:"var(--fb)", marginTop:2 }}>{t.desc}</div>
                </button>
              ))}
            </div>
            <div style={{ display:"flex", gap:10 }}>
              <input value={genPrompt} onChange={e=>setGenPrompt(e.target.value)} onKeyDown={e=>e.key==="Enter"&&generateContent()}
                placeholder={genTab==="script"?"es. Reel motivazionale per imprenditori":genTab==="video"?"es. Reel tutorial su come fare una skincare routine":genTab==="grafica"?"es. Copertina per corso di fotografia":genTab==="caption"?"es. Post sul nuovo servizio di consulenza":"es. Contenuti per un brand di skincare"}
                style={{ flex:1, padding:"12px 16px", borderRadius:12, background:C.card, border:`1px solid ${C.border}`, color:C.text, fontSize:14, fontFamily:"var(--fb)", outline:"none" }} />
              <Btn onClick={generateContent} disabled={generating||!genPrompt.trim()}>
                {generating?"Genero...":"✨ Genera"}
              </Btn>
            </div>
          </div>

          {generating&&(
            <div style={{ textAlign:"center", padding:40 }}>
              <div style={{ fontSize:40, marginBottom:12, animation:"pulse 1.5s infinite" }}>✨</div>
              <div style={{ color:C.sub, fontSize:15, fontFamily:"var(--fb)" }}>L'AI sta creando il tuo contenuto...</div>
              <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.5}}`}</style>
            </div>
          )}

          {genResult&&(
            <div style={{ background:C.white, borderRadius:18, padding:24, border:`1px solid ${C.border}`, boxShadow:"0 2px 12px rgba(0,0,0,0.03)" }}>
              <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:16, flexWrap:"wrap", gap:10 }}>
                <Badge color={C.magenta}>
                  {genTab==="script"?"🎬 Script":genTab==="grafica"?"🎨 Grafica":genTab==="caption"?"✍️ Caption":"💡 Idee"}
                </Badge>
                <button onClick={()=>{navigator.clipboard?.writeText(genResult);}} style={{
                  background:C.card, border:`1px solid ${C.border}`, borderRadius:10,
                  padding:"6px 14px", cursor:"pointer", fontSize:12, fontFamily:"var(--fb)",
                  color:C.sub, display:"flex", alignItems:"center", gap:5,
                }}>📋 Copia</button>
              </div>
              <pre style={{ fontFamily:"var(--fb)", color:C.text, fontSize:14, lineHeight:1.75, margin:0, whiteSpace:"pre-wrap", wordWrap:"break-word" }}>{genResult}</pre>
            </div>
          )}

          {videoGenerating&&(
            <div style={{ textAlign:"center", padding:48 }}>
              <div style={{ fontSize:48, marginBottom:16, animation:"pulse 1.5s infinite" }}>📹</div>
              <div style={{ color:C.text, fontSize:17, fontWeight:600, fontFamily:"var(--fh)", marginBottom:8 }}>Generazione Video Reel in corso...</div>
              <div style={{ color:C.sub, fontSize:14, fontFamily:"var(--fb)", marginBottom:20 }}>L'AI sta creando lo storyboard per "{genPrompt}"</div>
              <div style={{ display:"flex", justifyContent:"center", gap:6 }}>
                {[0,1,2,3,4].map(i=>(
                  <div key={i} style={{ width:12, height:12, borderRadius:"50%", background:C.magenta, animation:`pulse 1.5s infinite ${i*0.2}s` }} />
                ))}
              </div>
              <style>{`@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.4;transform:scale(0.8)}}`}</style>
            </div>
          )}

          {videoResult&&(
            <div>
              {/* Reel Preview Player */}
              <div style={{ display:"flex", gap:24, flexWrap:"wrap" }}>
                {/* Phone mockup with animated reel */}
                <div style={{ flexShrink:0 }}>
                  <div style={{ width:280, background:"#000", borderRadius:28, padding:"12px 10px", boxShadow:"0 8px 40px rgba(0,0,0,0.15)", position:"relative", overflow:"hidden" }}>
                    {/* Status bar */}
                    <div style={{ display:"flex", justifyContent:"space-between", padding:"4px 8px 8px", color:"#fff", fontSize:10, fontFamily:"var(--fb)" }}>
                      <span>9:41</span>
                      <span>📶 🔋</span>
                    </div>
                    {/* Video area 9:16 */}
                    <ReelPlayer scenes={videoResult.scenes} />
                    {/* Bottom bar */}
                    <div style={{ display:"flex", justifyContent:"space-around", padding:"10px 0 4px", color:"#fff" }}>
                      {["🏠","🔍","➕","🎬","👤"].map((e,i)=><span key={i} style={{ fontSize:18, opacity:i===3?1:0.5 }}>{e}</span>)}
                    </div>
                  </div>
                  <div style={{ textAlign:"center", marginTop:12 }}>
                    <div style={{ color:C.sub, fontSize:12, fontFamily:"var(--fb)" }}>Anteprima Reel · {videoResult.scenes.length} scene</div>
                  </div>
                </div>

                {/* Storyboard details */}
                <div style={{ flex:1, minWidth:280 }}>
                  <div style={{ background:C.white, borderRadius:18, padding:20, border:`1px solid ${C.border}`, marginBottom:16 }}>
                    <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:14, flexWrap:"wrap", gap:8 }}>
                      <Badge color={C.magenta} glow>📹 Storyboard Generato</Badge>
                      <button onClick={()=>{navigator.clipboard?.writeText(videoResult.scenes.map((s,i)=>`SCENA ${s.scene} (${s.duration})\nVisuale: ${s.visual}\nTesto: ${s.text_overlay}\nVoiceover: ${s.voiceover}\nTransizione: ${s.transition}\nMusica: ${s.music_mood}`).join('\n\n'));}} style={{
                        background:C.card, border:`1px solid ${C.border}`, borderRadius:10,
                        padding:"6px 14px", cursor:"pointer", fontSize:12, fontFamily:"var(--fb)",
                        color:C.sub, display:"flex", alignItems:"center", gap:5,
                      }}>📋 Copia tutto</button>
                    </div>
                    {videoResult.scenes.map((scene,i)=>(
                      <div key={i} style={{ display:"flex", gap:10, marginBottom:12, paddingBottom:12, borderBottom:i<videoResult.scenes.length-1?`1px solid ${C.borderLight}`:"none" }}>
                        <div style={{ width:28, height:28, borderRadius:8, background:`linear-gradient(135deg, ${C.magenta}, ${C.gold})`, display:"flex", alignItems:"center", justifyContent:"center", color:C.white, fontWeight:700, fontSize:12, flexShrink:0 }}>{scene.scene}</div>
                        <div style={{ flex:1 }}>
                          <div style={{ display:"flex", gap:8, alignItems:"center", marginBottom:4 }}>
                            <span style={{ color:C.text, fontSize:13, fontWeight:600, fontFamily:"var(--fb)" }}>{scene.duration}</span>
                            <span style={{ color:C.dim, fontSize:11, fontFamily:"var(--fb)" }}>{scene.transition}</span>
                          </div>
                          <div style={{ color:C.sub, fontSize:12, fontFamily:"var(--fb)", lineHeight:1.5 }}>{scene.visual}</div>
                          {scene.text_overlay&&<div style={{ color:C.magenta, fontSize:12, fontWeight:600, fontFamily:"var(--fb)", marginTop:3 }}>"{scene.text_overlay}"</div>}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ background:C.goldSoft, borderRadius:14, padding:"14px 18px", border:`1px solid ${C.gold}20` }}>
                    <div style={{ color:C.gold, fontSize:13, fontWeight:700, fontFamily:"var(--fb)", marginBottom:4 }}>💡 Prossimi passi</div>
                    <div style={{ color:C.sub, fontSize:12, fontFamily:"var(--fb)", lineHeight:1.6 }}>
                      Usa lo storyboard come guida per girare il reel. Per la versione completa con generazione video AI reale, l'integrazione con Runway ML sarà disponibile prossimamente.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ===== HISTORY ===== */}
      {activeTab==="history"&&(
        <div>
          {genHistory.length===0?(
            <div style={{ textAlign:"center", padding:48, color:C.dim, fontFamily:"var(--fb)" }}>
              <div style={{ fontSize:40, marginBottom:12 }}>📋</div>
              <div style={{ fontSize:15 }}>Nessuna generazione ancora. Vai su "Genera Contenuti" per iniziare!</div>
            </div>
          ):(
            <div style={{ display:"grid", gap:12 }}>
              {genHistory.map(item=>(
                <div key={item.id} style={{ background:C.white, borderRadius:16, padding:20, border:`1px solid ${C.border}`, boxShadow:"0 2px 8px rgba(0,0,0,0.02)" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10 }}>
                    <Badge color={C.magenta}>
                      {item.type==="script"?"🎬 Script":item.type==="video"?"📹 Video":item.type==="grafica"?"🎨 Grafica":item.type==="caption"?"✍️ Caption":"💡 Idee"}
                    </Badge>
                    <span style={{ color:C.sub, fontSize:13, fontFamily:"var(--fb)", fontStyle:"italic" }}>"{item.prompt}"</span>
                    <button onClick={()=>{navigator.clipboard?.writeText(item.result);}} style={{
                      marginLeft:"auto", background:C.card, border:`1px solid ${C.border}`, borderRadius:8,
                      padding:"4px 10px", cursor:"pointer", fontSize:11, fontFamily:"var(--fb)", color:C.sub,
                    }}>📋 Copia</button>
                  </div>
                  <pre style={{ fontFamily:"var(--fb)", color:C.sub, fontSize:13, lineHeight:1.6, margin:0, whiteSpace:"pre-wrap", wordWrap:"break-word", maxHeight:120, overflow:"hidden" }}>{item.result}</pre>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ─── COMMUNITY ─── */
function CommunityPage({ user, onSubscribe }) {
  const [section, setSection] = useState("forum");
  const [forumTab, setForumTab] = useState("Tutti");
  const [liked, setLiked] = useState({});
  const [openComments, setOpenComments] = useState({});
  const [commentTexts, setCommentTexts] = useState({});
  const [replies, setReplies] = useState({});
  const [showNewPost, setShowNewPost] = useState(false);
  const [newPostText, setNewPostText] = useState("");
  const [newPostTag, setNewPostTag] = useState("Domande");
  const [showNewCollab, setShowNewCollab] = useState(false);
  const [collabForm, setCollabForm] = useState({ title:"", desc:"", budget:"", category:"Reel" });

  const tagColors = { Domande:C.pink, Tips:C.gold, Confronti:C.green, Successi:C.magenta };
  const forumTags = ["Tutti","Domande","Tips","Confronti","Successi"];

  const [forumPosts, setForumPosts] = useState([
    { id:1, author:"Maria R.", avatar:"MR", time:"2h fa", content:"Ragazzi, quale app usate per programmare i post? Io uso Later ma non mi trovo benissimo con i reel. Consigli?", likes:24, comments:8, tag:"Domande" },
    { id:2, author:"Sofia B.", avatar:"SB", time:"4h fa", content:"Consiglio TOP: quando scrivete le caption, mettete sempre il punto chiave nella prima riga. Instagram taglia dopo 125 caratteri. Se l'hook non è lì, avete perso il 70% dei lettori.", likes:42, comments:19, tag:"Tips" },
    { id:3, author:"Marco D.", avatar:"MD", time:"6h fa", content:"Ho provato a postare a orari diversi per 2 settimane. Risultato: per la mia nicchia (fitness) il mercoledì alle 19:00 è il momento migliore. Il sabato mattina è morto. Qualcuno ha dati simili?", likes:31, comments:22, tag:"Confronti" },
    { id:4, author:"Giulia F.", avatar:"GF", time:"1g fa", content:"Da 500 a 5000 follower in 3 mesi! La svolta è stata smettere di postare ogni giorno e concentrarmi su 3 reel a settimana ma di qualità. Meno è meglio davvero.", likes:67, comments:34, tag:"Successi" },
    { id:5, author:"Luca T.", avatar:"LT", time:"1g fa", content:"Domanda per chi fa caroselli: quante slide usate di solito? Io ne faccio 7-8 ma ho visto che i top creator ne usano 10. Fa davvero differenza?", likes:15, comments:12, tag:"Domande" },
    { id:6, author:"Anna M.", avatar:"AM", time:"2g fa", content:"Ho testato 3 formati diversi di reel sulla stessa nicchia (food). Il POV storytelling ha fatto 4x le views rispetto al tutorial classico. Il format conta più del contenuto!", likes:38, comments:16, tag:"Confronti" },
  ]);

  const [collabs, setCollabs] = useState([
    { id:101, author:"Luca T.", avatar:"LT", time:"3h fa", title:"Reel per Brand di Fitness", desc:"Cerco un content creator per realizzare 5 reel promozionali per un brand di fitness emergente. Stile energico, transizioni dinamiche. Il brand fornisce i prodotti.", budget:"€300-500", category:"Reel", status:"aperta", applicants:4 },
    { id:102, author:"Elena V.", avatar:"EV", time:"8h fa", title:"Gestione Instagram per Ristorante", desc:"Ristorante stellato cerca social media manager per gestione completa del profilo Instagram. 4 post a settimana + stories giornaliere. Contratto 3 mesi rinnovabile.", budget:"€800/mese", category:"Gestione", status:"aperta", applicants:7 },
    { id:103, author:"Andrea P.", avatar:"AP", time:"1g fa", title:"Fotografo per Shooting Prodotto", desc:"E-commerce di gioielli artigianali cerca fotografo per shooting di 50 prodotti. Stile minimal, sfondo bianco e lifestyle. Consegna entro 2 settimane.", budget:"€400-600", category:"Foto", status:"aperta", applicants:3 },
    { id:104, author:"Chiara M.", avatar:"CM", time:"2g fa", title:"Copywriter per Newsletter Settimanale", desc:"Startup tech cerca copywriter per newsletter settimanale B2B. Tono professionale ma accessibile. 1 newsletter a settimana, circa 800 parole. Collaborazione continuativa.", budget:"€150/newsletter", category:"Copy", status:"aperta", applicants:5 },
  ]);

  const filteredForum = forumTab==="Tutti"?forumPosts:forumPosts.filter(p=>p.tag===forumTab);
  const catColors = { Reel:C.magenta, Gestione:C.green, Foto:C.gold, Copy:C.pink };

  const handleNewForumPost = () => {
    if(!newPostText.trim())return;
    const initials=user.email.slice(0,2).toUpperCase();
    setForumPosts([{id:Date.now(),author:user.email.split("@")[0],avatar:initials,time:"Adesso",content:newPostText.trim(),likes:0,comments:0,tag:newPostTag},...forumPosts]);
    setNewPostText("");setShowNewPost(false);
  };

  const handleReply = (postId) => {
    const text=(commentTexts[postId]||"").trim();if(!text)return;
    const initials=user.email.slice(0,2).toUpperCase();
    setReplies(r=>({...r,[postId]:[...(r[postId]||[]),{id:Date.now(),author:user.email.split("@")[0],avatar:initials,text,time:"Adesso"}]}));
    setCommentTexts(t=>({...t,[postId]:""}));
  };

  const handleNewCollab = () => {
    if(!collabForm.title.trim()||!collabForm.desc.trim()||!collabForm.budget.trim())return;
    const initials=user.email.slice(0,2).toUpperCase();
    setCollabs([{id:Date.now(),author:user.email.split("@")[0],avatar:initials,time:"Adesso",...collabForm,status:"aperta",applicants:0},...collabs]);
    setCollabForm({title:"",desc:"",budget:"",category:"Reel"});setShowNewCollab(false);
  };

  const [applied, setApplied] = useState({});

  return (
    <div>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:20, flexWrap:"wrap", gap:12 }}>
        <div>
          <h1 style={{ fontFamily:"var(--fh)", color:C.text, fontSize:24, margin:"0 0 4px" }}>Community</h1>
          <p style={{ color:C.sub, fontSize:14, margin:0, fontFamily:"var(--fb)" }}>Forum, confronti e collaborazioni</p>
        </div>
      </div>

      {/* Section tabs */}
      <div style={{ display:"flex", gap:0, marginBottom:24, borderBottom:`2px solid ${C.borderLight}` }}>
        {[
          { key:"forum", label:"💬 Forum", sub:"Gratuito" },
          { key:"collabs", label:"🤝 Collaborazioni", sub:"Premium" },
        ].map(s=>(
          <button key={s.key} onClick={()=>setSection(s.key)} style={{
            padding:"14px 24px", border:"none", cursor:"pointer", fontFamily:"var(--fb)",
            background:"transparent", borderBottom:`3px solid ${section===s.key?C.magenta:"transparent"}`,
            color:section===s.key?C.magenta:C.sub, fontWeight:section===s.key?700:400,
            fontSize:15, transition:"all 0.2s", marginBottom:-2,
          }}>
            {s.label}
            <span style={{ display:"block", fontSize:11, fontWeight:400, color:section===s.key?C.magenta:C.dim, marginTop:2 }}>{s.sub}</span>
          </button>
        ))}
      </div>

      {/* ====== FORUM SECTION (FREE) ====== */}
      {section==="forum"&&(
        <div>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:16, flexWrap:"wrap", gap:10 }}>
            <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
              {forumTags.map(t=>(
                <button key={t} onClick={()=>setForumTab(t)} style={{
                  padding:"7px 14px", borderRadius:10, fontSize:13, fontWeight:600,
                  fontFamily:"var(--fb)", cursor:"pointer",
                  background:forumTab===t?C.magenta:"transparent",
                  color:forumTab===t?C.white:C.sub,
                  border:forumTab===t?"none":`1px solid ${C.border}`, transition:"all 0.2s",
                }}>{t}</button>
              ))}
            </div>
            <Btn onClick={()=>setShowNewPost(!showNewPost)}>{showNewPost?"✕ Chiudi":"+ Nuova Discussione"}</Btn>
          </div>

          {/* New post form */}
          {showNewPost&&(
            <div style={{ background:C.white, border:`1px solid ${C.magenta}30`, borderRadius:18, padding:22, marginBottom:16, boxShadow:"0 4px 20px rgba(0,0,0,0.04)" }}>
              <textarea value={newPostText} onChange={e=>setNewPostText(e.target.value)} placeholder="Fai una domanda, condividi un consiglio o apri un confronto..." rows={3}
                style={{ width:"100%", padding:"12px 16px", borderRadius:12, background:C.card, border:`1px solid ${C.border}`, color:C.text, fontSize:14, fontFamily:"var(--fb)", outline:"none", resize:"vertical", marginBottom:12, boxSizing:"border-box" }} />
              <div style={{ display:"flex", alignItems:"center", gap:8, flexWrap:"wrap" }}>
                <span style={{ color:C.sub, fontSize:13, fontFamily:"var(--fb)" }}>Categoria:</span>
                {["Domande","Tips","Confronti","Successi"].map(t=>(
                  <button key={t} onClick={()=>setNewPostTag(t)} style={{
                    padding:"5px 12px", borderRadius:8, fontSize:12, fontWeight:600, fontFamily:"var(--fb)", cursor:"pointer",
                    background:newPostTag===t?tagColors[t]+"20":"transparent", color:newPostTag===t?tagColors[t]:C.dim,
                    border:`1px solid ${newPostTag===t?tagColors[t]+"50":C.border}`, transition:"all 0.2s",
                  }}>{t}</button>
                ))}
                <Btn onClick={handleNewForumPost} disabled={!newPostText.trim()} style={{ marginLeft:"auto", padding:"8px 20px", fontSize:13 }}>Pubblica →</Btn>
              </div>
            </div>
          )}

          {/* Forum posts */}
          {filteredForum.length===0&&<div style={{ textAlign:"center", padding:40, color:C.dim, fontFamily:"var(--fb)" }}>Nessuna discussione in questa categoria.</div>}
          {filteredForum.map(post=>{
            const postReplies=replies[post.id]||[];const isOpen=openComments[post.id];
            return (
              <div key={post.id} style={{ background:C.white, borderRadius:18, padding:22, marginBottom:12, border:`1px solid ${C.border}`, boxShadow:"0 2px 8px rgba(0,0,0,0.02)" }}>
                <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:14 }}>
                  <div style={{ width:40, height:40, borderRadius:12, background:`linear-gradient(135deg, ${C.magenta}, ${C.gold})`, display:"flex", alignItems:"center", justifyContent:"center", color:C.white, fontWeight:700, fontSize:13, fontFamily:"var(--fb)" }}>{post.avatar}</div>
                  <div><div style={{ color:C.text, fontWeight:600, fontSize:14, fontFamily:"var(--fh)" }}>{post.author}</div><div style={{ color:C.dim, fontSize:12, fontFamily:"var(--fb)" }}>{post.time}</div></div>
                  <span style={{ marginLeft:"auto" }}><Badge color={tagColors[post.tag]}>{post.tag}</Badge></span>
                </div>
                <p style={{ color:C.text, fontSize:14, lineHeight:1.7, margin:"0 0 16px", fontFamily:"var(--fb)" }}>{post.content}</p>
                <div style={{ display:"flex", gap:20 }}>
                  <button onClick={()=>setLiked(p=>({...p,[post.id]:!p[post.id]}))} style={{ background:"none", border:"none", cursor:"pointer", fontSize:13, color:liked[post.id]?C.pink:C.sub, fontFamily:"var(--fb)", display:"flex", alignItems:"center", gap:5, transition:"color 0.2s" }}>
                    {liked[post.id]?"❤️":"🤍"} {post.likes+(liked[post.id]?1:0)}
                  </button>
                  <button onClick={()=>setOpenComments(c=>({...c,[post.id]:!c[post.id]}))} style={{ background:"none", border:"none", cursor:"pointer", fontSize:13, color:isOpen?C.magenta:C.sub, fontFamily:"var(--fb)", display:"flex", alignItems:"center", gap:5, transition:"color 0.2s" }}>
                    💬 {post.comments+postReplies.length}
                  </button>
                </div>
                {isOpen&&(
                  <div style={{ marginTop:16, paddingTop:16, borderTop:`1px solid ${C.borderLight}` }}>
                    {postReplies.map(r=>(
                      <div key={r.id} style={{ display:"flex", gap:10, marginBottom:12 }}>
                        <div style={{ width:30, height:30, borderRadius:8, flexShrink:0, background:`linear-gradient(135deg, ${C.green}, ${C.magenta})`, display:"flex", alignItems:"center", justifyContent:"center", color:C.white, fontWeight:700, fontSize:10, fontFamily:"var(--fb)" }}>{r.avatar}</div>
                        <div><div style={{ display:"flex", gap:8, alignItems:"center", marginBottom:2 }}><span style={{ color:C.text, fontSize:13, fontWeight:600, fontFamily:"var(--fh)" }}>{r.author}</span><span style={{ color:C.dim, fontSize:11 }}>{r.time}</span></div><p style={{ color:C.sub, fontSize:13, margin:0, lineHeight:1.5, fontFamily:"var(--fb)" }}>{r.text}</p></div>
                      </div>
                    ))}
                    <div style={{ display:"flex", gap:8, marginTop:8 }}>
                      <input value={commentTexts[post.id]||""} onChange={e=>setCommentTexts(t=>({...t,[post.id]:e.target.value}))} onKeyDown={e=>e.key==="Enter"&&handleReply(post.id)} placeholder="Rispondi alla discussione..."
                        style={{ flex:1, padding:"10px 14px", borderRadius:10, background:C.card, border:`1px solid ${C.border}`, color:C.text, fontSize:13, fontFamily:"var(--fb)", outline:"none" }} />
                      <Btn onClick={()=>handleReply(post.id)} disabled={!(commentTexts[post.id]||"").trim()} style={{ padding:"8px 16px", fontSize:13 }}>Invia</Btn>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* ====== COLLABORATIONS SECTION (PREMIUM) ====== */}
      {section==="collabs"&&(
        <div>
          {!user.isSubscribed?(
            <div style={{ background:C.white, border:`1px solid ${C.gold}30`, borderRadius:20, padding:"48px 32px", textAlign:"center", maxWidth:480, margin:"20px auto", boxShadow:"0 8px 40px rgba(0,0,0,0.04)" }}>
              <div style={{ fontSize:48, marginBottom:16 }}>🤝</div>
              <h2 style={{ fontFamily:"var(--fh)", color:C.text, fontSize:20, margin:"0 0 8px" }}>Area Collaborazioni Premium</h2>
              <p style={{ fontFamily:"var(--fb)", color:C.sub, fontSize:14, lineHeight:1.6, margin:"0 0 12px" }}>Questa sezione è riservata agli abbonati Premium. Qui puoi pubblicare e candidarti a collaborazioni retribuite con brand e altri creator.</p>
              <div style={{ background:C.card, borderRadius:14, padding:"16px 20px", marginBottom:24, border:`1px solid ${C.border}`, textAlign:"left" }}>
                {["Pubblica richieste di collaborazione","Candidati a progetti retribuiti","Contatta direttamente brand e creator","Accesso prioritario alle nuove opportunità"].map((f,i)=>(
                  <div key={i} style={{ display:"flex", alignItems:"center", gap:10, padding:"6px 0", color:C.text, fontSize:14, fontFamily:"var(--fb)" }}><span style={{ color:C.green }}>✓</span> {f}</div>
                ))}
              </div>
              <Btn variant="gold" onClick={onSubscribe}>⚡ Abbonati per accedere</Btn>
            </div>
          ):(
            <div>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20, flexWrap:"wrap", gap:10 }}>
                <p style={{ color:C.sub, fontSize:14, fontFamily:"var(--fb)", margin:0 }}>{collabs.length} collaborazioni attive</p>
                <Btn onClick={()=>setShowNewCollab(!showNewCollab)}>{showNewCollab?"✕ Chiudi":"+ Pubblica Collaborazione"}</Btn>
              </div>

              {/* New collab form */}
              {showNewCollab&&(
                <div style={{ background:C.white, border:`1px solid ${C.gold}30`, borderRadius:18, padding:24, marginBottom:20, boxShadow:"0 4px 20px rgba(0,0,0,0.04)" }}>
                  <h3 style={{ fontFamily:"var(--fh)", color:C.text, fontSize:17, margin:"0 0 16px" }}>Nuova Collaborazione</h3>
                  <input value={collabForm.title} onChange={e=>setCollabForm({...collabForm,title:e.target.value})} placeholder="Titolo (es. 'Reel per Brand di Moda')"
                    style={{ width:"100%", padding:"12px 16px", borderRadius:12, background:C.card, border:`1px solid ${C.border}`, color:C.text, fontSize:14, fontFamily:"var(--fb)", outline:"none", marginBottom:12, boxSizing:"border-box" }} />
                  <textarea value={collabForm.desc} onChange={e=>setCollabForm({...collabForm,desc:e.target.value})} placeholder="Descrivi il progetto, cosa cerchi, requisiti..." rows={3}
                    style={{ width:"100%", padding:"12px 16px", borderRadius:12, background:C.card, border:`1px solid ${C.border}`, color:C.text, fontSize:14, fontFamily:"var(--fb)", outline:"none", resize:"vertical", marginBottom:12, boxSizing:"border-box" }} />
                  <div style={{ display:"flex", gap:12, marginBottom:12, flexWrap:"wrap" }}>
                    <div style={{ flex:1, minWidth:150 }}>
                      <label style={{ color:C.sub, fontSize:12, fontFamily:"var(--fb)", display:"block", marginBottom:4 }}>Budget</label>
                      <input value={collabForm.budget} onChange={e=>setCollabForm({...collabForm,budget:e.target.value})} placeholder="es. €300-500"
                        style={{ width:"100%", padding:"10px 14px", borderRadius:10, background:C.card, border:`1px solid ${C.border}`, color:C.text, fontSize:14, fontFamily:"var(--fb)", outline:"none", boxSizing:"border-box" }} />
                    </div>
                    <div style={{ flex:1, minWidth:150 }}>
                      <label style={{ color:C.sub, fontSize:12, fontFamily:"var(--fb)", display:"block", marginBottom:4 }}>Categoria</label>
                      <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
                        {["Reel","Foto","Copy","Gestione"].map(c=>(
                          <button key={c} onClick={()=>setCollabForm({...collabForm,category:c})} style={{
                            padding:"6px 14px", borderRadius:8, fontSize:12, fontWeight:600, fontFamily:"var(--fb)", cursor:"pointer",
                            background:collabForm.category===c?(catColors[c]||C.magenta)+"20":"transparent",
                            color:collabForm.category===c?(catColors[c]||C.magenta):C.dim,
                            border:`1px solid ${collabForm.category===c?(catColors[c]||C.magenta)+"50":C.border}`,
                          }}>{c}</button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Btn onClick={handleNewCollab} disabled={!collabForm.title.trim()||!collabForm.desc.trim()||!collabForm.budget.trim()} style={{ width:"100%", justifyContent:"center" }}>Pubblica Collaborazione →</Btn>
                </div>
              )}

              {/* Collab cards */}
              <div style={{ display:"grid", gap:16 }}>
                {collabs.map(collab=>(
                  <div key={collab.id} style={{ background:C.white, borderRadius:18, padding:24, border:`1px solid ${C.border}`, boxShadow:"0 2px 12px rgba(0,0,0,0.03)" }}>
                    <div style={{ display:"flex", alignItems:"flex-start", gap:14, marginBottom:14 }}>
                      <div style={{ width:44, height:44, borderRadius:12, background:`linear-gradient(135deg, ${C.magenta}, ${C.gold})`, display:"flex", alignItems:"center", justifyContent:"center", color:C.white, fontWeight:700, fontSize:14, fontFamily:"var(--fb)", flexShrink:0 }}>{collab.avatar}</div>
                      <div style={{ flex:1, minWidth:0 }}>
                        <div style={{ display:"flex", alignItems:"center", gap:8, flexWrap:"wrap", marginBottom:4 }}>
                          <h3 style={{ fontFamily:"var(--fh)", color:C.text, fontSize:17, margin:0 }}>{collab.title}</h3>
                          <Badge color={catColors[collab.category]||C.magenta}>{collab.category}</Badge>
                        </div>
                        <div style={{ display:"flex", gap:12, color:C.dim, fontSize:12, fontFamily:"var(--fb)" }}>
                          <span>{collab.author}</span>
                          <span>{collab.time}</span>
                        </div>
                      </div>
                      <div style={{ textAlign:"right", flexShrink:0 }}>
                        <div style={{ color:C.gold, fontWeight:700, fontSize:16, fontFamily:"var(--fh)" }}>{collab.budget}</div>
                        <div style={{ color:C.dim, fontSize:11, fontFamily:"var(--fb)", marginTop:2 }}>{collab.applicants} candidature</div>
                      </div>
                    </div>
                    <p style={{ color:C.sub, fontSize:14, lineHeight:1.65, margin:"0 0 16px", fontFamily:"var(--fb)" }}>{collab.desc}</p>
                    <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:10 }}>
                      <Badge color={C.green} glow>🟢 {collab.status}</Badge>
                      {applied[collab.id]?(
                        <span style={{ color:C.green, fontSize:13, fontWeight:600, fontFamily:"var(--fb)" }}>✓ Candidatura inviata</span>
                      ):(
                        <Btn onClick={()=>setApplied(a=>({...a,[collab.id]:true}))} style={{ padding:"9px 22px", fontSize:13 }}>Candidati →</Btn>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ─── SUBSCRIBE MODAL ─── */
// =============================================
// 🔧 CONFIGURAZIONE: Inserisci l'URL del tuo backend
// =============================================
const API_URL = "https://ydv-backend-production.up.railway.app";

function SubscribeModal({ onClose, onConfirm, userEmail }) {
  const [plan, setPlan] = useState("monthly");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleStripeCheckout = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_URL}/create-checkout-session`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: userEmail, plan }),
      });
      const data = await res.json();
      if (data.error) {
        if (data.error === "Hai già un abbonamento attivo") {
          onConfirm(); // Attiva direttamente se già abbonato
          return;
        }
        setError(data.error);
        setLoading(false);
        return;
      }
      if (data.url) {
        window.open(data.url, "_blank"); // Apri Stripe Checkout
      }
    } catch (err) {
      setError("Errore di connessione al server. Riprova.");
    }
    setLoading(false);
  };

  const prices = { monthly: { amount: "9,99", period: "mese", save: null }, yearly: { amount: "89,99", period: "anno", save: "Risparmi €29,89" } };
  const p = prices[plan];

  return (
    <div style={{ position:"fixed", inset:0, zIndex:1000, background:"rgba(0,0,0,0.35)", backdropFilter:"blur(6px)", display:"flex", alignItems:"center", justifyContent:"center", padding:20 }} onClick={onClose}>
      <div onClick={e=>e.stopPropagation()} style={{ background:C.white, border:`1px solid ${C.gold}40`, borderRadius:24, padding:"44px 36px", maxWidth:480, width:"100%", textAlign:"center", boxShadow:"0 20px 80px rgba(0,0,0,0.1)" }}>
        <div style={{ fontSize:48, marginBottom:14 }}>⚡</div>
        <h2 style={{ fontFamily:"var(--fh)", color:C.text, fontSize:22, margin:"0 0 8px" }}>Passa a Premium</h2>
        <p style={{ color:C.sub, fontSize:14, lineHeight:1.6, margin:"0 0 20px", fontFamily:"var(--fb)" }}>Sblocca tutti i corsi, reel esclusivi e contenuti premium.</p>

        {/* Plan toggle */}
        <div style={{ display:"flex", gap:10, marginBottom:20 }}>
          {[
            { key: "monthly", label: "Mensile", price: "€9,99/mese" },
            { key: "yearly", label: "Annuale", price: "€89,99/anno", badge: "-25%" },
          ].map(pl => (
            <button key={pl.key} onClick={() => setPlan(pl.key)} style={{
              flex:1, padding:"16px 14px", borderRadius:14, cursor:"pointer",
              background: plan===pl.key ? C.goldSoft : C.card,
              border: `2px solid ${plan===pl.key ? C.gold : C.border}`,
              transition: "all 0.2s", position: "relative",
            }}>
              {pl.badge && <span style={{ position:"absolute", top:-8, right:10, background:C.magenta, color:C.white, fontSize:10, fontWeight:700, padding:"2px 8px", borderRadius:6, fontFamily:"var(--fb)" }}>{pl.badge}</span>}
              <div style={{ color: plan===pl.key ? C.text : C.sub, fontWeight:600, fontSize:14, fontFamily:"var(--fh)", marginBottom:4 }}>{pl.label}</div>
              <div style={{ color: plan===pl.key ? C.gold : C.dim, fontWeight:700, fontSize:15, fontFamily:"var(--fb)" }}>{pl.price}</div>
            </button>
          ))}
        </div>

        {p.save && <div style={{ color:C.green, fontSize:13, fontWeight:600, marginBottom:16, fontFamily:"var(--fb)" }}>🎉 {p.save}</div>}

        <div style={{ background:C.card, borderRadius:16, padding:"18px 24px", marginBottom:20, border:`1px solid ${C.border}`, textAlign:"left" }}>
          {["Tutti i 6 corsi sbloccati (300 slide)","Reel e tutorial premium","Supporto prioritario","Nuovi contenuti ogni settimana"].map((f,i)=>(
            <div key={i} style={{ display:"flex", alignItems:"center", gap:10, padding:"7px 0", color:C.text, fontSize:14, fontFamily:"var(--fb)" }}><span style={{ color:C.green }}>✓</span> {f}</div>
          ))}
        </div>

        {error && <div style={{ color:C.red, fontSize:13, marginBottom:12, fontFamily:"var(--fb)", padding:"8px 14px", background:`${C.red}10`, borderRadius:10 }}>{error}</div>}

        <Btn variant="gold" onClick={handleStripeCheckout} disabled={loading} style={{ width:"100%", justifyContent:"center", padding:"14px 24px", fontSize:16 }}>
          {loading ? "Caricamento..." : `★ Abbonati — €${p.amount}/${p.period}`}
        </Btn>

        <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:8, marginTop:14 }}>
          <span style={{ fontSize:12, color:C.dim }}>🔒</span>
          <span style={{ color:C.dim, fontSize:12, fontFamily:"var(--fb)" }}>Pagamento sicuro con Stripe</span>
        </div>

        <button onClick={onClose} style={{ background:"none", border:"none", color:C.dim, fontSize:13, cursor:"pointer", marginTop:12, fontFamily:"var(--fb)" }}>Non ora</button>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════ */
/* ─── MAIN APP ─── */
/* ═══════════════════════════════════════ */
export default function App() {
  const [user, setUser] = useState(null);
  const [tab, setTab] = useState("dashboard");
  const [openCourse, setOpenCourse] = useState(null);
  const [showSubModal, setShowSubModal] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Login: controlla lo stato abbonamento su Stripe
  const handleLogin = async (email) => {
    setUser({ email, isSubscribed: false, credits: 5, loading: true });
    try {
      const res = await fetch(`${API_URL}/subscription-status?email=${encodeURIComponent(email)}`);
      const data = await res.json();
      setUser({ email, isSubscribed: data.isSubscribed || false, credits: data.isSubscribed ? 999 : 5, plan: data.plan, loading: false });
    } catch {
      setUser({ email, isSubscribed: false, credits: 5, loading: false });
    }
  };

  const useCredit = () => {
    if (user.isSubscribed) return true;
    if (user.credits > 0) {
      setUser(u => ({ ...u, credits: u.credits - 1 }));
      return true;
    }
    setShowSubModal(true);
    return false;
  };

  const hasAccess = () => user.isSubscribed || user.credits > 0;

  const handleLogout = () => { setUser(null); setTab("dashboard"); setOpenCourse(null); };
  const handleSubscribe = () => setShowSubModal(true);
  const confirmSubscribe = () => { setUser(u=>({...u, isSubscribed:true, credits:999})); setShowSubModal(false); };

  const checkStripeReturn = () => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("success") === "true" && user) {
      confirmSubscribe();
      window.history.replaceState({}, "", window.location.pathname);
    }
  };
  if (user) checkStripeReturn();

  const handleManageSubscription = async () => {
    try {
      const res = await fetch(`${API_URL}/create-portal-session`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: user.email }),
      });
      const data = await res.json();
      if (data.url) window.open(data.url, "_blank");
    } catch { /* silenzioso */ }
  };

  const globalStyle = `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Lato:ital,wght@0,300;0,400;0,700;1,400&display=swap');
    :root{--fh:'Playfair Display',serif;--fb:'Lato',sans-serif;}
    *{box-sizing:border-box;margin:0;}
    ::-webkit-scrollbar{width:5px;}
    ::-webkit-scrollbar-track{background:transparent;}
    ::-webkit-scrollbar-thumb{background:${C.border};border-radius:3px;}
    input::placeholder,textarea::placeholder{color:${C.dim};}
    @media(max-width:768px){
      .sidebar{position:fixed!important;z-index:900;height:100vh!important;box-shadow:4px 0 30px rgba(0,0,0,0.15)!important;}
      .sidebar-overlay{display:block!important;}
      .main-content{padding:16px 18px!important;}
    }
    @media(min-width:769px){
      .sidebar-overlay{display:none!important;}
    }
  `;

  if (!user) return (<><style>{globalStyle}</style><LoginPage onLogin={handleLogin} /></>);

  const navItems = [
    { key:"dashboard", icon:"🏠", label:"Dashboard" },
    { key:"corsi", icon:"📚", label:"Corsi", badge:COURSES.length },
    { key:"contenuti", icon:"🎬", label:"Contenuti" },
    { key:"community", icon:"💬", label:"Community", badge:COMMUNITY.length },
    { key:"aistudio", icon:"🤖", label:"AI Studio" },
    { key:"positioning", icon:"🎯", label:"Positioning" },
  ];

  const navigateTo = (key) => {
    setTab(key);
    setOpenCourse(null);
    if (window.innerWidth <= 768) setSidebarOpen(false);
  };

  const renderMain = () => {
    if (openCourse) return <CoursePage course={openCourse} onBack={()=>setOpenCourse(null)} user={user} onSubscribe={handleSubscribe} />;
    switch(tab) {
      case "dashboard": return <DashboardPage user={user} onSubscribe={handleSubscribe} />;
      case "corsi": return <CorsiPage user={user} onOpenCourse={setOpenCourse} onSubscribe={handleSubscribe} useCredit={useCredit} hasAccess={hasAccess} />;
      case "contenuti": return <ContenutiPage user={user} onSubscribe={handleSubscribe} useCredit={useCredit} hasAccess={hasAccess} />;
      case "community": return <CommunityPage user={user} onSubscribe={handleSubscribe} />;
      case "positioning": return <BrandPositioningPage user={user} onSubscribe={handleSubscribe} useCredit={useCredit} hasAccess={hasAccess} />;
      case "aistudio": return <AIStudioPage user={user} onSubscribe={handleSubscribe} useCredit={useCredit} hasAccess={hasAccess} />;
      default: return null;
    }
  };

  return (
    <div style={{ fontFamily:"var(--fb)", background:C.bg, minHeight:"100vh", display:"flex", color:C.text }}>
      <style>{globalStyle}</style>

      {/* Overlay mobile quando sidebar aperta */}
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.3)", zIndex:899 }} />
      )}

      {/* Sidebar */}
      <aside className="sidebar" style={{
        width: sidebarOpen ? 230 : 0,
        minHeight:"100vh", background:C.white,
        borderRight: sidebarOpen ? `1px solid ${C.border}` : "none",
        display:"flex", flexDirection:"column",
        padding: sidebarOpen ? "20px 12px" : 0,
        position:"sticky", top:0, flexShrink:0,
        boxShadow: sidebarOpen ? "2px 0 20px rgba(0,0,0,0.03)" : "none",
        overflow:"hidden", transition:"width 0.3s ease, padding 0.3s ease",
        whiteSpace:"nowrap",
      }}>
        {/* Logo + close button */}
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"6px 8px 22px", borderBottom:`1px solid ${C.borderLight}`, marginBottom:16 }}>
          <div style={{ display:"flex", alignItems:"center", gap:10 }}>
            <Logo size={38} />
            <div>
              <div style={{ color:C.magenta, fontWeight:700, fontSize:14, fontFamily:"var(--fh)", lineHeight:1.2 }}>Your Digital</div>
              <div style={{ color:C.gold, fontWeight:600, fontSize:12, fontFamily:"var(--fh)" }}>Voice</div>
            </div>
          </div>
          <button onClick={() => setSidebarOpen(false)} style={{
            background:"none", border:"none", cursor:"pointer", color:C.dim, fontSize:18,
            width:32, height:32, borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center",
            transition:"background 0.2s",
          }}
            onMouseEnter={e => e.currentTarget.style.background = C.card}
            onMouseLeave={e => e.currentTarget.style.background = "none"}
          >✕</button>
        </div>

        {/* Nav items */}
        <div style={{ display:"flex", flexDirection:"column", gap:4 }}>
          {navItems.map(n=>(
            <button key={n.key} onClick={() => navigateTo(n.key)} style={{
              display:"flex", alignItems:"center", gap:11, padding:"10px 14px", borderRadius:12,
              background:tab===n.key&&!openCourse?C.magentaSoft:"transparent",
              border:"none", color:tab===n.key&&!openCourse?C.magenta:C.sub,
              cursor:"pointer", fontSize:14, fontFamily:"var(--fb)",
              fontWeight:tab===n.key&&!openCourse?700:400, transition:"all 0.2s", width:"100%", textAlign:"left",
            }}>
              <span style={{ fontSize:19 }}>{n.icon}</span><span>{n.label}</span>
              {n.badge&&<span style={{ marginLeft:"auto", background:tab===n.key&&!openCourse?C.magenta:C.borderLight, color:tab===n.key&&!openCourse?C.white:C.sub, fontSize:11, fontWeight:700, borderRadius:8, padding:"2px 8px" }}>{n.badge}</span>}
            </button>
          ))}
        </div>

        {/* Bottom section */}
        <div style={{ marginTop:"auto" }}>
          {!user.isSubscribed?(
            <button onClick={handleSubscribe} style={{ width:"100%", padding:"12px 14px", borderRadius:14, border:`1px solid ${C.gold}30`, background:C.goldSoft, color:C.gold, fontSize:13, fontWeight:700, fontFamily:"var(--fb)", cursor:"pointer", marginBottom:14, display:"flex", alignItems:"center", gap:8 }}>⚡ Passa a Premium</button>
          ):(
            <button onClick={handleManageSubscription} style={{ width:"100%", padding:"10px 14px", borderRadius:14, background:C.goldSoft, border:`1px solid ${C.gold}20`, marginBottom:14, display:"flex", alignItems:"center", gap:8, cursor:"pointer", fontFamily:"var(--fb)" }}>
              <span style={{ fontSize:16 }}>★</span>
              <span style={{ color:C.gold, fontSize:13, fontWeight:700 }}>Gestisci Piano</span>
            </button>
          )}
          <div style={{ padding:"12px 10px", borderTop:`1px solid ${C.borderLight}` }}>
            <div style={{ display:"flex", alignItems:"center", gap:10 }}>
              <div style={{ width:34, height:34, borderRadius:10, background:`linear-gradient(135deg, ${C.magenta}, ${C.gold})`, display:"flex", alignItems:"center", justifyContent:"center", color:C.white, fontWeight:700, fontSize:12, fontFamily:"var(--fb)" }}>{user.email.slice(0,2).toUpperCase()}</div>
              <div style={{ flex:1, minWidth:0 }}><div style={{ color:C.text, fontSize:13, fontWeight:600, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{user.email}</div></div>
            </div>
            <button onClick={handleLogout} style={{ width:"100%", marginTop:10, padding:"7px", borderRadius:8, background:"transparent", border:`1px solid ${C.border}`, color:C.dim, fontSize:12, cursor:"pointer", fontFamily:"var(--fb)" }}>Esci</button>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="main-content" style={{ flex:1, padding:"28px 36px", maxWidth:1100, overflowY:"auto" }}>
        {/* Top bar with hamburger */}
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:24, gap:12 }}>
          <div style={{ display:"flex", alignItems:"center", gap:12 }}>
            {!sidebarOpen && (
              <button onClick={() => setSidebarOpen(true)} style={{
                background:C.white, border:`1px solid ${C.border}`, borderRadius:10,
                width:40, height:40, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center",
                fontSize:20, color:C.text, boxShadow:"0 2px 8px rgba(0,0,0,0.04)",
                transition:"background 0.2s",
              }}
                onMouseEnter={e => e.currentTarget.style.background = C.card}
                onMouseLeave={e => e.currentTarget.style.background = C.white}
              >☰</button>
            )}
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:12 }}>
            {!user.isSubscribed && <div style={{ background:C.magentaSoft, border:`1px solid ${C.magenta}20`, borderRadius:10, padding:"5px 12px", display:"flex", alignItems:"center", gap:6 }}>
              <span style={{ fontSize:14 }}>⚡</span>
              <span style={{ color:C.magenta, fontSize:13, fontWeight:700, fontFamily:"var(--fb)" }}>{user.credits} crediti</span>
            </div>}
            <span style={{ color:C.sub, fontSize:14, fontFamily:"var(--fb)" }}>Ciao, <strong style={{ color:C.magenta }}>{user.email}</strong></span>
            {user.isSubscribed&&<Badge color={C.gold} glow>★ PRO</Badge>}
          </div>
        </div>
        {renderMain()}
      </main>

      {showSubModal&&<SubscribeModal onClose={()=>setShowSubModal(false)} onConfirm={confirmSubscribe} userEmail={user.email} />}
    </div>
  );
}
