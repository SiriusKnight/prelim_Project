import '../App.css'
import Left from './Left';
import Content from './content';
import Right from './right';

function Ext() {
    return (
        <div className='ext'>
            <Left />
            <Content />
            <Right />
        </div>
    )
}
export default Ext;