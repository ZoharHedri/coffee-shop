// JavaScript source code


/*
Open the folder in vs code and look at main.js.
This is the start of our coffee shop program.
To finish it, complete the makeDrink method so that it:
 1) Only allows you make a drink if it's a drink in the drinkRequirements object.
    Otherwise alert: "Sorry, we don't make DRINKNAME".
 2) If the drink is part of the drinkRequirements object,
    reduce the amount of beans by the number of beans required for that drink.
 3) If there are not enough beans to make that drink, alert: "Sorry, we're all out of beans!".
*/
var coffeeShop = {
    beans: 40,
    drinkRequirements: {
        latte: 10,
        americano: 5,
        doubleShot: 15,
        frenchPress: 12
    },
    makeDrink: function (drinkType) {
        // TODO: Finish this method
        var tempBeans = this.beans;
        var arr = Object.keys(this.drinkRequirements); //arr get the 4 coffee name/field in drinkRequirements

        for (var i = 0; i < arr.length; i++)
        {
            if ((drinkType === arr[i]) && (tempBeans -= this.drinkRequirements[arr[i]] >= 0))
            {
                 this.beans -= this.drinkRequirements[arr[i]];
                 alert("Enjoy from you'r " + arr[i])

                 console.log(this.drinkRequirements[arr[i]]); //gives the AMOUNT of BEANS of a drink coffee
                 console.log(arr[i]);                         //gives the NAME fo the coffee drink (latte,americano...etc)
                 console.log(this.beans);                     //gives the AMOUNT of BEANS after the reduce

                 return;
            }
            else
            {
                alert("Sorry, we're all out of beans!");
                return;
            }

                
            

        }//for

        alert("Sorry, we don't make " + drinkType);

    }//makeDrink func

} //coffeeShop objedt

coffeeShop.makeDrink("latte");       //in
coffeeShop.makeDrink("americano");   //in
coffeeShop.makeDrink("filtered");    //out
coffeeShop.makeDrink("doubleShot");  //in
coffeeShop.makeDrink("frenchPress"); //in
