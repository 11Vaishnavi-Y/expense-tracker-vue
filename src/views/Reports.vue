<script setup>
import Navbar from '../components/common/Navbar.vue'
import Sidebar from '../components/common/Sidebar.vue'

import SummaryReport from '../components/reports/SummaryReport.vue'
import IncomeExpenseChart from '../components/reports/IncomeExpenseChart.vue'
import MonthlyExpenseChart from '../components/reports/MonthlyExpenseChart.vue'
</script>

<template>
  <div class="reports-page">
    <Navbar />

    <div class="layout">
      <Sidebar />

      <main class="content">
        <h1 class="page-title">Reports</h1>

        <div class="reports-container">
          <SummaryReport />

          <div class="chart-card">
            <IncomeExpenseChart />
          </div>

          <div class="chart-card">
            <MonthlyExpenseChart />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.reports-page {
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
}

.page-title {
  margin-bottom: 25px;
  color: #333;
}

.reports-container {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.chart-card {
  background: white;
  padding: 25px;
  border-radius: 14px;
  box-shadow: 0 6px 18px rgba(0,0,0,.08);
  transition: .3s;
}

.chart-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0,0,0,.12);
}

@media (max-width:768px){

.layout{
flex-direction:column;
}

.content{
padding:20px;
}

}

@media (max-width:576px){

.content{
padding:15px;
}

.page-title{
text-align:center;
font-size:28px;
}

.chart-card{
padding:18px;
}

}
</style>