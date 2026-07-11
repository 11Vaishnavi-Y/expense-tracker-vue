<script setup>
import Navbar from '../components/common/Navbar.vue'
import Sidebar from '../components/common/Sidebar.vue'
import BalanceCard from '../components/dashboard/BalanceCard.vue'
</script>

<template>
  <div>
    <Navbar />

    <div class="layout">
      <Sidebar />

     <main class="content">
  <h1>Dashboard</h1>

<div class="cards">
  <BalanceCard />
</div>

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
.cards {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}
</style>