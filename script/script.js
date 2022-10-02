class Minibank {
    constructor() {
        this.accountBalanceOutput = document.querySelector("#account-balance");
        this.depositBtn = document.querySelector("#bank-deposit-btn");
        this.withdrawBtn = document.querySelector("#bank-withdraw-btn");
        this.userNameInput = document.querySelector("#username-input");
        this.userNameBtn = document.querySelector("#username-btn");
        this.welcomeText = document.querySelector("#welcome-text");
        this.inputBtnGroup = document.querySelector(".to-bank");
        this.bankInterface = document.querySelector(".bank-interface");
        this.exitBtn = document.querySelector("#bank-exit-btn");
        this.actionMenu = document.querySelector("#action-menu");
        this.actionInputBtn = document.querySelector("#action-input-btn");
        this.actionInput = document.querySelector("#action-input");
        this.transactionsList = document.querySelector(".transaction-list");

        this.accountBalance = 0;
        this.userNameBtn.addEventListener("click", this.login);
        this.exitBtn.addEventListener("click", this.exitBank);
        this.depositBtn.addEventListener("click", this.openActionMenuDeposit);
        this.withdrawBtn.addEventListener("click", this.openActionMenuWithdraw);
        this.actionInputBtn.addEventListener("click", this.depositing);
        this.actionInputBtn.addEventListener("click", this.withdrawing);
        this.actionInput.innerHTML =
            this.actionInput.value.toLocaleString("en-US");
    }

    login = () => {
        let userNameInputType = typeof this.userNameInput.value;

        if (
            isNaN(Number(this.userNameInput.value)) &&
            this.userNameInput.value != ""
        ) {
            this.inputBtnGroup.style.display = "none";
            this.welcomeText.innerHTML = `Hi ${this.userNameInput.value}.. `;
            this.bankInterface.style.display = "block";
            this.userNameInput.value = "";
        } else {
            alert("Please enter a valid name!");
        }
    };

    exitBank = () => {
        this.welcomeText.innerHTML = "Welcome to the mini-bank";
        this.bankInterface.style.display = "none";
        this.inputBtnGroup.style.display = "flex";
        this.accountBalance = 0;
        this.updateBalance();
        this.actionMenu.style.display = "none";
    };

    openActionMenuDeposit = () => {
        this.depositBtn.style.background = "black";
        this.depositBtn.style.color = "white";
        this.actionMenu.style.display = "flex";
        this.depositBtn.value = "YES";
        this.withdrawBtn.value = "NO";
        this.withdrawBtn.style.background = "unset";
        this.withdrawBtn.style.color = "black";
    };

    openActionMenuWithdraw = () => {
        this.withdrawBtn.style.background = "black";
        this.withdrawBtn.style.color = "white";
        this.actionMenu.style.display = "flex";
        this.withdrawBtn.value = "YES";
        this.depositBtn.value = "NO";
        this.depositBtn.style.background = "unset";
        this.depositBtn.style.color = "black";
    };

    depositing = () => {
        if (this.depositBtn.value == "YES" && this.withdrawBtn.value == "NO") {
            if (this.actionInput.value <= 1) {
                alert("Please enter a valid amount!");
                this.resetingInputs();
            } else {
                this.accountBalance =
                    this.accountBalance + parseInt(this.actionInput.value);
                this.transactions("Deposit", parseInt(this.actionInput.value));
                this.updateBalance();
                this.resetingInputs();
            }
        }
    };

    withdrawing = () => {
        if (this.withdrawBtn.value == "YES" && this.depositBtn.value == "NO") {
            if (this.accountBalance < this.actionInput.value) {
                alert(`Sorry, you don't have enough money.`);
                this.resetingInputs();
            } else {
                if (this.actionInput.value <= 1) {
                    alert("Please enter a valid amount!");
                    this.resetingInputs();
                } else {
                    this.accountBalance =
                        this.accountBalance - parseInt(this.actionInput.value);
                    this.transactions(
                        "Withdraw",
                        parseInt(this.actionInput.value)
                    );
                    this.updateBalance();
                    this.resetingInputs();
                }
            }
        }
    };

    transactions = (action, amount) => {
        this.transactionsList.innerHTML += `<li> ${action} : ${amount} € </li>`;
    };

    updateBalance = () => {
        this.accountBalanceOutput.innerHTML = `${this.accountBalance.toLocaleString(
            "en-US"
        )}€ `;
    };

    resetingInputs = () => {
        this.actionInput.value = Number;
    };
}

let theMiniBank = new Minibank();
