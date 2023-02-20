import "./styles.css"



const Menu =({isOpen}) =>{
    console.log(isOpen)
    return(
        <div 
        className="menu-container"
        style={{
            transform: isOpen ? "translateY(0)":"translateY(100%) "
        }}>
            
        
        </div>
        
    )

    
}

export default Menu;