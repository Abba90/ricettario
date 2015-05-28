'use strict';

/**
 * @ngdoc service
 * @name porApp.myFactory
 * @description
 * # myFactory
 * Factory in the porApp.
 */
angular.module('porApp')
  .factory('myFactory', function ($http,$q) {
    var ingredienti = [];

    var ricette = [];
/*
     var ricette = [
      {
        nome: 'Besciamella 2',
        ingredienti:[
          {nome:'burro', quantita: '100'},
          {nome:'sale', quantita: '0'},
          {nome:'noce moscata', quantita: '0'},
          {nome:'farina', quantita: '100'},
          {nome:'latte', quantita: '1000'}
        ],
        tempo:35,
        procedimento:'Per preparare la besciamella mettete a scaldare in un pentolino il latte (il latte deve essere molto fresco e intero) (1); a parte fate sciogliere il burro a fuoco basso (2), poi spegnete il fuoco e aggiungete la farina setacciata a pioggia (3), mescolando con una frusta per evitare la formazione di grumi. Poi rimettete sul fuoco dolce e mescolate fino a farla diventare dorata.Avrete così ottenuto quello che i francesi chiamano roux (4); aromatizzate il latte con la noce moscata (5) e un pizzico di sale (potete fare queste operazioni anche come ultimo passaggio, quando la besciamella sarà pronta); poi unitelo poco alla volta al roux (6), mescolando energicamente il tutto con la frusta. Cuocete 5-6 minuti a fuoco dolce finché la salsa si sarà addensata (7) e inizierà a bollire. Con questa ricetta otterrete una densità media (8); se volete una besciamella più liquida dovrete diminuire la dose di burro e farina; per una besciamella più densa dovrete al contrario aumentare la dose di burro e farina. La vostra bescimella è pronta (9): potete usarla per piatti complessi come lasagne, cannelloni e molti altri primi piatti- è ottima per guarnire i famosissimi "vol-au-vent" o per insaporire piatti al forno di carne, verdure lessate, pesce, soufflè, insomma... sbizzarritevi!'
      },
      {
        nome: 'Brodo di Carne',
        ingredienti:[
          {nome:'carne', quantita: '1000'},
          {nome:'acqua', quantita: '3000'},
          {nome:'pepe', quantita: '0'},
          {nome:'alloro', quantita: '0'},
          {nome:'cipolla', quantita: '60'},
          {nome:'carota', quantita: '20'},
          {nome:'sedano', quantita: '20'},
          {nome:'sale', quantita: '0'}
        ],
        tempo:140,
        procedimento: 'Mondate le cipolle, le carote e il sedano (1); riempite una capiente pentola con l’acqua fredda e immergetevi le verdure (2); steccate la cipolla con le foglie di alloro (3) e i chiodi di garofano e unite anche queste nell’acqua (4); aggiungete il ginepro (5) e il pepe in grani (6) e in ultimo anche i pezzi di carne e ossa (7-8), regolate di sale (9) e ponete sul fuoco medio e portate lentamente a bollore; abbassate la fiamma e coprite. Lasciate sobbollire dolcemente per circa 2-3 ore. Trascorso questo tempo (10) prelevate le verdure e la carne (11) (che potrete o consumare con un bagnetto verde oppure macinare per fare delle polpette o un polpettone), regolate nuovamente di sale se necessario e usate il brodo per le preparazioni che vorrete (12).'
      },
      {
        nome: 'Cavatelli',
        ingredienti:[
          {nome:'farina', quantita: '250'},
          {nome:'acqua', quantita: '130'},
          {nome:'olio', quantita: '0'},
        ],
        tempo:15,
        procedimento: 'Per preparare i cavatelli iniziate dalla pasta di semola: mescolate le due farine in una ciotola (1) e trasferitele su una spianatoia, formando al centro la classica fontana. Aggiungete l’acqua poco alla volta e impastate (2-3).Per ultimo unite l’olio (4) e continuate ad impastare (5) fino ad ottenere un impasto molto liscio e morbido a cui darete una forma rotonda (6).Avvolgete la pasta di semola nella pellicola (7) e lasciate riposare per 10-15 minuti affinchè l\' impasto diventi ben elastico. Trascorso questo tempo, prendete un pezzo di pasta alla volta e con esso formate un tubo non troppo sottile (8). Dividete il tubo di pasta in tocchetti larghi 1 cm (9). Formate ora i cavatelli: esercitando una leggera pressione, scavate il cavatello al suo interno, arriccinado un po\' i bordi (10). Ponete i cavatelli su un vassoio e spolverizzateli con la semola (11). Potete cuocere i cavatelli anche subito, ma vi consigliamo di lasciarli seccare almeno un paio d\'ore sulla spianatoia (o anche in frigo) in modo che abbiamo una consistenza più robusta durante la cottura. Cuocete i cavatelli in acqua bollente salata per almeno 7-8 minuti (12), controllando sempre la cottura con un assaggio.'
      },
      {
        nome: 'Crepes',
        ingredienti:[
          {nome:'uova', quantita: '150'},
          {nome:'farina', quantita: '250'},
          {nome:'latte', quantita: '500'},
          {nome:'sale', quantita: '0'},
          {nome:'burro', quantita: '40'}
        ],
        tempo:12,
        procedimento: 'Ponete in una ciotola dai bordi alti la farina preventivamente setacciata, (lo zucchero, e la vanillina se preparerete delle crepes dolci), 1 pizzico di sale e ½ litro di latte (1). Lavorate il composto (potete usare anche uno sbattitore o il minipimer) fino a che sarà liscio, vellutato e senza alcun grumo. In una terrina a parte sbattete con una forchetta le uova affinché si amalgamino, poi aggiungetele alla pastella (2) e continuate a mescolare aggiungete il burro sciolto, coprite la pastella e lasciatela riposare per almeno mezz’ora in frigo.      Ponete a scaldare sul fuoco una padella antiaderente per crepes, fatevi fondere una piccola noce di burro, e quando sarà ben calda versatevi un mestolino di pastella (3) necessaria a coprire il fondo così facendo: ponete la pastella al centro della padella e poi inclinandola e ruotandola, cercate di distribuirla su tutta la superficie; in alternativa potete spalmare la pastella con un cucchiaio, o l\'apposito attrezzo (4) (questa operazione deve essere fatta abbastanza velocemente, poiché la pastella, posta sulla padella calda, tenderà a solidificarsi rapidamente impedendovi di spargerla uniformemente sul fondo.) Lasciate cuocere per un minuto  scuotendo la padella di tanto in tanto per fare staccare la crepe dal fondo: non appena sarà dorata, (5) giratela dall’altra parte e attendete che a sua volta assuma lo stesso colore.      Appena pronta, toglietela dalla padella facendola scivolare su di un piatto, (6) e continuate così anche per le restanti crepes, adagiandole una sull’altra a mano a mano che saranno pronte.'
      },
      {
        nome: 'Maionese',
        ingredienti:[
          {nome:'uova', quantita: '100'},
          {nome:'limone', quantita: '25'},
          {nome:'olio', quantita: '250'},
          {nome:'aceto', quantita: '3'},
          {nome:'pepe', quantita: '0'},
          {nome:'sale', quantita: '0'}
        ],
        tempo:30,
        procedimento: 'Per preparare la maionese prendete le uova a temperatura ambiente e dividete i tuorli dagli albumi. Ponete i tuorli in una ciotola dai bordi alti e salate e pepate a vostro piacimento (1). Versate l’aceto e incominciate a lavorare gli ingredienti con uno sbattitore elettrico (2). Mentre state montando le uova, versate anche l’olio di semi a filo molto lentamente (3): questo passaggio è fondamentale per la buona riuscita della vostra maionese; dovrete mescolare sempre nello stesso senso fino ad ottenere una salsa densa. Per non far impazzire la maionese bisogna evitare di aggiungere troppo olio in una volta, impedendone il corretto emulsionamento con il tuorlo.Quando la maionese è montata (4), terminate aggiungendo il succo di limone (5) e lavorate ancora con le fruste (6). Se improvvisamente vedeste dei grumi nella maionese, sappiate che, come si dice in gergo, “è impazzita”, quindi avrete superato la quantità massima di olio necessaria. Per rimediare, potete aggiungere altra parte acquosa, ovvero alcune gocce di limone o aceto. Mentre se preferite una consistenza più densa potete aggiungere un tuorlo d\'uovo in questo modo: frullatelo aggiungendo un filo d’olio e poi, sempre nel recipiente, aggiungete un cucchiaino alla volta la maionese impazzita. Dovrete mescolare sempre nello stesso senso fino ad ottenere una salsa densa. Considerate che a volte, per vari motivi, non si riesce a calcolare l’esatta quantità di olio da adoperare per ottenere la maionese, quindi tenetene sempre un po’ in più di scorta: essendo la maionese un\'emulsione tra una parte acquosa (aceto e limone) e una grassa (olio) legate tra loro dalle proteine dell\'uovo, sarà fondamentale che il composto sia stabile. Un’altra variabile può essere la scelta dell’olio stesso, che dipende dai gusti e dall’utilizzazione della maionese. Generalmente la maionese viene prodotta con olio extravergine di oliva, migliore dal punto di vista salutistico, ma dal gusto molto intenso; se la maionese deve accompagnare un piatto dal sapore delicato, c’è il rischio che quest’ultimo venga coperto dal gusto troppo deciso della maionese. In questo caso la soluzione migliore è quella di utilizzare un olio extravergine delicato o in alternativa un buon olio di semi, come quello di arachide o girasole.'
      },
      {
        nome: 'Brodo di gallina',
        ingredienti:[
          {nome:'acqua', quantita: '3000'},
          {nome:'pepe', quantita: '0'},
          {nome:'alloro', quantita: '0'},
          {nome:'cipolla', quantita: '60'},
          {nome:'aglio', quantita: '5'},
          {nome:'carota', quantita: '20'},
          {nome:'sedano', quantita: '20'},
          {nome:'sale', quantita: '0'},
          {nome:'pollo', quantita: '1000'},
          {nome:'prezzemolo', quantita: '0'}
        ],
        tempo:130,
        procedimento: 'Per preparare il brodo di gallina, cominciate con la pulizia della gallina: fiammeggiate la gallina per togliere eventuali piume rimaste (1); poi mondate e lavate tutte le verdure (2); ponete la gallina intera (3) in una casseruola con almeno 2-3 litri di acqua, e aggiungete le foglie di alloro.Aggiungete l\'aglio (4), le carote, la cipolla (5), il sedano (6), il prezzemolo e in ultimo anche il pepe in grani (7); incoperchiate e fate cuocere lasciando sobbollire dolcemente per circa 2-3 ore.        Una volta trascorso questo tempo, fate raffreddare completamente il brodo di gallina in luogo molto freddo fino a che la parte grassa affiorerà in superficie formando una patina (8); prelevate la gallina (9) e prelevate anche le verdure (10-11).         Potete bere il brodo di gallina così al naturale (12) oppure usarlo per cuocere degli ottimi tortellini o ravioli, soprattutto durante le feste di Natale.'
      },
      {
        nome: 'Crema al latte',
        ingredienti:[
          {nome:'latte', quantita: '400'},
          {nome:'miele', quantita: '30'},
          {nome:'zucchero', quantita: '80'},
          {nome:'vaniglia', quantita: '0'},
          {nome:'amido', quantita: '40'},
          {nome:'panna', quantita: '150'}
        ],
        tempo:30,
        procedimento: 'Per preparare la crema al latte mettete a scaldare 300 g di latte (1) insieme allo zucchero in una casseruola (2). Incidete la bacca di vaniglia nel senso della lunghezza ed estraete i semi, raschiandola con un coltellino (3); unite i semi della bacca di vaniglia nel latte (4) e fate addensare a fuoco bassissimo, mischiando bene con le fruste per far sciogliere lo zucchero. In una ciotola a parte setacciate l’amido di mais (5), poi versate il latte rimanente, mescolando con una frusta a mano (6): così facendo, eviterete la formazione di grumi nella crema. Aggiungete il latte freddo in cui si è sciolto l’amido di mais nella casseruola con il latte e lo zucchero (7). Unite anche il miele (8), continuando con le fruste sempre a fuoco bassissimo fino a quando la crema non si sarà addensata. Una volta che sarà densa ed omogenea, spegnete e versate la crema che avete ottenuto in una ciotola (9). Coprite con la pellicola trasparente a contatto, facendola aderire bene alla superficie in modo che non si formi la fastidiosa crosticina (10); lasciate raffreddare a temperatura ambiente e poi in frigorifero. Trascorso il tempo necessario, togliete la crema dal frigorifero (11): se doveste riscontrare la presenza di eventuali grumi, setacciatela con un colino a maglie strette così da eliminarli. Fate rinvenire la crema con uno sbatttore elettrico, poi in una ciotola a parte montate la panna fredda da frigorifero (12). Unite la panna montata alla crema al latte, ormai fredda (13), mescolando i due composti molto delicatamente dal basso verso l’alto (14) fino ad ottenere una crema liscia ed omogenea (15). La vostra crema al latte è pronta: potrete usarla per farcire bignè, rotoli di pasta biscotto, torte e altri dessert!'
      },
      {
        nome: 'Meringa',
        ingredienti:[
          {nome:'uova', quantita: '125'},
          {nome:'acqua', quantita: '50'},
          {nome:'zucchero', quantita: '250'},
          {nome:'sale', quantita: '0'}
        ],
        tempo:260,
        procedimento: 'Per realizzare la meringa all’italiana versate l‘acqua in un pentolino dal fondo pesante (1), aggiungete lo zucchero e cuocete a fuoco basso (2) mescolando per scioglierlo. Immergetevi l’apposito termometro (3) per alimenti, che vi indicherà la temperatura da raggiungere, cioè 121°C. Quando la temperatura dello sciroppo, raggiungerà i 114°C, ponete gli albumi in una planetaria munita di frusta (4) (oppure usate un frullatore elettrico) e montateli a neve a media velocità (5). Quando lo sciroppo avrà raggiunto i 121°, abbassate la velocità della planetaria (per evitare la dispersione dello sciroppo sulle pareti della ciotola), versate metà dello sciroppo negli albumi (6) e poi aumentate nuovamente la velocità. Aspettate qualche secondo e continuate a versare a filo lo sciroppo, senza versarlo direttamente sulla frusta. continuate a montare fino a completo raffreddamento della meringa. La meringa ottenuta dovrà presentarsi molto densa, liscia e lucida (7) e potrà essere cotta solo quando sarà completamente fredda. Versate la meringa in una sac-à-poche (8), scegliendo la bocchetta in base all’utilizzo che ne dovete fare e formate le meringhe da voi desiderate spremendo il composto su di una teglia foderata con carta forno. Potete creare le classiche meringhe a nuvola utilizzando una bocchetta larga stellata (9). Per variare potete delle conchiglie usando una bocchetta stellata (10), delle girelle spremendo a spirale la meringa con una bocchetta liscia (11), per agevolarvi disegnate con la matita la sagoma sulla carta da forno. Infornate le meringhe in forno statico preriscaldato a 60-70°C e lasciatele asciugare per almeno 4 ore lasciando lo sportello del forno leggermente socchiuso, in modo da evitare un’ eventuale condensa che impedirebbe la corretta asciugatura delle stesse ( l’umidità è acerrima nemica delle meringhe). A cottura ultimata, spegnete il fuoco e lasciate le meringhe nel forno semiaperto e lasciatele raffreddare ed asciugare completamente almeno per un paio di ore.'
      },
      {
        nome: 'Pan di Spagna',
        ingredienti:[
          {nome:'uova', quantita: '150'},
          {nome:'farina', quantita: '100'},
          {nome:'zucchero', quantita: '100'},
          {nome:'sale', quantita: '0'}
        ],
        tempo:60,
        procedimento: 'Sbattete le uova e mettetele con lo zucchero in un pentolino. Amalgamate blandamente con una frusta fino a portarle alla temperatura di 45°.  Arrivate a temperatura, trasferitele in una planetaria e montatele per bene col robot da cucina o con le fruste elettriche. Questa è la fase più importante per ottenere un buon Pan di Spagna. Dovete montarle ad una velocità nè troppo veloce, nè troppo bassa. Nel robot da cucina in una scala da 1 a 6, va bene la velocità 3. In 6/7 minuti dovreste ottenere un composto molto chiaro e spumoso. Un modo per capire se la montatura è arrivata al punto giusto è quello di odorare il composto e non sentire più il profumo dello zucchero.        A questo punto, aggiungete poco alla volta la farina setacciata e incorporatela con delicatezza con una palettina di silicone, facendo attenzione ad amalgamare dal basso verso l’alto per non farlo smontare. Imburrate e infarinate una tortiera di 18/20 cm di diametro e versateci delicatamente dentro il composto. Distribuite per bene su tutta la tortiera e non solo dal centro. Per farlo crescere in modo uniforme, passate la palettina di silicone a formare un cerchio concentrico tra il centro e il bordo della tortiera in modo da livellare per bene il composto. nfornate in forno preriscaldato (non ventilato) a 190° per 20 minuti. La ricetta originale del Pan di Spagna non prevede lievito. E’ l’aria incorporata nella lavorazione delle uova con lo zucchero che garantisce la morbidezza e la sofficità, perciò non aprite mai il forno durante la cottura per evitare che il dolce di sgonfi.        Sfornate e lasciate raffreddare prima di tagliarlo e utilizzarlo nelle vostre preparazioni.'
      },
      {
        nome: 'Pasta per la pizza',
        ingredienti:[
          {nome:'farina', quantita: '1000'},
          {nome:'acqua', quantita: '600'},
          {nome:'lievito', quantita: '7'},
          {nome:'olio', quantita: '60'},
          {nome:'sale', quantita: '0'}
        ],
        tempo:15,
        procedimento: 'Per preparare la pasta per la pizza iniziate versando la farina nella ciotola della planetaria (1). Aggiungete il lievito (2) e 100 grammi d’acqua, quindi azionate la planetaria con il gancio montato a velocità medio bassa (3). Procedete aggiungendo l’acqua poco per volta, avendo cura di aspettare che la dose precedente sia stata ben assorbita dalla farina (4). Una volta versati circa i 3/4 dell\'acqua aggiungete il sale (5) e continuate ad impastare. Aggiungete il resto dell’acqua sempre a filo e lasciate lavorare fino ad ottenere un composto liscio ed omogeneo (6). A questo punto aggiungete l’olio gradatamente (come avete fatto con l’acqua) (7). Quando l’olio è stato completamente assorbito, estraete l’impasto dalla planetaria e modellatelo con le mani fino ad ottenere una palla (8). Inseritelo in una ciotola capiente leggermente unta (9), coprite con pellicola o con un canovaccio pulito e mettete a lievitare nel forno con la luce accesa (10). Attendete che l’impasto abbia almeno raddoppiato il suo volume (1,5 h), meglio triplicato (2,5/3 h) e procedete alla stesura delle pizze (11). Una volta che l’impasto sarà lievitato, trasferitelo sulla spianatoia aiutandovi con un tarocco (12).    Quindi dividetelo in 4 parti uguali (13) e con le mani formate delle palline (14). Una volta terminato, coprite con un canovaccio pulito e lasciate riposare per 30 minuti (15), prima di utilizzarle per realizzare le vostre pizze.  '
      }
    ];

*/
    /*

    $http.get('ricette.json')
      .success(function (data) {
        ricette = data;
      });
*/


     function getRicette() {
      var deferred = $q.defer();
      if (ricette.length) {
        deferred.resolve(ricette);
      } else {
        $http.get('ricette.json')
          .success(function (data) {
            ricette = data;
            deferred.resolve(ricette);
          });
      }
      return deferred.promise;
    };


    return {
      getIngredienti:getIngredienti,
      getPossibiliRicette:getPossibiliRicette,
      getRicetta:getRicetta,
      getRicette: getRicette
      /*getRicette: function(){
        return ricette
      }
*/
    };

    function getPossibiliRicette(dispensa){
      return _.filter(ricette, function(ricetta){
        var b=true;
        _.each(ricetta.ingredienti, function(ingrediente){
          b=b && _.contains(dispensa, ingrediente.nome);
        });
        return b;
      });
    }

    function getRicetta(nome){
      return _.find(ricette,function(ricetta){
        return nome===ricetta.nome
      });
    }
/*
    function getIngredienti(){
      ingredienti=[];
          _.each(ricette, function(ricetta){
            _.each(ricetta.ingredienti, function(ingrediente){
              ingredienti.push(ingrediente.nome);
            });
          });
      return _.uniq(ingredienti);
    }
*/

    function getIngredienti(){
      ingredienti=[];
      var deferred = $q.defer();
      getRicette().then(function(){
        _.each(ricette, function(ricetta){
          _.each(ricetta.ingredienti, function(ingrediente){
            ingredienti.push(ingrediente.nome)
          });
        });
        deferred.resolve( _.uniq(ingredienti));
      });
      return deferred.promise;
    }

  });
