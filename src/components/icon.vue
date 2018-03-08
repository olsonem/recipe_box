<template>
  <div id="app">
    <font-awesome-icon :icon="icon" />
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import faEye from '@fortawesome/fontawesome-free-solid/faEye'

export default {
  name: 'FAEye',

  computed: {
    icon () {
      return faEye
    }
  },

  components: {
    FontAwesomeIcon
  }
}
</script>