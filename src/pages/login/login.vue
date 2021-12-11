<template>
    <div class="login">
        <div class="from-wrap">
            <h2>登录</h2>
            <Form ref="loginData" :model="loginData" :rules="ruleValidate" :label-width="80">
                <FormItem label="Account" prop="acct">
                    <Input v-model="loginData.acct" clearable  placeholder="请输入账号"></Input>
                </FormItem>
                <FormItem label="Password" prop="pass">
                    <Input type="password" v-model="loginData.pass" clearable  placeholder="请输入密码"></Input>
                </FormItem>
                <FormItem class="form-footer">
                    <Button  @click="handleSubmit('loginData')">提交</Button>
                    <Button  @click="handleReset('loginData')" style="margin-left: 8px">重置</Button>
                </FormItem>
            </Form>
        </div>
    </div>
</template>

<script>
export default {
    data () {
            return {
                loginData: {
                acct:'',
                pass:''
            },
            ruleValidate: {
                acct: [
                    { required: true, message: '账号不能为空', trigger: 'blur' },
                    { min: 3, max: 16, message: '账号长度3-16个字符', trigger: 'blur' }
                ],
                pass: [
                    { required: true, message: '密码不能为空', trigger: 'blur' },
                    { type: 'string', min: 6, max: 16, message: '密码长度6-16个字符', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        handleSubmit (name) {
            this.$refs[name].validate( async (valid) => {
                if (!valid) return this.$Message.error('账户或密码不符合规范!')
                this.$Spin.show({
                    render: (h) => {
                        return h('div', [
                            h('Icon', {
                                'class': 'demo-spin-icon-load',
                                props: {
                                    type: 'ios-loading',
                                    size: 18
                                }
                            }),
                            h('div', '正在核实身份验证，请稍后')
                        ])
                    }
                })
                await setTimeout(() => {
                    this.$Spin.hide();
                    if (valid && this.loginData.acct === 'tiger' && this.loginData.pass === '123456' ) {
                        this.$Message.success('身份验证成功，已为您跳转主页!')
                        this.$router.push({path:'/home'})
                    } else {
                        this.$Message.error('账户或密码输入错误!')
                    }
                }, 1000)
            })
        },
        handleReset (name) {
            this.$refs[name].resetFields();
        }
    }
}
</script>
<style>
.login {
    width: 100%;
    height: 100%;
    background-color: #1c2438;
    position: absolute;
}
.login .from-wrap {
    position: relative;
    left: 50%;
    margin-left: -200px;
    top: 50%;
    margin-top: -150px;
    width: 400px;
    border-radius: 10px;
    background-color: #fff;
    padding: 20px 30px;
}
    .login h2 {
        text-align: center;
        margin-bottom: 20px;
    }
    .login FormItem {
        margin-bottom: 15px;
    }
    .ivu-form .ivu-form-item-label {
        padding: 10px 7px 10px 0;
    }
    .login .form-footer {
        text-align: right;
    }
    .ivu-form-item-required .ivu-form-item-label:before {
        display: none;
    }
    .demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
</style>