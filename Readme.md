# CurrencyField for ExtJS

ExtJS component which extends Ext.form.field.number to have more options when dealing with currency entry. Such as right aligned and always defaulting to two decimal places. 

## Adding package to workspace or app
Download [currencyField.pkg](https://github.com/RichardStyles/ExtJS-CurrencyField/releases) from releases [1.0.0]

copy: .pkg file to workspace of your project

run: ```sencha package add currencyField.pkg```

add 'material-icons' to your app.json

```
   "requires": [
      "font-awesome",
      "currencyField"
   ],
```
If upgrading from an earlier release run this command first
run ```sencha app refresh -packages```

or start using this package by running
run: ```sencha app refresh```

## Usage

Use the xtype or createAlias ```currencyfield```

## Note 
I'm aware that the current namespace for this component is less than informative and will be adjusting the package accordingly in time. 
This package was created due to a bug in Sencha Architect

## Licences
* Code for ExtJS package release under MIT

## About
This package was created as I needed a component which fixed precision and was able to use validate that an entry was correct. i.e. the value entered could be broken down into the amount specified. i.e. where
```
  ...
  amount:50,
  isDenomination: true,
  
```
This then runs the validation to check the amount entered can be broken down into that denomination.

See /Src/CurrencyField.js for the full class.

ExtJS Package built by [Richard Styles](https://twitter.com/camerastyles).
