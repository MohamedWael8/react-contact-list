import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

const Contact = ({ name , phoneNumber , email , jobTitleName , code , deleteContact , deletable}) =>
{
    var del = deletable;
    changeDel()
    {
        del = !del;
        console.log(del);
        
    }
    return(
        <div>
            <div className="card">
                <img className="card-img-top"></img>

                <div className="card-block">
                    <h4 className="card-title">{name}</h4>
                    <input type="checkbox" onChange={()=> changeDel() }></input>
                    <div className="meta">
                        <p>{phoneNumber}</p>
                        <p>{email}</p>
                        <p>{jobTitleName}</p>
                    </div>
                    <button className="btn btn-primary" disabled={del} value={code} onClick={()=>deleteContact(code)}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Contact;