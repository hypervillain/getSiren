
## Get French Companies open data by their registration number

### Hello all,

this is a simple module we use at [Whire](http:whire.me "Check it out!").

It allows your users to fill their company information by entering their [Siren number](https://avis-situation-sirene.insee.fr/jsp/presentation.jsp)!

If data is found, just set each relevant input accordingly.

## So, what do you get?

A simple object providing you with essential data from any registered company.

Here is a WYSIWYG using Airbus registration number :

```javascript

{
  'Dernière date maj': '05-01-2016',
  'N° d\'établissement (NIC)': '00043',
  'N° de SIRET': '38347481400043',
  'Nom': 'AIRBUS SAS',
  'Adresse': '1 ROND POINT MAURICE BELLONTE',
  'Code postal': '31700',
  'Ville': 'BLAGNAC',
  'Pays': 'FRANCE',
  'Département de l\'unité urbaine': '31',
  'Taille de l\'unité urbaine': 'Unité urbaine de 200 000 à 1 999 999 habitants',
  'Numéro de l\'unité urbaine': '01',
  'Zone emploi': '61',
  'Nature de l\'établissement': 'Siege',
  'Code ape (NAF)': '3030Z',
  'Libellé du code APE': 'Construction aéronautique et spatiale',
  'Année de validité de l\'activité principale': '2009',
  'Tranche d\'effectif salarié': '6500 à 6599 salariés',
  'Origine de la création': 'Autre (pour les déclarations non agricoles)',
  'Date de création entreprise': '18-10-1991',
  'Date de création établissement': '29-05-2000',
  'Nature de l\'activité': 'Fabrication, production',
  'Caractère saisonnier ou non': 'Permanente',
  'Modalité de l\'activité principale': 'Activité simple',
  'Caractère auxiliaire': 'Non auxiliaire'
}

```


## To launch it,

simply

```shell
  $> git clone https://github.com/Thook/getSiren && cd getSiren; npm install
```

register the controller in any server file and call it with your own Siren number :

```javascript

  var getSiren = require('./getSiren/index.js')

  getSiren.requestDataFromSiren('38347481400043', (error, data) => {

    if (error) {
      console.log(`status : ${error.code}`)
      console.log(`log : ${error.log}`)
    }
    else {
      // use data at your own convenience...
    }

  })

```


## Questions or collaboration?

Send me an email : hugo at whire dot me

Pull requests would also be greatly appreciated!
