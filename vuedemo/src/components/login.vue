<template>
  <div id="login">
<Form>
  <FormItem label="用户名:">
    <Input type="text" size="large" style="width: 200px" v-model="loginData.username" placeholder="请输入用户名"/>
  </FormItem>
  <FormItem label="密码:">
    <Input type="password" size="large" style="width: 200px" v-model="loginData.password" placeholder="请输入密码"/>
  </FormItem>
  <Button type="primary" @click="doLogin">登陆</Button>

</Form>
  </div>
</template>

<script>

  export default {
    name: 'login',
    data(){
      return{
        loginData:{
          username :'',
          password :''
        }
      }
    },
    methods:{
      doLogin(){
        this.$http.get(this.rootUrl+'/user/login',{params:this.loginData}).then((res)=>{
          if(res.data.code==200){
            console.log(res.data)
          }else {
            console.log(res.data)
          }

          }
        )

      }
    }
  }
</script>



