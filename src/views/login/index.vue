<template>
  <main class="container h-screen mx-auto">
    <div class="w-1/2 m-auto pt-8">
      <a-form
        layout="inline"
        :model="formState"
        @finish="handleFinish"
        @finishFailed="handleFinishFailed"
      >
        <a-form-item>
          <a-input v-model:value="formState.user" placeholder="Username">
            <!-- <template #prefix><UserOutlined style="color: rgba(0, 0, 0, 0.25)" /></template> -->
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input v-model:value="formState.password" type="password" placeholder="Password">
            <!-- <template #prefix><LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template> -->
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button
            type="primary"
            html-type="submit"
            :disabled="formState.user === '' || formState.password === ''"
          >
            Log in
          </a-button>
        </a-form-item>
      </a-form>
    </div>

  </main>
</template>
<script>
// import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { reactive, toRaw, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { getToken, setToken } from '../../utils/auth';
import storage from '../../utils/storage';
import { roleMap } from '../../config/const';
import API from '../../api/index';

export default {
  components: {
    // UserOutlined,
    // LockOutlined,
  },
  setup(props, context) {
    const store = useStore();
    const router = useRouter();
    const formState = reactive({
      user: '',
      password: '',
      userType: 'Mall',
    });
    const handleFinish = (values) => {
      setToken(toRaw(formState).userType);
      // API.addUser().then(res => {
      //   console.log(res)
      // })
      router.push({
        name: 'Home',
      });
    };
    const handleFinishFailed = (errors) => {
      console.log(errors, 'error');
    };
    return {
      roleMap,
      formState,
      handleFinish,
      handleFinishFailed,
    };
  },
};
</script>
