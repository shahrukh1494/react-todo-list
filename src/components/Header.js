import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation()

    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && 
              <Button color={showAdd ? 'red' : 'green'} 
              text={showAdd ? 'Close' : 'Add'} 
              click={onAdd} />
            }
        </header>
    );
}

//default Props
Header.defaultProps = {
    title: 'Todo App',
}

export default Header;