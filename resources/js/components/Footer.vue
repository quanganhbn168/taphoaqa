<template>
  <footer class="bg-dark text-white py-4 mt-auto">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h5><i class="fas fa-store me-2"></i> Laravel Vue Shop</h5>
          <p>© 2023 Bản quyền thuộc về chúng tôi</p>
        </div>
        <div class="col-md-6 text-md-end">
          <h5>Kết nối với chúng tôi</h5>
          <div class="social-icons">
            <a href="#" class="text-white me-2"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="text-white me-2"><i class="fab fa-twitter"></i></a>
            <a href="#" class="text-white"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
footer {
  margin-top: auto;
}
.social-icons {
  font-size: 1.2rem;
}
</style>