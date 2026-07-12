<template>
  <header class="navbar">
    <h2>Expense Tracker</h2>
  </header>
</template>

<style scoped>
.navbar {
  height: 60px;
  background: #1976d2;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
  box-shadow: 0 2px 8px rgba(0,0,0,.15);
}

h2 {
  margin: 0;
  font-size: 24px;
}

@media (max-width:768px) {
  .navbar {
    padding: 0 18px;
  }

  h2 {
    font-size: 20px;
  }
}

@media (max-width:576px) {
  .navbar {
    justify-content: center;
  }

  h2 {
    font-size: 18px;
  }
}
</style>