<script setup>
import Navbar from '../components/common/Navbar.vue'
import Sidebar from '../components/common/Sidebar.vue'
import SettingsPanel from '../components/settings/SettingsPanel.vue'
</script>

<template>
  <div class="settings-page">
    <Navbar />

    <div class="layout">
      <Sidebar />

      <main class="content">
        <h1 class="page-title">Settings</h1>

        <div class="settings-card">
          <SettingsPanel />
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.settings-page {
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

.settings-card {
  max-width: 700px;
  background: white;
  padding: 25px;
  border-radius: 14px;
  box-shadow: 0 6px 18px rgba(0,0,0,.08);
}

@media (max-width:768px){

.layout{
flex-direction:column;
}

.content{
padding:20px;
}

.settings-card{
max-width:100%;
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

.settings-card{
padding:18px;
}

}
</style>