<template>
  <div class="wrapper container-fluid">
    <!-- top header component -->
    <HeaderComponent />
    <!-- main component with cards here -->
    <mainComponent />
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent'
import mainComponent from '../components/mainComponent'

export default {
  name: 'Home',
  components: {HeaderComponent, mainComponent}
}
</script>
<style scoped>
.wrapper{
  width: 100%;
  background: #25262C;
}
</style>
