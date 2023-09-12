<template>
  <div class="home">
      <div class="d-flex align-items-center justify-content-center" style="min-height: 80vh;">
        <NewRequestCard />
    </div> 
  </div>

</template>

<script>
// @ is an alias to /src
import NewRequestCard from '@/components/NewRequestCard.vue'

export default {
  name: 'HomeView',
  components: {
    NewRequestCard
  }
}
</script>
