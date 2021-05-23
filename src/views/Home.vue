<template>
  <div class="wrapper container-fluid">
    <!-- top header component -->
    <HeaderComponent />
    <!-- main component with cards here -->
    <mainComponent/>
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent'
import mainComponent from '../components/mainComponent'
import ImageCard from '../components/imageCard'
export default {
  name: 'Home',
  components: {HeaderComponent, mainComponent, ImageCard}
}
</script>
<style scoped>
.wrapper{
  background: #25262C;
  width:100%;
  border:0;
  margin:0;
}
</style>
