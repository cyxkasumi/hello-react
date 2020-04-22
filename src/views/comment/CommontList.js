import React,{Component} from 'react'
import CommontListItem from './CommontListItem'

class CommontList extends Component {
    static defaultProps = {
        list: []
    }
    render() {
        return (
            <div>
                {
                    this.props.list.map((item, i)=> <CommontListItem item={item} key={i} />)
                }
            </div>
        )
    }
}

export default CommontList