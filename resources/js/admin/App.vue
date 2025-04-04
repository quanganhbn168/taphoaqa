<template>
    <v-app>
      <v-layout>
        <!-- Sidebar -->
        <v-navigation-drawer app>
          <v-list>
            <v-list-item link to="/admin/dashboard">Dashboard</v-list-item>
            <v-list-item link to="/admin/products">Products</v-list-item>
            <v-list-item link to="/admin/orders">Orders</v-list-item>
          </v-list>
        </v-navigation-drawer>
  
        <!-- Main Content -->
        <v-main>
          <v-container>
            <router-view></router-view>
          </v-container>
        </v-main>
      </v-layout>
    </v-app>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  </style>
  