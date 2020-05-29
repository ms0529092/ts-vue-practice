<template>
  <div class="sign">
    <div class="sign-phone">
      <input-feild
        id="phone"
        placeholder="請輸入手機號碼"
        @onInput="onInput"
      />
    </div>
    <div class="sign-password">
      <input-feild
        id="password" 
        placeholder="請輸入密碼"
        @onInput="onInput"
      />
    </div>
    <div class="sign-password-repeat">
      <input-feild
        id="passwordRepeat" 
        placeholder="請再一次輸入密碼"
        @onInput="onInput"
      />
    </div>
    <div class="sign-username">
      <input-feild
        id="username" 
        placeholder="請輸入使用者名稱"
        @onInput="onInput"
      />
    </div>
    <div class="sign-sumbit">
        <button 
          type="button" 
          class="btn btn-primary btn-sm"
          :disabled="disabledButton"
          @click="sumbit"
        >
          送出
        </button>
        <button 
          type="button" 
          class="btn btn-primary btn-sm"
          @click="cancel"
        >
          取消
        </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import InputFeild from '../../components/inputFeild.vue';
import { Sign } from '../../model';

@Component({
  components:{
    InputFeild
  }
})
export default class SignView extends Vue {

  private readyToSignData: Sign = new SignInput();

  get disabledButton(){
    const inputTagEmpty = this.readyToSignData.phone === '' || 
                          this.readyToSignData.password === '' ||
                          this.readyToSignData.passwordRepeat ==='' ||
                          this.readyToSignData.username === ''; 

      return inputTagEmpty
    }

  private onInput(value: Sign ){
    const inputkeys = Object.keys(value)[0];

    this.readyToSignData[inputkeys] = value[inputkeys];
  }

  private sumbit(){
    if(this.readyToSignData.password === this.readyToSignData.passwordRepeat){
      this.$store.dispatch('sign', this.readyToSignData);
      return
    }

    alert('密碼比對錯誤');
  }

  private cancel(){
    this.$router.push({ path:'/login' });
  }

}


export class SignInput implements Sign {
    phone?: string;
    password?: string;
    passwordRepeat?: string;
    username?: string;

    constructor(value: Sign = {}){
      this.phone = value.phone || '';
      this.password = value.password || '';
      this.passwordRepeat = value.passwordRepeat || '';
      this.username = value.username || '';
    }
}
</script>

<style scoped>
.sign{
  height: 1px;
  flex-grow: 1;
  flex-basis: 1;
}
.sign-phone{
  width:fit-content;
  margin:10px auto;
}
.sign-password{
  width:fit-content;
  margin:10px auto;
}
.sign-password-repeat{
  width:fit-content;
  margin:10px auto;
}
.sign-username{
  width:fit-content;
  margin:10px auto;
}
.sign-sumbit{
  width:fit-content;
  margin:20px auto;
}
</style>
