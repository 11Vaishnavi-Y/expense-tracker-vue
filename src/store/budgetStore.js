import { defineStore } from 'pinia'

export const useBudgetStore = defineStore('budget', {
  state: () => ({
    monthlyBudget: Number(localStorage.getItem('monthlyBudget')) || 0
  }),

  actions: {
    setBudget(amount) {
      this.monthlyBudget = amount

      localStorage.setItem(
        'monthlyBudget',
        amount
      )
    }
  }
})