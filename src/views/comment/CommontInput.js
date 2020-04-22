import React,{Component} from 'react'

class CommontInput extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            content: '',
        }
    }
    bindleUserNameChangeFun(e){
        this.setState({
            username: e.target.value
        })
    }
    bindleContentChangeFun(e){
        this.setState({
            content: e.target.value
        })
    }
    submitFun(){
        if(this.props.onSubmit){
            const { username, content } = this.state
            this.props.onSubmit({ username, content })
        }
        this.setState({
            content: ''
        })
    }
    render() {
        return (
            <div  className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input value={this.state.username} onChange={this.bindleUserNameChangeFun.bind(this)} />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea value={this.state.content} onChange={this.bindleContentChangeFun.bind(this)} />
                    </div>
                </div>
                <button className='comment-field-button' onClick={this.submitFun.bind(this)}>
                    发布
                </button>
            </div>
        )
    }
}

export default CommontInput