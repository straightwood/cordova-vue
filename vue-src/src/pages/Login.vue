<template>
  <div id="app">
    <canvas id="root" width="375" height="812"></canvas>
    <!-- <remote-script src="../../static/canvas.js"></remote-script> -->
    
    <mu-card class="login_card" style="max-width: 375px; margin: 0 auto;">
      <mu-form ref="form" :model="validateForm" class="mu-demo-form">
        <img src="../assets/weather.png" style="margin:2vh 0;height:15vh"/>
        <mu-form-item color="white" prop="username" :rules="usernameRules">
          <mu-text-field underline-color='white' 
                        v-model="validateForm.username" 
                        prop="username"  
                        placeholder="请输入用户名"
          >
          </mu-text-field>
        </mu-form-item>
        <mu-form-item prop="password" :rules="passwordRules">
            <!-- <mu-text-field underline-color='white' type="password" v-model="validateForm.password" prop="password"></mu-text-field> -->
          <mu-text-field underline-color='white' 
                        v-model="validateForm.password"
                        placeholder="请输入密码"
                        prop="password"
                        :action-icon="visibility ? 'visibility_off' : 'visibility'" 
                        :action-click="() => (visibility = !visibility)" 
                        :type="visibility ? 'text' : 'password'"
          >
          </mu-text-field><br/>
        </mu-form-item>
        <span @click="forget" style="font-size:8px;position:absolute;right:10vw;">忘记密码？</span>
        <mu-form-item style="margin-top:26px">
          <mu-button color="#009688" @click="submit">登录</mu-button>
          <mu-button @click="clear">重置</mu-button>
        </mu-form-item>
      </mu-form>
    </mu-card>
    <!-- 提示框 -->
    <mu-snackbar :color="color.color" :open.sync="color.open">
      <!-- <mu-icon left :value="icon"></mu-icon> -->
      {{color.message}}
      <mu-button flat slot="action" color="#fff" @click="color.open = false">关闭</mu-button>
    </mu-snackbar>
    <!-- 忘记密码 -->
    <mu-dialog title="修改密码" width="600" max-width="80%" :esc-press-close="false" :overlay-close="false" :open.sync="openAlert">
      <p>需要验证帐号以及昵称</p><br>
      <mu-text-field underline-color='#009688' 
        v-model="fo_username" 
        placeholder="请输入用户名"
      ></mu-text-field>
      <mu-text-field underline-color='#009688' 
        v-model="fo_nickname" 
        placeholder="请输入昵称"
      ></mu-text-field>
      <mu-text-field underline-color='#009688' 
        v-model="fo_password"
          placeholder="请输入您的新密码"
          prop="fo_password"
      ></mu-text-field>
      <mu-button slot="actions" flat color="#009688" @click="closeAlertDialog">取消</mu-button>
      <mu-button slot="actions" flat color="#009688" @click="saveNewPassword">确定</mu-button>
    </mu-dialog>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      usernameRules: [
        { validate: (val) => !!val, message: '必须填写用户名'},
        { validate: (val) => val.length >= 3, message: '用户名长度大于3'}
      ],
      passwordRules: [
        { validate: (val) => !!val, message: '必须填写密码'},
        { validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
      ],
      validateForm: {
        username: '',
        password: '',
      },
      visibility: false,
      color: {
        color: 'error',
        message: '帐号或密码错误，请重试！',
        open: false,
        timeout: 3000
      },
      openAlert: false,
      fo_username:'',
      fo_nickname:'',
      fo_password:'',
    }
  },
  mounted() {
    this.test()
    this.autoLogin();
  },
  methods: {
    submit () {
      this.$refs.form.validate().then((result) => {
        if(result) {
          console.log('form valid: ', result)
          this.$axios({
            method:'get',
            url: '/apiLogin/login',
            // url:'http://47.114.46.42:3001/login',
          }).then((response) => {
            response = response.data[0];
            // console.log('登录请求返回结果',response)
            if((this.validateForm.username === response.username)
              && (this.validateForm.password === response.password)){
                this.$router.push('./map');
            }else{
              if (this.color.timer) clearTimeout(this.color.timer);
              this.color.open = true;
              this.color.timer = setTimeout(() => {
                this.color.open = false;
              }, this.color.timeout);
            }
          }).catch((error) => {
            console.log(error)
          });
        }
      });
    },
    clear () {
      this.$refs.form.clear();
      this.validateForm = {
        username: '',
        password: '',
        isAgree: false
      };
    },
    forget() {
      this.openAlert = true;
    },
    closeAlertDialog () {
      this.openAlert = false;
    },
    saveNewPassword(){
      // this.$axios.get('http://47.114.46.42:3001/modifypassword',{
      this.$axios.get('/apiLogin/modifypassword',{
        params: {
          username: this.fo_username,
          nickname: this.fo_nickname,
          password: this.fo_password,
        },
      })
      .then((response) => {
        response = response.data[0];
        console.log('密码修改返回结果',response)
        this.openAlert = false;
      }).catch((error) => {
        console.log(error)
      });
    },
    autoLogin() {
      this.$axios({
        method:'get',
        url: '/apiLogin/login',
        // url:'http://47.114.46.42:3001/login',
      }).then((response) => {
        response = response.data[0];
        // console.log('登录请求返回结果',response)
        if((response.username === window.localStorage.getItem('username'))
          && (response.password === window.localStorage.getItem('password'))){
            console.log('localstorage',window.localStorage.getItem('username'))
            this.$router.push('./map');
        }
      }).catch((error) => {
        console.log(error)
      });
    },
    //背景canvas
    test() {
      function CanvasAnimate(Dom,options){
          options = options || {}
          this.Element = Dom
          this.cvs = Dom.getContext("2d")
          this.off_cvs = document.createElement("canvas")
          this.off_cvs.width = Dom.width
          this.off_cvs.height = Dom.height
          this.Dom = this.off_cvs.getContext("2d")
          this.width = Dom.width
          this.height = Dom.height
          this.length = options.length || 100
          this.RoundColor = options.RoundColor || "#ffffffca" 
          this.RoundDiameter = options.RoundDiameter || 2
          this.LineColor = options.LineColor || "#ffffffa4"
          this.LineWeight = options.LineWeight || 1
          this.clicked = options.clicked || true
          this.moveon = options.moveon || true
          this.list = []
          this.paused = true
      }
      CanvasAnimate.prototype.Run = function(){
          if( this.clicked ){
              this.Element.addEventListener( "click",this.Clicked.bind(this) )
          }
          if( this.moveon ){
              this.Element.addEventListener( "mousemove",this.moveXY.bind(this) )
              this.Element.addEventListener( "mouseout",this.moveoutXY.bind(this) )
          }
          this.Draw( this.getLength() )
      }
      CanvasAnimate.prototype.getLength=function(){
          let arr = []
          for(let i=0;i< this.length ;i++){
              let obj = {}
                  obj.x = parseInt( Math.random() * this.width )
                  obj.y = parseInt( Math.random() * this.height )
                  obj.r = parseInt( Math.random()*10 )
                  obj.controlX = parseInt( Math.random()*10 ) > 5 ? "left":"right"
                  obj.controlY = parseInt( Math.random()*10 ) > 5 ? "bottom":"top"
              arr.push(obj)
          }
          return arr
      }
      CanvasAnimate.prototype.Draw = function(list){
          let new_arr = []
          let line_arr = []

          list.map((item,index)=>{
              let xy = this.ControlXY(item)
              let obj = this.ControlRound(xy)
              new_arr.push( obj )
          });
          
          new_arr.map((item1,index1)=>{
              new_arr.map((item2,index2)=>{
                  if(item1 !== item2){
                      let x = item1.x - item2.x
                      let y = item1.y - item2.y
                      if( Math.abs(x)< 100 && Math.abs(y)<100 ){
                          let obj = {
                              x1:item1.x,
                              y1:item1.y,
                              x2:item2.x,
                              y2:item2.y,
                          }
                          line_arr.push(obj)
                      }
                  }
              })
          })

          this.drawLine(line_arr)
          
          new_arr.map((item)=>{
              this.drawRound(item)
          })

          this.list = new_arr

          this.cvs.drawImage(this.off_cvs,0,0,this.width,this.height)
          
          setTimeout(()=>{
              if(this.paused){
                  this.next()
              }
          },50)
      }
      CanvasAnimate.prototype.next = function(){
          this.cvs.clearRect( 0,0,this.width,this.height )
          this.Dom.clearRect( 0,0,this.width,this.height )
          this.Draw( this.list )
      }
      CanvasAnimate.prototype.drawRound = function(obj){
          let {x,y,r} = obj
          this.Dom.beginPath()
          this.Dom.arc( x,y,r, 0, 2*Math.PI )
          this.Dom.fillStyle = this.RoundColor
          this.Dom.fill()
          this.Dom.closePath()
      }
      CanvasAnimate.prototype.drawLine = function(list){
          list.map( (item)=>{
              this.Dom.beginPath()
              this.Dom.moveTo( item.x1,item.y1 )
              this.Dom.lineTo( item.x2,item.y2 )
              this.Dom.lineWidth = this.LineWeight
              this.Dom.strokeStyle = this.LineColor
              this.Dom.stroke()
              this.Dom.closePath()
          })
      }
      CanvasAnimate.prototype.ControlXY = function(obj){
          if(obj.x >= (this.width - obj.r) ){
              obj.controlX = 'left'
          }else if( obj.x <= parseInt(obj.r/2)  ){
              obj.controlX = "right"
          }

          if( obj.y >= (this.height - obj.r) ){
              obj.controlY = "bottom"
          }else if( obj.y <= parseInt(obj.r/2) ){
              obj.controlY = "top"
          }
          return obj
      }
      CanvasAnimate.prototype.ControlRound = function(obj){
          switch(obj.controlX){
              case "right":
                  obj.x++;
                  break;
              case "left":
                  obj.x--;
                  break;
          }
          switch(obj.controlY){
              case "top":
                  obj.y++;
                  break;
              case "bottom":
                  obj.y--;
                  break;
          }
          return obj
      }
      CanvasAnimate.prototype.Clicked = function(event){
          let obj = {}
              obj.x = event.clientX
              obj.y = event.clientY
              obj.r = parseInt( Math.random()*10 )
              obj.controlX = parseInt( Math.random()*10 ) > 5 ? 'left' :'right'
              obj.controlY = parseInt( Math.random()*10 ) > 5 ? 'bottom' :'top'
          this.list.push(obj)
      }
      CanvasAnimate.prototype.moveXY = function(event){
          let obj = {}
              obj.x = event.clientX
              obj.y = event.clientY
              obj.r = 0
              obj.move = true
          if( this.list[0]["move"] ){
              this.list[0]["x"] = obj.x
              this.list[0]["y"] = obj.y
              this.list[0]["r"] = 1
          }else{
              this.list.unshift(obj)
          }
      }
      CanvasAnimate.prototype.moveoutXY = function(event){
          this.list.shift()
      }
      CanvasAnimate.prototype.pause = function(){
          this.paused = !this.paused
          if( this.paused){
              this.Draw(this.list)
          }
      }
      var root = document.querySelector("#root")
      console.log(root)
      var a = new CanvasAnimate(root,{length:50,clicked:true,moveon:true})
      a.Run()
    }
    
  }
}
</script>

<style lang="less" scoped>
#app {
  background-color: #b2dfdb;
  height: 100vh;

  #canvas {
    z-index: 0;
  }
  .login_card {
    position: fixed;
    top:25vh;
    left: 10vw;
    padding: 0 10vw;
    width: 80vw;
    height: 350px;
    z-index: 100;
    background-color:rgba(255, 255, 255, 0.63);

    /deep/.mu-demo-form {
      width: 100%;
      max-width: 460px;

      .mu-form-item {
        margin: 0;
        .mu-text-field-input {
          border:none;
          background: none;
        }
        .mu-input-action-icon {
          color:#009688;
        }
      }
      // .mu-form-item-label {
      //   font-size: 16px;
      // }
    }
  }
}
</style>