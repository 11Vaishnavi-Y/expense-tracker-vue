<script setup>
import Navbar from '../components/common/Navbar.vue'
import Sidebar from '../components/common/Sidebar.vue'
import SettingsPanel from '../components/settings/SettingsPanel.vue'
</script>

<template>
  <div>
    <Navbar />

    <div class="layout">
      <Sidebar />

      <main class="content">
      
        <h1>Settings</h1>

        <SettingsPanel />
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