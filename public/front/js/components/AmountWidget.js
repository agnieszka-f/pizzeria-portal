import {settings, select} from '../settings.js';
import BaseWidget  from './BaseWidget.js';

class AmountWidget extends BaseWidget{
		constructor(element){ 
			super(element,settings.amountWidget.defaultValue);
			const thisWidget = this;
			
			thisWidget.getElements(element);
			thisWidget.dom.input.value = thisWidget.value;
			//thisWidget.setValue(thisWidget.input.value); 
			thisWidget.initActions();
			
			console.log('thisWidget',thisWidget);
		} 
		getElements(){
			const thisWidget = this;
			//thisWidget.element = element;
			
			thisWidget.dom.input = thisWidget.dom.wrapper.querySelector(select.widgets.amount.input); 
			thisWidget.dom.linkDecrease = thisWidget.dom.wrapper.querySelector(select.widgets.amount.linkDecrease);
			thisWidget.dom.linkIncrease = thisWidget.dom.wrapper.querySelector(select.widgets.amount.linkIncrease);
		}

		isValid(value){
			return !isNaN(value)
				&& value <= settings.amountWidget.defaultMax
				&& value >= settings.amountWidget.defaultMin;
		}
		renderValue(){
			const thisWidget = this;

			thisWidget.dom.input.value = thisWidget.value; 
		}
		initActions(){
			const thisWidget = this;
			
			thisWidget.dom.input.addEventListener('change', function(){
				//thisWidget.setValue(thisWidget.dom.input.value);
				thisWidget.value = thisWidget.dom.input.value;
			});
			thisWidget.dom.linkDecrease.addEventListener('click', function(){

					thisWidget.setValue(thisWidget.value - 1);
			});
			thisWidget.dom.linkIncrease.addEventListener('click', function(){ 
				
					thisWidget.setValue(thisWidget.value + 1);
			});
		}		
	}
	export default AmountWidget;