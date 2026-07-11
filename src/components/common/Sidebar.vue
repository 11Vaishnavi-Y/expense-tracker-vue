<template>
  <aside class="sidebar">
    <ul>
      <li>🏠 Dashboard</li>
      <li>💰 Transactions</li>
      <li>📊 Budget</li>
      <li>📈 Reports</li>
      <li>⚙️ Settings</li>
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
  cursor: pointer;
  font-weight: 500;
}

li:hover {
  color: #1976d2;
}
</style>