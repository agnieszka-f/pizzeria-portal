import {select} from '../settings.js';
import AmountWidget from './AmountWidget.js';

class CartProduct{
		//menuProduct - referencja do obiektu podsumowania, referencja do utworzonego dla tego produktu elementu html - generatedDOM
		constructor(menuProduct, element){
			const thisCartProduct = this;
			
			thisCartProduct.id = menuProduct.id;
			thisCartProduct.name = menuProduct.name;
			thisCartProduct.amount = menuProduct.amount;
			thisCartProduct.price = menuProduct.price;
			thisCartProduct.priceSingle = menuProduct.priceSingle;
			thisCartProduct.params = menuProduct.params;
			
			thisCartProduct.getElements(element);
			thisCartProduct.initAmountWidget();
			thisCartProduct.initAction();
			
			console.log('new CartProduct: ',thisCartProduct);
		}
		getElements(element){
			const thisCartProduct = this;
			
			thisCartProduct.dom = {};
			
			thisCartProduct.dom.wrapper = element;
			thisCartProduct.dom.amount = thisCartProduct.dom.wrapper.querySelector(select.cartProduct.amountWidget);
			thisCartProduct.dom.price = thisCartProduct.dom.wrapper.querySelector(select.cartProduct.price);
			thisCartProduct.dom.edit = thisCartProduct.dom.wrapper.querySelector(select.cartProduct.edit);
			thisCartProduct.dom.remove = thisCartProduct.dom.wrapper.querySelector(select.cartProduct.remove);
		}
		initAmountWidget(){
			const thisCartProduct = this;

			thisCartProduct.amountWidget = new AmountWidget(thisCartProduct.dom.amount);
			
			thisCartProduct.dom.amount.addEventListener('updated', function(){

				thisCartProduct.amount = thisCartProduct.amountWidget.value;
				thisCartProduct.price = thisCartProduct.amount * thisCartProduct.priceSingle;
				thisCartProduct.dom.price.innerHTML = thisCartProduct.price;
			});
		}
		remove(){ 
			const thisCartProduct = this;
			
			const event = new CustomEvent('removed', {
				bubbles: true,
				detail: {
					cartProduct: thisCartProduct,
				},
			}); 
			thisCartProduct.dom.wrapper.dispatchEvent(event);
		}
		initAction(){
			const thisCartProduct = this;
			
			thisCartProduct.dom.edit.addEventListener('click',function(event){
				event.preventDefault();
			});
			thisCartProduct.dom.remove.addEventListener('click',function(event){
				event.preventDefault();
				thisCartProduct.remove();
			});
		}
		getData(){
			const thisCartProduct = this;
			const dataCartProduct = {
				id: thisCartProduct.id, 
				amount: thisCartProduct.amount, 
				price: thisCartProduct.price, 
				priceSingle: thisCartProduct.priceSingle, 
				name: thisCartProduct.name,
				params: thisCartProduct.params,
			}; 
			return dataCartProduct;
		}
	}
	export default CartProduct;