Ext.define('Ext.currencyfield.CurrencyField', {
    extend: 'Ext.form.field.Number',
    alias: 'widget.currencyfield',
    config: {
        amount: 0,
        isNote: false,
        isCoin: false,
        isDenomination: false,
        forcePrecision: true
    },
    margin: '5 15',
    width: 115,
    fieldLabel: '£',
    labelWidth: 40,
    fieldStyle: 'text-align:right',
    allowBlank: false,
    allowOnlyWhitespace: false,
    emptyText: '0',
    hideTrigger: true,
    repeatTriggerClick: false,
    selectOnFocus: true,
    keyNavEnabled: false,
    mouseWheelEnabled: false,
    spinDownEnabled: false,
    spinUpEnabled: false,
    allowExponential: false,
    autoStripChars: true,
    decimalSeparator: '.',
    validator: function(value) {
        if (this.isDenomination === true) {
            return (parseInt(parseInt(value * 100) % this.amount) === 0) ? true : "Number must be a multiple of " + Ext.util.Format.currency((this.amount / 100), '£', 2);
        }
        return true;
    },
    valueToRaw: function(value) {
        var me = this,
            decimalSeparator = me.decimalSeparator;
        value = me.parseValue(value);
        value = me.fixPrecision(value);
        value = Ext.isNumber(value) ? value : parseFloat(String(value).replace(decimalSeparator, '.'));
        if (isNaN(value)) {
            value = '';
        } else {
            value = me.forcePrecision ? value.toFixed(me.decimalPrecision) : parseFloat(value);
            value = String(value).replace(".", decimalSeparator);
        }
        return value;
    }
});

