<script setup>
import Navbar from '../components/common/Navbar.vue'
import Sidebar from '../components/common/Sidebar.vue'
import MonthlyExpenseChart from '../components/reports/MonthlyExpenseChart.vue'

import SummaryReport from '../components/reports/SummaryReport.vue'
import IncomeExpenseChart from '../components/reports/IncomeExpenseChart.vue'
</script>

<template>
  <div>
    <Navbar />

    <div class="layout">
      <Sidebar />

      <main class="content">
        <h1>Reports</h1>

          <SummaryReport />

        <IncomeExpenseChart />

        <MonthlyExpenseChart />
      </main>
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
}

.content {
  flex: 1;
  padding: 20px;
}
</style>