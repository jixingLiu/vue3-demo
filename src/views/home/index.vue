<template>
  <div class="text-center">
    Mall Home
    <a-button size="small" shape="round" @click="handleLoginout">Login Out</a-button>
  </div>
</template>
<script>
import { useRouter } from 'vue-router'
import { removeToken } from '../../utils/auth'
export default {
  setup() {
    console.log(import.meta.env, 999)
    const router = useRouter()
    const handleLoginout = function() {
      removeToken()
      router.push({
        name: 'Login'
      })
    }
    return {
      handleLoginout
    }
  },
}
</script>
