import React from 'react'
import {Icon} from 'antd';


function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem',
            color:'#3C8AF3'
        }}>
           <p> powered by Alexis Loza  <Icon type="smile" /> Web developer </p>
            <a href="https://www.linkedin.com/in/alexis-e-loza/" target="_blank"><i className="material-icons" >supervisor_account</i>Linkedin</a>
            <a href="https://github.com/Alexiseloza" target="_blank"><i className="material-icons" >code</i>GitHub</a>
        </div>
    )
}

export default Footer
