let miniBank = {
    accountBalanceOutput: document.querySelector("#account-balance"),
    accountBalance: 0,
    depositInput: document.querySelector("#deposit-input"),
    depositBtn: document.querySelector("#deposit-btn"),
    withdrawInput: document.querySelector("#withdraw-input"),
    withdrawBtn: document.querySelector("#withdraw-btn"),

    depositing: function() {
        this.depositBtn.addEventListener("click", function depositOrder() {
            miniBank.accountBalance =
                miniBank.accountBalance + parseInt(miniBank.depositInput.value);
            miniBank.updateBalance();
            miniBank.resetingInputs();
        });
    },

    withdrawing: function() {
        this.withdrawBtn.addEventListener("click", function withdrawOrder() {
            miniBank.accountBalance =
                miniBank.accountBalance - parseInt(miniBank.withdrawInput.value);
            miniBank.updateBalance();
            miniBank.resetingInputs();
        });
    },

    resetingInputs: function() {
        this.depositInput.value = Number;
        this.withdrawInput.value = Number;
    },

    updateBalance: function() {
        this.accountBalanceOutput.innerHTML = `${this.accountBalance} $`;
    },
};

miniBank.depositing();
miniBank.withdrawing();