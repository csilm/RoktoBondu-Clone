import './SearchMain.css'

const SearchMain = () => {
    return (
        <div className='box-heading'>
            <h2 className='headingList'>A+ রক্তবন্ধুর তালিকা</h2>
            <div className='card'>
                <h3 className='name'>মো: ফিরোজ ইফতেখার</h3>

                <p className='address'>Permanent Address: <small>
                    <span>পঞ্চগড়</span>
                    <span>জালাসী পাড়া, পঞ্চগড় সদর, পঞ্চগড়।</span>
                </small></p>
                <p className='address'>Present Address: <small>
                    <span>পঞ্চগড়</span>
                    <span>জালাসী পাড়া, পঞ্চগড় সদর, পঞ্চগড়।</span>
                </small></p>
                <h5>firoz@gmail.com</h5>
                <h5>01717063269</h5>
                <h6 className='date'>সর্বশেষ রক্তদান : 12/February/2022 </h6>
            </div>
        </div>

    );
};

export default SearchMain;