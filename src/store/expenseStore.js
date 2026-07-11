import { defineStore } from 'pinia'

export const useExpenseStore = defineStore('expense', {
  state: () => ({
    transactions: []
  }),

  getters: {
    totalIncome: (state) =>
      state.transactions
        .filter(transaction => transaction.type === 'income')
        .reduce((total, transaction) => total + transaction.amount, 0),

    totalExpense: (state) =>
      state.transactions
        .filter(transaction => transaction.type === 'expense')
        .reduce((total, transaction) => total + transaction.amount, 0),

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
    },

    deleteTransaction(id) {
      this.transactions = this.transactions.filter(
        transaction => transaction.id !== id
      )
    }
  }
})