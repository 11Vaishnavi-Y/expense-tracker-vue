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
  width: 230px;
  min-height: calc(100vh - 60px);
  background: #f8f9fa;
  border-right: 1px solid #ddd;
  padding: 20px;
  transition: all .3s ease;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 10px;
}

a {
  display: block;
  padding: 12px 16px;
  text-decoration: none;
  color: #333;
  font-weight: 500;
  border-radius: 8px;
  transition: all .3s ease;
}

a:hover {
  background: #1976d2;
  color: white;
  transform: translateX(6px);
}

.router-link-active {
  background: #1976d2;
  color: white;
  font-weight: 600;
}

@media (max-width: 768px) {
  .sidebar {
    width: 170px;
    padding: 15px;
  }

  a {
    font-size: 14px;
    padding: 10px;
  }
}

@media (max-width: 576px) {
  .sidebar {
    width: 100%;
    min-height: auto;
    border-right: none;
    border-bottom: 1px solid #ddd;
    padding: 10px;
  }

  ul {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 8px;
  }

  li {
    margin: 0;
  }

  a {
    padding: 8px 10px;
    font-size: 13px;
  }
}
</style>