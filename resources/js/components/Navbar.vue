<template>
  <UHeader>
    <template #logo>
      <UIcon name="i-heroicons-shopping-cart" class="w-6 h-6" />
      <span class="ml-2 font-bold">Laravel Vue Shop</span>
    </template>

    <template #right>
      <UColorModeButton />
      
      <UNavigationMenu>
        <UNavigationMenuList>
          <UNavigationMenuItem to="/" exact>
            Trang chủ
          </UNavigationMenuItem>
          <UNavigationMenuItem to="/products">
            Sản phẩm
          </UNavigationMenuItem>
          <UNavigationMenuItem to="/admin" v-if="isAdmin">
            Admin
          </UNavigationMenuItem>
        </UNavigationMenuList>
      </UNavigationMenu>

      <UButton
        icon="i-heroicons-user"
        color="gray"
        variant="ghost"
        @click="toggleAuth"
      />
    </template>
  </UHeader>
</template>

<script setup>
const isAdmin = computed(() => /* logic check admin */ false)

function toggleAuth() {
  // Xử lý đăng nhập/đăng xuất
}
</script>