import React,{Component} from 'react'

class CommontListItem extends Component {
    render() {
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span>{this.props.item.content}</span>
                </div>
                <p>{this.props.item.username}</p>
            </div>
        )
    }
}

export default CommontListItem