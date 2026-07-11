import { defineStore } from 'pinia'

export const useExpenseStore = defineStore('expense', {
  state: () => ({
 transactions: JSON.parse(localStorage.getItem('transactions')) || [],
  editingTransaction: null  
  }),

  getters: {
    totalIncome: (state) =>
      state.transactions
        .filter(transaction => transaction.type === 'income')
        .reduce((sum, transaction) => sum + transaction.amount, 0),

    totalExpense: (state) =>
      state.transactions
        .filter(transaction => transaction.type === 'expense')
        .reduce((sum, transaction) => sum + transaction.amount, 0),

    totalBalance() {
      return this.totalIncome - this.totalExpense
    },

    totalSavings() {
      return this.totalBalance
    }
  },

  actions: {
    addTransaction(transaction) {
      this.transactions.push({
        id: Date.now(),
        ...transaction
      })

      this.saveTransactions()
    },

    deleteTransaction(id) {
      this.transactions = this.transactions.filter(
        transaction => transaction.id !== id
      )

      this.saveTransactions()
    },

    saveTransactions() {
      localStorage.setItem(
        'transactions',
        JSON.stringify(this.transactions)
      )
    },

    editTransaction(transaction) {
  this.editingTransaction = { ...transaction }
},

updateTransaction(updatedTransaction) {
  const index = this.transactions.findIndex(
    transaction => transaction.id === updatedTransaction.id
  )

  if (index !== -1) {
    this.transactions[index] = updatedTransaction
    this.saveTransactions()
  }

  this.editingTransaction = null
}
  }
})