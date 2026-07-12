<script setup>
import Navbar from '../components/common/Navbar.vue'
import Sidebar from '../components/common/Sidebar.vue'

import BalanceCard from '../components/dashboard/BalanceCard.vue'
import IncomeCard from '../components/dashboard/IncomeCard.vue'
import ExpenseCard from '../components/dashboard/ExpenseCard.vue'
import SavingsCard from '../components/dashboard/SavingsCard.vue'
</script>

<template>
  <div class="dashboard-container">
    <Navbar />

    <div class="layout">
      <Sidebar />

      <main class="content">
        <h1 class="page-title">Dashboard</h1>

        <div class="cards">
          <BalanceCard />
          <IncomeCard />
          <ExpenseCard />
          <SavingsCard />
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.dashboard-container {
  min-height: 100vh;
  background: #f4f6f9;
}

.layout {
  display: flex;
  min-height: calc(100vh - 60px);
}

.content {
  flex: 1;
  padding: 30px;
  overflow-x: hidden;
}

.page-title {
  margin-bottom: 25px;
  color: #333;
  font-size: 30px;
  font-weight: 600;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

/* Large Tablet */
@media (max-width: 1200px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Tablet */
@media (max-width: 768px) {
  .layout {
    flex-direction: column;
  }

  .content {
    padding: 20px;
  }

  .page-title {
    font-size: 26px;
    text-align: center;
  }

  .cards {
    grid-template-columns: repeat(2, 1fr);
    gap: 18px;
  }
}

/* Mobile */
@media (max-width: 576px) {
  .content {
    padding: 15px;
  }

  .page-title {
    font-size: 24px;
    margin-bottom: 20px;
  }

  .cards {
    grid-template-columns: 1fr;
    gap: 15px;
  }
}
</style>