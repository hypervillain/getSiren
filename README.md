
## Get French Companies open data by their registration number

### Hello all,

this is a simple module we use [at Whire](http:whire.me "Check it out!").

It allows your users to fill their company information by entering their [Siren number](https://avis-situation-sirene.insee.fr/jsp/presentation.jsp)!

If data is found, each input is set accordingly.

## So, what do you get?

A simple object providing you with essential data from any registered company.

Here is a WYSIWYG using Airbus registration number :

```javascript

  {

  }
```


## To launch it,

simply

```shell
  git clone https://github.com/Thook/getSiren && cd getSiren; npm install
```

register the controller in any server file and call it with your own Siren number :

```javascript

  var getSiren = require('./getSiren/index.js')

  // using Airbus Siren
  getSiren.requestDataFromSiren('38347481400043', (error, data) => {
    // use data at your own convenience...
  })

```


## Questions or collaboration?

Send me an email : hugo at whire dot me!

Pull requests would also be greatly appreciated,
especially to parallelize the process!
