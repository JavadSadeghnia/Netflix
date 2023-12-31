import './assets/RightBox.css'

const RightBox = () => {
    return (
        <>
            <div className='RightBox'>
                <select name="language" id="language">
                    <option value="English">English</option>
                    <option value="Netherlands">Dutch</option>
                </select>
                <button>Sign In</button>
            </div>
        </>
    );
}

export default RightBox;