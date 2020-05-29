<template>
  <div class="login">
    <div class="login-phone">
      <input-feild
        id="phone"
        placeholder="帳號"
        @onInput="onInput"
      />
    </div>
    <div class="login-password">
      <input-feild
        id="password" 
        placeholder="密碼"
        @onInput="onInput"
      />
    </div>
    <div class="login-sumbit">
        <button 
          type="button" 
          class="btn btn-primary btn-sm"
          @click="sumbit"
          :disabled="disabledButton"
        >
          送出
        </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import InputFeild from '../../components/inputFeild.vue';
import { Login } from '../../model';

@Component({
  components:{
    InputFeild
  }
})
export default class LoginView extends Vue {
    
    private readyToLoginData: Login = new LoginInput();

    get disabledButton(){
      const inputTagEmpty: boolean = this.readyToLoginData.phone === '' || this.readyToLoginData.password === '';
      return inputTagEmpty;
    }

    private onInput(value: Login){
      const inputkeys = Object.keys(value)[0];

      this.readyToLoginData[inputkeys] = value[inputkeys];
    }

    private sumbit(){
      this.$store.dispatch('login', this.readyToLoginData);
    }
}

export class LoginInput implements Login{
  phone?: string;
  password?: string;

  constructor(value: Login = {}){
    this.phone = value.phone || '';
    this.password = value.password || '';
  }
}
</script>

<style scoped>
.login{
  height:1px;
  flex-grow: 1;
  flex-basis: 1;
}
.login-phone{
  width:fit-content;
  margin:10px auto;
}
.login-password{
  width:fit-content;
  margin:10px auto;
}
.login-sumbit{
  width:fit-content;
  margin:20px auto;
}
</style>
