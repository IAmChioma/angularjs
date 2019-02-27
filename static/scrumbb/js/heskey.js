



// Try edit msg
var msg = 'Hello world'
var icon = ' <i class="fa fa-smile-o"></i>'

//console.log(msg)


      const currencies = [{
        id: 'USD', name: 'US Dollars'
      }, {
        id: 'UGX', name: 'Ugandan Shillings'
      }, {
        id: 'KES', name: 'Kenyan Shillings'
      }, {
        id: 'GHS', name: 'Ghanian Cedi'
      }, {
        id: 'ZAR', name: 'South African Rand'
      }];
      //console.log(currencies);


      const apiBase = 'https://free.currencyconverterapi.com/api/v6/';
      const api = (currency) => `
        ${apiBase}convert?q=${currency}_NGN&compact=ultra
	  `;

      const toast = (msg) => {
        const toastr = document.querySelector('.messages');
        if(!toastr) return;

        toastr.textContent = msg;
        if(!toastr.classList.contains('on')) {
          toastr.classList.add('on');
        }
      };

      const doneToasting = () => {
        const toastr = document.querySelector('.messages');
        if(!toastr) return;

        toastr.textContent = '';
        toastr.classList.remove('on');
      };

      const conversionSucceeded = (apiResponse) => {
        if(!apiResponse) {
          toast(`nothing to display ...`);
          return;
        }

        const [value] = Object.values(apiResponse)

        const btn = document.querySelector('button');
        btn.removeAttribute('disabled');

        const display = document.querySelector('.conversion');
        const formatter = new Intl.NumberFormat(
          'en-NG', { style: 'currency', currency: 'NGN' }
        );

        display.textContent = formatter.format(value);
        doneToasting();
      };

      const populateCurrencies = () =>
      {
     var improvedC = currencies.forEach(function populateCurrencies(currency){
        var option ="";
        var value = "";
        option = currency.id;
        value = currency.name;
        console.log(option,value);
      });
      }
    console.log(populateCurrencies());


    const getSelectedCurrency = () => {

    	var x = document.getElementById("select-text").value;
 		 document.getElementById("display").innerHTML = x;

  };
  console.log(getSelectedCurrency())


  // function BtnFunction(){
	 //document.getElementById("myBtn").addEventListener("click",convert(onclick));
  // }
  // function displayDate() {
 	// 	 document.getElementById("display").innerHTML = Date();
		// 	}

	const convert = (event) => {
    toast(`preparing to convert ...`);

    const btn = event ?
          event.target : document.querySelector('button');

    const selected = getSelectedCurrency();

    if(!selected || selected.trim() === ''
       || !currencies.map(c => c.id).includes(selected)) return;

    btn.setAttribute('disabled', 'disabled');
    toast(`converting ...`);

    const endpoint = api(selected);

    // make a GET fetch call to the endpoint
    // variable declared above, convert the response to JSON,
    // then call conversionSucceeded and pass the JSON data to it

  };
	//console.log(convert(onclick))

	  const startApp = () => {
    populateCurrencies()
 	 document.getElementById("myBtn").addEventListener("click",convert);

    // add a click listener to the button here
  };

  startApp();