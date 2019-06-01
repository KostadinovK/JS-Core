function atm(operations){
    let banknotes = [];
    for (const data of operations) {

        if(data.length > 2){
            console.log(insertBanknotes(data));
        }else if(data.length === 2){
            console.log(withdraw(data));
        }else{
            console.log(reportBanknoteCount(data[0]));
        }
    }

    function getSum(banknotes){
        return banknotes.reduce((sum, banknote) => sum += banknote, 0);
    }

    function insertBanknotes(money){
        banknotes.push(...money);
       return `Service Report: ${getSum(money)}$ inserted. Current balance: ${getSum(banknotes)}$.`;
    }

    function withdraw(args){
        let personBalance = args[0];
        let money = args[1];

        if(money > personBalance){
            return `Not enough money in your account. Account balance: ${personBalance}$.`;
        }

        if(money > getSum(banknotes)){
            return `ATM machine is out of order!`;
        }

        banknotes = banknotes.sort((a, b) => b-a);
        let sum = 0;
        for(let i = 0; i < banknotes.length; i++){
            if(sum == money){
                break;
            }

            if(sum + banknotes[i] <= money){
                sum += banknotes[i];
                banknotes.splice(i, 1);
                i--;
            }
        }

        return `You get ${money}$. Account balance: ${personBalance - money}$. Thank you!`;
    }

    function reportBanknoteCount(banknote){
        let count = banknotes.filter(b => b === banknote).length;

        return `Service Report: Banknotes from ${banknote}$: ${count}.`;
    }
}

atm([[20, 5, 100, 20, 1],
    [457, 25],
    [1],
    [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
    [20, 85],
    [5000, 4500],
   ]);