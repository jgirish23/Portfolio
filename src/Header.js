import './Header.css';

function Header(){
    const img_adderss="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZdgV5S9C5GWwq_c7Zz0iuevDw0j4oR6Igzg&usqp=CAU";
    return(
        <div className="header">
            <img className="my_pic" src={img_adderss} alt={img_adderss}></img>
            <div className="name">
                <h3 >
                    JAKKALA GIRISH
                </h3>
                <p>SE-IT</p>
            </div>
        </div>
    );
}
export default Header;