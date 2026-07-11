<script setup>
</script>

<template>
  <aside class="sidebar">
  <ul>
  <li>
    <router-link to="/">🏠 Dashboard</router-link>
  </li>

  <li>
    <router-link to="/transactions">💰 Transactions</router-link>
  </li>

  <li>
    <router-link to="/budget">📊 Budget</router-link>
  </li>

  <li>
    <router-link to="/reports">📈 Reports</router-link>
  </li>

  <li>
    <router-link to="/settings">⚙️ Settings</router-link>
  </li>
</ul>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 220px;
  height: calc(100vh - 60px);
  background: #f5f5f5;
  border-right: 1px solid #ddd;
  padding: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 12px 0;
}

a {
  text-decoration: none;
  color: black;
  font-weight: 500;
}

a:hover {
  color: #1976d2;
}

.router-link-active {
  color: #1976d2;
  font-weight: bold;
}
</style>