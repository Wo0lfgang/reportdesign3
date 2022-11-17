import { Card, Button, Checkbox, Form, Input, message } from 'antd';
import { useNavigate } from "react-router-dom";
// 导入样式文件
import './index.scss'
// 引入mobx
import { useStore } from "@/store";

const Login = () => {
    const { loginStore } = useStore()
    const navigate = useNavigate()
    const onFinish = async values => {
        console.log('Success:', values);
        // values：放置的是所有表单项中用户输入的内容
        // todo：登录
        const { account, password } = values
        console.log('login account',account);
        console.log('login password',password)
        try {
            await loginStore.getToken({ account, password })
            navigate('/', { replace: true })
            message.success('登录成功！');
        } catch (err) {
            message.error('登录失败！');
        }
    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className='login'>
            <Card className='login-container'>
                <div className='login-title'>
                    报告设计器后台管理系统
                </div>
                {/* 登录表单 */}
                <Form
                    name="basic"
                    labelCol={{
                        span: 5,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="账号"
                        name="account"
                        rules={[
                            {
                                required: true,
                                message: '账号不能为空!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '密码不能为空!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 5,
                            span: 16,
                        }}
                    >
                        <Checkbox>记住密码</Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 10,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}
export default Login;