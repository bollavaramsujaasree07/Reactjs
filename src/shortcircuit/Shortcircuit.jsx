const hasnotification = true; 
function Shortcircuit() {

    return(
        <div>
        <h1> Dashboard</h1>
        <h1> ____________________</h1>
        {hasnotification && <p> you have new notification</p>}
        </div>
    );
}
export default Shortcircuit; 